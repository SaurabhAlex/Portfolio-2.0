export default function ExperienceSection() {
    return (
        <section className="py-6 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto" id="experience">
            <div className="text-center mb-stack-lg">
                <h2 className="font-headline-md text-headline-md mb-4">Professional Journey</h2>
                <div className="w-12 h-1 bg-primary-container mx-auto rounded-full" />
            </div>
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Infinite Group */}
                <div className="relative pl-12 border-l border-white/5 pb-8">
                    <div className="absolute -left-[9px] top-[32px] w-4 h-4 rounded-full bg-primary-container shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
                    <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                            <div>
                                <h3 className="text-xl font-bold text-on-surface">Infinite Group</h3>
                                <p className="text-primary-container text-sm font-medium mt-1">Flutter Developer</p>
                            </div>
                            <span className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase bg-surface-bright/30 px-3 py-1 rounded-lg">Jun 2024 – Present</span>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                            Leading Flutter development on Iunite.ai — a production B2B CRM serving 5 user roles,
                            live on Google Play Store and App Store. Own end-to-end architecture, feature development,
                            CI/CD pipeline, and cross-platform deployment.
                        </p>
                        <ul className="text-on-surface-variant text-sm space-y-3">
                            <li>→ Architected BLoC + Clean Architecture (feature-first) across all 5 user roles</li>
                            <li>→ Built Dio interceptor pipeline for JWT silent refresh — session failures reduced to near-zero</li>
                            <li>→ Designed role-scoped FCM token isolation for push notification delivery across 5 personas</li>
                            <li>→ Built GPS tracking with 100m deduplication via Geolocator — ~60% payload reduction</li>
                            <li>→ Engineered Codemagic CI/CD — deployment cycle cut from 3 hrs to under 15 minutes</li>
                            <li>→ Implemented offline-first architecture using Sqflite with background sync</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-5">
                            {["Flutter", "BLoC", "Clean Architecture", "Dio", "Firebase", "FCM", "GoRouter", "Sqflite", "Geolocator", "Codemagic"].map((tech) => (
                                <span key={tech} className="text-[10px] font-bold tracking-widest uppercase bg-surface-bright/20 text-primary-container px-2 py-1 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DSD Systems */}
                <div className="relative pl-12 border-l border-white/5 pb-8">
                    <div className="absolute -left-[9px] top-[32px] w-4 h-4 rounded-full border-2 border-primary-container bg-[#0a0a0c]" />
                    <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                            <div>
                                <h3 className="text-xl font-bold text-on-surface">DSD Systems Pvt. Ltd</h3>
                                <p className="text-primary-container text-sm font-medium mt-1">Flutter Developer</p>
                            </div>
                            <span className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase bg-surface-bright/30 px-3 py-1 rounded-lg">Oct 2023 – Jun 2024</span>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                            Joined as the sole Flutter developer at an early-stage startup — took full ownership
                            of mobile development from architecture decisions to Play Store and App Store deployment.
                        </p>
                        <ul className="text-on-surface-variant text-sm space-y-3">
                            <li>→ Owned 6 Flutter features end-to-end across full SDLC with zero post-launch regression</li>
                            <li>→ Designed reusable component library — accelerated UI development by ~30%</li>
                            <li>→ Improved crash rate by 50%+ through structured error handling and API flow refactoring</li>
                            <li>→ Managed complete release cycle independently — version control, builds, post-release fixes</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-5">
                            {["Flutter", "Dart", "GetX", "Firebase", "REST APIs", "Git"].map((tech) => (
                                <span key={tech} className="text-[10px] font-bold tracking-widest uppercase bg-surface-bright/20 text-primary-container px-2 py-1 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Digicoders */}
                <div className="relative pl-12 border-l border-white/5">
                    <div className="absolute -left-[9px] top-[32px] w-4 h-4 rounded-full border-2 border-primary-container bg-[#0a0a0c]" />
                    <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                            <div>
                                <h3 className="text-xl font-bold text-on-surface">Digicoders Technologies</h3>
                                <p className="text-primary-container text-sm font-medium mt-1">Junior Flutter Developer</p>
                            </div>
                            <span className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase bg-surface-bright/30 px-3 py-1 rounded-lg">Feb 2023 – Sep 2023</span>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                            Contributed to e-commerce mobile app development using Flutter — built core
                            shopping modules with Firebase backend and local data persistence.
                        </p>
                        <ul className="text-on-surface-variant text-sm space-y-3">
                            <li>→ Built product listing, cart, checkout, and order flow modules in Flutter/Dart</li>
                            <li>→ Integrated Provider for state management and Firebase Realtime Database for backend sync</li>
                            <li>→ Implemented SQLite for local data persistence and offline access</li>
                            <li>→ Built responsive layouts targeting phone and tablet form factors from a single codebase</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-5">
                            {["Flutter", "Dart", "Provider", "Firebase", "SQLite", "REST APIs"].map((tech) => (
                                <span key={tech} className="text-[10px] font-bold tracking-widest uppercase bg-surface-bright/20 text-primary-container px-2 py-1 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}