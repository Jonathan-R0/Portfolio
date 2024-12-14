"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectsLeft from "@/components/SubjectsLeft";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mt-10 mb-8 text-center">I ♥️ 🖥️</h1>
        <p
          className="text-lg md:text-xl lg:text-2xl ml-2 fade-in"
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
