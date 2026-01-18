import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ClusterCardProps {
  title: string
  risk: "high" | "medium" | "low"
  states: number
  population: string
  failureRate: number
  states_list: string[]
}

export function ClusterCard({ title, risk, states, population, failureRate, states_list }: ClusterCardProps) {
  const getRiskStyles = () => {
    switch (risk) {
      case "high":
        return {
          border: "border-danger/50",
          bg: "bg-danger/10",
          badge: "bg-danger/20 text-danger",
          dot: "bg-danger",
        }
      case "medium":
        return {
          border: "border-warning/50",
          bg: "bg-warning/10",
          badge: "bg-warning/20 text-warning",
          dot: "bg-warning",
        }
      case "low":
        return {
          border: "border-success/50",
          bg: "bg-success/10",
          badge: "bg-success/20 text-success",
          dot: "bg-success",
        }
    }
  }

  const styles = getRiskStyles()

  return (
    <Card className={cn("bg-card border", styles.border)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-card-foreground">{title}</CardTitle>
          <span className={cn("rounded px-2 py-1 text-xs font-medium capitalize", styles.badge)}>{risk} Risk</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className={cn("rounded-lg p-3 text-center", styles.bg)}>
            <p className="text-2xl font-bold text-card-foreground">{states}</p>
            <p className="text-xs text-muted-foreground">States</p>
          </div>
          <div className={cn("rounded-lg p-3 text-center", styles.bg)}>
            <p className="text-2xl font-bold text-card-foreground">{population}</p>
            <p className="text-xs text-muted-foreground">Population</p>
          </div>
          <div className={cn("rounded-lg p-3 text-center", styles.bg)}>
            <p className="text-2xl font-bold text-card-foreground">{failureRate}%</p>
            <p className="text-xs text-muted-foreground">Failure Rate</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Included States:</p>
          <div className="flex flex-wrap gap-1.5">
            {states_list.map((state) => (
              <span key={state} className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 text-xs">
                <span className={cn("h-1.5 w-1.5 rounded-full", styles.dot)} />
                {state}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
