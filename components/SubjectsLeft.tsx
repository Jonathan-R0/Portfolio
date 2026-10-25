import { getMessages, type LocalizedProps } from "@/lib/messages";

export default function SubjectsLeft({ locale }: LocalizedProps) {
  const { common, about } = getMessages(locale);
  return (
    <section className="education" aria-labelledby="education-title">
      <h3 id="education-title">{common.education}</h3>
      <p>{common.faculty}</p>
      <p className="education-completed">{about.completed}</p>
    </section>
  );
}
