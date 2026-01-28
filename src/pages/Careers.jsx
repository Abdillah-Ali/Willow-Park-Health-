import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Send, Paperclip, CheckCircle, GraduationCap, Clock, DollarSign, Heart, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const JobAccordionItem = ({ job, isExpanded, onToggle, onApply }) => {
    return (
        <div className="border-b border-blue-100 last:border-0">
            <button
                onClick={onToggle}
                className="w-full py-8 text-left group flex items-start justify-between gap-6 hover:bg-blue-50/50 px-4 rounded-2xl transition-all"
            >
                <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                            {job.type}
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-6 text-slate-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-500" />
                            <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-blue-500" />
                            <span>{job.salary}</span>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-2">
                    {isExpanded ? (
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                            <ChevronUp className="w-6 h-6" />
                        </div>
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:text-blue-600 transition-all shadow-sm">
                            <ChevronDown className="w-6 h-6" />
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
                        <div className="px-6 pb-8 pt-2">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                <div className="lg:col-span-2 space-y-6">
                                    <div>
                                        <h4 className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-3">The Opportunity</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed">{job.fullDescription}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-3">Key Responsibilities</h4>
                                        <ul className="space-y-3">
                                            {job.responsibilities.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-600">
                                                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-3">Requirements</h4>
                                        <ul className="space-y-3">
                                            {job.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-600">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 mt-2"></div>
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button
                                        onClick={() => onApply(job.title)}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
                                    >
                                        Apply for this position <Send className="w-4 h-4" />
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
            salary: "Competitive with Benefits",
            fullDescription: "Willow Park Health is seeking dedicated Primary Care Physicians to lead our on-site clinical teams. You will be the primary medical point of contact for seniors in luxury assisted living communities. This role offers the unique opportunity to practice concierge-style medicine without the administrative burden of traditional private practice.",
            responsibilities: [
                "Provide comprehensive medical oversight for residents in assisted living.",
                "Manage chronic conditions and coordinate with facility nursing staff.",
                "Perform routine check-ups and preventative screenings on-site.",
                "Lead interdisciplinary care team meetings and coordinate with families."
            ],
            requirements: ["Current Medical License", "Board Certification", "Experience with Geriatrics preferred", "Passionate about residential care"]
        },
        {
            title: "Nurse Practitioner / Physician Assistant",
            type: "Full-time",
            location: "Facility Based",
            salary: "Highly Competitive",
            fullDescription: "Join our fast-growing integrated care team. As an NP or PA, you will work hand-in-hand with our physicians to provide high-quality clinical care. Your role is vital in maintaining resident stability and preventing unnecessary hospitalizations through proactive clinical management.",
            responsibilities: [
                "Conduct on-site clinical assessments and diagnostic tests.",
                "Implement and monitor treatment plans under physician supervision.",
                "Provide education to facility staff and family members.",
                "Participate in 24/7 clinical support rotation (tele-health enabled)."
            ],
            requirements: ["NP/PA License", "Strong clinical background", "Compassionate approach", "Excellent communication skills"]
        },
        {
            title: "Licensed Therapist (LCSW, LPC, LMHC, LMFT)",
            type: "Flexible Schedule",
            location: "Various Communities",
            salary: "Fee-for-service / Salaried",
            fullDescription: "Redefine emotional well-being for seniors. We are looking for licensed therapists who are passionate about helping older adults navigate the complexities of aging, grief, and life transitions. Your work will directly impact the daily quality of life for our residents.",
            responsibilities: [
                "Provide 1-on-1 therapeutic support in the resident's living environment.",
                "Work with families to develop emotional support strategies.",
                "Monitor behavioral health changes and coordinate with psychiatric care.",
                "Facilitate group support sessions within the community (optional)."
            ],
            requirements: ["State Licensure (LCSW preferred)", "Experience with elderly population", "Autonomy & Empathy", "Commitment to long-term outcomes"]
        },
        {
            title: "Clinical Psychologist (PhD/PsyD)",
            type: "Part-time / Full-time",
            location: "Assigned Territories",
            salary: "Advanced Compensation",
            fullDescription: "Bring high-level psychological expertise to the residential setting. You will lead cognitive assessment initiatives and develop specialized behavioral interventions for complex clinical cases. This role requires a high degree of clinical expertise and a passion for research-backed care.",
            responsibilities: [
                "Perform advanced cognitive and psychological assessments.",
                "Design behavioral management plans for dementia and Alzheimer’s.",
                "Provide clinical supervision for therapist teams.",
                "Liaise with external specialists for comprehensive neurological care."
            ],
            requirements: ["Doctoral degree (PhD or PsyD)", "Current Licensure", "Strong assessment skills", "Publication history favored but not required"]
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
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 font-semibold"
                    >
                        <Briefcase className="w-4 h-4" />
                        <span>Join Our Mission</span>
                    </motion.div>
                    <h1 className="text-5xl lg:text-7xl mb-6 text-slate-900 leading-tight">
                        Make a Tangible <br />
                        <span className="text-blue-600 italic font-serif">Difference</span> Every Day.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Willow Park Health is looking for passionate healthcare professionals to join our mobile integrated health teams. Help us redefine senior care.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            </section>

            {/* Why Join Us */}
            <section className="section-padding bg-blue-50/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {[
                            { icon: <Clock />, title: "Flexible Schedules", desc: "Work-life balance is a priority. We offer schedules that fit your lifestyle." },
                            { icon: <Heart />, title: "Meaningful Work", desc: "Build long-term relationships with residents and families in their homes." },
                            { icon: <DollarSign />, title: "Competitive Pay", desc: "Excellent compensation packages including benefits for full-time roles." },
                        ].map((benefit, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-blue-50 shadow-xl shadow-blue-500/5 hover:border-blue-400 transition-all group">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h4>
                                <p className="text-slate-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles - LIGHT THEME ACCORDION */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                        <div>
                            <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">Current Opportunities</h2>
                            <p className="text-slate-600 text-lg">Click on a role below to see full details and responsibilities.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-blue-100 rounded-[3rem] p-4 lg:p-12 shadow-2xl shadow-blue-500/5">
                        <div className="flex flex-col">
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
                </div>
                {/* Abstract decor */}
                <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-blue-50/30 rounded-full translate-x-1/2 translate-y-1/2 blur-[100px]"></div>
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-50/20 rounded-full -translate-x-1/2 blur-[80px]"></div>
            </section>

            {/* Application Form */}
            <section id="apply-form" className="section-padding bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-blue-50 p-12 rounded-[3rem] text-center border-2 border-blue-100"
                        >
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200">
                                <CheckCircle className="text-white w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">Application Received!</h2>
                            <p className="text-slate-600 text-lg mb-8">
                                Thank you for your interest in joining Willow Park Health for the {selectedRole} position. Our recruitment team will review your application and get back to you within 2-3 business days.
                            </p>
                            <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:underline">
                                Send another application
                            </button>
                        </motion.div>
                    ) : (
                        <div>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold mb-4 text-slate-900">Start Your Journey</h2>
                                <p className="text-slate-600">Please fill out the form below and attach your resume.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl shadow-blue-500/5 border border-blue-50">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 px-1">Full Name</label>
                                        <input required type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 px-1">Email Address</label>
                                        <input required type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 px-1">Phone Number</label>
                                        <input required type="tel" className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all" placeholder="(555) 000-0000" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 px-1">Desired Role</label>
                                        <div className="relative">
                                            <select
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                required
                                                className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all bg-white appearance-none"
                                            >
                                                <option value="">Select a role</option>
                                                {jobs.map((job, i) => (
                                                    <option key={i} value={job.title}>{job.title}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 px-1">Why do you want to join Willow Park Health?</label>
                                    <textarea required rows="4" className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all" placeholder="Tell us about your passion for senior care..."></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 px-1">Resume (PDF or DOC)</label>
                                        <div className="relative group">
                                            <input required type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                            <div className="w-full px-6 py-4 rounded-2xl border-2 border-dashed border-slate-200 group-hover:border-blue-600 bg-white flex items-center justify-center space-x-3 transition-colors">
                                                <Paperclip className="text-slate-400 group-hover:text-blue-600 w-5 h-5" />
                                                <span className="text-slate-500 group-hover:text-blue-600 font-medium">Upload Resume</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 px-1">LinkedIn Profile (Optional)</label>
                                        <input type="url" className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all" placeholder="https://linkedin.com/in/..." />
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all shadow-xl shadow-blue-200">
                                    <Send className="mr-2 w-6 h-6" /> Submit Application
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
