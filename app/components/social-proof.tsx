'use client';

interface SocialProofProps {
    attendeeCount?: number;
    testimonials?: Array<{
        name: string;
        role: string;
        company: string;
        quote: string;
        imageUrl?: string;
    }>;
    companyLogos?: string[];
    className?: string;
}

export function SocialProof({
    attendeeCount,
    testimonials,
    companyLogos,
    className = '',
}: SocialProofProps) {
    return (
        <div className={`space-y-12 ${className}`}>
            {/* Attendee Count */}
            {attendeeCount && (
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-gray-900 flex items-center justify-center text-white font-bold text-xs"
                                >
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            {attendeeCount.toLocaleString()}+
                        </span>
                    </p>
                    <p className="text-gray-400">professionals already registered</p>
                </div>
            )}

            {/* Testimonials */}
            {testimonials && testimonials.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {testimonial.imageUrl ? (
                                    <img
                                        src={testimonial.imageUrl}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-400">
                                        {testimonial.role} at {testimonial.company}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex gap-1 mt-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className="w-4 h-4 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Company Logos */}
            {companyLogos && companyLogos.length > 0 && (
                <div>
                    <h3 className="text-center text-sm uppercase tracking-wider text-gray-400 mb-6 font-semibold">
                        Trusted by professionals from
                    </h3>
                    <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
                        {companyLogos.map((logo, idx) => (
                            <div
                                key={idx}
                                className="h-12 w-32 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all"
                            >
                                <img src={logo} alt={`Company ${idx + 1}`} className="max-h-full max-w-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
