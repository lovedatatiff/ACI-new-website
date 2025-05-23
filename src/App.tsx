import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AICryptoKit from "./pages/toolkits/AICryptoKit";
import AgentSecretsManager from "./pages/toolkits/AgentSecretsManager";
import Enterprise from "./pages/solutions/Enterprise";
import Startup from "./pages/solutions/Startup";
import Agency from "./pages/solutions/Agency";
import UnifiedMCP from "./pages/toolkits/UnifiedMCP";
import DynamicAppSearch from "./pages/toolkits/DynamicAppSearch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/toolkits/ai-crypto-kit" element={<AICryptoKit />} />
          <Route path="/toolkits/agent-secrets-manager" element={<AgentSecretsManager />} />
          <Route path="/toolkits/unified-mcp" element={<UnifiedMCP />} />
          <Route path="/toolkits/dynamic-app-search" element={<DynamicAppSearch />} />
          <Route path="/solutions/enterprise" element={<Enterprise />} />
          <Route path="/solutions/startup" element={<Startup />} />
          <Route path="/solutions/agency" element={<Agency />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
