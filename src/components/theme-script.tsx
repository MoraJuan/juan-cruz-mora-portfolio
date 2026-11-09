const THEME_BOOTSTRAP = `(function(){try{var k="portfolio-theme";var t=localStorage.getItem(k);var dark=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var root=document.documentElement;root.classList.toggle("dark",dark);root.style.colorScheme=dark?"dark":"light";}catch(e){}})();`;

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }}
      suppressHydrationWarning
    />
  );
}
