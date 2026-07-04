import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function ProjectsSection() {
    return (
        <section className="py-section-padding px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto" id="projects">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="max-w-xl">
                    <h2 className="font-headline-md text-headline-md mb-4">Featured Works</h2>
                    <p className="text-on-surface/80">
                        Production apps shipped to Google Play Store and App Store —
                        built with Flutter, BLoC, Clean Architecture, and Firebase.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}