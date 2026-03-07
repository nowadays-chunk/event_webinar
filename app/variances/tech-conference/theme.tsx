import { Event, Speaker, AgendaItem, RegistrationStep, SeatInfo } from '@/app/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Global Tech Summit - Future of Innovation",
    description: "Join the world's leading tech minds for an immersive exploration of the future. Innovation starts here.",
    keywords: ["tech conference", "innovation summit", "technology event", "global tech", "tech speakers"],
};
import { HeroSection } from '@/app/components/hero-section';
import { Countdown } from '@/app/components/countdown';
import { StickyCta } from '@/app/components/sticky-cta';
import { SeatIndicator } from '@/app/components/seat-indicator';
import { SpeakerCard } from '@/app/components/speaker-card';
import { AgendaAccordion } from '@/app/components/agenda-accordion';
import { ScarcityBadge } from '@/app/components/scarcity-badge';
import { SocialProof } from '@/app/components/social-proof';
import { RegistrationSection } from './RegistrationSection';

const event: Event = {
    id: '1',
    title: 'TechCon 2026',
    subtitle: 'The Future of AI & Web3 Development',
    description: 'Join industry leaders for groundbreaking insights into the future of technology',
    date: '2026-03-15T09:00:00Z',
    duration: '3 days',
    timezone: 'UTC',
    location: 'Virtual',
    category: 'Technology Conference',
};

const seatInfo: SeatInfo = {
    totalSeats: 500,
    remainingSeats: 47,
    currentViewers: 23,
};

const speakers: Speaker[] = [
    {
        id: '1',
        name: 'Dr. Sarah Chen',
        title: 'AI Research Director',
        company: 'TechCorp',
        bio: 'Leading AI researcher with 15+ years of experience in deep learning and neural networks',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        twitter: '#',
        linkedin: '#',
    },
    {
        id: '2',
        name: 'Alex Rivera',
        title: 'Web3 Architect',
        company: 'BlockChain Inc',
        bio: 'Pioneer in blockchain technology and decentralized applications',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        linkedin: '#',
    },
];

const agenda: AgendaItem[] = [
    {
        id: '1',
        time: '09:00 AM',
        title: 'Opening Keynote: The AI Revolution',
        description: 'Discover how AI is transforming software development and what it means for the future.',
        speakers: [speakers[0]],
        duration: '60 min',
        type: 'keynote',
    },
    {
        id: '2',
        time: '10:30 AM',
        title: 'Hands-on Workshop: Building AI-Powered Apps',
        description: 'Learn to integrate cutting-edge AI models into your applications.',
        speakers: [speakers[0]],
        duration: '90 min',
        type: 'workshop',
    },
];

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Personal Information',
        description: 'Tell us about yourself',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true },
        ],
    },
    {
        id: 2,
        title: 'Professional Details',
        description: 'Help us customize your experience',
        fields: [
            { name: 'company', label: 'Company', type: 'text' },
            { name: 'role', label: 'Job Title', type: 'text' },
        ],
    },
];

export default function TechConferencePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Hero */}
            <HeroSection event={event} variant="fullscreen" />

            {/* Sticky CTA */}
            <StickyCta text="Register Now" seatsRemaining={seatInfo.remainingSeats} variant="urgent" />

            {/* Urgency Bar */}
            <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <ScarcityBadge message="Early Bird Ends in 48 Hours!" urgencyLevel="high" icon="⚡" />
                    <SeatIndicator seatInfo={seatInfo} />
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-20 px-4 bg-black/50">
                <div className="max-w-7xl mx-auto">
                    <SocialProof
                        attendeeCount={1250}
                        testimonials={[
                            {
                                name: 'John Smith',
                                role: 'CTO',
                                company: 'StartupCo',
                                quote: 'Best tech conference I\'ve attended. Mind-blowing insights!',
                            },
                            {
                                name: 'Emily Davis',
                                role: 'Lead Developer',
                                company: 'DevShop',
                                quote: 'The workshops were incredibly practical and immediately applicable.',
                            },
                        ]}
                    />
                </div>
            </section>

            {/* Speakers */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-gradient-purple">
                        World-Class Speakers
                    </h2>
                    <p className="text-xl text-center text-gray-400 mb-12">
                        Learn from the best in the industry
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {speakers.map((speaker) => (
                            <SpeakerCard key={speaker.id} speaker={speaker} variant="featured" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Agenda */}
            <section className="py-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white">
                        Event Agenda
                    </h2>
                    <p className="text-xl text-center text-gray-400 mb-12">
                        Three days packed with cutting-edge content
                    </p>
                    <AgendaAccordion agenda={agenda} />
                </div>
            </section>

            {/* Registration */}
            {/* Registration */}
            <RegistrationSection seatInfo={seatInfo} steps={registrationSteps} />
        </div>
    );
}
