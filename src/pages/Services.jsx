import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Brain, Shield, CheckCircle2,
    ArrowRight, Users, MessageSquare, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import behavioralImg from '../assets/behavioral-health.png';

const Services = () => {
    const animations = {
        fadeIn: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 } },
        slideUp: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
    };

    const therapyServices = [
        { title: "Emotional Support", desc: "Compassionate help for seniors facing anxiety, depression, or loneliness." },
        { title: "Memory & Cognitive Care", desc: "Specialized support for those living with dementia or memory changes." },
        { title: "Grief Counseling", desc: "Patient listening and guidance through the loss of loved ones or independence." },
        { title: "Family Support", desc: "Working with families to ensure everyone feels supported and informed." }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div {...animations.slideUp} className="max-w-3xl">
                        <h1 className="text-6xl lg:text-8xl mb-8 leading-tight">
                            Compassionate <span className="text-primary italic">Support</span> for a Better Quality of Life
                        </h1>
                        <p className="text-2xl text-slate-700 mb-10 leading-relaxed max-w-2xl">
                            We provide behavioral health and emotional support services directly in your home. Our goal is simple: to help you feel your best, every single day.
                        </p>
                        <Link to="/contact" className="btn-primary inline-flex">
                            Talk to Us Today <ArrowRight className="ml-3 w-6 h-6" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Clear Service Listing */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-5xl mb-6">Our Services</h2>
                        <p className="text-2xl text-slate-600 max-w-2xl">We focus on the personal side of healthcare, ensuring your emotional and mental well-being is prioritized.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {therapyServices.map((s, i) => (
                            <motion.div
                                key={i}
                                {...animations.fadeIn}
                                className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 shadow-xl flex flex-col items-start"
                            >
                                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8">
                                    <Heart className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-black mb-4">{s.title}</h3>
                                <p className="text-xl text-slate-700 leading-relaxed mb-6">{s.desc}</p>
                                <div className="flex items-center text-primary font-black text-xl">
                                    Learn more <ArrowRight className="ml-2 w-6 h-6" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose On-Site Care */}
            <section className="section-padding bg-slate-900 text-white rounded-[4rem] mx-6 mb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl text-white mb-10">Care That Comes <span className="text-primary-light">To You</span></h2>
                        <div className="space-y-8">
                            {[
                                { title: "No Travel Stress", desc: "We visit you in your own living space, so there's no need for difficult trips to a clinic." },
                                { title: "Familiar Environment", desc: "Research shows seniors respond better to care in surroundings they know and love." },
                                { title: "Family Integration", desc: "Easier for family members to be part of the care plan when we're on-site." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-6">
                                    <div className="bg-white/10 p-3 rounded-2xl text-primary-light shrink-0">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-slate-400 text-xl">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <img src={behavioralImg} alt="Senior and clinician" className="rounded-[3rem] shadow-2xl" />
                        <div className="absolute -inset-4 border-2 border-white/10 rounded-[4rem] pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* Simple Steps */}
            <section className="section-padding bg-slate-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl mb-16">How to Get Started</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { step: "1", title: "Call Us", desc: "A simple phone call to discuss your needs." },
                            { step: "2", title: "Meet Us", desc: "We'll visit you for a friendly introduction." },
                            { step: "3", title: "Feel Better", desc: "We start a care plan tailored just for you." }
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-lg border border-slate-100">
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8">
                                    {s.step}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                                <p className="text-xl text-slate-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl mb-8">We're Here for You</h2>
                    <p className="text-2xl text-slate-600 mb-12">
                        Taking the first step is often the hardest, but we make it as easy as possible.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link to="/contact" className="btn-primary w-full sm:w-auto px-16">Contact Us</Link>
                        <a href="tel:5551234567" className="btn-secondary w-full sm:w-auto px-16">Call (555) 123-4567</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
