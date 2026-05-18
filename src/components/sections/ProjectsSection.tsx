import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function ProjectsSection() {
    return (
        <section className="py-section-padding px-12 max-w-[1400px] mx-auto" id="projects">
            <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-4">
                <div className="max-w-xl">
                    <h2 className="font-headline-md text-headline-md mb-4">Featured Works</h2>
                    <p className="text-on-surface-variant">
                        A collection of premium mobile experiences and high-performance engineering projects.
                    </p>
                </div>
                <a className="text-primary flex items-center gap-2 hover:underline" href="#">
                    View All Projects <span className="material-symbols-outlined">open_in_new</span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}

