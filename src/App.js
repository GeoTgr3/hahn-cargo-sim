import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Routes> {/* Use Routes instead of Switch */}
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;