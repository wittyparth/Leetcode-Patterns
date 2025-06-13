import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { patternCategories } from '../data/patterns';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

// Hero Section Component
const Hero = () => {
    return (
        <section
            className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500 dark:from-gray-900 dark:to-gray-800"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 grid-rows-6 h-full">
                    {Array(36).fill().map((_, index) => (
                        <div
                            key={index}
                            className="border border-white dark:border-gray-700"
                        ></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div
                        className="md:w-1/2 mb-12 md:mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-base-content dark:text-white">
                            Master LeetCode Patterns
                        </h1>
                        <p className="text-xl text-base-content/80 dark:text-white/90 mb-8 max-w-lg">
                            Learn systematic approaches to solving algorithmic problems and ace your coding interviews.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/problems">
                                <motion.button
                                    className="btn btn-lg bg-blue-600 text-white border-none hover:bg-blue-700 focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Started
                                </motion.button>
                            </Link>
                            <Link to="/problems">
                                <motion.button
                                    className="btn btn-lg bg-yellow-400 text-black border-none hover:bg-yellow-500 focus:bg-yellow-500 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:text-black font-bold shadow-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    All Problems
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Light mode image */}
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 dark:hidden">
                                <div className="h-full rounded-lg bg-gray-100 p-4 overflow-hidden">
                                    <div className="text-sm font-mono mb-2 text-gray-600">
                                        // Two Sum - O(n) Solution
                                    </div>
                                    <pre className="text-xs text-gray-800 overflow-hidden">
                                        {`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`}
                                    </pre>
                                </div>
                            </div>
                            {/* Dark mode image */}
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-900 rounded-2xl shadow-2xl p-6 transform rotate-3 hidden dark:block">
                                <div className="h-full rounded-lg bg-gray-800 p-4 overflow-hidden">
                                    <div className="text-sm font-mono mb-2 text-green-400">
                                        // Binary Search - O(log n) Solution
                                    </div>
                                    <pre className="text-xs text-green-200 overflow-hidden">
                                        {`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`}
                                    </pre>
                                </div>
                            </div>

                            <div className="absolute top-20 -right-10 w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 transform -rotate-6 z-20">
                                <div className="h-full bg-light-200 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 -left-10 w-40 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 transform rotate-12 z-20">
                                <div className="h-full bg-light-200 dark:bg-gray-900 rounded-lg flex flex-col justify-center items-center">
                                    <div className="text-xs font-medium text-gray-700 dark:text-green-300">Time Complexity</div>
                                    <div className="text-lg font-bold text-primary-600 dark:text-green-400">O(n)</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                    <path fill="white" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,160C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};

// Value Proposition Section
const ValueProposition = () => {
    const features = [
        {
            title: "Pattern Recognition",
            description: "Learn to identify common patterns in algorithmic problems to solve them efficiently",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
            )
        },
        {
            title: "Structured Learning",
            description: "Follow a curated roadmap from easy to hard problems for each pattern",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            )
        },
        {
            title: "Progress Tracking",
            description: "Track your progress across patterns and problems with built-in completion markers",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Why LeetCode Patterns Matter
                    </motion.h2>
                    <motion.p
                        className="text-lg opacity-80"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Solving problems by pattern drastically improves your efficiency and helps you tackle unfamiliar problems with confidence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-base-100 rounded-xl shadow-lg p-8 border border-base-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-primary-500 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="opacity-80">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 p-8 bg-base-200 rounded-2xl border border-base-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <div className="text-3xl font-bold mb-2">85%</div>
                            <p className="text-lg">of successful candidates use pattern recognition</p>
                        </div>
                        <div className="w-px h-12 bg-base-300 hidden md:block mx-8"></div>
                        <div className="mb-6 md:mb-0 md:mx-8">
                            <div className="text-3xl font-bold mb-2">2x</div>
                            <p className="text-lg">faster problem-solving with pattern-based approach</p>
                        </div>
                        <div className="w-px h-12 bg-base-300 hidden md:block mx-8"></div>
                        <div>
                            <div className="text-3xl font-bold mb-2">20+</div>
                            <p className="text-lg">common patterns covering 500+ problems</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Pattern Categories Section
const PatternCategories = () => {
    return (
        <section className="py-20 bg-base-200">
            <div className="container mx-auto px-4">                <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Explore Pattern Categories
                </motion.h2>
                <motion.p
                    className="text-lg opacity-80"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Browse through our collection of algorithmic patterns, each with curated problems and detailed explanations.
                </motion.p>
            </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {patternCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={`/pattern/${category.id}`}
                                className="block bg-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300 transition-transform hover:shadow-xl group-hover:scale-[1.02]"
                            >
                                <div className={`h-2 ${category.color}`}></div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center">
                                            <div className="mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-gray-400 group-hover:text-primary-500 transition-colors"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold">{category.name}</h3>
                                        </div>
                                        <span className="inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium bg-base-200">
                                            {category.count} problems
                                        </span>
                                    </div>
                                    <p className="mt-4 text-sm opacity-80">
                                        {category.description}
                                    </p>
                                    <div className="mt-6 pt-4 border-t border-base-200 flex justify-between items-center">
                                        <div className="flex space-x-1">
                                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                        </div>
                                        <span className="text-sm font-medium text-primary-500 group-hover:text-primary-600 flex items-center">
                                            Explore
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// How It Works Section
const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Choose a Pattern",
            description: "Browse and select a pattern category you want to master",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Learn the Theory",
            description: "Study the pattern's core concepts, tips, and examples",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Solve Problems",
            description: "Work through the curated problem set in recommended order",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            number: "04",
            title: "Track Progress",
            description: "Mark problems as complete and monitor your improvement",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        className="text-lg opacity-80"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Master algorithmic patterns in just four simple steps
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-base-100 rounded-xl p-8 border border-base-300 shadow-lg relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg">
                                {step.number}
                            </div>
                            <div className="text-primary-500 mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="opacity-80">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Testimonials Section
const Testimonials = () => {
    return (
        <section className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Testimonials
                    </motion.h2>
                </div>
                <div className="flex justify-center">
                    <motion.div
                        className="card bg-base-100 shadow-xl max-w-xl w-full"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-body items-center text-center shadow-lg p-6 rounded-lg ">
                            <span className="text-5xl mb-2">🤖</span>
                            <h3 className="card-title text-2xl font-semibold mb-2">Your Testimonial Could Be Here!</h3>
                            <p className="text-base opacity-80 mb-4">
                                No testimonials yet—be the first to leave your digital footprint.<br />
                                If this project helped you debug your way to success, share your thoughts or ideas with me!
                            </p>
                            <div className="flex justify-center gap-4 mt-2">
                                <a
                                    href="https://x.com/Curious83635101"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-outline btn-primary"
                                    aria-label="X (Twitter)"
                                >
                                    <FaXTwitter className="inline w-5 h-5 mr-1" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/partha-saradhi-munakala/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-outline btn-primary"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn className="inline w-5 h-5 mr-1" />
                                </a>
                                <a
                                    href="mailto:parthasaradhimunakala@gmail.com"
                                    className="btn btn-sm btn-outline btn-primary"
                                    aria-label="Gmail"
                                >
                                    <BiLogoGmail className="inline w-5 h-5 mr-1" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Call to Action Section
const CallToAction = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="hero-gradient rounded-2xl p-12 text-base-content text-center shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ backgroundColor: 'var(--tw-bg-opacity)' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-base-content">
                        Ready to Master Algorithms?
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 text-base-content/80">
                        Start your journey to algorithmic mastery today with our structured, pattern-based approach.
                    </p>
                    <Link to="/problems">
                        <motion.button
                            className="btn btn-lg bg-primary text-primary-content hover:bg-primary-focus"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Now
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

// Footer Section
const Footer = () => (
    <footer className="bg-base-200 text-base-content py-6 text-center border-t border-base-300">
        <span>Made by Partha Saradhi <span className="text-red-500" aria-label="love" role="img">♥</span></span>
    </footer>
);

const HomePage = () => {
    return (
        <div className="min-h-screen pt-16 flex flex-col">
            {/* Hero Section */}
            <Hero />

            {/* Value Proposition */}
            <ValueProposition />

            {/* Pattern Categories */}
            <PatternCategories />

            {/* How It Works */}
            <HowItWorks />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA */}
            <CallToAction />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
