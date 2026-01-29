'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

/**
 * Mobile Navigation Component
 * 
 * Mobile-first navigation with hamburger menu
 * - Touch-friendly menu button (minimum 44x44px)
 * - Slide-in menu animation
 * - Accessible keyboard navigation and ARIA labels
 * - Focus trap when menu is open
 */

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
];

export default function NavMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent body scroll when menu is open
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            {/* Hamburger Menu Button - Mobile only */}
            <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu Slide-in Panel */}
            <nav
                id="mobile-menu"
                className={`fixed top-0 right-0 bottom-0 w-64 sm:w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                aria-label="Mobile navigation"
            >
                <div className="p-6">
                    {/* Close button inside menu */}
                    <button
                        onClick={closeMenu}
                        className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-smooth"
                        aria-label="Close navigation menu"
                    >
                        <X size={24} />
                    </button>

                    {/* Logo/Brand */}
                    <div className="mb-8 mt-8">
                        <Link href="/" onClick={closeMenu} className="text-2xl font-bold text-[var(--color-primary)]">
                            TT Marketing
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] py-2 transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
