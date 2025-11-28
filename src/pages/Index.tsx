import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { DashboardNavbar } from "@/components/layout/DashboardNavbar";
import { KPICard } from "@/components/dashboard/KPICard";
import { SubjectMarksChart } from "@/components/dashboard/SubjectMarksChart";
import { AttendancePieChart } from "@/components/dashboard/AttendancePieChart";
import { MonthlyPerformanceChart } from "@/components/dashboard/MonthlyPerformanceChart";
import { StudentsTable } from "@/components/dashboard/StudentsTable";
import { TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { students } from "@/data/studentData";

const Index = () => {
  // Calculate KPIs
  const avgAttendance = (students.reduce((acc, s) => acc + s.attendance, 0) / students.length).toFixed(1);
  const avgMarks = (students.reduce((acc, s) => acc + s.marks, 0) / students.length).toFixed(1);
  const passCount = students.filter(s => s.status === "Pass").length;
  const failCount = students.filter(s => s.status === "Fail").length;

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
            <p className="text-muted-foreground">Monitor student performance and track academic progress</p>
          </div>
          
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <KPICard
              title="Average Attendance"
              value={`${avgAttendance}%`}
              icon={Users}
              trend="5% from last month"
              trendUp={true}
              colorClass="text-chart-2"
            />
            <KPICard
              title="Average Marks"
              value={avgMarks}
              icon={TrendingUp}
              trend="3.2 points"
              trendUp={true}
              colorClass="text-chart-1"
            />
            <KPICard
              title="Pass/Fail Ratio"
              value={`${passCount}/${failCount}`}
              icon={CheckCircle2}
              trend="2 more passing"
              trendUp={true}
              colorClass="text-success"
            />
          </div>
          
          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <SubjectMarksChart />
            <AttendancePieChart />
          </div>
          
          {/* Charts Row 2 */}
          <div className="mb-6">
            <MonthlyPerformanceChart />
          </div>
          
          {/* Students Table */}
          <StudentsTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
