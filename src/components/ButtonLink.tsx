import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-accent",
  secondary:
    "bg-transparent text-text border border-border hover:border-text/40 hover:bg-bg-elevated",
  ghost:
    "bg-transparent text-muted border border-transparent hover:text-text",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: ButtonLinkProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm font-medium transition-colors duration-200",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isAbsolute =
    Boolean(href) &&
    (external || href.startsWith("http") || href.startsWith("mailto:"));

  if (isAbsolute) {
    return (
      <a
        href={href}
        className={classes}
        target={external || href.startsWith("http") ? "_blank" : undefined}
        rel={
          external || href.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} download={download || undefined}>
      {children}
    </Link>
  );
}
