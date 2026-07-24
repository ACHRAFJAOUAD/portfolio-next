import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#1e1e1e]">
      <Navbar />
      <div className="flex-1 overflow-y-auto pt-10">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
