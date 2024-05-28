import Link from "next/link";
import { Nav } from "./nav";

export default function Sidebar() {
    return (
        <div className="hidden bg-zinc-950 md:flex flex-col items-start gap-6 px-6 py-12 border-r border-zinc-800">
            <Link className="text-3xl font-bold text-zinc-200" href="#">Rohan Khatua</Link>
            <Nav />
        </div>
    );
}