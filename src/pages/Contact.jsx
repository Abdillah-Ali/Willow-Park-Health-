import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, Phone, MapPin, Send, MessageCircle,
    CheckCircle, Plus, Minus, Building2, UserPlus, Upload
} from 'lucide-react';

const Contact = () => {
    const [activeTab, setActiveTab] = useState('resident');
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const faqs = [
        { q: "Is there a cost for your services?", a: "No. Our services are covered by Medicare and most insurance plans. There is zero direct cost to you or your living community." },
        { q: "How quickly can we start?", a: "We can usually visit for a first introduction within 24 to 48 hours." },
        { q: "Do you visit on weekends?", a: "We provide support 24/7 for our community partners, and our scheduled visits happen during regular business hours." },
        { q: "How do you work with my current doctor?", a: "We collaborate closely with your primary doctor and the nursing staff at your community to ensure everyone is coordinated." }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-48 pb-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-10 font-black text-lg"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <span>We're Ready to Help</span>
                    </motion.div>
                    <h1 className="text-7xl lg:text-9xl mb-10 font-black tracking-tight">Reach Out <span className="text-primary italic">Today</span></h1>
                    <p className="text-3xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        Whether you have a quick question or want to schedule a visit, we make it easy to get the support you need.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">

                    {/* Contact Details */}
                    <div className="space-y-12">
                        <h3 className="text-4xl font-black mb-12">Contact Info</h3>
                        {[
                            { icon: <Phone />, title: "Call Us Now", detail: "555.123.4567", sub: "Mon-Fri: 9am - 5pm" },
                            { icon: <Mail />, title: "Send an Email", detail: "info@willowpark.com", sub: "Friendly response in 24h" },
                            { icon: <MapPin />, title: "Our Location", detail: "Regional Support", sub: "Nationwide Coverage" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-8 p-10 bg-white rounded-[3rem] border-2 border-slate-100 shadow-xl shadow-slate-100/50">
                                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary shrink-0">
                                    {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-500 mb-2 uppercase tracking-widest">{item.title}</h4>
                                    <p className="text-3xl font-black text-slate-950">{item.detail}</p>
                                </div>
                            </div>
                        ))}

                        <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                            <h4 className="text-3xl font-black mb-6">Need Help Fast?</h4>
                            <p className="text-2xl text-slate-400 mb-8 font-medium">Call our 24/7 coordination line directly.</p>
                            <p className="text-4xl font-black text-primary-light">800.555.0199</p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-10 lg:p-20 rounded-[5rem] shadow-2xl border-2 border-slate-100">
                            <div className="flex p-4 bg-slate-100 rounded-[2.5rem] mb-16">
                                <button
                                    onClick={() => setActiveTab('resident')}
                                    className={`flex-1 py-6 px-8 rounded-[2rem] text-2xl font-black transition-all ${activeTab === 'resident' ? 'bg-white text-primary shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Families
                                </button>
                                <button
                                    onClick={() => setActiveTab('facility')}
                                    className={`flex-1 py-6 px-8 rounded-[2rem] text-2xl font-black transition-all ${activeTab === 'facility' ? 'bg-white text-primary shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Facilities
                                </button>
                            </div>

                            {submitted ? (
                                <div className="text-center py-24">
                                    <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-12">
                                        <CheckCircle className="w-16 h-16" />
                                    </div>
                                    <h2 className="text-6xl font-black mb-6">Message Sent</h2>
                                    <p className="text-3xl text-slate-600 mb-12 font-medium">We'll call you back very shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="text-primary text-2xl font-black underline underline-offset-8">Send another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="text-2xl font-black text-slate-950 ml-2">Name</label>
                                            <input required type="text" className="w-full px-10 py-6 text-2xl rounded-[2.5rem] bg-slate-50 border-4 border-transparent focus:bg-white focus:border-primary outline-none transition-all font-bold" placeholder="Your Name" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-2xl font-black text-slate-950 ml-2">Phone</label>
                                            <input required type="tel" className="w-full px-10 py-6 text-2xl rounded-[2.5rem] bg-slate-50 border-4 border-transparent focus:bg-white focus:border-primary outline-none transition-all font-bold" placeholder="Your Phone" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-2xl font-black text-slate-950 ml-2">Message</label>
                                        <textarea required rows="4" className="w-full px-10 py-6 text-2xl rounded-[2.5rem] bg-slate-50 border-4 border-transparent focus:bg-white focus:border-primary outline-none transition-all font-bold" placeholder="How can we help today?"></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary w-full py-8 text-3xl shadow-2xl">
                                        Submit Message <Send className="ml-4 w-8 h-8" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Block */}
            <section className="section-padding bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-6xl text-center mb-24 font-black">Common Questions</h2>
                    <div className="space-y-8">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-xl border-2 border-slate-100">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full p-10 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="text-3xl font-black text-slate-950">{faq.q}</span>
                                    {openFaq === i ? <Minus className="text-primary w-8 h-8" /> : <Plus className="text-primary w-8 h-8" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-10 pt-0 text-2xl text-slate-700 border-t-2 border-slate-50 font-medium leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
