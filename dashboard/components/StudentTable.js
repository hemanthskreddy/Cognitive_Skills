import { useEffect, useState } from "react";

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    fetch("/students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  // Search filter
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.class.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  const sortedStudents = [...filteredStudents];
  if (sortConfig.key) {
    sortedStudents.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "ascending" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") direction = "descending";
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Students</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by name or class..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />

      {/* Table */}
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th
              className="border px-2 py-1 cursor-pointer"
              onClick={() => requestSort("student_id")}
            >
              ID
            </th>
            <th
              className="border px-2 py-1 cursor-pointer"
              onClick={() => requestSort("name")}
            >
              Name
            </th>
            <th
              className="border px-2 py-1 cursor-pointer"
              onClick={() => requestSort("class")}
            >
              Class
            </th>
            <th
              className="border px-2 py-1 cursor-pointer"
              onClick={() => requestSort("assessment_score")}
            >
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((s) => (
            <tr key={s.student_id} className="hover:bg-gray-100">
              <td className="border px-2 py-1">{s.student_id}</td>
              <td className="border px-2 py-1">{s.name}</td>
              <td className="border px-2 py-1">{s.class}</td>
              <td className="border px-2 py-1">{s.assessment_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
