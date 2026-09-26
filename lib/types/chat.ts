export interface ChatPropertyCard {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: string;
  tag: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  properties?: ChatPropertyCard[];
}

export interface ChatApiResponse {
  reply: string;
  properties: ChatPropertyCard[];
}

export const CHAT_WELCOME_MESSAGE =
  "Welcome to Sombra Coffee Lounge. I am your AI Barista & Concierge. Ask me about our single-origin micro-lots, brew recipes, tasting flights, or table reservations.";
