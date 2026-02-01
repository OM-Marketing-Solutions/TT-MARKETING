'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="lg:hidden p-3 rounded-lg text-white hover:bg-white/10 transition-colors relative z-50"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>

            {/* Solid Black Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden"
                    onClick={closeMenu}
                    aria-hidden="true"
                    style={{
                        backgroundColor: '#000000',
                        opacity: 0.98,
                    }}
                />
            )}

            {/* Mobile Menu - COMPLETELY OPAQUE WHITE BACKGROUND */}
            <nav
                id="mobile-menu"
                className={`fixed top-0 right-0 bottom-0 w-80 z-50 transform transition-all duration-300 ease-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                aria-label="Mobile navigation"
                style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: '-4px 0 20px rgba(0,0,0,0.5)',
                }}
            >
                <div className="h-full flex flex-col p-6" style={{ backgroundColor: '#FFFFFF' }}>
                    {/* Close Button */}
                    <button
                        onClick={closeMenu}
                        className="absolute top-6 right-6 p-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all duration-300"
                        aria-label="Close menu"
                        style={{ backgroundColor: '#e5e7eb' }}
                    >
                        <X size={24} className="text-gray-900" />
                    </button>

                    {/* Logo */}
                    <div className="mb-12 mt-4">
                        <Link href="/" onClick={closeMenu} className="block">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                                    <span className="text-2xl font-black text-white">TT</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-gray-900">TT Marketing</h2>
                                    <p className="text-xs text-emerald-600">Precision Solutions</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <ul className="space-y-2 flex-1">
                        {navLinks.map((link, index) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="group block px-5 py-4 rounded-xl text-gray-900 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-500 transition-all duration-300"
                                    style={{ backgroundColor: '#f9fafb' }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold group-hover:text-emerald-600" style={{ color: '#111827' }}>
                                            {link.label}
                                        </span>
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Info */}
                    <div className="mt-auto pt-6 border-t border-gray-300">
                        <a
                            href="tel:+919898579707"
                            className="block px-5 py-3 text-center text-white font-bold rounded-xl transition-all"
                            style={{
                                background: 'linear-gradient(90deg, #3b82f6, #10b981, #06b6d4)',
                            }}
                        >
                            Call: +91 98985 79707
                        </a>
                        <p className="text-center text-sm text-gray-600 mt-3">
                            Mon - Sat | 9:00 AM - 6:00 PM
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
}
