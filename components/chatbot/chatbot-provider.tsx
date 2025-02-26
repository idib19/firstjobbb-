'use client';

import { createContext, useContext, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChatbotModal } from './chatbot-modal';
import { Message } from '@/lib/chatbot/types';

interface ChatbotContextType {
  openChat: () => void;
  messages: Message[];
  addMessage: (message: Message) => void;
}

const ChatbotContext = createContext<ChatbotContextType>({
  openChat: () => {},
  messages: [],
  addMessage: () => {},
});

export const useChatbot = () => useContext(ChatbotContext);

// Create a client
const queryClient = new QueryClient();

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
    },
  ]);

  const openChat = () => setIsOpen(true);
  
  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ChatbotContext.Provider value={{ openChat, messages, addMessage }}>
        {children}
        <ChatbotModal open={isOpen} onOpenChange={setIsOpen} />
      </ChatbotContext.Provider>
    </QueryClientProvider>
  );
}