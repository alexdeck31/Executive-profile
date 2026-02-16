import React from 'react';
import Section from './ui/Section';
import { Bot, Workflow, Code2, Database, BrainCircuit, Target, CheckCircle2 } from 'lucide-react';

const AIInnovation: React.FC = () => {
  return (
    <Section id="ai-innovation" className="bg-zinc-950 py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase mb-3 block flex items-center gap-2">
              <BrainCircuit size={16} />
              Additional learning
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Agentic AI & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Business Automation</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mt-4">
              Leveraging <strong>N8N</strong>, <strong>LLMs</strong>, and <strong>Vibe Coding</strong> to build autonomous agents that streamline Revenue Operations, accelerate SDR workflows, and deepen strategic discovery.
            </p>
          </div>
          
          {/* Certificates Badge */}
          <div className="mt-8 md:mt-0 flex flex-col items-end gap-2">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Certified N8N AI Agent Automation</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Certified Vibe Coding (LinkedIn Learning)</span>
            </div>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Visual/Technical Illustration */}
          <div className="relative group rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full border border-white/10 bg-black/40">
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen transition-transform duration-[20s] group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 border border-cyan-500/30 backdrop-blur-md">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Vibe Coding & Rapid Prototyping</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Moving beyond traditional development constraints. Using AI-assisted coding to rapidly build custom internal tools, dashboards, and automations that solve specific business bottlenecks without waiting for engineering resources.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">Replit</span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">Cursor</span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">Bolt.new</span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">React/Typescript</span>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Use Cases */}
          <div className="flex flex-col gap-6">
            
            {/* Card 1: SDR Automation */}
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-zinc-900 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                  <Workflow size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase">RevOps Automation</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">SDR Structuration with AI</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Designed autonomous workflows that scrape, enrich, and score leads automatically. 
                Integrating signals from LinkedIn and news sources to feed CRMs with high-intent prospects, allowing SDRs to focus purely on engagement rather than data entry.
              </p>
            </div>

            {/* Card 2: MEDDIC Discovery */}
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-zinc-900 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400">
                  <Target size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase">Strategic Sales</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">AI-Enhanced MEDDIC Discovery</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Building "Pre-Meeting Agents" that analyze 10-K reports, recent news, and executive podcasts of prospects. 
                The agent generates a comprehensive briefing document mapped to the MEDDIC framework, identifying potential Pain, Metrics, and Champions before the first call.
              </p>
            </div>

            {/* Card 3: N8N Orchestration */}
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                  <Bot size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase">Orchestration</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Multi-Agent Orchestration (N8N)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connecting disparate business tools (Slack, HubSpot, Notion, Gmail) into coherent, self-correcting workflows. 
                Expertise in chaining LLM nodes to handle complex reasoning tasks and decision-making processes autonomously.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default AIInnovation;