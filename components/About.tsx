import React from 'react';
import { Factory, Warehouse, ShoppingCart, Building2, Target, Zap, Award, Shield, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';

/**
 * About Component - Visually Stunning Design
 * Modern aesthetic with animations and premium effects
 */

export default function About() {
    const industries = [
        { icon: Factory, name: 'Manufacturing & Production', color: 'from-blue-500 to-blue-600' },
        { icon: Warehouse, name: 'Warehousing & Logistics', color: 'from-emerald-500 to-emerald-600' },
        { icon: ShoppingCart, name: 'Retail & Hospitality', color: 'from-cyan-500 to-cyan-600' },
        { icon: Building2, name: 'Commercial & Industry', color: 'from-blue-500 to-cyan-500' },
    ];

    const whatWeDo = [
        'Industrial Platform Weighing Scales',
        'Floor Weighing Scales',
        'Table Top Digital Scales',
        'Receipt Printer Scales',
        'Heavy-Duty Industrial Systems',
        'Load Cells & Components',
    ];

    const stats = [
        { icon: Award, value: '10+', label: 'Years Excellence' },
        { icon: Users, value: '500+', label: 'Happy Clients' },
        { icon: TrendingUp, value: '1000+', label: 'Installations' },
        { icon: Shield, value: '100%', label: 'Quality Guaranteed' },
    ];

    return (
        <section className="relative py-32 bg-black overflow-hidden" id="about">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container-constraint relative z-10 space-y-24">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto space-y-6 animate-slide-in-up">
                    <div className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full border border-white/20">
                        <Star className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-bold text-white tracking-wider uppercase">About Us</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight text-shadow">
                        Precision You Can
                        <span className="block gradient-text-animated">Trust</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                        With over a decade of excellence, TT Marketing delivers cutting-edge weighing solutions
                        engineered for accuracy, durability, and long-term performance across industries.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative glass-strong p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover-lift animate-slide-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 glow-blue">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <div className="text-5xl font-black gradient-text-animated mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - Mission & What We Do */}
                    <div className="space-y-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                        {/* Mission */}
                        <div className="glass-strong p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover-lift">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center glow-green">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                To provide high-precision, reliable weighing solutions that empower businesses
                                to achieve operational excellence and maintain the highest standards of accuracy.
                            </p>
                        </div>

                        {/* What We Do */}
                        <div className="glass-strong p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover-lift">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center glow-blue">
                                    <Zap className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">What We Do</h3>
                            </div>

                            <div className="grid gap-3">
                                {whatWeDo.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 group/item">
                                        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-300 font-medium group-hover/item:text-white group-hover/item:translate-x-1 transition-all">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Industries We Serve */}
                    <div className="space-y-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="glass-strong p-8 rounded-3xl border border-white/10">
                            <h3 className="text-3xl font-bold text-white mb-8">Industries We Serve</h3>

                            <div className="grid gap-6">
                                {industries.map((industry, idx) => {
                                    const Icon = industry.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="group relative glass p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover-lift"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                                    <Icon className="w-8 h-8 text-white" />
                                                </div>
                                                <span className="text-lg font-bold text-white group-hover:gradient-text-animated transition-all">
                                                    {industry.name}
                                                </span>
                                            </div>

                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none rounded-2xl" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="inline-flex flex-col items-center gap-6 glass-strong p-10 rounded-3xl border border-white/20">
                        <h4 className="text-3xl font-bold text-white">
                            Ready to Get Started?
                        </h4>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 animate-gradient text-white font-bold text-lg rounded-2xl hover-glow transition-all duration-500 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="relative z-10">Contact Us Today</span>
                            <Shield className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
