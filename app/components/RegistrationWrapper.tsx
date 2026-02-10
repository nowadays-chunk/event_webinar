'use client';

import { RegistrationForm } from './registration-form';
import { RegistrationStep } from '@/app/types';

interface RegistrationWrapperProps {
    steps: RegistrationStep[];
    className?: string;
}

export function RegistrationWrapper({ steps, className }: RegistrationWrapperProps) {
    return (
        <RegistrationForm
            steps={steps}
            onSubmit={(data) => console.log('Registration:', data)}
            className={className}
        />
    );
}
