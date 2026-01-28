import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Shield, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import facilityImg from '../assets/facility-partner.png';
import heroImg from '../assets/hero.png';

const About = () => {
    const animations = {
        fadeIn: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 } },
        slideUp: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
    };

    const values = [
        { icon: <Heart className="w-8 h-8" aria-hidden="true" />, title: "Compassion", desc: "We treat every resident like a member of our own family." },
        { icon: <Shield className="w-8 h-8" aria-hidden="true" />, title: "Accessibility", desc: "Professional healthcare that comes directly to you, at no extra cost." },
        { icon: <Award className="w-8 h-8" aria-hidden="true" />, title: "Excellence", desc: "Setting the highest clinical standards for senior care." },
        { icon: <Users className="w-8 h-8" aria-hidden="true" />, title: "Collaboration", desc: "Working hand-in-hand with families and facility staff." }
    ];

    return (
        <main className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-white" aria-labelledby="about-hero-heading">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...animations.slideUp}>
                            <h1 id="about-hero-heading" className="text-5xl lg:text-7xl mb-8 leading-[1.1] font-bold text-slate-900">
                                A Passion for <br /><span className="text-primary italic">Better Care.</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                                Willow Park Health was founded on a simple belief: that every senior deserves the best medical and emotional support, right where they live. We're on a mission to redefine what "at home" care looks like.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="relative lg:block hidden"
                        >
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src={heroImg}
                                    alt="A friendly care provider smiling with a senior patient"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-slate-50" aria-labelledby="mission-vision-heading">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...animations.fadeIn} className="hidden lg:block">
                        <img
                            src={facilityImg}
                            alt="Exterior of a partner senior living facility"
                            className="rounded-3xl shadow-xl grayscale"
                        />
                    </motion.div>
                    <div>
                        <div className="mb-12">
                            <h2 id="mission-vision-heading" className="text-3xl lg:text-5xl mb-6 font-bold text-slate-900">Our Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed lg:text-xl">
                                To improve the lives of seniors by providing professional, compassionate healthcare that visits them in their homes, removing the barriers of travel and cost.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-5xl mb-6 font-bold text-slate-900">Our Vision</h2>
                            <p className="text-lg text-slate-600 leading-relaxed lg:text-xl">
                                To be the most trusted name in senior healthcare, known for personal attention and clinical excellence across every community we serve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-slate-900 text-white rounded-[4rem] mx-6 mb-20 overflow-hidden relative" aria-labelledby="values-heading">
                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 id="values-heading" className="text-3xl lg:text-5xl text-center mb-16 font-bold">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <article key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-6" aria-hidden="true">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                                <p className="text-slate-400">{v.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" aria-hidden="true"></div>
            </section>

            {/* Team */}
            <section className="section-padding" aria-labelledby="team-heading">
                <div className="max-w-7xl mx-auto text-center mb-20">
                    <h2 id="team-heading" className="text-3xl lg:text-5xl mb-4 font-bold text-slate-900">Expert Leadership</h2>
                    <p className="text-lg text-slate-600">The friendly faces behind our mission.</p>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { name: "Sarah Jenkins", role: "Chief Clinical Officer", img: 32 },
                        { name: "Dr. Michael Chen", role: "Medical Director", img: 33 },
                        { name: "Elena Rodriguez", role: "Ops Director", img: 34 }
                    ].map((member, i) => (
                        <article key={i} className="text-center group">
                            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-lg group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src={`https://i.pravatar.cc/300?img=${member.img}`}
                                    alt={`Portrait of ${member.name}`}
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-bold text-sm uppercase tracking-widest">{member.role}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-slate-50 text-center rounded-t-[3rem]" aria-labelledby="cta-heading">
                <h2 id="cta-heading" className="text-3xl lg:text-4xl mb-8 font-bold text-slate-900">Ready to Partner?</h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link to="/contact" className="btn-primary px-10 py-4 shadow-xl">Contact Us Today</Link>
                    <Link to="/services" className="btn-secondary px-10 py-4 shadow-sm">Our Services</Link>
                </div>
            </section>
        </main>
    );
};

export default About;
