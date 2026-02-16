import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";
import { LEADERBOARD } from "@/data/mockData";

const rankIcon = (rank: number) => {
  if (rank === 1) return <Trophy className="h-5 w-5 text-warning" />;
  if (rank === 2) return <Medal className="h-5 w-5 text-muted-foreground" />;
  if (rank === 3) return <Award className="h-5 w-5 text-warning/60" />;
  return <span className="text-sm font-mono text-muted-foreground w-5 text-center">{rank}</span>;
};

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Leaderboard</h1>
        <p className="text-muted-foreground mb-8">Top performers this month</p>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-[50px_1fr_80px_80px_70px] gap-4 px-4 py-3 border-b border-border text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <span>Rank</span>
            <span>User</span>
            <span className="text-right">Solved</span>
            <span className="text-right">Rating</span>
            <span className="text-right">Branch</span>
          </div>
          {LEADERBOARD.map((user, i) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`grid grid-cols-[50px_1fr_80px_80px_70px] gap-4 px-4 py-3.5 border-b border-border/50 items-center hover:bg-secondary/50 transition-colors ${
                user.rank <= 3 ? "bg-primary/[0.03]" : ""
              }`}
            >
              <span className="flex justify-center">{rankIcon(user.rank)}</span>
              <span className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-primary">
                  {user.avatar}
                </div>
                <span className="text-sm font-medium text-foreground">{user.username}</span>
              </span>
              <span className="text-right text-sm text-foreground font-mono">{user.solved}</span>
              <span className="text-right text-sm font-mono text-primary font-semibold">{user.rating}</span>
              <span className="text-right text-xs text-muted-foreground">{user.branch}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
