'use client';

import { useState } from 'react';
import { AgendaItem } from '@/app/types';
import { SpeakerCard } from '@/app/components/speaker-card';

interface AgendaAccordionProps {
    agenda: AgendaItem[];
    className?: string;
}

export function AgendaAccordion({ agenda, className = '' }: AgendaAccordionProps) {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const getTypeIcon = (type: AgendaItem['type']) => {
        switch (type) {
            case 'keynote':
                return '🎤';
            case 'workshop':
                return '🛠️';
            case 'panel':
                return '💬';
            case 'break':
                return '☕';
            case 'networking':
                return '🤝';
            default:
                return '📌';
        }
    };

    const getTypeColor = (type: AgendaItem['type']) => {
        switch (type) {
            case 'keynote':
                return 'border-purple-500 bg-purple-500/10';
            case 'workshop':
                return 'border-blue-500 bg-blue-500/10';
            case 'panel':
                return 'border-green-500 bg-green-500/10';
            case 'break':
                return 'border-orange-500 bg-orange-500/10';
            case 'networking':
                return 'border-pink-500 bg-pink-500/10';
            default:
                return 'border-gray-500 bg-gray-500/10';
        }
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {agenda.map((item) => {
                const isOpen = openItems.includes(item.id);

                return (
                    <div
                        key={item.id}
                        className={`border rounded-lg overflow-hidden transition-all ${getTypeColor(item.type)
                            }`}
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                        >
                            <div className="flex items-center gap-4 flex-1">
                                <div className="text-2xl">{getTypeIcon(item.type)}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-sm font-mono text-gray-400">{item.time}</span>
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300 uppercase tracking-wide">
                                            {item.type}
                                        </span>
                                        <span className="text-xs text-gray-500">{item.duration}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                </div>
                            </div>
                            <svg
                                className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-6 border-t border-white/10">
                                <p className="text-gray-300 mt-4 mb-6 leading-relaxed">{item.description}</p>

                                {item.speakers.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                                            Speaker{item.speakers.length > 1 ? 's' : ''}
                                        </h4>
                                        <div className="grid gap-3">
                                            {item.speakers.map((speaker) => (
                                                <SpeakerCard key={speaker.id} speaker={speaker} variant="compact" />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
