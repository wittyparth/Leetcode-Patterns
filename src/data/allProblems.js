// Remove duplicates by problem_link (LeetCode link is unique)
const seen = new Set();
export const allProblems = [
    {
        "problem_name": "Two Sum",
        "problem_link": "https://leetcode.com/problems/two-sum/",
        "solution_link": "https://leetcode.com/problems/two-sum/discuss/737092/Sum-MegaPost-Python3-Solution-with-a-detailed-explanation",
        "patterns": ["Hash Map", "Array"],
        "difficulty": "Easy",
        "difficulty_rating": 1,
        "companies": [
            { "name": "Amazon", "frequency": 127 },
            { "name": "Google", "frequency": 98 },
            { "name": "Microsoft", "frequency": 85 }
        ]
    },
    {
        "problem_name": "Valid Parentheses",
        "problem_link": "https://leetcode.com/problems/valid-parentheses/",
        "solution_link": "https://leetcode.com/problems/valid-parentheses/discuss/9178/Short-java-solution",
        "patterns": ["Stack", "String"],
        "difficulty": "Easy",
        "difficulty_rating": 2,
        "companies": [
            { "name": "Amazon", "frequency": 52 },
            { "name": "Microsoft", "frequency": 44 },
            { "name": "Google", "frequency": 37 }
        ]
    },
    {
        "problem_name": "Best Time to Buy and Sell Stock",
        "problem_link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "solution_link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/39038/Kadane's-Algorithm",
        "patterns": ["Dynamic Programming", "Array"],
        "difficulty": "Easy",
        "difficulty_rating": 3,
        "companies": [
            { "name": "Amazon", "frequency": 42 },
            { "name": "Facebook", "frequency": 38 },
            { "name": "Microsoft", "frequency": 32 }
        ]
    },
    {
        "problem_name": "Contains Duplicate",
        "problem_link": "https://leetcode.com/problems/contains-duplicate/",
        "solution_link": "https://leetcode.com/problems/contains-duplicate/discuss/60933/Short-java-solution",
        "patterns": ["Hash Set", "Array"],
        "difficulty": "Easy",
        "difficulty_rating": 4,
        "companies": [
            { "name": "Google", "frequency": 28 },
            { "name": "Amazon", "frequency": 24 },
            { "name": "Microsoft", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Valid Anagram",
        "problem_link": "https://leetcode.com/problems/valid-anagram/",
        "solution_link": "https://leetcode.com/problems/valid-anagram/discuss/66484/Accepted-Java-O(n)-solution-in-5-lines",
        "patterns": ["Hash Map", "String", "Sorting"],
        "difficulty": "Easy",
        "difficulty_rating": 5,
        "companies": [
            { "name": "Amazon", "frequency": 35 },
            { "name": "Microsoft", "frequency": 28 },
            { "name": "Google", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Reverse Linked List",
        "problem_link": "https://leetcode.com/problems/reverse-linked-list/",
        "solution_link": "https://leetcode.com/problems/reverse-linked-list/discuss/58127/Python-iterative-and-recursive-solution",
        "patterns": ["Linked List", "Recursion"],
        "difficulty": "Easy",
        "difficulty_rating": 6,
        "companies": [
            { "name": "Microsoft", "frequency": 42 },
            { "name": "Amazon", "frequency": 38 },
            { "name": "Apple", "frequency": 29 }
        ]
    },
    {
        "problem_name": "Palindrome Number",
        "problem_link": "https://leetcode.com/problems/palindrome-number/",
        "solution_link": "https://leetcode.com/problems/palindrome-number/discuss/5127/9-line-simple-Java-solution-without-creating-new-string",
        "patterns": ["Math"],
        "difficulty": "Easy",
        "difficulty_rating": 7,
        "companies": [
            { "name": "Amazon", "frequency": 22 },
            { "name": "Microsoft", "frequency": 18 },
            { "name": "Google", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Maximum Subarray",
        "problem_link": "https://leetcode.com/problems/maximum-subarray/",
        "solution_link": "https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts",
        "patterns": ["Dynamic Programming", "Divide and Conquer"],
        "difficulty": "Medium",
        "difficulty_rating": 8,
        "companies": [
            { "name": "Amazon", "frequency": 42 },
            { "name": "Microsoft", "frequency": 38 },
            { "name": "LinkedIn", "frequency": 32 }
        ]
    },
    {
        "problem_name": "Climbing Stairs",
        "problem_link": "https://leetcode.com/problems/climbing-stairs/",
        "solution_link": "https://leetcode.com/problems/climbing-stairs/discuss/25296/3-4-short-lines-in-every-language",
        "patterns": ["Dynamic Programming"],
        "difficulty": "Easy",
        "difficulty_rating": 9,
        "companies": [
            { "name": "Amazon", "frequency": 25 },
            { "name": "Apple", "frequency": 22 },
            { "name": "Adobe", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Linked List Cycle",
        "problem_link": "https://leetcode.com/problems/linked-list-cycle/",
        "solution_link": "https://leetcode.com/problems/linked-list-cycle/discuss/44489/O(1)-Space-Solution",
        "patterns": ["Fast & Slow Pointers", "Linked List"],
        "difficulty": "Easy",
        "difficulty_rating": 10,
        "companies": [
            { "name": "Microsoft", "frequency": 32 },
            { "name": "Amazon", "frequency": 28 },
            { "name": "Bloomberg", "frequency": 21 }
        ]
    },
    {
        "problem_name": "Remove Duplicates from Sorted Array",
        "problem_link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "solution_link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/11782/Share-my-clean-C%2B%2B-code",
        "patterns": ["Two Pointers", "Array"],
        "difficulty": "Easy",
        "difficulty_rating": 11,
        "companies": [
            { "name": "Microsoft", "frequency": 24 },
            { "name": "Amazon", "frequency": 20 },
            { "name": "Google", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Merge Two Sorted Lists",
        "problem_link": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "solution_link": "https://leetcode.com/problems/merge-two-sorted-lists/discuss/9735/Python-solutions-(iteratively-recursively-iteratively-in-place).",
        "patterns": ["Linked List", "Recursion"],
        "difficulty": "Easy",
        "difficulty_rating": 12,
        "companies": [
            { "name": "Amazon", "frequency": 35 },
            { "name": "Microsoft", "frequency": 28 },
            { "name": "Google", "frequency": 24 }
        ]
    },
    {
        "problem_name": "Valid Palindrome",
        "problem_link": "https://leetcode.com/problems/valid-palindrome/",
        "solution_link": "https://leetcode.com/problems/valid-palindrome/discuss/40029/Accepted-pretty-Java-solution(271ms)",
        "patterns": ["Two Pointers", "String"],
        "difficulty": "Easy",
        "difficulty_rating": 13,
        "companies": [
            { "name": "Facebook", "frequency": 28 },
            { "name": "Amazon", "frequency": 22 },
            { "name": "Microsoft", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Same Tree",
        "problem_link": "https://leetcode.com/problems/same-tree/",
        "solution_link": "https://leetcode.com/problems/same-tree/discuss/32687/5-lines-Java-easy-solution-with-recursion",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 14,
        "companies": [
            { "name": "Google", "frequency": 18 },
            { "name": "Amazon", "frequency": 15 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Invert Binary Tree",
        "problem_link": "https://leetcode.com/problems/invert-binary-tree/",
        "solution_link": "https://leetcode.com/problems/invert-binary-tree/discuss/62707/Straightforward-DFS-recursive-iterative-BFS-solutions",
        "patterns": ["DFS", "BFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 15,
        "companies": [
            { "name": "Google", "frequency": 22 },
            { "name": "Amazon", "frequency": 18 },
            { "name": "Microsoft", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Maximum Depth of Binary Tree",
        "problem_link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "solution_link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/34216/Simple-solution-using-Java",
        "patterns": ["DFS", "BFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 16,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "Microsoft", "frequency": 22 },
            { "name": "Google", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Subtree of Another Tree",
        "problem_link": "https://leetcode.com/problems/subtree-of-another-tree/",
        "solution_link": "https://leetcode.com/problems/subtree-of-another-tree/discuss/102741/Python-Straightforward-with-Explanation-(O(ST)-and-O(S%2BT)-approaches)",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 17,
        "companies": [
            { "name": "Facebook", "frequency": 24 },
            { "name": "Amazon", "frequency": 20 },
            { "name": "Google", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Lowest Common Ancestor of a Binary Search Tree",
        "problem_link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        "solution_link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/discuss/64963/3-lines-with-O(1)-space-1-Liners-Alternatives",
        "patterns": ["DFS", "Binary Search Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 18,
        "companies": [
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 26 },
            { "name": "Google", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Binary Tree Level Order Traversal",
        "problem_link": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "solution_link": "https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/33445/Java-Solution-using-DFS",
        "patterns": ["BFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 19,
        "companies": [
            { "name": "Amazon", "frequency": 38 },
            { "name": "Microsoft", "frequency": 32 },
            { "name": "Google", "frequency": 28 }
        ]
    },
    {
        "problem_name": "Symmetric Tree",
        "problem_link": "https://leetcode.com/problems/symmetric-tree/",
        "solution_link": "https://leetcode.com/problems/symmetric-tree/discuss/33054/Recursive-and-non-recursive-solutions-in-Java",
        "patterns": ["DFS", "BFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 20,
        "companies": [
            { "name": "Microsoft", "frequency": 25 },
            { "name": "Amazon", "frequency": 20 },
            { "name": "Google", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Product of Array Except Self",
        "problem_link": "https://leetcode.com/problems/product-of-array-except-self/",
        "solution_link": "https://leetcode.com/problems/product-of-array-except-self/discuss/65622/Simple-Java-solution-in-O(n)-without-extra-space",
        "patterns": ["Array", "Prefix Sum"],
        "difficulty": "Medium",
        "difficulty_rating": 21,
        "companies": [
            { "name": "Amazon", "frequency": 45 },
            { "name": "Microsoft", "frequency": 38 },
            { "name": "Facebook", "frequency": 32 }
        ]
    },
    {
        "problem_name": "Group Anagrams",
        "problem_link": "https://leetcode.com/problems/group-anagrams/",
        "solution_link": "https://leetcode.com/problems/group-anagrams/discuss/19176/Share-my-short-JAVA-solution",
        "patterns": ["Hash Map", "String", "Sorting"],
        "difficulty": "Medium",
        "difficulty_rating": 22,
        "companies": [
            { "name": "Amazon", "frequency": 42 },
            { "name": "Uber", "frequency": 35 },
            { "name": "Facebook", "frequency": 28 }
        ]
    },
    {
        "problem_name": "3Sum",
        "problem_link": "https://leetcode.com/problems/3sum/",
        "solution_link": "https://leetcode.com/problems/3sum/discuss/7380/Concise-O(N2)-Java-solution",
        "patterns": ["Two Pointers", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 23,
        "companies": [
            { "name": "Facebook", "frequency": 48 },
            { "name": "Amazon", "frequency": 42 },
            { "name": "Google", "frequency": 35 }
        ]
    },
    {
        "problem_name": "Container With Most Water",
        "problem_link": "https://leetcode.com/problems/container-with-most-water/",
        "solution_link": "https://leetcode.com/problems/container-with-most-water/discuss/6090/Simple-and-fast-C%2B%2BC-with-explanation",
        "patterns": ["Two Pointers", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 24,
        "companies": [
            { "name": "Amazon", "frequency": 39 },
            { "name": "Bloomberg", "frequency": 27 },
            { "name": "Adobe", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Remove Nth Node From End of List",
        "problem_link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "solution_link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/8804/Simple-Java-solution-in-one-pass",
        "patterns": ["Two Pointers", "Linked List"],
        "difficulty": "Medium",
        "difficulty_rating": 25,
        "companies": [
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 26 },
            { "name": "Google", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Middle of the Linked List",
        "problem_link": "https://leetcode.com/problems/middle-of-the-linked-list/",
        "solution_link": "https://leetcode.com/problems/middle-of-the-linked-list/discuss/154619/C%2B%2BJavaPython-Slow-and-Fast-Pointers",
        "patterns": ["Fast & Slow Pointers", "Linked List"],
        "difficulty": "Easy",
        "difficulty_rating": 26,
        "companies": [
            { "name": "Google", "frequency": 18 },
            { "name": "Amazon", "frequency": 15 },
            { "name": "Bloomberg", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Longest Substring Without Repeating Characters",
        "problem_link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "solution_link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1729/11-line-simple-Java-solution-O(n)-with-explanation",
        "patterns": ["Sliding Window", "Hash Map"],
        "difficulty": "Medium",
        "difficulty_rating": 27,
        "companies": [
            { "name": "Amazon", "frequency": 62 },
            { "name": "Microsoft", "frequency": 49 },
            { "name": "Bloomberg", "frequency": 41 }
        ]
    },
    {
        "problem_name": "Permutation in String",
        "problem_link": "https://leetcode.com/problems/permutation-in-string/",
        "solution_link": "https://leetcode.com/problems/permutation-in-string/discuss/102588/Java-Solution-Sliding-Window",
        "patterns": ["Sliding Window", "Hash Map"],
        "difficulty": "Medium",
        "difficulty_rating": 28,
        "companies": [
            { "name": "Microsoft", "frequency": 35 },
            { "name": "Amazon", "frequency": 28 },
            { "name": "Google", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Find All Anagrams in a String",
        "problem_link": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        "solution_link": "https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/92007/Sliding-Window-algorithm-template",
        "patterns": ["Sliding Window", "Hash Map"],
        "difficulty": "Medium",
        "difficulty_rating": 29,
        "companies": [
            { "name": "Amazon", "frequency": 35 },
            { "name": "Facebook", "frequency": 28 },
            { "name": "Microsoft", "frequency": 24 }
        ]
    },
    {
        "problem_name": "Minimum Size Subarray Sum",
        "problem_link": "https://leetcode.com/problems/minimum-size-subarray-sum/",
        "solution_link": "https://leetcode.com/problems/minimum-size-subarray-sum/discuss/59078/Accepted-clean-Java-O(n)-solution-(two-pointers)",
        "patterns": ["Sliding Window", "Two Pointers"],
        "difficulty": "Medium",
        "difficulty_rating": 30,
        "companies": [
            { "name": "Facebook", "frequency": 32 },
            { "name": "Amazon", "frequency": 26 },
            { "name": "Google", "frequency": 20 }
        ]
    },
    {
        "problem_name": "Binary Search",
        "problem_link": "https://leetcode.com/problems/binary-search/",
        "solution_link": "https://leetcode.com/problems/binary-search/discuss/423162/Binary-Search-101",
        "patterns": ["Binary Search"],
        "difficulty": "Easy",
        "difficulty_rating": 31,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "Microsoft", "frequency": 22 },
            { "name": "Google", "frequency": 18 },
            { "name": "Apple", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Search Insert Position",
        "problem_link": "https://leetcode.com/problems/search-insert-position/",
        "solution_link": "https://leetcode.com/problems/search-insert-position/discuss/15080/My-8-line-Java-solution",
        "patterns": ["Binary Search"],
        "difficulty": "Easy",
        "difficulty_rating": 32,
        "companies": [
            { "name": "Amazon", "frequency": 25 },
            { "name": "Microsoft", "frequency": 20 },
            { "name": "Google", "frequency": 16 },
            { "name": "Apple", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Search in Rotated Sorted Array",
        "problem_link": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "solution_link": "https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14435/Clever-idea-making-it-simple",
        "patterns": ["Modified Binary Search"],
        "difficulty": "Medium",
        "difficulty_rating": 33,
        "companies": [
            { "name": "Facebook", "frequency": 67 },
            { "name": "Google", "frequency": 58 },
            { "name": "Amazon", "frequency": 49 },
            { "name": "Microsoft", "frequency": 41 }
        ]
    },
    {
        "problem_name": "Find Minimum in Rotated Sorted Array",
        "problem_link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        "solution_link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/48484/A-concise-solution-with-proof-in-the-comment",
        "patterns": ["Modified Binary Search"],
        "difficulty": "Medium",
        "difficulty_rating": 34,
        "companies": [
            { "name": "Amazon", "frequency": 42 },
            { "name": "Microsoft", "frequency": 35 },
            { "name": "Google", "frequency": 28 },
            { "name": "Facebook", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Find Peak Element",
        "problem_link": "https://leetcode.com/problems/find-peak-element/",
        "solution_link": "https://leetcode.com/problems/find-peak-element/discuss/50232/Find-the-maximum-by-binary-search-(recursion-and-iteration)",
        "patterns": ["Modified Binary Search"],
        "difficulty": "Medium",
        "difficulty_rating": 35,
        "companies": [
            { "name": "Google", "frequency": 38 },
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 26 },
            { "name": "Facebook", "frequency": 20 }
        ]
    },
    {
        "problem_name": "Find First and Last Position of Element in Sorted Array",
        "problem_link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "solution_link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/14699/Clean-iterative-solution-with-two-binary-searches-(with-explanation)",
        "patterns": ["Modified Binary Search"],
        "difficulty": "Medium",
        "difficulty_rating": 36,
        "companies": [
            { "name": "Amazon", "frequency": 45 },
            { "name": "Microsoft", "frequency": 38 },
            { "name": "Google", "frequency": 32 },
            { "name": "Facebook", "frequency": 26 }
        ]
    },
    {
        "problem_name": "House Robber",
        "problem_link": "https://leetcode.com/problems/house-robber/",
        "solution_link": "https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.",
        "patterns": ["Dynamic Programming"],
        "difficulty": "Medium",
        "difficulty_rating": 37,
        "companies": [
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 },
            { "name": "Google", "frequency": 24 },
            { "name": "Apple", "frequency": 20 }
        ]
    },
    {
        "problem_name": "House Robber II",
        "problem_link": "https://leetcode.com/problems/house-robber-ii/",
        "solution_link": "https://leetcode.com/problems/house-robber-ii/discuss/59934/Simple-AC-solution-in-Java-in-O(n)-with-explanation",
        "patterns": ["Dynamic Programming"],
        "difficulty": "Medium",
        "difficulty_rating": 38,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "Microsoft", "frequency": 24 },
            { "name": "Google", "frequency": 20 },
            { "name": "Facebook", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Coin Change",
        "problem_link": "https://leetcode.com/problems/coin-change/",
        "solution_link": "https://leetcode.com/problems/coin-change/discuss/77360/C++-O(n*amount)-time-O(amount)-space-DP-solution",
        "patterns": ["Dynamic Programming"],
        "difficulty": "Medium",
        "difficulty_rating": 39,
        "companies": [
            { "name": "Amazon", "frequency": 35 },
            { "name": "Goldman Sachs", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 },
            { "name": "Google", "frequency": 24 }
        ]
    },
    {
        "problem_name": "Unique Paths",
        "problem_link": "https://leetcode.com/problems/unique-paths/",
        "solution_link": "https://leetcode.com/problems/unique-paths/discuss/22954/C%2B%2B-DP",
        "patterns": ["Dynamic Programming", "Math"],
        "difficulty": "Medium",
        "difficulty_rating": 40,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "Bloomberg", "frequency": 24 },
            { "name": "Google", "frequency": 20 },
            { "name": "Microsoft", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Longest Increasing Subsequence",
        "problem_link": "https://leetcode.com/problems/longest-increasing-subsequence/",
        "solution_link": "https://leetcode.com/problems/longest-increasing-subsequence/discuss/74824/JavaPython-Binary-search-O(nlogn)-time-with-explanation",
        "patterns": ["Dynamic Programming", "Binary Search"],
        "difficulty": "Medium",
        "difficulty_rating": 41,
        "companies": [
            { "name": "Amazon", "frequency": 42 },
            { "name": "Microsoft", "frequency": 35 },
            { "name": "Google", "frequency": 28 },
            { "name": "Facebook", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Word Break",
        "problem_link": "https://leetcode.com/problems/word-break/",
        "solution_link": "https://leetcode.com/problems/word-break/discuss/43790/Java-implementation-using-DP-in-two-ways",
        "patterns": ["Dynamic Programming"],
        "difficulty": "Medium",
        "difficulty_rating": 42,
        "companies": [
            { "name": "Facebook", "frequency": 38 },
            { "name": "Amazon", "frequency": 34 },
            { "name": "Google", "frequency": 29 },
            { "name": "Apple", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Combination Sum",
        "problem_link": "https://leetcode.com/problems/combination-sum/",
        "solution_link": "https://leetcode.com/problems/combination-sum/discuss/16502/A-general-approach-to-backtracking-questions-in-Java",
        "patterns": ["Backtracking", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 43,
        "companies": [
            { "name": "Amazon", "frequency": 38 },
            { "name": "Facebook", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 },
            { "name": "Google", "frequency": 24 }
        ]
    },
    {
        "problem_name": "Generate Parentheses",
        "problem_link": "https://leetcode.com/problems/generate-parentheses/",
        "solution_link": "https://leetcode.com/problems/generate-parentheses/discuss/10100/Easy-to-understand-Java-backtracking-solution",
        "patterns": ["Backtracking", "String"],
        "difficulty": "Medium",
        "difficulty_rating": 44,
        "companies": [
            { "name": "Amazon", "frequency": 45 },
            { "name": "Google", "frequency": 38 },
            { "name": "Facebook", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 }
        ]
    },
    {
        "problem_name": "Letter Combinations of a Phone Number",
        "problem_link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "solution_link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/8064/My-java-solution-with-FIFO-queue",
        "patterns": ["Backtracking", "String"],
        "difficulty": "Medium",
        "difficulty_rating": 45,
        "companies": [
            { "name": "Amazon", "frequency": 42 },
            { "name": "Facebook", "frequency": 35 },
            { "name": "Google", "frequency": 28 },
            { "name": "Uber", "frequency": 24 }
        ]
    },
    {
        "problem_name": "Subsets",
        "problem_link": "https://leetcode.com/problems/subsets/",
        "solution_link": "https://leetcode.com/problems/subsets/discuss/27281/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)",
        "patterns": ["Backtracking", "Bit Manipulation"],
        "difficulty": "Medium",
        "difficulty_rating": 46,
        "companies": [
            { "name": "Amazon", "frequency": 35 },
            { "name": "Facebook", "frequency": 28 },
            { "name": "Google", "frequency": 24 },
            { "name": "Microsoft", "frequency": 20 }
        ]
    },
    {
        "problem_name": "Permutations",
        "problem_link": "https://leetcode.com/problems/permutations/",
        "solution_link": "https://leetcode.com/problems/permutations/discuss/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)",
        "patterns": ["Backtracking"],
        "difficulty": "Medium",
        "difficulty_rating": 47,
        "companies": [
            { "name": "Amazon", "frequency": 38 },
            { "name": "Microsoft", "frequency": 32 },
            { "name": "Google", "frequency": 26 },
            { "name": "Facebook", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Word Search",
        "problem_link": "https://leetcode.com/problems/word-search/",
        "solution_link": "https://leetcode.com/problems/word-search/discuss/27658/Accepted-very-short-Java-solution.-No-additional-space.",
        "patterns": ["Backtracking", "Matrix", "DFS"],
        "difficulty": "Medium",
        "difficulty_rating": 48,
        "companies": [
            { "name": "Microsoft", "frequency": 45 },
            { "name": "Amazon", "frequency": 38 },
            { "name": "Facebook", "frequency": 32 },
            { "name": "Google", "frequency": 28 }
        ]
    },
    {
        "problem_name": "Palindrome Partitioning",
        "problem_link": "https://leetcode.com/problems/palindrome-partitioning/",
        "solution_link": "https://leetcode.com/problems/palindrome-partitioning/discuss/41963/Java%3A-DP-%2B-DFS-solution",
        "patterns": ["Backtracking", "Dynamic Programming"],
        "difficulty": "Medium",
        "difficulty_rating": 49,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "Google", "frequency": 24 },
            { "name": "Microsoft", "frequency": 20 },
            { "name": "Facebook", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Rotate Image",
        "problem_link": "https://leetcode.com/problems/rotate-image/",
        "solution_link": "https://leetcode.com/problems/rotate-image/discuss/18872/A-common-method-to-rotate-the-image",
        "patterns": ["Matrix", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 50,
        "companies": [
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 },
            { "name": "Apple", "frequency": 25 },
            { "name": "Google", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Set Matrix Zeroes",
        "problem_link": "https://leetcode.com/problems/set-matrix-zeroes/",
        "solution_link": "https://leetcode.com/problems/set-matrix-zeroes/discuss/26014/Any-shorter-O(1)-space-solution",
        "patterns": ["Matrix", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 51,
        "companies": [
            { "name": "Microsoft", "frequency": 29 },
            { "name": "Amazon", "frequency": 25 },
            { "name": "Facebook", "frequency": 22 },
            { "name": "Apple", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Spiral Matrix",
        "problem_link": "https://leetcode.com/problems/spiral-matrix/",
        "solution_link": "https://leetcode.com/problems/spiral-matrix/discuss/20571/1-liner-in-Python-%2B-Ruby",
        "patterns": ["Matrix", "Simulation"],
        "difficulty": "Medium",
        "difficulty_rating": 52,
        "companies": [
            { "name": "Microsoft", "frequency": 34 },
            { "name": "Amazon", "frequency": 28 },
            { "name": "Apple", "frequency": 24 },
            { "name": "Google", "frequency": 21 }
        ]
    },
    {
        "problem_name": "Kth Largest Element in an Array",
        "problem_link": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "solution_link": "https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/60306/Python-different-solutions-with-comments",
        "patterns": ["Top K Elements", "Heap", "QuickSelect"],
        "difficulty": "Medium",
        "difficulty_rating": 53,
        "companies": [
            { "name": "Amazon", "frequency": 58 },
            { "name": "Microsoft", "frequency": 42 },
            { "name": "Facebook", "frequency": 37 },
            { "name": "Google", "frequency": 34 }
        ]
    },
    {
        "problem_name": "Top K Frequent Elements",
        "problem_link": "https://leetcode.com/problems/top-k-frequent-elements/",
        "solution_link": "https://leetcode.com/problems/top-k-frequent-elements/discuss/81602/Java-O(n)-Solution-Bucket-Sort",
        "patterns": ["Top K Elements", "Heap"],
        "difficulty": "Medium",
        "difficulty_rating": 54,
        "companies": [
            { "name": "Facebook", "frequency": 45 },
            { "name": "Uber", "frequency": 39 },
            { "name": "Amazon", "frequency": 35 },
            { "name": "Google", "frequency": 28 }
        ]
    },
    {
        "problem_name": "K Closest Points to Origin",
        "problem_link": "https://leetcode.com/problems/k-closest-points-to-origin/",
        "solution_link": "https://leetcode.com/problems/k-closest-points-to-origin/discuss/220235/Java-Three-solutions-to-this-classical-K-th-problem",
        "patterns": ["Top K Elements", "Heap", "QuickSelect"],
        "difficulty": "Medium",
        "difficulty_rating": 55,
        "companies": [
            { "name": "Amazon", "frequency": 42 },
            { "name": "Facebook", "frequency": 38 },
            { "name": "Google", "frequency": 32 },
            { "name": "Uber", "frequency": 28 }
        ]
    },
    {
        "problem_name": "Merge Intervals",
        "problem_link": "https://leetcode.com/problems/merge-intervals/",
        "solution_link": "https://leetcode.com/problems/merge-intervals/discuss/21222/A-simple-Java-solution",
        "patterns": ["Merge Intervals", "Sorting"],
        "difficulty": "Medium",
        "difficulty_rating": 56,
        "companies": [
            { "name": "Google", "frequency": 57 },
            { "name": "Amazon", "frequency": 48 },
            { "name": "Microsoft", "frequency": 39 },
            { "name": "Bloomberg", "frequency": 100 }
        ]
    },
    {
        "problem_name": "Insert Interval",
        "problem_link": "https://leetcode.com/problems/insert-interval/",
        "solution_link": "https://leetcode.com/problems/insert-interval/discuss/21602/Short-and-straight-forward-Java-solution",
        "patterns": ["Merge Intervals", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 57,
        "companies": [
            { "name": "Google", "frequency": 43 },
            { "name": "Amazon", "frequency": 35 },
            { "name": "Microsoft", "frequency": 27 },
            { "name": "LinkedIn", "frequency": 19 }
        ]
    },
    {
        "problem_name": "Non-overlapping Intervals",
        "problem_link": "https://leetcode.com/problems/non-overlapping-intervals/",
        "solution_link": "https://leetcode.com/problems/non-overlapping-intervals/discuss/91713/Java%3A-Least-is-Most",
        "patterns": ["Merge Intervals", "Greedy"],
        "difficulty": "Medium",
        "difficulty_rating": 58,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "Google", "frequency": 24 },
            { "name": "Microsoft", "frequency": 20 },
            { "name": "Facebook", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Meeting Rooms II",
        "problem_link": "https://leetcode.com/problems/meeting-rooms-ii/",
        "solution_link": "https://leetcode.com/problems/meeting-rooms-ii/discuss/67857/AC-Java-solution-using-min-heap",
        "patterns": ["Merge Intervals", "Heap"],
        "difficulty": "Medium",
        "difficulty_rating": 59,
        "companies": [
            { "name": "Google", "frequency": 48 },
            { "name": "Amazon", "frequency": 42 },
            { "name": "Facebook", "frequency": 38 },
            { "name": "Microsoft", "frequency": 32 }
        ]
    },
    {
        "problem_name": "Jump Game",
        "problem_link": "https://leetcode.com/problems/jump-game/",
        "solution_link": "https://leetcode.com/problems/jump-game/discuss/20917/Linear-and-simple-solution-in-C%2B%2B",
        "patterns": ["Greedy", "Dynamic Programming"],
        "difficulty": "Medium",
        "difficulty_rating": 60,
        "companies": [
            { "name": "Amazon", "frequency": 39 },
            { "name": "Microsoft", "frequency": 32 },
            { "name": "Google", "frequency": 28 },
            { "name": "Uber", "frequency": 24 }
        ]
    },
    {
        "problem_name": "Jump Game II",
        "problem_link": "https://leetcode.com/problems/jump-game-ii/",
        "solution_link": "https://leetcode.com/problems/jump-game-ii/discuss/18014/Concise-O(n)-one-loop-JAVA-solution-based-on-Greedy",
        "patterns": ["Greedy", "Dynamic Programming"],
        "difficulty": "Medium",
        "difficulty_rating": 61,
        "companies": [
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 },
            { "name": "Google", "frequency": 24 },
            { "name": "Facebook", "frequency": 20 }
        ]
    },
    {
        "problem_name": "Gas Station",
        "problem_link": "https://leetcode.com/problems/gas-station/",
        "solution_link": "https://leetcode.com/problems/gas-station/discuss/42568/Share-some-of-my-ideas.",
        "patterns": ["Greedy"],
        "difficulty": "Medium",
        "difficulty_rating": 62,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "Microsoft", "frequency": 24 },
            { "name": "Google", "frequency": 20 },
            { "name": "Facebook", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Hand of Straights",
        "problem_link": "https://leetcode.com/problems/hand-of-straights/",
        "solution_link": "https://leetcode.com/problems/hand-of-straights/discuss/135598/C%2B%2BJavaPython-O(MlogM)-Complexity",
        "patterns": ["Greedy", "Hash Map"],
        "difficulty": "Medium",
        "difficulty_rating": 63,
        "companies": [
            { "name": "Google", "frequency": 18 },
            { "name": "Amazon", "frequency": 15 },
            { "name": "Microsoft", "frequency": 12 },
            { "name": "Facebook", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Meeting Rooms",
        "problem_link": "https://leetcode.com/problems/meeting-rooms/",
        "solution_link": "https://leetcode.com/problems/meeting-rooms/discuss/67786/AC-clean-Java-solution",
        "patterns": ["Merge Intervals", "Sorting"],
        "difficulty": "Easy",
        "difficulty_rating": 64,
        "companies": [
            { "name": "Facebook", "frequency": 22 },
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Minimum Number of Arrows to Burst Balloons",
        "problem_link": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
        "solution_link": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/discuss/93703/Share-my-explained-Greedy-solution",
        "patterns": ["Merge Intervals", "Greedy"],
        "difficulty": "Medium",
        "difficulty_rating": 65,
        "companies": [
            { "name": "Amazon", "frequency": 24 },
            { "name": "Microsoft", "frequency": 20 },
            { "name": "Google", "frequency": 16 },
            { "name": "Facebook", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Find Median from Data Stream",
        "problem_link": "https://leetcode.com/problems/find-median-from-data-stream/",
        "solution_link": "https://leetcode.com/problems/find-median-from-data-stream/discuss/74047/JavaPython-two-heap-solution-O(log-n)-add-O(1)-find",
        "patterns": ["Top K Elements", "Two Heaps", "Design"],
        "difficulty": "Hard",
        "difficulty_rating": 66,
        "companies": [
            { "name": "Google", "frequency": 45 },
            { "name": "Amazon", "frequency": 38 },
            { "name": "Facebook", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 }
        ]
    },
    {
        "problem_name": "Sliding Window Maximum",
        "problem_link": "https://leetcode.com/problems/sliding-window-maximum/",
        "solution_link": "https://leetcode.com/problems/sliding-window-maximum/discuss/65884/Java-O(n)-solution-using-deque-with-explanation",
        "patterns": ["Sliding Window", "Monotonic Stack", "Heap"],
        "difficulty": "Hard",
        "difficulty_rating": 67,
        "companies": [
            { "name": "Amazon", "frequency": 42 },
            { "name": "Google", "frequency": 38 },
            { "name": "Microsoft", "frequency": 32 },
            { "name": "Facebook", "frequency": 28 }
        ]
    },
    {
        "problem_name": "Car Fleet",
        "problem_link": "https://leetcode.com/problems/car-fleet/",
        "solution_link": "https://leetcode.com/problems/car-fleet/discuss/139850/C%2B%2BJavaPython-Straight-Forward",
        "patterns": ["Monotonic Stack", "Sorting"],
        "difficulty": "Medium",
        "difficulty_rating": 68,
        "companies": [
            { "name": "Amazon", "frequency": 22 },
            { "name": "Google", "frequency": 18 },
            { "name": "Microsoft", "frequency": 15 },
            { "name": "Facebook", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Evaluate Reverse Polish Notation",
        "problem_link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        "solution_link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/discuss/47430/Java-accepted-code-stack-implementation",
        "patterns": ["Stack", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 69,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "LinkedIn", "frequency": 24 },
            { "name": "Microsoft", "frequency": 20 },
            { "name": "Google", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Daily Temperatures",
        "problem_link": "https://leetcode.com/problems/daily-temperatures/",
        "solution_link": "https://leetcode.com/problems/daily-temperatures/discuss/109832/Java-Easy-AC-Solution-with-Stack",
        "patterns": ["Monotonic Stack", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 70,
        "companies": [
            { "name": "Amazon", "frequency": 38 },
            { "name": "Google", "frequency": 32 },
            { "name": "Facebook", "frequency": 28 },
            { "name": "Microsoft", "frequency": 24 }
        ]
    },
    {
        "problem_name": "Largest Rectangle in Histogram",
        "problem_link": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "solution_link": "https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/28900/O(n)-stack-based-Java-solution",
        "patterns": ["Monotonic Stack", "Array"],
        "difficulty": "Hard",
        "difficulty_rating": 71,
        "companies": [
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 },
            { "name": "Uber", "frequency": 25 }
        ]
    },
    {
        "problem_name": "Trapping Rain Water",
        "problem_link": "https://leetcode.com/problems/trapping-rain-water/",
        "solution_link": "https://leetcode.com/problems/trapping-rain-water/discuss/17391/Share-my-simple-solution",
        "patterns": ["Two Pointers", "Dynamic Programming", "Monotonic Stack"],
        "difficulty": "Hard",
        "difficulty_rating": 72,
        "companies": [
            { "name": "Amazon", "frequency": 89 },
            { "name": "Google", "frequency": 76 },
            { "name": "Bloomberg", "frequency": 57 },
            { "name": "Facebook", "frequency": 27 }
        ]
    },
    {
        "problem_name": "Subarray Sum Equals K",
        "problem_link": "https://leetcode.com/problems/subarray-sum-equals-k/",
        "solution_link": "https://leetcode.com/problems/subarray-sum-equals-k/discuss/803317/Java-Solution-with-Detailed-Explanation",
        "patterns": ["Prefix Sum", "Hash Map", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 73,
        "companies": [
            { "name": "Facebook", "frequency": 39 },
            { "name": "Amazon", "frequency": 35 },
            { "name": "Google", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 }
        ]
    },
    {
        "problem_name": "Range Sum Query - Immutable",
        "problem_link": "https://leetcode.com/problems/range-sum-query-immutable/",
        "solution_link": "https://leetcode.com/problems/range-sum-query-immutable/discuss/75198/Java-simple-O(n)-constructor-O(1)-sumRange",
        "patterns": ["Prefix Sum", "Array"],
        "difficulty": "Easy",
        "difficulty_rating": 74,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Find Pivot Index",
        "problem_link": "https://leetcode.com/problems/find-pivot-index/",
        "solution_link": "https://leetcode.com/problems/find-pivot-index/discuss/110262/JavaC%2B%2BPython-Solution",
        "patterns": ["Prefix Sum", "Array"],
        "difficulty": "Easy",
        "difficulty_rating": 75,
        "companies": [
            { "name": "Amazon", "frequency": 12 },
            { "name": "Microsoft", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Contiguous Array",
        "problem_link": "https://leetcode.com/problems/contiguous-array/",
        "solution_link": "https://leetcode.com/problems/contiguous-array/discuss/99655/Java-O(n)-Solution-using-HashMap",
        "patterns": ["Prefix Sum", "Hash Map"],
        "difficulty": "Medium",
        "difficulty_rating": 76,
        "companies": [
            { "name": "Facebook", "frequency": 22 },
            { "name": "Amazon", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Maximum Size Subarray Sum Equals k",
        "problem_link": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
        "solution_link": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/discuss/77990/Share-my-O(n)-Java-solution-using-HashMap",
        "patterns": ["Prefix Sum", "Hash Map"],
        "difficulty": "Medium",
        "difficulty_rating": 77,
        "companies": [
            { "name": "Amazon", "frequency": 15 },
            { "name": "Facebook", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Number of Islands",
        "problem_link": "https://leetcode.com/problems/number-of-islands/",
        "solution_link": "https://leetcode.com/problems/number-of-islands/discuss/56359/Very-concise-Java-AC-solution",
        "patterns": ["DFS", "BFS", "Union Find", "Matrix"],
        "difficulty": "Medium",
        "difficulty_rating": 78,
        "companies": [
            { "name": "Amazon", "frequency": 45 },
            { "name": "Google", "frequency": 39 },
            { "name": "Microsoft", "frequency": 35 },
            { "name": "Facebook", "frequency": 33 }
        ]
    },
    {
        "problem_name": "Surrounded Regions",
        "problem_link": "https://leetcode.com/problems/surrounded-regions/",
        "solution_link": "https://leetcode.com/problems/surrounded-regions/discuss/41613/DFS-and-BFS-solution-in-Java",
        "patterns": ["DFS", "BFS", "Matrix"],
        "difficulty": "Medium",
        "difficulty_rating": 79,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Clone Graph",
        "problem_link": "https://leetcode.com/problems/clone-graph/",
        "solution_link": "https://leetcode.com/problems/clone-graph/discuss/42316/Java-Solution-using-DFS",
        "patterns": ["DFS", "BFS", "Graph"],
        "difficulty": "Medium",
        "difficulty_rating": 80,
        "companies": [
            { "name": "Amazon", "frequency": 22 },
            { "name": "Microsoft", "frequency": 18 },
            { "name": "Google", "frequency": 14 }
        ]
    },
    {
        "problem_name": "Course Schedule",
        "problem_link": "https://leetcode.com/problems/course-schedule/",
        "solution_link": "https://leetcode.com/problems/course-schedule/discuss/58509/C%2B%2B-BFSDFS",
        "patterns": ["Topological Sort", "Graph"],
        "difficulty": "Medium",
        "difficulty_rating": 81,
        "companies": [
            { "name": "Google", "frequency": 55 },
            { "name": "Meta", "frequency": 48 },
            { "name": "Amazon", "frequency": 37 },
            { "name": "Uber", "frequency": 32 }
        ]
    },
    {
        "problem_name": "Course Schedule II",
        "problem_link": "https://leetcode.com/problems/course-schedule-ii/",
        "solution_link": "https://leetcode.com/problems/course-schedule-ii/discuss/58519/Java-DFS-and-BFS-topological-sort-solutions",
        "patterns": ["Topological Sort", "Graph"],
        "difficulty": "Medium",
        "difficulty_rating": 82,
        "companies": [
            { "name": "Google", "frequency": 45 },
            { "name": "Amazon", "frequency": 38 }
        ]
    },
    {
        "problem_name": "Pacific Atlantic Water Flow",
        "problem_link": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        "solution_link": "https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/112693/Java-DFS-BFS-from-ocean",
        "patterns": ["DFS", "BFS", "Matrix"],
        "difficulty": "Medium",
        "difficulty_rating": 83,
        "companies": [
            { "name": "Amazon", "frequency": 19 },
            { "name": "Google", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Word Ladder",
        "problem_link": "https://leetcode.com/problems/word-ladder/",
        "solution_link": "https://leetcode.com/problems/word-ladder/discuss/40724/Simple-and-clear-solution-in-Java",
        "patterns": ["BFS", "Graph"],
        "difficulty": "Hard",
        "difficulty_rating": 84,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "Google", "frequency": 24 },
            { "name": "Facebook", "frequency": 20 }
        ]
    },
    {
        "problem_name": "Word Ladder II",
        "problem_link": "https://leetcode.com/problems/word-ladder-ii/",
        "solution_link": "https://leetcode.com/problems/word-ladder-ii/discuss/40471/Java-solution-using-BFS-and-DFS",
        "patterns": ["BFS", "DFS", "Graph"],
        "difficulty": "Hard",
        "difficulty_rating": 85,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Alien Dictionary",
        "problem_link": "https://leetcode.com/problems/alien-dictionary/",
        "solution_link": "https://leetcode.com/problems/alien-dictionary/discuss/70122/Java-AC-Solution-using-BFS",
        "patterns": ["Topological Sort", "Graph"],
        "difficulty": "Hard",
        "difficulty_rating": 86,
        "companies": [
            { "name": "Amazon", "frequency": 12 },
            { "name": "Google", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Minimum Height Trees",
        "problem_link": "https://leetcode.com/problems/minimum-height-trees/",
        "solution_link": "https://leetcode.com/problems/minimum-height-trees/discuss/76055/Share-some-thoughts",
        "patterns": ["Graph", "BFS"],
        "difficulty": "Medium",
        "difficulty_rating": 87,
        "companies": [
            { "name": "Amazon", "frequency": 14 },
            { "name": "Google", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Redundant Connection",
        "problem_link": "https://leetcode.com/problems/redundant-connection/",
        "solution_link": "https://leetcode.com/problems/redundant-connection/discuss/108048/Java-Union-Find",
        "patterns": ["Union Find", "Graph"],
        "difficulty": "Medium",
        "difficulty_rating": 88,
        "companies": [
            { "name": "Amazon", "frequency": 15 },
            { "name": "Google", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Accounts Merge",
        "problem_link": "https://leetcode.com/problems/accounts-merge/",
        "solution_link": "https://leetcode.com/problems/accounts-merge/discuss/109057/Java-Union-Find",
        "patterns": ["Union Find", "DFS"],
        "difficulty": "Medium",
        "difficulty_rating": 89,
        "companies": [
            { "name": "Amazon", "frequency": 14 },
            { "name": "Google", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Friend Circles",
        "problem_link": "https://leetcode.com/problems/friend-circles/",
        "solution_link": "https://leetcode.com/problems/friend-circles/discuss/101336/Java-solution-Union-Find",
        "patterns": ["Union Find", "DFS"],
        "difficulty": "Medium",
        "difficulty_rating": 90,
        "companies": [
            { "name": "Amazon", "frequency": 12 },
            { "name": "Google", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Implement Trie (Prefix Tree)",
        "problem_link": "https://leetcode.com/problems/implement-trie-prefix-tree/",
        "solution_link": "https://leetcode.com/problems/implement-trie-prefix-tree/discuss/58832/AC-Python-solution-using-defaultdict",
        "patterns": ["Trie"],
        "difficulty": "Medium",
        "difficulty_rating": 91,
        "companies": [
            { "name": "Amazon", "frequency": 29 },
            { "name": "Google", "frequency": 24 },
            { "name": "Microsoft", "frequency": 18 },
            { "name": "Bloomberg", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Word Search II",
        "problem_link": "https://leetcode.com/problems/word-search-ii/",
        "solution_link": "https://leetcode.com/problems/word-search-ii/discuss/59780/Java-15ms-Easiest-Solution-(99.36)",
        "patterns": ["Trie", "Backtracking"],
        "difficulty": "Hard",
        "difficulty_rating": 92,
        "companies": [
            { "name": "Amazon", "frequency": 25 },
            { "name": "Microsoft", "frequency": 21 },
            { "name": "Uber", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Add and Search Word - Data structure design",
        "problem_link": "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
        "solution_link": "https://leetcode.com/problems/add-and-search-word-data-structure-design/discuss/59598/Java-15-lines-using-Trie",
        "patterns": ["Trie", "Design"],
        "difficulty": "Medium",
        "difficulty_rating": 93,
        "companies": [
            { "name": "Amazon", "frequency": 14 },
            { "name": "Google", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Replace Words",
        "problem_link": "https://leetcode.com/problems/replace-words/",
        "solution_link": "https://leetcode.com/problems/replace-words/discuss/105701/Java-Trie-Solution",
        "patterns": ["Trie", "String"],
        "difficulty": "Medium",
        "difficulty_rating": 94,
        "companies": [
            { "name": "Amazon", "frequency": 12 },
            { "name": "Google", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Map Sum Pairs",
        "problem_link": "https://leetcode.com/problems/map-sum-pairs/",
        "solution_link": "https://leetcode.com/problems/map-sum-pairs/discuss/104454/Java-Trie-Solution",
        "patterns": ["Trie", "Hash Map"],
        "difficulty": "Medium",
        "difficulty_rating": 95,
        "companies": [
            { "name": "Amazon", "frequency": 9 },
            { "name": "Google", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Design Add and Search Words Data Structure",
        "problem_link": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
        "solution_link": "https://leetcode.com/problems/design-add-and-search-words-data-structure/discuss/59598/Java-15-lines-using-Trie",
        "patterns": ["Trie", "Backtracking"],
        "difficulty": "Medium",
        "difficulty_rating": 96,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Longest Word in Dictionary",
        "problem_link": "https://leetcode.com/problems/longest-word-in-dictionary/",
        "solution_link": "https://leetcode.com/problems/longest-word-in-dictionary/discuss/108741/Java-Trie-Solution",
        "patterns": ["Trie", "Sorting"],
        "difficulty": "Medium",
        "difficulty_rating": 97,
        "companies": [
            { "name": "Amazon", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Design Search Autocomplete System",
        "problem_link": "https://leetcode.com/problems/design-search-autocomplete-system/",
        "solution_link": "https://leetcode.com/problems/design-search-autocomplete-system/discuss/105657/Java-Solution-Trie-ArrayList-HashMap-PriorityQueue",
        "patterns": ["Trie", "Design", "Heap"],
        "difficulty": "Hard",
        "difficulty_rating": 98,
        "companies": [
            { "name": "Amazon", "frequency": 6 }
        ]
    },
    {
        "problem_name": "Stream of Characters",
        "problem_link": "https://leetcode.com/problems/stream-of-characters/",
        "solution_link": "https://leetcode.com/problems/stream-of-characters/discuss/278718/Java-Trie-Solution",
        "patterns": ["Trie", "Design"],
        "difficulty": "Hard",
        "difficulty_rating": 99,
        "companies": [
            { "name": "Amazon", "frequency": 5 }
        ]
    },
    {
        "problem_name": "Maximum XOR of Two Numbers in an Array",
        "problem_link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
        "solution_link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/discuss/91041/Java-Trie-Solution",
        "patterns": ["Trie", "Bit Manipulation"],
        "difficulty": "Medium",
        "difficulty_rating": 100,
        "companies": [
            { "name": "Amazon", "frequency": 10 },
            { "name": "Google", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Find the Duplicate Number",
        "problem_link": "https://leetcode.com/problems/find-the-duplicate-number/",
        "solution_link": "https://leetcode.com/problems/find-the-duplicate-number/discuss/72846/My-easy-understood-solution-with-O(n)-time-and-O(1)-space-without-modifying-the-array.-With-clear-explanation.",
        "patterns": ["Fast & Slow Pointers", "Binary Search", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 101,
        "companies": [
            { "name": "Amazon", "frequency": 39 },
            { "name": "Google", "frequency": 33 },
            { "name": "Microsoft", "frequency": 27 },
            { "name": "Bloomberg", "frequency": 19 }
        ]
    },
    {
        "problem_name": "Linked List Cycle II",
        "problem_link": "https://leetcode.com/problems/linked-list-cycle-ii/",
        "solution_link": "https://leetcode.com/problems/linked-list-cycle-ii/discuss/44793/O(n)-solution-by-using-two-pointers-without-change-anything",
        "patterns": ["Fast & Slow Pointers"],
        "difficulty": "Medium",
        "difficulty_rating": 102,
        "companies": [
            { "name": "Microsoft", "frequency": 45 },
            { "name": "Amazon", "frequency": 39 },
            { "name": "Bloomberg", "frequency": 32 }
        ]
    },
    {
        "problem_name": "Happy Number",
        "problem_link": "https://leetcode.com/problems/happy-number/",
        "solution_link": "https://leetcode.com/problems/happy-number/discuss/56917/Java-solution-using-HashSet-and-Floyd-cycle-detection-algorithm",
        "patterns": ["Fast & Slow Pointers", "Math"],
        "difficulty": "Easy",
        "difficulty_rating": 103,
        "companies": [
            { "name": "Amazon", "frequency": 15 },
            { "name": "Google", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Palindrome Linked List",
        "problem_link": "https://leetcode.com/problems/palindrome-linked-list/",
        "solution_link": "https://leetcode.com/problems/palindrome-linked-list/discuss/64501/O(n)-time-and-O(1)-space-solution",
        "patterns": ["Fast & Slow Pointers", "Linked List"],
        "difficulty": "Easy",
        "difficulty_rating": 104,
        "companies": [
            { "name": "Amazon", "frequency": 19 },
            { "name": "Google", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Intersection of Two Linked Lists",
        "problem_link": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        "solution_link": "https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/49785/Concise-O(n)-solution-by-swapping-heads",
        "patterns": ["Fast & Slow Pointers", "Linked List"],
        "difficulty": "Easy",
        "difficulty_rating": 105,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Remove Duplicates from Sorted List",
        "problem_link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "solution_link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/discuss/5729/Simple-Java-solution",
        "patterns": ["Linked List"],
        "difficulty": "Easy",
        "difficulty_rating": 106,
        "companies": [
            { "name": "Amazon", "frequency": 12 },
            { "name": "Google", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Remove Duplicates from Sorted List II",
        "problem_link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "solution_link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/discuss/28335/Share-my-Java-solution",
        "patterns": ["Linked List"],
        "difficulty": "Medium",
        "difficulty_rating": 107,
        "companies": [
            { "name": "Amazon", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Reverse Nodes in k-Group",
        "problem_link": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "solution_link": "https://leetcode.com/problems/reverse-nodes-in-k-group/discuss/11431/Java-solution-with-comments",
        "patterns": ["Linked List"],
        "difficulty": "Hard",
        "difficulty_rating": 108,
        "companies": [
            { "name": "Amazon", "frequency": 9 }
        ]
    },
    {
        "problem_name": "Rotate List",
        "problem_link": "https://leetcode.com/problems/rotate-list/",
        "solution_link": "https://leetcode.com/problems/rotate-list/discuss/22713/Share-my-Java-solution-with-explanation",
        "patterns": ["Linked List"],
        "difficulty": "Medium",
        "difficulty_rating": 109,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Odd Even Linked List",
        "problem_link": "https://leetcode.com/problems/odd-even-linked-list/",
        "solution_link": "https://leetcode.com/problems/odd-even-linked-list/discuss/78053/Java-solution-with-O(1)-space-and-O(n)-time",
        "patterns": ["Linked List"],
        "difficulty": "Medium",
        "difficulty_rating": 110,
        "companies": [
            { "name": "Amazon", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Partition List",
        "problem_link": "https://leetcode.com/problems/partition-list/",
        "solution_link": "https://leetcode.com/problems/partition-list/discuss/29164/Java-two-pointer-solution",
        "patterns": ["Linked List", "Two Pointers"],
        "difficulty": "Medium",
        "difficulty_rating": 111,
        "companies": [
            { "name": "Amazon", "frequency": 6 }
        ]
    },
    {
        "problem_name": "LRU Cache",
        "problem_link": "https://leetcode.com/problems/lru-cache/",
        "solution_link": "https://leetcode.com/problems/lru-cache/discuss/45911/Java-Hashtable-%2B-Double-linked-list-(with-a-touch-of-pseudo-nodes)",
        "patterns": ["Hash Map", "Linked List", "Design"],
        "difficulty": "Medium",
        "difficulty_rating": 112,
        "companies": [
            { "name": "Amazon", "frequency": 55 },
            { "name": "Microsoft", "frequency": 47 },
            { "name": "Facebook", "frequency": 43 },
            { "name": "Bloomberg", "frequency": 82 }
        ]
    },
    {
        "problem_name": "LFU Cache",
        "problem_link": "https://leetcode.com/problems/lfu-cache/",
        "solution_link": "https://leetcode.com/problems/lfu-cache/discuss/94516/Java-10-lines-O(1)-put-get-with-Explanation",
        "patterns": ["Hash Map", "Design"],
        "difficulty": "Hard",
        "difficulty_rating": 113,
        "companies": [
            { "name": "Amazon", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Design Hit Counter",
        "problem_link": "https://leetcode.com/problems/design-hit-counter/",
        "solution_link": "https://leetcode.com/problems/design-hit-counter/discuss/83463/Java-O(1)-solution-using-two-queues",
        "patterns": ["Queue", "Design"],
        "difficulty": "Medium",
        "difficulty_rating": 114,
        "companies": [
            { "name": "Amazon", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Design Circular Queue",
        "problem_link": "https://leetcode.com/problems/design-circular-queue/",
        "solution_link": "https://leetcode.com/problems/design-circular-queue/discuss/149879/Java-Simple-O(1)-solution",
        "patterns": ["Queue", "Design"],
        "difficulty": "Medium",
        "difficulty_rating": 115,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Design Circular Deque",
        "problem_link": "https://leetcode.com/problems/design-circular-deque/",
        "solution_link": "https://leetcode.com/problems/design-circular-deque/discuss/149880/Java-Simple-O(1)-solution",
        "patterns": ["Deque", "Design"],
        "difficulty": "Medium",
        "difficulty_rating": 116,
        "companies": [
            { "name": "Amazon", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Min Stack",
        "problem_link": "https://leetcode.com/problems/min-stack/",
        "solution_link": "https://leetcode.com/problems/min-stack/discuss/49010/Clean-3ms-Java-solution",
        "patterns": ["Stack", "Design"],
        "difficulty": "Easy",
        "difficulty_rating": 117,
        "companies": [
            { "name": "Amazon", "frequency": 22 },
            { "name": "Microsoft", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Max Stack",
        "problem_link": "https://leetcode.com/problems/max-stack/",
        "solution_link": "https://leetcode.com/problems/max-stack/discuss/107188/Java-O(1)-push-pop-top-peekMax-popMax-with-Double-LinkedList-TreeMap",
        "patterns": ["Stack", "Design"],
        "difficulty": "Medium",
        "difficulty_rating": 118,
        "companies": [
            { "name": "Amazon", "frequency": 5 }
        ]
    },
    {
        "problem_name": "Implement Queue using Stacks",
        "problem_link": "https://leetcode.com/problems/implement-queue-using-stacks/",
        "solution_link": "https://leetcode.com/problems/implement-queue-using-stacks/discuss/64259/My-accepted-Java-solution",
        "patterns": ["Stack", "Queue", "Design"],
        "difficulty": "Easy",
        "difficulty_rating": 119,
        "companies": [
            { "name": "Amazon", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Implement Stack using Queues",
        "problem_link": "https://leetcode.com/problems/implement-stack-using-queues/",
        "solution_link": "https://leetcode.com/problems/implement-stack-using-queues/discuss/62164/My-Java-solution",
        "patterns": ["Stack", "Queue", "Design"],
        "difficulty": "Easy",
        "difficulty_rating": 120,
        "companies": [
            { "name": "Amazon", "frequency": 11 }
        ]
    },
    {
        "problem_name": "Implement Stack using Linked List",
        "problem_link": "https://leetcode.com/problems/design-a-stack-with-increment-operation/",
        "solution_link": "https://leetcode.com/problems/design-a-stack-with-increment-operation/discuss/685949/JavaPython-Stack-Solution",
        "patterns": ["Stack", "Linked List", "Design"],
        "difficulty": "Easy",
        "difficulty_rating": 121,
        "companies": [
            { "name": "Amazon", "frequency": 6 }
        ]
    },
    {
        "problem_name": "Evaluate Reverse Polish Notation",
        "problem_link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        "solution_link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/discuss/47430/Java-accepted-code-stack-implementation",
        "patterns": ["Stack", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 122,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "LinkedIn", "frequency": 24 },
            { "name": "Microsoft", "frequency": 20 }
        ]
    },
    {
        "problem_name": "Basic Calculator II",
        "problem_link": "https://leetcode.com/problems/basic-calculator-ii/",
        "solution_link": "https://leetcode.com/problems/basic-calculator-ii/discuss/62302/Java-straightforward-solution",
        "patterns": ["Stack", "Math"],
        "difficulty": "Medium",
        "difficulty_rating": 123,
        "companies": [
            { "name": "Amazon", "frequency": 15 },
            { "name": "Google", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Largest Rectangle in Histogram",
        "problem_link": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "solution_link": "https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/28900/O(n)-stack-based-Java-solution",
        "patterns": ["Monotonic Stack", "Array"],
        "difficulty": "Hard",
        "difficulty_rating": 124,
        "companies": [
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 28 },
            { "name": "Uber", "frequency": 25 }
        ]
    },
    {
        "problem_name": "Trapping Rain Water",
        "problem_link": "https://leetcode.com/problems/trapping-rain-water/",
        "solution_link": "https://leetcode.com/problems/trapping-rain-water/discuss/17391/Share-my-simple-solution",
        "patterns": ["Two Pointers", "Dynamic Programming", "Monotonic Stack"],
        "difficulty": "Hard",
        "difficulty_rating": 125,
        "companies": [
            { "name": "Amazon", "frequency": 89 },
            { "name": "Google", "frequency": 76 },
            { "name": "Bloomberg", "frequency": 57 }
        ]
    },
    {
        "problem_name": "Daily Temperatures",
        "problem_link": "https://leetcode.com/problems/daily-temperatures/",
        "solution_link": "https://leetcode.com/problems/daily-temperatures/discuss/109832/Java-Easy-AC-Solution-with-Stack",
        "patterns": ["Monotonic Stack", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 126,
        "companies": [
            { "name": "Amazon", "frequency": 38 },
            { "name": "Google", "frequency": 32 },
            { "name": "Facebook", "frequency": 28 }
        ]
    },
    {
        "problem_name": "Next Greater Element I",
        "problem_link": "https://leetcode.com/problems/next-greater-element-i/",
        "solution_link": "https://leetcode.com/problems/next-greater-element-i/discuss/98274/JavaC++-Simple-and-Clean-Solution",
        "patterns": ["Monotonic Stack", "Hash Map"],
        "difficulty": "Easy",
        "difficulty_rating": 127,
        "companies": [
            { "name": "Amazon", "frequency": 12 },
            { "name": "Google", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Next Greater Element II",
        "problem_link": "https://leetcode.com/problems/next-greater-element-ii/",
        "solution_link": "https://leetcode.com/problems/next-greater-element-ii/discuss/98294/Java-O(n)-solution-using-stack",
        "patterns": ["Monotonic Stack", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 128,
        "companies": [
            { "name": "Amazon", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Online Stock Span",
        "problem_link": "https://leetcode.com/problems/online-stock-span/",
        "solution_link": "https://leetcode.com/problems/online-stock-span/discuss/317492/JavaC++Python-Monotonic-Stack",
        "patterns": ["Monotonic Stack", "Design"],
        "difficulty": "Medium",
        "difficulty_rating": 129,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Sum of Subarray Minimums",
        "problem_link": "https://leetcode.com/problems/sum-of-subarray-minimums/",
        "solution_link": "https://leetcode.com/problems/sum-of-subarray-minimums/discuss/170750/Java-O(N)-Monotonic-Stack",
        "patterns": ["Monotonic Stack", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 130,
        "companies": [
            { "name": "Amazon", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Binary Tree Inorder Traversal",
        "problem_link": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "solution_link": "https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/32738/My-accepted-Java-solution",
        "patterns": ["DFS", "Binary Tree", "Stack"],
        "difficulty": "Easy",
        "difficulty_rating": 131,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Microsoft", "frequency": 14 }
        ]
    },
    {
        "problem_name": "Binary Tree Preorder Traversal",
        "problem_link": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        "solution_link": "https://leetcode.com/problems/binary-tree-preorder-traversal/discuss/45466/My-Accepted-Java-Solution",
        "patterns": ["DFS", "Binary Tree", "Stack"],
        "difficulty": "Easy",
        "difficulty_rating": 132,
        "companies": [
            { "name": "Amazon", "frequency": 15 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Binary Tree Postorder Traversal",
        "problem_link": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
        "solution_link": "https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/45469/My-Accepted-Java-Solution",
        "patterns": ["DFS", "Binary Tree", "Stack"],
        "difficulty": "Easy",
        "difficulty_rating": 133,
        "companies": [
            { "name": "Amazon", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Binary Tree Level Order Traversal",
        "problem_link": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "solution_link": "https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/33445/Java-Solution-using-DFS",
        "patterns": ["BFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 134,
        "companies": [
            { "name": "Amazon", "frequency": 38 },
            { "name": "Microsoft", "frequency": 32 },
            { "name": "Google", "frequency": 28 }
        ]
    },
    {
        "problem_name": "Binary Tree Zigzag Level Order Traversal",
        "problem_link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "solution_link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/discuss/34092/Java-Solution-using-two-stacks",
        "patterns": ["BFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 135,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Microsoft", "frequency": 14 }
        ]
    },
    {
        "problem_name": "Binary Tree Right Side View",
        "problem_link": "https://leetcode.com/problems/binary-tree-right-side-view/",
        "solution_link": "https://leetcode.com/problems/binary-tree-right-side-view/discuss/56081/2ms-Java-BFS-solution",
        "patterns": ["BFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 136,
        "companies": [
            { "name": "Amazon", "frequency": 14 }
        ]
    },
    {
        "problem_name": "Count Good Nodes in Binary Tree",
        "problem_link": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
        "solution_link": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/discuss/597027/JavaC++Python-Preorder-Traversal",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 137,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Lowest Common Ancestor of a Binary Tree",
        "problem_link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        "solution_link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/65224/4-lines-of-Java-code",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 138,
        "companies": [
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 26 },
            { "name": "Google", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Diameter of Binary Tree",
        "problem_link": "https://leetcode.com/problems/diameter-of-binary-tree/",
        "solution_link": "https://leetcode.com/problems/diameter-of-binary-tree/discuss/101132/Java-Solution-MaxDepth",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 139,
        "companies": [
            { "name": "Amazon", "frequency": 14 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Path Sum",
        "problem_link": "https://leetcode.com/problems/path-sum/",
        "solution_link": "https://leetcode.com/problems/path-sum/discuss/36551/DFS-recursive-and-iterative-solutions-in-Java",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 140,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Path Sum II",
        "problem_link": "https://leetcode.com/problems/path-sum-ii/",
        "solution_link": "https://leetcode.com/problems/path-sum-ii/discuss/36481/Java-solution-using-recursion",
        "patterns": ["DFS", "Binary Tree", "Backtracking"],
        "difficulty": "Medium",
        "difficulty_rating": 141,
        "companies": [
            { "name": "Amazon", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Path Sum III",
        "problem_link": "https://leetcode.com/problems/path-sum-iii/",
        "solution_link": "https://leetcode.com/problems/path-sum-iii/discuss/91894/Java-DFS-solution-with-explanation-and-pictures",
        "patterns": ["DFS", "Binary Tree", "Prefix Sum"],
        "difficulty": "Medium",
        "difficulty_rating": 142,
        "companies": [
            { "name": "Amazon", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Same Tree",
        "problem_link": "https://leetcode.com/problems/same-tree/",
        "solution_link": "https://leetcode.com/problems/same-tree/discuss/32687/5-lines-Java-easy-solution-with-recursion",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 143,
        "companies": [
            { "name": "Google", "frequency": 18 },
            { "name": "Amazon", "frequency": 15 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Symmetric Tree",
        "problem_link": "https://leetcode.com/problems/symmetric-tree/",
        "solution_link": "https://leetcode.com/problems/symmetric-tree/discuss/33054/Recursive-and-non-recursive-solutions-in-Java",
        "patterns": ["DFS", "BFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 144,
        "companies": [
            { "name": "Microsoft", "frequency": 25 },
            { "name": "Amazon", "frequency": 20 },
            { "name": "Google", "frequency": 16 }
        ]
    },
    {
        "problem_name": "Invert Binary Tree",
        "problem_link": "https://leetcode.com/problems/invert-binary-tree/",
        "solution_link": "https://leetcode.com/problems/invert-binary-tree/discuss/62707/Straightforward-DFS-recursive-iterative-BFS-solutions",
        "patterns": ["DFS", "BFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 145,
        "companies": [
            { "name": "Google", "frequency": 22 },
            { "name": "Amazon", "frequency": 18 },
            { "name": "Microsoft", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Serialize and Deserialize Binary Tree",
        "problem_link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        "solution_link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/discuss/74253/Easy-to-understand-Java-Solution",
        "patterns": ["DFS", "BFS", "Binary Tree", "Design"],
        "difficulty": "Hard",
        "difficulty_rating": 146,
        "companies": [
            { "name": "Amazon", "frequency": 48 },
            { "name": "Google", "frequency": 42 },
            { "name": "Facebook", "frequency": 38 }
        ]
    },
    {
        "problem_name": "Flatten Binary Tree to Linked List",
        "problem_link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "solution_link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/discuss/36999/Concise-Java-solutions",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 147,
        "companies": [
            { "name": "Amazon", "frequency": 15 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Binary Tree Maximum Path Sum",
        "problem_link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "solution_link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/39775/Accepted-short-solution-in-Java",
        "patterns": ["DFS", "Binary Tree", "Dynamic Programming"],
        "difficulty": "Hard",
        "difficulty_rating": 148,
        "companies": [
            { "name": "Amazon", "frequency": 55 },
            { "name": "Microsoft", "frequency": 48 },
            { "name": "Uber", "frequency": 42 }
        ]
    },
    {
        "problem_name": "Subtree of Another Tree",
        "problem_link": "https://leetcode.com/problems/subtree-of-another-tree/",
        "solution_link": "https://leetcode.com/problems/subtree-of-another-tree/discuss/102741/Python-Straightforward-with-Explanation-(O(ST)-and-O(S%2BT)-approaches)",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 149,
        "companies": [
            { "name": "Facebook", "frequency": 24 },
            { "name": "Amazon", "frequency": 20 }
        ]
    },
    {
        "problem_name": "Balanced Binary Tree",
        "problem_link": "https://leetcode.com/problems/balanced-binary-tree/",
        "solution_link": "https://leetcode.com/problems/balanced-binary-tree/discuss/35677/Java-O(n)-solution",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 150,
        "companies": [
            { "name": "Amazon", "frequency": 14 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Maximum Depth of Binary Tree",
        "problem_link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "solution_link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/34216/Simple-solution-using-Java",
        "patterns": ["DFS", "BFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 151,
        "companies": [
            { "name": "Amazon", "frequency": 28 },
            { "name": "Microsoft", "frequency": 22 },
            { "name": "Google", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Minimum Depth of Binary Tree",
        "problem_link": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "solution_link": "https://leetcode.com/problems/minimum-depth-of-binary-tree/discuss/36098/Short-Java-solution",
        "patterns": ["DFS", "BFS", "Binary Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 152,
        "companies": [
            { "name": "Amazon", "frequency": 12 },
            { "name": "Microsoft", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Sum Root to Leaf Numbers",
        "problem_link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "solution_link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/discuss/41363/My-accepted-Java-solution",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 153,
        "companies": [
            { "name": "Amazon", "frequency": 9 }
        ]
    },
    {
        "problem_name": "Binary Tree Paths",
        "problem_link": "https://leetcode.com/problems/binary-tree-paths/",
        "solution_link": "https://leetcode.com/problems/binary-tree-paths/discuss/68232/Java-DFS-and-BFS-solution",
        "patterns": ["DFS", "Binary Tree", "Backtracking"],
        "difficulty": "Easy",
        "difficulty_rating": 154,
        "companies": [
            { "name": "Amazon", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Construct Binary Tree from Preorder and Inorder Traversal",
        "problem_link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "solution_link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/34538/Java-solution-using-recursion",
        "patterns": ["DFS", "Binary Tree", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 155,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Construct Binary Tree from Inorder and Postorder Traversal",
        "problem_link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "solution_link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/discuss/221681/Java-Iterative-and-Recursive-Solutions",
        "patterns": ["DFS", "Binary Tree", "Array"],
        "difficulty": "Medium",
        "difficulty_rating": 156,
        "companies": [
            { "name": "Amazon", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Populating Next Right Pointers in Each Node",
        "problem_link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "solution_link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/discuss/37482/Java-solution-with-O(1)-space",
        "patterns": ["BFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 157,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Populating Next Right Pointers in Each Node II",
        "problem_link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        "solution_link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/discuss/37833/Java-solution-with-O(1)-space",
        "patterns": ["BFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 158,
        "companies": [
            { "name": "Amazon", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Flatten Binary Tree to Linked List",
        "problem_link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "solution_link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/discuss/36999/Concise-Java-solutions",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 159,
        "companies": [
            { "name": "Amazon", "frequency": 15 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Convert Sorted Array to Binary Search Tree",
        "problem_link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        "solution_link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/discuss/35216/My-accepted-Java-solution",
        "patterns": ["DFS", "Binary Search Tree", "Array"],
        "difficulty": "Easy",
        "difficulty_rating": 160,
        "companies": [
            { "name": "Amazon", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Convert Sorted List to Binary Search Tree",
        "problem_link": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
        "solution_link": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/discuss/35541/Share-my-Java-solution",
        "patterns": ["DFS", "Binary Search Tree", "Linked List"],
        "difficulty": "Medium",
        "difficulty_rating": 161,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Validate Binary Search Tree",
        "problem_link": "https://leetcode.com/problems/validate-binary-search-tree/",
        "solution_link": "https://leetcode.com/problems/validate-binary-search-tree/discuss/32109/Short-Java-Solution",
        "patterns": ["DFS", "Binary Search Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 162,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Microsoft", "frequency": 14 }
        ]
    },
    {
        "problem_name": "Kth Smallest Element in a BST",
        "problem_link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        "solution_link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/discuss/63749/Share-my-Java-solution",
        "patterns": ["DFS", "Binary Search Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 163,
        "companies": [
            { "name": "Amazon", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Lowest Common Ancestor of a Binary Search Tree",
        "problem_link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        "solution_link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/discuss/64963/3-lines-with-O(1)-space-1-Liners-Alternatives",
        "patterns": ["DFS", "Binary Search Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 164,
        "companies": [
            { "name": "Amazon", "frequency": 32 },
            { "name": "Microsoft", "frequency": 26 },
            { "name": "Google", "frequency": 22 }
        ]
    },
    {
        "problem_name": "Delete Node in a BST",
        "problem_link": "https://leetcode.com/problems/delete-node-in-a-bst/",
        "solution_link": "https://leetcode.com/problems/delete-node-in-a-bst/discuss/93101/Java-solution-using-recursion",
        "patterns": ["DFS", "Binary Search Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 165,
        "companies": [
            { "name": "Amazon", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Search in a Binary Search Tree",
        "problem_link": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
        "solution_link": "https://leetcode.com/problems/search-in-a-binary-search-tree/discuss/145202/Java-Recursive-and-Iterative-solutions",
        "patterns": ["DFS", "Binary Search Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 166,
        "companies": [
            { "name": "Amazon", "frequency": 9 }
        ]
    },
    {
        "problem_name": "Insert into a Binary Search Tree",
        "problem_link": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
        "solution_link": "https://leetcode.com/problems/insert-into-a-binary-search-tree/discuss/195881/Java-Recursive-and-Iterative-solutions",
        "patterns": ["DFS", "Binary Search Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 167,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Range Sum of BST",
        "problem_link": "https://leetcode.com/problems/range-sum-of-bst/",
        "solution_link": "https://leetcode.com/problems/range-sum-of-bst/discuss/276659/Java-DFS-and-BFS-solution",
        "patterns": ["DFS", "Binary Search Tree"],
        "difficulty": "Easy",
        "difficulty_rating": 168,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Recover Binary Search Tree",
        "problem_link": "https://leetcode.com/problems/recover-binary-search-tree/",
        "solution_link": "https://leetcode.com/problems/recover-binary-search-tree/discuss/32556/Java-solution-with-O(1)-space",
        "patterns": ["DFS", "Binary Search Tree"],
        "difficulty": "Hard",
        "difficulty_rating": 169,
        "companies": [
            { "name": "Amazon", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Count Complete Tree Nodes",
        "problem_link": "https://leetcode.com/problems/count-complete-tree-nodes/",
        "solution_link": "https://leetcode.com/problems/count-complete-tree-nodes/discuss/61958/Concise-Java-solutions-O(logn2)",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 170,
        "companies": [
            { "name": "Amazon", "frequency": 7 }
        ]
    },
    {
        "problem_name": "Find Leaves of Binary Tree",
        "problem_link": "https://leetcode.com/problems/find-leaves-of-binary-tree/",
        "solution_link": "https://leetcode.com/problems/find-leaves-of-binary-tree/discuss/77972/Java-Solution-using-DFS",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 171,
        "companies": [
            { "name": "Amazon", "frequency": 6 }
        ]
    },
    {
        "problem_name": "Binary Tree Vertical Order Traversal",
        "problem_link": "https://leetcode.com/problems/binary-tree-vertical-order-traversal/",
        "solution_link": "https://leetcode.com/problems/binary-tree-vertical-order-traversal/discuss/68297/Java-DFS-and-BFS-solution",
        "patterns": ["BFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 172,
        "companies": [
            { "name": "Amazon", "frequency": 6 }
        ]
    },
    {
        "problem_name": "Vertical Order Traversal of a Binary Tree",
        "problem_link": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
        "solution_link": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/discuss/231614/JavaC++Python-Vertical-Order-Traversal",
        "patterns": ["BFS", "Binary Tree"],
        "difficulty": "Hard",
        "difficulty_rating": 173,
        "companies": [
            { "name": "Amazon", "frequency": 5 }
        ]
    },
    {
        "problem_name": "Binary Tree Right Side View",
        "problem_link": "https://leetcode.com/problems/binary-tree-right-side-view/",
        "solution_link": "https://leetcode.com/problems/binary-tree-right-side-view/discuss/56081/2ms-Java-BFS-solution",
        "patterns": ["BFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 174,
        "companies": [
            { "name": "Amazon", "frequency": 14 }
        ]
    },
    {
        "problem_name": "Serialize and Deserialize BST",
        "problem_link": "https://leetcode.com/problems/serialize-and-deserialize-bst/",
        "solution_link": "https://leetcode.com/problems/serialize-and-deserialize-bst/discuss/93188/Java-Preorder-Solution",
        "patterns": ["DFS", "Binary Search Tree", "Design"],
        "difficulty": "Hard",
        "difficulty_rating": 175,
        "companies": [
            { "name": "Amazon", "frequency": 5 }
        ]
    },
    {
        "problem_name": "All Nodes Distance K in Binary Tree",
        "problem_link": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
        "solution_link": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/discuss/143752/Java-BFS-DFS-Solutions",
        "patterns": ["DFS", "BFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 176,
        "companies": [
            { "name": "Amazon", "frequency": 5 }
        ]
    },
    {
        "problem_name": "Sum Root to Leaf Numbers",
        "problem_link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        "solution_link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/discuss/41363/My-accepted-Java-solution",
        "patterns": ["DFS", "Binary Tree"],
        "difficulty": "Medium",
        "difficulty_rating": 177,
        "companies": [
            { "name": "Amazon", "frequency": 9 }
        ]
    },
    {
        "problem_name": "Find Duplicate Subtrees",
        "problem_link": "https://leetcode.com/problems/find-duplicate-subtrees/",
        "solution_link": "https://leetcode.com/problems/find-duplicate-subtrees/discuss/106016/Java-O(n)-solution-based-on-serialization",
        "patterns": ["DFS", "Binary Tree", "Hash Map"],
        "difficulty": "Medium",
        "difficulty_rating": 178,
        "companies": [
            { "name": "Amazon", "frequency": 5 }
        ]
    },
    {
        "problem_name": "Construct Binary Tree from String",
        "problem_link": "https://leetcode.com/problems/construct-binary-tree-from-string/",
        "solution_link": "https://leetcode.com/problems/construct-binary-tree-from-string/discuss/104150/Java-Stack-Solution",
        "patterns": ["DFS", "Binary Tree", "Stack"],
        "difficulty": "Medium",
        "difficulty_rating": 179,
        "companies": [
            { "name": "Amazon", "frequency": 4 }
        ]
    },
    {
        "problem_name": "Binary Tree Cameras",
        "problem_link": "https://leetcode.com/problems/binary-tree-cameras/",
        "solution_link": "https://leetcode.com/problems/binary-tree-cameras/discuss/211182/JavaC++Python-Greedy-DP",
        "patterns": ["DFS", "Greedy", "Binary Tree", "Dynamic Programming"],
        "difficulty": "Hard",
        "difficulty_rating": 180,
        "companies": [
            { "name": "Amazon", "frequency": 4 }
        ]
    },
    {
        "problem_name": "N-Queens",
        "problem_link": "https://leetcode.com/problems/n-queens/",
        "solution_link": "https://leetcode.com/problems/n-queens/discuss/19808/Accepted-4ms-c++-solution-use-backtracking-and-bitmask-easy-understand",
        "patterns": ["Backtracking", "DFS"],
        "difficulty": "Hard",
        "difficulty_rating": 181,
        "companies": [
            { "name": "Google", "frequency": 32 },
            { "name": "Amazon", "frequency": 25 },
            { "name": "Microsoft", "frequency": 21 }
        ]
    },
    {
        "problem_name": "N-Queens II",
        "problem_link": "https://leetcode.com/problems/n-queens-ii/",
        "solution_link": "https://leetcode.com/problems/n-queens-ii/discuss/19811/Accepted-4ms-c++-solution-use-backtracking-and-bitmask-easy-understand",
        "patterns": ["Backtracking", "DFS"],
        "difficulty": "Hard",
        "difficulty_rating": 182,
        "companies": [
            { "name": "Amazon", "frequency": 15 },
            { "name": "Microsoft", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Sudoku Solver",
        "problem_link": "https://leetcode.com/problems/sudoku-solver/",
        "solution_link": "https://leetcode.com/problems/sudoku-solver/discuss/15650/Short-java-backtracking-solution",
        "patterns": ["Backtracking", "Matrix"],
        "difficulty": "Hard",
        "difficulty_rating": 183,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Word Break II",
        "problem_link": "https://leetcode.com/problems/word-break-ii/",
        "solution_link": "https://leetcode.com/problems/word-break-ii/discuss/44108/Java-DP-and-backtracking-solution",
        "patterns": ["Backtracking", "Dynamic Programming"],
        "difficulty": "Hard",
        "difficulty_rating": 184,
        "companies": [
            { "name": "Amazon", "frequency": 12 },
            { "name": "Google", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Palindrome Partitioning II",
        "problem_link": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "solution_link": "https://leetcode.com/problems/palindrome-partitioning-ii/discuss/41963/Java:-DP-%2B-DFS-solution",
        "patterns": ["Backtracking", "Dynamic Programming"],
        "difficulty": "Hard",
        "difficulty_rating": 185,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Restore IP Addresses",
        "problem_link": "https://leetcode.com/problems/restore-ip-addresses/",
        "solution_link": "https://leetcode.com/problems/restore-ip-addresses/discuss/30900/Java-backtracking-solution",
        "patterns": ["Backtracking", "String"],
        "difficulty": "Medium",
        "difficulty_rating": 186,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Regular Expression Matching",
        "problem_link": "https://leetcode.com/problems/regular-expression-matching/",
        "solution_link": "https://leetcode.com/problems/regular-expression-matching/discuss/5684/Simple-recursive-Java-solution-with-memoization",
        "patterns": ["Dynamic Programming", "Recursion"],
        "difficulty": "Hard",
        "difficulty_rating": 187,
        "companies": [
            { "name": "Amazon", "frequency": 22 },
            { "name": "Google", "frequency": 18 }
        ]
    },
    {
        "problem_name": "Wildcard Matching",
        "problem_link": "https://leetcode.com/problems/wildcard-matching/",
        "solution_link": "https://leetcode.com/problems/wildcard-matching/discuss/17810/Java-DP-solution-with-comments",
        "patterns": ["Dynamic Programming", "Greedy"],
        "difficulty": "Hard",
        "difficulty_rating": 188,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Edit Distance",
        "problem_link": "https://leetcode.com/problems/edit-distance/",
        "solution_link": "https://leetcode.com/problems/edit-distance/discuss/25846/Java-DP-solution-O(mn)-time-and-O(mn)-space",
        "patterns": ["Dynamic Programming"],
        "difficulty": "Hard",
        "difficulty_rating": 189,
        "companies": [
            { "name": "Amazon", "frequency": 16 },
            { "name": "Google", "frequency": 14 }
        ]
    },
    {
        "problem_name": "Distinct Subsequences",
        "problem_link": "https://leetcode.com/problems/distinct-subsequences/",
        "solution_link": "https://leetcode.com/problems/distinct-subsequences/discuss/37394/Java-DP-solution-O(n2)-time-and-O(n)-space",
        "patterns": ["Dynamic Programming"],
        "difficulty": "Hard",
        "difficulty_rating": 190,
        "companies": [
            { "name": "Amazon", "frequency": 10 }
        ]
    },
    {
        "problem_name": "Burst Balloons",
        "problem_link": "https://leetcode.com/problems/burst-balloons/",
        "solution_link": "https://leetcode.com/problems/burst-balloons/discuss/76228/Share-some-analysis-and-explanations",
        "patterns": ["Dynamic Programming"],
        "difficulty": "Hard",
        "difficulty_rating": 191,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    },
    {
        "problem_name": "Longest Valid Parentheses",
        "problem_link": "https://leetcode.com/problems/longest-valid-parentheses/",
        "solution_link": "https://leetcode.com/problems/longest-valid-parentheses/discuss/14133/Two-Java-solutions-with-explanation-stack-and-dp",
        "patterns": ["Dynamic Programming", "Stack"],
        "difficulty": "Hard",
        "difficulty_rating": 192,
        "companies": [
            { "name": "Amazon", "frequency": 16 },
            { "name": "Google", "frequency": 14 }
        ]
    },
    {
        "problem_name": "First Missing Positive",
        "problem_link": "https://leetcode.com/problems/first-missing-positive/",
        "solution_link": "https://leetcode.com/problems/first-missing-positive/discuss/17214/Share-my-O(n)-time-O(1)-space-solution",
        "patterns": ["Array"],
        "difficulty": "Hard",
        "difficulty_rating": 193,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Candy",
        "problem_link": "https://leetcode.com/problems/candy/",
        "solution_link": "https://leetcode.com/problems/candy/discuss/42769/Java-two-pass-solution",
        "patterns": ["Greedy"],
        "difficulty": "Hard",
        "difficulty_rating": 194,
        "companies": [
            { "name": "Amazon", "frequency": 12 }
        ]
    },
    {
        "problem_name": "The Skyline Problem",
        "problem_link": "https://leetcode.com/problems/the-skyline-problem/",
        "solution_link": "https://leetcode.com/problems/the-skyline-problem/discuss/61294/Short-and-Clean-Solution",
        "patterns": ["Heap", "Sweep Line"],
        "difficulty": "Hard",
        "difficulty_rating": 195,
        "companies": [
            { "name": "Amazon", "frequency": 15 },
            { "name": "Google", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Median of Two Sorted Arrays",
        "problem_link": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "solution_link": "https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2471/Share-my-O(log-min(mn))-solution-with-explanation",
        "patterns": ["Binary Search", "Array", "Divide and Conquer"],
        "difficulty": "Hard",
        "difficulty_rating": 196,
        "companies": [
            { "name": "Amazon", "frequency": 18 },
            { "name": "Google", "frequency": 15 }
        ]
    },
    {
        "problem_name": "Find Median from Data Stream",
        "problem_link": "https://leetcode.com/problems/find-median-from-data-stream/",
        "solution_link": "https://leetcode.com/problems/find-median-from-data-stream/discuss/74047/JavaPython-two-heap-solution-O(log-n)-add-O(1)-find",
        "patterns": ["Heap", "Design"],
        "difficulty": "Hard",
        "difficulty_rating": 197,
        "companies": [
            { "name": "Google", "frequency": 45 },
            { "name": "Amazon", "frequency": 38 }
        ]
    },
    {
        "problem_name": "LFU Cache",
        "problem_link": "https://leetcode.com/problems/lfu-cache/",
        "solution_link": "https://leetcode.com/problems/lfu-cache/discuss/94516/Java-10-lines-O(1)-put-get-with-Explanation",
        "patterns": ["Hash Map", "Design"],
        "difficulty": "Hard",
        "difficulty_rating": 198,
        "companies": [
            { "name": "Amazon", "frequency": 12 }
        ]
    },
    {
        "problem_name": "Design Twitter",
        "problem_link": "https://leetcode.com/problems/design-twitter/",
        "solution_link": "https://leetcode.com/problems/design-twitter/discuss/82807/Java-AC-Solution-with-Explanation",
        "patterns": ["Design", "Heap", "Hash Map"],
        "difficulty": "Medium",
        "difficulty_rating": 199,
        "companies": [
            { "name": "Amazon", "frequency": 13 }
        ]
    },
    {
        "problem_name": "Design Snake Game",
        "problem_link": "https://leetcode.com/problems/design-snake-game/",
        "solution_link": "https://leetcode.com/problems/design-snake-game/discuss/82769/Java-AC-Solution-with-Explanation",
        "patterns": ["Design", "Queue", "Hash Set"],
        "difficulty": "Medium",
        "difficulty_rating": 200,
        "companies": [
            { "name": "Amazon", "frequency": 8 }
        ]
    }
].filter(problem => {
    if (seen.has(problem.problem_link)) return false;
    seen.add(problem.problem_link);
    return true;
});