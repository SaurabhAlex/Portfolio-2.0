import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";


export default function ProjectDetailTemplate({ project }: { project: Project }) {
    return (
        <main className="relative">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] radial-gradient-bg opacity-30 animate-pulse" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] radial-gradient-bg opacity-20"
                    style={{ filter: "hue-rotate(45deg)" }}
                />
            </div>

            <section className="relative pt-32 pb-section-padding px-gutter max-w-container-max mx-auto min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <div className="glass-card p-6 md:p-10 rounded-3xl border-primary/20">
                        <div className="flex flex-col md:flex-row gap-10 items-start">
                            <div className="w-full md:w-[48%] aspect-[16/10] rounded-2xl overflow-hidden relative glass-card">
                                <Image
                                    alt={project.title}
                                    src={project.imageSrc}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary-container font-label-code text-label-code">
                                    <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
                                    {project.category}
                                </div>
                                <h1 className="mt-5 font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
                                    {project.title}
                                </h1>
                                <p className="mt-4 text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
                                    {project.description}
                                </p>

                                <div className="mt-8 flex gap-4">
                                    {project.iconNames.map((icon) => (
                                        <span key={icon} className="material-symbols-outlined text-primary-container text-4xl">
                                            {icon}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <Link
                                        href="/"
                                        className="inline-flex items-center px-8 py-4 bg-primary-container text-on-primary font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all neon-glow"
                                    >
                                        Back to Home
                                    </Link>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

