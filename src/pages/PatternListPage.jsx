import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { patternCategories } from '../data/patterns';
import SearchBar from '../components/common/SearchBar';
import UserDashboard from '../components/common/UserDashboard';

const PatternListPage = ({ completedProblems }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPatterns, setFilteredPatterns] = useState(patternCategories);
    const [sortCriteria, setSortCriteria] = useState('default');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');

    // Filter and sort patterns based on search, sort, and difficulty
    useEffect(() => {
        let result = [...patternCategories];

        // Apply search filter
        if (searchTerm) {
            result = result.filter(pattern =>
                pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pattern.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort patterns
        if (sortCriteria === 'name') {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortCriteria === 'count') {
            result.sort((a, b) => b.count - a.count);
        }

        // Apply difficulty filter (in a real app, patterns would have difficulty data)
        if (selectedDifficulty !== 'all') {
            // This is where you would filter by difficulty if each pattern had a difficulty level
        }

        setFilteredPatterns(result);
    }, [searchTerm, sortCriteria, selectedDifficulty]);

    return (
        <div className="min-h-screen pt-20 pb-16">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-2">LeetCode Patterns</h1>
                    <p className="text-lg opacity-80 max-w-2xl mx-auto">
                        Browse all algorithm patterns with their associated problems, organized by categories and techniques.
                    </p>
                </motion.div>

                {/* User Dashboard */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <UserDashboard />
                </motion.div>

                {/* Filters and Search */}
                <motion.div
                    className="mb-8 p-4 bg-base-200 rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="w-full md:w-1/2">
                            <SearchBar
                                placeholder="Search patterns by name or description..."
                                onSearch={setSearchTerm}
                            />
                        </div>

                        <div className="flex flex-1 gap-4 w-full md:w-auto">
                            <select
                                className="select select-bordered flex-1"
                                value={sortCriteria}
                                onChange={(e) => setSortCriteria(e.target.value)}
                            >
                                <option value="default">Sort by: Default</option>
                                <option value="name">Sort by: Name A-Z</option>
                                <option value="count">Sort by: Problem Count</option>
                            </select>

                            <select
                                className="select select-bordered flex-1"
                                value={selectedDifficulty}
                                onChange={(e) => setSelectedDifficulty(e.target.value)}
                            >
                                <option value="all">All Difficulties</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Patterns List */}
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
        </div>
    );
};

// Pattern Card Component
const PatternCard = ({ pattern, index, completedProblems }) => {
    // Calculate completion percentage for this pattern based on completed problems
    const calculateCompletionPercentage = () => {
        if (!completedProblems || Object.keys(completedProblems).length === 0) {
            return 0;
        }

        // This is a simplified implementation
        // In a real app, you'd filter completedProblems by the ones belonging to this pattern
        // For now, just provide a random percentage based on the pattern ID to simulate progress
        return Math.floor(pattern.id.charCodeAt(0) % 100);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="bg-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300"
        >
            <div className={`h-2 ${pattern.color}`}></div>
            <div className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center">
                        <div className="mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pattern.icon} />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold">{pattern.name}</h3>
                    </div>
                    <span className="inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium bg-base-200">
                        {pattern.count} problems
                    </span>
                </div>
                <p className="mt-4 text-sm opacity-80">
                    {pattern.description}
                </p>                <div className="mt-6 mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium">Completion</span>
                        <span className="text-xs font-medium">{calculateCompletionPercentage()}%</span>
                    </div>
                    <div className="w-full bg-base-200 rounded-full h-2">
                        <div
                            className="bg-primary-500 h-2 rounded-full"
                            style={{ width: `${calculateCompletionPercentage()}%` }}
                        ></div>
                    </div>
                </div>

                {pattern.id === 'two-pointers' || pattern.id === 'sliding-window' ? (
                    <Link to={`/patterns/${pattern.id}`} className="block mt-6">
                        <motion.button
                            className="btn btn-block btn-success"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                            Interactive Guide
                        </motion.button>
                    </Link>
                ) : (
                    <Link to={`/pattern/${pattern.id}`} className="block mt-6">
                        <motion.button
                            className="btn btn-block btn-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Explore Pattern
                        </motion.button>
                    </Link>
                )}
            </div>
        </motion.div>
    );
};

// Pattern Analytics Component - Kept for reference
const PatternAnalytic = ({ title, value, icon, bgColor }) => {
    return (
        <div className="flex items-center p-4 rounded-lg border border-base-300 bg-base-100">
            <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center mr-4`}>
                {icon}
            </div>
            <div>
                <div className="text-sm opacity-70">{title}</div>
                <div className="text-2xl font-bold">{value}</div>
            </div>
        </div>
    );
};

export default PatternListPage;
