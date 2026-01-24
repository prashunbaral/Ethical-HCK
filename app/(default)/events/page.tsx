import Image from "next/image";
import Link from "next/link";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import WorflowImg04 from "@/public/images/workflow-04.png";
import WorflowImg05 from "@/public/images/workflow-05.png";
import WorflowImg06 from "@/public/images/workflow-06.png";
import WorflowImg07 from "@/public/images/workflow-07.png";
import WorflowImg08 from "@/public/images/workflow-08.png";
import WorflowImg09 from "@/public/images/workflow-09.png";
import WorflowImg10 from "@/public/images/workflow-10.png";
import WorflowImg11 from "@/public/images/workflow-11.png";
import Spotlight from "@/components/spotlight";
import PageIllustration from "@/components/page-illustration";

export const metadata = {
  title: "Events - Ethical HCK",
  description: "All events organized by Ethical HCK community",
};

// All events data
const allEvents = [
  {
    id: 1,
    image: WorflowImg01,
    type: "Seminar",
    title: "Hacktivities",
    description: "An introductory seminar exploring the cybersecurity industry landscape, career opportunities, and the fundamentals of staying secure in the digital age.",
  },
  {
    id: 2,
    image: WorflowImg02,
    type: "Workshop",
    title: "WiFi Hacking Workshop",
    description: "A hands-on workshop diving deep into wireless network vulnerabilities, cracking WPA/WPA2, and understanding how attackers exploit poorly secured networks.",
  },
  {
    id: 3,
    image: WorflowImg03,
    type: "Seminar",
    title: "Cyber Talks",
    description: "An insightful seminar featuring discussions on bug bounty hunting, building a career in cybersecurity, and tips from industry professionals.",
  },
  {
    id: 4,
    image: WorflowImg04,
    type: "Seminar",
    title: "Hack The Box Meetup",
    description: "A deep dive into web application security, covering common vulnerabilities like SQL injection, XSS, and secure coding practices.",
  },
  {
    id: 5,
    image: WorflowImg05,
    type: "Seminar + Workshop",
    title: "Bug Bounty",
    description: "A comprehensive session combining theory and practice on bug bounty hunting—learn how to find vulnerabilities and get paid for it.",
  },
  {
    id: 6,
    image: WorflowImg06,
    type: "CTF",
    title: "Cyber Hunt",
    description: "An exciting Capture The Flag competition challenging participants with real-world cybersecurity puzzles, cryptography, and exploitation tasks.",
  },
  {
    id: 7,
    image: WorflowImg07,
    type: "Exhibition",
    title: "Cyber Pradarshan",
    description: "A cybersecurity project exhibition showcasing innovative security tools, research projects, and creative solutions built by community members.",
  },
  {
    id: 8,
    image: WorflowImg08,
    type: "Workshop",
    title: "WiFi Hijack",
    description: "An advanced workshop on WiFi hacking and Man-in-the-Middle attacks, demonstrating traffic interception and network manipulation techniques.",
  },
  {
    id: 9,
    image: WorflowImg09,
    type: "Seminar",
    title: "Dark Web",
    description: "A fascinating exploration of the dark web—its structure, how it operates, the risks involved, and its role in cybersecurity.",
  },
  {
    id: 10,
    image: WorflowImg10,
    type: "Seminar",
    title: "Digital Detectives",
    description: "A seminar on digital forensics covering evidence collection, data recovery, and investigative techniques used in cybercrime analysis.",
  },
  {
    id: 11,
    image: WorflowImg11,
    type: "Seminar",
    title: "Bad USB",
    description: "An eye-opening session on USB-based attacks including Rubber Ducky, BadUSB exploits, and how these tiny devices can compromise entire systems.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageIllustration />
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                All Events
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Our Events
            </h1>
            <p className="text-lg text-indigo-200/65">
              Discover the diverse range of events we've hosted, from hands-on
              WiFi hacking workshops to interactive hacktivities and engaging
              talks. Our past events highlight our commitment to practical
              learning and community engagement in cybersecurity.
            </p>
          </div>

          {/* Events grid */}
          <Spotlight className="group mx-auto grid max-w-md items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {allEvents.map((event) => (
              <a
                key={event.id}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Image */}
                  <div className="relative w-full h-[350px] overflow-hidden">
                    <Image
                      className="object-cover"
                      src={event.image}
                      fill
                      alt={event.title}
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {event.type}
                        </span>
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-indigo-200/65 text-sm">{event.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </Spotlight>
        </div>
      </section>
    </>
  );
}
