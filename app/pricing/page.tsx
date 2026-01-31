import React from 'react';
import Link from 'next/link';
import { Check, X, Sparkles, Shield, Zap, Phone, Mail, ArrowRight, Package } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing - TT Marketing | Weighing Scale Solutions',
    description: 'Affordable pricing for precision weighing scales. Custom quotes available for all industrial and commercial weighing solutions.',
};

export default function PricingPage() {
    const pricingTiers = [
        {
            name: 'Basic',
            description: 'Perfect for small retail shops',
            priceRange: '₹5,000 - ₹15,000',
            features: [
                'Digital Table Top Scales',
                'Up to 30kg capacity',
                'Basic LED/LCD display',
                'AC/DC operation',
                'Tare function',
                '1-year warranty',
            ],
            notIncluded: [
                'Receipt printer',
                'Barcode support',
                'PC connectivity',
            ],
            cta: 'Get Quote',
            popular: false,
        },
        {
            name: 'Professional',
            description: 'Ideal for grocery stores & markets',
            priceRange: '₹25,000 - ₹50,000',
            features: [
                'Receipt Printer Scales',
                'Up to 60kg capacity',
                'Thermal receipt printing',
                'Price computing function',
                'Barcode label support',
                'PLU memory (100+ products)',
                'Dual display',
                'RS-232/USB connectivity',
                '2-year warranty',
            ],
            notIncluded: [],
            cta: 'Get Quote',
            popular: true,
        },
        {
            name: 'Industrial',
            description: 'Heavy-duty solutions for warehouses',
            priceRange: '₹75,000 - ₹5,00,000+',
            features: [
                'Platform & Floor Scales',
                'Up to 5000kg+ capacity',
                'Stainless steel construction',
                'IP65/IP67 waterproof (optional)',
                'Remote indicator',
                'Ramps included',
                'Data logging',
                'PC/Network integration',
                'Calibration certificate',
                '3-year warranty',
                'Free installation',
            ],
            notIncluded: [],
            cta: 'Contact Sales',
            popular: false,
        },
    ];

    const faqs = [
        {
            question: 'Do you offer customization?',
            answer: 'Yes! We provide custom weighing solutions tailored to your specific requirements including platform size, capacity, and special features.',
        },
        {
            question: 'What is the warranty period?',
            answer: 'Our products come with 1-3 years warranty depending on the model. Extended warranty options are available.',
        },
        {
            question: 'Do you provide installation?',
            answer: 'Yes, we provide free installation for industrial-grade scales. For basic scales, installation guidance is included.',
        },
        {
            question: 'Are spare parts available?',
            answer: 'Yes, we maintain stock of all spare parts including load cells, indicators, platforms, and accessories.',
        },
        {
            question: 'Do you offer bulk discounts?',
            answer: 'Absolutely! We offer competitive pricing for bulk orders and long-term contracts. Contact us for a custom quote.',
        },
    ];

    return (
        <main className="pt-24 min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                <div className="container-constraint relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full border border-white/20 mb-4">
                            <Sparkles className="w-5 h-5 text-emerald-400" />
                            <span className="text-sm font-bold text-white tracking-wider uppercase">Transparent Pricing</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            Simple, <span className="gradient-text-animated">Affordable Pricing</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            Quality weighing solutions for every budget. Get a custom quote tailored to your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative glass-strong rounded-3xl border p-8 transition-all duration-500 hover-lift ${tier.popular
                                    ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/20'
                                    : 'border-white/10'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 rounded-full">
                                        <span className="text-sm font-bold text-white">Most Popular</span>
                                    </div>
                                )}

                                <div className="space-y-6">
                                    {/* Header */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                        <p className="text-gray-400 text-sm">{tier.description}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="py-4">
                                        <p className="text-3xl font-black text-emerald-400">{tier.priceRange}</p>
                                        <p className="text-sm text-gray-500 mt-1">*Prices vary by specifications</p>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3">
                                        {tier.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mt-0.5">
                                                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                        {tier.notIncluded.map((feature, idx) => (
                                            <li key={`not-${idx}`} className="flex items-start gap-3 opacity-50">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mt-0.5">
                                                    <X className="w-3 h-3 text-gray-500" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm text-gray-500">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        href="#contact"
                                        className={`block w-full text-center py-3 px-6 rounded-xl font-bold transition-all duration-300 ${tier.popular
                                            ? 'bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-emerald-500/50'
                                            : 'glass border border-white/20 text-white hover:border-emerald-500/50'
                                            }`}
                                    >
                                        {tier.cta}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Solutions CTA */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="glass-strong rounded-3xl border border-white/10 p-12 text-center">
                        <Package className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                        <h2 className="text-4xl font-black text-white mb-4">Need a Custom Solution?</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            We specialize in building custom weighing systems for unique industrial requirements.
                            Get a personalized quote with our expert team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="tel:+919898579707"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                Call: +91 98985 79707
                            </Link>
                            <Link
                                href="mailto:ttmarketing999@gmail.com"
                                className="inline-flex items-center gap-3 px-8 py-4 glass border border-white/20 text-white font-bold rounded-xl hover:border-emerald-500/50 transition-all"
                            >
                                <Mail className="w-5 h-5" />
                                Email Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Frequently Asked <span className="gradient-text-animated">Questions</span>
                        </h2>
                        <p className="text-lg text-gray-400">
                            Have questions? We've got answers.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="glass-strong rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="text-center glass-strong rounded-3xl border border-white/10 p-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Browse our products or contact us for a custom quote
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                            >
                                View Products
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#contact"
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
