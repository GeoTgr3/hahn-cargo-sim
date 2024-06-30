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

    return (
        <div>
            <h2>Coin Balance</h2>
            <p>{balance}</p>
        </div>
    );
}

export default CoinBalance;
