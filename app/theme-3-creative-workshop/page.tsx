import { Event, Speaker, SeatInfo, RegistrationStep } from '../../types';
import { HeroSection } from '../../components/hero-section';
import { StickyCta } from '../../components/sticky-cta';
import { SeatIndicator } from '../../components/seat-indicator';
import { SpeakerCard } from '../../components/speaker-card';
import { RegistrationForm } from '../../components/registration-form';
import { ScarcityBadge } from '../../components/scarcity-badge';

const event: Event = {
    id: '3',
    title: 'Creative Workshop Intensive',
    subtitle: 'Unlock Your Creative Potential',
    description: 'A hands-on journey into design, art, and creative expression',
    date: '2026-05-10T10:00:00Z',
    duration: '5 days',
    timezone: 'PST',
    location: 'San Francisco, CA',
    category: 'Creative Workshop',
    price: '$899',
};

const seatInfo: SeatInfo = {
    totalSeats: 50,
    remainingSeats: 8,
};

const speakers: Speaker[] = [
    {
        id: '1',
        name: 'Luna Martinez',
        title: 'Creative Director',
        company: 'DesignStudio',
        bio: 'Award-winning designer and visual artist',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna',
        linkedin: '#',
    },
];

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Your Information',
        description: 'Join our creative community',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
        ],
    },
];

export default function CreativeWorkshopPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 animate-gradient-shift">
            {/* Hero */}
            <HeroSection event={event} variant="gradient" />

            {/* Sticky CTA */}
            <StickyCta text="Join the Workshop 🎨" seatsRemaining={seatInfo.remainingSeats} variant="urgent" />

            {/* Playful Urgency */}
            <section className="py-8 px-4">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
                    <ScarcityBadge message="Only 8 spots left!" urgencyLevel="critical" icon="🔥" />
                    <ScarcityBadge message="Small group experience" urgencyLevel="low" icon="✨" />
                    <ScarcityBadge message="100% hands-on" urgencyLevel="low" icon="🎨" />
                </div>
            </section>

            {/* Creative Stats */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        {[
                            { icon: '🎨', title: '5 Days', subtitle: 'Intensive Learning' },
                            { icon: '✋', title: '100%', subtitle: 'Hands-On' },
                            { icon: '👥', title: 'Small', subtitle: 'Intimate Groups' },
                            { icon: '🏆', title: 'Pro', subtitle: 'Instructors' },
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
                            >
                                <div className="text-6xl mb-4">{stat.icon}</div>
                                <div className="text-3xl font-black text-white mb-2">{stat.title}</div>
                                <div className="text-gray-200">{stat.subtitle}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white drop-shadow-lg">
                        Meet Your Instructors
                    </h2>
                    <p className="text-xl text-center text-white/80 mb-12">
                        Learn from award-winning creatives
                    </p>
                    <div className="max-w-md mx-auto">
                        <SpeakerCard speaker={speakers[0]} variant="featured" />
                    </div>
                </div>
            </section>

            {/* Seat Indicator */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <SeatIndicator seatInfo={seatInfo} showProgress />
                </div>
            </section>

            {/* Registration */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white drop-shadow-lg">
                        Claim Your Spot
                    </h2>
                    <p className="text-xl text-center text-white/80 mb-12">
                        Transform your creative practice
                    </p>
                    <RegistrationForm
                        steps={registrationSteps}
                        onSubmit={(data) => console.log('Registration:', data)}
                    />
                </div>
            </section>
        </div>
    );
}
