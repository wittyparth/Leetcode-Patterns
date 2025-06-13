import { patternCategories, problemsByPattern } from '../data/patterns';

/**
 * Search service for finding patterns and problems
 */
class SearchService {
    /**
     * Search for patterns by name or description
     * @param {string} query - Search query
     * @returns {Array} - Filtered patterns
     */
    static searchPatterns(query) {
        if (!query) return patternCategories;

        const searchTerm = query.toLowerCase().trim();

        return patternCategories.filter(pattern =>
            pattern.name.toLowerCase().includes(searchTerm) ||
            pattern.description.toLowerCase().includes(searchTerm)
        );
    }

    /**
     * Search for problems across all patterns or within a specific pattern
     * @param {string} query - Search query
     * @param {string} patternId - Optional pattern ID to limit the search
     * @returns {Array} - Filtered problems with their associated pattern ID
     */
    static searchProblems(query, patternId = null) {
        if (!query && !patternId) {
            // Return all problems flattened with pattern reference
            return Object.entries(problemsByPattern).flatMap(([patternId, problems]) =>
                problems.map(problem => ({
                    ...problem,
                    patternId
                }))
            );
        }

        const searchTerm = query?.toLowerCase().trim() || '';
        const patterns = patternId ? [patternId] : Object.keys(problemsByPattern);

        // Filter problems by search term and pattern
        return patterns.flatMap(patternId => {
            const problems = problemsByPattern[patternId] || [];

            return problems
                .filter(problem =>
                    !searchTerm ||
                    problem.title.toLowerCase().includes(searchTerm) ||
                    problem.description.toLowerCase().includes(searchTerm) ||
                    (problem.leetcodeId && problem.leetcodeId.toString().includes(searchTerm))
                )
                .map(problem => ({
                    ...problem,
                    patternId
                }));
        });
    }

    /**
     * Get problems by difficulty
     * @param {string} difficulty - Problem difficulty (easy, medium, hard)
     * @returns {Array} - Problems filtered by difficulty
     */
    static getByDifficulty(difficulty) {
        if (!difficulty || difficulty === 'all') {
            return this.searchProblems();
        }

        const difficultyLower = difficulty.toLowerCase();

        return this.searchProblems().filter(
            problem => problem.difficulty.toLowerCase() === difficultyLower
        );
    }

    /**
     * Get problem details by ID
     * @param {string} problemId - Problem ID
     * @returns {Object} - Problem details or null if not found
     */
    static getProblem(problemId) {
        for (const [patternId, problems] of Object.entries(problemsByPattern)) {
            const problem = problems.find(p => p.id === problemId);
            if (problem) {
                return {
                    ...problem,
                    patternId
                };
            }
        }

        return null;
    }

    /**
     * Get pattern by ID
     * @param {string} patternId - Pattern ID
     * @returns {Object} - Pattern details or null if not found
     */
    static getPattern(patternId) {
        return patternCategories.find(p => p.id === patternId) || null;
    }
}

export default SearchService;
