import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

interface RecommendationCardProps {
  title: string
  description: string
  impact: "high" | "medium" | "low"
  status: "implemented" | "in-progress" | "pending"
  category: string
  icon: LucideIcon
  actions: string[]
  targetStates?: string[]
}

export function RecommendationCard({
  title,
  description,
  impact,
  status,
  category,
  icon: Icon,
  actions,
  targetStates,
}: RecommendationCardProps) {
  const getImpactStyles = () => {
    switch (impact) {
      case "high":
        return "bg-danger/20 text-danger border-danger/30"
      case "medium":
        return "bg-warning/20 text-warning border-warning/30"
      case "low":
        return "bg-success/20 text-success border-success/30"
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case "implemented":
        return <CheckCircle2 className="h-4 w-4 text-success" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-warning" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "implemented":
        return "Implemented"
      case "in-progress":
        return "In Progress"
      case "pending":
        return "Pending"
    }
  }

  return (
    <Card className="bg-card border-border hover:border-primary/30 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-secondary p-2 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base font-medium text-card-foreground">{title}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {category}
                </Badge>
                <Badge variant="outline" className={cn("text-xs border", getImpactStyles())}>
                  {impact} impact
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {getStatusIcon()}
            <span>{getStatusText()}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Recommended Actions:</p>
          <ul className="space-y-1.5">
            {actions.map((action, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-card-foreground">
                <span className="text-primary mt-1">•</span>
                {action}
              </li>
            ))}
          </ul>
        </div>

        {targetStates && targetStates.length > 0 && (
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Priority States:</p>
            <div className="flex flex-wrap gap-1.5">
              {targetStates.map((state) => (
                <span key={state} className="rounded bg-secondary px-2 py-1 text-xs text-card-foreground">
                  {state}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
