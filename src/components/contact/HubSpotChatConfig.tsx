
import { useEffect } from 'react';

interface ChatConfig {
  welcomeMessage?: string;
  awayMessage?: string;
  theme?: 'light' | 'dark';
  position?: 'bottom-right' | 'bottom-left';
}

export const HubSpotChatConfig = ({ 
  welcomeMessage = "👋 Bonjour ! Comment puis-je vous aider avec votre logistique ?",
  awayMessage = "Nous ne sommes pas disponibles pour le moment, mais laissez-nous un message !",
  theme = 'light',
  position = 'bottom-right'
}: ChatConfig) => {
  
  useEffect(() => {
    // Configuration du chat HubSpot
    const configureHubSpotChat = () => {
      console.log('🔧 Configuration du chat HubSpot...');
      
      if (window.HubSpotConversations) {
        console.log('✅ HubSpot Conversations disponible');
        
        // Configuration des messages personnalisés selon la page
        const currentPage = window.location.pathname;
        let pageSpecificMessage = welcomeMessage;
        
        switch (currentPage) {
          case '/contact':
            pageSpecificMessage = "💬 Besoin d'aide ? Discutons de votre projet logistique !";
            break;
          case '/services':
            pageSpecificMessage = "🚚 Questions sur nos services ? Je suis là pour vous aider !";
            break;
          case '/':
            pageSpecificMessage = "👋 Découvrez comment Speed E-Log peut transformer votre logistique !";
            break;
          default:
            pageSpecificMessage = welcomeMessage;
        }
        
        // Stocker la configuration pour utilisation ultérieure
        localStorage.setItem('hubspot_chat_config', JSON.stringify({
          welcomeMessage: pageSpecificMessage,
          awayMessage,
          theme,
          position,
          page: currentPage
        }));
        
        console.log('💾 Configuration chat sauvegardée:', {
          message: pageSpecificMessage,
          page: currentPage
        });
      }
    };

    // Attendre que HubSpot soit chargé
    let attempts = 0;
    const maxAttempts = 15;
    
    const waitForHubSpot = () => {
      attempts++;
      if (window.HubSpotConversations || attempts >= maxAttempts) {
        configureHubSpotChat();
      } else {
        setTimeout(waitForHubSpot, 1000);
      }
    };

    waitForHubSpot();
  }, [welcomeMessage, awayMessage, theme, position]);

  // Fonction pour envoyer les données de pré-qualification au chat
  useEffect(() => {
    const handlePrequalificationData = () => {
      const prequalData = localStorage.getItem('prequalification_data');
      if (prequalData && window.HubSpotConversations) {
        try {
          const data = JSON.parse(prequalData);
          console.log('📤 Envoi des données de pré-qualification au chat:', data);
          
          // Créer un message de contexte pour l'équipe
          const contextMessage = `Prospect pré-qualifié:
• Nom: ${data.nom}
• Entreprise: ${data.entreprise}
• Secteur: ${data.secteur || 'Non spécifié'}
• Budget: ${data.budget || 'Non défini'}
• Besoins: ${data.besoins}`;
          
          localStorage.setItem('hubspot_prospect_context', contextMessage);
          
        } catch (error) {
          console.error('❌ Erreur traitement données pré-qualification:', error);
        }
      }
    };

    // Écouter les changements dans le localStorage
    window.addEventListener('storage', handlePrequalificationData);
    handlePrequalificationData(); // Vérifier immédiatement
    
    return () => {
      window.removeEventListener('storage', handlePrequalificationData);
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
};
