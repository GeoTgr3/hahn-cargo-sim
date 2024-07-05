import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:7115/User/Login', {
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    // Inline styles
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full viewport height
        fontFamily: '"Arial", sans-serif', // Example font
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        border: '1px solid orange',
        borderRadius: '5px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: 'orange',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return (
        <div style={containerStyle}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={inputStyle}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
            />
            <button onClick={handleLogin} style={buttonStyle}>Login</button>
        </div>
    );
}

export default Login;