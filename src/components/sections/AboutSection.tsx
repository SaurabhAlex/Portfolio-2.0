export default function AboutSection() {
    return (
        <section className="py-section-padding px-12 max-w-[1400px] mx-auto" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
                <div className="lg:col-span-7 space-y-6">
                    <h2 className="font-headline-md text-headline-md text-on-surface">About Me</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        With over 3 years of dedicated experience in the Flutter ecosystem, I&apos;ve transformed complex business requirements
                        into elegant, scalable mobile applications. My approach combines technical rigor with a user-centric mindset.

                    </p>
                    <div className="glass-card bg-[#0e0e10] p-6 rounded-xl font-label-code text-sm overflow-hidden border-primary-container/20">
                        <div className="flex gap-1.5 mb-6">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="space-y-1.5">
                            <p className="flex gap-2">
                                <span className="text-[#00f0ff]">saurabh@portfolio:~$</span>
                                <span className="text-on-surface">whoami</span>
                            </p>
                            <p className="text-on-surface-variant ml-4">Experience: 3+ Years</p>
                            <p className="text-on-surface-variant ml-4">Core: Flutter, Dart, Firebase, Bloc, GetX, REST APIs</p>
                            <p className="text-on-surface-variant ml-4">Expertise: Clean Architecture, Real-time Apps, AI Integrations, Live Tracking</p>
                            <p className="flex items-center gap-2 ml-4">
                                <span className="text-on-surface-variant">Status:</span>
                                <span className="text-green-400">Open for new challenges</span>
                                <span className="w-2 h-4 bg-primary-container animate-pulse" />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center bg-surface-container/30">
                        <p className="text-4xl font-bold text-primary-container mb-2">5+</p>
                        <p className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">Projects Delivered</p>
                    </div>
                    <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center bg-surface-container/30">
                        <p className="text-4xl font-bold text-primary-container mb-2">3+</p>
                        <p className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">Years of Experience</p>
                    </div>
                    <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center sm:col-span-2 bg-surface-container/30">
                        <p className="text-5xl font-bold text-primary-container mb-2">100%</p>
                        <p className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

