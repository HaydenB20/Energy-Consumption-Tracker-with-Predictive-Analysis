import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Dashboard} />
            </Switch>
        </Router>
    );
};

export default App;