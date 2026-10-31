import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Public pages get the site chrome; the /keystatic writing portal does not.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
