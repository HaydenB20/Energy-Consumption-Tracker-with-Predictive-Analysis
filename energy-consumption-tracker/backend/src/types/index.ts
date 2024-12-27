export interface EnergyConsumptionRecord {
    id: number;
    userId: number;
    timestamp: Date;
    consumption: number; // in kWh
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface PredictiveAnalysisResult {
    predictedConsumption: number; // in kWh
    confidenceInterval: number; // in percentage
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}