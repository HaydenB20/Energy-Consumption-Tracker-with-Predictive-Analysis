export interface EnergyConsumptionData {
    id: number;
    userId: number;
    timestamp: string;
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
    data: T;
    message?: string;
}

export interface EnergyData {
    id: string;
    consumption: number;
    timestamp: string;
}