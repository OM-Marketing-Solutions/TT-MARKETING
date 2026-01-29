'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Package, Sparkles } from 'lucide-react';

export interface ProductCategoryCard {
    title: string;
    imageSrc: string;
    imageAlt: string;
    features: string[];
}

export interface ProductCategoriesProps {
    title?: string;
    subtitle?: string;
    categories?: ProductCategoryCard[];
}

const defaultCategories: ProductCategoryCard[] = [
    {
        title: 'Digital Table Top Weighing Scales',
        imageSrc: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.00.jpeg',
        imageAlt: 'Compact digital table top weighing scale',
        features: [
            'Compact design',
            'Stainless steel top',
            'High-precision sensors',
            'Retail & lab use',
        ],
    },
    {
        title: 'Receipt Printer Weighing Scales',
        imageSrc: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.01.jpeg',
        imageAlt: 'Receipt printer weighing scale',
        features: [
            'Built-in receipt printer',
            'Billing & barcode support',
            'Price computing function',
            'Retail integration',
        ],
    },
    {
        title: 'Industrial Platform Weighing Scales',
        imageSrc: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.02.jpeg',
        imageAlt: 'Heavy-duty industrial platform scale',
        features: [
            'Heavy-duty steel platform',
            'Stainless steel top',
            'High load capacity',
            'Industrial grade',
        ],
    },
    {
        title: 'Floor Weighing Scales',
        imageSrc: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.03.jpeg',
        imageAlt: 'Floor weighing scale with diamond plate',
        features: [
            'Diamond plate platform',
            'Heavy load handling',
            'Anti-slip surface',
            'Warehouse & logistics',
        ],
    },
    {
        title: 'Heavy-Duty Industrial Systems',
        imageSrc: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.04.jpeg',
        imageAlt: 'Heavy-duty industrial weighing system',
        features: [
            'Extra strong MS structure',
            'Industrial-grade indicators',
            'Shock-resistant body',
            'High tonnage capacity',
        ],
    },
    {
        title: 'Load Cells & Components',
        imageSrc: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.05.jpeg',
        imageAlt: 'Precision load cells and components',
        features: [
            'Precision load cells',
            'Heavy-duty components',
            'Custom fabrication',
            'Industrial mounting',
        ],
    },
];

export default function ProductCategories({
    title = 'Our Product Categories',
    subtitle = 'Comprehensive weighing solutions for every industrial and commercial need',
    categories = defaultCategories,
}: ProductCategoriesProps) {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container-constraint relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full border border-white/20 mb-4">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm font-bold text-white tracking-wider uppercase">Premium Products</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight text-shadow">
                        {title}
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 font-light">
                        {subtitle}
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative animate-slide-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-full glass-strong rounded-3xl border border-white/10 group-hover:border-blue-500/50 overflow-hidden transition-all duration-500 hover-lift">
                                {/* Top Gradient Bar */}
                                <div className="h-1.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                                {/* Content */}
                                <div className="p-8 space-y-6">
                                    {/* Icon Badge */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 glow-blue">
                                        <Package className="w-8 h-8 text-blue-400" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white min-h-[4rem] leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
                                        {category.title}
                                    </h3>

                                    {/* Image */}
                                    <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500">
                                        {/* Image Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <Image
                                            src={category.imageSrc}
                                            alt={category.imageAlt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                                            quality={85}
                                        />
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3">
                                        {category.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 group/item">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mt-0.5 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                                                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm text-gray-300 font-medium group-hover/item:text-white transition-colors">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Hover Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 animate-gradient text-white font-bold text-lg rounded-2xl hover-glow transition-all duration-500 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <span className="relative z-10">Get Custom Quote</span>

                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                    </a>
                </div>
            </div>
        </section>
    );
}
