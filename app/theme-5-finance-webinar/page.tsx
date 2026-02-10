import { Event, SeatInfo, RegistrationStep } from '@/app/types';
import { HeroSection } from '@/app/components/hero-section';
import { StickyCta } from '@/app/components/sticky-cta';
import { SeatIndicator } from '@/app/components/seat-indicator';
import { RegistrationWrapper } from '@/app/components/RegistrationWrapper';
import { ScarcityBadge } from '@/app/components/scarcity-badge';
import { Countdown } from '@/app/components/countdown';

const event: Event = {
    id: '5',
    title: 'Wealth Building Masterclass',
    subtitle: 'Strategic Investment & Financial Freedom',
    description: 'Learn proven strategies from top financial experts',
    date: '2026-04-15T14:00:00Z',
    duration: '4 hours',
    timezone: 'EST',
    location: 'Virtual Webinar',
    category: 'Finance & Investment',
    price: '$297',
    earlyBirdPrice: '$197',
};

const seatInfo: SeatInfo = {
    totalSeats: 200,
    remainingSeats: 12,
    currentViewers: 89,
};

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Secure Your Access',
        description: 'Join exclusive masterclass',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true },
        ],
    },
];

export default function FinanceWebinarPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
            {/* Hero */}
            <section className="relative min-h-[90vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-black" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <div className="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 mb-6">
                        <span className="text-sm text-yellow-200 uppercase tracking-wider font-semibold">
                            💰 Premium Masterclass
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        {event.title}
                    </h1>
                    <p className="text-2xl text-gray-300 mb-8">{event.subtitle}</p>

                    <div className="mb-10">
                        <Countdown targetDate={event.date} variant="bold" className="justify-center" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <button className="px-10 py-5 bg-gradient-to-r from-yellow-600 to-amber-600 text-black font-black text-xl rounded-lg shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all min-h-[60px]">
                            Secure Your Spot - ${event.earlyBirdPrice}
                        </button>
                    </div>

                    <p className="text-gray-400">
                        Regular Price: <span className="line-through">${event.price}</span>
                        <span className="text-green-400 font-bold ml-2">Save $100 Today</span>
                    </p>
                </div>
            </section>

            {/* Sticky CTA */}
            <StickyCta
                text={`Join Now - Only $${event.earlyBirdPrice}`}
                seatsRemaining={seatInfo.remainingSeats}
                variant="urgent"
            />

            {/* Trust Bar */}
            <section className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 py-6 border-y border-yellow-500/20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-black text-yellow-400 mb-1">4.9/5</div>
                            <div className="text-sm text-gray-400">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-yellow-400 mb-1">10,000+</div>
                            <div className="text-sm text-gray-400">Students Taught</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-yellow-400 mb-1">$50M+</div>
                            <div className="text-sm text-gray-400">Client Returns</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
                        Master These Strategies
                    </h2>
                    <div className="space-y-4">
                        {[
                            'Portfolio diversification techniques used by hedge funds',
                            'Tax-efficient wealth building strategies',
                            'Real estate investment fundamentals',
                            'Market timing and risk management',
                            'Passive income stream creation',
                            'Retirement planning optimization',
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all"
                            >
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center font-bold text-black">
                                    ✓
                                </div>
                                <p className="text-lg text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Urgency Section */}
            <section className="py-12 px-4 bg-red-950/20">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        <ScarcityBadge message="Only 12 spots left!" urgencyLevel="critical" icon="🔥" />
                        <ScarcityBadge message="89 people viewing" urgencyLevel="high" icon="👀" />
                    </div>
                    <SeatIndicator seatInfo={seatInfo} showProgress />
                </div>
            </section>

            {/* Registration */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white">
                        Claim Your Spot Now
                    </h2>
                    <p className="text-xl text-center text-gray-400 mb-12">
                        30-Day Money-Back Guarantee
                    </p>
                    <RegistrationWrapper
                        steps={registrationSteps}
                    />
                </div>
            </section>
        </div>
    );
}
