import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function ExternalLink({
  href,
  children,
  className = "",
  showIcon = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-sm text-text transition-colors duration-200 hover:text-accent ${className}`}
    >
      <span className="underline decoration-border underline-offset-4 hover:decoration-accent/50">
        {children}
      </span>
      {showIcon ? <ArrowUpRight className="size-3.5 shrink-0" aria-hidden /> : null}
    </a>
  );
}
