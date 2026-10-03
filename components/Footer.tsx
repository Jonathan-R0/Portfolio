import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="contact-row"><h2>Let’s talk<br />software.</h2><div className="contact-links">
          <a className="text-link" href="mailto:jonathan@rosenblatt.com.ar">jonathan@rosenblatt.com.ar <ArrowUpRight size={19} aria-hidden="true" /></a>
          <a className="text-link" href="https://www.linkedin.com/in/jonathan-rosenblatt-7b38981b4/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Jonathan David Rosenblatt</p><p>Buenos Aires, Argentina</p><a className="text-link" href="https://github.com/Jonathan-R0" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </div>
    </footer>
  );
}
