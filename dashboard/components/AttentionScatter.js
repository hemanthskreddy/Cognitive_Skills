import React, { useEffect, useState } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function AttentionScatter() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students.json")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Attention vs Assessment Score</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="attention" name="Attention" />
          <YAxis type="number" dataKey="assessment_score" name="Score" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={students} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

