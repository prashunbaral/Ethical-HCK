"use client";

import Image from "next/image";
import Link from "next/link";
import Spotlight from "@/components/spotlight";

const leaders = [
  {
    img: "/images/nabin-pyakurel.jpg",
    name: "Nabin Pyakurel",
    position: "Community Leader",
    instagram: "https://www.instagram.com/nabin.pyakurel/",
    linkedin: "https://www.linkedin.com/in/nabin-pyakurel-04b92126b/",
    twitter: "https://x.com/nabinpyakurel4?s=21",
  },
  {
    img: "/images/prashun-baral.png",
    name: "Prashun Baral",
    position: "Community Leader",
    instagram: "https://www.instagram.com/prashun.sh",
    linkedin: "https://www.linkedin.com/in/prashun-baral-66aa67249/",
    twitter: "https://www.linkedin.com/in/prashunbaral/",
  },
  {
    img: "/images/monika-kafle.png",
    name: "Monika Kafle",
    position: "Community Leader",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/rojan-shrestha.png",
    name: "Rojan Shrestha",
    position: "Community Leader",
    instagram: "https://www.instagram.com/rojanshrestha987/",
    linkedin: "https://www.linkedin.com/in/rojan-shrestha2121/",
    twitter: "https://x.com/rojanstha621?s=11",
  },
];

export default function FeaturedLeaders() {
  return (
    <section id="leaders">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Leaders
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Meet Our Community Leaders
            </h2>
            <p className="text-lg text-indigo-200/65">
              The passionate individuals driving the mission of Ethical HCK forward.
            </p>
          </div>

          {/* Leaders grid */}
          <Spotlight className="group mx-auto grid max-w-md items-start gap-6 lg:max-w-none lg:grid-cols-4">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 hover:before:opacity-100"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Image */}
                  <div className="relative w-full h-[250px] overflow-hidden">
                    <Image
                      className="object-cover object-top"
                      src={leader.img}
                      fill
                      alt={leader.name}
                    />
                  </div>
                  {/* Content */}
                  <div className="relative z-30 p-5 text-center">
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-indigo-200/65 mb-3">
                      {leader.position}
                    </p>
                    {/* Social Links */}
                    <div className="relative z-40 flex justify-center gap-4">
                      <a
                        href={leader.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-50 text-gray-400 hover:text-indigo-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </a>
                      <a
                        href={leader.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-50 text-gray-400 hover:text-indigo-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                      </a>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-50 text-gray-400 hover:text-indigo-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Spotlight>

          {/* View all team members link */}
          <div className="text-center mt-12">
            <Link
              href="/team"
              className="group inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
            >
              View All Team Members
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
