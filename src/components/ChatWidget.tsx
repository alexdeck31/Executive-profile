import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    // Show proactive prompt after 5 seconds
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Handle open state: Hide prompt when opened
  useEffect(() => {
    if (isOpen) {
      setShowPrompt(false);
    }
  }, [isOpen]);

  // Initialize n8n chat
  useEffect(() => {
    if (initialized.current) return;

    createChat({
      webhookUrl: 'https://n8n.alexandredurand.cloud/webhook/6fc3bcc6-a413-4729-8d42-198fa41c2698/chat',
      target: '#n8n-chat-container',
      mode: 'fullscreen',
      showWelcomeScreen: false,
      initialMessages: [
        'Hello! 👋',
        'Ask me anything about Alexandre Durand.'
      ],
      i18n: {
        en: {
          title: "Alexandre's AI Assistant",
          subtitle: "Ask me anything",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your message...",
        },
      },
    });

    initialized.current = true;
  }, []);

  return (
    <>
      <style>{`
        :root {
          --chat--color-primary: #06b6d4;
          --chat--color-primary-shade-50: #0891b2;
          --chat--color-primary-shade-100: #0e7490;
          --chat--color-secondary: #27272a;
          --chat--color-secondary-shade-50: #3f3f46;
          --chat--color-light-shade-50: #18181b;
          --chat--color-light-shade-100: #27272a;
          --chat--color-dark-shade-50: #94a3b8;
          --chat--color-dark-shade-100: #ffffff;
          --chat--color-background: #18181b;
          --chat--color-typing-indicator: #06b6d4;
          --chat--message-text-color: #f1f5f9;
          --chat--header-background-color: #09090b;
          --chat--font-family: 'Inter', sans-serif;
          --chat--border-radius: 1rem;
        }
        
        .n8n-chat-layout {
          background-color: #18181b !important;
        }
        .n8n-chat-header {
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .n8n-chat-input-container {
          border-top: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>

      {/* Floating Action Button Container */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Proactive Notification Prompt */}
        <div 
          className={`
            pointer-events-auto bg-white text-zinc-900 px-4 py-3 rounded-2xl rounded-br-none shadow-xl border border-white/20 relative
            transform transition-all duration-500 ease-out origin-bottom-right max-w-[250px]
            ${showPrompt && !isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75 pointer-events-none'}
          `}
        >
          <button 
            onClick={() => setShowPrompt(false)}
            className="absolute -top-2 -left-2 bg-zinc-900 text-white rounded-full p-0.5 shadow-md hover:bg-zinc-700"
          >
            <X size={12} />
          </button>
          <p className="text-sm font-medium leading-tight">
            Curious about my Sales Strategy? <br />
            <span className="text-cyan-600 font-bold">Ask me anything!</span> 👇
          </p>
        </div>

        {/* Text Label */}
        <div 
          className={`
            pointer-events-auto bg-white/10 backdrop-blur-lg border border-white/20 text-white px-5 py-3 rounded-2xl rounded-br-sm shadow-2xl
            transform transition-all duration-500 ease-out origin-bottom-right flex items-center gap-3
            ${isOpen || showPrompt ? 'opacity-0 translate-y-4 scale-75 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'}
          `}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-bold text-sm tracking-wide">Alexandre's IA assistant</span>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            pointer-events-auto
            w-16 h-16 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(6,182,212,0.7)]
            ${isOpen ? 'bg-zinc-900 border border-white/10 text-white rotate-90' : 'bg-gradient-to-tr from-cyan-600 to-blue-600 text-white rotate-0'}
          `}
          aria-label="Toggle Chat"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={32} className="fill-white/20" />}
        </button>
      </div>

      {/* Chat Window Container */}
      <div
        className={`fixed bottom-28 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-[9998] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        <div id="n8n-chat-container" className="w-full h-full relative"></div>
      </div>
    </>
  );
};

export default ChatWidget;