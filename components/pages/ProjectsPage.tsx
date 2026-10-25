import { getMessages, type LocalizedProps } from "@/lib/messages";
import Projects from "@/components/Projects";

export default function ProjectsPage({ locale }: LocalizedProps) {
  const { projects } = getMessages(locale);
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="page-width inner-page projects-page"
    >
      <div className="page-intro">
        <h1>
          {projects.title}
          <br />
          {projects.titleEnd}
          <span className="name-period">.</span>
        </h1>
        <p>{projects.intro}</p>
      </div>
      <Projects locale={locale} />
    </main>
  );
}
