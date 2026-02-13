import { Event, Speaker, AgendaItem, SeatInfo, RegistrationStep } from '@/app/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Lifelong Learning - Advanced Educational Series",
    description: "Expand your horizons. Join our comprehensive educational series covering the most critical skills for the modern world.",
    keywords: ["educational series", "online learning", "skill development", "lifelong learning", "education event"],
};
import { HeroSection } from '@/app/components/hero-section';
import { StickyCta } from '@/app/components/sticky-cta';
import { SeatIndicator } from '@/app/components/seat-indicator';
import { SpeakerCard } from '@/app/components/speaker-card';
import { AgendaAccordion } from '@/app/components/agenda-accordion';
import { RegistrationWrapper } from '@/app/components/RegistrationWrapper';

const event: Event = {
    id: '9',
    title: 'Online Learning Summit',
    subtitle: 'Master Skills for the Future',
    description: 'Professional certification program',
    date: '2026-06-15T10:00:00Z',
    duration: '4 weeks',
    timezone: 'EST',
    location: 'Online Platform',
    category: 'Educational Series',
    price: '$599',
};

const seatInfo: SeatInfo = {
    totalSeats: 100,
    remainingSeats: 23,
};

const speakers: Speaker[] = [
    {
        id: '1',
        name: 'Prof. David Williams',
        title: 'Lead Instructor',
        company: 'University of Excellence',
        bio: 'PhD with 20+ years teaching experience',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        linkedin: '#',
    },
];

const agenda: AgendaItem[] = [
    {
        id: '1',
        time: 'Week 1',
        title: 'Foundations',
        description: 'Core concepts and fundamentals',
        speakers: [speakers[0]],
        duration: '5 hours',
        type: 'workshop',
    },
    {
        id: '2',
        time: 'Week 2',
        title: 'Advanced Topics',
        description: 'Deep dive into complex subjects',
        speakers: [speakers[0]],
        duration: '5 hours',
        type: 'workshop',
    },
];

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Student Information',
        description: 'Enroll in the program',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
        ],
    },
];

export default function EducationalSeriesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
            {/* Hero */}
            <HeroSection event={event} variant="split" />

            {/* Sticky CTA */}
            <StickyCta text="Enroll Now" seatsRemaining={seatInfo.remainingSeats} variant="primary" />

            {/* Program Benefits */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white">
                        Comprehensive Curriculum
                    </h2>
                    <p className="text-xl text-center text-gray-400 mb-12">
                        Structured learning path with certification
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '📚', title: '40+ Hours', desc: 'Video Content' },
                            { icon: '✍️', title: 'Assignments', desc: 'Practical Projects' },
                            { icon: '🎓', title: 'Certificate', desc: 'Upon Completion' },
                            { icon: '👥', title: 'Community', desc: 'Peer Support' },
                        ].map((benefit, idx) => (
                            <div
                                key={idx}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-blue-500/50 transition-all"
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instructor */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
                        Your Instructor
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <SpeakerCard speaker={speakers[0]} variant="featured" />
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20 px-4 bg-blue-950/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
                        Course Outline
                    </h2>
                    <AgendaAccordion agenda={agenda} />
                </div>
            </section>

            {/* Enrollment Urgency */}
            <section className="py-12 px-4 bg-slate-900">
                <div className="max-w-4xl mx-auto">
                    <SeatIndicator seatInfo={seatInfo} showProgress />
                    <p className="text-center text-gray-300 mt-6">
                        📌 Small cohort size ensures personalized attention
                    </p>
                </div>
            </section>

            {/* Registration */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white">
                        Enroll Today
                    </h2>
                    <p className="text-xl text-center text-gray-400 mb-12">
                        Investment: {event.price} • Lifetime access included
                    </p>
                    <RegistrationWrapper
                        steps={registrationSteps}
                    />
                </div>
            </section>
        </div>
    );
}
