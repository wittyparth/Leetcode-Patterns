const treeTraversalPattern = {
    title: "Tree Traversal (DFS/BFS)",
    shortDescription: "Techniques for visiting every node in a tree data structure",
    analogy: "Like exploring a family tree - DFS goes deep into one branch before backtracking, while BFS explores all siblings before moving to the next generation.",
    description: "Tree Traversal refers to the process of visiting each node in a tree data structure exactly once. The two main approaches are Depth-First Search (DFS), which explores as far as possible along each branch before backtracking, and Breadth-First Search (BFS), which explores all nodes at the present depth before moving on to nodes at the next depth level. Both approaches are essential for solving various tree-related problems efficiently.",
    proTip: "Choose DFS when searching for nodes far from the root or when memory is a concern. Choose BFS for finding shortest paths or nodes close to the root.",
    whenToUse: [
        "When you need to traverse or search through a tree data structure",
        "When determining properties of tree structures (e.g., height, diameter, balanced)",
        "When looking for specific paths or node relationships",
        "When validating tree structures or properties",
        "When serializing or deserializing trees",
        "When transforming trees into other data structures"
    ],
    example: {
        title: "Basic DFS and BFS Implementations",
        description: "Implementation of both Depth-First Search and Breadth-First Search for a binary tree.",
        code: `// DFS using Pre-order traversal (Root, Left, Right)
void dfs(TreeNode* root) {
  if (!root) return;
  
  // Process current node
  cout << root->val << " ";
  
  // Recursively traverse left and right subtrees
  dfs(root->left);
  dfs(root->right);
}

// BFS using a queue
void bfs(TreeNode* root) {
  if (!root) return;
  
  queue<TreeNode*> q;
  q.push(root);
  
  while (!q.empty()) {
    TreeNode* node = q.front();
    q.pop();
    
    // Process current node
    cout << node->val << " ";
    
    // Enqueue left and right children if they exist
    if (node->left) q.push(node->left);
    if (node->right) q.push(node->right);
  }
}`
    },
    performance: [
        "Time Complexity: O(n) for both DFS and BFS, where n is the number of nodes",
        "Space Complexity: O(h) for DFS where h is the height of the tree (worst case O(n) for skewed trees)",
        "Space Complexity: O(w) for BFS where w is the maximum width of the tree (worst case O(n/2) ≈ O(n))",
        "DFS is typically more memory efficient for deep trees",
        "BFS is more efficient for finding shortest paths"
    ],
    variations: [
        {
            name: "DFS Variations",
            explanation: "Three common ways to perform depth-first traversal on a binary tree.",
            code: `// Pre-order traversal (Root, Left, Right)
void preOrder(TreeNode* root) {
  if (!root) return;
  cout << root->val << " ";  // Process root first
  preOrder(root->left);      // Then traverse left
  preOrder(root->right);     // Then traverse right
}

// In-order traversal (Left, Root, Right)
void inOrder(TreeNode* root) {
  if (!root) return;
  inOrder(root->left);       // Traverse left first
  cout << root->val << " ";  // Then process root
  inOrder(root->right);      // Then traverse right
}

// Post-order traversal (Left, Right, Root)
void postOrder(TreeNode* root) {
  if (!root) return;
  postOrder(root->left);     // Traverse left first
  postOrder(root->right);    // Then traverse right
  cout << root->val << " ";  // Then process root
}`,
            tips: [
                "In-order traversal of a BST gives nodes in sorted order",
                "Post-order traversal is useful for deleting nodes or evaluating expressions",
                "Pre-order traversal is useful for creating a copy of a tree or prefix expression trees",
                "Any recursive DFS can be converted to iterative using a stack"
            ]
        },
        {
            name: "Level Order Traversal (BFS)",
            explanation: "Process nodes level by level, from left to right.",
            code: `vector<vector<int>> levelOrder(TreeNode* root) {
  vector<vector<int>> result;
  if (!root) return result;
  
  queue<TreeNode*> q;
  q.push(root);
  
  while (!q.empty()) {
    int levelSize = q.size();
    vector<int> currentLevel;
    
    for (int i = 0; i < levelSize; i++) {
      TreeNode* node = q.front();
      q.pop();
      
      currentLevel.push_back(node->val);
      
      if (node->left) q.push(node->left);
      if (node->right) q.push(node->right);
    }
    
    result.push_back(currentLevel);
  }
  
  return result;
}`,
            tips: [
                "Great for level-by-level processing and visualizing tree structure",
                "Can be modified to traverse in zigzag pattern or reverse level order",
                "Useful for finding the minimum depth of a tree",
                "Can be used to find closest nodes to the root"
            ]
        }
    ],
    tipsAndTricks: [
        "Convert recursive DFS to iterative using a stack when stack overflow is a concern",
        "Use BFS for shortest path problems or finding nodes closest to root",
        "For space efficiency in wide trees, use DFS instead of BFS",
        "Level order traversal can be modified to include level information",
        "Consider using a visited set when traversing graphs to avoid cycles",
        "Pre-compute results during traversal when possible, rather than making multiple passes",
        "Use in-order traversal when you need elements in sorted order from a BST"
    ],
    pitfalls: [
        "Forgetting to check for null nodes, leading to null pointer exceptions",
        "Not handling empty trees as a base case",
        "Using recursive DFS on very deep trees can cause stack overflow",
        "Using BFS on very wide trees can consume excessive memory",
        "Not tracking visited nodes when traversing graphs (causing infinite loops)",
        "Incorrect implementation of iterative traversals due to improper queue/stack usage",
        "Modifying the tree structure during traversal without proper consideration"
    ],
    practiceProblems: [
        {
            name: "Binary Tree Inorder Traversal",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/binary-tree-inorder-traversal/"
        },
        {
            name: "Binary Tree Level Order Traversal",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
        },
        {
            name: "Validate Binary Search Tree",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/validate-binary-search-tree/"
        },
        {
            name: "Maximum Depth of Binary Tree",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
        },
        {
            name: "Binary Tree Zigzag Level Order Traversal",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
        },
        {
            name: "Symmetric Tree",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/symmetric-tree/"
        },
        {
            name: "Binary Tree Right Side View",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/binary-tree-right-side-view/"
        },
        {
            name: "Serialize and Deserialize Binary Tree",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
        }
    ]
};

const topKElementsPattern = {
    title: "Top K Elements",
    shortDescription: "Finding the K largest or smallest elements using heap data structures",
    analogy: "Like a competition where only the top K performers are recognized - you don't need to fully sort all competitors, just identify the elite few.",
    description: "The Top K Elements pattern is used to solve problems that require finding the k largest or smallest elements in a collection. Instead of sorting the entire dataset (which would be O(n log n)), we can use a heap data structure to efficiently track the top K elements in O(n log k) time. This approach is particularly useful for large datasets or streams where we don't need to sort all elements.",
    proTip: "Use a min-heap for top K largest elements and a max-heap for top K smallest elements, keeping the heap size at K for optimal performance.",
    whenToUse: [
        "When you need to find the K largest/smallest elements in an array",
        "When processing data streams where you need to maintain top K elements",
        "When implementing algorithms like K closest points or K most frequent elements",
        "When you need to find the Kth largest/smallest element in an array",
        "When sorting the entire collection is unnecessary or too expensive",
        "When the dataset is very large or potentially infinite (streaming data)"
    ],
    example: {
        title: "Find K Largest Elements",
        description: "Finding the K largest elements in an array using a min-heap.",
        code: `vector<int> findKLargestElements(vector<int>& nums, int k) {
  // Use min heap to maintain K largest elements
  priority_queue<int, vector<int>, greater<int>> minHeap;
  
  // Process each element
  for (int num : nums) {
    minHeap.push(num);
    
    // If heap size exceeds k, remove the smallest element
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }
  
  // Extract the K largest elements
  vector<int> result;
  while (!minHeap.empty()) {
    result.push_back(minHeap.top());
    minHeap.pop();
  }
  
  return result;
}`
    },
    performance: [
        "Time Complexity: O(n log k) where n is the number of elements and k is the heap size",
        "Space Complexity: O(k) for storing K elements in the heap",
        "Much more efficient than sorting (O(n log n)) when k << n",
        "Heap operations (insertion and deletion) take O(log k) time",
        "Suitable for both static arrays and data streams"
    ],
    variations: [
        {
            name: "Find Kth Largest Element",
            explanation: "Finding the Kth largest element in an array using a min-heap.",
            code: `int findKthLargest(vector<int>& nums, int k) {
  // Use min heap to track K largest elements
  priority_queue<int, vector<int>, greater<int>> minHeap;
  
  // Process each element
  for (int num : nums) {
    minHeap.push(num);
    
    // If heap size exceeds k, remove the smallest element
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }
  
  // The top of the min heap is the Kth largest element
  return minHeap.top();
}`,
            tips: [
                "The min-heap will always contain the K largest elements seen so far",
                "The smallest of the K largest elements (i.e., the Kth largest) will be at the top of the min-heap",
                "Can be modified to find the Kth smallest by using a max-heap instead",
                "Alternative approach: use QuickSelect algorithm for O(n) average time complexity"
            ]
        },
        {
            name: "K Most Frequent Elements",
            explanation: "Finding the K most frequent elements in an array using a heap.",
            code: `vector<int> topKFrequent(vector<int>& nums, int k) {
  // Count frequencies
  unordered_map<int, int> frequencyMap;
  for (int num : nums) {
    frequencyMap[num]++;
  }
  
  // Use min heap to track K most frequent elements
  // Store pairs of {frequency, number}
  priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
  
  // Process each element
  for (auto& entry : frequencyMap) {
    int num = entry.first;
    int freq = entry.second;
    
    minHeap.push({freq, num});
    
    // If heap size exceeds k, remove the least frequent element
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }
  
  // Extract the K most frequent elements
  vector<int> result;
  while (!minHeap.empty()) {
    result.push_back(minHeap.top().second);
    minHeap.pop();
  }
  
  return result;
}`,
            tips: [
                "Use a hash map to count frequencies first",
                "Then use a min-heap to track the K most frequent elements",
                "The heap stores {frequency, element} pairs ordered by frequency",
                "This approach works well for any collection where frequency matters"
            ]
        }
    ],
    tipsAndTricks: [
        "For finding top K largest elements, use a min-heap of size K to efficiently track them",
        "For finding top K smallest elements, use a max-heap of size K instead",
        "Always keep the heap size at K to maintain O(log k) operations",
        "Consider using built-in priority queue implementations for convenience",
        "When elements have multiple attributes, carefully choose the comparison function",
        "For streaming data, the heap approach is particularly efficient as it processes one element at a time",
        "QuickSelect algorithm can be used as an alternative for finding the Kth element with O(n) average time complexity"
    ],
    pitfalls: [
        "Using the wrong type of heap (min vs max) for the problem at hand",
        "Not maintaining the heap size at K, which defeats the optimization purpose",
        "Incorrectly defining custom comparators for complex objects",
        "Forgetting to handle edge cases like empty arrays or k = 0",
        "Assuming the output will be sorted, which isn't guaranteed by heap-based solutions",
        "Overlooking potential integer overflows in frequency counting",
        "Using this pattern when a simpler approach would suffice for small datasets"
    ],
    practiceProblems: [
        {
            name: "Kth Largest Element in an Array",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/kth-largest-element-in-an-array/"
        },
        {
            name: "Top K Frequent Elements",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/top-k-frequent-elements/"
        },
        {
            name: "K Closest Points to Origin",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/k-closest-points-to-origin/"
        },
        {
            name: "Sort Characters By Frequency",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/sort-characters-by-frequency/"
        },
        {
            name: "Find K Pairs with Smallest Sums",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"
        },
        {
            name: "Top K Frequent Words",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/top-k-frequent-words/"
        },
        {
            name: "Kth Smallest Element in a Sorted Matrix",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/"
        },
        {
            name: "Find Median from Data Stream",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/find-median-from-data-stream/"
        }
    ]
};

