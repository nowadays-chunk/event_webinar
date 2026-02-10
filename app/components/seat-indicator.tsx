'use client';

import { SeatInfo } from '../types';

interface SeatIndicatorProps {
    seatInfo: SeatInfo;
    className?: string;
    showProgress?: boolean;
}

export function SeatIndicator({ seatInfo, className = '', showProgress = true }: SeatIndicatorProps) {
    const { totalSeats, remainingSeats, currentViewers } = seatInfo;
    const percentageRemaining = (remainingSeats / totalSeats) * 100;
    const percentageFilled = 100 - percentageRemaining;

    const getUrgencyLevel = () => {
        if (percentageRemaining < 10) return 'critical';
        if (percentageRemaining < 25) return 'high';
        if (percentageRemaining < 50) return 'medium';
        return 'low';
    };

    const urgencyColors = {
        low: 'bg-green-500',
        medium: 'bg-yellow-500',
        high: 'bg-orange-500',
        critical: 'bg-red-500 animate-pulse',
    };

    const urgencyTextColors = {
        low: 'text-green-500',
        medium: 'text-yellow-500',
        high: 'text-orange-500',
        critical: 'text-red-500',
    };

    const urgencyLevel = getUrgencyLevel();

    return (
        <div className={`${className}`}>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <svg
                        className={`w-5 h-5 ${urgencyTextColors[urgencyLevel]}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <span className={`font-bold text-lg ${urgencyTextColors[urgencyLevel]}`}>
                        {remainingSeats} / {totalSeats} seats left
                    </span>
                </div>
                {currentViewers && (
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                        <span className="flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span>{currentViewers} viewing</span>
                    </div>
                )}
            </div>

            {showProgress && (
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                        className={`h-full ${urgencyColors[urgencyLevel]} transition-all duration-1000 ease-out rounded-full`}
                        style={{ width: `${percentageFilled}%` }}
                    />
                </div>
            )}

            {urgencyLevel === 'critical' && (
                <p className="text-xs text-red-400 mt-2 font-semibold animate-pulse">
                    ⚠️ Almost sold out! Register now to secure your spot.
                </p>
            )}
        </div>
    );
}
