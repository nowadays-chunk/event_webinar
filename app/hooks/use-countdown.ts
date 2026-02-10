'use client';

import { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

export function useCountdown(targetDate: string): CountdownTime {
    const [countdown, setCountdown] = useState<CountdownTime>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isUrgent: false,
        isCritical: false,
    });

    useEffect(() => {
        const calculateCountdown = () => {
            const target = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const difference = target - now;

            if (difference <= 0) {
                setCountdown({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    isUrgent: false,
                    isCritical: false,
                });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            const totalHours = days * 24 + hours;
            const isUrgent = totalHours < 24;
            const isCritical = totalHours < 1;

            setCountdown({
                days,
                hours,
                minutes,
                seconds,
                isUrgent,
                isCritical,
            });
        };

        calculateCountdown();
        const interval = setInterval(calculateCountdown, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return countdown;
}
