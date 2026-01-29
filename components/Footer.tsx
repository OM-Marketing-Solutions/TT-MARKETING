import React from 'react';
import Link from 'next/link';
import Container from './Container';

/**
 * Footer Component
 * 
 * Mobile-first footer with company info, links, and social media
 * - Responsive grid layout
 * - Accessible links with proper focus states
 * - SEO-friendly structure
 */

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-secondary-dark)] text-white py-8 md:py-12">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">TT Marketing</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Your trusted partner for innovative marketing solutions and business growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-300 hover:text-[var(--color-accent)] transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#products"
                                    className="text-gray-300 hover:text-[var(--color-accent)] transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="text-gray-300 hover:text-[var(--color-accent)] transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="text-gray-300 hover:text-[var(--color-accent)] transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>
                                <a
                                    href="mailto:contact@ttmarketing.com"
                                    className="hover:text-[var(--color-accent)] transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    ttmarketing999@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    className="hover:text-[var(--color-accent)] transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    +91 98985 79707
                                </a>
                            </li>
                            <li className="text-gray-300">
                                Kapadvanj, Gujarat
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[var(--color-accent)] transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                                aria-label="Follow us on Facebook"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                        
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; {currentYear} TT Marketing. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
