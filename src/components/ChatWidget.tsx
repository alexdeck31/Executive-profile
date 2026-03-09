import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    // Show prompt after 5 seconds
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide prompt if chat is opened
    if (isOpen) {
      setShowPrompt(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (initialized.current) return;

    createChat({
      webhookUrl: 'https://n8n.alexandredurand.cloud/webhook/6fc3bcc6-a413-4729-8d42-198fa41c2698/chat',
      target: '#n8n-chat-container',
      mode: 'fullscreen',
      showWelcomeScreen: false,
      initialMessages: [
        'Hello! 👋',
        'I am here to answer any questions about Alexandre\'s experience and expertise.'
      ],
      i18n: {
        en: {
          title: "AI Assistant",
          subtitle: "Ask about Alexandre's profile",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your message...",
          closeButtonTooltip: "Close Chat",
        },
      },
    });

    initialized.current = true;
  }, []);

  return (
    <>
      <style>{`
        :root {
          /* Corrected N8N Chat Variables based on source */
          
          /* Header */
          --chat--header--background: #09090b !important;
          --chat--header--color: #ffffff !important;
          
          /* Body / Main Window Area */
          --chat--body--background: #18181b !important;
          --chat--window--background: #18181b !important;
          
          /* Footer */
          --chat--footer--background: #18181b !important;
          --chat--footer--color: #ffffff !important;
          
          /* Input Area */
          --chat--input--background: #09090b !important;
          --chat--input--text-color: #ffffff !important;
          --chat--input--placeholder-color: #71717a !important;
          
          /* Messages */
          --chat--message--bot--background: #27272a !important;
          --chat--message--bot--color: #f4f4f5 !important;
          
          --chat--message--user--background: #06b6d4 !important;
          --chat--message--user--color: #ffffff !important;
          
          /* General Colors - Overriding these helps if specific vars are missed */
          --chat--color-light: #e4e4e7 !important; /* Text color usually */
          --chat--color-dark: #ffffff !important; /* Inverted for dark mode */
        }

        /* Target the container specifically */
        #n8n-chat-container {
          --chat--body--background: #18181b;
          --chat--header--background: #09090b;
          --chat--input--background: #09090b;
          background-color: #18181b;
        }

        /* Deep overrides for specific classes found in source */
        .chat-layout .chat-body {
          background: #18181b !important;
        }
        .chat-layout .chat-header {
          background: #09090b !important;
          color: #ffffff !important;
          border-bottom: 1px solid rgba(255,255,255,0.1) !important;
        }
        .chat-layout .chat-footer {
          background: #18181b !important;
          color: #ffffff !important;
        }
        .chat-inputs textarea {
          background: #27272a !important;
          color: #ffffff !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
        }
        .chat-inputs {
          background: #09090b !important;
          border-top: 1px solid rgba(255,255,255,0.1) !important;
        }
      `}</style>

      {/* Floating Action Button Container */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
        
        {/* Proactive Notification Prompt */}
        <div 
          className={`
            bg-white text-zinc-900 px-4 py-3 rounded-2xl rounded-br-none shadow-xl border border-white/20 relative
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
            bg-white/10 backdrop-blur-lg border border-white/20 text-white px-5 py-3 rounded-2xl rounded-br-sm shadow-2xl
            transform transition-all duration-500 ease-out origin-bottom-right flex items-center gap-3 cursor-pointer
            ${isOpen || showPrompt ? 'opacity-0 translate-y-4 scale-75 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'}
          `}
          onClick={() => setIsOpen(true)}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-bold text-sm tracking-wide">Alexandre's AI Assistant</span>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-16 h-16 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(6,182,212,0.7)] z-50
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
        <div id="n8n-chat-container" className="w-full h-full"></div>
      </div>
    </>
  );
};

export default ChatWidget;