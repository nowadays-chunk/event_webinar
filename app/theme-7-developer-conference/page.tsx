import { Event, SeatInfo, RegistrationStep } from '@/app/types';
import { StickyCta } from '@/app/components/sticky-cta';
import { SeatIndicator } from '@/app/components/seat-indicator';
import { RegistrationWrapper } from '@/app/components/RegistrationWrapper';
import { Countdown } from '@/app/components/countdown';

const event: Event = {
    id: '7',
    title: 'DevCon 2026',
    subtitle: 'Build. Ship. Scale.',
    description: 'For developers who ship production code',
    date: '2026-05-20T09:00:00Z',
    duration: '2 days',
    timezone: 'UTC',
    location: 'Virtual + IRL',
    category: 'Developer Conference',
    price: 'Free',
};

const seatInfo: SeatInfo = {
    totalSeats: 1000,
    remainingSeats: 156,
};

const registrationSteps: RegistrationStep[] = [
    {
        id: 1,
        title: 'Register',
        description: 'Join the developer community',
        fields: [
            { name: 'name', label: 'Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'github', label: 'GitHub Username', type: 'text' },
        ],
    },
];

export default function DeveloperConferencePage() {
    return (
        <div className="min-h-screen bg-black text-white font-mono">
            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />

                {/* Terminal-style background */}
                <div className="absolute inset-0 opacity-5">
                    <pre className="text-green-500 text-xs leading-tight overflow-hidden">
                        {`> npm install @devcon/2026
> Starting development server...
> Server running on port 3000
> Compiling...
> Ready in 0.5s`}
                    </pre>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4">
                    <div className="space-y-2 mb-8">
                        <p className="text-green-500">{'>'} whoami</p>
                        <h1 className="text-5xl md:text-8xlfont-black text-green-400 tracking-tight">
                            {event.title}
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-400">{event.subtitle}</p>
                    </div>

                    <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 mb-8">
                        <p className="text-green-500 mb-2">{'>'} event.details()</p>
                        <div className="text-gray-300 space-y-1 pl-4">
                            <p>{'{'}</p>
                            <p className="pl-4">date: "{new Date(event.date).toLocaleDateString()}",</p>
                            <p className="pl-4">duration: "{event.duration}",</p>
                            <p className="pl-4">location: "{event.location}",</p>
                            <p className="pl-4">price: "{event.price}",</p>
                            <p>{'}'}</p>
                        </div>
                    </div>

                    <div className="mb-10">
                        <Countdown targetDate={event.date} variant="digital" />
                    </div>

                    <button className="px-8 py-4 bg-green-500 text-black font-bold text-lg rounded hover:bg-green-400 transition-colors min-h-[56px]">
                        {'>'} register --now
                    </button>
                </div>
            </section>

            {/* Sticky CTA */}
            <StickyCta text="Register Free" seatsRemaining={seatInfo.remainingSeats} variant="primary" />

            {/* Tech Stack */}
            <section className="py-20 px-4 bg-gray-950">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-green-400">
                        {'>'} featured_tracks
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '⚛️', title: 'React', desc: 'Latest patterns & hooks' },
                            { icon: '🔷', title: 'TypeScript', desc: 'Type-safe development' },
                            { icon: '🚀', title: 'Performance', desc: 'Speed & optimization' },
                            { icon: '🔐', title: 'Security', desc: 'Best practices' },
                            { icon: '☁️', title: 'Cloud', desc: 'Serverless & edge' },
                            { icon: '🤖', title: 'AI/ML', desc: 'Integration patterns' },
                        ].map((track, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-900 border border-green-500/20 rounded p-6 hover:border-green-500/50 transition-all group"
                            >
                                <div className="text-4xl mb-3">{track.icon}</div>
                                <h3 className="text-xl font-bold text-green-400 mb-2 group-hover:text-green-300">
                                    {track.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{track.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-900 border border-green-500/30 rounded-lg p-8">
                        <p className="text-green-500 mb-4">{'>'} conference.stats()</p>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-black text-green-400 mb-2">50+</div>
                                <p className="text-gray-400">Speakers</p>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-green-400 mb-2">30+</div>
                                <p className="text-gray-400">Sessions</p>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-green-400 mb-2">1000+</div>
                                <p className="text-gray-400">Developers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seat Indicator */}
            <section className="py-12 px-4 bg-gray-950">
                <div className="max-w-4xl mx-auto">
                    <SeatIndicator seatInfo={seatInfo} showProgress />
                </div>
            </section>

            {/* Registration */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-green-400">
                        {'>'} register()
                    </h2>
                    <RegistrationWrapper
                        steps={registrationSteps}
                    />
                </div>
            </section>
        </div>
    );
}
