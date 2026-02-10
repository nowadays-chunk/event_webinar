import Link from 'next/link';

const themes = [
  {
    id: 1,
    name: 'Tech Conference',
    description: 'Dark mode with neon accents, futuristic design',
    path: '/theme-1-tech-conference',
    gradient: 'from-purple-600 to-blue-600',
    icon: '🚀',
    category: 'Technology',
  },
  {
    id: 2,
    name: 'Business Summit',
    description: 'Professional navy/gold palette, executive focus',
    path: '/theme-2-business-summit',
    gradient: 'from-slate-600 to-blue-800',
    icon: '💼',
    category: 'Business',
  },
  {
    id: 3,
    name: 'Creative Workshop',
    description: 'Vibrant gradients, playful animations',
    path: '/theme-3-creative-workshop',
    gradient: 'from-pink-500 via-purple-500 to-blue-500',
    icon: '🎨',
    category: 'Creative',
  },
  {
    id: 4,
    name: 'Health & Wellness',
    description: 'Calming greens, organic shapes, mindfulness',
    path: '/theme-4-health-wellness',
    gradient: 'from-green-600 to-teal-600',
    icon: '🧘',
    category: 'Wellness',
  },
  {
    id: 5,
    name: 'Finance Webinar',
    description: 'Premium dark blue/gold, authority-driven',
    path: '/theme-5-finance-webinar',
    gradient: 'from-blue-900 to-amber-700',
    icon: '💰',
    category: 'Finance',
  },
  {
    id: 6,
    name: 'Marketing Masterclass',
    description: 'High-energy orange/pink, conversion-focused',
    path: '/theme-6-marketing-masterclass',
    gradient: 'from-orange-600 to-pink-600',
    icon: '📈',
    category: 'Marketing',
  },
  {
    id: 7,
    name: 'Developer Conference',
    description: 'Terminal-inspired, minimal, code aesthetics',
    path: '/theme-7-developer-conference',
    gradient: 'from-gray-900 to-green-900',
    icon: '💻',
    category: 'Technology',
  },
  {
    id: 8,
    name: 'Virtual Concert',
    description: 'Vibrant purple/pink, entertainment-focused',
    path: '/theme-8-virtual-concert',
    gradient: 'from-purple-600 via-pink-600 to-red-600',
    icon: '🎵',
    category: 'Entertainment',
  },
  {
    id: 9,
    name: 'Educational Series',
    description: 'Academic blue/white, structured curriculum',
    path: '/theme-9-educational-series',
    gradient: 'from-slate-700 to-blue-700',
    icon: '📚',
    category: 'Education',
  },
  {
    id: 10,
    name: 'Product Launch',
    description: 'Bold anticipation-building, dramatic reveal',
    path: '/theme-10-product-launch',
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    icon: '🎁',
    category: 'Launch',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzRhNWU4MCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-pulse">
            <span className="text-sm text-white/90 uppercase tracking-wider font-semibold">
              ⚡ Urgency-Driven UX Showcase
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-tight">
            Event & Webinar
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Landing Pages
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            10 unique themes featuring countdown timers, sticky CTAs, scarcity indicators,
            and conversion psychology patterns
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
              <span className="text-green-300 font-semibold">✓ Server-Side Rendering</span>
            </div>
            <div className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 font-semibold">✓ Mobile-First Design</span>
            </div>
            <div className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
              <span className="text-purple-300 font-semibold">✓ Conversion Optimized</span>
            </div>
          </div>

          <a
            href="#themes"
            className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
          >
            Explore Themes
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Themes Grid */}
      <section id="themes" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-white">
            10 Unique Themes
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16">
            Each designed for maximum urgency and conversion
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <Link key={theme.id} href={theme.path}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-[1.02]">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <div className="relative p-8">
                    <div className="text-6xl mb-4">{theme.icon}</div>
                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full mb-3">
                      <span className="text-xs text-gray-300 uppercase tracking-wide font-semibold">
                        {theme.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {theme.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{theme.description}</p>

                    <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                      <span>View Theme</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-950/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-white">
            Urgency UX Components
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⏱️',
                title: 'Countdown Timers',
                desc: '4 visual variants with urgency states',
              },
              {
                icon: '📍',
                title: 'Sticky CTAs',
                desc: 'Mobile-first conversion bars',
              },
              {
                icon: '🎫',
                title: 'Seat Indicators',
                desc: 'Dynamic scarcity visualization',
              },
              {
                icon: '👥',
                title: 'Social Proof',
                desc: 'Live attendee & testimonials',
              },
              {
                icon: '🎤',
                title: 'Speaker Cards',
                desc: 'Credibility & trust signals',
              },
              {
                icon: '📋',
                title: 'Agenda Accordions',
                desc: 'Expandable event schedules',
              },
              {
                icon: '📝',
                title: 'Registration Forms',
                desc: 'Multi-step progressive disclosure',
              },
              {
                icon: '🔥',
                title: 'Scarcity Badges',
                desc: 'Animated urgency indicators',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Server-Side Rendered • Mobile-First • Conversion Optimized
          </p>
        </div>
      </footer>
    </div>
  );
}
