import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Shield, ArrowRight, CheckCircle2, Star,
    Activity, MessageSquare, Building2, Calendar, Mail,
    Clock, TrendingDown, HelpingHand, Stethoscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import behavioralImg from '../assets/behavioral-health.png';
import primaryImg from '../assets/primary-care.png';
import facilityImg from '../assets/facility-partner.png';

const Home = () => {
    const [email, setEmail] = useState('');

    const animations = {
        fadeIn: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 } },
        slideUp: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img src={heroImg} alt="Senior Care" className="w-full h-full object-cover opacity-20 scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div {...animations.slideUp} className="max-w-4xl">
                        <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-10 font-black text-lg">
                            <Star className="w-6 h-6 fill-primary" />
                            <span>Trusted Senior Healthcare</span>
                        </div>
                        <h1 className="text-6xl lg:text-9xl mb-8 text-slate-950 leading-[1.05] font-black tracking-tight">
                            Healthcare That <br />
                            <span className="text-primary italic">Comes to You.</span>
                        </h1>
                        <p className="text-2xl lg:text-3xl text-slate-800 mb-12 max-w-2xl leading-relaxed font-medium">
                            We provide medical and emotional support directly in senior living communities. No travel, no stress—just professional care where you live.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link to="/services" className="btn-primary min-w-[240px] py-6 text-2xl shadow-2xl">
                                Our Services <ArrowRight className="ml-3 w-7 h-7" />
                            </Link>
                            <Link to="/about" className="btn-secondary min-w-[240px] py-6 text-2xl">
                                Learn About Us
                            </Link>
                        </div>

                        <div className="mt-20 flex items-center space-x-8">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-xl">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Resident" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-xl">
                                <p className="font-black text-slate-900">Medicare Approved</p>
                                <p className="text-slate-600 font-bold">Trusted by 50+ Communities</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Benefits */}
            <section className="section-padding bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: <Clock />, title: "No Travel Needed", desc: "We visit you in your home, saving you time and energy." },
                        { icon: <TrendingDown />, title: "No Extra Cost", desc: "Our services are covered by Medicare and most insurance plans." },
                        { icon: <Shield />, title: "Professional Care", desc: "Expert doctors and therapists dedicated to your well-being." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-start p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
                            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8">
                                {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                            </div>
                            <h3 className="text-3xl font-black mb-4">{item.title}</h3>
                            <p className="text-xl text-slate-700 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Simple Service Overview */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-6xl mb-6">How We Can Help</h2>
                        <p className="text-2xl text-slate-600 max-w-2xl mx-auto font-medium">Simple, professional support for your health and happiness.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-[4rem] p-12 border-2 border-slate-100 shadow-2xl flex flex-col h-full">
                            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10">
                                <Heart className="w-12 h-12" />
                            </div>
                            <h3 className="text-4xl mb-6 font-black">Emotional Support</h3>
                            <p className="text-2xl text-slate-700 mb-10 leading-relaxed flex-grow font-medium">
                                Helping you manage stress, loneliness, or just providing a friendly ear to listen when you need it most.
                            </p>
                            <Link to="/services" className="btn-primary w-full py-6 text-xl">
                                View Service Details
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-[4rem] p-12 border-2 border-slate-100 shadow-2xl flex flex-col h-full">
                            <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center text-accent mb-10">
                                <Stethoscope className="w-12 h-12" />
                            </div>
                            <h3 className="text-4xl mb-6 font-black">Medical Care</h3>
                            <p className="text-2xl text-slate-700 mb-10 leading-relaxed flex-grow font-medium">
                                Professional doctors who visit you to help manage your medications and keep you feeling healthy.
                            </p>
                            <Link to="/primary-care" className="btn-secondary w-full py-6 text-xl border-accent/20 hover:border-accent text-accent">
                                View Medical Care
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonial - Simple & Bold */}
            <section className="section-padding bg-slate-900 text-white rounded-[5rem] mx-6 mb-24">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-12">
                        <MessageSquare className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-4xl lg:text-5xl font-black leading-tight mb-12 italic">
                        "The team from Willow Park has been a blessing. Having my therapy sessions right in my room has made me feel so much more comfortable."
                    </p>
                    <div>
                        <p className="text-2xl font-black text-primary-light mb-2">Mrs. Elizabeth G.</p>
                        <p className="text-xl text-slate-400 font-bold">Resident for 3 Years</p>
                    </div>
                </div>
            </section>

            {/* For Facilities - Direct and Professional */}
            <section className="section-padding relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div {...animations.fadeIn}>
                        <h2 className="text-5xl lg:text-7xl mb-12">Built for <br /><span className="text-primary italic">Community Leaders</span></h2>
                        <div className="space-y-10 mb-16">
                            {[
                                { title: "Reduce Staff Workload", desc: "We take care of the medical and emotional needs, so your staff can focus on daily care." },
                                { title: "Better Resident Health", desc: "Our proactive visits mean fewer emergency room calls and better overall resident wellness." },
                                { title: "Peace of Mind for Families", desc: "Families love knowing their loved ones have professional support right on-site." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-8">
                                    <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                                        <Building2 className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-extrabold mb-3">{item.title}</h4>
                                        <p className="text-2xl text-slate-700 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/contact" className="btn-primary inline-flex px-12 py-6 text-2xl">
                            Request a Partnership Meeting <ArrowRight className="ml-3 w-7 h-7" />
                        </Link>
                    </motion.div>
                    <div className="hidden lg:block relative">
                        <img src={facilityImg} alt="Partner Facility" className="rounded-[4rem] shadow-2xl grayscale" />
                        <div className="absolute -bottom-10 -left-10 bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-slate-50">
                            <p className="text-6xl font-black text-primary mb-2 italic">30%</p>
                            <p className="text-xl font-bold text-slate-700">Fewer Hospital <br />Visits on Average</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="section-padding bg-primary text-white text-center rounded-t-[5rem]">
                <div className="max-w-4xl mx-auto py-10">
                    <h2 className="text-6xl lg:text-8xl mb-10 text-white font-black">Ready to Start?</h2>
                    <p className="text-3xl text-white/90 mb-16 font-medium leading-relaxed">
                        We're here to answer any questions you have. <br />Experience the Willow Park difference today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                        <Link to="/contact" className="bg-white text-primary hover:bg-slate-100 px-16 py-8 rounded-[2.5rem] font-black text-3xl transition-all shadow-2xl hover:scale-105 active:scale-95">
                            Contact Us Now
                        </Link>
                        <a href="tel:5551234567" className="text-white text-2xl font-black underline underline-offset-8 decoration-4 hover:opacity-80 transition-all">
                            Call (555) 123-4567
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
