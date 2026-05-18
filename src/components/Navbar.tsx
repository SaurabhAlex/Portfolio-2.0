"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/5 h-[88px]">
            <div className="flex justify-between items-center w-full px-32 max-w-[1400px] mx-auto h-full">
                <Link
                    className="text-[32px] font-bold text-white tracking-tight"
                    href="#"
                >
                    Saurabh Gupta
                </Link>
                <div className="hidden md:flex gap-[24px] items-center ml-12">
                    <a
                        className="text-white font-medium text-[15px] relative group"
                        href="#home"
                    >
                        Home
                        <span className="absolute -bottom-0.5 left-0 w-full h-[3px] bg-white scale-x-100 transition-transform origin-left" />
                    </a>
                    <a
                        className="text-gray-400 font-medium text-[15px] hover:text-white transition-colors relative group"
                        href="#about"
                    >
                        About
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </a>
                    <a
                        className="text-gray-400 font-medium text-[15px] hover:text-white transition-colors relative group"
                        href="#projects"
                    >
                        Projects
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </a>
                    <a
                        className="text-gray-400 font-medium text-[15px] hover:text-white transition-colors relative group"
                        href="#experience"
                    >
                        Experience
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </a>
                    <a
                        className="text-gray-400 font-medium text-[15px] hover:text-white transition-colors relative group"
                        href="#contact"
                    >
                        Contact
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </a>
                    <button className="ml-4 px-8 py-2.5 border border-white/20 text-white font-bold text-[14px] rounded-2xl hover:bg-white/10 transition-all active:scale-95">
                        Resume
                    </button>
                </div>
                <button className="md:hidden text-on-surface">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
}