const prefixSumPattern = {
    title: "Prefix Sum",
    shortDescription: "An efficient technique for calculating cumulative sums of array elements",
    analogy: "Like keeping a running total while counting inventory items, so you don't have to recount from the beginning for each section.",
    description: "The Prefix Sum pattern is a preprocessing technique where we create an auxiliary array that stores the cumulative sum of elements up to each index of the original array. This allows us to calculate the sum of any subarray in O(1) time complexity after the O(n) preprocessing, making it highly efficient for multiple range sum queries or problems involving subarray sums.",
    proTip: "When you need to repeatedly compute sums of subarrays, prefix sum can transform multiple O(n) operations into a single O(n) preprocessing followed by O(1) lookups.",
    whenToUse: [
        "When you need to calculate the sum of a range of elements quickly and repeatedly",
        "When solving problems involving subarray sums or products",
        "When computing running statistics like average or variance over array ranges",
        "For problems asking about specific ranges that satisfy a sum condition"
    ],
    example: {
        title: "Basic Prefix Sum Implementation",
        description: "Building a prefix sum array and using it to compute range sums efficiently.",
        code: `vector<int> buildPrefixSum(vector<int>& nums) {
  int n = nums.size();
  vector<int> prefixSum(n + 1, 0);
  
  for (int i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  
  return prefixSum;
}

// Get sum of elements from index start to end (inclusive)
int rangeSum(vector<int>& prefixSum, int start, int end) {
  return prefixSum[end + 1] - prefixSum[start];
}`
    },
    performance: [
        "Preprocessing Time Complexity: O(n)",
        "Query Time Complexity: O(1) for range sum queries",
        "Space Complexity: O(n) for storing the prefix sum array",
        "Extremely efficient for multiple queries on the same array"
    ],
    variations: [
        {
            name: "2D Prefix Sum (Integral Image)",
            explanation: "Extension of prefix sum to 2D matrices for efficient submatrix sum calculations.",
            code: `vector<vector<int>> build2DPrefixSum(vector<vector<int>>& matrix) {
  if (matrix.empty()) return {};
  
  int rows = matrix.size();
  int cols = matrix[0].size();
  
  vector<vector<int>> prefixSum(rows + 1, vector<int>(cols + 1, 0));
  
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
      prefixSum[i + 1][j + 1] = prefixSum[i + 1][j] + prefixSum[i][j + 1] 
                              - prefixSum[i][j] + matrix[i][j];
    }
  }
  
  return prefixSum;
}

// Get sum of submatrix from (row1,col1) to (row2,col2), inclusive
int getSubmatrixSum(vector<vector<int>>& prefixSum, int row1, int col1, int row2, int col2) {
  return prefixSum[row2 + 1][col2 + 1] - prefixSum[row1][col2 + 1] 
         - prefixSum[row2 + 1][col1] + prefixSum[row1][col1];
}`,
            tips: [
                "Uses the inclusion-exclusion principle to compute submatrix sums",
                "Very useful for image processing and computer vision algorithms",
                "Can be used for dynamic programming optimizations involving 2D arrays"
            ]
        },
        {
            name: "Prefix XOR",
            explanation: "Using the XOR operation instead of addition to create prefix arrays.",
            code: `vector<int> buildPrefixXOR(vector<int>& nums) {
  int n = nums.size();
  vector<int> prefixXOR(n + 1, 0);
  
  for (int i = 0; i < n; i++) {
    prefixXOR[i + 1] = prefixXOR[i] ^ nums[i];
  }
  
  return prefixXOR;
}

// Get XOR of elements from index start to end (inclusive)
int rangeXOR(vector<int>& prefixXOR, int start, int end) {
  return prefixXOR[end + 1] ^ prefixXOR[start];
}`,
            tips: [
                "Useful for problems involving XOR of ranges",
                "Used in problems asking for subarrays with specific XOR values",
                "Takes advantage of the property: if a⊕b=c, then a⊕c=b"
            ]
        }
    ],
    tipsAndTricks: [
        "Always consider using 1-indexed prefix arrays (with a 0 at index 0) to simplify range sum calculations",
        "For problems asking about subarrays with sum equal to k, use a hash map with prefix sums",
        "Prefix sums can be combined with modular arithmetic for problems involving divisibility",
        "Watch out for integer overflow when dealing with large arrays or large values",
        "Consider using prefix sums when the problem involves computing sums over sliding windows",
        "Prefix sums can be generalized to other operations that have inverses (like XOR)"
    ],
    pitfalls: [
        "Off-by-one errors in range calculations (remember prefix sum is 1-indexed)",
        "Not handling edge cases like empty arrays properly",
        "Forgetting that the range sum query is prefixSum[end+1] - prefixSum[start], not just the difference of values",
        "With 2D prefix sums, incorrectly applying the inclusion-exclusion principle",
        "Not considering integer overflow for large sum values",
        "Using prefix sums when a sliding window approach might be more appropriate"
    ],
    practiceProblems: [
        {
            name: "Range Sum Query - Immutable",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/range-sum-query-immutable/"
        },
        {
            name: "Subarray Sum Equals K",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/subarray-sum-equals-k/"
        },
        {
            name: "Continuous Subarray Sum",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/continuous-subarray-sum/"
        },
        {
            name: "Range Sum Query 2D - Immutable",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/range-sum-query-2d-immutable/"
        },
        {
            name: "Maximum Size Subarray Sum Equals k",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/"
        },
        {
            name: "Product of Array Except Self",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/product-of-array-except-self/"
        },
        {
            name: "Number of Submatrices That Sum to Target",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/"
        },
        {
            name: "Count Subarrays With Fixed Bounds",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/count-subarrays-with-fixed-bounds/"
        }
    ]
};

