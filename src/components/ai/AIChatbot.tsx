import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  leadScore?: number;
}

interface AIChatbotProps {
  onLeadQualified?: (score: number) => void;
}

export const AIChatbot: React.FC<AIChatbotProps> = ({ onLeadQualified }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Bonjour ! Je suis l\'assistant logistique de Speed E Log. Comment puis-je vous aider à optimiser votre supply chain ?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadScore, setLeadScore] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const predefinedResponses = {
    'fulfillment': 'Notre service de fulfillment prend en charge la réception, le stockage, la préparation et l\'expédition de vos commandes. Quel est votre volume mensuel actuel ?',
    'prix': 'Nos tarifs débutent à 6,50€ TTC par commande expédiée. Voulez-vous un devis personnalisé ? Je peux vous mettre en relation avec un expert.',
    'intégration': 'Nous nous intégrons avec 40+ plateformes e-commerce comme Shopify, WooCommerce, PrestaShop. Quelle plateforme utilisez-vous ?',
    'délai': 'Nos délais de préparation sont de 24-48h en moyenne. Pour quelle zone géographique expédiez-vous ?'
  };

  const calculateLeadScore = (message: string): number => {
    let score = 0;
    const keywords = {
      'devis': 20,
      'prix': 15,
      'commandes/mois': 25,
      'problème': 10,
      'urgence': 15,
      'budget': 20,
      'e-commerce': 10,
      'shopify': 15,
      'woocommerce': 15
    };

    Object.entries(keywords).forEach(([keyword, points]) => {
      if (message.toLowerCase().includes(keyword)) {
        score += points;
      }
    });

    return score;
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (message.includes(keyword)) {
        return response;
      }
    }

    if (message.includes('devis') || message.includes('contact')) {
      return 'Parfait ! Je vais vous mettre en relation avec un expert. Pouvez-vous me donner votre email et votre volume mensuel de commandes ?';
    }

    return 'Je comprends votre question. Pour vous donner la meilleure réponse, puis-je connaître votre secteur d\'activité et votre volume de commandes mensuel ?';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Calculate lead score
    const messageScore = calculateLeadScore(inputMessage);
    const newLeadScore = leadScore + messageScore;
    setLeadScore(newLeadScore);

    // Simulate API call delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateBotResponse(inputMessage),
        timestamp: new Date(),
        leadScore: newLeadScore
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);

      // Trigger lead qualification if score is high enough
      if (newLeadScore >= 50 && onLeadQualified) {
        onLeadQualified(newLeadScore);
        toast({
          title: 'Lead qualifié détecté !',
          description: `Score: ${newLeadScore}/100 - Transfert vers un expert recommandé.`,
        });
      }
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="w-full h-full flex flex-col shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  <div>
                    <h3 className="font-semibold">Assistant Speed E Log</h3>
                    <p className="text-xs opacity-90">En ligne</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`p-2 rounded-full ${message.type === 'user' ? 'bg-primary' : 'bg-muted'}`}>
                          {message.type === 'user' ? (
                            <User className="h-3 w-3 text-primary-foreground" />
                          ) : (
                            <Bot className="h-3 w-3 text-muted-foreground" />
                          )}
                        </div>
                        <div className={`p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          {message.leadScore && message.leadScore >= 50 && (
                            <div className="mt-2 text-xs opacity-75">
                              🎯 Score qualité: {message.leadScore}/100
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-2">
                        <div className="p-2 rounded-full bg-muted">
                          <Bot className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <div className="p-3 rounded-lg bg-muted">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Tapez votre message..."
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                {leadScore > 0 && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    Score de qualification: {leadScore}/100
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};