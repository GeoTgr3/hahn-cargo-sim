import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AcceptedOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => setOrders(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Accepted Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default AcceptedOrders;
