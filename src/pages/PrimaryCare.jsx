import React from 'react';
import { motion } from 'framer-motion';
import {
    Stethoscope, Activity, Heart, Shield, CheckCircle2,
    Clock, ArrowRight, ClipboardPlus, Calendar, Users
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
            <section className="relative pt-32 pb-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...animations.slideUp}>
                            <h1 className="text-5xl lg:text-7xl mb-8 leading-[1.1] font-bold text-slate-900">
                                Medical Care That <br /><span className="text-accent italic">Comes to You</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                                Our medical team visits you where you live. We focus on keeping you healthy and comfortable, without the stress of clinic visits.
                            </p>
                            <Link to="/contact" className="btn-primary bg-accent hover:bg-accent/80 border-none inline-flex px-10 py-5 rounded-2xl shadow-xl shadow-accent/20">
                                Request Care Coordination <ArrowRight className="ml-2 w-6 h-6" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative lg:block hidden"
                        >
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                                <img src={primaryImg} alt="On-Site Medical Care" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold text-slate-900">Medical Support Services</h2>
                        <p className="text-lg text-slate-600 max-w-2xl">We handle the medical details so you can focus on living your life well.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {clinicalServices.map((s, i) => (
                            <motion.div
                                key={i}
                                {...animations.fadeIn}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-start card-hover"
                            >
                                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                                    <Stethoscope className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{s.title}</h3>
                                <p className="text-slate-600 mb-8 text-lg leading-relaxed">{s.desc}</p>
                                <Link to="/contact" className="flex items-center text-accent font-bold text-lg hover:underline group">
                                    Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Proactive Model */}
            <section className="section-padding bg-slate-900 text-white rounded-[4rem] mx-6 mb-24 overflow-hidden relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-6xl text-white mb-6 leading-tight">Expertise and <br /><span className="text-accent-light italic font-serif">Reliability</span></h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Available whenever you or your community needs us.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: <Clock />, title: "24/7 Support", desc: "We're always just a phone call away for any medical questions." },
                            { icon: <Users />, title: "Dedicated Team", desc: "You'll see the same friendly faces who truly know your health history." },
                            { icon: <Shield />, title: "Peace of Mind", desc: "We handle the coordination between your doctors and your living community." }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-10 bg-white/5 rounded-[3rem] border border-white/10">
                                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-accent/20">
                                    <div className="text-white">
                                        {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
            </section>

            {/* Benefits */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div {...animations.fadeIn}>
                        <h2 className="text-4xl lg:text-5xl mb-10 font-bold text-slate-900 leading-tight">Better Health for a <br /><span className="text-accent italic font-serif">Better Life</span></h2>
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
                                        <h4 className="text-2xl font-bold mb-2 text-slate-900">{benefit.title}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="relative hidden lg:block">
                        <img src={primaryImg} alt="Clinician and senior" className="rounded-[3rem] shadow-2xl relative z-10" />
                        <div className="absolute -inset-10 bg-accent/10 rounded-full blur-[100px] -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-slate-50 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl mb-8 font-bold text-slate-900">Ready to Improve Your Care?</h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        Let us show you how simple and effective on-site medical care can be. Experience the concierge difference today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link to="/contact" className="btn-primary bg-accent hover:bg-accent/80 border-none w-full sm:w-auto px-12 py-5 text-lg">Send us a Message</Link>
                        <a href="tel:5551234567" className="btn-secondary w-full sm:w-auto px-12 py-5 text-lg text-accent border-accent/20 hover:border-accent">Call (555) 123-4567</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrimaryCare;
