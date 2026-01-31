import React from 'react';
import Link from 'next/link';
import { Award, Shield, Zap, Users, CheckCircle, ArrowRight, Scale, FileCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - TT Marketing | Professional Weighing Solutions',
    description: 'Established in 2019, TT Marketing provides high-quality weighing scales with certification services and stamping certificates. Your trusted partner for precision weighing solutions.',
};

export default function AboutPage() {
    const values = [
        {
            icon: Award,
            title: 'Product Quality',
            description: 'We maintain strict quality standards, ensuring every weighing scale meets industry requirements and delivers accurate, reliable performance.'
        },
        {
            icon: CheckCircle,
            title: 'Exact Requirements',
            description: 'Our customers receive exactly what they require. We carefully understand your needs and provide tailored weighing solutions that fit your specific applications.'
        },
        {
            icon: Shield,
            title: 'Reliable Service',
            description: 'Professional and dependable service is our commitment. From consultation to after-sales support, we ensure your complete satisfaction.'
        },
        {
            icon: FileCheck,
            title: 'Certification Services',
            description: 'We provide comprehensive certification services and issue stamping certificates for weighing scales, ensuring compliance with legal metrology standards.'
        }
    ];

    const services = [
        'Weighing Scale Sales & Installation',
        'Certification Services',
        'Stamping Certificates for Weighing Scales',
        'Calibration & Maintenance',
        'Technical Support',
        'Custom Weighing Solutions'
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
                            <Scale className="w-5 h-5 text-emerald-400" />
                            <span className="text-sm font-bold text-white tracking-wider uppercase">About TT Marketing</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            Your Trusted Partner in <span className="gradient-text-animated">Precision Weighing</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            Established in 2019, delivering quality weighing solutions with professional service and complete certification support
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="glass-strong rounded-3xl border border-white/10 p-12 max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-black text-white mb-6">
                                Our <span className="gradient-text-animated">Story</span>
                            </h2>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                Since our establishment in <span className="text-emerald-400 font-bold">2019</span>, TT Marketing has been committed to providing high-quality weighing solutions to businesses across various industries. Under the leadership of <span className="text-white font-bold">Mr. Tarif Mansuri</span>, we understand that precision matters in your operations, and we take pride in delivering weighing scales that meet your exact requirements.
                            </p>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                Our journey began with a simple mission: to offer reliable, accurate, and professional weighing solutions backed by excellent customer service. Today, we continue this commitment by not only supplying premium weighing equipment but also providing essential certification services and stamping certificates for weighing scales.
                            </p>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                Every customer deserves equipment they can trust. That's why we emphasize product quality, ensure you receive exactly what you require, and maintain reliable, professional service throughout your experience with us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Our Core <span className="gradient-text-animated">Values</span>
                        </h2>
                        <p className="text-lg text-gray-400">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="glass-strong rounded-3xl border border-white/10 p-8 hover:border-emerald-500/30 transition-all duration-300 hover-lift"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl border border-white/10 flex items-center justify-center glow-blue">
                                            <Icon className="w-8 h-8 text-emerald-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="glass-strong rounded-3xl border border-white/10 p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black text-white mb-4">
                                Our <span className="gradient-text-animated">Services</span>
                            </h2>
                            <p className="text-lg text-gray-400">
                                Comprehensive weighing solutions and certification support
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-300">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="text-center glass-strong rounded-3xl border border-white/10 p-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                            Why Choose <span className="gradient-text-animated">TT Marketing</span>?
                        </h2>

                        <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-300 mb-8">
                            <p>
                                We combine <span className="text-emerald-400 font-bold">industry expertise</span> with a customer-first approach. From helping you select the right weighing equipment to providing ongoing certification and support, we're with you every step of the way.
                            </p>
                            <p>
                                Our focus on <span className="text-emerald-400 font-bold">quality, accuracy, and reliability</span> ensures that you get weighing solutions that perform consistently and meet all regulatory requirements.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                            >
                                View Products
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/20 text-white font-bold rounded-xl hover:border-emerald-500/50 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
