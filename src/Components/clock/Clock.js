import React, { useState, useEffect, useRef } from "react";
import "./styles/Clock.css";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className="time">
            <p>{time}</p>
        </div>
    );
}

export default Clock;
