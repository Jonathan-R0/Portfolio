import Project from "./Project";
import { getMessages, type LocalizedProps } from "@/lib/messages";
import projects from "@/public/projects.json";
import { ProjectCollection } from "@/components/ui/project-collection";

export default function Projects({ locale }: LocalizedProps) {
  const messages = getMessages(locale);
  return (
    <ProjectCollection>
      {projects.map((project, index) => (
        <Project
          key={project.id}
          {...project}
          {...messages.projects.entries[index]}
          locale={locale}
        />
      ))}
    </ProjectCollection>
  );
}
