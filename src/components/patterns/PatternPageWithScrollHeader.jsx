// filepath: c:\\Users\\parth\\Desktop\\leetcode-patterns\\src\\components\\patterns\\PatternPageWithScrollHeader.jsx
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { useRef, useState, useEffect } from 'react';
import EnhancedCodeBlock from '../common/EnhancedCodeBlock';
import AlgorithmVisualizer from '../common/AlgorithmVisualizer';
import { useCompletedProblems } from '../../hooks/useLocalStorage';

/**
 * Generic Pattern Page Component for rendering any algorithm pattern
 * 
 * @param {Object} props
 * @param {Object} props.patternData - The data for the pattern to render
 * @param {Object} props.visualizerProps - Props for the AlgorithmVisualizer (optional)
 * @param {string} props.patternId - The ID of the pattern (for navigation)
 * @param {string} props.iconBgColor - Background color for the icon (e.g., "bg-orange-500")
 * @param {string} props.patternIcon - SVG path for the pattern icon
 */
const PatternPage = ({ patternData, visualizerProps = null, patternId, iconBgColor, patternIcon }) => {
    // Create refs for scroll navigation
    const overviewRef = useRef(null);
    const variationsRef = useRef(null);
    const tipsRef = useRef(null);
    const pitfallsRef = useRef(null);
    const problemsRef = useRef(null);

    // State for filtering problems
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [showCompleted, setShowCompleted] = useState(true);

    // State for header visibility based on scroll direction
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true);

    // Completion tracking
    const { isProblemCompleted, toggleProblemCompletion } = useCompletedProblems();

    // Scroll event handler to control header visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show header when scrolling up, hide when scrolling down
            if (currentScrollY < prevScrollY) {
                setHeaderVisible(true);
            } else if (currentScrollY > 100 && currentScrollY > prevScrollY) {
                setHeaderVisible(false);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    // Function to scroll to a section
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Function to filter problems based on selected difficulty and completion status
    const getFilteredProblems = () => {
        if (!patternData.practiceProblems) return [];

        return patternData.practiceProblems.filter(problem => {
            // Filter by difficulty
            if (difficultyFilter !== 'all' && problem.difficulty.toLowerCase() !== difficultyFilter.toLowerCase()) {
                return false;
            }

            // Filter by completion status
            if (!showCompleted) {
                const problemId = `${patternId}-${problem.name.replace(/\s+/g, '-').toLowerCase()}`;
                const isCompleted = isProblemCompleted(problemId);
                if (isCompleted) return false;
            }

            return true;
        });
    };

    if (!patternData) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
                    <p>Pattern data not available</p>
                </div>
            </div>
        );
    }

    // Determine the gradient colors based on pattern ID
    const getGradientClasses = () => {
        switch (patternId) {
            case 'two-pointers':
                return {
                    bg: 'from-indigo-50 to-blue-50',
                    border: 'border-indigo-100',
                    text: 'text-indigo-700',
                    accent: 'bg-indigo-500'
                };
            default:
                return {
                    bg: 'from-gray-50 to-slate-50',
                    border: 'border-gray-100',
                    text: 'text-gray-700',
                    accent: 'bg-gray-500'
                };
        }
    };

    const gradientClasses = getGradientClasses();

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-base-100 to-base-200/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Pattern Header - Fixed position with scroll direction behavior */}
                <motion.div
                    className={`fixed top-0 left-0 right-0 z-30 bg-base-100 shadow-md backdrop-blur-lg bg-opacity-90 pt-20 pb-4 px-4 sm:px-6 lg:px-8 transition-transform duration-300 ease-in-out ${headerVisible ? 'translate-y-0' : '-translate-y-full'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="container mx-auto">
                        <div className="flex items-center mb-2">
                            <Link to="/patterns" className="mr-2 text-primary hover:underline">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Back to Patterns
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div className="flex items-center mb-2 md:mb-0">
                                <div className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center mr-4 shadow-lg`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={patternIcon} />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold">{patternData.title}</h1>
                                    <p className="opacity-80 text-sm">{patternData.shortDescription || "A powerful algorithm pattern for solving coding problems"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Rest of the component content would go here */}

            </div>
        </div>
    );
};

export default PatternPage;
