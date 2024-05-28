export function Footer() {
    return (
        <footer className="fixed bg-zinc-800 bottom-0 w-full py-4 text-sm text-zinc-400">
            <div className="container text-center">
                © {new Date().getFullYear()} Rohan Khatua. All rights reserved.
            </div>
        </footer>
    );
}
