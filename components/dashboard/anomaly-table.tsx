import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { AlertTriangle, TrendingUp, TrendingDown } from "lucide-react"

interface Anomaly {
  id: string
  state: string
  metric: string
  value: number
  expected: number
  deviation: number
  type: "spike" | "drop"
  severity: "high" | "medium" | "low"
  date: string
}

interface AnomalyTableProps {
  title: string
  description?: string
  anomalies: Anomaly[]
}

export function AnomalyTable({ title, description, anomalies }: AnomalyTableProps) {
  const getSeverityStyles = (severity: "high" | "medium" | "low") => {
    switch (severity) {
      case "high":
        return "bg-danger/20 text-danger"
      case "medium":
        return "bg-warning/20 text-warning"
      case "low":
        return "bg-success/20 text-success"
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <CardTitle className="text-base font-medium text-card-foreground">{title}</CardTitle>
        </div>
        {description && <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-left font-medium text-muted-foreground">State</th>
                <th className="pb-3 text-left font-medium text-muted-foreground">Metric</th>
                <th className="pb-3 text-right font-medium text-muted-foreground">Actual</th>
                <th className="pb-3 text-right font-medium text-muted-foreground">Expected</th>
                <th className="pb-3 text-right font-medium text-muted-foreground">Deviation</th>
                <th className="pb-3 text-center font-medium text-muted-foreground">Severity</th>
              </tr>
            </thead>
            <tbody>
              {anomalies.map((anomaly) => (
                <tr key={anomaly.id} className="border-b border-border/50 hover:bg-secondary/50">
                  <td className="py-3 font-medium text-card-foreground">{anomaly.state}</td>
                  <td className="py-3 text-muted-foreground">{anomaly.metric}</td>
                  <td className="py-3 text-right text-card-foreground">{anomaly.value.toLocaleString()}</td>
                  <td className="py-3 text-right text-muted-foreground">{anomaly.expected.toLocaleString()}</td>
                  <td className="py-3 text-right">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1",
                        anomaly.type === "spike" ? "text-danger" : "text-success",
                      )}
                    >
                      {anomaly.type === "spike" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {anomaly.deviation > 0 ? "+" : ""}
                      {anomaly.deviation}%
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <span className={cn("rounded px-2 py-1 text-xs font-medium", getSeverityStyles(anomaly.severity))}>
                      {anomaly.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
