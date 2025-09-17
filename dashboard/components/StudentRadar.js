import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export default function StudentRadar({ studentId = 1 }) {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch("/students.json")
      .then(res => res.json())
      .then(data => {
        const s = data.find(st => st.student_id === studentId);
        setStudent(s);
      });
  }, [studentId]);

  if (!student) return <div>Loading...</div>;

  const radarData = [
    { skill: "Comprehension", value: student.comprehension },
    { skill: "Attention", value: student.attention },
    { skill: "Focus", value: student.focus },
    { skill: "Retention", value: student.retention }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{student.name} - Skills Radar</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <PolarRadiusAxis />
          <Radar name={student.name} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
