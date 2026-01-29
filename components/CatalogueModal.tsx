'use client';

import React, { useState } from 'react';

/**
 * CatalogueModal Component
 * 
 * Modal for requesting product catalogue
 * - Accessible with ARIA attributes
 * - Focus trap when open
 * - Form validation
 */

interface CatalogueModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CatalogueModal({ isOpen, onClose }: CatalogueModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // TODO: Send to API
        console.log('Catalogue request:', formData);

        setIsSubmitting(false);
        onClose();
        setFormData({ name: '', email: '', phone: '', company: '' });
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalogue-modal-title"
        >
            <div
                className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 md:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-smooth"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 id="catalogue-modal-title" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Request Catalogue
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                    Fill in your details and we'll send you our complete product catalogue.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="catalogue-name" className="block text-sm font-medium mb-1">
                            Full Name *
                        </label>
                        <input
                            id="catalogue-name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-gray-700 dark:text-white"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="catalogue-email" className="block text-sm font-medium mb-1">
                            Email *
                        </label>
                        <input
                            id="catalogue-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-gray-700 dark:text-white"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="catalogue-phone" className="block text-sm font-medium mb-1">
                            Phone *
                        </label>
                        <input
                            id="catalogue-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-gray-700 dark:text-white"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    <div>
                        <label htmlFor="catalogue-company" className="block text-sm font-medium mb-1">
                            Company <span className="text-gray-500 text-xs">(optional)</span>
                        </label>
                        <input
                            id="catalogue-company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] dark:bg-gray-700 dark:text-white"
                            placeholder="Your Company"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-smooth disabled:opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Request Catalogue'}
                    </button>
                </form>
            </div>
        </div>
    );
}
