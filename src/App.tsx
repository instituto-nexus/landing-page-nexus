import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import UfabcNext from "./pages/UfabcNext";
import UfabcParser from "./pages/UfabcParser";
import WhatsAppBot from "./pages/WhatsAppBot";
import WhatsAppBotAI from "./pages/WhatsAppBotAI";
import AuloesNext from "./pages/AuloesNext";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* <Route path="/projetos/ufabc-next" element={<UfabcNext />} />
          <Route path="/projetos/ufabc-parser" element={<UfabcParser />} />
          <Route path="/projetos/whatsapp-bot" element={<WhatsAppBot />} />
          <Route path="/projetos/whatsapp-bot-ai" element={<WhatsAppBotAI />} />
          <Route path="/projetos/auloes-next" element={<AuloesNext />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;