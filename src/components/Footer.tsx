export default function Footer() {
    return (
        <footer className="bg-[#0a0a0c] border-t border-white/5">
            <div className="max-w-container-max mx-auto px-[110px] sm:px-[110px] py-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <a
                        className="text-xl text-on-surface font-bold tracking-tight"
                        href="#"
                    >
                        Saurabh Gupta
                    </a>
                    <p className="text-on-surface-variant text-sm mt-2">
                        © 2026 Saurabh Gupta. Built with precision and kinetic energy.
                    </p>
                </div>
                <div className="flex gap-8">
                    <a
                        className="text-xs font-medium text-on-surface-variant hover:text-primary-container transition-colors"
                        href="https://github.com/SaurabhAlex"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        className="text-xs font-medium text-on-surface-variant hover:text-primary-container transition-colors"
                        href="https://www.linkedin.com/in/saurabhguptasde/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        className="text-xs font-medium text-on-surface-variant hover:text-primary-container transition-colors"
                        href="https://leetcode.com/u/saurabhgupta_/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LeetCode
                    </a>

                    <a
                        className="text-xs font-medium text-on-surface-variant hover:text-primary-container transition-colors"
                        href="mailto:saurabhguptasde@gmail.com"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

