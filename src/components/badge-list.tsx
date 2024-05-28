import { Badge } from "@/components/ui/badge";
import { HashIcon, RssIcon, ChromeIcon, RedoDotIcon, WindIcon, ViewIcon } from "lucide-react";

export function BadgeList({ badges }: { badges: any[] }) {
    return (
        <div className="flex items-center gap-2 mt-4">
            {badges.map(({ Icon, label }: { Icon: any, label: string }) => (
                <Badge key={label} className="items-center text-zinc-400" variant="outline">
                    <Icon className="h-3.5 w-3.5 -translate-x-1" />
                    {label}
                </Badge>
            ))}
        </div>
    );
}
