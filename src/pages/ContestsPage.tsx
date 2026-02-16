import { motion } from "framer-motion";
import { Clock, Users, Zap, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CONTESTS } from "@/data/mockData";

const statusStyle = {
  upcoming: { label: "Upcoming", className: "border-primary/30 text-primary bg-primary/10" },
  live: { label: "● Live", className: "border-success/30 text-success bg-success/10" },
  ended: { label: "Ended", className: "border-muted-foreground/30 text-muted-foreground bg-muted" },
};

const ContestsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Contests</h1>
        <p className="text-muted-foreground mb-8">Compete with your peers in timed challenges</p>

        <div className="space-y-4">
          {CONTESTS.map((contest, i) => {
            const status = statusStyle[contest.status];
            return (
              <motion.div
                key={contest.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-lg border bg-card p-5 transition-colors hover:border-primary/20 ${
                  contest.status === "live" ? "border-success/30" : "border-border"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">{contest.title}</h3>
                      <Badge variant="outline" className={status.className + " text-[10px]"}>
                        {status.label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {new Date(contest.startTime).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {contest.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" /> {contest.participants}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={contest.status === "live" ? "default" : "outline"}
                    className={contest.status === "live" ? "glow-primary gap-1.5" : "gap-1.5"}
                  >
                    {contest.status === "live" && <Zap className="h-3.5 w-3.5" />}
                    {contest.status === "upcoming" ? "Register" : contest.status === "live" ? "Enter" : "View Results"}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContestsPage;
