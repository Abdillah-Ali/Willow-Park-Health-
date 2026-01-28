import React from 'react';
import { motion } from 'framer-motion';
import {
    Stethoscope, Activity, Heart, Shield, CheckCircle2,
    Clock, ArrowRight, ClipboardPlus, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import primaryImg from '../assets/primary-care.png';

const PrimaryCare = () => {
    const animations = {
        fadeIn: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 } },
        slideUp: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
    };

    const clinicalServices = [
        { title: "Health Check-ups", desc: "Regular medical visits in your own home to monitor your health." },
        { title: "Managing Health Conditions", desc: "Expert help with diabetes, heart health, and high blood pressure." },
        { title: "Quick Medical Help", desc: "Support for minor illnesses or injuries without leaving your building." },
        { title: "Medication Help", desc: "We ensure you're taking the right medicines at the right times." }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div {...animations.slideUp} className="max-w-3xl">
                        <h1 className="text-6xl lg:text-8xl mb-8 leading-tight">
                            Medical Care That <span className="text-accent italic">Comes to You</span>
                        </h1>
                        <p className="text-2xl text-slate-700 mb-10 leading-relaxed max-w-2xl">
                            Our medical team visits you where you live. We focus on keeping you healthy and comfortable, without the stress of clinic visits.
                        </p>
                        <Link to="/contact" className="btn-primary bg-accent hover:bg-accent/80 border-none inline-flex">
                            Request Care <ArrowRight className="ml-3 w-6 h-6" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-5xl mb-6">Medical Support Services</h2>
                        <p className="text-2xl text-slate-600 max-w-2xl">We handle the medical details so you can focus on living your life well.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {clinicalServices.map((s, i) => (
                            <motion.div
                                key={i}
                                {...animations.fadeIn}
                                className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 shadow-xl flex flex-col items-start"
                            >
                                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent mb-8">
                                    <Stethoscope className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-black mb-4">{s.title}</h3>
                                <p className="text-xl text-slate-700 leading-relaxed mb-6">{s.desc}</p>
                                <div className="flex items-center text-accent font-black text-xl">
                                    Contact us to learn more <ArrowRight className="ml-2 w-6 h-6" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Proactive Model */}
            <section className="section-padding bg-slate-900 text-white rounded-[4rem] mx-6 mb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl text-white mb-6">Expertise and Reliability</h2>
                        <p className="text-2xl text-slate-400">Available whenever you or your community needs us.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: <Clock />, title: "24/7 Support", desc: "We're always just a phone call away for any medical questions." },
                            { icon: <Users />, title: "Dedicated Team", desc: "You'll see the same friendly faces who truly know your health history." },
                            { icon: <Shield />, title: "Peace of Mind", desc: "We handle the coordination between your doctors and your living community." }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-10 bg-white/5 rounded-[3rem] border border-white/10">
                                <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-accent/20">
                                    <div className="text-white">
                                        {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-extrabold mb-4">{item.title}</h4>
                                <p className="text-slate-400 text-xl leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-accent/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div {...animations.fadeIn}>
                        <h2 className="text-5xl mb-10">Better Health for a Better Life</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Fewer Hospital Visits", desc: "Our proactive care prevents many issues from becoming emergencies." },
                                { title: "Personalized Attention", desc: "You aren't just a number to us; we take the time to listen." },
                                { title: "Easy Communication", desc: "We talk to your family and your community staff so everyone is on the same page." }
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start space-x-6">
                                    <div className="bg-accent/10 p-3 rounded-2xl text-accent shrink-0">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">{benefit.title}</h4>
                                        <p className="text-slate-700 text-xl leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="relative">
                        <img src={primaryImg} alt="Clinician and senior" className="rounded-[3rem] shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl mb-8">Ready to Improve Your Care?</h2>
                    <p className="text-2xl text-slate-600 mb-12">
                        Let us show you how simple and effective on-site medical care can be.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link to="/contact" className="btn-primary bg-accent hover:bg-accent/80 border-none w-full sm:w-auto px-16">Talk to Us</Link>
                        <a href="tel:5551234567" className="btn-secondary w-full sm:w-auto px-16">Call (555) 123-4567</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrimaryCare;
