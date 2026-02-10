'use client';

import { HeroVariant, Event } from '@/app/types';
import { Countdown } from '@/app/components/countdown';

interface HeroSectionProps {
    event: Event;
    variant?: HeroVariant;
    onRegisterClick?: () => void;
}

export function HeroSection({ event, variant = 'fullscreen', onRegisterClick }: HeroSectionProps) {
    if (variant === 'fullscreen') {
        return (
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzRhNWU4MCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] opacity-20" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                        <span className="text-sm text-white/90 uppercase tracking-wider font-semibold">
                            {event.category}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                        {event.title}
                    </h1>

                    {event.subtitle && (
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            {event.subtitle}
                        </p>
                    )}

                    <div className="mb-12">
                        <Countdown targetDate={event.date} variant="bold" className="justify-center" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={onRegisterClick}
                            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-200 min-h-[56px] w-full sm:w-auto"
                        >
                            Reserve Your Spot Now
                        </button>
                        <div className="text-gray-300 text-sm">
                            <span className="font-semibold">{event.location}</span> • {event.duration}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-white/50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>
        );
    }

    if (variant === 'split') {
        return (
            <section className="min-h-screen grid md:grid-cols-2">
                {/* Left Side - Content */}
                <div className="flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-gray-900 to-black">
                    <div className="max-w-xl">
                        <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30 mb-4">
                            <span className="text-xs text-purple-300 uppercase tracking-wider font-semibold">
                                {event.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                            {event.title}
                        </h1>

                        {event.subtitle && (
                            <p className="text-lg text-gray-300 mb-8">{event.subtitle}</p>
                        )}

                        <div className="mb-8">
                            <Countdown targetDate={event.date} variant="digital" />
                        </div>

                        <button
                            onClick={onRegisterClick}
                            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 min-h-[56px]"
                        >
                            Get Your Ticket
                        </button>

                        <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{event.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{event.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Visual */}
                <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 text-center p-8">
                        {event.imageUrl && (
                            <div className="w-full h-full absolute inset-0 opacity-30">
                                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    if (variant === 'gradient') {
        return (
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 animate-gradient-shift">
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                        {event.title}
                    </h1>

                    {event.subtitle && (
                        <p className="text-2xl md:text-3xl text-white/90 mb-10 font-light max-w-3xl mx-auto drop-shadow-lg">
                            {event.subtitle}
                        </p>
                    )}

                    <div className="mb-10">
                        <Countdown targetDate={event.date} variant="minimal" className="justify-center text-white drop-shadow-lg" />
                    </div>

                    <button
                        onClick={onRegisterClick}
                        className="px-10 py-5 bg-white text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-200 min-h-[60px]"
                    >
                        Join the Event
                    </button>
                </div>
            </section>
        );
    }

    return null;
}
