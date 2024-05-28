import { CardContent, Card } from "@/components/ui/card";


export function ProjectCard({ title, description }: { title: string, description: string }) {
    return (
        <Card className="bg-transparent border-0 hover:bg-zinc-800">
            <CardContent className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-zinc-100">{title}</h3>
                </div>
                <p className="text-zinc-100 mt-2">{description}</p>

            </CardContent>
        </Card>
    );
}
