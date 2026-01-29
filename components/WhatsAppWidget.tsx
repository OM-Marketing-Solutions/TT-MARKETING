'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

/**
 * WhatsAppWidget Component - Floating Chat Button
 * 
 * Displays a floating WhatsApp chat button in the bottom-right corner
 * Links directly to WhatsApp chat for instant customer communication
 */

export interface WhatsAppWidgetProps {
    phoneNumber?: string;
    message?: string;
}

export default function WhatsAppWidget({
    phoneNumber = '919876543210',
    message = 'Hello! I would like to inquire about your weighing solutions.',
}: WhatsAppWidgetProps) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-200 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />

            {/* Tooltip */}
            <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Chat with us on WhatsApp
            </span>
        </a>
    );
}
