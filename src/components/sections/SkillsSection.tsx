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
                    <h3 className="font-bold text-lg mb-4 text-on-surface">Mobile</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Flutter
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Dart
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Swift UI
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
                    <h3 className="font-bold text-lg mb-4 text-on-surface">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            FastAPI
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Node.js
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Firebase
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
                    <h3 className="font-bold text-lg mb-4 text-on-surface">AI &amp; ML</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            OpenAI API
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            TensorFlow
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            LangChain
                        </span>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-3xl bg-surface-container/20 border-white/5">
                    <div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-6">
                        <span
                            className="material-symbols-outlined text-primary-container text-2xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            palette
                        </span>
                    </div>
                    <h3 className="font-bold text-lg mb-4 text-on-surface">UI/UX</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Figma
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Material 3
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5">
                            Motion
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

