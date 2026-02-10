'use client';

import { useCountdown } from '../hooks/use-countdown';
import { CountdownVariant } from '../types';

interface CountdownProps {
    targetDate: string;
    variant?: CountdownVariant;
    className?: string;
}

export function Countdown({ targetDate, variant = 'digital', className = '' }: CountdownProps) {
    const countdown = useCountdown(targetDate);

    const getUrgencyColor = () => {
        if (countdown.isCritical) return 'text-red-500';
        if (countdown.isUrgent) return 'text-orange-500';
        return 'text-green-500';
    };

    if (variant === 'digital') {
        return (
            <div className={`flex gap-4 ${className}`}>
                {[
                    { label: 'Days', value: countdown.days },
                    { label: 'Hours', value: countdown.hours },
                    { label: 'Minutes', value: countdown.minutes },
                    { label: 'Seconds', value: countdown.seconds },
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className={`text-4xl md:text-6xl font-bold tabular-nums ${getUrgencyColor()} transition-colors duration-500`}>
                            {String(item.value).padStart(2, '0')}
                        </div>
                        <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide mt-2">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (variant === 'minimal') {
        return (
            <div className={`inline-flex items-center gap-2 text-2xl font-bold tabular-nums ${getUrgencyColor()} ${className}`}>
                {countdown.days > 0 && <span>{countdown.days}d</span>}
                <span>{String(countdown.hours).padStart(2, '0')}h</span>
                <span>{String(countdown.minutes).padStart(2, '0')}m</span>
                <span>{String(countdown.seconds).padStart(2, '0')}s</span>
            </div>
        );
    }

    if (variant === 'bold') {
        return (
            <div className={`relative ${className}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse" />
                <div className="relative flex gap-3 md:gap-6">
                    {[
                        { label: 'Days', value: countdown.days },
                        { label: 'Hours', value: countdown.hours },
                        { label: 'Minutes', value: countdown.minutes },
                        { label: 'Seconds', value: countdown.seconds },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[100px]"
                        >
                            <div className={`text-3xl md:text-6xl font-black tabular-nums bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl`}>
                                {String(item.value).padStart(2, '0')}
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-2 font-semibold">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (variant === 'circular') {
        return (
            <div className={`flex gap-4 ${className}`}>
                {[
                    { label: 'Days', value: countdown.days, max: 365 },
                    { label: 'Hours', value: countdown.hours, max: 24 },
                    { label: 'Minutes', value: countdown.minutes, max: 60 },
                    { label: 'Seconds', value: countdown.seconds, max: 60 },
                ].map((item, idx) => {
                    const percentage = (item.value / item.max) * 100;
                    const circumference = 2 * Math.PI * 40;
                    const strokeDashoffset = circumference - (percentage / 100) * circumference;

                    return (
                        <div key={idx} className="relative flex flex-col items-center">
                            <svg className="w-20 h-20 md:w-28 md:h-28 transform -rotate-90">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                    className="text-gray-700"
                                />
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    className={`${getUrgencyColor()} transition-all duration-1000`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className={`text-2xl md:text-3xl font-bold tabular-nums ${getUrgencyColor()}`}>
                                    {String(item.value).padStart(2, '0')}
                                </span>
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide mt-2">
                                {item.label}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return null;
}
