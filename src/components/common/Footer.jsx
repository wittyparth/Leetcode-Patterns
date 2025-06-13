import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-200 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm">
                                LP
                            </div>
                            <span className="font-bold text-lg">LeetCode Patterns</span>
                        </Link>
                        <p className="text-sm opacity-80 mb-4">
                            Master algorithmic patterns for coding interviews. Practice efficiently with categorized problems and detailed explanations.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="https://github.com/" icon="github" />
                            <SocialLink href="https://twitter.com/" icon="twitter" />
                            <SocialLink href="https://linkedin.com/" icon="linkedin" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/patterns">All Patterns</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Top Patterns</h3>
                        <ul className="space-y-2 text-sm">
                            <FooterLink to="/patterns/arrays">Arrays</FooterLink>
                            <FooterLink to="/patterns/dfs">DFS</FooterLink>
                            <FooterLink to="/patterns/dynamic-programming">Dynamic Programming</FooterLink>
                            <FooterLink to="/patterns/two-pointers">Two Pointers</FooterLink>
                            <FooterLink to="/patterns/sliding-window">Sliding Window</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <FooterLink to="/resources">Study Guides</FooterLink>
                            <FooterLink to="/blog">Blog</FooterLink>
                            <FooterExternalLink href="https://leetcode.com">LeetCode</FooterExternalLink>
                            <FooterExternalLink href="https://github.com">GitHub</FooterExternalLink>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-base-300 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm opacity-80 mb-4 md:mb-0">
                        © {currentYear} LeetCode Patterns. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm opacity-80">
                        <Link to="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary-500 transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-primary-500 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <li>
        <Link
            to={to}
            className="opacity-80 hover:opacity-100 hover:text-primary-500 transition-colors"
        >
            {children}
        </Link>
    </li>
);

const FooterExternalLink = ({ href, children }) => (
    <li>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 hover:text-primary-500 transition-colors"
        >
            {children}
        </a>
    </li>
);

const SocialLink = ({ href, icon }) => {
    let iconPath;

    switch (icon) {
        case 'github':
            iconPath = 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z';
            break;
        case 'twitter':
            iconPath = 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z';
            break;
        case 'linkedin':
            iconPath = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';
            break;
        default:
            iconPath = '';
    }

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center text-base-content transition-colors hover:bg-primary-500 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={icon.charAt(0).toUpperCase() + icon.slice(1)}
        >
            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d={iconPath} />
            </svg>
        </motion.a>
    );
};

export default Footer;
