import { Link } from 'react-router-dom';
import { motion } from "motion/react"

import { useEffect, useRef, useState } from 'react';
import EnhancedCodeBlock from '../common/EnhancedCodeBlock';
import { allProblems as problems } from '../../data/allProblems';
import LeetCodePatterns from '../../pages/LeetcodePatterns';
import patternsData from '../../data/data';

// Helper to normalize pattern names for matching
const normalize = (str) => str && str.toLowerCase().replace(/[^a-z0-9]/g, '');

/**
 * Generic Pattern Page Component for rendering any algorithm pattern
 * 
 * @param {Object} props
 * @param {Object} props.patternData - The data for the pattern to render
 * @param {string} props.patternId - The ID of the pattern (for navigation)
 */
const PatternPage = ({ patternData, patternId }) => {
    // Create refs for scroll navigation
    const overviewRef = useRef(null);
    const variationsRef = useRef(null);
    const tipsRef = useRef(null);
    const pitfallsRef = useRef(null);

    const [problemList, setProblemList] = useState([]);
    useEffect(() => {
        if (!patternData) return; // Prevent error if patternData is undefined
        // Filter problems based on the pattern
        const filteredProblems = problems.filter(problem => {
            const normalizedWord = normalize(patternData.id);
            return problem.patterns.some((p) => normalize(p) === normalizedWord);
        });
        setProblemList(filteredProblems);
    }, [patternData]);

    if (!patternData) {
        // Suggest valid patterns if not found
        const validPatterns = patternsData.map(p => p.id).sort();
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
                    <p className="mb-2 text-error font-semibold">Pattern not found: <span className="font-mono">{patternId}</span></p>
                    <p className="mb-2">Please check the URL or select from the following valid patterns:</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                        {validPatterns.map((id) => (
                            <Link key={id} to={`/pattern/${id}`} className="btn btn-xs btn-outline btn-primary">
                                {id}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-16 pb-20 bg-gradient-to-br from-base-100 to-base-200/50">
            <div className="md:max-w-[80%] lg:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Pattern Header - Blog style, not fixed */}
                <div className="lg:max-w-[80%] mx-auto mt-8 mb-8">
                    <div className="flex items-center mb-2">
                        <Link to="/patterns" className="mr-2 text-primary hover:underline">
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-center mb-2 md:mb-0">
                            <div>
                                <h1 className="text-3xl font-bold leading-tight mb-2">{patternData.title}</h1>
                                <p className="opacity-80 text-base mb-2">{patternData.shortDescription || "A powerful algorithm pattern for solving coding problems"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Content Layout */}
                <article className="prose prose-lg max-w-none mx-auto mt-16">
                    {/* Overview Section */}
                    <section ref={overviewRef} className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p>{patternData.analogy}</p>
                        <p className="mt-4">{patternData.description}</p>
                    </section>

                    {/* Variations Section */}
                    {patternData.variations && (
                        <section ref={variationsRef} className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Variations</h2>
                            {patternData.variations.map((variation, idx) => (
                                <div key={idx} className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2">{variation.name}</h3>
                                    <p className="mb-2">{variation.explanation}</p>
                                    {variation.code && (
                                        <EnhancedCodeBlock code={variation.code} language="cpp" />
                                    )}
                                    {variation.tips && (
                                        <ul className="list-disc ml-6 mt-2">
                                            {variation.tips.map((tip, i) => (
                                                <li key={i}>{tip}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Example Section */}
                    {patternData.example && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Example</h2>
                            <h3 className="text-lg font-semibold mb-2">{patternData.example.title}</h3>
                            <p className="mb-2">{patternData.example.description}</p>
                            {patternData.example.code && (
                                <EnhancedCodeBlock code={patternData.example.code} language="cpp" />
                            )}
                        </section>
                    )}

                    {/* Tips & Tricks Section */}
                    {patternData.tipsAndTricks && (
                        <section ref={tipsRef} className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Tips & Tricks</h2>
                            <ul className="list-disc ml-6">
                                {patternData.tipsAndTricks.map((tip, idx) => (
                                    <li key={idx}>{tip}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Pitfalls Section */}
                    {patternData.pitfalls && (
                        <section ref={pitfallsRef} className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Common Pitfalls</h2>
                            <ul className="list-disc ml-6">
                                {patternData.pitfalls.map((pitfall, idx) => (
                                    <li key={idx}>{pitfall}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Performance Section */}
                    {patternData.performance && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Performance</h2>
                            <ul className="list-disc ml-6">
                                {patternData.performance.map((perf, idx) => (
                                    <li key={idx}>{perf}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <LeetCodePatterns patterns={problemList} />
                </article>
            </div>
        </div>
    );
};

export default PatternPage;
