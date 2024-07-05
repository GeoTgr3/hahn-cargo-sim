import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CoinBalance() {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        axios.get('https://localhost:7115/User/CoinAmount', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => setBalance(response.data))
        .catch(error => console.error(error));
    }, []);

    // Inline styles
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Arial", sans-serif', // Consistent font
    };

    const headingStyle = {
        color: 'orange', // Theme color
        margin: '20px 0', // Spacing
    };

    const balanceStyle = {
        fontSize: '20px', // Larger font size for balance
        color: 'black', // Color for balance text
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Coin Balance</h2>
            <p style={balanceStyle}>{balance}</p>
        </div>
    );
}

export default CoinBalance;