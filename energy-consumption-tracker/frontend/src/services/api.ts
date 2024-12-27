import axios from 'axios';
import { EnergyData } from '../types';

const API_BASE_URL = 'http://localhost:5001/api'; // Adjust the base URL as needed

export const fetchEnergyConsumptionData = async (): Promise<EnergyData[]> => {
    // Replace with actual API call
    return [
        { id: '1', consumption: 100, timestamp: '2023-12-27T00:00:00Z' },
        { id: '2', consumption: 150, timestamp: '2023-12-28T00:00:00Z' },
    ];
};

export const submitEnergyConsumptionData = async (data: any) => {
    // Submit energy consumption data logic
};

export const fetchPredictiveAnalytics = async () => {
    // Fetch predictive analytics logic
};