import { Event, SeatInfo, RegistrationStep } from '@/app/types';
import { StickyCta } from '@/app/components/sticky-cta';
import { SeatIndicator } from '@/app/components/seat-indicator';
import { RegistrationWrapper } from '@/app/components/RegistrationWrapper';
import { ScarcityBadge } from '@/app/components/scarcity-badge';
import { Countdown } from '@/app/components/countdown';

const event: Event = {
    id: '10',
    title: 'Product Launch Event',
    subtitle: 'The Future is Here',
    description: 'Be the first to experience our revolutionary product',
    date: '2026-08-01T18:00:00Z',
    duration: '2 hours',
    timezone: 'UTC',
    location: 'Virtual Livestream',
    category: 'Product Launch',
};

const seatInfo: SeatInfo = {
    totalSeats: 10000,
    remainingSeats: 487,
    currentViewers: 2341,
};

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Get Early Access',
        description: 'Be among the first',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
        ],
    },
];

export default function ProductLaunchPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Dramatic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                </div>

                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full animate-pulse opacity-30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <div className="mb-8">
                        <ScarcityBadge
                            message="EXCLUSIVE LAUNCH EVENT"
                            urgencyLevel="critical"
                            icon="🚀"
                            className="text-lg"
                        />
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                        {event.title}
                    </h1>
                    <p className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 font-bold mb-12">
                        {event.subtitle}
                    </p>

                    <div className="mb-12">
                        <p className="text-gray-300 mb-4 text-xl">LAUNCHING IN:</p>
                        <Countdown targetDate={event.date} variant="bold" className="justify-center" />
                    </div>

                    <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-black text-2xl rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all overflow-hidden min-h-[70px]">
                        <span className="relative z-10">RESERVE YOUR SPOT</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <p className="mt-8 text-white text-lg flex items-center justify-center gap-2">
                        <span className="flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        {seatInfo.currentViewers?.toLocaleString()} watching live
                    </p>
                </div>
            </section>

            {/* Sticky CTA */}
            <StickyCta
                text="🔥 Claim Early Access"
                seatsRemaining={seatInfo.remainingSeats}
                variant="urgent"
            />

            {/* Teaser Features */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black text-center mb-4 text-white">
                        Revolutionary Features
                    </h2>
                    <p className="text-xl text-center text-gray-400 mb-16">
                        Something the world has never seen before
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '⚡', title: 'Lightning Fast', desc: '10x faster than competition' },
                            { icon: '🎯', title: 'Precision Built', desc: 'Engineered to perfection' },
                            { icon: '🌟', title: 'Game Changing', desc: 'Redefines the category' },
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="group relative overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transform hover:scale-105 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all" />
                                <div className="relative z-10">
                                    <div className="text-6xl mb-4">{feature.icon}</div>
                                    <h3 className="text-2xl font-black text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Anticipation Builder */}
            <section className="py-20 px-4 bg-purple-950">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
                        What to Expect
                    </h2>
                    <div className="space-y-6">
                        {[
                            'Live product demonstration',
                            'Exclusive launch pricing (50% off)',
                            'Q&A with the founding team',
                            'Limited-time founder bonuses worth $500',
                            'Early adopter community access',
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center gap-4 bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30"
                            >
                                <div className="text-3xl">✨</div>
                                <p className="text-xl text-white font-semibold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Urgency */}
            <section className="py-12 px-4 bg-black">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <ScarcityBadge message="Launch Day Only - 50% OFF" urgencyLevel="critical" icon="💰" />
                        <ScarcityBadge
                            message={`${seatInfo.currentViewers} watching`}
                            urgencyLevel="high"
                            icon="👁️"
                        />
                    </div>
                    <SeatIndicator seatInfo={seatInfo} showProgress />
                </div>
            </section>

            {/* Registration */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white">
                        Reserve Your Spot
                    </h2>
                    <p className="text-xl text-center text-pink-400 mb-12 font-bold">
                        🎁 First 100 registrants get exclusive founder perks
                    </p>
                    <RegistrationWrapper
                        steps={registrationSteps}
                    />
                </div>
            </section>
        </div>
    );
}
