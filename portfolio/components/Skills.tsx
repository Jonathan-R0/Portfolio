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
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center fade-in">Skills 🛠️</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-gray-800 p-4 rounded-lg text-center cursor-move"
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
            <span className={hoveredSkill === skill ? "text-green-400" : ""}>
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
