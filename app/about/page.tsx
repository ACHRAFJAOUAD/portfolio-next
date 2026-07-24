import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#1e1e1e]">
      <Navbar />
      <div className="flex-1 overflow-y-auto pt-10">
        <About />
      </div>
      <Footer />
    </main>
  );
}
