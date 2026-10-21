"use client";

import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { contactEmail } from "@/lib/contact";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function Footer() {
  const { messages: { footer, common } } = useI18n();
  return (
    <footer id="contact" className="site-footer">
      <div className="page-width">
        <div className="contact-row"><h2>{footer.title}<br />{footer.titleEnd}<span className="name-period">.</span></h2><div className="contact-links">
          <MagneticButton><a className="text-link" href={`mailto:${contactEmail}`}>{contactEmail} <ArrowUpRight size={19} aria-hidden="true" /></a></MagneticButton>
          <a className="text-link" href="https://www.linkedin.com/in/jonathan-rosenblatt-7b38981b4/" target="_blank" rel="noopener noreferrer">{footer.linkedin} <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Jonathan David Rosenblatt</p><p>{common.location}</p><a className="text-link" href="https://github.com/Jonathan-R0" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </div>
    </footer>
  );
}
