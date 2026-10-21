"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { localizeHref, useI18n } from "@/lib/i18n";

export default function Teaching() {
  const { locale, messages: { teaching } } = useI18n();
  return (
    <section className="teaching-section page-width" aria-labelledby="teaching-title">
      <div className="teaching-heading">
        <h2 id="teaching-title">{teaching.title}<br />{teaching.titleEnd}</h2>
      </div>
      <div className="teaching-copy">
        <h3>{teaching.role} · {teaching.course}</h3>
        <p className="teaching-meta">{teaching.institution} · {teaching.since}</p>
        <p>{teaching.description}</p>
        <p>{teaching.teamDescription}</p>
        <Link prefetch={false} href={localizeHref("/aboutme#teaching", locale)} className="text-link">
          {teaching.link} <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
