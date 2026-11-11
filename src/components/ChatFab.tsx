"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

const TEASER_KEY = "morai-fab-teaser-v2";
const TEASER_MS = 7000;
const TEASER_EXIT_MS = 720;

export function ChatFab() {
  const { t } = useLocale();
  const [phase, setPhase] = useState<"hidden" | "in" | "out">("hidden");

  useEffect(() => {
    let allowed = true;
    try {
      allowed = sessionStorage.getItem(TEASER_KEY) !== "1";
    } catch {
      allowed = true;
    }
    if (!allowed) return;

    setPhase("in");
    const hideTimer = window.setTimeout(() => setPhase("out"), TEASER_MS);
    const doneTimer = window.setTimeout(() => {
      setPhase("hidden");
      try {
        sessionStorage.setItem(TEASER_KEY, "1");
      } catch {
        /* ignore */
      }
    }, TEASER_MS + TEASER_EXIT_MS);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[60] flex max-w-[min(100vw-1.5rem,22rem)] items-end gap-2.5 sm:bottom-6 sm:right-6">
      {phase !== "hidden" ? (
        <div
          className={`chat-fab-teaser pointer-events-none mb-1 max-w-[16.5rem] rounded-2xl rounded-br-md border border-border bg-bg-elevated px-3.5 py-2.5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.45)] sm:max-w-[18rem] ${
            phase === "out" ? "chat-fab-teaser--out" : "chat-fab-teaser--in"
          }`}
          role="status"
        >
          <p className="text-[0.82rem] leading-snug text-text">{t.askAi.fabTeaser}</p>
        </div>
      ) : null}

      <Link
        href="/chat"
        aria-label={t.askAi.openChatAria}
        className="pointer-events-auto inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_28px_-8px_rgba(15,50,63,0.55)] transition-transform duration-200 hover:scale-105 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--focus)] sm:size-16"
      >
        <MessageCircle className="size-7" strokeWidth={1.75} aria-hidden />
      </Link>
    </div>
  );
}
