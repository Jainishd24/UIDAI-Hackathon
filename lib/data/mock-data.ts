// Enrolment data by year
export const enrolmentTrendData = [
  { name: "2019", value: 125000000 },
  { name: "2020", value: 98000000 },
  { name: "2021", value: 145000000 },
  { name: "2022", value: 178000000 },
  { name: "2023", value: 195000000 },
  { name: "2024", value: 210000000 },
]

// State-wise enrolments (top 10)
export const stateEnrolmentData = [
  { name: "UP", value: 28500000 },
  { name: "Maharashtra", value: 24200000 },
  { name: "Bihar", value: 19800000 },
  { name: "West Bengal", value: 18500000 },
  { name: "MP", value: 16200000 },
  { name: "Rajasthan", value: 15800000 },
  { name: "Tamil Nadu", value: 14500000 },
  { name: "Karnataka", value: 13200000 },
  { name: "Gujarat", value: 12800000 },
  { name: "Andhra Pradesh", value: 11500000 },
]

// Gender distribution
export const genderDistributionData = [
  { name: "Male", value: 52 },
  { name: "Female", value: 47 },
  { name: "Other", value: 1 },
]

// Age group distribution
export const ageGroupData = [
  { name: "0-5", value: 12 },
  { name: "5-18", value: 22 },
  { name: "18-35", value: 28 },
  { name: "35-60", value: 26 },
  { name: "60+", value: 12 },
]

// Demographic update types
export const demographicUpdateData = [
  { name: "Address", value: 45000000 },
  { name: "Mobile", value: 38000000 },
  { name: "Name", value: 12000000 },
  { name: "DOB", value: 8500000 },
  { name: "Email", value: 6200000 },
]

// Biometric failure by age
export const biometricFailureByAge = [
  { name: "0-18", failure: 2.1, success: 97.9 },
  { name: "18-35", failure: 1.8, success: 98.2 },
  { name: "35-50", failure: 3.2, success: 96.8 },
  { name: "50-65", failure: 5.8, success: 94.2 },
  { name: "65+", failure: 12.4, success: 87.6 },
]

// State risk data
export const stateRiskData = [
  { name: "Bihar", risk: "high" as const, value: 8.5 },
  { name: "Jharkhand", risk: "high" as const, value: 7.8 },
  { name: "Uttar Pradesh", risk: "medium" as const, value: 5.2 },
  { name: "Madhya Pradesh", risk: "medium" as const, value: 4.8 },
  { name: "Karnataka", risk: "low" as const, value: 2.1 },
  { name: "Kerala", risk: "low" as const, value: 1.8 },
]

// Monthly trend data
export const monthlyTrendData = [
  { month: "Jan", enrolment: 15200000, updates: 8500000, biometric: 2100000 },
  { month: "Feb", enrolment: 14800000, updates: 7800000, biometric: 1950000 },
  { month: "Mar", enrolment: 16500000, updates: 9200000, biometric: 2300000 },
  { month: "Apr", enrolment: 17200000, updates: 8900000, biometric: 2150000 },
  { month: "May", enrolment: 15800000, updates: 8100000, biometric: 1980000 },
  { month: "Jun", enrolment: 14200000, updates: 7500000, biometric: 1850000 },
  { month: "Jul", enrolment: 16800000, updates: 9500000, biometric: 2400000 },
  { month: "Aug", enrolment: 18500000, updates: 10200000, biometric: 2650000 },
  { month: "Sep", enrolment: 17800000, updates: 9800000, biometric: 2480000 },
  { month: "Oct", enrolment: 19200000, updates: 10500000, biometric: 2720000 },
  { month: "Nov", enrolment: 18900000, updates: 10100000, biometric: 2580000 },
  { month: "Dec", enrolment: 17500000, updates: 9200000, biometric: 2350000 },
]

// Prediction data
export const predictionData = [
  { month: "Jan 25", actual: 19500000, predicted: null },
  { month: "Feb 25", actual: 18800000, predicted: null },
  { month: "Mar 25", actual: 20200000, predicted: null },
  { month: "Apr 25", actual: null, predicted: 21500000 },
  { month: "May 25", actual: null, predicted: 20800000 },
  { month: "Jun 25", actual: null, predicted: 19200000 },
]

// Risk cluster data
export const riskClusterData = [
  { name: "High Risk", states: 6, population: 285000000, biometricFailure: 7.2 },
  { name: "Medium Risk", states: 12, population: 420000000, biometricFailure: 4.5 },
  { name: "Low Risk", states: 18, population: 695000000, biometricFailure: 2.1 },
]
