import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmail } from '@/lib/sendMail';

/**
 * Contact Form API Route
 * 
 * POST /api/contact
 * Handles contact form submissions with validation and email sending
 * 
 * Request body validation using Zod:
 * - name: required string
 * - email: required valid email
 * - phone: optional string
 * - message: required string (min 10 characters)
 */

// Validation schema using Zod
const contactSchema = z.object({
    name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
    email: z.string().email('Invalid email address'),
    phone: z.string().max(20, 'Phone number is too long').optional(),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message is too long'),
});

/**
 * POST handler for contact form
 */
export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();

        // Validate request data
        const validationResult = contactSchema.safeParse(body);

        if (!validationResult.success) {
            // Return validation errors
            return NextResponse.json(
                {
                    error: 'Validation failed',
                    details: validationResult.error.issues,
                },
                { status: 400 }
            );
        }

        const data = validationResult.data;

        // Basic sanitization (additional security layer)
        const sanitizedData = {
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            phone: data.phone?.trim(),
            message: data.message.trim(),
        };

        // Send email
        try {
            await sendContactEmail(sanitizedData);
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            return NextResponse.json(
                {
                    error: 'Failed to send message. Please try again later.',
                },
                { status: 500 }
            );
        }

        // Success response
        return NextResponse.json(
            {
                success: true,
                message: 'Your message has been sent successfully!',
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact API error:', error);

        // Generic error response (don't expose internal errors)
        return NextResponse.json(
            {
                error: 'An unexpected error occurred. Please try again later.',
            },
            { status: 500 }
        );
    }
}

/**
 * OPTIONS handler for CORS preflight
 */
export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            headers: {
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        }
    );
}
