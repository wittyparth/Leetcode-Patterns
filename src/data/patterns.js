import { allProblems } from './allProblems';

// Helper to normalize pattern names for matching
function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}
const patternsData = [
    {
        "id": "two-pointers",
        "title": "Two Pointers",
        "analogy": "Imagine two detectives searching a long hallway from opposite ends, meeting in the middle to solve a mystery more quickly than searching every room individually.",
        "description": "A fundamental technique for array/string problems where two indices traverse the data structure (toward each other or same direction) to reduce time complexity from O(n²) to O(n). Ideal for pair finding, palindrome checks, and in-place modifications."
    },
    {
        "id": "sliding-window",
        "title": "Sliding Window",
        "analogy": "Like adjusting a camera lens to focus on a specific segment of a landscape while maintaining awareness of the surrounding context.",
        "description": "Manages subarrays/substrings by maintaining a dynamic window. Reduces brute-force O(n²) to O(n) for problems like longest unique substring, minimum window substring, and frequency-based constraints."
    },
    {
        "id": "fast-slow-pointers",
        "title": "Fast & Slow Pointers",
        "analogy": "Two runners on a track: one sprints twice as fast to detect laps (cycles) or midpoint positions.",
        "description": "Detects cycles in linked lists, finds middle nodes, or identifies duplicates in arrays. Key for LinkedList cycle detection (Floyd's Algorithm) and palindrome checks."
    },
    {
        "id": "modified-binary-search",
        "title": "Modified Binary Search",
        "analogy": "Like guessing a number in a sorted list by strategically halving the search space each time.",
        "description": "Optimizes search in sorted/rotated arrays. Handles edge cases like finding first/last occurrence, peak elements, or split points in rotated arrays."
    },
    {
        "id": "tree-traversal",
        "title": "Tree Traversal (DFS/BFS)",
        "analogy": "Exploring a maze by either digging deep into one path (DFS) or mapping all nearby routes first (BFS).",
        "description": "DFS (pre/in/post-order) for path finding. BFS (level-order) for shortest path in unweighted graphs. Critical for problems like symmetric trees and serialization."
    },
    {
        "id": "dynamic-programming",
        "title": "Dynamic Programming",
        "analogy": "Solving a jigsaw puzzle by first assembling smaller sections and reusing them to build the full picture.",
        "description": "Breaks complex problems into overlapping subproblems. Memoization (top-down) and tabulation (bottom-up) approaches for Fibonacci, knapsack, and grid path optimization."
    },
    {
        "id": "backtracking",
        "title": "Backtracking",
        "analogy": "Navigating a labyrinth by trying paths and retreating upon dead ends while keeping track of visited routes.",
        "description": "Systematically explores solution spaces for permutation/combination problems (N-Queens, subsets) and constraint satisfaction."
    },
    {
        "id": "top-k-elements",
        "title": "Top K Elements",
        "analogy": "Identifying the most frequent words in a book by tallying counts and prioritizing the highest.",
        "description": "Uses heaps (priority queues) or quickselect to efficiently find k-largest/k-smallest elements or frequent items in streams."
    },
    {
        "id": "merge-intervals",
        "title": "Merge Intervals",
        "analogy": "Scheduling meetings by merging overlapping time slots to optimize room usage.",
        "description": "Sorts and merges overlapping intervals. Key for calendar scheduling, conflict resolution, and resource allocation problems."
    },
    {
        "id": "monotonic-stack",
        "title": "Monotonic Stack",
        "analogy": "Stacking plates in order of size to quickly find the next larger/smaller plate when needed.",
        "description": "Maintains elements in ascending/descending order. Solves next-greater-element, largest-rectangle-in-histogram, and temperature span problems."
    },
    {
        "id": "prefix-sum",
        "title": "Prefix Sum",
        "analogy": "Calculating cumulative rainfall to quickly determine totals between any two dates.",
        "description": "Precomputes cumulative sums for O(1) range queries. Essential for subarray sum problems and frequency balancing."
    },
    {
        "id": "union-find",
        "title": "Union Find (Disjoint Set)",
        "analogy": "Managing friend groups where members can merge circles or check connections efficiently.",
        "description": "Track connected components in graphs. Optimizes with path compression/union by rank for problems like number of islands and redundant connections."
    },
    {
        "id": "greedy",
        "title": "Greedy Algorithms",
        "analogy": "Picking the largest coin at each step to minimize the number of coins for change.",
        "description": "Makes locally optimal choices for global optimization. Used in interval scheduling, Huffman coding, and jump game problems."
    },
    {
        "id": "trie",
        "title": "Trie (Prefix Tree)",
        "analogy": "A library catalog system that organizes books by their prefixes for rapid lookup.",
        "description": "Tree-based structure for efficient string prefix searches. Critical for autocomplete systems and word validation in dictionaries."
    }
];

// Build a map of normalized pattern name to count
const patternCountMap = {};
patternsData?.forEach(pattern => {
    patternCountMap[normalize(pattern.title)] = 0;
    if (pattern.id) patternCountMap[normalize(pattern.id)] = 0;
});

allProblems?.forEach(problem => {
    if (problem.patterns && Array.isArray(problem.patterns)) {
        problem.patterns.forEach(pat => {
            const normPat = normalize(pat);
            if (Object.prototype.hasOwnProperty.call(patternCountMap, normPat)) {
                patternCountMap[normPat]++;
            }
        });
    }
});

// Assign the count to each pattern object
patternsData.forEach(pattern => {
    const count = patternCountMap[normalize(pattern.title)] || patternCountMap[normalize(pattern.id)] || 0;
    pattern.count = count;
});



export default patternsData;

export const patternCategories = patternsData.map((pattern, index) => ({
    id: pattern.id,
    name: pattern.title,
    description: pattern.description.split('.')[0] + '.',  // Just the first sentence for brevity
    count: pattern.count,
    color: getPatternColor(index),
    icon: getPatternIcon(pattern.id)
}));

// Helper function to get color classes based on pattern index
function getPatternColor(index) {
    const colors = [
        'bg-blue-500',
        'bg-teal-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-yellow-500',
        'bg-indigo-500',
        'bg-red-500',
        'bg-green-500',
        'bg-orange-500',
        'bg-cyan-500'
    ];
    return colors[index % colors.length];
}

// Helper function to get SVG path icon based on pattern id
function getPatternIcon(id) {
    switch (id) {
        case 'two-pointers':
            return "M7 8l-4 4m0 0l4 4m-4-4h18"; // Arrows pointing in opposite directions
        case 'sliding-window':
            return "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"; // Window/frame icon
        case 'binary-search':
            return "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"; // Search/magnifying glass
        case 'bfs':
            return "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"; // Tree/hierarchy icon
        default:
            return "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"; // Generic algorithm/lightbulb icon
    }
}

export const problemsByPattern = patternsData.reduce((acc, pattern) => {
    // Find all problems for this pattern
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const patternKey = normalize(pattern.title);
    acc[pattern.id] = allProblems.filter(problem =>
        problem.patterns && problem.patterns.some(
            p => normalize(p) === patternKey || normalize(p) === normalize(pattern.id)
        )
    );
    return acc;
}, {});
