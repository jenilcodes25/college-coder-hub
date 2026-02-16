import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, CheckCircle2, Circle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PROBLEMS, TOPICS } from "@/data/mockData";

const difficultyColor = {
  Easy: "text-success",
  Medium: "text-warning",
  Hard: "text-destructive",
};

const ProblemsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return PROBLEMS.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchTopic = selectedTopic === "All" || p.tags.includes(selectedTopic);
      const matchDiff = !selectedDifficulty || p.difficulty === selectedDifficulty;
      return matchSearch && matchTopic && matchDiff;
    });
  }, [search, selectedTopic, selectedDifficulty]);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Problems</h1>
        <p className="text-muted-foreground mb-8">Sharpen your skills with curated challenges</p>

        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {(["Easy", "Medium", "Hard"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(selectedDifficulty === d ? null : d)}
                className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                  selectedDifficulty === d
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
            <div className="w-px bg-border mx-1" />
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTopic(t)}
                className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                  selectedTopic === t
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Problems table */}
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-[40px_1fr_100px_100px_100px] md:grid-cols-[40px_1fr_120px_120px_120px] gap-4 px-4 py-3 border-b border-border text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <span></span>
            <span>Title</span>
            <span>Difficulty</span>
            <span className="hidden md:block">Acceptance</span>
            <span className="text-right">Tags</span>
          </div>
          {filtered.map((problem, i) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to={`/problem/${problem.id}`}
                className="grid grid-cols-[40px_1fr_100px_100px_100px] md:grid-cols-[40px_1fr_120px_120px_120px] gap-4 px-4 py-3.5 border-b border-border/50 hover:bg-secondary/50 transition-colors items-center"
              >
                <span>
                  {problem.solved ? (
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground/30" />
                  )}
                </span>
                <span className="text-sm font-medium text-foreground truncate">
                  {problem.id}. {problem.title}
                </span>
                <span className={`text-sm font-medium ${difficultyColor[problem.difficulty]}`}>
                  {problem.difficulty}
                </span>
                <span className="hidden md:block text-sm text-muted-foreground">
                  {problem.acceptance}%
                </span>
                <span className="flex justify-end gap-1 flex-wrap">
                  {problem.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[10px] border-border text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </span>
              </Link>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="py-12 text-center text-muted-foreground">No problems found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;