const fastSlowPattern = {
    title: "Fast & Slow Pointers Pattern",
    analogy: `Think of two runners on a circular track, one running twice as fast as the other. If there's a loop in the track, they will eventually meet. This pattern uses two pointers moving at different speeds through a sequence to identify cycles or find specific elements.`,
    description: `The Fast & Slow Pointers pattern (also known as Floyd's Cycle-Finding Algorithm or the "tortoise and hare" algorithm) is a pointer strategy where two pointers move through the data structure at different speeds. This approach is particularly useful for detecting cycles in linked lists, finding middle elements, or determining if a linked list has a cycle.`,
    whenToUse: [
        "Detecting cycles in linked lists",
        "Finding the middle node of a linked list in one pass",
        "Determining if a linked list has a cycle",
        "Finding the start of a cycle in a linked list",
        "Determining the length of a cycle"
    ],
    example: {
        title: "Detect Cycle in a Linked List",
        description: "We can use fast & slow pointers to determine if a linked list has a cycle in O(n) time and O(1) space.",
        code: `bool hasCycle(ListNode *head) {
if (!head || !head->next) return false;

ListNode *slow = head;
ListNode *fast = head;

// Fast pointer moves twice as fast as slow pointer
while (fast && fast->next) {
    slow = slow->next;        // Move slow pointer by 1
    fast = fast->next->next;  // Move fast pointer by 2
    
    // If there's a cycle, the pointers will eventually meet
    if (slow == fast) return true;
}

// If we reach here, fast pointer reached the end, so no cycle
return false;
}`
    },
    variations: [
        {
            name: "Finding Middle Element",
            explanation: "By the time the fast pointer reaches the end, the slow pointer will be at the middle.",
            code: `ListNode* middleNode(ListNode* head) {
ListNode *slow = head, *fast = head;

while (fast && fast->next) {
    slow = slow->next;
    fast = fast->next->next;
}

// Slow pointer is at the middle
return slow;
}`,
            tips: [
                "For even-length lists, this returns the second middle node",
                "To get the first middle node, check for fast->next->next"
            ]
        },
        {
            name: "Finding Cycle Start",
            explanation: "After detection, reset one pointer to head and advance both by one until they meet again.",
            code: `ListNode *detectCycle(ListNode *head) {
if (!head || !head->next) return nullptr;

ListNode *slow = head, *fast = head;
bool hasCycle = false;

// Phase 1: Determine if there's a cycle
while (fast && fast->next) {
    slow = slow->next;
    fast = fast->next->next;
    if (slow == fast) {
        hasCycle = true;
        break;
    }
}

// No cycle found
if (!hasCycle) return nullptr;

// Phase 2: Find the start of the cycle
slow = head;
while (slow != fast) {
    slow = slow->next;
    fast = fast->next;
}

return slow;  // This is the start of the cycle
}`,
            tips: [
                "The math behind this solution involves the concept of cycle lengths",
                "After finding the meeting point, the distance from head to cycle start equals the distance from meeting point to cycle start"
            ]
        }
    ],
    performance: [
        "O(n) time complexity - we only need to traverse the data structure once",
        "O(1) space complexity - only two pointers are used regardless of input size",
        "Eliminates the need for hash tables to track visited nodes"
    ],
    tipsAndTricks: [
        "Always check for null pointers before accessing next nodes",
        "For linked list problems, initialize both pointers at the head node",
        "For cycle detection, ensure that the fast pointer moves exactly twice as fast as the slow pointer",
        "When finding the middle element, the slow pointer will be at the middle when the fast pointer reaches the end",
        "If the list length might be even, decide whether you want the first or second middle node"
    ],
    pitfalls: [
        "Forgetting to check if pointers or next pointers are null before accessing them",
        "Initializing fast and slow pointers at different positions inappropriately",
        "Moving pointers inconsistently (fast pointer must move exactly twice as fast)",
        "Not handling the case where the cycle might start at the head node",
        "Misunderstanding which middle node is returned for even-length lists"
    ],
    practiceProblems: [
        {
            name: "Linked List Cycle",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/linked-list-cycle/"
        },
        {
            name: "Linked List Cycle II",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/linked-list-cycle-ii/"
        },
        {
            name: "Middle of the Linked List",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/middle-of-the-linked-list/"
        },
        {
            name: "Happy Number",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/happy-number/"
        },
        {
            name: "Find the Duplicate Number",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/find-the-duplicate-number/"
        },
        {
            name: "Palindrome Linked List",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/palindrome-linked-list/"
        }
    ]
};

const dynamicProgrammingPattern = {
    title: "Dynamic Programming",
    shortDescription: "Solving complex problems by breaking them down into simpler overlapping subproblems",
    analogy: "Like climbing a staircase while making notes about each step - instead of recalculating the number of ways to reach step 5 multiple times, you calculate it once and refer to your notes when needed.",
    description: "Dynamic Programming is an algorithmic technique that solves a complex problem by breaking it down into simpler subproblems and storing the results of these subproblems to avoid redundant calculations. It applies to problems with overlapping subproblems and optimal substructure properties, meaning the optimal solution can be constructed from optimal solutions of its subproblems. DP is typically implemented using memoization (top-down) or tabulation (bottom-up) approaches.",
    proTip: "Identify overlapping subproblems and optimal substructure first, then decide between tabulation (iterative) or memoization (recursive) based on the problem's constraints.",
    whenToUse: [
        "When a problem can be broken down into overlapping subproblems",
        "When the problem has optimal substructure (optimal solution contains optimal solutions to subproblems)",
        "When brute force or recursive solutions are too slow due to repeated calculations",
        "Common applications: optimization problems, counting problems, sequence alignment problems",
        "When you need to find the optimal value (maximum/minimum) among multiple possibilities",
        "When solving problems related to sequences, grids, or trees with specific constraints"
    ],
    example: {
        title: "Fibonacci Sequence Using DP",
        description: "Computing the nth Fibonacci number using dynamic programming to avoid exponential time complexity.",
        code: `// Top-down approach with memoization
int fibMemoization(int n, vector<int>& memo) {
  if (n <= 1) return n;
  
  // If already calculated, return stored result
  if (memo[n] != -1) return memo[n];
  
  // Calculate and store result
  memo[n] = fibMemoization(n-1, memo) + fibMemoization(n-2, memo);
  return memo[n];
}

// Wrapper function
int fib(int n) {
  vector<int> memo(n+1, -1);
  return fibMemoization(n, memo);
}

// Bottom-up approach with tabulation
int fibTabulation(int n) {
  if (n <= 1) return n;
  
  vector<int> dp(n+1);
  dp[0] = 0;
  dp[1] = 1;
  
  for (int i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  
  return dp[n];
}`
    },
    performance: [
        "Time Complexity: Typically reduces from exponential O(2^n) to polynomial (often O(n^2) or O(n))",
        "Space Complexity: Usually O(n) or O(n^2) depending on the state storage requirements",
        "Memoization provides better space complexity for sparse state spaces",
        "Tabulation often has better constant factors for time complexity",
        "Eliminates redundant calculations, drastically improving efficiency for problems with overlapping subproblems"
    ],
    variations: [
        {
            name: "1D Dynamic Programming",
            explanation: "Problems where the state depends on one parameter.",
            code: `// Example: Climbing Stairs Problem
// How many ways to climb n stairs if you can take 1 or 2 steps at a time
int climbStairs(int n) {
  if (n <= 2) return n;
  
  vector<int> dp(n+1);
  dp[1] = 1;
  dp[2] = 2;
  
  for (int i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  
  return dp[n];
}`,
            tips: [
                "Often useful for problems involving sequences or linear arrangements",
                "State typically represents the result for a prefix of the input",
                "Can often be space-optimized to use only a few variables instead of an array",
                "Common problems: climbing stairs, house robber, maximum subarray sum"
            ]
        },
        {
            name: "2D Dynamic Programming",
            explanation: "Problems where the state depends on two parameters.",
            code: `// Example: Longest Common Subsequence
int longestCommonSubsequence(string text1, string text2) {
  int m = text1.length(), n = text2.length();
  vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
  
  for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
      if (text1[i-1] == text2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  
  return dp[m][n];
}`,
            tips: [
                "Used for problems involving grids, matrices, or two sequences",
                "State typically represents result for prefixes of two inputs",
                "Can sometimes be optimized to use O(min(m,n)) space using rolling arrays",
                "Common problems: edit distance, grid paths, knapsack problem"
            ]
        }
    ],
    tipsAndTricks: [
        "Start by defining the state clearly - what exactly does dp[i] or dp[i][j] represent?",
        "Establish the base cases for the smallest valid inputs",
        "Write out the recurrence relation that relates bigger problems to smaller ones",
        "Consider space optimization: many 1D DP problems can use constant space, 2D problems can often use O(n) space",
        "Solve small examples by hand first to understand the pattern",
        "For recursion with memoization, add a check for already computed results before calculation",
        "Consider state compression for problems with boolean states",
        "Watch out for off-by-one errors in array indexing and boundary conditions"
    ],
    pitfalls: [
        "Incorrectly defining the state or transition function",
        "Forgetting to handle base cases properly",
        "Not considering all possible transitions between states",
        "Unnecessarily using 2D arrays when 1D arrays would suffice",
        "Accessing array indices out of bounds (off-by-one errors)",
        "Initializing the DP array with incorrect values",
        "Confusing the direction of dependencies in the recurrence relation",
        "Not identifying overlapping subproblems correctly, leading to inefficient solutions"
    ],
    practiceProblems: [
        {
            name: "Climbing Stairs",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/climbing-stairs/"
        },
        {
            name: "House Robber",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/house-robber/"
        },
        {
            name: "Longest Increasing Subsequence",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/longest-increasing-subsequence/"
        },
        {
            name: "Coin Change",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/coin-change/"
        },
        {
            name: "Unique Paths",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/unique-paths/"
        },
        {
            name: "Edit Distance",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/edit-distance/"
        },
        {
            name: "Longest Common Subsequence",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/longest-common-subsequence/"
        },
        {
            name: "0/1 Knapsack Problem",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/partition-equal-subset-sum/"
        }
    ]
};

