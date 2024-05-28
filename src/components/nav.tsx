import Link from "next/link";

export function Nav() {
    return (
        <nav className="text-gray-300 flex flex-col items-start gap-4">
            <NavLink value="Projects" linkto="projects" />
            <NavLink value="Blog" linkto="https://blog.rohankhatua.dev" />
            <NavLink value="Resume" linkto="https://resume.rohankhatua.dev" />
            <NavLink value="Work" linkto="work" />
        </nav>
    );
}

function NavLink(props: { value: string, linkto: string }) {
    const { value, linkto } = props;
    return (
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={linkto}>{value}</Link>
    );
}
