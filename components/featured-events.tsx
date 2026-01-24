import Image from "next/image";
import Link from "next/link";
import WorflowImg04 from "@/public/images/workflow-04.png";
import WorflowImg05 from "@/public/images/workflow-05.png";
import WorflowImg09 from "@/public/images/workflow-09.png";
import Spotlight from "@/components/spotlight";

// Featured events data (only showing best/featured events)
const featuredEvents = [
  {
    id: 1,
    image: WorflowImg04,
    type: "Workshop",
    title: "Penetration Testing Lab",
    description:
      "An intensive hands-on workshop where participants learned real-world penetration testing techniques, exploring vulnerabilities in controlled environments and mastering ethical hacking tools.",
  },
  {
    id: 2,
    image: WorflowImg05,
    type: "Seminar",
    title: "Cybersecurity Awareness Talk",
    description:
      "An engaging seminar focused on raising cybersecurity awareness, covering topics from social engineering threats to best practices for personal and organizational digital security.",
  },
  {
    id: 3,
    image: WorflowImg09,
    type: "Conference",
    title: "Ethical HCK Summit",
    description:
      "Our flagship annual conference bringing together cybersecurity enthusiasts, professionals, and industry experts for networking, knowledge sharing, and collaborative learning experiences.",
  },
];

export default function FeaturedEvents() {
  return (
    <section id="featured-events">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Featured Events
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Milestones and Best Events
            </h2>
            <p className="text-lg text-indigo-200/65">
              Discover our most impactful events that have shaped the Ethical HCK
              community. These featured highlights showcase our commitment to
              practical learning and cybersecurity excellence.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <a
                key={event.id}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Image */}
                  <div className="relative w-full h-[450px] overflow-hidden">
                    <Image
                      className="object-cover"
                      src={event.image}
                      fill
                      alt={event.title}
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {event.type}
                        </span>
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-indigo-200/65">{event.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </Spotlight>

          {/* View all events link */}
          <div className="text-center mt-12">
            <Link
              href="/events"
              className="group inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
            >
              View All Events
              <span className="ml-2 tracking-normal transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
