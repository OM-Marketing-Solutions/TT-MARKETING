'use client';

import React, { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Zap, Shield, Sparkles, Award } from 'lucide-react';

interface FormData {
    fullName: string;
    companyName: string;
    mobile: string;
    email: string;
    location: string;
    productCategory: string;
    capacityRequirement: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        companyName: '',
        mobile: '',
        email: '',
        location: '',
        productCategory: '',
        capacityRequirement: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const productCategories = [
        'Digital Table Top Weighing Scales',
        'Receipt Printer Weighing Scales',
        'Industrial Platform Weighing Scales',
        'Floor Weighing Scales',
        'Heavy-Duty Industrial Weighing Systems',
        'Load Cells & Industrial Components',
        'Other / Customized Solution',
    ];

    const trustBadges = [
        { icon: Zap, text: 'Fast Response', color: 'from-blue-500 to-blue-600' },
        { icon: CheckCircle, text: 'Custom Solutions', color: 'from-emerald-500 to-emerald-600' },
        { icon: Shield, text: 'Reliable Support', color: 'from-cyan-500 to-cyan-600' },
        { icon: Award, text: 'Expert Guidance', color: 'from-blue-500 to-cyan-500' },
    ];

    const contactInfo = [
        { icon: Phone, label: 'Phone', value: '+91-9898579707', href: 'tel:+91-9898579707' },
        { icon: Mail, label: 'Email', value: 'ttmarketing999@gmail.com', href: 'mailto:ttmarketing999@gmail.com' },
    ];

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus('idle');

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setSubmitStatus('success');
            setFormData({
                fullName: '',
                companyName: '',
                mobile: '',
                email: '',
                location: '',
                productCategory: '',
                capacityRequirement: '',
                message: '',
            });
            setErrors({});
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    return (
        <section id="contact" className="relative py-32 bg-black overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container-constraint relative z-10 space-y-16">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto space-y-6 animate-slide-in-up">
                    <div className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full border border-white/20">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm font-bold text-white tracking-wider uppercase">Get In Touch</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight text-shadow">
                        Let's Build
                        <span className="block gradient-text-animated">Together</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 font-light">
                        Ready to find the perfect weighing solution? Our experts are here to help.
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                    {trustBadges.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={index}
                                className="glass-strong p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover-lift text-center"
                            >
                                <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${badge.color} rounded-xl items-center justify-center mb-3`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <p className="text-sm font-bold text-white">{badge.text}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Form - Left Side (3 columns) */}
                    <div className="lg:col-span-3 glass-strong p-8 md:p-10 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                                <Send className="w-5 h-5 text-white" />
                            </div>
                            Send Us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <p className="text-sm text-red-400">{errors.fullName}</p>}
                                </div>

                                {/* Company Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        placeholder="Company Ltd."
                                    />
                                </div>

                                {/* Mobile */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Mobile Number *</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.mobile && <p className="text-sm text-red-400">{errors.mobile}</p>}
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
                                </div>

                                {/* Location */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        placeholder="City, State"
                                    />
                                </div>

                                {/* Product Category */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Product Category</label>
                                    <select
                                        name="productCategory"
                                        value={formData.productCategory}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 glass border border-white/20 rounded-xl text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    >
                                        <option value="">Select a category</option>
                                        {productCategories.map((cat) => (
                                            <option key={cat} value={cat} className="bg-gray-900">{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Capacity */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300">Capacity Requirement</label>
                                <input
                                    type="text"
                                    name="capacityRequirement"
                                    value={formData.capacityRequirement}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3.5 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    placeholder="e.g., 500kg, 1 ton"
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-5 py-3.5 glass border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                                {errors.message && <p className="text-sm text-red-400">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 animate-gradient text-white font-bold text-lg rounded-2xl hover-glow transition-all duration-500 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="glass-strong p-5 rounded-2xl border border-emerald-500/50 bg-emerald-500/10">
                                    <p className="text-emerald-400 font-semibold flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        Message sent successfully! We'll get back to you soon.
                                    </p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="glass-strong p-5 rounded-2xl border border-red-500/50 bg-red-500/10">
                                    <p className="text-red-400 font-semibold">
                                        Failed to send message. Please try again.
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info - Right Side (2 columns) */}
                    <div className="lg:col-span-2 space-y-4 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            const content = (
                                <div className="glass-strong p-4 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover-lift">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-semibold mb-1">{info.label}</p>
                                            <p className="text-white font-bold">{info.value}</p>
                                        </div>
                                    </div>
                                </div>
                            );

                            return info.href ? (
                                <a key={index} href={info.href}>{content}</a>
                            ) : (
                                <div key={index}>{content}</div>
                            );
                        })}

                        {/* Owner Image */}
                        <div className="glass-strong p-4 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                            <div className="relative w-full min-h-[32rem] rounded-xl overflow-hidden mb-4">
                                <img
                                    src="/images/mansuri.jpeg"
                                    alt="Mr. Tarif Mansuri - TT Marketing Owner"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <div className="text-center pt-2">
                                <h3 className="text-2xl font-black text-white tracking-wide">Mr. Tarif Mansuri</h3>
                                <p className="text-sm text-emerald-400 font-semibold mt-1">Founder & Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
