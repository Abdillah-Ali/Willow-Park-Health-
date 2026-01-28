import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, Phone, MapPin, Send, MessageCircle,
    CheckCircle, Plus, Minus, Building2, UserPlus
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
            <section className="relative pt-32 pb-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 font-bold text-sm"
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span>We're Ready to Help</span>
                    </motion.div>
                    <h1 className="text-4xl lg:text-6xl mb-6 font-bold tracking-tight">Reach Out <span className="text-primary italic">Today</span></h1>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Whether you have a quick question or want to schedule a visit, we make it easy to get the support you need.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
                        {[
                            { icon: <Phone />, title: "Call Us Now", detail: "555.123.4567", sub: "Mon-Fri: 9am - 5pm" },
                            { icon: <Mail />, title: "Send an Email", detail: "info@willowpark.com", sub: "Friendly response in 24h" },
                            { icon: <MapPin />, title: "Our Location", detail: "Regional Support", sub: "Nationwide Coverage" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-lg">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                    {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-widest">{item.title}</h4>
                                    <p className="text-xl font-bold text-slate-950">{item.detail}</p>
                                </div>
                            </div>
                        ))}

                        <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                            <h4 className="text-2xl font-bold mb-4">Need Help Fast?</h4>
                            <p className="text-slate-400 mb-6 font-medium">Call our 24/7 coordination line directly.</p>
                            <p className="text-3xl font-bold text-primary-light">800.555.0199</p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100">
                            <div className="flex p-2 bg-slate-50 rounded-2xl mb-12">
                                <button
                                    onClick={() => setActiveTab('resident')}
                                    className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all ${activeTab === 'resident' ? 'bg-white text-primary shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Families
                                </button>
                                <button
                                    onClick={() => setActiveTab('facility')}
                                    className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all ${activeTab === 'facility' ? 'bg-white text-primary shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Facilities
                                </button>
                            </div>

                            {submitted ? (
                                <div className="text-center py-16">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">Message Sent</h2>
                                    <p className="text-lg text-slate-600 mb-8 font-medium">We'll call you back very shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline">Send another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-900 ml-1">Name</label>
                                            <input required type="text" className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all shadow-sm" placeholder="Your Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-900 ml-1">Phone</label>
                                            <input required type="tel" className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all shadow-sm" placeholder="Your Phone" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900 ml-1">Message</label>
                                        <textarea required rows="4" className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all shadow-sm" placeholder="How can we help today?"></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary w-full py-4 shadow-xl">
                                        Submit Message <Send className="ml-2 w-5 h-5" />
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
                    <h2 className="text-3xl lg:text-4xl text-center mb-16 font-bold">Common Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="text-xl font-bold text-slate-950">{faq.q}</span>
                                    {openFaq === i ? <Minus className="text-primary w-6 h-6" /> : <Plus className="text-primary w-6 h-6" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-8 pt-0 text-lg text-slate-600 border-t border-slate-50 leading-relaxed font-medium">
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
