import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Trophy, Swords, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Problems", value: "500+", icon: Code2 },
  { label: "Active Users", value: "1.2K", icon: Users },
  { label: "Contests Held", value: "42", icon: Swords },
  { label: "Submissions", value: "50K+", icon: Trophy },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-accent/10 blur-[80px]" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Live Contest Running Now
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
              Level Up Your{" "}
              <span className="text-gradient-primary">Code</span>
            </h1>

            <p className="mb-10 text-lg text-muted-foreground max-w-xl mx-auto">
              Your college's competitive programming arena. Solve problems, compete in contests, and climb the leaderboard.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/problems">
                <Button size="lg" className="glow-primary gap-2 text-base font-semibold px-8">
                  Start Solving
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contests">
                <Button size="lg" variant="outline" className="gap-2 text-base font-semibold px-8 border-border hover:bg-secondary">
                  View Contests
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-3 h-6 w-6 text-primary" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border bg-card overflow-hidden"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/70" />
              <div className="h-3 w-3 rounded-full bg-warning/70" />
              <div className="h-3 w-3 rounded-full bg-success/70" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">solution.cpp</span>
            </div>
            <pre className="p-6 text-sm font-mono text-muted-foreground overflow-x-auto">
              <code>{`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    
    // Your solution here...
    
    cout << "Accepted ✓" << endl;
    return 0;
}`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 CodeArena — Built for competitive programmers</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
