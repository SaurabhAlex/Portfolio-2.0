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
        title: "Iunite.ai – B2B Multi-Role CRM",
        category: "MOBILE · B2B CRM",
        description:
            "Production B2B CRM for international education consultants — 5 user roles, live on Google Play Store and App Store.",
        imageSrc: "/images/iunite_banner.png",
        iconNames: ["link", "code"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.infinitegroup.iunite&hl=en_IN",
        techStack: [
            "Flutter",
            "Dart",
            "BLoC",
            "Clean Architecture",
            "Dio",
            "Firebase",
            "FCM",
            "GoRouter",
            "Sqflite",
            "Geolocator",
            "Codemagic CI/CD",
            "REST APIs",
            "Kotlin",
            "Swift",
        ],
        descriptionPoints: [
            "Architected feature modules using BLoC with Clean Architecture (feature-first folder structure) across 5 user roles — Partner, PartnerBranch, RMH, UniversityRepresentative, and SuperAdmin.",
            "Built real-time GPS tracking using Geolocator with 100m deduplication threshold — reduced network payload by ~60% and minimised battery drain on field devices.",
            "Designed role-scoped FCM device registration and deregistration ensuring strict push notification isolation between all 5 user personas on login/logout switching.",
            "Built custom Dio interceptor pipeline for JWT access token validation and silent refresh — reducing session failure incidents to near-zero.",
            "Cut deployment cycle from 3 hours to under 15 minutes by engineering Codemagic CI/CD pipelines for both Play Store and App Store.",
            "Implemented offline-first architecture using Sqflite with background sync for intermittent connectivity scenarios.",
            "Built native platform channels (Kotlin + Swift) to expose device-level APIs to the Flutter layer.",
        ],
    },
    {
        slug: "eduvizz",
        title: "EduVizz – School Management Platform",
        category: "EDUCATION · MOBILE",
        description:
            "Role-aware school management and communication platform connecting students, teachers, and admins — built with Flutter and Firebase.",
        imageSrc: "/images/eduvizz_banner.png",
        iconNames: ["link", "code"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.dsdsystems.eduvizz1",
        techStack: [
            "Flutter",
            "Dart",
            "Provider",
            "Firebase Auth",
            "Firebase Realtime Database",
            "FCM",
            "REST APIs",
        ],
        descriptionPoints: [
            "Built a role-based school management app with 3 user personas — student, teacher, and admin — each with dedicated dashboards and workflows.",
            "Integrated Firebase Realtime Database for live attendance, assignment, and notification updates across all roles.",
            "Implemented FCM push notification delivery for role-specific alerts and announcements.",
            "Built scalable reusable component library — form fields, cards, loaders — used across all product screens.",
            "Managed production deployment and Play Store release workflow end-to-end.",
        ],
    },
    {
        slug: "tech-junction",
        title: "Tech Junction – E-commerce Mobile App",
        category: "MOBILE · E-COMMERCE",
        description:
            "Cross-platform e-commerce Flutter app with product listing, cart, checkout, and Firebase backend integration.",
        imageSrc: "/images/tech_junction_banner.png",
        iconNames: ["link", "code"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.tech_junction",
        techStack: [
            "Flutter",
            "Dart",
            "Provider",
            "Firebase Realtime Database",
            "SQLite",
            "REST APIs",
        ],
        descriptionPoints: [
            "Developed a cross-platform e-commerce app with product listing, cart management, checkout, and order flow modules.",
            "Integrated Provider for state management and Firebase Realtime Database for backend sync.",
            "Implemented SQLite for local data persistence and offline access.",
            "Built responsive layouts using MediaQuery and adaptive widgets targeting both phone and tablet form factors.",
            "Managed Play Store deployment and release cycle.",
        ],
    },
    {
        slug: "speechflo",
        title: "SpeechFlo – AI Voice Synthesis Dashboard",
        category: "AI · AUDIO",
        description:
            "Real-time AI voice synthesis and processing dashboard with waveform visualization — built with Python and FastAPI.",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBzTmD5olPOs-i23XIFIOXImQmsSnGlheLi2haEYGQHpQFb9UCTaqwRXigjU1uSXiffEBVU_jGpaFLb2FI1zCpLN6umSY6cQ6C-lJlJ2t2fSuv9XA3mT9wwF4TiWw6DRrHGPgngnwY71auSB9odBTRCi8IPGT8ZZNjT2scVJMlA5xT5jjFysBDUJ_bnhEAazEIG-_nDWk-nMyaWu5n8fKq_LA_81q1QNNuGVN4NspererQ8yR2Iw6kCvWoz9-Tm_ST93uEaVEKOYic",
        iconNames: ["link", "code"],
        techStack: [
            "Python",
            "FastAPI",
            "WebSockets",
        ],
        descriptionPoints: [
            "Built a real-time voice synthesis dashboard with waveform visualization using Python and FastAPI.",
            "Implemented WebSocket-based audio streaming for low-latency voice processing.",
            "Personal project — in active development.",
        ],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}