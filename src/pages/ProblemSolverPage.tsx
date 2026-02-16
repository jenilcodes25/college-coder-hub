import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Send, Clock, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROBLEMS } from "@/data/mockData";

const LANGUAGES = ["C++", "Python", "Java", "JavaScript"];

const DEFAULT_CODE: Record<string, string> = {
  "C++": `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Write your solution here
    
    return 0;
}`,
  Python: `# Write your solution here

def solve():
    pass

solve()`,
  Java: `import java.util.*;

public class Solution {
    public static void main(String[] args) {
        // Write your solution here
    }
}`,
  JavaScript: `// Write your solution here

function solve() {
  
}

solve();`,
};

const ProblemSolverPage = () => {
  const { id } = useParams();
  const problem = PROBLEMS.find((p) => p.id === id);
  const [language, setLanguage] = useState("C++");
  const [code, setCode] = useState(DEFAULT_CODE["C++"]);
  const [output, setOutput] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<string | null>(null);

  if (!problem) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <p className="text-muted-foreground">Problem not found</p>
      </div>
    );
  }

  const handleRun = () => {
    setOutput("Running test cases...\n\nTest Case 1: Input: [2, 7, 11, 15], target = 9\nOutput: [0, 1]\nExpected: [0, 1]\n✓ Passed\n\nTest Case 2: Input: [3, 2, 4], target = 6\nOutput: [1, 2]\nExpected: [1, 2]\n✓ Passed");
    setVerdict(null);
  };

  const handleSubmit = () => {
    setOutput("Running all test cases...\n\nPassed: 15/15 test cases\n\nExecution Time: 4ms\nMemory: 8.2 MB");
    setVerdict("Accepted");
  };

  const diffColor = { Easy: "text-success", Medium: "text-warning", Hard: "text-destructive" };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="flex h-[calc(100vh-4rem)] flex-col lg:flex-row">
        {/* Problem description */}
        <div className="w-full lg:w-1/2 overflow-y-auto border-r border-border p-6">
          <Link to="/problems" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Problems
          </Link>

          <h1 className="text-2xl font-bold text-foreground mb-2">
            {problem.id}. {problem.title}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-sm font-medium ${diffColor[problem.difficulty]}`}>
              {problem.difficulty}
            </span>
            {problem.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-border text-muted-foreground text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-invert max-w-none text-sm text-secondary-foreground space-y-4">
            <p>
              Given an array of integers <code className="font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">nums</code> and an integer <code className="font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">target</code>, return indices of the two numbers such that they add up to target.
            </p>
            <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>

            <h3 className="text-base font-semibold text-foreground mt-6">Constraints</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>2 ≤ nums.length ≤ 10⁴</li>
              <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
              <li>-10⁹ ≤ target ≤ 10⁹</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-6">Example</h3>
            <div className="rounded-md bg-muted p-4 font-mono text-xs">
              <div><span className="text-muted-foreground">Input:</span> nums = [2,7,11,15], target = 9</div>
              <div><span className="text-muted-foreground">Output:</span> [0,1]</div>
              <div className="text-muted-foreground mt-1">Because nums[0] + nums[1] == 9</div>
            </div>
          </div>
        </div>

        {/* Code editor */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Editor toolbar */}
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <div className="flex gap-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setCode(DEFAULT_CODE[lang]);
                  }}
                  className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                    language === lang
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={handleRun} className="gap-1.5 text-xs">
                <Play className="h-3 w-3" /> Run
              </Button>
              <Button size="sm" onClick={handleSubmit} className="gap-1.5 text-xs glow-primary">
                <Send className="h-3 w-3" /> Submit
              </Button>
            </div>
          </div>

          {/* Code area */}
          <div className="flex-1 relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="h-full w-full resize-none bg-card p-4 font-mono text-sm text-foreground focus:outline-none"
              spellCheck={false}
            />
          </div>

          {/* Output panel */}
          {output && (
            <div className="border-t border-border bg-muted">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border">
                <span className="text-xs font-medium text-muted-foreground">Output</span>
                {verdict && (
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-bold ${verdict === "Accepted" ? "text-success" : "text-destructive"}`}>
                      {verdict}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> 4ms
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Cpu className="h-3 w-3" /> 8.2 MB
                    </span>
                  </div>
                )}
              </div>
              <pre className="p-4 text-xs font-mono text-secondary-foreground max-h-48 overflow-y-auto whitespace-pre-wrap">
                {output}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolverPage;
