import { useState, useEffect } from 'react';

/**
 * Custom hook for persistent state with localStorage
 * @param {string} key - The localStorage key
 * @param {any} initialValue - Default value when no value exists in localStorage
 * @returns {[any, Function]} - State value and setter
 */
export function useLocalStorage(key, initialValue) {
    // Get initial value from localStorage or use provided initialValue
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    // Update localStorage when state changes
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

/**
 * Custom hook specifically for tracking completed problems
 */
export function useCompletedProblems() {
    const [completedProblems, setCompletedProblems] = useLocalStorage('completedProblems', {});

    // Toggle the completion status of a problem
    const toggleProblemCompletion = (problemId) => {
        setCompletedProblems(prev => ({
            ...prev,
            [problemId]: {
                completed: !prev[problemId]?.completed,
                lastSolved: !prev[problemId]?.completed ? new Date().toISOString() : prev[problemId]?.lastSolved,
                toggleCount: (prev[problemId]?.toggleCount || 0) + 1
            }
        }));
    };

    // Get statistics about completed problems
    const getStats = () => {
        const completed = Object.values(completedProblems).filter(p => p.completed).length;
        const total = 0; // This would need to be calculated from your actual problems data

        // Count problems completed in the last week
        const now = new Date();
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        const lastWeek = Object.values(completedProblems)
            .filter(p => p.completed && new Date(p.lastSolved) > oneWeekAgo)
            .length;

        return {
            completed,
            total,
            lastWeek,
            percentComplete: total ? Math.round((completed / total) * 100) : 0
        };
    };

    // Check if a specific problem is completed
    const isProblemCompleted = (problemId) => {
        return completedProblems[problemId]?.completed || false;
    };

    return {
        completedProblems,
        toggleProblemCompletion,
        getStats,
        isProblemCompleted
    };
}
