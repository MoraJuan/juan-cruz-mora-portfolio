export const askAiQuestionIds = [
  "who",
  "projects",
  "ai-work",
  "stack",
  "safeshot",
  "available",
] as const;

export type AskAiQuestionId = (typeof askAiQuestionIds)[number];

/** Base pacing per answer — longer topics linger more in "thinking". */
export const askAiThinkingTiming: Record<
  AskAiQuestionId,
  { stepDelayMs: number; settleAfterMs: number }
> = {
  who: { stepDelayMs: 520, settleAfterMs: 620 },
  projects: { stepDelayMs: 780, settleAfterMs: 1100 },
  "ai-work": { stepDelayMs: 920, settleAfterMs: 1250 },
  stack: { stepDelayMs: 580, settleAfterMs: 720 },
  safeshot: { stepDelayMs: 860, settleAfterMs: 1050 },
  available: { stepDelayMs: 460, settleAfterMs: 540 },
};

export function thinkingDelaysFor(id: AskAiQuestionId) {
  const base = askAiThinkingTiming[id];
  const jitter = () => 0.82 + Math.random() * 0.36;
  return {
    stepDelayMs: Math.round(base.stepDelayMs * jitter()),
    settleAfterMs: Math.round(base.settleAfterMs * jitter()),
  };
}
