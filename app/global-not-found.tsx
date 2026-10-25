import SiteDocument from "@/components/SiteDocument";
import NotFound from "@/components/pages/NotFound";

export const metadata = {
  title: "Page not found | Jonathan Rosenblatt",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <SiteDocument locale="en">
      <NotFound />
    </SiteDocument>
  );
}
