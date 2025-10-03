import { useEffect, type ReactNode } from "react";
import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-y-28 md:gap-y-36 overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
