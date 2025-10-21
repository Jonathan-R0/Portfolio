import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";

export default function Hero() {
  const handleDownloadCV = () => {
    const cvUrl =
      "https://drive.google.com/file/d/1lU-maLg1Ti5hBJWsl3G7RRB7ljLRGd9a/view?usp=sharing";
    window.open(cvUrl, "_blank");
  };

  return (
    <section id="hero" className="py-20 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 fade-in">
        Hello, I&apos;m{" "}
        <span className="text-green-400">Jonathan David Rosenblatt</span> 👋
      </h1>
      <p
        className="text-lg md:text-xl lg:text-2xl mb-8 fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        Computer Engineering Student at FIUBA 🎓 | Software Developer 💻 | Linux
        Enthusiast 🚀
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="https://www.linkedin.com/in/jonathan-rosenblatt-7b38981b4/"
          className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded-md transition-colors scale-in flex items-center justify-center space-x-2 w-48 h-12 text-base"
          style={{ animationDelay: "0.6s" }}
        >
          <Mail size={20} />
          <span>Get in touch</span>
        </a>
        <Button
          onClick={handleDownloadCV}
          variant="default"
          className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold flex items-center justify-center space-x-2 scale-in w-48 h-12 text-base"
          style={{ animationDelay: "0.8s" }}
        >
          <ExternalLink size={25} />
          <span>Open my resume</span>
        </Button>
      </div>
    </section>
  );
}
