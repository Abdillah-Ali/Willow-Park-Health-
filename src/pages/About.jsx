import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Shield, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import facilityImg from '../assets/facility-partner.png';

const About = () => {
    const animations = {
        fadeIn: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 } },
        slideUp: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
    };

    const values = [
        { icon: <Heart className="w-12 h-12" />, title: "Compassion", desc: "We treat every resident like a member of our own family." },
        { icon: <Shield className="w-12 h-12" />, title: "Accessibility", desc: "Professional healthcare that comes directly to you, at no extra cost." },
        { icon: <Award className="w-12 h-12" />, title: "Excellence", desc: "Setting the highest clinical standards for senior care." },
        { icon: <Users className="w-12 h-12" />, title: "Collaboration", desc: "Working hand-in-hand with families and facility staff." }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-48 pb-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div {...animations.slideUp} className="max-w-4xl">
                        <h1 className="text-7xl lg:text-9xl mb-10 leading-tight">
                            A Passion for <span className="text-primary italic">Better Care.</span>
                        </h1>
                        <p className="text-3xl text-slate-700 leading-relaxed font-medium">
                            Willow Park Health was founded on a simple belief: that every senior deserves the best medical and emotional support, right where they live.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision - Simple & Bold */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div {...animations.fadeIn}>
                        <img src={facilityImg} alt="Senior Living Community" className="rounded-[4rem] shadow-2xl grayscale" />
                    </motion.div>
                    <div>
                        <div className="mb-16">
                            <h2 className="text-5xl mb-8">Our Mission</h2>
                            <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                                To improve the lives of seniors by providing professional, compassionate healthcare that visits them in their homes, removing the barriers of travel and cost.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-5xl mb-8">Our Vision</h2>
                            <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                                To be the most trusted name in senior healthcare, known for personal attention and clinical excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values - High Contrast Cards */}
            <section className="section-padding bg-slate-900 text-white rounded-[5rem] mx-6 mb-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl text-center mb-24">What We Stand For</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {values.map((v, i) => (
                            <div key={i} className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white mb-10">
                                    {v.icon}
                                </div>
                                <h3 className="text-4xl font-black mb-6">{v.title}</h3>
                                <p className="text-2xl text-slate-400 font-medium leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team - Humanized */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <h2 className="text-6xl mb-6">Expert Leadership</h2>
                    <p className="text-2xl text-slate-600 font-medium">The friendly faces behind our mission.</p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    {[
                        { name: "Sarah Jenkins", role: "Chief Clinical Officer", img: 32 },
                        { name: "Dr. Michael Chen", role: "Medical Director", img: 33 },
                        { name: "Elena Rodriguez", role: "Ops Director", img: 34 }
                    ].map((member, i) => (
                        <div key={i} className="text-center group">
                            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-10 border-8 border-slate-50 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                <img src={`https://i.pravatar.cc/300?img=${member.img}`} alt={member.name} className="w-full h-full object-cover grayscale" />
                            </div>
                            <h3 className="text-3xl font-black mb-2">{member.name}</h3>
                            <p className="text-2xl text-primary font-black uppercase tracking-widest">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-slate-50 text-center rounded-t-[5rem]">
                <h2 className="text-6xl mb-10 font-black">Ready to Partner?</h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                    <Link to="/contact" className="btn-primary px-16 py-6 text-2xl">Contact Us Today</Link>
                    <Link to="/services" className="btn-secondary px-16 py-6 text-2xl">Our Services</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
