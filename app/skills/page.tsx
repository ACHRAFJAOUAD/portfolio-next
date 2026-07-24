import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#1e1e1e]">
      <Navbar />
      <div className="flex-1 overflow-y-auto flex items-center justify-center">
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
