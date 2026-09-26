import type { Metadata } from "next";
import { TeamPage } from "@/components/team/team-page";

export const metadata: Metadata = {
  title: "Our Roasters & Baristas | Sombra Coffee Lounge",
  description:
    "Meet the Sombra Coffee Lounge team: master roasters, certified Q-graders, coffee sommeliers, and lounge curators.",
};

export default function Team() {
  return <TeamPage />;
}
