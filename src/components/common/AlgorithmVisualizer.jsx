import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

/**
 * AlgorithmVisualizer component for creating interactive visualizations of algorithms
 * 
 * @param {Object} props
 * @param {string} props.type - The type of algorithm visualization ('twoPointers', 'slidingWindow')
 * @param {string} props.variant - The specific variant of the algorithm ('opposite', 'sameDirection', 'fixedWindow', 'dynamicWindow')
 * @param {Array} props.data - The data to visualize (array of numbers or characters)
 * @param {number} props.speed - The animation speed (1-5, with 1 being slowest)
 * @param {function} props.onComplete - Callback function called when animation completes
 */
const AlgorithmVisualizer = ({
    type = 'twoPointers',
    variant = 'opposite',
    data = [1, 2, 3, 4, 5, 6, 7, 8],
    speed = 3,
    onComplete = () => { }
}) => {
    const [animationState, setAnimationState] = useState('initial'); // 'initial', 'playing', 'paused', 'completed'
    const [currentStep, setCurrentStep] = useState(0);
    const [totalSteps, setTotalSteps] = useState(0);
    const [pointers, setPointers] = useState({});
    const [explanation, setExplanation] = useState('');
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);

    const speedMs = 1000 / speed;

    // Initialize visualization based on algorithm type and variant
    useEffect(() => {
        if (type === 'twoPointers') {
            if (variant === 'opposite') {
                setPointers({ left: 0, right: data.length - 1 });
                setTotalSteps(Math.ceil(data.length / 2));
                setExplanation('Two pointers start at opposite ends and move toward each other');
            } else if (variant === 'sameDirection') {
                setPointers({ slow: 0, fast: 1 });
                setTotalSteps(data.length - 1);
                setExplanation('Slow and fast pointers both move in the same direction');
            }
        } else if (type === 'slidingWindow') {
            if (variant === 'fixedWindow') {
                const windowSize = Math.min(3, Math.floor(data.length / 2));
                setPointers({ start: 0, end: windowSize - 1 });
                setTotalSteps(data.length - windowSize + 1);
                setExplanation(`Fixed window of size ${windowSize} slides through the array`);
            } else if (variant === 'dynamicWindow') {
                setPointers({ start: 0, end: 0 });
                setTotalSteps(data.length * 2 - 2); // Approximate for dynamic window
                setExplanation('Window size changes dynamically based on conditions');
            }
        }
        setCurrentStep(0);
        setAnimationState('initial');
    }, [type, variant, data]);

    // Handle auto-play animation
    useEffect(() => {
        let animationInterval;
        if (isAutoPlaying && animationState === 'playing') {
            animationInterval = setInterval(() => {
                setCurrentStep(prev => {
                    if (prev >= totalSteps - 1) {
                        setIsAutoPlaying(false);
                        setAnimationState('completed');
                        onComplete();
                        clearInterval(animationInterval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, speedMs);
        }
        return () => clearInterval(animationInterval);
    }, [isAutoPlaying, animationState, totalSteps, speedMs, onComplete]);

    // Update pointers based on current step and algorithm type
    useEffect(() => {
        if (animationState === 'initial') return;

        if (type === 'twoPointers') {
            if (variant === 'opposite') {
                setPointers(prev => ({
                    left: Math.min(prev.left + (currentStep > 0 ? 1 : 0), Math.floor(data.length / 2)),
                    right: Math.max(prev.right - (currentStep > 0 ? 1 : 0), Math.ceil(data.length / 2) - 1)
                }));
            } else if (variant === 'sameDirection') {
                setPointers(prev => ({
                    slow: Math.min(prev.slow + (currentStep > 0 ? 1 : 0), data.length - 2),
                    fast: Math.min(prev.slow + (currentStep > 0 ? 1 : 0) + 1, data.length - 1)
                }));
            }
        } else if (type === 'slidingWindow') {
            if (variant === 'fixedWindow') {
                const windowSize = Math.min(3, Math.floor(data.length / 2));
                setPointers(prev => ({
                    start: Math.min(currentStep, data.length - windowSize),
                    end: Math.min(currentStep + windowSize - 1, data.length - 1)
                }));
            } else if (variant === 'dynamicWindow') {
                // Simplified dynamic window behavior
                const halfSteps = Math.floor(totalSteps / 2);
                if (currentStep <= halfSteps) {
                    setPointers(prev => ({
                        start: 0,
                        end: Math.min(currentStep, data.length - 1)
                    }));
                } else {
                    setPointers(prev => ({
                        start: Math.min(currentStep - halfSteps, data.length - 2),
                        end: data.length - 1
                    }));
                }
            }
        }
    }, [currentStep, type, variant, data.length, totalSteps]);

    // Animation controls
    const playAnimation = () => {
        setAnimationState('playing');
        setIsAutoPlaying(true);
    };

    const pauseAnimation = () => {
        setAnimationState('paused');
        setIsAutoPlaying(false);
    };

    const resetAnimation = () => {
        setCurrentStep(0);
        setAnimationState('initial');
        setIsAutoPlaying(false);
        if (type === 'twoPointers') {
            if (variant === 'opposite') {
                setPointers({ left: 0, right: data.length - 1 });
            } else {
                setPointers({ slow: 0, fast: 1 });
            }
        } else if (type === 'slidingWindow') {
            if (variant === 'fixedWindow') {
                const windowSize = Math.min(3, Math.floor(data.length / 2));
                setPointers({ start: 0, end: windowSize - 1 });
            } else {
                setPointers({ start: 0, end: 0 });
            }
        }
    };

    const stepForward = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(prev => prev + 1);
            if (animationState === 'initial') {
                setAnimationState('paused');
            }
        } else {
            setAnimationState('completed');
            onComplete();
        }
    };

    const stepBackward = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            if (animationState === 'completed') {
                setAnimationState('paused');
            }
        }
    };

    // Generate dynamic explanation based on the current state
    const getCurrentExplanation = () => {
        if (type === 'twoPointers') {
            if (variant === 'opposite') {
                if (pointers.left >= pointers.right) {
                    return `Pointers have met or crossed. Algorithm complete.`;
                }
                return `Left pointer at index ${pointers.left} (value: ${data[pointers.left]}) and right pointer at index ${pointers.right} (value: ${data[pointers.right]})`;
            } else {
                return `Slow pointer at index ${pointers.slow} (value: ${data[pointers.slow]}) and fast pointer at index ${pointers.fast} (value: ${data[pointers.fast]})`;
            }
        } else if (type === 'slidingWindow') {
            const windowSize = pointers.end - pointers.start + 1;
            const windowValues = data.slice(pointers.start, pointers.end + 1);
            const sum = windowValues.reduce((acc, val) => acc + val, 0);

            if (variant === 'fixedWindow') {
                return `Window from index ${pointers.start} to ${pointers.end} (size: ${windowSize}, sum: ${sum})`;
            } else {
                return `Dynamic window from index ${pointers.start} to ${pointers.end} (size: ${windowSize}, sum: ${sum})`;
            }
        }
        return explanation;
    };

    return (
        <div className="bg-base-200 rounded-xl p-6 shadow-md">
            <div className="mb-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                    {type === 'twoPointers' ? 'Two Pointers' : 'Sliding Window'} Visualization
                    <span className="text-xs ml-2 badge badge-primary">
                        {variant === 'opposite' ? 'Opposite Direction' :
                            variant === 'sameDirection' ? 'Same Direction' :
                                variant === 'fixedWindow' ? 'Fixed Window' : 'Dynamic Window'}
                    </span>
                </h3>
                <div className="flex space-x-2">
                    <button
                        className="btn btn-xs btn-outline"
                        onClick={() => resetAnimation()}
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="bg-base-100 rounded-lg p-4 mb-4 min-h-[150px]">
                <div className="flex justify-center items-center gap-1 mb-6 py-4">
                    {data.map((value, index) => {
                        const isActiveLeft = (type === 'twoPointers' && variant === 'opposite' && index === pointers.left) ||
                            (type === 'twoPointers' && variant === 'sameDirection' && index === pointers.slow) ||
                            (type === 'slidingWindow' && index === pointers.start);

                        const isActiveRight = (type === 'twoPointers' && variant === 'opposite' && index === pointers.right) ||
                            (type === 'twoPointers' && variant === 'sameDirection' && index === pointers.fast) ||
                            (type === 'slidingWindow' && index === pointers.end);

                        const isInWindow = type === 'slidingWindow' &&
                            index >= pointers.start &&
                            index <= pointers.end;

                        return (
                            <motion.div
                                key={index}
                                className={`w-10 h-10 flex items-center justify-center rounded-md border
                            ${isActiveLeft ? 'border-primary bg-primary-100 text-primary-800 font-bold' :
                                        isActiveRight ? 'border-secondary bg-secondary-100 text-secondary-800 font-bold' :
                                            isInWindow ? 'border-accent bg-accent-100 text-accent-800' :
                                                'border-base-300'}`}
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: isActiveLeft || isActiveRight ? 1.1 : 1,
                                    y: isInWindow && !isActiveLeft && !isActiveRight ? -5 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {value}
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center mb-4">
                    <p className="text-sm px-4 py-2 bg-base-200 rounded inline-block">
                        {getCurrentExplanation()}
                    </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-2">
                        <button
                            className="btn btn-sm btn-outline"
                            onClick={stepBackward}
                            disabled={currentStep === 0}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {animationState === 'playing' ? (
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={pauseAnimation}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Pause
                            </button>
                        ) : (
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={playAnimation}
                                disabled={animationState === 'completed'}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Play
                            </button>
                        )}

                        <button
                            className="btn btn-sm btn-outline"
                            onClick={stepForward}
                            disabled={currentStep >= totalSteps - 1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="text-sm opacity-70">
                        Step {currentStep + 1} of {totalSteps}
                    </div>
                </div>
            </div>

            <div className="text-sm opacity-70 text-center">
                {animationState === 'completed' ?
                    "Visualization complete. Press 'Reset' to start over." :
                    "Press 'Play' to start automatic animation or use step controls to navigate manually."}
            </div>
        </div>
    );
};

export default AlgorithmVisualizer;
