import { Message } from './types';

/**
 * Sends a message directly to OpenAI API and returns the response
 * @param message - The user's message to send
 * @returns Promise<Message> - The API response
 */
export async function sendMessage(message: string): Promise<Message> {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful customer service assistant for a smartphone store called Allo Fix. Allo Fix is a company that sells smartphones and accessories they are located in Montreal, Quebec, Canada at 40 first job street. Answer in French.',
          },
          { role: 'user', content: message }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to send message');
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message) {
      throw new Error('Invalid response format from OpenAI');
    }

    return data.choices[0].message;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}