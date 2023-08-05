import { useEffect, useState } from 'react';
import { formatTime } from '../Utils';

export function MoleTimer({ duration, handleFinished }) {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        let timeoutId;
        timeoutId = setInterval(() => setTimeLeft((prev) => prev - 100), 100);
        return () => {
            clearInterval(timeoutId);
        };
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) {
            handleFinished();
        }
    }, [handleFinished, timeLeft]);
    return formatTime(timeLeft);
}
