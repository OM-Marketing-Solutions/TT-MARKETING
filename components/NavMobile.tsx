'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

/**
 * Mobile Navigation Component - Fixed for Mobile
 * 
 * Features:
 * - Proper background with blur effect
 * - Visible close button
 * - High contrast menu items
 * - Touch-friendly sizing
 * - Overlay backdrop
 * - No white screen flash
 */

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Categories', href: '/categories' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
];

export default function NavMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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

    if (!mounted) {
        return (
            <button
                className="lg:hidden p-3 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
            >
                <Menu size={24} className="text-white" />
            </button>
        );
    }

    return (
        <>
            {/* Hamburger Menu Button - Mobile only */}
            <button
                onClick={toggleMenu}
                className="lg:hidden p-3 rounded-lg text-white hover:bg-white/10 transition-colors relative z-50"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>

            {/* Mobile Menu Overlay - SOLID Dark backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden animate-fade-in"
                    onClick={closeMenu}
                    aria-hidden="true"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        backdropFilter: 'blur(10px)',
                    }}
                />
            )}

            {/* Mobile Menu Slide-in Panel - COMPLETELY SOLID */}
            <nav
                id="mobile-menu"
                className={`fixed top-0 right-0 bottom-0 w-80 shadow-2xl z-50 transform transition-all duration-300 ease-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                aria-label="Mobile navigation"
                style={{
                    backgroundColor: '#000000',
                    borderLeft: '2px solid rgba(16, 185, 129, 0.5)',
                }}
            >
                {/* Additional Solid Black Layer */}
                <div className="absolute inset-0 bg-black pointer-events-none" style={{ zIndex: 1 }} />

                {/* Gradient Glow Effect - Very Subtle */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" style={{ zIndex: 2 }} />

                <div className="relative h-full flex flex-col p-6" style={{ zIndex: 10 }}>
                    {/* Close Button - Top Right - Clearly Visible */}
                    <button
                        onClick={closeMenu}
                        className="absolute top-6 right-6 p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-emerald-500/50 transition-all duration-300 group"
                        aria-label="Close navigation menu"
                    >
                        <X size={24} className="text-white group-hover:text-emerald-400 transition-colors" />
                    </button>

                    {/* Logo/Brand */}
                    <div className="mb-12 mt-4">
                        <Link href="/" onClick={closeMenu} className="block">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                                    <span className="text-2xl font-black text-white">TT</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-white">TT Marketing</h2>
                                    <p className="text-xs text-emerald-400">Precision Solutions</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation Links - High Contrast */}
                    <ul className="space-y-2 flex-1">
                        {navLinks.map((link, index) => (
                            <li key={link.label} style={{ animationDelay: `${index * 50}ms` }} className="animate-slide-in-right">
                                <Link
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="group block px-5 py-4 rounded-xl text-white hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-cyan-500/20 border border-transparent hover:border-emerald-500/30 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                                            {link.label}
                                        </span>
                                        <div className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-emerald-500/20 flex items-center justify-center transition-all group-hover:scale-110">
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Bottom Contact Info */}
                    <div className="mt-auto pt-6 border-t border-white/10">
                        <a
                            href="tel:+919898579707"
                            className="block px-5 py-3 text-center bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
                        >
                            Call: +91 98985 79707
                        </a>
                        <p className="text-center text-sm text-gray-400 mt-3">
                            Mon - Sat | 9:00 AM - 6:00 PM
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
}
