"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-3xl glass-card aspect-[16/10]"
        >
            <div className="relative w-full h-full">
                <Image
                    alt={project.title}
                    src={project.imageSrc}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-bold tracking-widest uppercase rounded-full mb-4 inline-block border border-primary-container/20">
                    {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2 text-on-surface group-hover:text-primary-container transition-colors">
                    {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>
                <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary-container text-xl opacity-60 group-hover:opacity-100 transition-opacity">
                        format_quote
                    </span>
                    <span className="material-symbols-outlined text-primary-container text-xl opacity-60 group-hover:opacity-100 transition-opacity">
                        link
                    </span>
                </div>
            </div>
        </Link>
    );
}

