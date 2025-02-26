import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ChatbotProvider } from '@/components/chatbot/chatbot-provider';
import { ChatbotButton } from '@/components/chatbot/chatbot-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechFix Pro - Smartphones & Réparations',
  description: 'Votre boutique unique pour smartphones, accessoires et réparations professionnelles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ChatbotProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <ChatbotButton />
            </div>
            <Toaster />
          </ChatbotProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}