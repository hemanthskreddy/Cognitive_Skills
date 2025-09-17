import { useEffect, useState } from "react"

export default function OverviewStats() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("/students.json")
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])

  if (students.length === 0) return <p>Loading...</p>

  const avg = field => (students.reduce((a, b) => a + b[field], 0) / students.length).toFixed(2)

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="p-4 shadow rounded bg-blue-100">Avg Score: {avg("assessment_score")}</div>
      <div className="p-4 shadow rounded bg-green-100">Avg Attention: {avg("attention")}</div>
      <div className="p-4 shadow rounded bg-yellow-100">Avg Focus: {avg("focus")}</div>
      <div className="p-4 shadow rounded bg-pink-100">Avg Retention: {avg("retention")}</div>
    </div>
  )
}
