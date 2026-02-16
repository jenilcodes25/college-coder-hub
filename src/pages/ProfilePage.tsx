import { motion } from "framer-motion";
import { Calendar, Code2, Trophy, Flame } from "lucide-react";

const solvedByDiff = { Easy: 5, Medium: 3, Hard: 1 };
const recentSubmissions = [
  { problem: "Two Sum", verdict: "Accepted", time: "2 hours ago", lang: "C++" },
  { problem: "Coin Change", verdict: "Accepted", time: "1 day ago", lang: "Python" },
  { problem: "Longest Substring", verdict: "Wrong Answer", time: "2 days ago", lang: "C++" },
  { problem: "Valid Parentheses", verdict: "Accepted", time: "3 days ago", lang: "Java" },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-border bg-card p-6 mb-6"
        >
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl font-bold text-primary">
              AK
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">algo_master</h1>
              <p className="text-muted-foreground text-sm">CSE • 3rd Year • Joined Jan 2026</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1 text-sm text-primary font-semibold">
                  <Trophy className="h-4 w-4" /> Rating: 2145
                </span>
                <span className="flex items-center gap-1 text-sm text-warning font-semibold">
                  <Flame className="h-4 w-4" /> 7-day streak
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {(["Easy", "Medium", "Hard"] as const).map((d) => {
            const colors = { Easy: "text-success", Medium: "text-warning", Hard: "text-destructive" };
            return (
              <motion.div
                key={d}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg border border-border bg-card p-4 text-center"
              >
                <div className={`text-2xl font-bold font-mono ${colors[d]}`}>
                  {solvedByDiff[d]}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{d} Solved</div>
              </motion.div>
            );
          })}
        </div>

        {/* Recent submissions */}
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> Recent Submissions
            </h2>
          </div>
          {recentSubmissions.map((sub, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-3 border-b border-border/50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <Code2 className="h-4 w-4 text-muted-foreground" />
                <div>
                  <span className="text-sm font-medium text-foreground">{sub.problem}</span>
                  <span className="ml-2 text-xs text-muted-foreground">{sub.lang}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-semibold ${
                    sub.verdict === "Accepted" ? "text-success" : "text-destructive"
                  }`}
                >
                  {sub.verdict}
                </span>
                <span className="text-xs text-muted-foreground">{sub.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
