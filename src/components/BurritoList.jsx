import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

function BurritoList() {
    const [burritos, setBurritos] = useState([]);

    useEffect(() => {
        apiService.getBurritos().then(data => {
            setBurritos(data);
            console.log(data); // Check what data is received
        });
    }, []);

    return (
        <div>
            <h2>Burritos</h2>
            <ul>
                {burritos.map(burrito => (
                    <li key={burrito.name}>{`${burrito.name} - ${burrito.size} - $${burrito.price}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default BurritoList;
