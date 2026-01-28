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
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 glass shadow-xl shadow-primary/5' : 'py-5 bg-transparent'}`} aria-label="Main Navigation">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-3 group" aria-label="Willow Park Healthcare Home">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/10 group-hover:rotate-6 transition-transform duration-500">
                        <Heart className="text-white w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl leading-none text-slate-900 tracking-tight">Willow Park</span>
                        <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Healthcare</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${location.pathname === link.path
                                ? 'text-primary bg-primary/5'
                                : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                                }`}
                            aria-current={location.pathname === link.path ? 'page' : undefined}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pl-4">
                        <Link
                            to="/contact"
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="lg:hidden absolute top-full left-0 w-full glass border-t border-slate-100 shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-bold py-3 px-6 rounded-xl transition-all ${location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-slate-600'
                                        }`}
                                    aria-current={location.pathname === link.path ? 'page' : undefined}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-primary text-white px-6 py-4 rounded-xl text-center font-bold text-lg shadow-lg block"
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
