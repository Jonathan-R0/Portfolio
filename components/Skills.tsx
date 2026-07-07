"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "🐍 Python",
  "🔄 TypeScript",
  "☕ Java Spring",
  "🤖 .NET",
  "🐳 Docker",
  "🌐 Networking",
  "🗃️ SQL",
  "🧪 Testing",
  "🌿 Git",
  "♾️ Algorithms",
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-16 md:py-20">
      <p className="section-kicker">Toolbox</p>
      <h2 className="section-title mb-10 fade-in">Skills 🛠️</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="glass-panel cursor-move rounded-2xl p-4 text-center text-slate-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onHoverStart={() => setHoveredSkill(skill)}
            onHoverEnd={() => setHoveredSkill(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className={hoveredSkill === skill ? "text-emerald-300" : ""}>
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
