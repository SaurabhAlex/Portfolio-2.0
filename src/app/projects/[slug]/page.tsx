import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getProjectBySlug } from "@/lib/data/projects";
import ProjectDetailTemplate from "@/components/templates/ProjectDetailTemplate";

export function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Metadata {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        return {
            title: "Project not found",
        };
    }

    return {
        title: `${project.title} | Saurabh Gupta`,
        description: project.description,
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailTemplate project={project} />;
}

