import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { KPICard } from "@/components/dashboard/kpi-card"
import { Heatmap } from "@/components/charts/heatmap"
import { ClusterCard } from "@/components/dashboard/cluster-card"
import { AnomalyTable } from "@/components/dashboard/anomaly-table"
import { BarChart } from "@/components/charts/bar-chart"
import { LineChart } from "@/components/charts/line-chart"
import { InsightCard } from "@/components/dashboard/insight-card"
import { AlertTriangle, ShieldAlert, Users, Activity } from "lucide-react"
import {
  heatmapData,
  heatmapXLabels,
  heatmapYLabels,
  clusterData,
  anomalyData,
  occupationFailureData,
  stateRiskScores,
} from "@/lib/data/risk-data"
import { biometricFailureByAge } from "@/lib/data/mock-data"

export default function RiskAnalysisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64">
        <Header title="Risk Analysis" description="Biometric failures, anomaly detection, and risk clustering" />
        <div className="p-6">
          {/* KPI Summary */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <KPICard
              title="High Risk States"
              value="6"
              change={0}
              changeLabel="stable"
              icon={AlertTriangle}
              iconColor="text-danger"
            />
            <KPICard
              title="Avg Biometric Failure"
              value="4.2%"
              change={-0.8}
              changeLabel="vs last quarter"
              icon={ShieldAlert}
              iconColor="text-warning"
            />
            <KPICard
              title="Elderly (65+) Failure"
              value="12.4%"
              change={1.2}
              changeLabel="increase"
              icon={Users}
              iconColor="text-danger"
            />
            <KPICard
              title="Anomalies Detected"
              value="5"
              change={25}
              changeLabel="this month"
              icon={Activity}
              iconColor="text-chart-1"
            />
          </div>

          {/* Critical Insights */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <InsightCard
              title="Elderly Biometric Challenge"
              description="Citizens aged 65+ show 12.4% biometric failure rate, 6x higher than youth. This indicates need for alternative authentication methods in elderly-heavy regions."
              icon={Users}
              type="danger"
            />
            <InsightCard
              title="Occupational Risk Correlation"
              description="Agricultural and construction workers show 3-4x higher biometric failure rates due to fingerprint degradation from manual labor."
              icon={ShieldAlert}
              type="warning"
            />
          </div>

          {/* Heatmap and Age-based failure */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Heatmap
              title="Biometric Failure Heatmap"
              description="State vs Age Group failure rates (%)"
              data={heatmapData}
              xLabels={heatmapXLabels}
              yLabels={heatmapYLabels}
              maxValue={15}
            />
            <BarChart
              title="Biometric Failure by Age Group"
              description="Failure rate increases significantly with age"
              data={biometricFailureByAge.map((d) => ({ name: d.name, value: d.failure }))}
              color="var(--danger)"
              height={300}
            />
          </div>

          {/* Risk Clusters */}
          <div className="mt-6">
            <h3 className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              K-Means Risk Clustering
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {clusterData.map((cluster) => (
                <ClusterCard key={cluster.title} {...cluster} />
              ))}
            </div>
          </div>

          {/* Anomaly Detection & Occupation */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <AnomalyTable
                title="Detected Anomalies"
                description="Unusual patterns identified using Isolation Forest algorithm"
                anomalies={anomalyData}
              />
            </div>
            <BarChart
              title="Failure by Occupation"
              description="Manual labor shows higher rates"
              data={occupationFailureData}
              horizontal
              color="var(--chart-4)"
              height={280}
            />
          </div>

          {/* State Risk Scores */}
          <div className="mt-6">
            <LineChart
              title="Composite Risk Score by State"
              description="Combined score from biometric failure, update frequency, and growth metrics"
              data={stateRiskScores}
              lines={[
                { dataKey: "riskScore", color: "var(--danger)", name: "Risk Score" },
                { dataKey: "biometric", color: "var(--chart-1)", name: "Biometric %" },
                { dataKey: "updates", color: "var(--chart-2)", name: "Update %" },
              ]}
              xAxisKey="name"
              height={300}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
