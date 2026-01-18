import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { LineChart } from "@/components/charts/line-chart"
import { StackedBarChart } from "@/components/charts/stacked-bar-chart"
import { PieChart } from "@/components/charts/pie-chart"
import { InsightCard } from "@/components/dashboard/insight-card"
import { KPICard } from "@/components/dashboard/kpi-card"
import { TrendingUp, Users, MapPin, ArrowRightLeft } from "lucide-react"
import {
  genderTrendsData,
  ageTrendsData,
  regionUpdateData,
  migrationData,
  adultChildData,
} from "@/lib/data/trends-data"
import { ageGroupData } from "@/lib/data/mock-data"

export default function TrendsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64">
        <Header title="Societal Trends" description="Gender, age, and regional patterns in Aadhaar data" />
        <div className="p-6">
          {/* KPI Summary */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <KPICard
              title="Male Enrolment Rate"
              value="52.1%"
              change={0.8}
              changeLabel="vs 2023"
              icon={Users}
              iconColor="text-chart-1"
            />
            <KPICard
              title="Female Enrolment Rate"
              value="46.9%"
              change={1.2}
              changeLabel="vs 2023"
              icon={Users}
              iconColor="text-chart-2"
            />
            <KPICard
              title="Child Enrolments (0-5)"
              value="28M"
              change={15.2}
              changeLabel="growth YoY"
              icon={TrendingUp}
              iconColor="text-chart-3"
            />
            <KPICard
              title="Address Updates"
              value="59.4M"
              change={18.5}
              changeLabel="vs last year"
              icon={MapPin}
              iconColor="text-chart-4"
            />
          </div>

          {/* Insights Row */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InsightCard
              title="Gender Gap Narrowing"
              description="Female enrolment has grown 1.2% faster than male enrolment, indicating improved gender inclusion in digital identity coverage."
              icon={TrendingUp}
              type="success"
            />
            <InsightCard
              title="Youth Surge in Enrolments"
              description="18-35 age group shows highest enrolment growth at 28%, driven by employment and banking requirements."
              icon={Users}
              type="info"
            />
            <InsightCard
              title="High Migration Activity"
              description="Urban address updates increased 41% YoY, suggesting significant rural-to-urban migration patterns."
              icon={ArrowRightLeft}
              type="warning"
            />
          </div>

          {/* Gender Trends */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <LineChart
              title="Gender-wise Enrolment Trends"
              description="Year-over-year enrolment by gender"
              data={genderTrendsData}
              lines={[
                { dataKey: "male", color: "var(--chart-1)", name: "Male" },
                { dataKey: "female", color: "var(--chart-2)", name: "Female" },
                { dataKey: "other", color: "var(--chart-5)", name: "Other" },
              ]}
              xAxisKey="year"
            />
            <StackedBarChart
              title="Age Group Enrolments by Year"
              description="Distribution across age demographics"
              data={ageTrendsData}
              bars={[
                { dataKey: "child", color: "var(--chart-1)", name: "0-18 (Child)" },
                { dataKey: "youth", color: "var(--chart-2)", name: "18-35 (Youth)" },
                { dataKey: "adult", color: "var(--chart-3)", name: "35-60 (Adult)" },
                { dataKey: "senior", color: "var(--chart-4)", name: "60+ (Senior)" },
              ]}
              xAxisKey="year"
            />
          </div>

          {/* Regional & Migration */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <StackedBarChart
              title="Region-wise Demographic Updates"
              description="Type of updates by region"
              data={regionUpdateData}
              bars={[
                { dataKey: "address", color: "var(--chart-1)", name: "Address" },
                { dataKey: "mobile", color: "var(--chart-2)", name: "Mobile" },
                { dataKey: "name", color: "var(--chart-3)", name: "Name" },
              ]}
              xAxisKey="region"
              height={280}
            />
            <LineChart
              title="Migration Patterns"
              description="Address updates indicating mobility"
              data={migrationData}
              lines={[
                { dataKey: "urban", color: "var(--chart-1)", name: "Urban" },
                { dataKey: "rural", color: "var(--chart-2)", name: "Rural" },
                { dataKey: "interstate", color: "var(--chart-4)", name: "Interstate" },
              ]}
              xAxisKey="quarter"
              height={280}
            />
            <PieChart
              title="Age Group Distribution"
              description="Current enrolment demographics"
              data={ageGroupData.map((d) => ({ name: d.name + " yrs", value: d.value }))}
              height={280}
            />
          </div>

          {/* State Comparison */}
          <div className="mt-6">
            <StackedBarChart
              title="Adult vs Child Enrolments by State"
              description="Top 8 states showing age-based enrolment distribution"
              data={adultChildData}
              bars={[
                { dataKey: "adult", color: "var(--chart-1)", name: "Adult (18+)" },
                { dataKey: "child", color: "var(--chart-3)", name: "Child (0-18)" },
              ]}
              xAxisKey="state"
              height={280}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
