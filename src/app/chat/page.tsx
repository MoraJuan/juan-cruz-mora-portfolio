import type { Metadata } from "next";
import { AskAi } from "@/sections/AskAi";

export const metadata: Metadata = {
  title: "MorAI",
  description:
    "Chat con MorAI sobre el perfil de Juan Cruz Mora: quién es, proyectos y cómo trabaja con IA.",
  alternates: {
    canonical: "/chat",
  },
};

export default function ChatPage() {
  return <AskAi />;
}