const twoPointersPattern = {
    title: "Two Pointers Pattern",
    analogy: `Imagine two detectives searching a long hallway from opposite ends, meeting in the middle to solve a mystery more quickly than searching every room individually. This is the essence of the Two Pointers technique: using two variables to traverse data structures in a coordinated, efficient manner.`,
    description: `The Two Pointers pattern is a fundamental algorithmic technique for solving array and string problems efficiently. It uses two indices (pointers) that traverse the data structure, either towards each other or in the same direction, to eliminate unnecessary work and reduce time complexity from O(n^2) to O(n) in many cases.`,
    whenToUse: [
        "Searching for pairs/triplets in sorted arrays (e.g., sum to target)",
        "Palindrome checking (comparing both ends of a string)",
        "Removing duplicates in-place from sorted arrays",
        "Reversing arrays or strings",
        "Cycle detection in linked lists (fast/slow pointer variant)"
    ],
    variations: [
        {
            name: "Opposite Direction Pointers",
            explanation: "Two pointers start at opposite ends and move towards each other, often used in sorted arrays for pair finding or palindrome checking.",
            code: `// C++: Two Sum II (sorted array)
vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0, right = numbers.size() - 1;
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) {
            return {left + 1, right + 1}; // 1-indexed
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return {};
}`,
            tips: [
                "Always initialize right = arr.size() - 1 (not arr.size()).",
                "Move left pointer right if you need a larger value, right pointer left if you need a smaller value.",
                "Check for out-of-bounds and ensure pointers always move to avoid infinite loops."
            ]
        },
        {
            name: "Same Direction Pointers",
            explanation: "Both pointers move forward, with the 'slow' pointer lagging behind. Useful for in-place modifications and removing duplicates.",
            code: `// C++: Remove Duplicates from Sorted Array
int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    int slow = 1;
    for (int fast = 1; fast < nums.size(); fast++) {
        if (nums[fast] != nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
}`,
            tips: [
                "Use slow pointer to mark the position for the next unique element.",
                "Fast pointer scans through the array.",
                "Result is often the value of the slow pointer after the loop."
            ]
        },
        {
            name: "Fast & Slow Pointers (Cycle Detection)",
            explanation: "Fast pointer moves two steps, slow pointer moves one. If they meet, a cycle exists. Used for cycle detection in linked lists.",
            code: `// C++: Detect Cycle in Linked List
bool hasCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
            tips: [
                "If fast pointer reaches null, there is no cycle.",
                "If slow and fast pointers meet, a cycle exists."
            ]
        }
    ],
    example: {
        title: "Valid Palindrome (LeetCode #125)",
        description: "Check if a string is a palindrome by comparing characters from both ends.",
        code: `// C++: Valid Palindrome
bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++;
        right--;
    }
    return true;
}`
    },
    tipsAndTricks: [
        "If the problem mentions a sorted array and pair/triplet finding, immediately consider Two Pointers.",
        "For in-place array modifications, use the same direction variant.",
        "For cycle detection in linked lists, use fast/slow pointers.",
        "Always check for edge cases: empty arrays, single elements, no solution.",
        "For problems with duplicates (like 3Sum), skip over duplicate values after processing a valid case."
    ],
    pitfalls: [
        "Forgetting to move pointers can cause infinite loops.",
        "Incorrect pointer initialization (e.g., right = arr.size() instead of arr.size() - 1).",
        "Not handling out-of-bounds access when moving pointers.",
        "Confusing which pointer to move based on the condition (sum too small: move left, sum too large: move right)."
    ],
    performance: [
        "Reduces time complexity from O(n^2) (brute force) to O(n) in most cases.",
        "Uses constant extra space (just two indices)."
    ],
    practiceProblems: [
        { name: "Two Sum II - Input Array Is Sorted", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
        { name: "3Sum", link: "https://leetcode.com/problems/3sum/" },
        { name: "4Sum", link: "https://leetcode.com/problems/4sum/" },
        { name: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
        { name: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/" },
        { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/" },
        { name: "Valid Palindrome II", link: "https://leetcode.com/problems/valid-palindrome-ii/" },
        { name: "Move Zeros", link: "https://leetcode.com/problems/move-zeroes/" },
        { name: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/" },
        { name: "Reverse String", link: "https://leetcode.com/problems/reverse-string/" },
        { name: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/" },
        { name: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/" }
    ]
};

const slidingWindowPattern = {
    title: "Sliding Window Pattern",
    analogy: `Imagine looking through a moving window as you walk along a wall. You see only what's inside the window at any moment, and as you slide it forward, the view changes. This is like focusing on a subarray or substring that "slides" through the data.`,
    description: `The Sliding Window pattern is ideal for problems involving contiguous subarrays or substrings. It allows you to efficiently compute values (like maximum, minimum, sum, or length) for all windows of a certain size or dynamic size, reducing brute-force O(n^2) solutions to O(n).`,
    whenToUse: [
        "Finding the longest/shortest subarray or substring with certain properties",
        "Calculating sum or average of every window of size k",
        "Problems with 'contiguous', 'substring', or 'subarray' in the description",
        "Finding anagrams or permutations in a string"
    ],
    variations: [
        {
            name: "Fixed Size Window",
            explanation: "The window has a constant width. As you add a new element on the right, you remove one from the left.",
            code: `// C++: Maximum Sum of Subarray of Size K
  int maxSum(vector<int>& nums, int k) {
      int max_sum = 0, window_sum = 0;
      for (int i = 0; i < nums.size(); i++) {
          window_sum += nums[i];
          if (i >= k - 1) {
              max_sum = max(max_sum, window_sum);
              window_sum -= nums[i - k + 1];
          }
      }
      return max_sum;
  }`,
            tips: [
                "Use two indices: window start and end.",
                "Update your result after the window reaches size k.",
                "Subtract the element leaving the window as you slide."
            ]
        },
        {
            name: "Dynamic Size Window",
            explanation: "The window expands and contracts based on conditions (often to maintain a constraint like unique characters).",
            code: `// C++: Longest Substring Without Repeating Characters
  int lengthOfLongestSubstring(string s) {
      unordered_set<char> chars;
      int left = 0, max_len = 0;
      for (int right = 0; right < s.size(); right++) {
          while (chars.count(s[right])) {
              chars.erase(s[left++]);
          }
          chars.insert(s[right]);
          max_len = max(max_len, right - left + 1);
      }
      return max_len;
  }`,
            tips: [
                "Expand the window by moving the right pointer.",
                "Shrink the window from the left when constraints are violated.",
                "Hash sets or maps are often used to track window contents."
            ]
        }
    ],
    example: {
        title: "Minimum Size Subarray Sum",
        description: "Find the minimal length of a contiguous subarray whose sum ≥ target.",
        code: `// C++: Minimum Size Subarray Sum
  int minSubArrayLen(int target, vector<int>& nums) {
      int left = 0, sum = 0, min_len = INT_MAX;
      for (int right = 0; right < nums.size(); right++) {
          sum += nums[right];
          while (sum >= target) {
              min_len = min(min_len, right - left + 1);
              sum -= nums[left++];
          }
      }
      return min_len == INT_MAX ? 0 : min_len;
  }`
    },
    tipsAndTricks: [
        "Sliding Window is often used with hash maps/sets for fast lookups.",
        "For 'at most k' problems, expand the window and shrink when exceeding k.",
        "For 'exactly k', use two 'at most k' windows and subtract."
    ],
    pitfalls: [
        "Forgetting to shrink the window when constraints are violated.",
        "Not updating the result at the correct time (usually after expanding or contracting the window).",
        "Off-by-one errors in window size calculation."
    ],
    performance: [
        "Reduces brute-force O(n^2) to O(n) in most cases.",
        "Uses O(1) or O(k) extra space, depending on the problem."
    ],
    practiceProblems: [
        { name: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { name: "Minimum Size Subarray Sum", link: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
        { name: "Maximum Average Subarray I", link: "https://leetcode.com/problems/maximum-average-subarray-i/" },
        { name: "Permutation in String", link: "https://leetcode.com/problems/permutation-in-string/" },
        { name: "Find All Anagrams in a String", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
        { name: "Longest Repeating Character Replacement", link: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
        { name: "Fruit Into Baskets", link: "https://leetcode.com/problems/fruit-into-baskets/" },
        { name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/" },
        { name: "Subarray Product Less Than K", link: "https://leetcode.com/problems/subarray-product-less-than-k/" },
        { name: "Max Consecutive Ones III", link: "https://leetcode.com/problems/max-consecutive-ones-iii/" }
    ]
};

const mergeIntervalsPattern = {
    title: "Merge Intervals Pattern",
    analogy: `Think of scheduling meetings in your calendar. When two meetings overlap in time, you merge them into one longer block. Similarly, the Merge Intervals pattern combines overlapping ranges into consolidated intervals.`,
    description: `The Merge Intervals pattern deals with overlapping intervals in arrays. It's used for scheduling problems, range queries, and time-based conflicts. The key insight is sorting intervals by start time, then merging overlapping ones.`,
    whenToUse: [
        "Problems involving time intervals, ranges, or scheduling",
        "Merging overlapping periods or ranges",
        "Finding conflicts in scheduling",
        "Optimizing range-based operations",
        "Insert/remove operations on interval lists"
    ],
    variations: [
        {
            name: "Basic Interval Merging",
            explanation: "Sort intervals by start time, then merge overlapping intervals.",
            code: `// C++: Merge Intervals
  vector<vector<int>> merge(vector<vector<int>>& intervals) {
      if (intervals.empty()) return {};
      sort(intervals.begin(), intervals.end());
      
      vector<vector<int>> result;
      result.push_back(intervals[0]);
      
      for (int i = 1; i < intervals.size(); i++) {
          if (intervals[i][0] <= result.back()[1]) {
              // Overlapping intervals, merge them
              result.back()[1] = max(result.back()[1], intervals[i][1]);
          } else {
              // Non-overlapping interval
              result.push_back(intervals[i]);
          }
      }
      return result;
  }`,
            tips: [
                "Always sort intervals by start time first.",
                "Two intervals [a,b] and [c,d] overlap if c <= b.",
                "When merging, the end time is max(b, d)."
            ]
        },
        {
            name: "Insert Interval",
            explanation: "Insert a new interval into a sorted list of non-overlapping intervals.",
            code: `// C++: Insert Interval
  vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
      vector<vector<int>> result;
      int i = 0;
      
      // Add all intervals that end before newInterval starts
      while (i < intervals.size() && intervals[i][1] < newInterval[0]) {
          result.push_back(intervals[i++]);
      }
      
      // Merge overlapping intervals with newInterval
      while (i < intervals.size() && intervals[i][0] <= newInterval[1]) {
          newInterval[0] = min(newInterval[0], intervals[i][0]);
          newInterval[1] = max(newInterval[1], intervals[i][1]);
          i++;
      }
      result.push_back(newInterval);
      
      // Add remaining intervals
      while (i < intervals.size()) {
          result.push_back(intervals[i++]);
      }
      
      return result;
  }`,
            tips: [
                "Process intervals in three phases: before, overlapping, after.",
                "Update the new interval's bounds when merging.",
                "Handle edge cases where new interval doesn't overlap with any existing interval."
            ]
        },
        {
            name: "Meeting Rooms",
            explanation: "Determine if all meetings can be attended or find minimum meeting rooms needed.",
            code: `// C++: Meeting Rooms II - Minimum meeting rooms needed
  int minMeetingRooms(vector<vector<int>>& intervals) {
      vector<int> starts, ends;
      for (auto& interval : intervals) {
          starts.push_back(interval[0]);
          ends.push_back(interval[1]);
      }
      
      sort(starts.begin(), starts.end());
      sort(ends.begin(), ends.end());
      
      int rooms = 0, maxRooms = 0;
      int startPtr = 0, endPtr = 0;
      
      while (startPtr < starts.size()) {
          if (starts[startPtr] < ends[endPtr]) {
              rooms++;
              startPtr++;
          } else {
              rooms--;
              endPtr++;
          }
          maxRooms = max(maxRooms, rooms);
      }
      
      return maxRooms;
  }`,
            tips: [
                "Separate start and end times, then sort them.",
                "Use two pointers to simulate timeline events.",
                "Track current active meetings and maximum rooms needed."
            ]
        }
    ],
    example: {
        title: "Non-overlapping Intervals",
        description: "Find minimum number of intervals to remove to make rest non-overlapping.",
        code: `// C++: Non-overlapping Intervals
  int eraseOverlapIntervals(vector<vector<int>>& intervals) {
      if (intervals.empty()) return 0;
      
      sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
          return a[1] < b[1];  // Sort by end time
      });
      
      int count = 0;
      int lastEnd = intervals[0][1];
      
      for (int i = 1; i < intervals.size(); i++) {
          if (intervals[i][0] < lastEnd) {
              count++;  // Remove current interval
          } else {
              lastEnd = intervals[i][1];
          }
      }
      
      return count;
  }`
    },
    tipsAndTricks: [
        "Sort by start time for merging, by end time for optimal removal.",
        "Use greedy approach for optimization problems.",
        "Consider both inclusive and exclusive interval definitions.",
        "Timeline simulation with events can solve complex scheduling problems."
    ],
    pitfalls: [
        "Forgetting to sort intervals before processing.",
        "Incorrect overlap detection logic.",
        "Not handling edge cases like empty intervals or single interval.",
        "Confusing inclusive vs exclusive interval boundaries."
    ],
    performance: [
        "Time complexity: O(n log n) due to sorting.",
        "Space complexity: O(1) to O(n) depending on implementation."
    ],
    practiceProblems: [
        { name: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/" },
        { name: "Insert Interval", link: "https://leetcode.com/problems/insert-interval/" },
        { name: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/" },
        { name: "Meeting Rooms", link: "https://leetcode.com/problems/meeting-rooms/" },
        { name: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/" },
        { name: "Minimum Number of Arrows to Burst Balloons", link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" },
        { name: "Partition Labels", link: "https://leetcode.com/problems/partition-labels/" },
        { name: "Interval List Intersections", link: "https://leetcode.com/problems/interval-list-intersections/" },
        { name: "Car Pooling", link: "https://leetcode.com/problems/car-pooling/" },
        { name: "My Calendar I", link: "https://leetcode.com/problems/my-calendar-i/" }
    ]
};

const monotonicStackPattern = {
    title: "Monotonic Stack Pattern",
    analogy: `Imagine you're organizing a stack of books by height, always keeping them in ascending order. When a shorter book arrives, you remove taller books from the top until you can place the new book while maintaining order. This is how monotonic stacks work.`,
    description: `A Monotonic Stack maintains elements in a specific order (increasing or decreasing). It's used to find the next/previous greater or smaller element efficiently. Elements are pushed and popped to maintain the monotonic property.`,
    whenToUse: [
        "Finding next greater/smaller element for each array element",
        "Calculating areas in histograms or matrices",
        "Temperature/stock span problems",
        "Parentheses and bracket matching with constraints"
    ],
    variations: [
        {
            name: "Next Greater Element",
            explanation: "Use decreasing monotonic stack to find next greater element for each element.",
            code: `// C++: Next Greater Element I
  vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
      unordered_map<int, int> nextGreater;
      stack<int> stk;
      
      // Process nums2 to find next greater for each element
      for (int num : nums2) {
          while (!stk.empty() && stk.top() < num) {
              nextGreater[stk.top()] = num;
              stk.pop();
          }
          stk.push(num);
      }
      
      // Map results for nums1
      vector<int> result;
      for (int num : nums1) {
          result.push_back(nextGreater.count(num) ? nextGreater[num] : -1);
      }
      return result;
  }`,
            tips: [
                "Use decreasing stack for next greater element.",
                "Use increasing stack for next smaller element.",
                "Pop elements when monotonic property is violated."
            ]
        },
        {
            name: "Histogram Problems",
            explanation: "Find largest rectangle in histogram using monotonic stack.",
            code: `// C++: Largest Rectangle in Histogram
  int largestRectangleArea(vector<int>& heights) {
      stack<int> stk;
      int maxArea = 0;
      heights.push_back(0);  // Add sentinel to process remaining elements
      
      for (int i = 0; i < heights.size(); i++) {
          while (!stk.empty() && heights[i] < heights[stk.top()]) {
              int h = heights[stk.top()];
              stk.pop();
              int w = stk.empty() ? i : i - stk.top() - 1;
              maxArea = max(maxArea, h * w);
          }
          stk.push(i);
      }
      
      return maxArea;
  }`,
            tips: [
                "Store indices in stack, not values.",
                "Add sentinel value to handle remaining elements.",
                "Width calculation: current_index - previous_index - 1."
            ]
        },
        {
            name: "Daily Temperatures",
            explanation: "Find how many days until a warmer temperature.",
            code: `// C++: Daily Temperatures
  vector<int> dailyTemperatures(vector<int>& temperatures) {
      vector<int> result(temperatures.size(), 0);
      stack<int> stk;  // Store indices
      
      for (int i = 0; i < temperatures.size(); i++) {
          while (!stk.empty() && temperatures[i] > temperatures[stk.top()]) {
              int idx = stk.top();
              stk.pop();
              result[idx] = i - idx;
          }
          stk.push(i);
      }
      
      return result;
  }`,
            tips: [
                "Store indices to calculate distances.",
                "Result is initialized to 0 for elements with no answer.",
                "Process from left to right for next greater problems."
            ]
        }
    ],
    example: {
        title: "Trapping Rain Water",
        description: "Calculate trapped rainwater using monotonic stack approach.",
        code: `// C++: Trapping Rain Water
  int trap(vector<int>& height) {
      stack<int> stk;
      int water = 0;
      
      for (int i = 0; i < height.size(); i++) {
          while (!stk.empty() && height[i] > height[stk.top()]) {
              int bottom = stk.top();
              stk.pop();
              if (stk.empty()) break;
              
              int distance = i - stk.top() - 1;
              int bounded_height = min(height[i], height[stk.top()]) - height[bottom];
              water += distance * bounded_height;
          }
          stk.push(i);
      }
      
      return water;
  }`
    },
    tipsAndTricks: [
        "Choose stack type based on problem: increasing for next smaller, decreasing for next greater.",
        "Store indices when you need to calculate distances or positions.",
        "Add sentinel values to handle remaining stack elements.",
        "Consider circular arrays by processing array twice."
    ],
    pitfalls: [
        "Using wrong monotonic order (increasing vs decreasing).",
        "Storing values instead of indices when positions matter.",
        "Forgetting to handle remaining elements in stack.",
        "Off-by-one errors in distance calculations."
    ],
    performance: [
        "Time complexity: O(n) - each element pushed and popped at most once.",
        "Space complexity: O(n) for the stack."
    ],
    practiceProblems: [
        { name: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/" },
        { name: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/" },
        { name: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
        { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/" },
        { name: "Next Greater Element II", link: "https://leetcode.com/problems/next-greater-element-ii/" },
        { name: "Remove Duplicate Letters", link: "https://leetcode.com/problems/remove-duplicate-letters/" },
        { name: "132 Pattern", link: "https://leetcode.com/problems/132-pattern/" },
        { name: "Sum of Subarray Minimums", link: "https://leetcode.com/problems/sum-of-subarray-minimums/" },
        { name: "Online Stock Span", link: "https://leetcode.com/problems/online-stock-span/" },
        { name: "Maximal Rectangle", link: "https://leetcode.com/problems/maximal-rectangle/" }
    ]
};


const linkedListReversalPattern = {
    title: "Linked List In-place Reversal Pattern",
    analogy: `Imagine rearranging a chain of people holding hands. To reverse their order, you need to carefully change who each person is holding hands with, one person at a time, without breaking the chain completely.`,
    description: `In-place reversal of linked lists modifies the structure without using extra space. It's fundamental for many linked list problems and requires careful pointer manipulation to avoid losing references.`,
    whenToUse: [
        "Reversing entire linked list or sublists",
        "Rotating linked lists",
        "Palindrome checking in linked lists",
        "Reordering linked list nodes",
        "Any problem requiring structural modification without extra space"
    ],
    variations: [
        {
            name: "Basic List Reversal",
            explanation: "Reverse entire linked list using three pointers technique.",
            code: `// C++: Reverse Linked List
  ListNode* reverseList(ListNode* head) {
      ListNode* prev = nullptr;
      ListNode* curr = head;
      
      while (curr) {
          ListNode* next = curr->next;
          curr->next = prev;
          prev = curr;
          curr = next;
      }
      
      return prev;
  }
  
  // Recursive version
  ListNode* reverseListRecursive(ListNode* head) {
      if (!head || !head->next) return head;
      
      ListNode* newHead = reverseListRecursive(head->next);
      head->next->next = head;
      head->next = nullptr;
      
      return newHead;
  }`,
            tips: [
                "Use three pointers: previous, current, next.",
                "Always store next pointer before breaking the link.",
                "Return previous pointer as new head."
            ]
        },
        {
            name: "Reverse Sublist",
            explanation: "Reverse only a portion of the linked list between given positions.",
            code: `// C++: Reverse Linked List II
  ListNode* reverseBetween(ListNode* head, int left, int right) {
      ListNode dummy(0);
      dummy.next = head;
      ListNode* prev = &dummy;
      
      // Move to position before left
      for (int i = 0; i < left - 1; i++) {
          prev = prev->next;
      }
      
      ListNode* curr = prev->next;
      
      // Reverse the sublist
      for (int i = 0; i < right - left; i++) {
          ListNode* next = curr->next;
          curr->next = next->next;
          next->next = prev->next;
          prev->next = next;
      }
      
      return dummy.next;
  }`,
            tips: [
                "Use dummy node to handle edge cases.",
                "Identify connection points before and after sublist.",
                "Reverse by moving nodes one at a time."
            ]
        },
        {
            name: "Reverse in Groups",
            explanation: "Reverse nodes in groups of k.",
            code: `// C++: Reverse Nodes in k-Group
  ListNode* reverseKGroup(ListNode* head, int k) {
      // Check if we have k nodes to reverse
      ListNode* curr = head;
      for (int i = 0; i < k; i++) {
          if (!curr) return head;
          curr = curr->next;
      }
      
      // Reverse first k nodes
      ListNode* prev = nullptr;
      curr = head;
      for (int i = 0; i < k; i++) {
          ListNode* next = curr->next;
          curr->next = prev;
          prev = curr;
          curr = next;
      }
      
      // Recursively reverse remaining groups
      head->next = reverseKGroup(curr, k);
      
      return prev;
  }`,
            tips: [
                "Check if enough nodes exist before reversing.",
                "Use recursion for handling multiple groups.",
                "Original head becomes tail of reversed group."
            ]
        }
    ],
    example: {
        title: "Palindrome Linked List",
        description: "Check if linked list is palindrome using in-place reversal.",
        code: `// C++: Palindrome Linked List
  bool isPalindrome(ListNode* head) {
      if (!head || !head->next) return true;
      
      // Find middle using fast/slow pointers
      ListNode* slow = head;
      ListNode* fast = head;
      while (fast->next && fast->next->next) {
          slow = slow->next;
          fast = fast->next->next;
      }
      
      // Reverse second half
      ListNode* secondHalf = reverseList(slow->next);
      
      // Compare first and second half
      ListNode* firstHalf = head;
      while (secondHalf) {
          if (firstHalf->val != secondHalf->val) return false;
          firstHalf = firstHalf->next;
          secondHalf = secondHalf->next;
      }
      
      return true;
  }
  
  ListNode* reverseList(ListNode* head) {
      ListNode* prev = nullptr;
      while (head) {
          ListNode* next = head->next;
          head->next = prev;
          prev = head;
          head = next;
      }
      return prev;
  }`
    },
    tipsAndTricks: [
        "Always use dummy nodes for complex manipulations.",
        "Draw diagrams to visualize pointer changes.",
        "Combine with other patterns like fast/slow pointers.",
        "Practice both iterative and recursive approaches."
    ],
    pitfalls: [
        "Losing references to nodes (memory leaks or lost connections).",
        "Incorrect handling of edge cases (empty list, single node).",
        "Off-by-one errors in position counting.",
        "Not properly reconnecting reversed sublists."
    ],
    performance: [
        "Time complexity: O(n) for single pass operations.",
        "Space complexity: O(1) for iterative, O(n) for recursive."
    ],
    practiceProblems: [
        { name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" },
        { name: "Reverse Linked List II", link: "https://leetcode.com/problems/reverse-linked-list-ii/" },
        { name: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
        { name: "Swap Nodes in Pairs", link: "https://leetcode.com/problems/swap-nodes-in-pairs/" },
        { name: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/" },
        { name: "Reorder List", link: "https://leetcode.com/problems/reorder-list/" },
        { name: "Rotate List", link: "https://leetcode.com/problems/rotate-list/" },
        { name: "Odd Even Linked List", link: "https://leetcode.com/problems/odd-even-linked-list/" },
        { name: "Add Two Numbers II", link: "https://leetcode.com/problems/add-two-numbers-ii/" },
        { name: "Partition List", link: "https://leetcode.com/problems/partition-list/" }
    ]
};

const unionFindPattern = {
    title: "Union Find (Disjoint Set) Pattern",
    analogy: `Think of Union Find as a social network where you want to know if two people are connected through mutual friends. Instead of checking every possible path, you assign each person a group leader. If two people have the same leader, they're connected.`,
    description: `Union Find (Disjoint Set Union) is a data structure that efficiently handles connectivity queries and dynamic set operations. It's perfect for problems involving grouping, connectivity, and cycle detection in graphs.`,
    whenToUse: [
        "Determining if two elements are in the same connected component",
        "Detecting cycles in undirected graphs",
        "Dynamic connectivity problems",
        "Grouping elements based on relationships",
        "Kruskal's algorithm for minimum spanning trees"
    ],
    variations: [
        {
            name: "Basic Union Find",
            explanation: "Simple implementation with path compression and union by rank optimizations.",
            code: `// C++: Basic Union Find Implementation
  class UnionFind {
  private:
      vector<int> parent, rank;
  public:
      UnionFind(int n) : parent(n), rank(n, 0) {
          for (int i = 0; i < n; i++) {
              parent[i] = i;
          }
      }
      
      int find(int x) {
          if (parent[x] != x) {
              parent[x] = find(parent[x]);  // Path compression
          }
          return parent[x];
      }
      
      void unite(int x, int y) {
          int rootX = find(x), rootY = find(y);
          if (rootX != rootY) {
              // Union by rank
              if (rank[rootX] < rank[rootY]) {
                  parent[rootX] = rootY;
              } else if (rank[rootX] > rank[rootY]) {
                  parent[rootY] = rootX;
              } else {
                  parent[rootY] = rootX;
                  rank[rootX]++;
              }
          }
      }
      
      bool connected(int x, int y) {
          return find(x) == find(y);
      }
  };`,
            tips: [
                "Path compression makes find operations nearly O(1).",
                "Union by rank keeps trees balanced.",
                "Initialize each element as its own parent."
            ]
        },
        {
            name: "Number of Connected Components",
            explanation: "Count separate groups in an undirected graph using Union Find.",
            code: `// C++: Number of Connected Components in Undirected Graph
  int countComponents(int n, vector<vector<int>>& edges) {
      UnionFind uf(n);
      
      for (auto& edge : edges) {
          uf.unite(edge[0], edge[1]);
      }
      
      unordered_set<int> components;
      for (int i = 0; i < n; i++) {
          components.insert(uf.find(i));
      }
      
      return components.size();
  }`,
            tips: [
                "Unite all connected nodes first.",
                "Count unique root parents to get components.",
                "Use set to eliminate duplicate roots."
            ]
        },
        {
            name: "Cycle Detection",
            explanation: "Detect cycles in undirected graphs by checking if nodes are already connected.",
            code: `// C++: Graph Valid Tree (Cycle Detection)
  bool validTree(int n, vector<vector<int>>& edges) {
      if (edges.size() != n - 1) return false;  // Tree must have n-1 edges
      
      UnionFind uf(n);
      
      for (auto& edge : edges) {
          if (uf.connected(edge[0], edge[1])) {
              return false;  // Cycle detected
          }
          uf.unite(edge[0], edge[1]);
      }
      
      return true;
  }`,
            tips: [
                "If two nodes are already connected and we try to connect them again, there's a cycle.",
                "Valid tree has exactly n-1 edges and no cycles.",
                "Check connectivity before union operation."
            ]
        }
    ],
    example: {
        title: "Number of Islands",
        description: "Count separate islands in a 2D grid using Union Find.",
        code: `// C++: Number of Islands using Union Find
  int numIslands(vector<vector<char>>& grid) {
      if (grid.empty()) return 0;
      
      int m = grid.size(), n = grid[0].size();
      UnionFind uf(m * n);
      int water_cells = 0;
      
      vector<vector<int>> directions = {{0,1}, {1,0}, {0,-1}, {-1,0}};
      
      for (int i = 0; i < m; i++) {
          for (int j = 0; j < n; j++) {
              if (grid[i][j] == '0') {
                  water_cells++;
                  continue;
              }
              
              for (auto& dir : directions) {
                  int x = i + dir[0], y = j + dir[1];
                  if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == '1') {
                      uf.unite(i * n + j, x * n + y);
                  }
              }
          }
      }
      
      unordered_set<int> islands;
      for (int i = 0; i < m; i++) {
          for (int j = 0; j < n; j++) {
              if (grid[i][j] == '1') {
                  islands.insert(uf.find(i * n + j));
              }
          }
      }
      
      return islands.size();
  }`
    },
    tipsAndTricks: [
        "Convert 2D coordinates to 1D for grid problems: index = row * cols + col.",
        "Use path compression and union by rank for optimal performance.",
        "Initialize with each element as its own parent.",
        "For weighted Union Find, store additional information in nodes."
    ],
    pitfalls: [
        "Forgetting path compression leading to O(n) find operations.",
        "Not using union by rank causing unbalanced trees.",
        "Incorrect 2D to 1D index conversion.",
        "Not handling edge cases like empty inputs or single elements."
    ],
    performance: [
        "Time complexity: Nearly O(1) per operation with optimizations.",
        "Space complexity: O(n) for parent and rank arrays.",
        "Amortized α(n) time per operation where α is inverse Ackermann function."
    ],
    practiceProblems: [
        { name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/" },
        { name: "Number of Connected Components in an Undirected Graph", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
        { name: "Graph Valid Tree", link: "https://leetcode.com/problems/graph-valid-tree/" },
        { name: "Redundant Connection", link: "https://leetcode.com/problems/redundant-connection/" },
        { name: "Accounts Merge", link: "https://leetcode.com/problems/accounts-merge/" },
        { name: "Most Stones Removed with Same Row or Column", link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/" },
        { name: "Satisfiability of Equality Equations", link: "https://leetcode.com/problems/satisfiability-of-equality-equations/" },
        { name: "Friend Circles", link: "https://leetcode.com/problems/friend-circles/" },
        { name: "Surrounded Regions", link: "https://leetcode.com/problems/surrounded-regions/" },
        { name: "Number of Operations to Make Network Connected", link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/" }
    ]
};

const greedyAlgorithmsPattern = {
    title: "Greedy Algorithms Pattern",
    analogy: `Greedy algorithms are like a hungry person at a buffet who always picks the most appealing dish available right now, without considering what might come later. Sometimes this works perfectly, sometimes it doesn't, but when it works, it's very efficient.`,
    description: `Greedy algorithms make locally optimal choices at each step, hoping to find a global optimum. They work when the problem has optimal substructure and the greedy choice property. The key is proving that local optimization leads to global optimization.`,
    whenToUse: [
        "Optimization problems with keywords like 'minimum', 'maximum', 'shortest', 'longest'",
        "Problems where local optimal choice leads to global optimum",
        "Scheduling and interval problems",
        "Graph problems like minimum spanning tree",
        "When you can prove the greedy choice property holds"
    ],
    variations: [
        {
            name: "Activity Selection",
            explanation: "Select maximum number of non-overlapping activities by choosing earliest ending time.",
            code: `// C++: Non-overlapping Intervals
  int eraseOverlapIntervals(vector<vector<int>>& intervals) {
      if (intervals.empty()) return 0;
      
      sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
          return a[1] < b[1];  // Sort by end time
      });
      
      int count = 0;
      int lastEnd = intervals[0][1];
      
      for (int i = 1; i < intervals.size(); i++) {
          if (intervals[i][0] < lastEnd) {
              count++;  // Remove overlapping interval
          } else {
              lastEnd = intervals[i][1];
          }
      }
      
      return count;
  }`,
            tips: [
                "Sort by end time for activity selection problems.",
                "Greedy choice: always pick activity that ends earliest.",
                "This maximizes room for future activities."
            ]
        },
        {
            name: "Fractional Knapsack",
            explanation: "Maximize value by choosing items with highest value-to-weight ratio first.",
            code: `// C++: Fractional Knapsack (conceptual)
  double fractionalKnapsack(vector<pair<int, int>>& items, int capacity) {
      // Sort by value/weight ratio in descending order
      sort(items.begin(), items.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
          return (double)a.first / a.second > (double)b.first / b.second;
      });
      
      double totalValue = 0;
      int remainingCapacity = capacity;
      
      for (auto& item : items) {
          if (remainingCapacity >= item.second) {
              // Take whole item
              totalValue += item.first;
              remainingCapacity -= item.second;
          } else {
              // Take fraction of item
              totalValue += (double)item.first * remainingCapacity / item.second;
              break;
          }
      }
      
      return totalValue;
  }`,
            tips: [
                "Sort by value-to-weight ratio for optimal selection.",
                "Take items greedily until capacity is full.",
                "Can take fractional parts unlike 0/1 knapsack."
            ]
        },
        {
            name: "Jump Game",
            explanation: "Determine if you can reach the end by tracking farthest reachable position.",
            code: `// C++: Jump Game
  bool canJump(vector<int>& nums) {
      int farthest = 0;
      
      for (int i = 0; i < nums.size(); i++) {
          if (i > farthest) return false;  // Can't reach current position
          farthest = max(farthest, i + nums[i]);
          if (farthest >= nums.size() - 1) return true;
      }
      
      return true;
  }
  
  // Jump Game II - Minimum jumps to reach end
  int jump(vector<int>& nums) {
      int jumps = 0, currentEnd = 0, farthest = 0;
      
      for (int i = 0; i < nums.size() - 1; i++) {
          farthest = max(farthest, i + nums[i]);
          
          if (i == currentEnd) {
              jumps++;
              currentEnd = farthest;
          }
      }
      
      return jumps;
  }`,
            tips: [
                "Track farthest reachable position at each step.",
                "Greedy choice: always jump to position that extends reach most.",
                "For minimum jumps, only increment when forced to make a jump."
            ]
        }
    ],
    example: {
        title: "Gas Station",
        description: "Find starting position to complete circular route with minimum gas.",
        code: `// C++: Gas Station
  int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
      int totalTank = 0, currTank = 0, start = 0;
      
      for (int i = 0; i < gas.size(); i++) {
          int net = gas[i] - cost[i];
          totalTank += net;
          currTank += net;
          
          if (currTank < 0) {
              start = i + 1;
              currTank = 0;
          }
      }
      
      return totalTank >= 0 ? start : -1;
  }`
    },
    tipsAndTricks: [
        "Prove greedy choice property before implementing.",
        "Sort input when choosing 'best' option at each step.",
        "Consider counterexamples to verify correctness.",
        "Many greedy problems can be solved by sorting first."
    ],
    pitfalls: [
        "Assuming greedy works without proof (often leads to wrong answers).",
        "Not considering all possible greedy strategies.",
        "Incorrect sorting criteria for optimization.",
        "Missing edge cases or boundary conditions."
    ],
    performance: [
        "Often O(n log n) due to sorting step.",
        "Sometimes O(n) if no sorting required.",
        "Generally much faster than dynamic programming alternatives."
    ],
    practiceProblems: [
        { name: "Jump Game", link: "https://leetcode.com/problems/jump-game/" },
        { name: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/" },
        { name: "Gas Station", link: "https://leetcode.com/problems/gas-station/" },
        { name: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/" },
        { name: "Minimum Number of Arrows to Burst Balloons", link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" },
        { name: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/" },
        { name: "Queue Reconstruction by Height", link: "https://leetcode.com/problems/queue-reconstruction-by-height/" },
        { name: "Candy", link: "https://leetcode.com/problems/candy/" },
        { name: "Best Time to Buy and Sell Stock II", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
        { name: "Assign Cookies", link: "https://leetcode.com/problems/assign-cookies/" }
    ]
};

const triePattern = {
    title: "Trie (Prefix Tree) Pattern",
    analogy: `A Trie is like a family tree for words. Each level represents a letter position, and each path from root to a leaf spells out a complete word. It's perfect for quickly finding words that start with specific prefixes.`,
    description: `A Trie (pronounced "try") is a tree data structure used for efficiently storing and searching strings. Each node represents a character, and paths from root to nodes represent prefixes. It excels at prefix-based operations and string searching.`,
    whenToUse: [
        "Autocomplete and spell-checking features",
        "Finding words with common prefixes",
        "Word search in grids with multiple words",
        "Implementing dictionaries with prefix operations",
        "IP routing and string matching algorithms"
    ],
    variations: [
        {
            name: "Basic Trie Implementation",
            explanation: "Standard trie with insert, search, and prefix checking operations.",
            code: `// C++: Implement Trie (Prefix Tree)
  class Trie {
  private:
      struct TrieNode {
          TrieNode* children[26];
          bool isEnd;
          
          TrieNode() : isEnd(false) {
              for (int i = 0; i < 26; i++) {
                  children[i] = nullptr;
              }
          }
      };
      
      TrieNode* root;
      
  public:
      Trie() {
          root = new TrieNode();
      }
      
      void insert(string word) {
          TrieNode* curr = root;
          for (char c : word) {
              int index = c - 'a';
              if (!curr->children[index]) {
                  curr->children[index] = new TrieNode();
              }
              curr = curr->children[index];
          }
          curr->isEnd = true;
      }
      
      bool search(string word) {
          TrieNode* curr = root;
          for (char c : word) {
              int index = c - 'a';
              if (!curr->children[index]) return false;
              curr = curr->children[index];
          }
          return curr->isEnd;
      }
      
      bool startsWith(string prefix) {
          TrieNode* curr = root;
          for (char c : prefix) {
              int index = c - 'a';
              if (!curr->children[index]) return false;
              curr = curr->children[index];
          }
          return true;
      }
  };`,
            tips: [
                "Each node typically has 26 children for lowercase English letters.",
                "Mark end of words with boolean flag.",
                "Root represents empty string."
            ]
        },
        {
            name: "Word Search with Trie",
            explanation: "Find multiple words in a 2D grid efficiently using trie for word storage.",
            code: `// C++: Word Search II
  vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
      // Build trie from words
      TrieNode* root = new TrieNode();
      for (string& word : words) {
          insert(root, word);
      }
      
      vector<string> result;
      int m = board.size(), n = board[0].size();
      
      for (int i = 0; i < m; i++) {
          for (int j = 0; j < n; j++) {
              dfs(board, i, j, root, "", result);
          }
      }
      
      return result;
  }
  
  void dfs(vector<vector<char>>& board, int i, int j, TrieNode* node, 
           string word, vector<string>& result) {
      if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || 
          board[i][j] == '#') return;
      
      char c = board[i][j];
      int index = c - 'a';
      if (!node->children[index]) return;
      
      node = node->children[index];
      word += c;
      
      if (node->isEnd) {
          result.push_back(word);
          node->isEnd = false;  // Avoid duplicates
      }
      
      board[i][j] = '#';  // Mark visited
      dfs(board, i+1, j, node, word, result);
      dfs(board, i-1, j, node, word, result);
      dfs(board, i, j+1, node, word, result);
      dfs(board, i, j-1, node, word, result);
      board[i][j] = c;  // Backtrack
  }`,
            tips: [
                "Build trie from all target words first.",
                "Use DFS with backtracking for grid traversal.",
                "Mark visited cells and restore after recursion."
            ]
        },
        {
            name: "Auto-complete System",
            explanation: "Implement autocomplete with ranking based on frequency.",
            code: `// C++: Design Search Autocomplete System (simplified)
  class AutocompleteSystem {
  private:
      struct TrieNode {
          unordered_map<char, TrieNode*> children;
          unordered_map<string, int> sentences;  // sentence -> frequency
      };
      
      TrieNode* root;
      string currentInput;
      
  public:
      AutocompleteSystem(vector<string>& sentences, vector<int>& times) {
          root = new TrieNode();
          currentInput = "";
          
          for (int i = 0; i < sentences.size(); i++) {
              insert(sentences[i], times[i]);
          }
      }
      
      void insert(string sentence, int frequency) {
          TrieNode* curr = root;
          for (char c : sentence) {
              if (!curr->children[c]) {
                  curr->children[c] = new TrieNode();
              }
              curr = curr->children[c];
              curr->sentences[sentence] += frequency;
          }
      }
      
      vector<string> input(char c) {
          if (c == '#') {
              insert(currentInput, 1);
              currentInput = "";
              return {};
          }
          
          currentInput += c;
          TrieNode* curr = root;
          
          for (char ch : currentInput) {
              if (!curr->children[ch]) return {};
              curr = curr->children[ch];
          }
          
          // Get top 3 sentences by frequency
          vector<pair<int, string>> candidates;
          for (auto& p : curr->sentences) {
              candidates.push_back({p.second, p.first});
          }
          
          sort(candidates.begin(), candidates.end(), [](auto& a, auto& b) {
              return a.first > b.first || (a.first == b.first && a.second < b.second);
          });
          
          vector<string> result;
          for (int i = 0; i < min(3, (int)candidates.size()); i++) {
              result.push_back(candidates[i].second);
          }
          
          return result;
      }
  };`,
            tips: [
                "Store additional data (like frequency) in trie nodes.",
                "Use maps for variable character sets.",
                "Sort results by custom criteria (frequency, lexicographical)."
            ]
        }
    ],
    example: {
        title: "Replace Words",
        description: "Replace words with their shortest root using trie for efficient lookup.",
        code: `// C++: Replace Words
  string replaceWords(vector<string>& dictionary, string sentence) {
      // Build trie
      TrieNode* root = new TrieNode();
      for (string& word : dictionary) {
          insert(root, word);
      }
      
      stringstream ss(sentence);
      string word, result;
      
      while (ss >> word) {
          string root_word = findRoot(root, word);
          if (!result.empty()) result += " ";
          result += root_word;
      }
      
      return result;
  }
  
  string findRoot(TrieNode* root, string word) {
      TrieNode* curr = root;
      string prefix = "";
      
      for (char c : word) {
          int index = c - 'a';
          if (!curr->children[index]) break;
          curr = curr->children[index];
          prefix += c;
          if (curr->isEnd) return prefix;  // Found root
      }
      
      return word;  // No root found, return original word
  }`
    },
    tipsAndTricks: [
        "Use arrays for fixed character sets (26 for lowercase), maps for variable sets.",
        "Store additional information in nodes for complex operations.",
        "Consider memory optimization by using more sophisticated node structures.",
        "Combine with DFS/BFS for complex search patterns."
    ],
    pitfalls: [
        "Memory leaks from not properly deallocating nodes.",
        "Incorrect character indexing (remember 'a' = 0).",
        "Not handling case sensitivity properly.",
        "Inefficient node structure for sparse character sets."
    ],
    performance: [
        "Insert/Search: O(m) where m is word length.",
        "Space: O(total characters in all words).",
        "Prefix operations are very efficient compared to hash maps."
    ],
    practiceProblems: [
        { name: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        { name: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/" },
        { name: "Add and Search Word - Data structure design", link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/" },
        { name: "Replace Words", link: "https://leetcode.com/problems/replace-words/" },
        { name: "Map Sum Pairs", link: "https://leetcode.com/problems/map-sum-pairs/" },
        { name: "Longest Word in Dictionary", link: "https://leetcode.com/problems/longest-word-in-dictionary/" },
        { name: "Design Search Autocomplete System", link: "https://leetcode.com/problems/design-search-autocomplete-system/" },
        { name: "Stream of Characters", link: "https://leetcode.com/problems/stream-of-characters/" },
        { name: "Short Encoding of Words", link: "https://leetcode.com/problems/short-encoding-of-words/" },
        { name: "Maximum XOR of Two Numbers in an Array", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" }
    ]
};

const patternsData = [
    {
        id: "two-pointers",
        ...twoPointersPattern
    },
    {
        id: "sliding-window",
        ...slidingWindowPattern
    },
    {
        id: "tree-traversal",
        ...treeTraversalPattern
    },
    {
        id: "top-k-elements",
        ...topKElementsPattern
    },
    {
        id: "prefix-sum",
        ...prefixSumPattern
    },
    {
        id: "fast-slow-pointers",
        ...fastSlowPattern
    },
    {
        id: "dynamic-programming",
        ...dynamicProgrammingPattern
    },
    {
        id: "merge-intervals",
        ...mergeIntervalsPattern
    },
    {
        id: "greedy",
        ...greedyAlgorithmsPattern
    },
    {
        id: "monotonic-stack",
        ...monotonicStackPattern
    },
    {
        id: "prefix-sum",
        ...prefixSumPattern
    },
    {
        id: "linked-list-reversal",
        ...linkedListReversalPattern
    },
    {
        id: "union-find",
        ...unionFindPattern
    },
    {
        id: "trie",
        ...triePattern
    }
];

export default patternsData;