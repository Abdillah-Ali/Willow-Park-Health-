import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Send, Paperclip, CheckCircle, Clock, DollarSign, Heart, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const JobAccordionItem = ({ job, isExpanded, onToggle, onApply }) => {
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={onToggle}
                className="w-full py-6 text-left group flex items-start justify-between gap-4 hover:bg-slate-50 px-4 rounded-2xl transition-all"
            >
                <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{job.title}</h3>
                        <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                            {job.type}
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-slate-500 text-xs font-medium">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <DollarSign className="w-3.5 h-3.5 text-primary" />
                            <span>{job.salary}</span>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-1">
                    {isExpanded ? (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                            <ChevronUp className="w-5 h-5" />
                        </div>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-primary transition-all shadow-sm">
                            <ChevronDown className="w-5 h-5" />
                        </div>
                    )}
                </div>
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-2">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2 space-y-4">
                                    <div>
                                        <h4 className="text-primary font-bold uppercase text-[10px] tracking-widest mb-2">The Opportunity</h4>
                                        <p className="text-slate-600 text-base leading-relaxed">{job.fullDescription}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-primary font-bold uppercase text-[10px] tracking-widest mb-2">Key Responsibilities</h4>
                                        <ul className="space-y-2">
                                            {job.responsibilities.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-primary font-bold uppercase text-[10px] tracking-widest mb-2">Requirements</h4>
                                        <ul className="space-y-2">
                                            {job.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1.5"></div>
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button
                                        onClick={() => onApply(job.title)}
                                        className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                                    >
                                        Apply for this position <Send className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Careers = () => {
    const [submitted, setSubmitted] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");
    const [expandedIndex, setExpandedIndex] = useState(0);

    const jobs = [
        {
            title: "Primary Care Physician (MD/DO)",
            type: "Full-time / Part-time",
            location: "On-site / Multi-facility",
            salary: "Competitive Benefits",
            fullDescription: "Willow Park Health is seeking dedicated Primary Care Physicians to lead our on-site clinical teams. You will be the primary medical point of contact for seniors in assisted living communities.",
            responsibilities: [
                "Provide comprehensive medical oversight for residents.",
                "Manage chronic conditions and coordinate with nursing staff.",
                "Perform routine check-ups and preventative screenings on-site."
            ],
            requirements: ["Current Medical License", "Board Certification", "Experience with Geriatrics"]
        },
        {
            title: "Nurse Practitioner (NP/PA)",
            type: "Full-time",
            location: "Facility Based",
            salary: "Highly Competitive",
            fullDescription: "Join our integrated care team. You will work with our physicians to provide high-quality clinical care directly to seniors where they live.",
            responsibilities: [
                "Conduct on-site clinical assessments.",
                "Implement and monitor treatment plans.",
                "Provide education to facility staff and family members."
            ],
            requirements: ["NP/PA License", "Strong clinical background", "Excellent communication"]
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleApply = (role) => {
        setSelectedRole(role);
        document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="pt-32">
            {/* Hero */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 font-bold text-sm"
                    >
                        <Briefcase className="w-4 h-4" />
                        <span>Join Our Mission</span>
                    </motion.div>
                    <h1 className="text-4xl lg:text-6xl mb-6 text-slate-900 leading-tight font-bold">
                        Make a Tangible <br />
                        <span className="text-primary italic">Difference</span> Every Day.
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Willow Park Health is looking for passionate healthcare professionals to join our integrated health teams. Help us redefine senior care.
                    </p>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="section-padding bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Clock />, title: "Flexible Schedules", desc: "Work-life balance is a priority with flexible scheduling options." },
                            { icon: <Heart />, title: "Meaningful Work", desc: "Build real relationships with residents in their comfortable homes." },
                            { icon: <DollarSign />, title: "Competitive Pay", desc: "Excellent compensation packages including full benefits." },
                        ].map((benefit, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-primary transition-all">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                                    {React.cloneElement(benefit.icon, { className: "w-5 h-5" })}
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-slate-900">{benefit.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl mb-4 font-bold">Current Opportunities</h2>
                        <p className="text-slate-600">Join our team of dedicated healthcare professionals.</p>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-3xl p-4 lg:p-8 shadow-xl shadow-slate-200/50">
                        {jobs.map((job, idx) => (
                            <JobAccordionItem
                                key={idx}
                                job={job}
                                isExpanded={expandedIndex === idx}
                                onToggle={() => setExpandedIndex(expandedIndex === idx ? -1 : idx)}
                                onApply={handleApply}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="apply-form" className="section-padding bg-slate-50">
                <div className="max-w-3xl mx-auto px-6 lg:px-12">
                    {submitted ? (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-12 rounded-3xl text-center border border-slate-100 shadow-xl">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="text-white w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Application Received!</h2>
                            <p className="text-slate-600 mb-8">We'll review your application and get back to you within 2-3 business days.</p>
                            <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline">Apply for another role</button>
                        </motion.div>
                    ) : (
                        <div>
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold mb-3">Start Your Journey</h2>
                                <p className="text-slate-600">Please fill out the form below to apply.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900">Full Name</label>
                                        <input required type="text" className="w-full px-5 py-3 rounded-xl border-2 border-slate-300 bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm shadow-sm" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900">Email Address</label>
                                        <input required type="email" className="w-full px-5 py-3 rounded-xl border-2 border-slate-300 bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm shadow-sm" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900">Phone & Role</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input required type="tel" className="px-5 py-3 rounded-xl border-2 border-slate-300 bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm shadow-sm" placeholder="Phone Number" />
                                        <select
                                            value={selectedRole}
                                            onChange={(e) => setSelectedRole(e.target.value)}
                                            required
                                            className="px-5 py-3 rounded-xl border-2 border-slate-300 bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm shadow-sm"
                                        >
                                            <option value="">Select a role</option>
                                            {jobs.map((job, i) => (
                                                <option key={i} value={job.title}>{job.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900">Message (Optional)</label>
                                    <textarea rows="3" className="w-full px-5 py-3 rounded-xl border-2 border-slate-300 bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm shadow-sm" placeholder="Tell us why you're a great fit..."></textarea>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Resume Link or Upload Info</label>
                                    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
                                        <span>Click to select or drag and drop your resume file</span>
                                        <Paperclip className="w-4 h-4" />
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary w-full py-4 shadow-xl">
                                    <Send className="mr-2 w-4 h-4" /> Submit Application
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Careers;
