"use client";

import Link from "next/link";
import { localizeHref, useI18n } from "@/lib/i18n";

export default function NotFound() {
  const {
    locale,
    messages: { notFound },
  } = useI18n();
  return (
    <main id="main-content" tabIndex={-1} className="page-width inner-page">
      <div className="page-intro">
        <h1>{notFound.title}</h1>
        <p>{notFound.description}</p>
      </div>
      <Link
        prefetch={false}
        className="text-link"
        href={localizeHref("/", locale)}
      >
        {notFound.back}
      </Link>
    </main>
  );
}
