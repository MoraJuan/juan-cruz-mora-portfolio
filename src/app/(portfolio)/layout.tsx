import { ChatFab } from "@/components/ChatFab";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main id="contenido" className="relative z-10 flex-1 pt-20 md:pt-24">
        {children}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <ChatFab />
    </>
  );
}
