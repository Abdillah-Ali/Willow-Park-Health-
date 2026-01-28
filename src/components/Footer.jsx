import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-12 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" aria-hidden="true"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-3 group" aria-label="Willow Park Healthcare Home">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <Heart className="text-white w-6 h-6" aria-hidden="true" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-white leading-none tracking-tight">Willow Park</span>
                                <span className="text-primary text-[8px] font-black tracking-[0.3em] uppercase mt-1">Healthcare</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-base leading-relaxed">
                            Helping seniors live better lives with expert medical and emotional support, right in the comfort of their own homes.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Linkedin, label: "LinkedIn" },
                                { Icon: Instagram, label: "Instagram" }
                            ].map(({ Icon, label }, i) => (
                                <a key={i} href="#" aria-label={`Follow us on ${label}`} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 font-bold">
                                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <nav aria-label="Footer Quick Links">
                        <h4 className="text-white font-bold text-lg mb-8 flex items-center">
                            <span className="w-6 h-1 bg-primary rounded-full mr-3" aria-hidden="true"></span>
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Primary Care', path: '/primary-care' },
                                { name: 'Careers', path: '/careers' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-slate-400 hover:text-white transition-all flex items-center group text-base font-medium">
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all font-bold" aria-hidden="true" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Core Focus Areas">
                        <h4 className="text-white font-bold text-lg mb-8 flex items-center">
                            <span className="w-6 h-1 bg-primary rounded-full mr-3" aria-hidden="true"></span>
                            Core Focus
                        </h4>
                        <ul className="space-y-3 text-base font-medium text-slate-400">
                            <li className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></div>
                                <span>On-site Medical Care</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></div>
                                <span>Emotional Support</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></div>
                                <span>Family Guidance</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></div>
                                <span>HIPAA Compliance</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></div>
                                <span>Medicare Approved</span>
                            </li>
                        </ul>
                    </nav>

                    <section aria-label="Contact Information">
                        <h4 className="text-white font-bold text-lg mb-8 flex items-center">
                            <span className="w-6 h-1 bg-primary rounded-full mr-3" aria-hidden="true"></span>
                            Connect
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-4">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10" aria-hidden="true">
                                    <MapPin className="text-primary w-4 h-4" />
                                </div>
                                <span className="text-slate-400 text-sm">Serving Senior Communities Nationwide</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10" aria-hidden="true">
                                    <Phone className="text-primary w-4 h-4" />
                                </div>
                                <a href="tel:5551234567" className="text-slate-400 hover:text-white transition-colors text-base font-bold">555.123.4567</a>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10" aria-hidden="true">
                                    <Mail className="text-primary w-4 h-4" />
                                </div>
                                <a href="mailto:info@willowpark.com" className="text-slate-400 hover:text-white transition-colors text-base font-bold">info@willowpark.com</a>
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-medium">
                    <p className="text-slate-500 font-medium">&copy; {new Date().getFullYear()} Willow Park Health. All rights reserved.</p>
                    <nav className="flex space-x-8" aria-label="Legal Links">
                        <Link to="/contact" className="text-slate-500 hover:text-white transition-colors underline underline-offset-4">Privacy</Link>
                        <Link to="/contact" className="text-slate-500 hover:text-white transition-colors underline underline-offset-4">Terms</Link>
                        <Link to="/contact" className="text-slate-500 hover:text-white transition-colors underline underline-offset-4">HIPAA</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
