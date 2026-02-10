import { Event, SeatInfo, RegistrationStep } from '@/app/types';
import { HeroSection } from '@/app/components/hero-section';
import { StickyCta } from '@/app/components/sticky-cta';
import { SeatIndicator } from '@/app/components/seat-indicator';
import { RegistrationWrapper } from '@/app/components/RegistrationWrapper';
import { Countdown } from '@/app/components/countdown';

const event: Event = {
    id: '8',
    title: 'Virtual Music Festival 2026',
    subtitle: 'Experience Live Music From Anywhere',
    description: 'The biggest virtual concert experience of the year',
    date: '2026-07-04T20:00:00Z',
    duration: '8 hours',
    timezone: 'UTC',
    location: 'Worldwide Livestream',
    category: 'Virtual Concert',
    price: '$49',
    earlyBirdPrice: '$29',
};

const seatInfo: SeatInfo = {
    totalSeats: 50000,
    remainingSeats: 2847,
    currentViewers: 1523,
};

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Get Your Ticket',
        description: 'Join thousands of music lovers',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
        ],
    },
];

export default function VirtualConcertPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    {/* Pulsing circles */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
                    <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <div className="mb-8">
                        <span className="text-7xl animate-bounce inline-block">🎵</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black text-white mb-6 leading-tight drop-shadow-2xl animate-pulse">
                        {event.title}
                    </h1>
                    <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 font-bold mb-12">
                        {event.subtitle}
                    </p>

                    <div className="mb-12">
                        <Countdown targetDate={event.date} variant="bold" className="justify-center" />
                    </div>

                    <button className="px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-black text-2xl rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all animate-pulse min-h-[70px]">
                        GET YOUR TICKET - ${event.earlyBirdPrice}
                    </button>

                    <p className="mt-6 text-white text-xl">
                        <span className="line-through opacity-70">${event.price}</span>
                        <span className="ml-3 text-yellow-300 font-black">LIMITED EARLY BIRD!</span>
                    </p>
                </div>
            </section>

            {/* Sticky CTA */}
            <StickyCta
                text="🎟️ Get Tickets Now"
                seatsRemaining={seatInfo.remainingSeats}
                variant="urgent"
            />

            {/* Featured Artists */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                        Headliners
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'The Neon Dreams', genre: 'Electronic' },
                            { name: 'Aurora Rising', genre: 'Pop' },
                            { name: 'Bass Reactor', genre: 'EDM' },
                        ].map((artist, idx) => (
                            <div
                                key={idx}
                                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-purple-900 to-pink-900 hover:scale-105 transition-transform"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-3xl font-black text-white mb-1">{artist.name}</h3>
                                    <p className="text-pink-300 font-semibold">{artist.genre}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lineup */}
            <section className="py-20 px-4 bg-purple-950">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
                        8-Hour Lineup
                    </h2>
                    <div className="space-y-4">
                        {[
                            { time: '20:00', artist: 'Opening Act', duration: '45min' },
                            { time: '20:50', artist: 'The Neon Dreams', duration: '90min' },
                            { time: '22:30', artist: 'Aurora Rising', duration: '90min' },
                            { time: '00:00', artist: 'Bass Reactor', duration: '120min' },
                        ].map((slot, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="text-3xl font-bold text-purple-400 font-mono">{slot.time}</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{slot.artist}</h3>
                                        <p className="text-gray-400">{slot.duration}</p>
                                    </div>
                                </div>
                                <div className="text-pink-400 font-bold">LIVE</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ticket Stats */}
            <section className="py-12 px-4 bg-black">
                <div className="max-w-4xl mx-auto">
                    <SeatIndicator seatInfo={seatInfo} showProgress />
                    <p className="text-center text-gray-400 mt-6">
                        🔥 {seatInfo.currentViewers?.toLocaleString()} people are viewing this page right now
                    </p>
                </div>
            </section>

            {/* Registration */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
                        Get Your Ticket
                    </h2>
                    <RegistrationWrapper
                        steps={registrationSteps}
                    />
                </div>
            </section>
        </div>
    );
}
