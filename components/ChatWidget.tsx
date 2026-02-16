import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      text: 'Hello! 👋',
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: 'welcome-2',
      text: 'Ask me anything about Alexandre Durand.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [sessionId, setSessionId] = useState('');

  // Generate or retrieve session ID
  useEffect(() => {
    let storedSession = localStorage.getItem('n8n_chat_session');
    if (!storedSession) {
      storedSession = crypto.randomUUID();
      localStorage.setItem('n8n_chat_session', storedSession);
    }
    setSessionId(storedSession);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isTyping]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('https://n8n.alexandredurand.cloud/webhook/6fc3bcc6-a413-4729-8d42-198fa41c2698/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'sendMessage',
          sessionId: sessionId,
          chatInput: userMessage.text
        })
      });

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      
      // Create a placeholder bot message that we will stream content into
      const botMessageId = 'bot-' + Date.now();
      setMessages(prev => [...prev, {
        id: botMessageId,
        text: '',
        sender: 'bot',
        timestamp: new Date()
      }]);

      let fullBotText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        
        // Keep the last chunk if it's incomplete
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.trim()) continue;
          
          try {
            const data = JSON.parse(line);
            
            // Handle N8N AI Agent stream format
            if (data.type === 'item' && data.content) {
              fullBotText += data.content;
              
              // Update the specific message in state
              setMessages(prev => prev.map(msg => 
                msg.id === botMessageId 
                  ? { ...msg, text: fullBotText }
                  : msg
              ));
            }
          } catch (err) {
            console.warn('Failed to parse stream chunk:', line);
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        id: 'error-' + Date.now(),
        text: "Sorry, I am having trouble connecting to the server. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Action Button Container */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Text Label - Visible when closed */}
        <div 
          className={`
            pointer-events-auto bg-white/10 backdrop-blur-lg border border-white/20 text-white px-5 py-3 rounded-2xl rounded-br-sm shadow-2xl
            transform transition-all duration-500 ease-out origin-bottom-right flex items-center gap-3
            ${isOpen ? 'opacity-0 translate-y-4 scale-75 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'}
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

      {/* Chat Window */}
      <div
        className={`fixed bottom-28 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-[9998] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 bg-zinc-950 border-b border-white/5 flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Alexandre's IA assistant
            </h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.sender === 'user' ? 'bg-cyan-500/20 text-cyan-500' : 'bg-zinc-800 text-slate-400'
              }`}>
                {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-cyan-600 text-white rounded-tr-sm'
                    : 'bg-zinc-800 text-slate-200 rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
             <div className="flex items-start gap-3">
               <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-slate-400">
                 <Bot size={14} />
               </div>
               <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-sm">
                 <Loader2 size={16} className="animate-spin text-cyan-500" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-4 bg-zinc-950 border-t border-white/5 flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-zinc-900 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-slate-600"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;