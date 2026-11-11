export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main id="contenido" className="relative z-10 h-dvh min-h-dvh overflow-hidden">
      {children}
    </main>
  );
}
