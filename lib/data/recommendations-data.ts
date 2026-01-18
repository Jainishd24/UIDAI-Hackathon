import { Fingerprint, Smartphone, MapPin, Users, Building2, Truck, ShieldCheck, BarChart3 } from "lucide-react"

export const recommendations = [
  {
    title: "Deploy Mobile Biometric Units in High-Risk States",
    description:
      "States with consistently high biometric failure rates among elderly citizens (60+) should receive dedicated mobile enrolment and update units. This addresses accessibility challenges in rural areas where fixed centres are distant.",
    impact: "high" as const,
    status: "pending" as const,
    category: "Infrastructure",
    icon: Truck,
    actions: [
      "Deploy 50 mobile units per high-risk state",
      "Prioritize rural districts with >15% elderly population",
      "Train operators in elderly-friendly biometric capture",
      "Schedule weekly visits to remote panchayats",
    ],
    targetStates: ["Bihar", "Jharkhand", "Odisha", "Chhattisgarh"],
  },
  {
    title: "Implement Alternative Authentication for Elderly",
    description:
      "Citizens aged 65+ showing biometric failure rates of 12.4% require alternative verification methods. Iris authentication or OTP-based verification should be offered as primary options in identified high-failure zones.",
    impact: "high" as const,
    status: "in-progress" as const,
    category: "Policy",
    icon: Fingerprint,
    actions: [
      "Enable iris-based authentication at all enrolment centres",
      "Implement face + OTP fallback for fingerprint failures",
      "Create senior citizen priority lanes at centres",
      "Reduce biometric update frequency requirement for 70+",
    ],
    targetStates: ["Bihar", "Jharkhand", "Uttar Pradesh", "Madhya Pradesh"],
  },
  {
    title: "Proactive Address Update Campaigns in Migration Hotspots",
    description:
      "Urban areas showing 41% YoY increase in address updates indicate significant migration. Proactive camps in industrial zones and IT hubs can reduce backlog and improve data accuracy.",
    impact: "medium" as const,
    status: "pending" as const,
    category: "Operations",
    icon: MapPin,
    actions: [
      "Set up temporary centres in industrial clusters",
      "Partner with large employers for bulk update drives",
      "Extend centre hours in high-migration districts",
      "Enable online address update with minimal documentation",
    ],
    targetStates: ["Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat"],
  },
  {
    title: "Strengthen Data Quality Monitoring System",
    description:
      "Anomaly detection identified sudden spikes in demographic updates in certain states. Real-time monitoring dashboards and automated alerts will help identify potential fraud or data quality issues early.",
    impact: "high" as const,
    status: "in-progress" as const,
    category: "Technology",
    icon: ShieldCheck,
    actions: [
      "Deploy real-time anomaly detection algorithms",
      "Set up automated alerts for deviation >25%",
      "Create investigation workflow for flagged cases",
      "Implement daily data quality score reporting",
    ],
    targetStates: [],
  },
  {
    title: "Expand Enrolment Centre Capacity in High-Growth States",
    description:
      "Prediction models indicate 8-10% enrolment growth in top states. Current centre capacity will face strain without expansion, leading to longer wait times and citizen dissatisfaction.",
    impact: "medium" as const,
    status: "pending" as const,
    category: "Infrastructure",
    icon: Building2,
    actions: [
      "Add 20% more enrolment centres in UP and Maharashtra",
      "Extend operating hours to 12-hour shifts",
      "Enable appointment-based scheduling to manage load",
      "Train additional operators through certification program",
    ],
    targetStates: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
  },
  {
    title: "Digital Literacy Programs for Rural Elderly",
    description:
      "Low digital literacy among rural elderly contributes to repeated enrolment failures and update issues. Community-based awareness programs will improve first-time success rates.",
    impact: "low" as const,
    status: "pending" as const,
    category: "Outreach",
    icon: Users,
    actions: [
      "Partner with local NGOs for awareness camps",
      "Create vernacular video guides for common processes",
      "Train ASHA workers as Aadhaar ambassadors",
      "Distribute simplified instruction pamphlets",
    ],
    targetStates: ["Bihar", "Jharkhand", "Odisha", "Rajasthan", "Madhya Pradesh"],
  },
  {
    title: "Enable USSD-based Services for Feature Phones",
    description:
      "42% of rural population still uses feature phones. USSD-based services for basic updates and status checks will improve accessibility without requiring smartphone or internet.",
    impact: "medium" as const,
    status: "implemented" as const,
    category: "Technology",
    icon: Smartphone,
    actions: [
      "Launch *99# USSD service nationwide",
      "Enable address update requests via SMS",
      "Provide OTP delivery via voice call option",
      "Partner with telecom operators for toll-free access",
    ],
    targetStates: [],
  },
  {
    title: "Predictive Resource Allocation Model",
    description:
      "Use demand forecasting to dynamically allocate resources across states. This ensures optimal utilization and reduces both over-staffing in low-demand areas and under-staffing in high-demand zones.",
    impact: "medium" as const,
    status: "in-progress" as const,
    category: "Operations",
    icon: BarChart3,
    actions: [
      "Implement weekly demand forecasting dashboard",
      "Create flexible operator deployment framework",
      "Establish resource sharing protocols between districts",
      "Set up performance-based incentives for centres",
    ],
    targetStates: [],
  },
]

export const keyPolicySuggestions = [
  {
    title: "Mandatory Iris Authentication for 65+ Citizens",
    description:
      "Make iris-based authentication the default method for citizens above 65 years to eliminate fingerprint degradation issues and reduce failure rates by an estimated 60%.",
    priority: "critical" as const,
  },
  {
    title: "Regional Biometric Refresh Camps",
    description:
      "Conduct quarterly biometric refresh camps in states with >7% failure rates, focusing on occupational groups like farmers and construction workers.",
    priority: "high" as const,
  },
  {
    title: "Simplified Update Process for Migrant Workers",
    description:
      "Enable employer-verified address updates for registered migrant workers to reduce documentation burden and improve data accuracy.",
    priority: "high" as const,
  },
  {
    title: "Real-time Dashboard for State Administrators",
    description:
      "Provide state-level administrators with real-time dashboards showing KPIs, anomalies, and predicted demand for proactive planning.",
    priority: "medium" as const,
  },
]

export const impactMetrics = {
  potentialReduction: "45%",
  citizensImpacted: "285M",
  costSavings: "₹1,200 Cr",
  timelineMOnths: 18,
}
