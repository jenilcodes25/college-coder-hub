export interface Problem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  acceptance: number;
  submissions: number;
  solved: boolean;
}

export interface Contest {
  id: string;
  title: string;
  startTime: string;
  duration: string;
  participants: number;
  status: "upcoming" | "live" | "ended";
}

export interface LeaderboardUser {
  rank: number;
  username: string;
  avatar: string;
  solved: number;
  rating: number;
  branch: string;
}

export const PROBLEMS: Problem[] = [
  { id: "1", title: "Two Sum", difficulty: "Easy", tags: ["Arrays", "Hash Map"], acceptance: 72, submissions: 4521, solved: true },
  { id: "2", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", tags: ["Strings", "Sliding Window"], acceptance: 45, submissions: 3200, solved: false },
  { id: "3", title: "Median of Two Sorted Arrays", difficulty: "Hard", tags: ["Binary Search", "Arrays"], acceptance: 22, submissions: 1500, solved: false },
  { id: "4", title: "Valid Parentheses", difficulty: "Easy", tags: ["Strings", "Stack"], acceptance: 68, submissions: 5100, solved: true },
  { id: "5", title: "Merge K Sorted Lists", difficulty: "Hard", tags: ["Linked List", "Heap"], acceptance: 28, submissions: 980, solved: false },
  { id: "6", title: "Coin Change", difficulty: "Medium", tags: ["DP"], acceptance: 41, submissions: 2800, solved: true },
  { id: "7", title: "Number of Islands", difficulty: "Medium", tags: ["Graphs", "BFS"], acceptance: 52, submissions: 3400, solved: false },
  { id: "8", title: "Reverse Linked List", difficulty: "Easy", tags: ["Linked List"], acceptance: 78, submissions: 6200, solved: true },
  { id: "9", title: "Word Break", difficulty: "Medium", tags: ["DP", "Strings"], acceptance: 38, submissions: 2100, solved: false },
  { id: "10", title: "Edit Distance", difficulty: "Hard", tags: ["DP", "Strings"], acceptance: 19, submissions: 750, solved: false },
  { id: "11", title: "Dijkstra's Shortest Path", difficulty: "Hard", tags: ["Graphs", "Greedy"], acceptance: 25, submissions: 1200, solved: false },
  { id: "12", title: "Maximum Subarray", difficulty: "Easy", tags: ["Arrays", "DP"], acceptance: 74, submissions: 5800, solved: true },
];

export const CONTESTS: Contest[] = [
  { id: "1", title: "Weekly Contest #42", startTime: "2026-02-20T18:00:00Z", duration: "2h", participants: 0, status: "upcoming" },
  { id: "2", title: "CodeSprint: DP Challenge", startTime: "2026-02-17T14:00:00Z", duration: "3h", participants: 87, status: "live" },
  { id: "3", title: "Weekly Contest #41", startTime: "2026-02-13T18:00:00Z", duration: "2h", participants: 156, status: "ended" },
  { id: "4", title: "Graph Mastery", startTime: "2026-02-10T14:00:00Z", duration: "2.5h", participants: 112, status: "ended" },
];

export const LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, username: "algo_master", avatar: "AM", solved: 234, rating: 2145, branch: "CSE" },
  { rank: 2, username: "code_ninja", avatar: "CN", solved: 210, rating: 2098, branch: "CSE" },
  { rank: 3, username: "binary_beast", avatar: "BB", solved: 198, rating: 2034, branch: "IT" },
  { rank: 4, username: "dp_wizard", avatar: "DW", solved: 187, rating: 1987, branch: "CSE" },
  { rank: 5, username: "graph_guru", avatar: "GG", solved: 176, rating: 1945, branch: "ECE" },
  { rank: 6, username: "stack_overflow", avatar: "SO", solved: 165, rating: 1890, branch: "CSE" },
  { rank: 7, username: "recursion_queen", avatar: "RQ", solved: 158, rating: 1856, branch: "IT" },
  { rank: 8, username: "bit_masker", avatar: "BM", solved: 149, rating: 1812, branch: "CSE" },
  { rank: 9, username: "greedy_solver", avatar: "GS", solved: 142, rating: 1778, branch: "MECH" },
  { rank: 10, username: "sort_king", avatar: "SK", solved: 138, rating: 1745, branch: "CSE" },
];

export const TOPICS = ["All", "Arrays", "Strings", "DP", "Graphs", "Trees", "Binary Search", "Greedy", "Stack", "Hash Map", "Linked List", "Heap", "BFS", "Sliding Window"];
