import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Primary Care', path: '/primary-care' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-2xl shadow-primary/5' : 'py-8 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 group-hover:rotate-6 transition-transform duration-500">
                        <Heart className="text-white w-8 h-8" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black text-3xl leading-none text-slate-900 tracking-tight">Willow Park</span>
                        <span className="text-primary text-xs font-black tracking-[0.4em] uppercase mt-1">Healthcare</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-5 py-3 rounded-2xl text-lg font-black transition-all duration-300 ${location.pathname === link.path
                                    ? 'text-primary bg-primary/5 shadow-inner'
                                    : 'text-slate-800 hover:text-primary hover:bg-slate-50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pl-6">
                        <Link
                            to="/contact"
                            className="btn-primary px-8 py-4 rounded-2xl shadow-2xl"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden p-4 bg-slate-50 rounded-2xl text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 w-full glass border-t border-slate-100 shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-10 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-2xl font-black py-4 px-8 rounded-3xl transition-all ${location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-slate-800'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-primary w-full py-6 rounded-[2.5rem] shadow-2xl"
                                >
                                    Get Started Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
