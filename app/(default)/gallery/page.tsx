"use client";

import { useState } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

// Event images data with proper categorization
const eventImages = [
  {
    id: 1,
    src: "/images/workflow-01.png",
    alt: "Hacktivities Event",
    category: "seminar",
    title: "Hacktivities",
  },
  {
    id: 2,
    src: "/images/workflow-02.png",
    alt: "WiFi Hacking Workshop",
    category: "workshop",
    title: "WiFi Hacking Workshop",
  },
  {
    id: 3,
    src: "/images/workflow-03.png",
    alt: "Cyber Talks",
    category: "seminar",
    title: "Cyber Talks",
  },
  {
    id: 4,
    src: "/images/workflow-04.png",
    alt: "Hack The Box Meetup",
    category: "seminar",
    title: "Hack The Box Meetup",
  },
  {
    id: 5,
    src: "/images/workflow-05.png",
    alt: "Bug Bounty",
    category: "workshop",
    title: "Bug Bounty",
  },
  {
    id: 6,
    src: "/images/workflow-06.png",
    alt: "Cyber Hunt CTF",
    category: "ctf",
    title: "Cyber Hunt",
  },
  {
    id: 7,
    src: "/images/workflow-07.png",
    alt: "Cyber Pradarshan Exhibition",
    category: "exhibition",
    title: "Cyber Pradarshan",
  },
  {
    id: 8,
    src: "/images/workflow-08.png",
    alt: "WiFi Hijack Workshop",
    category: "workshop",
    title: "WiFi Hijack",
  },
  {
    id: 9,
    src: "/images/workflow-09.png",
    alt: "Dark Web Seminar",
    category: "seminar",
    title: "Dark Web",
  },
  {
    id: 10,
    src: "/images/workflow-10.png",
    alt: "Digital Detectives Seminar",
    category: "seminar",
    title: "Digital Detectives",
  },
  {
    id: 11,
    src: "/images/workflow-11.png",
    alt: "Bad USB Seminar",
    category: "seminar",
    title: "Bad USB",
  },
];

// Team photos
const teamPhotos = [
  {
    id: 101,
    src: "/images/leader.png",
    alt: "Nabin Pyakurel",
    role: "leader",
    name: "Nabin Pyakurel",
  },
  {
    id: 102,
    src: "/images/leader-01.png",
    alt: "Prashun Baral",
    role: "leader",
    name: "Prashun Baral",
  },
  {
    id: 103,
    src: "/images/leader-02.png",
    alt: "Monika Kafle",
    role: "leader",
    name: "Monika Kafle",
  },
  {
    id: 104,
    src: "/images/leader-03.png",
    alt: "Rojan Shrestha",
    role: "leader",
    name: "Rojan Shrestha",
  },
  {
    id: 105,
    src: "/images/member-01.JPG",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 106,
    src: "/images/member-02.png",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 107,
    src: "/images/member-03.png",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 108,
    src: "/images/member-04.png",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 109,
    src: "/images/member-05.png",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 110,
    src: "/images/member-06.jpg",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 111,
    src: "/images/member-09.jpg",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 112,
    src: "/images/member-11.jpg",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 113,
    src: "/images/member-15.JPG",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 114,
    src: "/images/member-16.png",
    alt: "Team Member",
    role: "member",
    name: "Team Member",
  },
  {
    id: 115,
    src: "/images/personnel-01.png",
    alt: "Personnel",
    role: "personnel",
    name: "DevCorps Personnel",
  },
  {
    id: 116,
    src: "/images/personnel-02.png",
    alt: "Personnel",
    role: "personnel",
    name: "DevCorps Personnel",
  },
  {
    id: 117,
    src: "/images/personnel-03.png",
    alt: "Personnel",
    role: "personnel",
    name: "DevCorps Personnel",
  },
];

const eventCategories = [
  { id: "all", label: "All Events" },
  { id: "seminar", label: "Seminars" },
  { id: "workshop", label: "Workshops" },
  { id: "ctf", label: "CTF" },
  { id: "exhibition", label: "Exhibition" },
];

const teamCategories = [
  { id: "all", label: "All" },
  { id: "leader", label: "Leaders" },
  { id: "member", label: "Members" },
  { id: "personnel", label: "Personnel" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"events" | "team">("events");
  const [activeEventCategory, setActiveEventCategory] = useState("all");
  const [activeTeamCategory, setActiveTeamCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    category: string;
  } | null>(null);

  const filteredEvents =
    activeEventCategory === "all"
      ? eventImages
      : eventImages.filter((img) => img.category === activeEventCategory);

  const filteredTeam =
    activeTeamCategory === "all"
      ? teamPhotos
      : teamPhotos.filter((img) => img.role === activeTeamCategory);

  return (
    <>
      <PageIllustration />
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Photo Gallery
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Gallery
            </h1>
            <p className="text-lg text-indigo-200/65">
              Explore moments captured from our events, workshops, and community
              gatherings. Each photo tells a story of learning, collaboration,
              and growth.
            </p>
          </div>

          {/* Main Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "events"
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
              }`}
            >
              📸 Event Photos
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "team"
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
              }`}
            >
              👥 Team Photos
            </button>
          </div>

          {/* Events Section */}
          {activeTab === "events" && (
            <>
              {/* Event category filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {eventCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveEventCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeEventCategory === category.id
                        ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
                        : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 border border-gray-700/50"
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 text-xs opacity-70">
                      ({category.id === "all" 
                        ? eventImages.length 
                        : eventImages.filter(e => e.category === category.id).length})
                    </span>
                  </button>
                ))}
              </div>

              {/* Events gallery grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((image) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50 cursor-pointer hover:border-indigo-500/50 transition-all duration-300"
                    onClick={() => setSelectedImage({
                      src: image.src,
                      alt: image.alt,
                      title: image.title,
                      category: image.category,
                    })}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-semibold text-white">
                          {image.title}
                        </h3>
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-indigo-500/30 text-indigo-300 capitalize">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Team Section */}
          {activeTab === "team" && (
            <>
              {/* Team category filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {teamCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTeamCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTeamCategory === category.id
                        ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
                        : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 border border-gray-700/50"
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 text-xs opacity-70">
                      ({category.id === "all" 
                        ? teamPhotos.length 
                        : teamPhotos.filter(t => t.role === category.id).length})
                    </span>
                  </button>
                ))}
              </div>

              {/* Team gallery grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTeam.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50 cursor-pointer hover:border-indigo-500/50 transition-all duration-300"
                    onClick={() => setSelectedImage({
                      src: photo.src,
                      alt: photo.alt,
                      title: photo.name,
                      category: photo.role,
                    })}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-indigo-500/30 text-indigo-300 capitalize">
                          {photo.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Empty state */}
          {((activeTab === "events" && filteredEvents.length === 0) || 
            (activeTab === "team" && filteredTeam.length === 0)) && (
            <div className="text-center py-12">
              <p className="text-gray-400">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-indigo-400 transition z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-white">
                {selectedImage.title}
              </h3>
              <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-indigo-500/30 text-indigo-300 capitalize">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
