export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-8 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                <div className="text-center sm:text-left">
                    <p className="text-white font-bold text-sm">Saurabh Gupta</p>
                    <p className="text-on-surface-variant text-xs mt-1">
                        Flutter Developer · Software Engineer
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/saurabhguptasde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/40 transition-all"
                    >
                        <span className="material-symbols-outlined text-white/70 text-lg">person</span>
                    </a>
                    <a
                        href="https://github.com/SaurabhAlex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/40 transition-all"
                    >
                        <span className="material-symbols-outlined text-white/70 text-lg">code</span>
                    </a>
                    <a
                        href="https://leetcode.com/u/saurabhgupta_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/40 transition-all"
                    >
                        <span className="material-symbols-outlined text-white/70 text-lg">terminal</span>
                    </a>
                </div>

                <p className="text-on-surface-variant text-xs">
                    © 2025 Saurabh Gupta. All rights reserved.
                </p>

            </div>
        </footer>
    );
}

