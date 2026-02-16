import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import ProblemsPage from "./pages/ProblemsPage";
import ProblemSolverPage from "./pages/ProblemSolverPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ContestsPage from "./pages/ContestsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/problem/:id" element={<ProblemSolverPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/contests" element={<ContestsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
