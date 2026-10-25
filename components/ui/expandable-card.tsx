// Aceternity Expandable Card adaptation: inline disclosure rather than an image-led modal.
// https://ui.aceternity.com/components/expandable-card
import { ChevronDown } from "lucide-react";
import { getMessages, type LocalizedProps } from "@/lib/messages";

export function ExpandableCard({
  title,
  focus,
  notes,
  locale,
}: LocalizedProps & {
  title: string;
  focus: string;
  notes: string[];
}) {
  const { projects } = getMessages(locale);
  return (
    <details className="project-details">
      <summary>
        {projects.notes} <ChevronDown size={15} aria-hidden="true" />
        <span className="sr-only">
          {projects.context.replace("{title}", title)}
        </span>
      </summary>
      <div className="project-details-body">
        <h3>{focus}</h3>
        {notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </details>
  );
}
