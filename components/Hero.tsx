import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";

export default function Hero() {
  const handleDownloadCV = () => {
    const cvUrl =
      "https://drive.google.com/file/d/10ZvvR7BWo2jKFfIk0jGlfc9vzhIzad9T/view?usp=sharing";
    window.open(cvUrl, "_blank");
  };

  return (
    <section id="hero" className="relative py-16 text-center md:py-24">
      <div className="absolute inset-x-0 top-8 -z-10 mx-auto h-64 max-w-3xl rounded-full bg-emerald-400/10 blur-3xl" />
      <p className="section-kicker fade-in">Backend Developer</p>
      <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-semibold tracking-tight text-white fade-in md:text-6xl lg:text-7xl">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r from-emerald-200 via-teal-300 to-sky-300 bg-clip-text text-transparent">
          Jonathan David Rosenblatt
        </span>{" "}
        👋
      </h1>
      <p
        className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-300 fade-in md:text-xl"
        style={{ animationDelay: "0.3s" }}
      >
        Computer Engineering Student at FIUBA 🎓 | Software Developer 💻 | Linux
        Enthusiast 🚀
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://www.linkedin.com/in/jonathan-rosenblatt-7b38981b4/"
          className="flex h-12 w-48 items-center justify-center gap-2 rounded-full bg-emerald-300 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-950/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-200 scale-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Mail size={20} />
          <span>Get in touch</span>
        </a>
        <Button
          onClick={handleDownloadCV}
          variant="default"
          className="glass-panel flex h-12 w-48 items-center justify-center gap-2 rounded-full text-base font-semibold text-slate-100 hover:-translate-y-0.5 hover:bg-white/10 scale-in"
          style={{ animationDelay: "0.8s" }}
        >
          <ExternalLink size={25} />
          <span>Open my resume</span>
        </Button>
      </div>
    </section>
  );
}
