export interface DeviceData {
    deviceId: string;
    energyConsumption: number;
    timestamp: Date;
}

export function collectData(deviceId: string, energyConsumption: number): DeviceData {
    return {
        deviceId,
        energyConsumption,
        timestamp: new Date(),
    };
}

export function simulateDataCollection(deviceId: string): DeviceData {
    const simulatedConsumption = Math.random() * 100; // Simulate energy consumption
    return collectData(deviceId, simulatedConsumption);
}

export function sendDataToBackend(data: DeviceData): Promise<Response> {
    return fetch('http://localhost:5000/api/energy-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}