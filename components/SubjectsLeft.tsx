import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const totalSubjects = 36;
const completedSubjects = 33;

const data = [
  { name: "Completed", value: completedSubjects },
  { name: "Remaining", value: totalSubjects - completedSubjects },
];

const COLORS = ["#10B981", "#374151"];

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
    <section id="SubjectsLeft" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Graduation Progress
        </h2>
        <div className="flex flex-col items-center">
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
            className="text-6xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {4}
          </motion.div>
          <p className="text-xl mb-4">Subjects left to graduate</p>
          <p className="text-center">
            {completedSubjects} out of {totalSubjects} subjects completed
          </p>
        </div>
      </div>
    </section>
  );
}
