import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="content-shell">
        <p className="section-kicker mt-6">Portfolio</p>
        <h1 className="section-title mb-8">
          All Projects
        </h1>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
