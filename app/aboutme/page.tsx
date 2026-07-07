"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectsLeft from "@/components/SubjectsLeft";

export default function AboutMe() {
  return (
    <div className="site-shell">
      <Header />
      <main className="content-shell">
        <p className="section-kicker mt-6">About</p>
        <h1 className="section-title mb-8">I ♥️ 🖥️</h1>
        <p
          className="glass-panel mx-auto max-w-3xl rounded-3xl p-6 text-lg leading-8 text-slate-300 fade-in md:p-8 md:text-xl"
          style={{ animationDelay: "0.3s" }}
        >
          Computer Engineering student, from the Faculty of Engineering of the
          UBA. Passionate about computing, abstract problems and linux! I love
          gcc and i3 😍
        </p>
        <SubjectsLeft />
      </main>
      <Footer />
    </div>
  );
}
