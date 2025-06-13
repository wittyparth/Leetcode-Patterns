import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import patternsData from '../data/leetcode_problems.json';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Search, Eye, EyeOff, RotateCcw, ExternalLink, Lock } from 'lucide-react';

const LeetCodePatterns = ({ patterns }) => {
    const [completedProblems, setCompletedProblems] = useLocalStorage('leetcode-completed', {});
    const [showPatternNames, setShowPatternNames] = useLocalStorage('leetcode-show-pattern-names', true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [expandedCompanies, setExpandedCompanies] = useState({});
    const [completionFilter, setCompletionFilter] = useState('all'); // all, completed, uncompleted
    const [patternTag, setPatternTag] = useState('all');
    const [companyFilter, setCompanyFilter] = useState('all');

    const toggleProblemCompletion = (problemName) => {
        setCompletedProblems(prev => ({
            ...prev,
            [problemName]: {
                completed: !prev[problemName]?.completed,
                lastSolved: !prev[problemName]?.completed ? new Date().toISOString() : prev[problemName]?.lastSolved,
                toggleCount: (prev[problemName]?.toggleCount || 0) + 1
            }
        }));
    };

    // Use the provided patterns prop if available, otherwise use all problems
    const allProblems = useMemo(() => {
        if (patterns && Array.isArray(patterns)) return patterns;
        return patternsData.problems;
    }, [patterns]);

    // Get all unique pattern tags
    const allPatternTags = useMemo(() => {
        const tags = new Set();
        allProblems.forEach(p => p.patterns && p.patterns.forEach(tag => tags.add(tag)));
        return Array.from(tags);
    }, [allProblems]);

    // Get all unique companies
    const allCompanies = useMemo(() => {
        const companies = new Set();
        allProblems.forEach(p => p.companies && p.companies.forEach(c => companies.add(c.name)));
        return Array.from(companies);
    }, [allProblems]);

    // Always filter for completed problems
    const filteredProblems = useMemo(() => {
        return allProblems.filter(problem => {
            const matchesSearch = problem.problem_name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty;
            // Completion filter
            const isCompleted = completedProblems[problem.problem_name]?.completed;
            let matchesCompletion = true;
            if (completionFilter === 'completed') matchesCompletion = isCompleted;
            else if (completionFilter === 'uncompleted') matchesCompletion = !isCompleted;
            // Pattern tag filter
            let matchesPattern = patternTag === 'all' || (problem.patterns && problem.patterns.includes(patternTag));
            // Company filter
            let matchesCompany = companyFilter === 'all' || (problem.companies && problem.companies.some(c => c.name === companyFilter));
            return matchesSearch && matchesDifficulty && matchesCompletion && matchesPattern && matchesCompany;
        });
    }, [searchTerm, selectedDifficulty, completedProblems, allProblems, completionFilter, patternTag, companyFilter]);

    // Reset progress: clear all completed problems
    const resetProgress = () => {
        setCompletedProblems({});
    };

    // Pattern tag badge color
    const getPatternTagColor = (pattern) => {
        // Example: assign colors based on pattern name
        if (/dfs|depth/i.test(pattern)) return 'bg-red-100 text-red-700 border-red-200';
        if (/bfs|breadth/i.test(pattern)) return 'bg-indigo-100 text-indigo-700 border-indigo-200';
        if (/dp|dynamic/i.test(pattern)) return 'bg-purple-100 text-purple-700 border-purple-200';
        if (/greedy/i.test(pattern)) return 'bg-green-100 text-green-700 border-green-200';
        if (/sliding/i.test(pattern)) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
        if (/two pointers/i.test(pattern)) return 'bg-blue-100 text-blue-700 border-blue-200';
        return 'bg-base-200 text-base-content border-base-300';
    };
    // Company tag badge color
    const getCompanyTagColor = () => 'bg-purple-50 text-purple-600 border-purple-200';
    // Difficulty tag color (restore previous vibrant style)
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'text-green-700 bg-green-100 border-green-200';
            case 'Medium': return 'text-yellow-700 bg-yellow-100 border-yellow-200';
            case 'Hard': return 'text-red-700 bg-red-100 border-red-200';
            default: return 'text-base-content bg-base-200 border-base-300';
        }
    };

    const totalProblems = allProblems.length;
    const completedCount = allProblems.filter(p => completedProblems[p.problem_name]?.completed).length;
    const totalProgress = totalProblems > 0 ? (completedCount / totalProblems) * 100 : 0;

    // Calculate progress by difficulty
    const difficultyStats = useMemo(() => {
        const stats = {
            Easy: { total: 0, completed: 0 },
            Medium: { total: 0, completed: 0 },
            Hard: { total: 0, completed: 0 }
        };
        allProblems.forEach(problem => {
            stats[problem.difficulty].total++;
            if (completedProblems[problem.problem_name]?.completed) {
                stats[problem.difficulty].completed++;
            }
        });
        return stats;
    }, [allProblems, completedProblems]);

    const toggleCompanyExpansion = (problemName) => {
        setExpandedCompanies((prev) => ({
            ...prev,
            [problemName]: !prev[problemName],
        }));
    };

    return (
        <div className="min-h-screen bg-base-100 text-base-content">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl font-bold text-base-content mb-4">
                        LeetCode Patterns
                    </h1>
                    <p className="text-xl text-base-content/70 mb-6">
                        A curated list of LeetCode problems grouped by pattern to help you master coding interviews
                    </p>

                    {/* Total Progress Bar */}
                    <div className="max-w-2xl mx-auto mb-6">
                        <div className="text-sm text-base-content/70 mb-2">
                            Total Progress: {completedCount}/{totalProblems} ({Math.round(totalProgress)}%)
                        </div>
                        <div className="w-full bg-secondary rounded-full h-3 mb-6">
                            <motion.div
                                className="bg-primary h-3 rounded-full transition-all duration-500 ease-out"
                                initial={{ width: 0 }}
                                animate={{ width: `${totalProgress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>

                    {/* Difficulty Progress Bars */}
                    <div className="max-w-2xl mx-auto mb-6 space-y-4">
                        {Object.entries(difficultyStats).map(([difficulty, stats]) => {
                            const percentage = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;
                            return (
                                <div key={difficulty} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className={`font-medium ${getDifficultyColor(difficulty).split(' ')[0]}`}>
                                            {difficulty}
                                        </span>
                                        <span className="text-base-content/70">
                                            {stats.completed}/{stats.total} ({Math.round(percentage)}%)
                                        </span>
                                    </div>
                                    <div className="w-full bg-base-200 rounded-full h-2">
                                        <motion.div
                                            className={`h-2 rounded-full ${difficulty === 'Easy' ? 'bg-green-500' :
                                                difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                                                }`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-background rounded-lg shadow-sm border p-6 mb-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Search problems..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            />
                        </div>

                        <select
                            value={selectedDifficulty}
                            onChange={(e) => setSelectedDifficulty(e.target.value)}
                            className="select select-bordered w-full"
                        >
                            <option value="All">All Difficulties</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>

                        <select
                            value={completionFilter}
                            onChange={e => setCompletionFilter(e.target.value)}
                            className="select select-bordered w-full"
                        >
                            <option value="all">All Problems</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                        <select
                            value={patternTag}
                            onChange={e => setPatternTag(e.target.value)}
                            className="select select-bordered w-full"
                        >
                            <option value="all">All Patterns</option>
                            {allPatternTags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>
                        <select
                            value={companyFilter}
                            onChange={e => setCompanyFilter(e.target.value)}
                            className="select select-bordered w-full"
                        >
                            <option value="all">All Companies</option>
                            {allCompanies.map(company => (
                                <option key={company} value={company}>{company}</option>
                            ))}
                        </select>
                        <button
                            onClick={resetProgress}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
                        >
                            <RotateCcw className="h-4 w-4" />
                            <span>Reset Progress</span>
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setShowPatternNames(!showPatternNames)}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
                        >
                            {showPatternNames ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span>{showPatternNames ? 'Hide' : 'Show'} Pattern Names</span>
                        </button>
                    </div>
                </motion.div>

                {/* Single Problems Table */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-background rounded-lg shadow-sm border overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase tracking-wider w-12">
                                        Done
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase tracking-wider">
                                        Problem
                                    </th>
                                    {showPatternNames && (
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase tracking-wider">
                                            Pattern
                                        </th>
                                    )}
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase tracking-wider w-24">
                                        Difficulty
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase tracking-wider w-20">
                                        Solutions
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase tracking-wider">
                                        Companies
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-background divide-y divide-border">
                                {filteredProblems.map((problem, problemIndex) => (<motion.tr
                                    key={problem.problem_name}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: problemIndex * 0.01 }}
                                    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                    <td className="p-4 align-middle">                                            <input
                                        type="checkbox"
                                        checked={completedProblems[problem.problem_name]?.completed || false}
                                        onChange={() => toggleProblemCompletion(problem.problem_name)}
                                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                    />
                                    </td>
                                    <td className="p-4 align-middle">
                                        <div className="flex items-center space-x-2">
                                            <a
                                                href={problem.problem_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`font-medium hover:text-primary transition-colors ${completedProblems[problem.problem_name]?.completed ? 'line-through text-base-content/50' : 'text-base-content'}`}
                                            >
                                                {problem.problem_name}
                                            </a>
                                            {problem.premium && (
                                                <Lock className="h-4 w-4 text-yellow-600" />
                                            )}
                                        </div>
                                    </td>
                                    {showPatternNames && (
                                        <td className="p-4 align-middle">
                                            <div className="flex flex-wrap gap-1">
                                                {problem.patterns.map((pattern, index) => (
                                                    <div key={index} className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${getPatternTagColor(pattern)}`}>
                                                        {pattern}
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    )}
                                    <td className="p-4 align-middle">
                                        <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${getDifficultyColor(problem.difficulty)}`}>
                                            {problem.difficulty}
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle">
                                        <a
                                            href={problem.solution_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center space-x-1"
                                        >
                                            <ExternalLink className="h-3 w-3" />
                                            <span className="text-xs">Solutions</span>
                                        </a>
                                    </td>
                                    <td className="p-4 align-middle">
                                        <div className="flex flex-wrap gap-1">
                                            {(expandedCompanies[problem.problem_name] ? problem.companies : problem.companies.slice(0, 3)).map((company, index) => (
                                                <div
                                                    key={index}
                                                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${getCompanyTagColor()}`}
                                                    title={`Asked ${company.frequency} times`}
                                                >
                                                    {company.name} ({company.frequency})
                                                </div>
                                            ))}
                                            {problem.companies.length > 3 && (
                                                <button
                                                    onClick={() => toggleCompanyExpansion(problem.problem_name)}
                                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-base-content/60"
                                                >
                                                    {expandedCompanies[problem.problem_name] ? 'Show Less' : `+${problem.companies.length - 3}`}
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {filteredProblems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-base-content/60 text-lg">
                            No problems found matching your criteria.
                        </div>
                    </motion.div>
                )}

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center text-base-content/60 text-sm"
                >
                    <p>
                        This is a curated list of LeetCode problems to help you prepare for coding interviews.
                        <br />
                        Practice consistently and track your progress to improve your problem-solving skills.
                    </p>
                </motion.footer>
            </div>
        </div>
    );
};

export default LeetCodePatterns;
