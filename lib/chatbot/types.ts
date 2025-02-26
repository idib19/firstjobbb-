/**
 * Represents a chat message
 */
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Represents the current chat session state
 */
export interface ChatSession {
  messages: Message[];
  isLoading: boolean;
  error: Error | null;
}

/**
 * Represents the API response format
 */
export interface ChatResponse {
  message: string;
  error?: string;
}

/**
 * Configuration for the chat API
 */
export interface ChatConfig {
  apiEndpoint: string;
  headers?: Record<string, string>;
}