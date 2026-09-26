import type {
  AboutCtaContent,
  AboutHeroContent,
  AboutMarket,
  AboutMission,
  AboutValue,
  TeamMember,
} from "@/lib/types/about";

export const aboutHero: AboutHeroContent = {
  eyebrow: "About Sombra Coffee Lounge",
  title: "An Artisanal Roastery & Sensory Sanctuary",
  description:
    "Crafted to celebrate shade-grown single-origin micro-lots, infrared roasting precision, and tranquil acoustic architecture.",
  image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80",
  imageAlt: "Artisanal coffee lounge interior with warm ambient lighting",
  primaryCta: { label: "Reserve a Table", href: "/#booking" },
  secondaryCta: { label: "Brew Calculator", href: "/#calculator" },
};

export const aboutMission: AboutMission = {
  eyebrow: "Our Heritage",
  title: "Where shade nurtures complex flavor",
  lead:
    "Sombra means shadow or shade. We source strictly from biodiverse, shade-grown micro-lots cultivated above 1,800 meters elevation.",
  body:
    "Shade-grown coffee cherries mature slowly under canopy trees, developing higher natural sucrose and exquisite floral acids. Combined with in-house infrared roasting and calibrated mineral water, every cup honors its terroir.",
  image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1400&q=80",
  imageAlt: "Master barista preparing artisanal pour over coffee",
};

export const aboutValues: AboutValue[] = [
  {
    id: "1",
    title: "Shade-Grown Terroir",
    description:
      "Direct relationships with agroforestry farmers cultivating micro-lots beneath native rainforest canopies.",
  },
  {
    id: "2",
    title: "Roasting Precision",
    description:
      "Small-batch infrared drum roasting engineered to highlight delicate aromatic volatiles without smoke taint.",
  },
  {
    id: "3",
    title: "Acoustic Sanctuary",
    description:
      "Intentional architectural acoustic dampening so conversations and thoughts flow without intrusive cafe noise.",
  },
  {
    id: "4",
    title: "Sensory Education",
    description:
      "Guided cupping flights and open dialogue connecting coffee enthusiasts directly with origins and craft methods.",
  },
];

export const aboutTeam: TeamMember[] = [
  {
    id: "1",
    name: "Mateo Silva",
    role: "Founder & Master Roaster",
    bio: "14+ years traveling origin farms across Antioquia, Yirgacheffe, and Boquete to curate micro-lot harvests.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop&crop=faces",
    email: "mateo@sombracoffee.com",
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Head Barista & Sensory Lead",
    bio: "Certified Q-Grader with expertise in water mineral balancing and single-origin pour over protocols.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=faces",
    email: "elena@sombracoffee.com",
  },
  {
    id: "3",
    name: "Kenji Takahashi",
    role: "Extraction & Slow Drip Curator",
    bio: "Specializes in 12-hour Kyoto slow cold drip towers and precision roast profile thermodynamics.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&crop=faces",
    email: "kenji@sombracoffee.com",
  },
];

export const aboutMarkets: AboutMarket[] = [
  { id: "1", name: "Huila, Colombia", focus: "High-Altitude Pink Bourbon" },
  { id: "2", name: "Yirgacheffe, Ethiopia", focus: "Washed Heirloom Florals" },
  { id: "3", name: "Boquete, Panama", focus: "Shade Geisha Reserve" },
  { id: "4", name: "Antigua, Guatemala", focus: "Volcanic Loam Bourbon" },
  { id: "5", name: "Sidama, Ethiopia", focus: "Anaerobic Natural Micro-Lot" },
  { id: "6", name: "Tarrazu, Costa Rica", focus: "Yellow Honey Process" },
];

export const aboutCta: AboutCtaContent = {
  eyebrow: "Sensory Tastings",
  title: "Book an Omakase Coffee Tasting Flight",
  description:
    "Experience a 60-minute curated flight through five single-origin micro-lots guided by our master roasters.",
  buttonLabel: "Reserve Tasting Experience",
  href: "/#booking",
};
