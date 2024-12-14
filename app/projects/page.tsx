import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mt-10 mb-8 text-center">
          All Projects
        </h1>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
