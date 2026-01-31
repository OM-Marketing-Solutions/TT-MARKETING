'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, FileText, Check, Zap, Award, Users, TrendingUp } from 'lucide-react';
import CatalogueModal from './CatalogueModal';

export interface HeroProps {
    headline: string;
    subheadline?: string;
    subcopy: string;
    imageSrc: string;
    imageAlt: string;
    phoneNumber?: string;
}

export default function Hero({
    headline,
    subheadline,
    subcopy,
    imageSrc,
    imageAlt,
    phoneNumber = '+91-9876543210',
}: HeroProps) {
    const [showCatalogueModal, setShowCatalogueModal] = useState(false);

    const metrics = [
        { value: '10+', label: 'Years', icon: Award },
        { value: '1000+', label: 'Installations', icon: TrendingUp },
        { value: '500+', label: 'Clients', icon: Users },
        { value: 'PAN India', label: 'Coverage', icon: Zap },
    ];

    return (
        <>
            <section className="relative min-h-screen bg-black overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {/* Gradient Orbs */}
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[140px] rounded-full animate-pulse-glow" />
                    <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500 opacity-25 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-cyan-500 opacity-15 blur-[130px] rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />

                    {/* Animated Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

                    {/* Floating Shapes */}
                    <div className="absolute top-20 left-20 w-20 h-20 border border-blue-500/20 rounded-xl animate-float" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-40 right-32 w-16 h-16 border border-emerald-500/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
                    <div className="absolute bottom-32 left-1/3 w-12 h-12 border border-cyan-500/20 rounded-lg animate-float" style={{ animationDelay: '2.5s' }} />
                </div>

                <div className="container-constraint relative z-10 min-h-screen flex items-center py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 w-full items-center">

                        {/* Left Content */}
                        <div className="space-y-8 animate-slide-in-up">
                            {/* Badge */}
                            {subheadline && (
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-strong rounded-full border border-white/20 group hover:border-emerald-500/50 transition-all duration-300 hover-glow">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-glow" />
                                    <span className="text-sm font-bold text-white tracking-wider uppercase">
                                        {subheadline}
                                    </span>
                                    <Zap className="w-4 h-4 text-emerald-400" />
                                </div>
                            )}

                            {/* Headline */}
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-shadow">
                                <span className="block text-white mb-2">
                                    Precision
                                </span>
                                <span className="block text-white mb-2">
                                    Weighing
                                </span>
                                <span className="block">
                                    <span className="gradient-text-animated">
                                        Solutions
                                    </span>
                                </span>
                            </h1>

                            {/* Subcopy */}
                            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
                                {subcopy}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="/contact"
                                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 animate-gradient text-white font-bold rounded-2xl overflow-hidden hover-glow transition-all duration-500 shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <Check className="w-6 h-6 relative z-10" />
                                    <span className="relative z-10 text-lg">Get a Quote</span>
                                </a>

                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="group inline-flex items-center gap-3 px-10 py-5 glass-strong hover:bg-white/10 border border-white/20 hover:border-blue-500/50 text-white font-bold rounded-2xl transition-all duration-300 hover-lift"
                                >
                                    <Phone className="w-6 h-6" />
                                    <span className="text-lg">Call Now</span>
                                </a>

                                <button
                                    onClick={() => setShowCatalogueModal(true)}
                                    className="group inline-flex items-center gap-3 px-10 py-5 glass-strong hover:bg-white/10 border border-white/20 hover:border-emerald-500/50 text-white font-bold rounded-2xl transition-all duration-300 hover-lift"
                                >
                                    <FileText className="w-6 h-6" />
                                    <span className="text-lg">Catalogue</span>
                                </button>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                                {metrics.map((metric, index) => {
                                    const Icon = metric.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group relative glass-strong p-6 rounded-2xl hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover-lift animate-slide-in-up"
                                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                                        >
                                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-blue">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="text-4xl font-black gradient-text-animated mb-1">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
                                                {metric.label}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="relative aspect-square max-w-2xl mx-auto">
                                {/* Rotating Ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-rotate" style={{ animationDuration: '30s' }} />
                                <div className="absolute inset-8 rounded-full border-2 border-dashed border-emerald-500/30 animate-rotate" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

                                {/* Glow Effects */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-emerald-500/20 to-cyan-500/30 blur-3xl opacity-60 animate-pulse-glow" />

                                {/* Image Container */}
                                <div className="relative h-full glass-strong rounded-3xl border border-white/20 overflow-hidden hover-lift group">
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-contain p-12 relative z-10"
                                        quality={90}
                                    />
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 glass rounded-2xl border border-blue-500/30 flex items-center justify-center animate-float glow-blue">
                                    <Check className="w-12 h-12 text-blue-400" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-28 h-28 glass rounded-2xl border border-emerald-500/30 flex items-center justify-center animate-float glow-green" style={{ animationDelay: '1s' }}>
                                    <Award className="w-14 h-14 text-emerald-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </section>

            <CatalogueModal
                isOpen={showCatalogueModal}
                onClose={() => setShowCatalogueModal(false)}
            />
        </>
    );
}
