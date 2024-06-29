import axios from 'axios';
import React, { useState } from 'react';

function SimulationControl() {
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = async () => {
        setIsRunning(true);
        await axios.post('/api/simulation/start', {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    };

    const handleStop = async () => {
        setIsRunning(false);
        await axios.post('/api/simulation/stop', {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    };

    return (
        <div>
            <button onClick={handleStart} disabled={isRunning}>Start</button>
            <button onClick={handleStop} disabled={!isRunning}>Stop</button>
        </div>
    );
}

export default SimulationControl;
