import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function SkillBarChart() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students.json")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  // Prepare data: average score per skill
  const chartData = students.map(s => ({
    name: s.name,
    comprehension: s.comprehension,
    attention: s.attention,
    focus: s.focus,
    retention: s.retention
  }));

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Cognitive Skills</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="comprehension" fill="#8884d8" />
          <Bar dataKey="attention" fill="#82ca9d" />
          <Bar dataKey="focus" fill="#ffc658" />
          <Bar dataKey="retention" fill="#ff8042" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
