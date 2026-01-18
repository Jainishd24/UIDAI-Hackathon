import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface InsightCardProps {
  title: string
  description: string
  icon: LucideIcon
  type?: "info" | "warning" | "success" | "danger"
}

export function InsightCard({ title, description, icon: Icon, type = "info" }: InsightCardProps) {
  const getTypeStyles = () => {
    switch (type) {
      case "warning":
        return "border-l-warning bg-warning/5"
      case "success":
        return "border-l-success bg-success/5"
      case "danger":
        return "border-l-danger bg-danger/5"
      default:
        return "border-l-primary bg-primary/5"
    }
  }

  const getIconColor = () => {
    switch (type) {
      case "warning":
        return "text-warning"
      case "success":
        return "text-success"
      case "danger":
        return "text-danger"
      default:
        return "text-primary"
    }
  }

  return (
    <Card className={cn("border-l-4 bg-card", getTypeStyles())}>
      <CardContent className="flex items-start gap-4 p-4">
        <div className={cn("rounded-lg bg-secondary p-2", getIconColor())}>
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-card-foreground">{title}</h4>
          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
