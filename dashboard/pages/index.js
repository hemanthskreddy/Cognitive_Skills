import StudentTable from "../components/StudentTable";
import SkillBarChart from "../components/SkillBarChart";
import AttentionScatter from "../components/AttentionScatter";
import StudentRadar from "../components/StudentRadar";

export default function Home() {
  return (
    <div className="p-4 space-y-6">
      <SkillBarChart />
      <AttentionScatter />
      <StudentRadar studentId={1} />
      <StudentTable />
    </div>
  );
}

