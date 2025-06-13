import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    // Handle scroll effect and direction
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            if (window.scrollY < lastScrollY.current) {
                setShowNavbar(true);
            } else if (window.scrollY > 100 && window.scrollY > lastScrollY.current) {
                setShowNavbar(false);
            }
            lastScrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Set theme on initial load and when theme changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-base-100/70 backdrop-blur-md shadow-md' : 'bg-white/30 backdrop-blur-md'} ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <motion.div
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            LP
                        </motion.div>
                        <div className="font-bold text-xl tracking-tight">
                            LeetCode Patterns
                        </div>
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
                        <NavLink to="/problems" currentPath={location.pathname}>All Problems</NavLink>
                        {/* Theme toggle button */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-base-300 transition relative"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: theme === 'light' ? 0 : 360 }}
                            transition={{
                                duration: 0.7,
                                type: "spring",
                                stiffness: 200,
                                damping: 10
                            }}
                            aria-label="Toggle theme"
                        >
                            <motion.div
                                initial={false}
                                animate={{
                                    opacity: theme === 'light' ? 0 : 1,
                                    scale: theme === 'light' ? 0.5 : 1
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </motion.div>

                            <motion.div
                                initial={false}
                                animate={{
                                    opacity: theme === 'light' ? 1 : 0,
                                    scale: theme === 'light' ? 1 : 0.5
                                }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </motion.div>
                        </motion.button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 dark:text-gray-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <motion.div
                    className="md:hidden bg-base-100 shadow-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                        <MobileNavLink to="/problems" onClick={() => setIsMenuOpen(false)}>All Problems</MobileNavLink>                        {/* Pattern Categories for Mobile */}
                        <div className="mt-2 border-t border-base-300 pt-2">
                            {/* Array & String Patterns */}
                            <div className="font-medium text-sm opacity-60 mb-2">Array & String Patterns:</div>
                            <div className="grid grid-cols-2 gap-2">
                                <MobileNavLink to="/patterns/two-pointers" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                                        Two Pointers
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/sliding-window" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                                        Sliding Window
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/prefix-sum" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                        Prefix Sum
                                    </div>
                                </MobileNavLink>
                            </div>

                            {/* Linked List Patterns */}
                            <div className="font-medium text-sm opacity-60 mt-4 mb-2">Linked List Patterns:</div>
                            <div className="grid grid-cols-2 gap-2">
                                <MobileNavLink to="/patterns/fast-slow-pointers" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                                        Fast & Slow Pointers
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/linkedlist-reversal" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                                        In-place Reversal
                                    </div>
                                </MobileNavLink>
                            </div>

                            {/* Tree & Graph Patterns */}
                            <div className="font-medium text-sm opacity-60 mt-4 mb-2">Tree & Graph Patterns:</div>
                            <div className="grid grid-cols-2 gap-2">
                                <MobileNavLink to="/patterns/tree-traversal" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                                        Tree Traversal
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/trie" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-lime-500 mr-2"></span>
                                        Trie
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/union-find" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                                        Union Find
                                    </div>
                                </MobileNavLink>
                            </div>

                            {/* Algorithmic Patterns */}
                            <div className="font-medium text-sm opacity-60 mt-4 mb-2">Algorithmic Patterns:</div>
                            <div className="grid grid-cols-2 gap-2">
                                <MobileNavLink to="/patterns/binary-search" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-pink-500 mr-2"></span>
                                        Binary Search
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/dynamic-programming" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                                        DP
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/backtracking" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                                        Backtracking
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/greedy" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                        Greedy
                                    </div>
                                </MobileNavLink>
                            </div>

                            {/* Data Structure Patterns */}
                            <div className="font-medium text-sm opacity-60 mt-4 mb-2">Data Structure Patterns:</div>
                            <div className="grid grid-cols-2 gap-2">
                                <MobileNavLink to="/patterns/top-k-elements" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                                        Top K Elements
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/merge-intervals" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-fuchsia-500 mr-2"></span>
                                        Merge Intervals
                                    </div>
                                </MobileNavLink>
                                <MobileNavLink to="/patterns/monotonic-stack" onClick={() => setIsMenuOpen(false)}>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                                        Monotonic Stack
                                    </div>
                                </MobileNavLink>
                            </div>
                        </div>

                        <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
                        <div className="flex items-center justify-between pt-4 mt-2 border-t border-base-300">
                            <span className="text-sm">Theme</span>
                            <motion.button
                                onClick={toggleTheme}
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-base-200 hover:bg-base-300 transition"
                                whileTap={{ scale: 0.95 }}
                            >
                                {theme === 'light' ? (
                                    <motion.div className="flex items-center gap-2" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                        <span>Dark Mode</span>
                                    </motion.div>
                                ) : (
                                    <motion.div className="flex items-center gap-2" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <span>Light Mode</span>
                                    </motion.div>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

// Desktop Navigation Link
const NavLink = ({ to, currentPath, children }) => {
    const isActive = currentPath === to;

    return (
        <Link
            to={to}
            className={`relative font-medium transition-colors ${isActive ? 'text-primary-600' : 'hover:text-primary-500'
                }`}
        >
            {children}
            {isActive && (
                <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                    layoutId="navbar-indicator"
                    transition={{ duration: 0.3 }}
                />
            )}
        </Link>
    );
};

// Mobile Navigation Link
const MobileNavLink = ({ to, onClick, children }) => {
    return (
        <Link
            to={to}
            className="py-2 font-medium hover:text-primary-500 transition-colors"
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default Header;
