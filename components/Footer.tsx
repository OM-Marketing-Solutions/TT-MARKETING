import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Sparkles } from 'lucide-react';

/**
 * Footer Component - Redesigned with Glassmorphism
 * 
 * Matches the dark theme with glass effects used throughout the site
 * - Modern glassmorphism aesthetic
 * - Gradient accents and hover effects
 * - Responsive grid layout
 */

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ];

    const contactInfo = [
        { icon: Phone, label: '+91 98985 79707', href: 'tel:+919898579707' },
        { icon: Mail, label: 'ttmarketing999@gmail.com', href: 'mailto:ttmarketing999@gmail.com' },
        { icon: MapPin, label: 'Kapadvanj, Gujarat, India', href: null },
    ];

    const socialLinks = [
        {
            icon: Facebook,
            label: 'Facebook',
            href: 'https://facebook.com',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Instagram,
            label: 'Instagram',
            href: 'https://www.instagram.com/mansuri_tarif999',
            color: 'from-pink-500 via-purple-500 to-orange-500'
        },
    ];

    return (
        <footer className="relative bg-black overflow-hidden border-t border-white/10">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500 opacity-10 blur-[100px] rounded-full animate-pulse-glow" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500 opacity-10 blur-[100px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container-constraint relative z-10 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-xl border border-white/10">
                            <Sparkles className="w-5 h-5 text-emerald-400" />
                            <h3 className="text-xl font-black text-white">TT Marketing</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Precision weighing solutions engineered for accuracy, durability, and long-term performance across industries.
                        </p>
                        <div className="pt-4">
                            <p className="text-sm text-gray-500 mb-2">Business Hours</p>
                            <p className="text-white font-semibold">Mon-Sat: 9AM - 6PM</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
                            Get In Touch
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                const content = (
                                    <div className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50 transition-all duration-300">
                                            <Icon className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <span className="text-sm pt-2">{item.label}</span>
                                    </div>
                                );

                                return item.href ? (
                                    <li key={index}>
                                        <a href={item.href}>{content}</a>
                                    </li>
                                ) : (
                                    <li key={index}>{content}</li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
                            Follow Us
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="group relative"
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-2xl`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        {/* Glow effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10`} />
                                    </a>
                                );
                            })}
                        </div>
                        <p className="text-sm text-gray-500 pt-4">
                            Stay connected for updates, promotions, and industry insights.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="glass-strong rounded-2xl border border-white/10 p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                        <p className="text-gray-400">
                            © {currentYear} <span className="text-white font-semibold">TT Marketing</span>. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <span className="text-gray-700">•</span>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
