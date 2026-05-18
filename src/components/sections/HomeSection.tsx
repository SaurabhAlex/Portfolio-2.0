export default function HomeSection() {
    return (
        <section
            className="relative pt-[120px] pb-24 px-12 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center overflow-hidden"
            id="home"
        >
            {/* Background Glows to match Screenshot 1 */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 text-[#00f0ff] font-bold text-[10px] tracking-widest uppercase">
                        Available for Projects
                    </div>

                    <h1 className="text-[32px] md:text-[58px] font-black text-white leading-[0.98] tracking-tighter max-w-[850px]">
                        Flutter Developer | <br />
                        <span className="text-[#00f0ff]">Mobile App Engineer</span> | <br />
                        AI Enthusiast
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                        Crafting high-performance cross-platform experiences with Flutter, Firebase, and FastAPI. Specializing in Clean
                        Architecture and AI-driven mobile solutions that push the boundaries of what&apos;s possible on the edge.
                    </p>

                    <div className="flex flex-wrap gap-5 pt-4">
                        <button className="px-10 py-4 bg-[#00f0ff] text-black font-black rounded-2xl flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                            <span className="text-lg">View Projects</span>
                            <span className="material-symbols-outlined font-bold">arrow_forward</span>
                        </button>
                        <button className="px-10 py-4 border border-white/20 text-white font-black rounded-2xl hover:bg-white/5 transition-all">
                            Contact Me
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-5 relative flex justify-center lg:justify-end -mt-8">
                    <div className="relative w-full aspect-square max-w-[460px]">
                        {/* Wavy borders from screenshot 1 */}
                        <div className="absolute inset-0 border border-white/10 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] rotate-3 scale-105" />
                        <div className="absolute inset-0 border border-white/5 rounded-[70%_30%_30%_70%_/_70%_70%_30%_30%] -rotate-2 scale-110" />

                        <div className="relative w-full h-full overflow-hidden rounded-[2rem] border border-white/10">
                            <img
                                alt="Saurabh Gupta"
                                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqgJ4caFRmxLLDRDAEpg5wbp1T2mXgul0oP9WShmrsfNIwxOeUtd6ewMHhfbT_qfd0fwU0V4_M6LBZ2_ke0u0fLdGcPnCSW5rkY-v8flAlukGe-kUY-jX0tplZRseJP1I4kcTveCEumJ_Kx9BY3c9oxQ5L-TsIlNZPkE1ikOwdcgFGMy9eewrvQdrX4A6M4Am5ha6GJ-NwLizdHWSfoJtKXmw8Opt5hUP8Qjz7GQWiuIEBShSCo5NOSmh4Ow8Tx2NXXQHKOekyfUQ"
                            />

                            {/* Glass card - exactly as Screenshot 1 */}
                            <div className="absolute bottom-8 left-8 right-8 bg-black/30 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white/90 text-2xl">terminal</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-0.5">Current Focus</p>
                                    <p className="text-white font-bold text-sm tracking-tight">Generative AI Integration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

