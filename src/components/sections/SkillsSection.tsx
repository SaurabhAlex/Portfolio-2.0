export default function SkillsSection() {
    return (
        <section className="py-section-padding px-12 max-w-[1400px] mx-auto" id="skills">
            <div className="text-center mb-stack-lg">
                <h2 className="font-headline-md text-headline-md mb-2">Core Competencies</h2>
                <div className="w-12 h-1 bg-primary-container mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                    <div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-6">
                        <span
                            className="material-symbols-outlined text-primary-container text-2xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            smartphone
                        </span>
                    </div>

                    <h3 className="font-bold text-lg mb-4 text-on-surface">
                        Mobile Development
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Flutter
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Dart
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Android
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            iOS
                        </span>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                    <div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-6">
                        <span
                            className="material-symbols-outlined text-primary-container text-2xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            database
                        </span>
                    </div>

                    <h3 className="font-bold text-lg mb-4 text-on-surface">
                        Backend & APIs
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            REST APIs
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Firebase
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            FastAPI
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            JWT Auth
                        </span>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                    <div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-6">
                        <span
                            className="material-symbols-outlined text-primary-container text-2xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            psychology
                        </span>
                    </div>

                    <h3 className="font-bold text-lg mb-4 text-on-surface">
                        Architecture & State
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Bloc
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            GetX
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Clean Architecture
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Repository Pattern
                        </span>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                    <div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-6">
                        <span
                            className="material-symbols-outlined text-primary-container text-2xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            terminal
                        </span>
                    </div>

                    <h3 className="font-bold text-lg mb-4 text-on-surface">
                        Tools & Deployment
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            GitHub
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Codemagic
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Play Store
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            App Store
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}