import { motion } from "motion/react"
import { useState, useMemo } from 'react';
import { useCompletedProblems } from '../hooks/useLocalStorage';
import { Search, Eye, EyeOff, RotateCcw, ExternalLink, Lock } from 'lucide-react';

const LeetCodePatterns = ({ patterns, completedProblems: completedProblemsProp, toggleProblemCompletion: toggleProblemCompletionProp }) => {
    const local = useCompletedProblems();
    const completedProblems = completedProblemsProp || local.completedProblems;
    const toggleProblemCompletion = toggleProblemCompletionProp || local.toggleProblemCompletion;
    const setCompletedProblems = local.setCompletedProblems;

    const [showPatternNames, setShowPatternNames] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [showCompletedOnly, setShowCompletedOnly] = useState(false);
    const [expandedCompanies, setExpandedCompanies] = useState({});

    const resetProgress = () => {
        if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            setCompletedProblems({});
        }
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'text-green-600 bg-green-50 border-green-200';
            case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'Hard': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    const filteredProblems = useMemo(() => {
        return patterns.filter(problem => {
            const matchesSearch = problem.problem_name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty;
            const matchesCompleted = !showCompletedOnly || (completedProblems[problem.problem_name]?.completed === true);

            return matchesSearch && matchesDifficulty && matchesCompleted;
        });
    }, [searchTerm, selectedDifficulty, showCompletedOnly, completedProblems, patterns]);

    const totalProblems = patterns.length;
    const completedCount = patterns.filter(p => completedProblems[p.problem_name]?.completed).length;
    const totalProgress = totalProblems > 0 ? (completedCount / totalProblems) * 100 : 0;

    // Calculate progress by difficulty
    const difficultyStats = useMemo(() => {
        const stats = {
            Easy: { total: 0, completed: 0 },
            Medium: { total: 0, completed: 0 },
            Hard: { total: 0, completed: 0 }
        };
        patterns.forEach(problem => {
            stats[problem.difficulty].total++;
            if (completedProblems[problem.problem_name]?.completed) {
                stats[problem.difficulty].completed++;
            }
        });
        return stats;
    }, [patterns, completedProblems]);

    const toggleCompanyExpansion = (problemName) => {
        setExpandedCompanies((prev) => ({
            ...prev,
            [problemName]: !prev[problemName],
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        LeetCode Patterns
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        A curated list of LeetCode problems grouped by pattern to help you master coding interviews
                    </p>

                    {/* Total Progress Bar */}
                    <div className="max-w-2xl mx-auto mb-6">
                        <div className="text-sm text-gray-600 mb-2">
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
                        {Object.entries(difficultyStats).map(([difficulty, stats], index) => {
                            const percentage = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;
                            return (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className={`font-medium ${getDifficultyColor(difficulty).split(' ')[0]}`}>
                                            {difficulty}
                                        </span>
                                        <span className="text-gray-600">
                                            {stats.completed}/{stats.total} ({Math.round(percentage)}%)
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        >
                            <option value="All">All Difficulties</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="completed-only"
                                checked={showCompletedOnly}
                                onChange={(e) => setShowCompletedOnly(e.target.checked)}
                                className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                            <label htmlFor="completed-only" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Show completed only
                            </label>
                        </div>

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
                                                className={`font-medium hover:text-blue-600 transition-colors ${completedProblems[problem.problem_name]?.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}
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
                                                    <div key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-blue-600 bg-blue-50 border-blue-200">
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
                                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-purple-600 bg-purple-50 border-purple-200"
                                                    title={`Asked ${company.frequency} times`}
                                                >
                                                    {company.name} ({company.frequency})
                                                </div>
                                            ))}
                                            {problem.companies.length > 3 && (
                                                <button
                                                    onClick={() => toggleCompanyExpansion(problem.problem_name)}
                                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-gray-500"
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
                        <div className="text-gray-500 text-lg">
                            No problems found matching your criteria.
                        </div>
                    </motion.div>
                )}

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center text-gray-500 text-sm"
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
