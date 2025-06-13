import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { marked } from 'marked';
import { patternCategories, problemsByPattern, patternTheory } from '../data/patterns';
import CodeBlock from '../components/common/CodeBlock';

const PatternDetailPage = ({ completedProblems, toggleProblemCompletion }) => {
    const { patternId } = useParams();
    const navigate = useNavigate();

    const [pattern, setPattern] = useState(null);
    const [problems, setProblems] = useState([]);
    const [theory, setTheory] = useState(null);
    const [activeTab, setActiveTab] = useState('theory');
    const [filterDifficulty, setFilterDifficulty] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [showCompleted, setShowCompleted] = useState(true);
    const [sortBy, setSortBy] = useState('default');
    const [filteredProblems, setFilteredProblems] = useState([]);

    // Fetch pattern, problems, and theory data based on patternId
    useEffect(() => {
        // Find the pattern
        const foundPattern = patternCategories.find(p => p.id === patternId);
        if (!foundPattern) {
            navigate('/patterns', { replace: true });
            return;
        }

        setPattern(foundPattern);

        // Get problems for this pattern
        const patternProblems = problemsByPattern[patternId] || [];
        setProblems(patternProblems);

        // Get theory for this pattern
        const patternTheoryData = patternTheory[patternId];
        setTheory(patternTheoryData);
    }, [patternId, navigate]);

    // Filter and sort problems
    useEffect(() => {
        if (!problems) return;

        let filtered = [...problems];

        // Filter by difficulty
        if (filterDifficulty !== 'all') {
            filtered = filtered.filter(
                problem => problem.difficulty.toLowerCase() === filterDifficulty.toLowerCase()
            );
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(
                problem =>
                    problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    problem.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by completion status
        if (!showCompleted) {
            filtered = filtered.filter(
                problem => !completedProblems[problem.id]?.completed
            );
        }

        // Sort problems
        if (sortBy === 'difficulty') {
            const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
            filtered.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        } else if (sortBy === 'completion') {
            filtered.sort((a, b) => {
                const aCompleted = completedProblems[a.id]?.completed || false;
                const bCompleted = completedProblems[b.id]?.completed || false;
                return aCompleted === bCompleted ? 0 : aCompleted ? -1 : 1;
            });
        }

        setFilteredProblems(filtered);
    }, [problems, filterDifficulty, searchTerm, showCompleted, sortBy, completedProblems]);

    // Loading state
    if (!pattern || !theory) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary"></div>
                    <p className="mt-4">Loading pattern data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 pb-16">
            <div className="container mx-auto px-4">
                {/* Pattern Header */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center mb-2">
                        <Link to="/patterns" className="mr-2 text-primary-500 hover:underline">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Back to Patterns
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className={`w-12 h-12 rounded-xl ${pattern.color} flex items-center justify-center mr-4`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pattern.icon} />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold">{pattern.name}</h1>
                                <p className="opacity-80">{pattern.description}</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="py-2 px-3 rounded-lg bg-base-200 text-sm">
                                <span className="font-semibold">{problems.length}</span> Problems
                            </div>
                            <div className="py-2 px-3 rounded-lg bg-base-200 text-sm">
                                <span className="font-semibold">
                                    {Object.values(completedProblems || {})
                                        .filter(p => p.completed && problems.some(prob => prob.id === p.id))
                                        .length
                                    }
                                </span> Completed
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Pattern Tabs */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="tabs tabs-boxed p-1 bg-base-200">
                        <button
                            className={`tab tab-sm md:tab-md grow ${activeTab === 'theory' ? 'tab-active' : ''}`}
                            onClick={() => setActiveTab('theory')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Theory
                        </button>
                        <button
                            className={`tab tab-sm md:tab-md grow ${activeTab === 'tips' ? 'tab-active' : ''}`}
                            onClick={() => setActiveTab('tips')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Tips & Tricks
                        </button>
                        <button
                            className={`tab tab-sm md:tab-md grow ${activeTab === 'pitfalls' ? 'tab-active' : ''}`}
                            onClick={() => setActiveTab('pitfalls')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Common Pitfalls
                        </button>
                        <button
                            className={`tab tab-sm md:tab-md grow ${activeTab === 'problems' ? 'tab-active' : ''}`}
                            onClick={() => setActiveTab('problems')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Problems
                        </button>
                    </div>
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === 'theory' && (
                            <div className="bg-base-100 rounded-xl p-6 shadow-lg">
                                <div className="prose prose-lg max-w-none">
                                    <TheoryContent theory={theory.theory} />
                                </div>
                            </div>
                        )}

                        {activeTab === 'tips' && (
                            <div className="bg-base-100 rounded-xl p-6 shadow-lg">
                                <h2 className="text-2xl font-bold mb-6">Tips & Tricks</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {theory.tips.map((tip, index) => (
                                        <div key={index} className="bg-base-200 rounded-lg p-4">
                                            <div className="flex items-start">
                                                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-1 shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p>{tip}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'pitfalls' && (
                            <div className="bg-base-100 rounded-xl p-6 shadow-lg">
                                <h2 className="text-2xl font-bold mb-6">Common Pitfalls</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    {theory.pitfalls.map((pitfall, index) => (
                                        <div key={index} className="bg-base-200 rounded-lg p-4">
                                            <div className="flex items-start">
                                                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-1 shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-lg">{pitfall}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {theory.analogies && (
                                    <div className="mt-12">
                                        <h2 className="text-2xl font-bold mb-6">Real-World Analogies</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {theory.analogies.map((analogy, index) => (
                                                <div key={index} className="bg-base-200 rounded-lg p-6">
                                                    <h3 className="text-xl font-semibold mb-3">{analogy.title}</h3>
                                                    <p>{analogy.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'problems' && (
                            <div>
                                {/* Problem Filters */}
                                <div className="bg-base-100 rounded-xl p-6 shadow-lg mb-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                        <div className="relative w-full md:w-1/3">
                                            <input
                                                type="text"
                                                placeholder="Search problems..."
                                                className="w-full pl-10 pr-4 py-2 rounded-lg input input-bordered"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-sm font-medium whitespace-nowrap">Difficulty:</span>
                                                <select
                                                    value={filterDifficulty}
                                                    onChange={(e) => setFilterDifficulty(e.target.value)}
                                                    className="select select-sm select-bordered"
                                                >
                                                    <option value="all">All</option>
                                                    <option value="easy">Easy</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="hard">Hard</option>
                                                </select>
                                            </div>

                                            <div className="flex items-center">
                                                <span className="mr-2 text-sm font-medium whitespace-nowrap">Sort by:</span>
                                                <select
                                                    value={sortBy}
                                                    onChange={(e) => setSortBy(e.target.value)}
                                                    className="select select-sm select-bordered"
                                                >
                                                    <option value="default">Default</option>
                                                    <option value="difficulty">Difficulty</option>
                                                    <option value="completion">Completion</option>
                                                </select>
                                            </div>

                                            <div className="flex items-center">
                                                <label className="cursor-pointer label flex items-center space-x-2">
                                                    <span className="label-text text-sm font-medium">Show Completed</span>
                                                    <input
                                                        type="checkbox"
                                                        className="toggle toggle-sm toggle-primary"
                                                        checked={showCompleted}
                                                        onChange={() => setShowCompleted(!showCompleted)}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Problem Analytics */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                        <div className="flex items-center p-4 rounded-lg bg-base-200">
                                            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-sm">Easy Problems</div>
                                                <div className="text-xl font-semibold">
                                                    {problems.filter(p => p.difficulty === 'Easy').length}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-4 rounded-lg bg-base-200">
                                            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-sm">Medium Problems</div>
                                                <div className="text-xl font-semibold">
                                                    {problems.filter(p => p.difficulty === 'Medium').length}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-4 rounded-lg bg-base-200">
                                            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-sm">Hard Problems</div>
                                                <div className="text-xl font-semibold">
                                                    {problems.filter(p => p.difficulty === 'Hard').length}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Problem Progress Bar */}
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium">Overall Progress</span>
                                            <span className="text-sm font-medium">
                                                {Object.values(completedProblems || {})
                                                    .filter(p => p.completed && problems.some(prob => prob.id === p.id))
                                                    .length
                                                } / {problems.length}
                                            </span>
                                        </div>
                                        <div className="w-full bg-base-200 rounded-full h-2.5">
                                            <div
                                                className="bg-primary-500 h-2.5 rounded-full"
                                                style={{
                                                    width: `${(Object.values(completedProblems || {})
                                                        .filter(p => p.completed && problems.some(prob => prob.id === p.id))
                                                        .length / problems.length) * 100}%`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Problem List */}
                                <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
                                    {filteredProblems.length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="table table-zebra">
                                                <thead>
                                                    <tr className="bg-base-200">
                                                        <th className="w-16"></th> {/* Status */}
                                                        <th>Problem</th>
                                                        <th>Difficulty</th>
                                                        <th>Companies</th>
                                                        <th>Last Solved</th>
                                                        <th></th> {/* Actions */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredProblems.map((problem) => {
                                                        const isCompleted = completedProblems[problem.id]?.completed || false;
                                                        const lastSolved = completedProblems[problem.id]?.lastSolved;

                                                        return (
                                                            <motion.tr
                                                                key={problem.id}
                                                                whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                                                                className="cursor-pointer hover"
                                                            >
                                                                <td>
                                                                    <label className="swap">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={isCompleted}
                                                                            onChange={() => toggleProblemCompletion(problem.id)}
                                                                        />
                                                                        <div className="swap-on text-success">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                            </svg>
                                                                        </div>
                                                                        <div className="swap-off text-base-300">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                                                            </svg>
                                                                        </div>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href={problem.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="flex items-center"
                                                                    >
                                                                        <div>
                                                                            <div className="font-medium">{problem.title}</div>
                                                                            <div className="text-xs opacity-60">#{problem.number}</div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className={`px-2 py-1 rounded-full text-xs font-medium ${problem.difficulty === 'Easy'
                                                                            ? 'bg-green-100 text-green-800'
                                                                            : problem.difficulty === 'Medium'
                                                                                ? 'bg-yellow-100 text-yellow-800'
                                                                                : 'bg-red-100 text-red-800'
                                                                            }`}
                                                                    >
                                                                        {problem.difficulty}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <div className="flex space-x-1">
                                                                        {problem.companies.slice(0, 3).map(company => (
                                                                            <div
                                                                                key={company}
                                                                                className="w-6 h-6 rounded-full bg-base-200 flex items-center justify-center text-xs tooltip"
                                                                                data-tip={company}
                                                                            >
                                                                                {company[0]}
                                                                            </div>
                                                                        ))}
                                                                        {problem.companies.length > 3 && (
                                                                            <div className="w-6 h-6 rounded-full bg-base-200 flex items-center justify-center text-xs tooltip" data-tip={problem.companies.slice(3).join(', ')}>
                                                                                +{problem.companies.length - 3}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {lastSolved ? new Date(lastSolved).toLocaleDateString() : '-'}
                                                                </td>
                                                                <td className="text-right">
                                                                    <a
                                                                        href={problem.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="btn btn-sm btn-outline"
                                                                    >
                                                                        Solve
                                                                    </a>
                                                                </td>
                                                            </motion.tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className="p-12 text-center">
                                            <div className="text-5xl mb-4">🔍</div>
                                            <h3 className="text-xl font-semibold mb-2">No problems found</h3>
                                            <p className="opacity-80">Try adjusting your search or filters</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

// Helper component to render markdown content
const TheoryContent = ({ theory }) => {
    // Using marked to render markdown as HTML
    const createMarkup = () => {
        return { __html: marked(theory) };
    };

    return (
        <div
            className="markdown-content"
            dangerouslySetInnerHTML={createMarkup()}
        />
    );
};

export default PatternDetailPage;
