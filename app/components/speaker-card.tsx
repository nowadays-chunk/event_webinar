'use client';

import { Speaker } from '../types';

interface SpeakerCardProps {
    speaker: Speaker;
    variant?: 'default' | 'compact' | 'featured';
}

export function SpeakerCard({ speaker, variant = 'default' }: SpeakerCardProps) {
    if (variant === 'compact') {
        return (
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all">
                <img
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                />
                <div>
                    <h4 className="font-bold text-white">{speaker.name}</h4>
                    <p className="text-sm text-gray-400">{speaker.title}</p>
                    <p className="text-xs text-gray-500">{speaker.company}</p>
                </div>
            </div>
        );
    }

    if (variant === 'featured') {
        return (
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 to-blue-900 p-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                    <div className="mb-6 relative">
                        <img
                            src={speaker.imageUrl}
                            alt={speaker.name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-white/20 mx-auto"
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-purple-600 rounded-full">
                            <span className="text-xs font-bold text-white uppercase">Keynote</span>
                        </div>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 text-center">{speaker.name}</h3>
                    <p className="text-purple-300 font-semibold text-center mb-1">{speaker.title}</p>
                    <p className="text-gray-400 text-sm text-center mb-4">{speaker.company}</p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{speaker.bio}</p>

                    <div className="flex justify-center gap-3">
                        {speaker.twitter && (
                            <a href={speaker.twitter} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                        )}
                        {speaker.linkedin && (
                            <a href={speaker.linkedin} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="p-6">
                <div className="flex items-start gap-4">
                    <img
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        className="w-20 h-20 rounded-lg object-cover border-2 border-purple-500/30 group-hover:border-purple-500 transition-colors"
                    />
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                        <p className="text-purple-400 font-medium text-sm mb-1">{speaker.title}</p>
                        <p className="text-gray-500 text-xs mb-3">{speaker.company}</p>

                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{speaker.bio}</p>

                        <div className="flex gap-2 mt-3">
                            {speaker.twitter && (
                                <a href={speaker.twitter} className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                            )}
                            {speaker.linkedin && (
                                <a href={speaker.linkedin} className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
