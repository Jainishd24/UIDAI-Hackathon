import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { RecommendationCard } from "@/components/dashboard/recommendation-card"
import { PolicySummary } from "@/components/dashboard/policy-summary"
import { KPICard } from "@/components/dashboard/kpi-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target, Users, IndianRupee, Clock, CheckCircle2, AlertCircle } from "lucide-react"
import { recommendations, keyPolicySuggestions, impactMetrics } from "@/lib/data/recommendations-data"

export default function RecommendationsPage() {
  const implementedCount = recommendations.filter((r) => r.status === "implemented").length
  const inProgressCount = recommendations.filter((r) => r.status === "in-progress").length
  const pendingCount = recommendations.filter((r) => r.status === "pending").length

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64">
        <Header title="Recommendations" description="Data-driven policy suggestions and actionable insights" />
        <div className="p-6">
          {/* Impact Summary */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <KPICard
              title="Potential Failure Reduction"
              value={impactMetrics.potentialReduction}
              icon={Target}
              iconColor="text-success"
            />
            <KPICard
              title="Citizens Impacted"
              value={impactMetrics.citizensImpacted}
              icon={Users}
              iconColor="text-chart-1"
            />
            <KPICard
              title="Estimated Cost Savings"
              value={impactMetrics.costSavings}
              icon={IndianRupee}
              iconColor="text-chart-2"
            />
            <KPICard
              title="Implementation Timeline"
              value={`${impactMetrics.timelineMOnths} months`}
              icon={Clock}
              iconColor="text-chart-3"
            />
          </div>

          {/* Status Overview */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card className="bg-card border-border">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="rounded-lg bg-success/20 p-3">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">{implementedCount}</p>
                  <p className="text-sm text-muted-foreground">Implemented</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="rounded-lg bg-warning/20 p-3">
                  <Clock className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">{inProgressCount}</p>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="rounded-lg bg-secondary p-3">
                  <AlertCircle className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">{pendingCount}</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Policy Suggestions */}
          <div className="mt-6">
            <PolicySummary title="Key Policy Suggestions" policies={keyPolicySuggestions} />
          </div>

          {/* Executive Summary */}
          <div className="mt-6">
            <Card className="bg-card border-border border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base font-medium text-card-foreground">Executive Summary</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Based on comprehensive analysis of Aadhaar enrolment, demographic updates, and biometric data across
                  all Indian states, the following key findings emerge:
                </p>
                <ul className="space-y-2 text-sm text-card-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">1.</span>
                    <span>
                      <strong>Elderly Biometric Challenge:</strong> Citizens aged 65+ show 12.4% biometric failure rate,
                      requiring alternative authentication methods in high-risk states.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">2.</span>
                    <span>
                      <strong>Regional Disparities:</strong> Six states (Bihar, Jharkhand, Odisha, Chhattisgarh, Assam,
                      Tripura) account for 65% of all biometric failures, requiring targeted interventions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">3.</span>
                    <span>
                      <strong>Migration Impact:</strong> Urban address updates increased 41% YoY, indicating need for
                      proactive update camps in industrial and IT hubs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">4.</span>
                    <span>
                      <strong>Occupational Correlation:</strong> Agricultural and construction workers show 3-4x higher
                      biometric failure due to fingerprint degradation, requiring periodic refresh programs.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Recommendations */}
          <div className="mt-6">
            <h3 className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Detailed Recommendations
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((rec, index) => (
                <RecommendationCard key={index} {...rec} />
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 rounded-lg bg-secondary p-4">
            <p className="text-xs text-muted-foreground text-center">
              These recommendations are generated based on analysis of UIDAI Aadhaar datasets including enrolment
              statistics, demographic updates, and biometric data. Implementation should be prioritized based on
              resource availability and regional context. For detailed methodology, refer to the technical
              documentation.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
