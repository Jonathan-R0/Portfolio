import { ArrowUpRight } from "lucide-react";
import { getMessages, type LocalizedProps } from "@/lib/messages";
import { contactEmail } from "@/lib/contact";
import { profileLinks } from "@/lib/profile";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function Footer({ locale }: LocalizedProps) {
  const { footer, common } = getMessages(locale);
  return (
    <footer id="contact" className="site-footer">
      <div className="page-width">
        <div className="contact-row">
          <h2>
            {footer.title}
            <br />
            {footer.titleEnd}
            <span className="name-period">.</span>
          </h2>
          <div className="contact-links">
            <MagneticButton>
              <a className="text-link" href={`mailto:${contactEmail}`}>
                {contactEmail} <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </MagneticButton>
            <a
              className="text-link"
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footer.linkedin} <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jonathan David Rosenblatt</p>
          <p>{common.location}</p>
          <a
            className="text-link"
            href={profileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
