import nodemailer from 'nodemailer';

/**
 * Email Service Helper
 * 
 * Server-side utility for sending emails via SMTP
 * Uses nodemailer with environment-configured credentials
 * 
 * Environment variables required:
 * - SMTP_HOST: SMTP server hostname
 * - SMTP_PORT: SMTP server port
 * - SMTP_USER: SMTP username
 * - SMTP_PASSWORD: SMTP password
 * - SMTP_FROM: From email address
 * - CONTACT_EMAIL: Recipient email for contact form
 */

export interface EmailData {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

/**
 * Send contact form email
 * @param data - Form data containing name, email, phone, and message
 * @returns Promise that resolves when email is sent
 */
export async function sendContactEmail(data: EmailData): Promise<void> {
    // Validate environment variables
    const requiredEnvVars = [
        'SMTP_HOST',
        'SMTP_PORT',
        'SMTP_USER',
        'SMTP_PASSWORD',
        'SMTP_FROM',
        'CONTACT_EMAIL',
    ];

    for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
            throw new Error(`Missing required environment variable: ${envVar}`);
        }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465, // Use SSL for port 465
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    // Verify transporter configuration
    try {
        await transporter.verify();
    } catch (error) {
        console.error('SMTP transporter verification failed:', error);
        throw new Error('Email service configuration error');
    }

    // Email content (HTML and text versions for better deliverability)
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1e40af 0%, #374151 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px;">
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Name:</strong> ${data.name}</p>
          <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Email:</strong> <a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></p>
          ${data.phone ? `<p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Phone:</strong> <a href="tel:${data.phone}" style="color: #3b82f6;">${data.phone}</a></p>` : ''}
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
        
        <p style="margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center;">
          This email was sent from the TT Marketing contact form.
        </p>
      </div>
    </body>
    </html>
  `;

    const textContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}

---
This email was sent from the TT Marketing contact form.
  `;

    // Send email
    try {
        await transporter.sendMail({
            from: `"TT Marketing Contact Form" <${process.env.SMTP_FROM}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: data.email, // Allow direct reply to sender
            subject: `New Contact Form Submission from ${data.name}`,
            text: textContent,
            html: htmlContent,
        });

        console.log('Contact form email sent successfully');
    } catch (error) {
        console.error('Failed to send email:', error);
        throw new Error('Failed to send email');
    }
}
