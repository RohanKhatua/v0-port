import { Nav } from "@/components/nav";
import { AboutSection } from "@/components/about-section";
import Link from "next/link";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-red-50 dark:bg-zinc-950 dark:text-red-50">

      <AboutSection></AboutSection>

    </div>
  );
}
