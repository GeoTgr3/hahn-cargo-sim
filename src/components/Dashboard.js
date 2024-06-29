import React from 'react';
import AcceptedOrders from './AcceptedOrders';
import CoinBalance from './CoinBalance';
import SimulationControl from './SimulationControl';
import TransporterStatus from './TransporterStatus';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <SimulationControl />
            <TransporterStatus />
            <AcceptedOrders />
            <CoinBalance />
        </div>
    );
}

export default Dashboard;
