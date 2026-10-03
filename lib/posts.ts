import posts from "@/public/blogs.json";

export { posts };

export function postDate(date: string) {
  const [day, month, year] = date.split("-").map(Number);
  const value = new Date(Date.UTC(year, month - 1, day));
  return { iso: value.toISOString().slice(0, 10), label: new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(value) };
}
