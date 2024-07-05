import React from 'react';
import CoinBalance from './CoinBalance';
import SimulationControl from './SimulationControl';

function Dashboard() {
    // Inline styles
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Full viewport height
        fontFamily: '"Arial", sans-serif', // Consistent font
    };

    const headingStyle = {
        color: 'orange', // Theme color
        margin: '20px 0', // Spacing
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Dashboard</h2>
            <SimulationControl />
            <CoinBalance />
        </div>
    );
}

export default Dashboard;