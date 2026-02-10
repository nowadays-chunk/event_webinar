import { Event, Speaker, AgendaItem, RegistrationStep, SeatInfo } from '../../types';
import { HeroSection } from '../../components/hero-section';
import { StickyCta } from '../../components/sticky-cta';
import { SeatIndicator } from '../../components/seat-indicator';
import { SpeakerCard } from '../../components/speaker-card';
import { AgendaAccordion } from '../../components/agenda-accordion';
import { RegistrationForm } from '../../components/registration-form';
import { ScarcityBadge } from '../../components/scarcity-badge';
import { SocialProof } from '../../components/social-proof';
import { Countdown } from '../../components/countdown';

const event: Event = {
    id: '2',
    title: 'Global Business Summit 2026',
    subtitle: 'Leading the Future of Enterprise',
    description: 'Connect with C-level executives and industry thought leaders',
    date: '2026-04-20T08:00:00Z',
    duration: '2 days',
    timezone: 'EST',
    location: 'New York City',
    category: 'Business Summit',
    price: '$2,499',
    earlyBirdPrice: '$1,999',
    earlyBirdDeadline: '2026-03-01T00:00:00Z',
};

const seatInfo: SeatInfo = {
    totalSeats: 300,
    remainingSeats: 18,
    currentViewers: 45,
};

const speakers: Speaker[] = [
    {
        id: '1',
        name: 'Michael Thompson',
        title: 'CEO',
        company: 'Fortune 500 Corp',
        bio: 'Transformational leader with 25+ years of executive experience',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
        linkedin: '#',
    },
];

const agenda: AgendaItem[] = [
    {
        id: '1',
        time: '08:00 AM',
        title: 'Executive Leadership in the Digital Age',
        description: 'Strategic insights for navigating digital transformation',
        speakers: [speakers[0]],
        duration: '90 min',
        type: 'keynote',
    },
];

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Executive Information',
        description: 'Please provide your details',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Corporate Email', type: 'email', required: true },
            { name: 'company', label: 'Company Name', type: 'text', required: true },
            { name: 'title', label: 'Job Title', type: 'text', required: true },
        ],
    },
];

export default function BusinessSummitPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
            {/* Hero */}
            <HeroSection event={event} variant="split" />

            {/* Sticky CTA */}
            <StickyCta
                text={`Save $500 - Register Now`}
                seatsRemaining={seatInfo.remainingSeats}
                variant="primary"
            />

            {/* Premium Badge Bar */}
            <section className="bg-gradient-to-r from-amber-900 to-yellow-900 py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="text-3xl">👔</span>
                            Executive-Level Networking
                        </h3>
                        <div className="h-8 w-px bg-white/30 hidden md:block" />
                        <Countdown targetDate={event.earlyBirdDeadline!} variant="minimal" />
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-16 px-4 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 mb-2">
                                300+
                            </div>
                            <p className="text-gray-300 font-semibold">C-Level Executives</p>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                                50+
                            </div>
                            <p className="text-gray-300 font-semibold">Industry Leaders</p>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                                48h
                            </div>
                            <p className="text-gray-300 font-semibold">Intensive Learning</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speakers */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white">
                        Distinguished Speakers
                    </h2>
                    <p className="text-xl text-center text-gray-400 mb-12">
                        Fortune 500 executives and industry visionaries
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SpeakerCard speaker={speakers[0]} variant="featured" />
                    </div>
                </div>
            </section>

            {/* Seat Urgency */}
            <section className="py-12 px-4 bg-red-950/30 border-y border-red-500/30">
                <div className="max-w-4xl mx-auto">
                    <SeatIndicator seatInfo={seatInfo} showProgress />
                    <div className="mt-6 text-center">
                        <p className="text-red-300 text-lg font-semibold">
                            ⚠️ Limited to executives only. Verification required.
                        </p>
                    </div>
                </div>
            </section>

            {/* Registration */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white">
                        Reserve Your Seat
                    </h2>
                    <p className="text-xl text-center text-gray-400 mb-12">
                        Investment: <span className="line-through text-gray-500">${event.price}</span>{' '}
                        <span className="text-green-400 font-bold">{event.earlyBirdPrice}</span> (Early Bird)
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
