'use client';

import { useEffect, useState } from 'react';
import { CTASize } from '../types';

interface StickyCtaProps {
    text: string;
    seatsRemaining?: number;
    onClick?: () => void;
    size?: CTASize;
    variant?: 'primary' | 'urgent';
}

export function StickyCta({
    text,
    seatsRemaining,
    onClick,
    size = 'md',
    variant = 'primary',
}: StickyCtaProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sizeClasses = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-base',
        lg: 'py-4 px-8 text-lg',
    };

    const variantClasses = {
        primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
        urgent: 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 animate-pulse',
    };

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                        {seatsRemaining !== undefined && (
                            <div className="flex items-center gap-2 text-sm md:text-base">
                                <span className="flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <span className="text-gray-300">
                                    Only <span className="font-bold text-white">{seatsRemaining}</span> seats left!
                                </span>
                            </div>
                        )}
                        <button
                            onClick={onClick}
                            className={`
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                text-white font-bold rounded-lg
                shadow-lg hover:shadow-xl
                transform hover:scale-105
                transition-all duration-200
                w-full md:w-auto
                whitespace-nowrap
                min-h-[44px] md:min-h-0
              `}
                        >
                            {text}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
