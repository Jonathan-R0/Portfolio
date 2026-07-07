import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const totalSubjects = 36;
const completedSubjects = 35;

const data = [
  { name: "Completed", value: completedSubjects },
  { name: "Remaining", value: totalSubjects - completedSubjects },
];

const COLORS = ["#6EE7B7", "#1F2937"];

export default function SubjectsLeft() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSubjectsLeft] = useState(totalSubjects - completedSubjects);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubjectsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="SubjectsLeft" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <p className="section-kicker">FIUBA</p>
        <h2 className="section-title mb-10">
          Graduation Progress
        </h2>
        <div className="glass-panel mx-auto flex max-w-xl flex-col items-center rounded-3xl p-8">
          <div className="w-64 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <motion.div
            className="mb-8 text-6xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {totalSubjects - completedSubjects}
          </motion.div>
          <p className="mb-4 text-xl text-slate-200">Subjects left to graduate</p>
          <p className="text-center text-slate-400">
            {completedSubjects} out of {totalSubjects} subjects completed
          </p>
        </div>
      </div>
    </section>
  );
}
