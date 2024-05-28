/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mre0LG4l5iB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-red-50 dark:bg-zinc-950 dark:text-red-50 font-geist">
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 md:hidden">
        <Link className="text-3xl font-bold" href="#">
          John Doe
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full h-full bg-zinc-950 p-6" side="left">
            <div className="flex flex-col items-start gap-6">
              <Link className="text-3xl font-bold" href="#">
                John Doe
              </Link>
              <nav className="text-gray-300 flex flex-col items-start gap-4">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                  Projects
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                  Blog
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                  Resume
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                  Work
                </Link>
              </nav>

            </div>
          </SheetContent>
        </Sheet>
      </header>
      <div className="flex flex-1">
        <div className="hidden md:flex flex-col items-start gap-6 px-6 py-12 border-r border-zinc-800">
          <Link className="text-3xl font-bold" href="#">
            John Doe
          </Link>
          <nav className="flex flex-col items-start gap-4">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Blog
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Resume
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Work
            </Link>
          </nav>
          <Select>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="Theme" />
              <ChevronDownIcon className="h-4 w-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <main className="flex-1 px-6 py-12">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12" id="about">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold">
                About <span className="text-red-500">Me</span>
              </h1>
              <p className="text-zinc-400">
                Hi, I'm
                <span className="font-bold">John Doe</span>, a passionate web developer with a keen eye for design. I
                specialize in creating modern, responsive, and user-friendly websites and applications.
                {"\n                      "}
              </p>
              <p className="text-zinc-400">
                With years of experience in the industry, I've honed my skills in HTML, CSS, JavaScript, and various
                front-end frameworks like React and Vue.js. I'm always eager to learn new technologies and techniques to
                stay ahead of the curve.
              </p>
              <p className="text-zinc-400">
                In my free time, I enjoy exploring the latest design trends, experimenting with new libraries and tools,
                and contributing to open source projects. I'm a strong believer in the power of collaboration, and I
                love working with teams to bring innovative ideas to life.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Link href="#" target="_blank">
                  <TwitterIcon className="h-6 w-6 hover:text-red-500" />
                </Link>
                <Link href="#" target="_blank">
                  <LinkedinIcon className="h-6 w-6 hover:text-red-500" />
                </Link>
                <Link href="#" target="_blank">
                  <MailIcon className="h-6 w-6 hover:text-red-500" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">I use</h2>
              <div className="flex flex-wrap gap-2">
                <Badge className="items-center text-zinc-400" variant="outline">
                  <HashIcon className="h-3.5 w-3.5 -translate-x-1" />
                  HTML
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <RssIcon className="h-3.5 w-3.5 -translate-x-1" />
                  CSS
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <ChromeIcon className="h-3.5 w-3.5 -translate-x-1" />
                  JavaScript
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <RedoDotIcon className="h-3.5 w-3.5 -translate-x-1" />
                  React
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <ViewIcon className="h-3.5 w-3.5 -translate-x-1" />
                  Vue.js
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <WindIcon className="h-3.5 w-3.5 -translate-x-1" />
                  Tailwind CSS
                </Badge>
              </div>
              <h2 className="text-3xl font-bold">And when I'm not doing that...</h2>
              <div className="flex flex-wrap gap-2">
                <Badge className="items-center text-zinc-400" variant="outline">
                  <BookIcon className="h-3.5 w-3.5 -translate-x-1" />
                  Reading
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <CameraIcon className="h-3.5 w-3.5 -translate-x-1" />
                  Photography
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <MountainIcon className="h-3.5 w-3.5 -translate-x-1" />
                  Hiking
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <BikeIcon className="h-3.5 w-3.5 -translate-x-1" />
                  Cycling
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <MusicIcon className="h-3.5 w-3.5 -translate-x-1" />
                  Music
                </Badge>
                <Badge className="items-center text-zinc-400" variant="outline">
                  <CookingPotIcon className="h-3.5 w-3.5 -translate-x-1" />
                  Cooking
                </Badge>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="bg-zinc-800 px-6 py-4 text-sm text-zinc-400">
        <div className="container mx-auto flex justify-between">
          <p>© 2024 John Doe. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link className="hover:text-zinc-50" href="#">
              Privacy
            </Link>
            <Link className="hover:text-zinc-50" href="#">
              Terms
            </Link>
            <Link className="hover:text-zinc-50" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BikeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  )
}


function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function CookingPotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20" />
      <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="m4 8 16-4" />
      <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
    </svg>
  )
}


function HashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function MusicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}


function RedoDotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="17" r="1" />
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
}


function RssIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function ViewIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}


function WindIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}