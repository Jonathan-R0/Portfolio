const groups = [
  { title: "Languages & frameworks", items: ["TypeScript", "Python", "Java Spring", ".NET"] },
  { title: "Data & infrastructure", items: ["SQL", "Docker", "Networking", "Linux"] },
  { title: "Engineering fundamentals", items: ["Algorithms", "Testing", "Git"] },
];

export default function Skills() {
  return (
    <section className="toolbox page-width" aria-labelledby="toolbox-title">
      <div className="section-heading"><h2 id="toolbox-title">What I work with.</h2><p>The languages, tools, and fundamentals behind my projects.</p></div>
      <div className="toolbox-groups">{groups.map((group) => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
    </section>
  );
}
