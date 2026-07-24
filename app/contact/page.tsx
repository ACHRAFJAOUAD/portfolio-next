import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#1e1e1e]">
      <Navbar />
      <div className="flex-1 overflow-y-auto pt-10">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
