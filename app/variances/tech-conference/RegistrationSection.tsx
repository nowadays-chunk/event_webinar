'use client';

import { RegistrationStep, SeatInfo } from '@/app/types';
import { RegistrationForm } from '@/app/components/registration-form';

interface RegistrationSectionProps {
    seatInfo: SeatInfo;
    steps: RegistrationStep[];
}

export function RegistrationSection({ seatInfo, steps }: RegistrationSectionProps) {
    return (
        <section className="py-20 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-gradient-purple">
                    Secure Your Spot
                </h2>
                <p className="text-xl text-center text-gray-400 mb-12">
                    Only {seatInfo.remainingSeats} seats remaining!
                </p>
                <RegistrationForm
                    steps={steps}
                    onSubmit={(data) => console.log('Registration:', data)}
                />
            </div>
        </section>
    );
}
