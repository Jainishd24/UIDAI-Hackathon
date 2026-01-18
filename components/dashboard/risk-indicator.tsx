import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface RiskItem {
  name: string
  risk: "high" | "medium" | "low"
  value: number
}

interface RiskIndicatorProps {
  title: string
  items: RiskItem[]
}

export function RiskIndicator({ title, items }: RiskIndicatorProps) {
  const getRiskColor = (risk: "high" | "medium" | "low") => {
    switch (risk) {
      case "high":
        return "bg-danger"
      case "medium":
        return "bg-warning"
      case "low":
        return "bg-success"
    }
  }

  const getRiskLabel = (risk: "high" | "medium" | "low") => {
    switch (risk) {
      case "high":
        return "High Risk"
      case "medium":
        return "Medium"
      case "low":
        return "Low Risk"
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-lg bg-secondary p-3">
            <div className="flex items-center gap-3">
              <div className={cn("h-2 w-2 rounded-full", getRiskColor(item.risk))} />
              <span className="text-sm font-medium text-card-foreground">{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{item.value}%</span>
              <span
                className={cn(
                  "rounded px-2 py-0.5 text-xs font-medium",
                  item.risk === "high" && "bg-danger/20 text-danger",
                  item.risk === "medium" && "bg-warning/20 text-warning",
                  item.risk === "low" && "bg-success/20 text-success",
                )}
              >
                {getRiskLabel(item.risk)}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
