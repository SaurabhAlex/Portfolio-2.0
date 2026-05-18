export type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    imageSrc: string;
    iconNames: string[];
};

export const projects: Project[] = [
    {
        slug: "speechflo",
        title: "SpeechFlo",
        category: "AI / AUDIO",
        description:
            "Real-time AI voice synthesis and processing dashboard with waveform visualization.",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBzTmD5olPOs-i23XIFIOXImQmsSnGlheLi2haEYGQHpQFb9UCTaqwRXigjU1uSXiffEBVU_jGpaFLb2FI1zCpLN6umSY6cQ6C-lJlJ2t2fSuv9XA3mT9wwF4TiWw6DRrHGPgngnwY71auSB9odBTRCi8IPGT8ZZNjT2scVJMlA5xT5jjFysBDUJ_bnhEAazEIG-_nDWk-nMyaWu5n8fKq_LA_81q1QNNuGVN4NspererQ8yR2Iw6kCvWoz9-Tm_ST93uEaVEKOYic",
        iconNames: ["link", "code"],
    },
    {
        slug: "lumina-ai-chat",
        title: "Lumina AI Chat",
        category: "LLM INTEGRATION",
        description:
            "Next-gen conversational interface with offline context and streaming capabilities.",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuApxVA4LJsKiRjG6cTsIFXHmrSskOQ4QkqhWK6ObtJa2XLTxt_bAG5z93g9BH09KUQ5HtLsH62Ms_uHwx5ZUUwWyoF99hjsaa79S_POSGwMIw4nbjQxrJAlf_0kZE5DhnwvcLZNmCo_YEZZuQk3CfsqTL0kL1z8qk6BS__7NRE8SQIu0mWrJ3TcXvZ-mPLyqjIskh-SXTQcLdDjj2bY2TRgsgVlV7bnA0sn4MCiBfnNt17AcQYBhZ2XFN-_WUCw6NJ0Y7aAuV1w-8E",
        iconNames: ["link", "code"],
    },
    {
        slug: "omnitack-live",
        title: "OmniTrack Live",
        category: "GEO-FENCING",
        description:
            "Real-time logistics monitoring system with low-latency WebSocket updates.",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDV6yLs8aWLOK1KXZHXhuLfYwykMuQvhO1Tst5GuiJwxLab2yJSA2JUZe4RfglhO98Mgcb69hn8GY3ErryO9E2fQFAB4YRL4RegXEugC8X3zYnYCDV2frp_tAKYPYEpF-hfw7supF6SOYNMUNTvhx3VYZtlgNl6gp327JUkdoUuJxYUDw5G0aosm-8J6ZgDnEYh285km34LFx3CyT7ISTL_HbHTsqs5ThBddYQDi4n8_f4Ua9GZT8h9yoI-IpJGGKOEEJziu2tiOZM",
        iconNames: ["link", "code"],
    },
    {
        slug: "nexus-cms",
        title: "Nexus CMS",
        category: "SaaS DASHBOARD",
        description:
            "Powerful admin panel for content management with integrated analytics.",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAZJoVVCH1U7Tid_3aADL5c94bT1-mc0dCHZ2XFahgBqIwwE3MWGzhkt6RCZUEv-5Jy5ZvwNSjS1MYRgE8hEUP_FxvwWa4db_uZsE_nVkFRlHbD9RAN7iZkOIoeABrytINWTwvjWSf_kAlOSoMZDDRW_UILa-FoNNP3K7PKrfny0mpmPCujxfMlDUxP1eMpM4gvPTHj_ZRCB-nObjMvqoMyNBWzNNPOCdB_hYCOOKIoFkctEbxw2Yu7BbyevJ_xzWzQDXtlRzJ8nUM",
        iconNames: ["link", "code"],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

