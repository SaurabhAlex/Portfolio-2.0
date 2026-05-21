export type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    imageSrc: string;
    iconNames: string[];
    techStack?: string[];
    descriptionPoints?: string[];
    playStoreUrl?: string;
};


export const projects: Project[] = [
    {
        slug: "iunite-ai",
        title: "IUnite.AI – AI Powered Mobile Application",
        category: "MOBILE AI",
        description:
            "AI powered mobile application built with Flutter, delivering production-grade performance and real-time experiences.",
        imageSrc: "/images/iunite_banner.png",
        iconNames: ["link", "code"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.infinitegroup.iunite&hl=en_IN",
        techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management", "Push Notifications"],
        descriptionPoints: [
            "Developed and maintained a production-grade AI powered mobile application using Flutter.",
            "Implemented scalable architecture, responsive UI, and optimized app performance.",
            "Integrated APIs, authentication flows, and real-time features.",
            "Published and maintained the application on Google Play Store.",
        ],
    },
    {
        slug: "eduvizz",
        title: "EduVizz – School Management Mobile Application",
        category: "EDUCATION",
        description:
            "A comprehensive school management and communication platform built with Flutter, focused on real-world production performance.",
        imageSrc: "/images/eduvizz_banner.png",
        iconNames: ["link", "code"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.dsdsystems.eduvizz1",
        techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management", "Push Notifications"],
        descriptionPoints: [
            "Developed a school management and communication platform using Flutter.",
            "Implemented role-based access control, real-time updates, and responsive UI workflows.",
            "Integrated Firebase services, authentication, and notification systems.",
            "Built scalable reusable components and optimized app performance across Android and iOS.",
            "Managed production deployment and Play Store maintenance workflows.",
        ],
    },
    {
        slug: "tech-junction",
        title: "Tech Junction – E-commerce Mobile Application",
        category: "MOBILE COMMERCE",
        description:
            "E-commerce mobile application built with Flutter, integrating Firebase, APIs, and production-grade workflows.",
        imageSrc: "/images/tech_junction_banner.png",
        iconNames: ["link", "code"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.tech_junction",
        techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management", "Push Notifications"],
        descriptionPoints: [
            "Developed a cross-platform e-commerce mobile application using Flutter.",
            "Implemented product listing, cart management, authentication, and order workflows.",
            "Integrated Firebase services, REST APIs, and responsive UI components.",
            "Optimized app performance and maintained scalable reusable architecture.",
            "Managed production deployment and Play Store release workflow.",
        ],
    },
    {
        slug: "speechflo",
        title: "SpeechFlo",
        category: "AI / AUDIO",
        description:
            "Real-time AI voice synthesis and processing dashboard with waveform visualization.",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBzTmD5olPOs-i23XIFIOXImQmsSnGlheLi2haEYGQHpQFb9UCTaqwRXigjU1uSXiffEBVU_jGpaFLb2FI1zCpLN6umSY6cQ6C-lJlJ2t2fSuv9XA3mT9wwF4TiWw6DRrHGPgngnwY71auSB9odBTRCi8IPGT8ZZNjT2scVJMlA5xT5jjFysBDUJ_bnhEAazEIG-_nDWk-nMyaWu5n8fKq_LA_81q1QNNuGVN4NspererQ8yR2Iw6kCvWoz9-Tm_ST93uEaVEKOYic",
        iconNames: ["link", "code"],
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

