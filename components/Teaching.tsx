import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { teaching } from "@/lib/profile";

export default function Teaching() {
  return (
    <section className="teaching-section page-width" aria-labelledby="teaching-title">
      <div className="teaching-heading">
        <h2 id="teaching-title">Build it.<br />Then teach it.</h2>
      </div>
      <div className="teaching-copy">
        <h3>{teaching.role} · {teaching.course}</h3>
        <p className="teaching-meta">{teaching.institution} · Since August 2025</p>
        <p>{teaching.description}</p>
        <p>{teaching.teamDescription}</p>
        <Link href="/aboutme#teaching" className="text-link">
          My teaching at FIUBA <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
