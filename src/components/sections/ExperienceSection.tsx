export default function ExperienceSection() {
    return (
        <section className="py-6 px-12 max-w-[1400px] mx-auto" id="experience">
            <div className="text-center mb-stack-lg">
                <h2 className="font-headline-md text-headline-md mb-4">Professional Journey</h2>
                <div className="w-12 h-1 bg-primary-container mx-auto rounded-full" />
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="relative pl-12 border-l border-white/5 pb-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
                    <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                            <div>
                                <h3 className="text-xl font-bold text-on-surface">Infinite Group</h3>
                                <p className="text-primary-container text-sm font-medium mt-1"> Flutter Developer</p>
                            </div>
                            <span className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase bg-surface-bright/30 px-3 py-1 rounded-lg">Jun 2024 - Present</span>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                            Built scalable Flutter applications using feature-first Clean Architecture, Bloc state management, JWT authentication, and Dio interceptors. Worked on push notifications, pagination, CI/CD automation, and managed Play Store & App Store production releases.
                        </p>
                    </div>
                </div>

                <div className="relative pl-12 border-l border-white/5 pb-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary-container bg-[#0a0a0c]" />
                    <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                            <div>
                                <h3 className="text-xl font-bold text-on-surface">DSD Systems</h3>
                                <p className="text-primary-container text-sm font-medium mt-1">Jr. Software Engineer</p>
                            </div>
                            <span className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase bg-surface-bright/30 px-3 py-1 rounded-lg">Oct 2023 - Jun 2024</span>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                            Developed end-to-end Flutter features from requirement analysis to production deployment. Built reusable UI components, integrated Firebase services and REST APIs, and improved app stability through debugging and code refactoring.
                        </p>
                    </div>
                </div>

                <div className="relative pl-12 border-l border-white/5">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary-container bg-[#0a0a0c]" />
                    <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                            <div>
                                <h3 className="text-xl font-bold text-on-surface">Digicoders Technologies</h3>
                                <p className="text-primary-container text-sm font-medium mt-1">Junior Flutter Developer</p>
                            </div>
                            <span className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase bg-surface-bright/30 px-3 py-1 rounded-lg">Feb 2023 - Sep 2023</span>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                            Developed cross-platform mobile app modules using Flutter and Dart, including e-commerce features such as product listing, cart, checkout, and authentication with Firebase and SQLite integration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

