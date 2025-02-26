import { NextResponse } from 'next/server';
import { Message } from '@/lib/chatbot/types';

// Placeholder responses for testing
const mockResponses = [
  "Je comprends que vous vous intéressez à nos produits. Comment puis-je vous aider aujourd'hui ?",
  "C'est une excellente question sur nos services. Permettez-moi de vous aider.",
  "Je peux certainement vous aider avec des informations sur nos services de réparation de téléphone.",
  "Souhaitez-vous en savoir plus sur nos derniers modèles de smartphones ?",
  "Je peux vous aider à trouver les accessoires parfaits pour votre appareil.",
];

export async function POST(request: Request) {
  try {
    // Parse the incoming request
    const body = await request.json();
    const { message } = body as { message: string };

    // Simulate API processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Get a random response from the mock responses
    const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];

    // Return the mock response
    return NextResponse.json({
      message: response,
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Échec du traitement du message' },
      { status: 500 }
    );
  }
}