'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useChatbot } from './chatbot-provider';

export function ChatbotButton() {
  const { openChat } = useChatbot();
  
  return (
    <Button
      onClick={openChat}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-shadow"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}