import Link from "next/link";
import { Twitter, Linkedin, Mail } from "lucide-react";

export function SocialLinks() {
    return (
        <div className="flex items-center gap-4 mt-4">
            <Link href="#" target="_blank">
                <Twitter className="h-6 w-6 hover:text-red-500" />
            </Link>
            <Link href="#" target="_blank">
                <Linkedin className="h-6 w-6 hover:text-red-500" />
            </Link>
            <Link href="#" target="_blank">
                <Mail className="h-6 w-6 hover:text-red-500" />
            </Link>
        </div>
    );
}
