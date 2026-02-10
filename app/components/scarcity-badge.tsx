'use client';

import { UrgencyLevel } from '../types';

interface ScarcityBadgeProps {
    message: string;
    urgencyLevel?: UrgencyLevel;
    icon?: string;
    className?: string;
}

export function ScarcityBadge({
    message,
    urgencyLevel = 'medium',
    icon,
    className = '',
}: ScarcityBadgeProps) {
    const urgencyStyles = {
        low: 'bg-blue-500/20 border-blue-500 text-blue-300',
        medium: 'bg-yellow-500/20 border-yellow-500 text-yellow-300',
        high: 'bg-orange-500/20 border-orange-500 text-orange-300 animate-pulse',
        critical: 'bg-red-500/20 border-red-500 text-red-300 animate-pulse',
    };

    return (
        <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 font-semibold text-sm ${urgencyStyles[urgencyLevel]} ${className}`}
        >
            {icon && <span className="text-lg">{icon}</span>}
            <span>{message}</span>
        </div>
    );
}
