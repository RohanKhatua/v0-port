import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet";

import { X, Menu } from "lucide-react";
import { Nav } from "./nav";

export function Header() {
    return (
        <header className="bg-zinc-950 flex items-center justify-between px-6 py-4 border-b border-zinc-800 md:hidden">
            <Link className="text-white text-3xl font-bold" href="#">Rohan Khatua</Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="bg-transparent" size="icon" variant="default">
                        <Menu className="h-6 w-6 fill-white" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full h-full bg-zinc-950 p-6" side="left">
                    <SheetClose className="absolute top-6 right-6">
                        <Button size="icon" variant="default" className="bg-transparent">
                            <X />
                        </Button>
                    </SheetClose>
                    <div className="flex flex-col items-start gap-6">
                        <Nav />
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
}
