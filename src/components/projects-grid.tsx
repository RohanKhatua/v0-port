import { HashIcon, RssIcon, ChromeIcon, RedoDotIcon, WindIcon } from "lucide-react";
import { ProjectCard } from "./project-card";

export function ProjectsGrid() {
    const projects = [
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
            badges: [
                { Icon: HashIcon, label: "HTML" },
                { Icon: RssIcon, label: "CSS" },
                { Icon: ChromeIcon, label: "JavaScript" },
            ],
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
            badges: [
                { Icon: RedoDotIcon, label: "React" },
                { Icon: WindIcon, label: "Tailwind CSS" },
            ],
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
            badges: [
                { Icon: RedoDotIcon, label: "React" },
                { Icon: WindIcon, label: "Tailwind CSS" },
            ],
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
            badges: [
                { Icon: RedoDotIcon, label: "React" },
                { Icon: WindIcon, label: "Tailwind CSS" },
            ],
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
            badges: [
                { Icon: RedoDotIcon, label: "React" },
                { Icon: WindIcon, label: "Tailwind CSS" },
            ],
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
            badges: [
                { Icon: RedoDotIcon, label: "React" },
                { Icon: WindIcon, label: "Tailwind CSS" },
            ],
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
            badges: [
                { Icon: RedoDotIcon, label: "React" },
                { Icon: WindIcon, label: "Tailwind CSS" },
            ],
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
            badges: [
                { Icon: RedoDotIcon, label: "React" },
                { Icon: WindIcon, label: "Tailwind CSS" },
            ],
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
            badges: [
                { Icon: RedoDotIcon, label: "React" },
                { Icon: WindIcon, label: "Tailwind CSS" },
            ],
        },
        // Add other projects here...
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects">
            {projects.map(project => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                // Extract the 'label' property from each object in the 'badges' array
                />
            ))}
        </section>
    );
}
