import { ChatResponse } from './types';

/**
 * Sends a message to the chat API and returns the response
 * @param message - The user's message to send
 * @returns Promise<ChatResponse> - The API response
 */
export async function sendMessage(message: string): Promise<ChatResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send message');
    }

    const data = await response.json();
    return data as ChatResponse;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}