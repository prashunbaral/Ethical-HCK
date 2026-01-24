"use client";

import { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Cards from "@/components/cards";
import { motion, AnimatePresence } from "framer-motion";
import PageIllustration from "@/components/page-illustration";
import Spotlight from "@/components/spotlight";

// Data for leaders, personnel, and members
const leaders = [
  {
    img: "/images/member-01.JPG",
    name: "Nabin Pyakurel",
    position: "Community Leader",
    instagram: "https://www.instagram.com/nabin.pyakurel/",
    linkedin: "https://www.linkedin.com/in/nabin-pyakurel-04b92126b/",
    twitter: "https://x.com/nabinpyakurel4?s=21",
  },
  {
    img: "/images/leader.png",
    name: "Prashun Baral",
    position: "Community Leader",
    instagram: "https://www.instagram.com/prashun.sh",
    linkedin: "https://www.linkedin.com/in/prashun-baral-66aa67249/",
    twitter: "https://www.linkedin.com/in/prashunbaral/",
  },
  {
    img: "/images/member-04.png",
    name: "Monika Kafle",
    position: "Community Leader",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-09.jpg",
    name: "Rojan Shrestha",
    position: "Community Leader",
    instagram: "https://www.instagram.com/rojanshrestha987/",
    linkedin: "https://www.linkedin.com/in/rojan-shrestha2121/",
    twitter: "https://x.com/rojanstha621?s=11",
  },
];

const personnel = [
  {
    img: "/images/personnel-01.png",
    name: "Dipesh Shrestha",
    position: "DevCorps Head",
    instagram: "https://instagram.com/personnel",
    linkedin: "https://www.linkedin.com/in/dipeshshrestha1221/",
    twitter: "https://twitter.com/personnel",
  },
  {
    img: "/images/leader-01.png",
    name: "Viraj Subedi",
    position: "Community Mentor",
    instagram: "https://www.instagram.com/viraj_subedi",
    linkedin: "https://www.linkedin.com/in/viraj-subedi-3852a9258/",
    twitter: "https://www.linkedin.com/in/viraj-subedi/",
  },
  {
    img: "/images/personnel-03.png",
    name: "Susan Chaudhary",
    position: "Community Founder",
    instagram: "https://instagram.com/personnel",
    linkedin: "https://linkedin.com/personnel",
    twitter: "https://twitter.com/personnel",
  },
];

const members = [
  {
    img: "/images/member-02.png",
    name: "Ishor Chalise",
    position: "Community Member",
    instagram: "https://www.instagram.com/chalise.ishwor/",
    linkedin: "https://www.linkedin.com/in/ishwor-chalise-036574293/",
    twitter: "https://x.com/IshworCha",
  },
  {
    img: "/images/member-03.png",
    name: "Atul Adhikari",
    position: "Community Member",
    instagram: "https://www.instagram.com/atuladhikari4/",
    linkedin: "https://www.linkedin.com/in/atul-adhikari-833945285/",
    twitter: "https://x.com/Atul_Adhikari01",
  },
  {
    img: "/images/member-05.png",
    name: "Kripa GC",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-06.jpg",
    name: "Nikisha Shrestha",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-11.jpg",
    name: "Saurya Aryal",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-15.JPG",
    name: "Pujan Upadhyay",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-16.png",
    name: "Ananya Dahal",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
];

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="text-white">Community Leaders</div>,
    children: (
      <AnimatePresence>
        <Spotlight className="group mx-auto grid max-w-md items-start gap-6 lg:max-w-none lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Cards
                name={leader.name}
                title={leader.position}
                img={leader.img}
                LinkedIn={leader.linkedin}
                Instagram={leader.instagram}
                twitter={leader.twitter}
              />
            </motion.div>
          ))}
        </Spotlight>
      </AnimatePresence>
    ),
  },
  {
    key: "2",
    label: <div className="text-white">Community Members</div>,
    children: (
      <AnimatePresence>
        <Spotlight className="group mx-auto grid max-w-md items-start gap-6 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Cards
                name={member.name}
                title={member.position}
                img={member.img}
                LinkedIn={member.linkedin}
                Instagram={member.instagram}
                twitter={member.twitter}
              />
            </motion.div>
          ))}
        </Spotlight>
      </AnimatePresence>
    ),
  },
  {
    key: "3",
    label: <div className="text-white">Personnel</div>,
    children: (
      <AnimatePresence>
        <Spotlight className="group mx-auto grid max-w-md items-start gap-6 lg:max-w-none lg:grid-cols-3">
          {personnel.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Cards
                name={person.name}
                title={person.position}
                img={person.img}
                LinkedIn={person.linkedin}
                Instagram={person.instagram}
                twitter={person.twitter}
              />
            </motion.div>
          ))}
        </Spotlight>
      </AnimatePresence>
    ),
  },
];

export default function TeamPage() {
  return (
    <>
      <PageIllustration />
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Team
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Meet Our Team
            </h1>
            <p className="text-lg text-indigo-200/65">
              Explore our community leaders, members, and personnel driving the
              mission of Ethical HCK. Together, we're building a stronger
              cybersecurity community.
            </p>
          </div>

          {/* Team tabs */}
          <Tabs
            defaultActiveKey="1"
            className="text-white"
            items={items}
            centered
          />
        </div>
      </section>
    </>
  );
}
