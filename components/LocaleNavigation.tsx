"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { restoreLocaleNavigation } from "@/lib/locale-navigation";

export default function LocaleNavigation() {
  const pathname = usePathname();
  useEffect(restoreLocaleNavigation, [pathname]);
  return null;
}
