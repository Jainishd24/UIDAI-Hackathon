import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PolicyItem {
  title: string
  description: string
  priority: "critical" | "high" | "medium"
}

interface PolicySummaryProps {
  title: string
  policies: PolicyItem[]
}

export function PolicySummary({ title, policies }: PolicySummaryProps) {
  const getPriorityStyles = (priority: "critical" | "high" | "medium") => {
    switch (priority) {
      case "critical":
        return "border-l-danger bg-danger/5"
      case "high":
        return "border-l-warning bg-warning/5"
      case "medium":
        return "border-l-primary bg-primary/5"
    }
  }

  const getPriorityBadge = (priority: "critical" | "high" | "medium") => {
    switch (priority) {
      case "critical":
        return "bg-danger/20 text-danger"
      case "high":
        return "bg-warning/20 text-warning"
      case "medium":
        return "bg-primary/20 text-primary"
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {policies.map((policy, index) => (
          <div key={index} className={cn("rounded-lg border-l-4 p-4", getPriorityStyles(policy.priority))}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-card-foreground">{policy.title}</h4>
              <span
                className={cn("rounded px-2 py-0.5 text-xs font-medium capitalize", getPriorityBadge(policy.priority))}
              >
                {policy.priority}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{policy.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
