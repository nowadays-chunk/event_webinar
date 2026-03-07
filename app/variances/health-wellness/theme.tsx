import { Event, Speaker, SeatInfo, RegistrationStep } from '@/app/types';
import { HeroSection } from '@/app/components/hero-section';
import { StickyCta } from '@/app/components/sticky-cta';
import { SeatIndicator } from '@/app/components/seat-indicator';
import { RegistrationWrapper } from '@/app/components/RegistrationWrapper';
import { Countdown } from '@/app/components/countdown';

const event: Event = {
    id: '4',
    title: 'Wellness & Mindfulness Retreat',
    subtitle: 'Reconnect with Your Inner Self',
    description: 'A transformative journey to holistic health and well-being',
    date: '2026-06-05T07:00:00Z',
    duration: '7 days',
    timezone: 'PST',
    location: 'Sedona, Arizona',
    category: 'Health & Wellness',
    price: '$1,499',
};

const seatInfo: SeatInfo = {
    totalSeats: 30,
    remainingSeats: 5,
};

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Begin Your Journey',
        description: 'Share your wellness goals',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
        ],
    },
];

export default function HealthWellnessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-teal-950 to-green-950">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-teal-900/50" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 mb-6">
                        <span className="text-sm text-green-200 uppercase tracking-wider font-semibold">
                            🌿 {event.category}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        {event.title}
                    </h1>
                    <p className="text-2xl text-green-100 mb-12 font-light">{event.subtitle}</p>
                    <div className="mb-12">
                        <Countdown targetDate={event.date} variant="circular" className="justify-center" />
                    </div>
                    <button className="px-10 py-5 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 transition-all min-h-[60px]">
                        Begin Your Transformation
                    </button>
                </div>
            </section>

            {/* Sticky CTA */}
            <StickyCta text="Reserve Your Spot 🌱" seatsRemaining={seatInfo.remainingSeats} variant="primary" />

            {/* Benefits */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-white">
                        What You'll Experience
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🧘', title: 'Daily Meditation', desc: 'Guided mindfulness practices' },
                            { icon: '🥗', title: 'Organic Meals', desc: 'Nutritious plant-based cuisine' },
                            { icon: '🏞️', title: 'Nature Immersion', desc: 'Connect with natural beauty' },
                            { icon: '💆', title: 'Spa Treatments', desc: 'Rejuvenating therapies' },
                            { icon: '📿', title: 'Yoga Sessions', desc: 'Morning and evening practice' },
                            { icon: '🌅', title: 'Sunrise Rituals', desc: 'Start each day mindfully' },
                        ].map((benefit, idx) => (
                            <div
                                key={idx}
                                className="bg-green-900/30 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all"
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-green-200">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Urgency */}
            <section className="py-12 px-4 bg-green-950/50">
                <div className="max-w-4xl mx-auto">
                    <SeatIndicator seatInfo={seatInfo} showProgress />
                    <p className="text-center text-green-200 mt-6">
                        🌟 Limited to ensure an intimate, transformative experience
                    </p>
                </div>
            </section>

            {/* Registration */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
                        Start Your Journey
                    </h2>
                    <RegistrationWrapper
                        steps={registrationSteps}
                    />
                </div>
            </section>
        </div>
    );
}
