'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { sendMessage } from '@/lib/chatbot/api';
import { useChatbot } from './chatbot-provider';
import { Message } from '@/lib/chatbot/types';

export function ChatbotModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { messages, addMessage } = useChatbot();
  const [input, setInput] = useState('');

  // Use React Query for handling the API call
  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: (data) => {
      // Add the assistant's response to the chat
      addMessage({
        role: 'assistant',
        content: data.message,
      });
    },
    onError: (error) => {
      // Handle error appropriately
      console.error('Échec de la réponse:', error);
      addMessage({
        role: 'assistant',
        content: 'Désolé, j\'ai rencontré une erreur. Veuillez réessayer.',
      });
    },
  });

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message immediately
    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    };
    addMessage(userMessage);
    setInput('');

    // Send message to API
    mutation.mutate(userMessage.content);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Assistant TechFix Pro</DialogTitle>
        <div className="flex flex-col h-[500px]">
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full p-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`mb-4 ${
                    message.role === 'assistant'
                      ? 'text-left'
                      : 'text-right'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.role === 'assistant'
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {mutation.isPending && (
                <div className="text-left mb-4">
                  <div className="inline-block p-3 rounded-lg bg-secondary text-secondary-foreground">
                    <span className="animate-pulse">...</span>
                  </div>
                </div>
              )}
            </ScrollArea>
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tapez votre message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                disabled={mutation.isPending}
              />
              <Button 
                onClick={handleSend}
                disabled={mutation.isPending}
              >
                Envoyer
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}