export default function ContactSection() {
    return (
        <section className="py-section-padding px-12 max-w-[1400px] mx-auto" id="contact">
            <div className="glass-card p-8 md:p-12 lg:p-16 rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-16 bg-surface-container/20 border-white/5">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6 leading-tight">Let&apos;s build something extraordinary.</h2>
                    <p className="text-on-surface-variant mb-12 text-sm md:text-base leading-relaxed">
                        Whether you have a specific project in mind or just want to chat about AI and mobile tech, I&apos;m always open to new
                        connections.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-surface-bright/50 flex items-center justify-center text-primary-container border border-white/5">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-1">Email</p>
                                <p className="font-bold text-on-surface">saurabhguptasde@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-surface-bright/50 flex items-center justify-center text-primary-container border border-white/5">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-1">Location</p>
                                <p className="font-bold text-on-surface">Remote Worldwide • Onsite in India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            className="bg-black/20 border border-white/10 rounded-xl p-4 text-on-surface focus:outline-none focus:border-primary-container/50 transition-colors"
                            placeholder="First Name"
                            type="text"
                        />
                        <input
                            className="bg-black/20 border border-white/10 rounded-xl p-4 text-on-surface focus:outline-none focus:border-primary-container/50 transition-colors"
                            placeholder="Last Name"
                            type="text"
                        />
                    </div>
                    <input
                        className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-on-surface focus:outline-none focus:border-primary-container/50 transition-colors"
                        placeholder="Email Address"
                        type="email"
                    />
                    <textarea
                        className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-on-surface focus:outline-none focus:border-primary-container/50 transition-colors"
                        placeholder="Message"
                        rows={5}
                    />
                    <button className="w-full py-4 bg-primary-container text-on-primary font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

