import { Event, SeatInfo, RegistrationStep } from '@/app/types';
import { HeroSection } from '@/app/components/hero-section';
import { StickyCta } from '@/app/components/sticky-cta';
import { SeatIndicator } from '@/app/components/seat-indicator';
import { RegistrationWrapper } from '@/app/components/RegistrationWrapper';
import { ScarcityBadge } from '@/app/components/scarcity-badge';
import { Countdown } from '@/app/components/countdown';

const event: Event = {
    id: '6',
    title: 'Marketing Masterclass 2026',
    subtitle: '10X Your Conversion Rates',
    description: 'Learn cutting-edge growth hacking strategies',
    date: '2026-03-25T16:00:00Z',
    duration: '3 hours',
    timezone: 'PST',
    location: 'Live Virtual Event',
    category: 'Marketing & Growth',
    price: '$497',
    earlyBirdPrice: '$297',
};

const seatInfo: SeatInfo = {
    totalSeats: 500,
    remainingSeats: 34,
    currentViewers: 127,
};

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Get Instant Access',
        description: 'Reserve your seat now',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
        ],
    },
];

export default function MarketingMasterclassPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 opacity-90" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <div className="animate-bounce mb-6">
                        <span className="text-5xl">🚀</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                        {event.title}
                    </h1>
                    <p className="text-3xl md:text-4xl text-white font-bold mb-8 drop-shadow-lg">
                        {event.subtitle}
                    </p>

                    <div className="mb-12">
                        <Countdown targetDate={event.date} variant="bold" className="justify-center" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-12 py-6 bg-white text-black font-black text-2xl rounded-full shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all animate-pulse-glow min-h-[70px]">
                            JOIN NOW - ${event.earlyBirdPrice}
                        </button>
                    </div>

                    <p className="mt-6 text-white text-lg">
                        <span className="line-through opacity-70">${event.price}</span>
                        <span className="ml-3 text-yellow-300 font-black">SAVE $200 TODAY!</span>
                    </p>
                </div>
            </section>

            {/* Sticky CTA */}
            <StickyCta
                text="🔥 Get Instant Access"
                seatsRemaining={seatInfo.remainingSeats}
                variant="urgent"
            />

            {/* Urgency Bar */}
            <section className="bg-gradient-to-r from-red-600 to-orange-600 py-6 animate-pulse">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                        <ScarcityBadge message="127 people viewing!" urgencyLevel="critical" icon="👀" />
                        <ScarcityBadge message="Early bird ends TONIGHT!" urgencyLevel="critical" icon="⏰" />
                    </div>
                </div>
            </section>

            {/* Growth Stats */}
            <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
                        Proven Results
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { stat: '10X', label: 'Average ROI Increase' },
                            { stat: '87%', label: 'Conversion Improvement' },
                            { stat: '50K+', label: 'Students Worldwide' },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-orange-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-10 border border-orange-500/30 text-center hover:scale-105 transition-transform"
                            >
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mb-3">
                                    {item.stat}
                                </div>
                                <p className="text-xl text-gray-300 font-semibold">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
                        Transform Your Marketing
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            'Viral content strategies that get shared',
                            'A/B testing frameworks that convert',
                            'Email sequences that sell on autopilot',
                            'Social media growth hacks',
                            'Landing page optimization secrets',
                            'Retargeting campaigns that work',
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 bg-gradient-to-r from-orange-900/20 to-pink-900/20 rounded-lg p-6 border border-orange-500/20"
                            >
                                <div className="text-3xl">✅</div>
                                <p className="text-lg text-white font-semibold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seat Indicator */}
            <section className="py-12 px-4 bg-gradient-to-r from-red-950 to-orange-950">
                <div className="max-w-4xl mx-auto">
                    <SeatIndicator seatInfo={seatInfo} showProgress />
                </div>
            </section>

            {/* Registration */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white">
                        Secure Your Seat NOW
                    </h2>
                    <p className="text-xl text-center text-orange-400 mb-12 font-bold">
                        ⚡ Instant access + Lifetime recordings + Bonuses worth $1,000
                    </p>
                    <RegistrationWrapper
                        steps={registrationSteps}
                    />
                </div>
            </section>
        </div>
    );
}
