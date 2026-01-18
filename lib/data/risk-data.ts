// Heatmap data - State vs Age group biometric failure
export const heatmapData = [
  { x: "0-18", y: "Bihar", value: 3.2 },
  { x: "18-35", y: "Bihar", value: 2.8 },
  { x: "35-50", y: "Bihar", value: 5.1 },
  { x: "50-65", y: "Bihar", value: 8.5 },
  { x: "65+", y: "Bihar", value: 14.2 },
  { x: "0-18", y: "Jharkhand", value: 2.9 },
  { x: "18-35", y: "Jharkhand", value: 2.5 },
  { x: "35-50", y: "Jharkhand", value: 4.8 },
  { x: "50-65", y: "Jharkhand", value: 7.8 },
  { x: "65+", y: "Jharkhand", value: 12.8 },
  { x: "0-18", y: "UP", value: 2.1 },
  { x: "18-35", y: "UP", value: 1.9 },
  { x: "35-50", y: "UP", value: 3.5 },
  { x: "50-65", y: "UP", value: 5.2 },
  { x: "65+", y: "UP", value: 9.8 },
  { x: "0-18", y: "MP", value: 2.3 },
  { x: "18-35", y: "MP", value: 2.0 },
  { x: "35-50", y: "MP", value: 3.8 },
  { x: "50-65", y: "MP", value: 5.8 },
  { x: "65+", y: "MP", value: 10.5 },
  { x: "0-18", y: "Karnataka", value: 1.5 },
  { x: "18-35", y: "Karnataka", value: 1.2 },
  { x: "35-50", y: "Karnataka", value: 2.1 },
  { x: "50-65", y: "Karnataka", value: 3.5 },
  { x: "65+", y: "Karnataka", value: 6.2 },
  { x: "0-18", y: "Kerala", value: 1.2 },
  { x: "18-35", y: "Kerala", value: 0.9 },
  { x: "35-50", y: "Kerala", value: 1.8 },
  { x: "50-65", y: "Kerala", value: 2.9 },
  { x: "65+", y: "Kerala", value: 5.5 },
]

export const heatmapXLabels = ["0-18", "18-35", "35-50", "50-65", "65+"]
export const heatmapYLabels = ["Bihar", "Jharkhand", "UP", "MP", "Karnataka", "Kerala"]

// Cluster data
export const clusterData = [
  {
    title: "Cluster A - High Risk",
    risk: "high" as const,
    states: 6,
    population: "285M",
    failureRate: 7.2,
    states_list: ["Bihar", "Jharkhand", "Odisha", "Chhattisgarh", "Assam", "Tripura"],
  },
  {
    title: "Cluster B - Medium Risk",
    risk: "medium" as const,
    states: 12,
    population: "420M",
    failureRate: 4.5,
    states_list: ["UP", "MP", "Rajasthan", "West Bengal", "Maharashtra", "Gujarat"],
  },
  {
    title: "Cluster C - Low Risk",
    risk: "low" as const,
    states: 18,
    population: "695M",
    failureRate: 2.1,
    states_list: ["Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh", "Telangana", "Punjab"],
  },
]

// Anomaly detection results
export const anomalyData = [
  {
    id: "1",
    state: "Bihar",
    metric: "Biometric Failures",
    value: 125000,
    expected: 85000,
    deviation: 47,
    type: "spike" as const,
    severity: "high" as const,
    date: "2024-12-15",
  },
  {
    id: "2",
    state: "Jharkhand",
    metric: "Update Requests",
    value: 98000,
    expected: 65000,
    deviation: 51,
    type: "spike" as const,
    severity: "high" as const,
    date: "2024-12-12",
  },
  {
    id: "3",
    state: "UP",
    metric: "Address Changes",
    value: 180000,
    expected: 140000,
    deviation: 29,
    type: "spike" as const,
    severity: "medium" as const,
    date: "2024-12-10",
  },
  {
    id: "4",
    state: "Kerala",
    metric: "Enrolments",
    value: 45000,
    expected: 62000,
    deviation: -27,
    type: "drop" as const,
    severity: "medium" as const,
    date: "2024-12-08",
  },
  {
    id: "5",
    state: "Odisha",
    metric: "Biometric Updates",
    value: 72000,
    expected: 58000,
    deviation: 24,
    type: "spike" as const,
    severity: "low" as const,
    date: "2024-12-05",
  },
]

// Biometric failure by occupation (hypothetical segmentation)
export const occupationFailureData = [
  { name: "Agriculture", value: 8.5 },
  { name: "Construction", value: 7.2 },
  { name: "Manufacturing", value: 4.8 },
  { name: "Services", value: 2.1 },
  { name: "IT/Tech", value: 1.2 },
]

// State-wise risk scores
export const stateRiskScores = [
  { name: "Bihar", riskScore: 78, biometric: 8.5, updates: 12.2, growth: -2.1 },
  { name: "Jharkhand", riskScore: 72, biometric: 7.8, updates: 10.5, growth: -1.5 },
  { name: "Odisha", riskScore: 65, biometric: 6.2, updates: 9.8, growth: 0.5 },
  { name: "UP", riskScore: 52, biometric: 5.2, updates: 8.1, growth: 2.1 },
  { name: "MP", riskScore: 48, biometric: 4.8, updates: 7.5, growth: 2.8 },
  { name: "Karnataka", riskScore: 25, biometric: 2.1, updates: 4.2, growth: 5.5 },
  { name: "Kerala", riskScore: 18, biometric: 1.8, updates: 3.5, growth: 4.2 },
]
