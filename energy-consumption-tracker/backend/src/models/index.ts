export interface EnergyConsumptionRecord {
    id: string;
    userId: string;
    timestamp: Date;
    consumption: number; // in kWh
}

export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export interface PredictiveAnalysis {
    userId: string;
    predictedConsumption: number; // in kWh
    confidenceInterval: number; // in percentage
}