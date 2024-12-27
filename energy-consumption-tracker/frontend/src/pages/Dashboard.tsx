import React, { useEffect, useState } from 'react';
import { fetchEnergyConsumptionData } from '../services/api';
import { EnergyData } from '../types';

const Dashboard: React.FC = () => {
    const [energyData, setEnergyData] = useState<EnergyData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: EnergyData[] = await fetchEnergyConsumptionData();
                setEnergyData(data);
            } catch (err) {
                setError('Failed to fetch energy data');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {error && <p>{error}</p>}
            {/* Render energy data here */}
        </div>
    );
};

export default Dashboard;