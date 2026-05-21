"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

function TechStackChips({ techStack }: { techStack?: string[] }) {
    if (!techStack?.length) return null;

    return (
        <div className="flex flex-wrap gap-2 mb-5">
            {techStack.map((tech) => (
                <span
                    key={tech}
                    className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-surface-bright/50 text-on-surface-variant rounded-lg border border-white/5"
                >
                    {tech}
                </span>
            ))}
        </div>
    );
}

function DescriptionPoints({ descriptionPoints }: { descriptionPoints?: string[] }) {
    if (!descriptionPoints?.length) return null;

    return (
        <ul className="text-on-surface-variant text-sm mb-6 space-y-2">
            {descriptionPoints.map((point) => (
                <li key={point} className="leading-relaxed flex gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-container/60 shrink-0" />
                    <span>{point}</span>
                </li>
            ))}
        </ul>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-3xl glass-card h-full relative">
            <Link
                href={`/projects/${project.slug}`}
                className="relative w-full aspect-[16/9] overflow-hidden"
            >
                <Image
                    alt={project.title}
                    src={project.imageSrc}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold text-sm">
                        View Project Details
                    </span>
                </div>
            </Link>
            
            <div className="flex flex-col flex-grow p-8">
                <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-bold tracking-widest uppercase rounded-full border border-primary-container/20">
                        {project.category}
                    </span>
                    <Link href={`/projects/${project.slug}`} className="flex gap-3">
                        <span className="material-symbols-outlined text-primary-container text-lg opacity-40 group-hover:opacity-100 transition-opacity">
                            link
                        </span>
                    </Link>
                </div>

                <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-2xl font-bold mb-4 text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
                        {project.title}
                    </h3>
                </Link>

                <div className="flex-grow">
                    <TechStackChips techStack={project.techStack} />

                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>

                    <DescriptionPoints descriptionPoints={project.descriptionPoints} />
                </div>

                <div className="mt-auto space-y-6">
                    {project.playStoreUrl ? (
                        <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00f0ff] text-black font-black rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,240,255,0.35)] relative z-10"
                        >
                            <span className="text-sm">View on Play Store</span>
                            <span className="material-symbols-outlined font-bold text-lg">open_in_new</span>
                        </a>
                    ) : null}

                    <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                        <span className="material-symbols-outlined text-primary-container text-xl opacity-60">
                            format_quote
                        </span>
                        <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                            Project Showcase
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


