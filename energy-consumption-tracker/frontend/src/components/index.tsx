import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import Button from './Button';
import Chart from './Chart';
import Loader from './Loader';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

export { Button, Chart, Loader };