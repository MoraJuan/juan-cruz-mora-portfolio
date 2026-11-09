const SCROLL_NAV_CLASS = "scroll-nav";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Reliable in-page hash scroll.
 * Temporarily disables snap so it can't fight the animation; sections use
 * scroll-margin-top for the sticky header (no double offset).
 */
export function scrollToHash(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  const root = document.documentElement;
  root.classList.add(SCROLL_NAV_CLASS);

  const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
  target.scrollIntoView({ behavior, block: "start" });

  if (window.location.hash !== `#${id}`) {
    history.pushState(null, "", `#${id}`);
  } else {
    history.replaceState(null, "", `#${id}`);
  }

  window.setTimeout(
    () => root.classList.remove(SCROLL_NAV_CLASS),
    behavior === "smooth" ? 900 : 80,
  );

  return true;
}

export function handleHashLinkClick(
  event: {
    preventDefault: () => void;
    currentTarget: EventTarget & {
      getAttribute: (n: string) => string | null;
    };
  },
  after?: () => void,
) {
  const href = event.currentTarget.getAttribute("href");
  if (!href?.startsWith("#") || href.length < 2) return;

  event.preventDefault();
  scrollToHash(href);
  after?.();
}
