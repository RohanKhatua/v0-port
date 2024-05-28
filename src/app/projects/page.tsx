import { ProjectsGrid } from "@/components/projects-grid";

export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950 text-red-50 dark:bg-zinc-950 dark:text-red-50 font-geist">
            <main className="flex-1 px-6 py-12">
                <div className="text-3xl pb-10 font-bold">
                    Projects
                </div>
                <ProjectsGrid />
            </main>
        </div>
    );
}
