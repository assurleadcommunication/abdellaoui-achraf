import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI | null {
  const apiKey = 
    (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || 
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GEMINI_API_KEY) || 
    '';

  if (!apiKey) {
    return null;
  }

  if (!aiClient) {
    try {
      aiClient = new GoogleGenAI({ apiKey });
    } catch (err) {
      console.error("Failed to initialize GoogleGenAI:", err);
      return null;
    }
  }

  return aiClient;
}

export const chatWithAssistant = async (message: string, history: { role: string, parts: { text: string }[] }[]) => {
  const ai = getAIClient();
  
  if (!ai) {
    return "L'assistant IA est prêt. Pour activer les réponses intelligentes en direct sur Vercel, vous pouvez ajouter la variable d'environnement GEMINI_API_KEY ou VITE_GEMINI_API_KEY dans les paramètres de votre projet Vercel (Settings > Environment Variables).";
  }

  try {
    const model = "gemini-2.5-flash";
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: `Tu es l'assistant virtuel intelligent d'Assurances Touzini, Agent Général AXA Assurances au Maroc. 
        Ton but est d'aider les clients, répondre à leurs questions sur les assurances (Auto, Habitation, Santé, Prévoyance, Professionnelle, Retraite) et les encourager à demander un devis ou prendre rendez-vous.
        
        Contexte important :
        - Agence : Assurances Touzini - Agent Général AXA Assurances Maroc.
        - Localisation : 123 Boulevard Mohammed V, Casablanca.
        - Services : Auto, Habitation, Santé (avec Tiers Payant), Prévoyance, Pro, Retraite.
        - Avantages : Devis en 24h, Assistance 24/7, Expertise et accompagnement personnalisé.
        - WhatsApp : Disponible pour contact rapide.
        
        Directives de réponse :
        - Sois professionnel, courtois, et rassurant.
        - Utilise le tutoiement ou le vouvoiement selon le ton du client (préfère le vouvoiement par défaut).
        - Si on te demande des prix précis, explique que cela dépend du profil et propose de remplir le formulaire de devis ou de laisser un numéro de téléphone pour un rappel.
        - Oriente les clients vers les simulateurs du site si nécessaire.
        - Mentionne qu'Assurances Touzini est basée au Maroc et connaît parfaitement les spécificités locales.`,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "Bonjour ! Je suis l'assistant AXA Touzini, comment puis-je vous aider ?";
  } catch (error) {
    console.error("Error in chatWithAssistant:", error);
    return "Une erreur est survenue avec l'assistant. Vous pouvez également nous contacter directement via WhatsApp ou téléphone.";
  }
};
