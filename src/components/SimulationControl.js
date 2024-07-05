import axios from 'axios';
import React, { useState } from 'react';

function SimulationControl() {
    const [isRunning, setIsRunning] = useState(false);

    const getToken = () => {
        return localStorage.getItem('token');
    };

    const handleStart = async () => {
        setIsRunning(true);
        try {
            const token = getToken();
            const requestBody = {
                token: token,
                // Add other data you want to send in the request body
                // Example: simulationId, parameters, etc.
            };
            const response = await axios.post('https://localhost:7159/simulation/start', requestBody);
            console.log('Response from backend:', response.data);
            // Handle success as needed
        } catch (error) {
            // Handle error
            console.error('Error starting simulation:', error);
        } finally {
            setIsRunning(false);
        }
    };

    const handleStop = async () => {
        setIsRunning(true);
        try {
            const token = getToken();
            const requestBody = {
                token: token,
                // Add other data you want to send in the request body
            };
            const response = await axios.post('https://localhost:7159/api/simulation/stop', requestBody);
            console.log('Response from backend:', response.data);
            // Handle success as needed
        } catch (error) {
            // Handle error
            console.error('Error stopping simulation:', error);
        } finally {
            setIsRunning(false);
        }
    };

    // Inline styles
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px',
    };

    const buttonStyle = {
        fontSize: '16px',
        padding: '10px 20px',
        margin: '0 10px',
        backgroundColor: 'orange',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const disabledButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'grey',
        cursor: 'not-allowed',
    };

    return (
        <div style={containerStyle}>
            <button
                onClick={handleStart}
                disabled={isRunning}
                style={isRunning ? disabledButtonStyle : buttonStyle}
            >
                Start
            </button>
            <button
                onClick={handleStop}
                disabled={!isRunning}
                style={!isRunning ? disabledButtonStyle : buttonStyle}
            >
                Stop
            </button>
        </div>
    );
}

export default SimulationControl;