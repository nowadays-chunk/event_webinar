'use client';

import { useState } from 'react';
import { RegistrationStep } from '../types';

interface RegistrationFormProps {
    steps: RegistrationStep[];
    onSubmit: (data: Record<string, any>) => void;
    className?: string;
}

export function RegistrationForm({ steps, onSubmit, className = '' }: RegistrationFormProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        onSubmit(formData);
        setIsSubmitting(false);
    };

    const updateFormData = (name: string, value: any) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
        <div className={`max-w-2xl mx-auto ${className}`}>
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-300">
                        Step {currentStep + 1} of {steps.length}
                    </span>
                    <span className="text-sm text-gray-400">{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between mb-8">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`flex flex-col items-center flex-1 ${index < steps.length - 1 ? 'relative' : ''
                            }`}
                    >
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${index === currentStep
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-110'
                                    : index < currentStep
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-700 text-gray-400'
                                }`}
                        >
                            {index < currentStep ? '✓' : index + 1}
                        </div>
                        <span
                            className={`text-xs mt-2 text-center hidden md:block ${index <= currentStep ? 'text-white' : 'text-gray-500'
                                }`}
                        >
                            {step.title}
                        </span>
                        {index < steps.length - 1 && (
                            <div
                                className={`hidden md:block absolute top-5 left-1/2 w-full h-0.5 -z-10 transition-colors ${index < currentStep ? 'bg-green-500' : 'bg-gray-700'
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">{steps[currentStep].title}</h3>
                <p className="text-gray-400 mb-6">{steps[currentStep].description}</p>

                <div className="space-y-4">
                    {steps[currentStep].fields.map((field) => (
                        <div key={field.name}>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                {field.label}
                                {field.required && <span className="text-red-400 ml-1">*</span>}
                            </label>

                            {field.type === 'select' ? (
                                <select
                                    name={field.name}
                                    required={field.required}
                                    value={formData[field.name] || ''}
                                    onChange={(e) => updateFormData(field.name, e.target.value)}
                                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                                >
                                    <option value="">Select...</option>
                                    {field.options?.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : field.type === 'checkbox' ? (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name={field.name}
                                        checked={formData[field.name] || false}
                                        onChange={(e) => updateFormData(field.name, e.target.checked)}
                                        className="w-5 h-5 rounded border-white/20 bg-black/30 text-purple-500 focus:ring-purple-500"
                                    />
                                    <span className="text-gray-300 text-sm">{field.placeholder}</span>
                                </div>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    value={formData[field.name] || ''}
                                    onChange={(e) => updateFormData(field.name, e.target.value)}
                                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                    {currentStep > 0 && (
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                        >
                            Previous
                        </button>
                    )}

                    {currentStep < steps.length - 1 ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl min-h-[48px]"
                        >
                            Continue
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                'Complete Registration'
                            )}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
