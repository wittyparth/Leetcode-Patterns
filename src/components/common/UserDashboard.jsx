import { motion } from 'motion/react';
import { useCompletedProblems } from '../../hooks/useLocalStorage';
import { allProblems } from '../../data/allProblems';

const UserDashboard = () => {
    const { completedProblems } = useCompletedProblems();

    // Calculate total number of problems
    const totalProblems = allProblems.length;

    // Count completed problems
    const completedCount = allProblems.filter(p => completedProblems[p.problem_name]?.completed).length;

    // Calculate completion percentage
    const completionPercentage = totalProblems > 0
        ? Math.round((completedCount / totalProblems) * 100)
        : 0;

    // Calculate problems solved in the last week
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const lastWeekCount = allProblems.filter(p => {
        const c = completedProblems[p.problem_name];
        return c?.completed && c.lastSolved && new Date(c.lastSolved) > oneWeekAgo;
    }).length;

    // Calculate longest streak (placeholder)
    const longestStreak = 0; // TODO: Implement real streak logic
    // Calculate current streak (placeholder)
    const currentStreak = 0; // TODO: Implement real streak logic

    return (
        <motion.div
            className="bg-base-100 rounded-xl p-6 border border-base-300 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <div className="text-2xl font-bold mb-1">Welcome Back!</div>
                    <div className="text-base-content/70 mb-2">Track your LeetCode progress and keep grinding 🚀</div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <StatCard label="Solved" value={completedCount} />
                    <StatCard label="Total" value={totalProblems} />
                    <StatCard label="% Complete" value={completionPercentage + '%'} />
                    <StatCard label="Solved Last 7d" value={lastWeekCount} />
                    <StatCard label="Longest Streak" value={longestStreak} />
                    <StatCard label="Current Streak" value={currentStreak} />
                </div>
            </div>
        </motion.div>
    );
};

const StatCard = ({ label, value }) => (
    <div className="flex flex-col items-center bg-base-200 rounded-lg px-4 py-2 min-w-[80px]">
        <div className="text-lg font-bold">{value}</div>
        <div className="text-xs opacity-70">{label}</div>
    </div>
);

export default UserDashboard;
