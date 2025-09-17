import { useEffect, useState } from "react"

export default function Insights() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("/students.json")
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])

  if (students.length === 0) return null

  const topStudent = students.reduce((a, b) => (a.assessment_score > b.assessment_score ? a : b))
  const lowAttention = students.filter(s => s.attention < 70)

  return (
    <div className="p-4 shadow rounded bg-white">
      <h2 className="font-bold mb-2">Insights</h2>
      <ul className="list-disc ml-6">
        <li>Top performer: {topStudent.name} (Score: {topStudent.assessment_score})</li>
        <li>{lowAttention.length} students show low attention levels (&lt;70)</li>
        <li>Engagement time correlates strongly with performance (see Notebook)</li>
      </ul>
    </div>
  )
}
