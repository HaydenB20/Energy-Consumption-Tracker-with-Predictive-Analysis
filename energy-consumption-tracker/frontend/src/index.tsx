import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export interface EnergyData {
    id: string;
    consumption: number;
    timestamp: string;
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);