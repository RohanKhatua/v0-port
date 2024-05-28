import { HashIcon, RssIcon, ChromeIcon, RedoDotIcon, WindIcon, Mountain } from "lucide-react";
import { SocialLinks } from "./social-links";
import { BadgeList } from "./badge-list";

export function AboutSection() {
    const badges = {
        "I use": [
            { Icon: HashIcon, label: "HTML" },
            { Icon: RssIcon, label: "CSS" },
            { Icon: ChromeIcon, label: "JavaScript" },
            { Icon: RedoDotIcon, label: "React" },
            { Icon: WindIcon, label: "Tailwind CSS" },
        ],
        "And when I'm not doing that...": [
            { Icon: Mountain, label: "Hiking" },
        ],
    };


    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12" id="about">
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-bold">
                    About <span className="text-red-500">Me</span>
                </h1>
                <p className="text-zinc-400">
                    Hi, I'm
                    <span className="font-bold"> Rohan Khatua</span>, a passionate web developer with a keen eye for design. I
                    specialize in creating modern, responsive, and user-friendly websites and applications.
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
                <SocialLinks />
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">I use</h2>
                <BadgeList badges={badges["I use"]} />
                <h2 className="text-3xl font-bold">And when I'm not doing that...</h2>
                <BadgeList badges={badges["And when I'm not doing that..."]} />
            </div>
        </section>
    );
}
