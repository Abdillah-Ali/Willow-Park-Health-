import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Shield, ArrowRight, CheckCircle2, Star,
    Activity, MessageSquare, Building2, Calendar, Mail,
    Clock, TrendingDown, HelpingHand, Stethoscope, Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import facilityImg from '../assets/facility-partner.png';

const Home = () => {
    const animations = {
        fadeIn: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 } },
        slideUp: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
    };

    const testimonials = [
        {
            quote: "The team from Willow Park has been a blessing. Having my therapy sessions right in my room has made me feel so much more comfortable and supported.",
            author: "Mrs. Elizabeth G.",
            role: "Resident for 3 Years",
            img: "https://i.pravatar.cc/150?img=32"
        },
        {
            quote: "As a facility director, I've seen a massive reduction in hospital readmissions since partnering with Willow Park. Their proactive clinical oversight is second to none.",
            author: "Mark Henderson",
            role: "Executive Director",
            img: "https://i.pravatar.cc/150?img=12"
        },
        {
            quote: "Knowing my mother has a dedicated medical team visiting her every week gives our family immense peace of mind. We couldn't be happier with the care.",
            author: "The Thompson Family",
            role: "Family Member",
            img: "https://i.pravatar.cc/150?img=44"
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-16">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src={heroImg}
                        alt="Senior Care"
                        className="w-full h-full object-cover opacity-60 ml-[20%] lg:ml-[30%] scale-105"
                    />
                    {/* Gradient Overlay to ensure text legibility on the left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
                    <motion.div {...animations.slideUp} className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 font-bold text-sm">
                            <Star className="w-4 h-4 fill-primary" />
                            <span>Trusted Senior Healthcare</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl mb-6 text-slate-900 leading-[1.1] font-bold tracking-tight">
                            Healthcare That <br />
                            <span className="text-primary italic">Comes to You.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-700 font-medium mb-10 max-w-2xl leading-relaxed">
                            We provide medical and emotional support directly in senior living communities. No travel, no stress—just professional care where you live.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/services" className="btn-primary px-10 py-4 shadow-2xl">
                                Our Services <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/about" className="btn-secondary px-10 py-4 shadow-sm">
                                Learn About Us
                            </Link>
                        </div>

                        <div className="mt-16 flex items-center space-x-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Resident" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-base">
                                <p className="font-bold text-slate-900 leading-none mb-1">Medicare Approved</p>
                                <p className="text-slate-500 text-sm">Trusted by 50+ Communities</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Benefits */}
            <section className="section-padding bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { icon: <Clock />, title: "No Travel Needed", desc: "We visit you in your home, saving you time and energy." },
                        { icon: <TrendingDown />, title: "No Extra Cost", desc: "Our services are covered by Medicare and most insurance plans." },
                        { icon: <Shield />, title: "Professional Care", desc: "Expert doctors and therapists dedicated to your well-being." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-start p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Simple Service Overview */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl mb-4">How We Can Help</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Simple, professional support for your health and happiness.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <motion.div whileHover={{ y: -5 }} className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl flex flex-col h-full">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl mb-4 font-bold">Emotional Support</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                                Helping you manage stress, loneliness, or just providing a friendly ear to listen when you need it most.
                            </p>
                            <Link to="/services" className="btn-primary w-full py-4">
                                View Service Details
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl flex flex-col h-full">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                                <Stethoscope className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl mb-4 font-bold">Medical Care</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                                Professional doctors who visit you to help manage your medications and keep you feeling healthy.
                            </p>
                            <Link to="/primary-care" className="btn-secondary w-full py-4 border-accent/20 hover:border-accent text-accent">
                                View Medical Care
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-slate-900 text-white rounded-[3rem] mx-6 mb-20 overflow-hidden relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl mb-4 text-white">Trusted by Families and Facilities</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Read what our residents and partners have to say about the Willow Park experience.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                {...animations.fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all group"
                            >
                                <Quote className="w-10 h-10 text-primary/30 mb-6 group-hover:text-primary transition-colors" />
                                <p className="text-lg text-slate-300 mb-8 leading-relaxed italic">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                        <img src={t.img} alt={t.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{t.author}</p>
                                        <p className="text-primary-light text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </section>

            {/* For Facilities */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...animations.fadeIn}>
                        <h2 className="text-4xl lg:text-6xl mb-10 leading-tight">Built for <br /><span className="text-primary italic">Community Leaders</span></h2>
                        <div className="space-y-8 mb-10">
                            {[
                                { title: "Reduce Staff Workload", desc: "We take care of the medical and emotional needs, so your staff can focus on daily care." },
                                { title: "Better Resident Health", desc: "Our proactive visits mean fewer emergency room calls and better overall wellness." },
                                { title: "Peace of Mind for Families", desc: "Families love knowing their loved ones have professional support right on-site." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-6">
                                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/contact" className="btn-primary inline-flex px-8 py-4">
                            Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                    <div className="hidden lg:block relative">
                        <img src={facilityImg} alt="Partner Facility" className="rounded-[2.5rem] shadow-2xl" />
                        <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                            <p className="text-5xl font-bold text-primary mb-1">30%</p>
                            <p className="text-slate-600 font-bold">Fewer Hospital Visits</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-primary text-white text-center rounded-t-[3rem]">
                <div className="max-w-3xl mx-auto py-6">
                    <h2 className="text-4xl lg:text-6xl mb-8 text-white font-bold">Ready to Start?</h2>
                    <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed">
                        We're here to answer any questions you have. <br />Experience the Willow Park difference today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link to="/contact" className="bg-white text-primary hover:bg-slate-100 px-12 py-4 rounded-xl font-bold text-xl transition-all shadow-xl">
                            Contact Us Now
                        </Link>
                        <a href="tel:5551234567" className="text-white text-lg font-bold underline underline-offset-4 decoration-2 hover:opacity-80 transition-all">
                            Call (555) 123-4567
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
