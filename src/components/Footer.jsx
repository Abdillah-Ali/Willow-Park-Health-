import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-32 pb-16 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
                    <div className="space-y-10">
                        <Link to="/" className="flex items-center space-x-4 group">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30">
                                <Heart className="text-white w-9 h-9" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-3xl text-white leading-none tracking-tight">Willow Park</span>
                                <span className="text-primary text-xs font-black tracking-[0.4em] uppercase mt-1">Healthcare</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-xl leading-relaxed">
                            Helping seniors live better lives with expert medical and emotional support, right in the comfort of their own homes.
                        </p>
                        <div className="flex space-x-6">
                            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-2 transition-all duration-500">
                                    <Icon className="w-7 h-7 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-2xl mb-10 flex items-center">
                            <span className="w-10 h-1.5 bg-primary rounded-full mr-4"></span>
                            Navigation
                        </h4>
                        <ul className="space-y-6">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Primary Care', path: '/primary-care' },
                                { name: 'Careers', path: '/careers' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-slate-400 hover:text-white transition-all flex items-center group text-xl font-bold">
                                        <ArrowRight className="w-5 h-5 mr-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-2xl mb-10 flex items-center">
                            <span className="w-10 h-1.5 bg-primary rounded-full mr-4"></span>
                            Our Help
                        </h4>
                        <ul className="space-y-6 text-xl font-bold text-slate-400">
                            <li className="flex items-center space-x-4">
                                <div className="w-3 h-3 rounded-full bg-primary"></div>
                                <span>On-site Medical Care</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-3 h-3 rounded-full bg-primary text-primary"></div>
                                <span>Emotional Support</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-3 h-3 rounded-full bg-primary text-primary"></div>
                                <span>Family Guidance</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-3 h-3 rounded-full bg-primary text-primary"></div>
                                <span>Safe & Secure Care</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-3 h-3 rounded-full bg-primary text-primary"></div>
                                <span>Medicare Covered</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-2xl mb-10 flex items-center">
                            <span className="w-10 h-1.5 bg-primary rounded-full mr-4"></span>
                            Contact
                        </h4>
                        <ul className="space-y-8">
                            <li className="flex items-start space-x-5">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <span className="text-slate-400 text-xl">Serving Senior Communities Nationwide</span>
                            </li>
                            <li className="flex items-center space-x-5">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <a href="tel:5551234567" className="text-slate-400 hover:text-white transition-colors text-2xl font-black">555.123.4567</a>
                            </li>
                            <li className="flex items-center space-x-5">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <a href="mailto:info@willowparkhealth.com" className="text-slate-400 hover:text-white transition-colors text-xl font-bold">info@willowpark.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-lg font-bold">
                    <p className="text-slate-500 font-medium">&copy; {new Date().getFullYear()} Willow Park Health. All rights reserved.</p>
                    <div className="flex space-x-12">
                        <Link to="/contact" className="text-slate-500 hover:text-white transition-colors">Privacy</Link>
                        <Link to="/contact" className="text-slate-500 hover:text-white transition-colors">Terms</Link>
                        <Link to="/contact" className="text-slate-500 hover:text-white transition-colors">HIPAA</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
