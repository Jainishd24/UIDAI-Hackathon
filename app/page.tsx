import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { KPICard } from "@/components/dashboard/kpi-card"
import { AreaChart } from "@/components/charts/area-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { PieChart } from "@/components/charts/pie-chart"
import { RiskIndicator } from "@/components/dashboard/risk-indicator"
import { Users, FileEdit, Fingerprint, AlertTriangle } from "lucide-react"
import {
  enrolmentTrendData,
  stateEnrolmentData,
  genderDistributionData,
  stateRiskData,
  monthlyTrendData,
} from "@/lib/data/mock-data"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64">
        <Header title="Overview Dashboard" description="Aadhaar enrolment, updates, and biometric analytics" />
        <div className="p-6">
          {/* KPI Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <KPICard
              title="Total Enrolments"
              value="1.38B"
              change={8.2}
              changeLabel="vs last year"
              icon={Users}
              iconColor="text-chart-1"
            />
            <KPICard
              title="Demographic Updates"
              value="245M"
              change={12.5}
              changeLabel="vs last year"
              icon={FileEdit}
              iconColor="text-chart-2"
            />
            <KPICard
              title="Biometric Updates"
              value="89M"
              change={-3.2}
              changeLabel="vs last year"
              icon={Fingerprint}
              iconColor="text-chart-3"
            />
            <KPICard
              title="High Risk Zones"
              value="6 States"
              change={0}
              changeLabel="no change"
              icon={AlertTriangle}
              iconColor="text-danger"
            />
          </div>

          {/* Charts Row 1 */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <AreaChart
              title="Enrolment Trends"
              description="Year-over-year Aadhaar enrolments"
              data={enrolmentTrendData}
              color="var(--chart-1)"
            />
            <BarChart
              title="State-wise Enrolments"
              description="Top 10 states by enrolment count"
              data={stateEnrolmentData.slice(0, 8)}
              horizontal
              color="var(--chart-2)"
            />
          </div>

          {/* Charts Row 2 */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <PieChart title="Gender Distribution" description="Enrolment by gender" data={genderDistributionData} />
            <BarChart
              title="Monthly Operations"
              description="Enrolments by month (in millions)"
              data={monthlyTrendData.map((d) => ({ name: d.month, value: d.enrolment / 1000000 }))}
              showColors
              height={250}
            />
            <RiskIndicator title="Biometric Risk by State" items={stateRiskData} />
          </div>
        </div>
      </main>
    </div>
  )
}
