import React from 'react';
import Link from 'next/link';
import { Download, FileText, Video, BookOpen, Wrench, Shield, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resources - TT Marketing | Guides, Manuals & Support',
    description: 'Download product catalogs, user manuals, technical guides, and video tutorials for TT Marketing weighing scales and equipment.',
};

export default function ResourcesPage() {
    const resourceCategories = [
        {
            title: 'Product Catalogs',
            icon: BookOpen,
            description: 'Comprehensive product catalogs with specifications and pricing',
            color: 'from-blue-500 to-cyan-500',
            resources: [
                { name: '2026 Complete Product Catalog', size: '12 MB', format: 'PDF', link: '/docs/catalogue.pdf' },
                { name: 'Digital Scales Brochure', size: '3 MB', format: 'PDF', link: '/docs/digital_scales.pdf' },
                { name: 'Industrial Systems Guide', size: '8 MB', format: 'PDF', link: '/docs/industrial systems.pdf' },
            ],
        },
        {
            title: 'User Manuals',
            icon: FileText,
            description: 'Detailed user manuals and installation guides',
            color: 'from-emerald-500 to-green-500',
            resources: [
                { name: 'Table Top Scale User Manual', size: '2 MB', format: 'PDF', link: '/docs/Table Top Scale User Manual.pdf' },
                { name: 'Receipt Printer Scale Setup Guide', size: '4 MB', format: 'PDF', link: '/docs/catalogue.pdf' },
                { name: 'Platform Scale Installation Manual', size: '6 MB', format: 'PDF', link: '/docs/industrial systems.pdf' },
                { name: 'Load Cell Configuration Guide', size: '3 MB', format: 'PDF', link: '/docs/Calibration.pdf' },
            ],
        },
        {
            title: 'Technical Documentation',
            icon: Wrench,
            description: 'Technical specifications and maintenance guides',
            color: 'from-purple-500 to-pink-500',
            resources: [
                { name: 'Calibration Procedures', size: '1.5 MB', format: 'PDF', link: '/docs/Calibration.pdf' },
                { name: 'Troubleshooting Guide', size: '2 MB', format: 'PDF', link: '/docs/digital_scales.pdf' },
                { name: 'Maintenance Schedule Template', size: '500 KB', format: 'PDF', link: '/docs/catalogue.pdf' },
                { name: 'Technical Specifications Sheet', size: '1 MB', format: 'PDF', link: '/docs/industrial systems.pdf' },
            ],
        },
        {
            title: 'Video Tutorials',
            icon: Video,
            description: 'Step-by-step video guides for installation and use',
            color: 'from-orange-500 to-red-500',
            resources: [
                { name: 'How to Install Platform Scales', size: 'YouTube', format: 'Video', link: 'https://youtu.be/tNmqdqBv1M8' },
                { name: 'Calibration Walkthrough', size: 'YouTube', format: 'Video', link: 'https://youtu.be/zLcvQvX3wr4' },
                { name: 'Maintenance Best Practices', size: 'YouTube', format: 'Video', link: 'https://youtu.be/_gCBD6z5HmQ' },
                { name: 'Receipt Printer Setup Tutorial', size: 'YouTube', format: 'Video', link: 'https://youtu.be/lvCOtLaD_8w' },
            ],
        },
    ];

    const supportResources = [
        {
            title: 'Warranty Information',
            description: 'Download warranty certificates and claim procedures',
            icon: Shield,
        },
        {
            title: 'Software Downloads',
            description: 'PC software, drivers, and firmware updates',
            icon: Download,
        },
        {
            title: 'Compliance Documents',
            description: 'Certifications, legal metrology, and regulatory compliance',
            icon: CheckCircle,
        },
    ];

    return (
        <main className="pt-24 min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                <div className="container-constraint relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full border border-white/20 mb-4">
                            <Sparkles className="w-5 h-5 text-emerald-400" />
                            <span className="text-sm font-bold text-white tracking-wider uppercase">Support Center</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            <span className="gradient-text-animated">Knowledge Resources</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            Download manuals, guides, and technical documentation for all our products
                        </p>
                    </div>
                </div>
            </section>

            {/* Resource Categories */}
            <section className="relative py-12">
                <div className="container-constraint">
                    <div className="grid gap-12">
                        {resourceCategories.map((category, catIndex) => {
                            const IconComponent = category.icon;
                            return (
                                <div key={catIndex} className="space-y-6">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-4">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-black text-white">{category.title}</h2>
                                            <p className="text-gray-400">{category.description}</p>
                                        </div>
                                    </div>

                                    {/* Resources Grid */}
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {category.resources.map((resource, resIndex) => (
                                            <a
                                                key={resIndex}
                                                href={resource.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download={resource.format === 'PDF' ? resource.name : undefined}
                                                className="glass-strong rounded-2xl border border-white/10 p-6 text-left hover:border-emerald-500/50 transition-all duration-300 hover-lift group block"
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                                            {resource.name}
                                                        </h3>
                                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                                            <span className="px-2 py-1 glass rounded border border-white/10 text-xs font-bold text-emerald-400">
                                                                {resource.format}
                                                            </span>
                                                            <span>{resource.size}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <Download className="w-5 h-5 text-emerald-400" />
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Additional Support Resources */}
            <section className="relative py-12">
                <div className="container-constraint">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl font-black text-white mb-4">
                            Additional <span className="gradient-text-animated">Support</span>
                        </h2>
                        <p className="text-lg text-gray-400">
                            More resources to help you get the most out of your weighing equipment
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {supportResources.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="glass-strong rounded-3xl border border-white/10 p-8 text-center hover:border-emerald-500/50 transition-all duration-300 hover-lift"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                                        <IconComponent className="w-8 h-8 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6">{item.description}</p>
                                    <button className="px-6 py-2 glass border border-white/20 text-white font-semibold rounded-xl hover:border-emerald-500/50 transition-all text-sm">
                                        View Resources
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Need Help CTA */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="glass-strong rounded-3xl border border-white/10 p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-4xl font-black text-white mb-4">
                                    Can't Find What You Need?
                                </h2>
                                <p className="text-lg text-gray-400 mb-6">
                                    Our technical support team is ready to assist you with any questions about our products, installation, or maintenance.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-300">24/7 phone support available</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-300">Expert technical guidance</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-300">On-site installation support</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <Link
                                    href="tel:+919898579707"
                                    className="block w-full text-center px-8 py-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                                >
                                    Call: +91 98985 79707
                                </Link>
                                <Link
                                    href="mailto:ttmarketing999@gmail.com"
                                    className="block w-full text-center px-8 py-4 glass border border-white/20 text-white font-bold rounded-xl hover:border-emerald-500/50 transition-all"
                                >
                                    Email Support
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-4 transition-all mx-auto block w-fit"
                                >
                                    Submit a Support Request
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
