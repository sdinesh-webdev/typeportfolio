import React, { useState, useEffect } from 'react';
import './index.css';

export const Loading: React.FC = () => {
    const [number, setNumber] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(prevNumber => (prevNumber < 100 ? prevNumber + 1 : 1));
        }, 10); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-container">
            <div className="number">{number}</div>
        </div>
    )
}