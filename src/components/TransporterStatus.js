import axios from 'axios';
import React, { useEffect, useState } from 'react';

function TransporterStatus() {
    const [transporters, setTransporters] = useState([]);

    useEffect(() => {
        axios.get('/api/transporters', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => setTransporters(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Transporter Status</h2>
            <ul>
                {transporters.map(transporter => (
                    <li key={transporter.id}>{transporter.name}: {transporter.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default TransporterStatus;
