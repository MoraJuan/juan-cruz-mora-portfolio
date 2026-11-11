"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/components/LocaleProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import ThoughtLine from "@/components/ThoughtLine";
import {
  askAiQuestionIds,
  thinkingDelaysFor,
  type AskAiQuestionId,
} from "@/data/ask-ai";

function MorAiAvatar({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src="/morai.png"
        alt=""
        width={size}
        height={size}
        className="size-full object-cover"
        priority={size >= 56}
      />
    </span>
  );
}

type ChatTurn = {
  id: string;
  questionId: AskAiQuestionId;
  question: string;
  answer: string;
  steps: string[];
  thoughtSeconds: number;
};

export function AskAi() {
  const { t } = useLocale();
  const [turns, setTurns] = useState<ChatTurn[]>([]);
  const [pendingId, setPendingId] = useState<AskAiQuestionId | null>(null);
  const [working, setWorking] = useState(false);
  const [liveSteps, setLiveSteps] = useState<string[]>([]);
  const timersRef = useRef<number[]>([]);
  const threadRef = useRef<HTMLDivElement>(null);
  const thinkingStartedAtRef = useRef(0);

  const clearTimers = () => {
    for (const id of timersRef.current) window.clearTimeout(id);
    timersRef.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [turns, pendingId, liveSteps, working]);

  const askedIds = new Set(turns.map((turn) => turn.questionId));
  if (pendingId) askedIds.add(pendingId);
  const remaining = askAiQuestionIds.filter((id) => !askedIds.has(id));

  const ask = (id: AskAiQuestionId) => {
    if (working || askedIds.has(id)) return;
    clearTimers();

    const question = t.askAi.questions[id];
    const { stepDelayMs, settleAfterMs } = thinkingDelaysFor(id);
    thinkingStartedAtRef.current = performance.now();
    setPendingId(id);
    setLiveSteps([]);
    setWorking(true);

    question.steps.forEach((step, index) => {
      const timer = window.setTimeout(() => {
        setLiveSteps((prev) => [...prev, step]);
        if (index === question.steps.length - 1) {
          const settleTimer = window.setTimeout(() => {
            const thoughtSeconds =
              (performance.now() - thinkingStartedAtRef.current) / 1000;
            setWorking(false);
            setTurns((prev) => [
              ...prev,
              {
                id: `${id}-${Date.now()}`,
                questionId: id,
                question: question.label,
                answer: question.answer,
                steps: question.steps,
                thoughtSeconds,
              },
            ]);
            setPendingId(null);
            setLiveSteps([]);
          }, settleAfterMs);
          timersRef.current.push(settleTimer);
        }
      }, stepDelayMs * (index + 1));
      timersRef.current.push(timer);
    });
  };

  const clearChat = () => {
    clearTimers();
    setTurns([]);
    setPendingId(null);
    setWorking(false);
    setLiveSteps([]);
  };

  const pendingQuestion = pendingId ? t.askAi.questions[pendingId] : null;

  return (
    <div
      className="relative z-10 flex h-dvh min-h-dvh w-full flex-col bg-bg-elevated/90"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold tracking-tight text-text sm:text-xl">
            {t.askAi.title}
          </h1>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          {turns.length > 0 || pendingId ? (
            <button
              type="button"
              onClick={clearChat}
              disabled={working}
              className="hidden rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-text/30 hover:text-text disabled:opacity-50 sm:inline-flex"
            >
              {t.askAi.clearChat}
            </button>
          ) : null}
          <Link
            href="/"
            className="rounded-full border border-border bg-bg px-3.5 py-2 text-sm text-text transition-colors hover:border-text/35"
          >
            {t.askAi.viewPortfolio}
          </Link>
        </div>
      </header>

      <div
        ref={threadRef}
        className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto overscroll-contain px-4 py-5 sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-5">
          {turns.length === 0 && !pendingId ? (
            <div className="my-auto space-y-6 py-6">
              <MorAiAvatar size={56} className="mx-auto" />
              <p className="mx-auto max-w-xl text-center text-[1.08rem] leading-relaxed text-text">
                {t.askAi.greeting}
              </p>
              <div className="mx-auto grid w-full max-w-2xl gap-2.5 sm:grid-cols-2">
                {askAiQuestionIds.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => ask(id)}
                    className="rounded-2xl border border-border bg-bg px-4 py-3.5 text-left text-sm leading-snug text-text transition-colors hover:border-accent/50 hover:bg-accent-soft"
                  >
                    {t.askAi.questions[id].label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {turns.map((turn) => (
            <div key={turn.id} className="space-y-4">
              <div className="flex justify-end">
                <div className="max-w-[min(100%,40rem)] rounded-3xl rounded-br-lg bg-accent px-4 py-3 text-sm leading-relaxed text-white sm:text-[0.95rem]">
                  <p className="mb-1 text-[0.7rem] text-white/70">{t.askAi.youLabel}</p>
                  {turn.question}
                </div>
              </div>

              <div className="flex min-w-0 justify-start gap-3">
                <MorAiAvatar size={36} className="mt-1" />
                <div className="min-w-0 w-full max-w-[min(100%,42rem)] space-y-3 rounded-3xl rounded-bl-lg border border-border bg-bg px-4 py-3.5">
                  <ThoughtLine
                    working={false}
                    steps={turn.steps}
                    elapsed={turn.thoughtSeconds}
                    label={t.askAi.thinkingLabel}
                    doneLabel={t.askAi.doneLabel}
                    glyph="sparkle"
                    fontSize={14}
                    settleDuration={350}
                    settleBlur={2}
                    collapsible
                    collapseOnSettle
                    showTimer
                    className="w-full max-w-full"
                    color="var(--text)"
                    glyphColor="var(--accent)"
                  />
                  <div>
                    <p className="mb-2 text-[0.7rem] text-muted">
                      {t.askAi.assistantLabel}
                    </p>
                    <p className="text-[0.98rem] leading-relaxed text-text sm:text-[1.02rem]">
                      {turn.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {pendingId && pendingQuestion ? (
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="max-w-[min(100%,40rem)] rounded-3xl rounded-br-lg bg-accent px-4 py-3 text-sm leading-relaxed text-white sm:text-[0.95rem]">
                  <p className="mb-1 text-[0.7rem] text-white/70">{t.askAi.youLabel}</p>
                  {pendingQuestion.label}
                </div>
              </div>

              <div className="flex min-w-0 justify-start gap-3">
                <MorAiAvatar size={36} className="mt-1" />
                <div className="min-w-0 w-full max-w-[min(100%,42rem)] rounded-3xl rounded-bl-lg border border-border bg-bg px-4 py-3.5">
                  <ThoughtLine
                    key={pendingId}
                    working={working}
                    steps={liveSteps}
                    label={t.askAi.thinkingLabel}
                    doneLabel={t.askAi.doneLabel}
                    glyph="sparkle"
                    fontSize={14}
                    breathPeriod={1.6}
                    breathDepth={0.45}
                    settleDuration={350}
                    settleBlur={2}
                    collapsible
                    collapseOnSettle
                    showTimer
                    className="w-full max-w-full"
                    color="var(--text)"
                    glyphColor="var(--accent)"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="shrink-0 border-t border-border bg-bg/80 px-4 py-3.5 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-4xl">
          {remaining.length > 0 && !working ? (
            <div className="space-y-2.5">
              <p className="text-xs text-muted">
                {turns.length === 0 ? t.askAi.prompt : t.askAi.askAnother}
              </p>
              <div className="flex flex-wrap gap-2">
                {remaining.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => ask(id)}
                    className="rounded-full border border-border bg-bg-elevated px-3.5 py-2 text-left text-sm text-text transition-colors hover:border-accent/45 hover:bg-accent-soft"
                  >
                    {t.askAi.questions[id].label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted">
              {working ? t.askAi.thinkingLabel : t.askAi.composerHint}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
