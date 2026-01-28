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
        { icon: <Heart className="w-8 h-8" aria-hidden="true" />, title: "Emotional Support", desc: "Compassionate help for seniors facing anxiety, depression, or loneliness." },
        { icon: <Brain className="w-8 h-8" aria-hidden="true" />, title: "Cognitive Care", desc: "Specialized support for those living with dementia or memory changes." },
        { icon: <MessageSquare className="w-8 h-8" aria-hidden="true" />, title: "Grief Counseling", desc: "Patient listening and guidance through the loss of loved ones or independence." },
        { icon: <Users className="w-8 h-8" aria-hidden="true" />, title: "Family Support", desc: "Working with families to ensure everyone feels supported and informed." }
    ];

    return (
        <main className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-white" aria-labelledby="services-hero-heading">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...animations.slideUp}>
                            <h1 id="services-hero-heading" className="text-5xl lg:text-7xl mb-8 leading-[1.1] font-bold text-slate-900">
                                Compassionate <span className="text-primary italic">Support</span> for a Better Quality of Life
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                                We provide behavioral health and emotional support services directly in your home. Our goal is simple: to help you feel your best, every single day.
                            </p>
                            <Link to="/contact" className="btn-primary inline-flex px-10 py-5 rounded-2xl shadow-xl shadow-primary/20">
                                Talk to Us Today <ArrowRight className="ml-2 w-6 h-6" aria-hidden="true" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative lg:block hidden"
                        >
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src={behavioralImg}
                                    alt="A compassionate caregiver providing emotional support to a senior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative background shape */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Clear Service Listing */}
            <section className="section-padding bg-slate-50" aria-labelledby="our-services-heading">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center lg:text-left">
                        <h2 id="our-services-heading" className="text-3xl lg:text-5xl mb-4 font-bold">Our Services</h2>
                        <p className="text-lg text-slate-600 max-w-2xl">We focus on the personal side of healthcare, ensuring your emotional and mental well-being is prioritized.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {therapyServices.map((s, i) => (
                            <motion.article
                                key={i}
                                {...animations.fadeIn}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-start card-hover"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8" aria-hidden="true">
                                    {s.icon}
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{s.title}</h3>
                                <p className="text-slate-600 mb-8 text-lg leading-relaxed">{s.desc}</p>
                                <Link to="/contact" className="flex items-center text-primary font-bold text-lg hover:underline group">
                                    Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose On-Site Care */}
            <section className="section-padding bg-slate-900 text-white rounded-[4rem] mx-6 mb-24 overflow-hidden relative" aria-labelledby="why-choose-heading">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div>
                        <h2 id="why-choose-heading" className="text-4xl lg:text-6xl text-white mb-10 leading-tight">Care That Comes <br /><span className="text-primary-light italic font-serif">Directly To You</span></h2>
                        <div className="space-y-8">
                            {[
                                { title: "No Travel Stress", desc: "We visit you in your own living space, so there's no need for difficult trips to a clinic." },
                                { title: "Familiar Environment", desc: "Research shows seniors respond better to care in surroundings they know and love." },
                                { title: "Family Integration", desc: "Easier for family members to be part of the care plan when we're on-site." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-6">
                                    <div className="bg-white/10 p-3 rounded-2xl text-primary-light shrink-0" aria-hidden="true">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <img
                            src={behavioralImg}
                            alt="Caregiver interacting warmly with a senior in their home"
                            className="rounded-[3rem] shadow-2xl relative z-10"
                        />
                        <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] -z-10" aria-hidden="true"></div>
                    </div>
                </div>
            </section>

            {/* Simple Steps */}
            <section className="section-padding" aria-labelledby="getting-started-heading">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 id="getting-started-heading" className="text-4xl lg:text-5xl mb-20 font-bold">Getting Started is Simple</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { step: "1", title: "Free Consultation", desc: "A simple phone call to discuss your needs and how we can help." },
                            { step: "2", title: "Personal Introduction", desc: "We'll visit you for a friendly introduction and assessment." },
                            { step: "3", title: "Dedicated Care", desc: "We start a care plan tailored precisely to your goals." }
                        ].map((s, i) => (
                            <article key={i} className="relative group p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100 transition-all hover:bg-slate-50">
                                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform">
                                    {s.step}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">{s.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-slate-50 text-center" aria-labelledby="cta-heading">
                <div className="max-w-3xl mx-auto">
                    <h2 id="cta-heading" className="text-4xl lg:text-5xl mb-8 font-bold">We're Here to Listen</h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        Taking the first step toward better emotional well-being is a brave decision. We're here to make it as comfortable as possible.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link to="/contact" className="btn-primary w-full sm:w-auto px-12 py-5 text-lg">Send us a Message</Link>
                        <a href="tel:5551234567" className="btn-secondary w-full sm:w-auto px-12 py-5 text-lg">Call (555) 123-4567</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
