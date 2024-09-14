"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Cards from "./cards";
import { motion, AnimatePresence } from "framer-motion";

// Data for leaders, personnel, and members
const leaders = [
  {
    img: "/images/leader-01.png",
    name: "Viraj Subedi",
    position: "Community Leader",
    instagram: "https://instagram.com/leader",
    linkedin: "https://linkedin.com/leader",
    twitter: "https://twitter.com/leader",
  },
  {
    img: "/images/leader-02.png",
    name: "Srijan Adhikari",
    position: "Community Leader",
    instagram: "https://instagram.com/leader",
    linkedin: "https://linkedin.com/leader",
    twitter: "https://twitter.com/leader",
  },
  {
    img: "/images/leader-03.png",
    name: "Prashun Baral",
    position: "Community Leader",
    instagram: "https://instagram.com/leader",
    linkedin: "https://linkedin.com/leader",
    twitter: "https://twitter.com/leader",
  },
];

const personnel = [
  {
    img: "/images/personnel-01.png",
    name: "Dipesh Shrestha",
    position: "DevCorps Head",
    instagram: "https://instagram.com/personnel",
    linkedin: "https://linkedin.com/personnel",
    twitter: "https://twitter.com/personnel",
  },
  {
    img: "/images/personnel-02.png",
    name: "Sangay Lama",
    position: "Community Mentor",
    instagram: "https://instagram.com/personnel",
    linkedin: "https://linkedin.com/personnel",
    twitter: "https://twitter.com/personnel",
  },
  {
    img: "/images/personnel-03.png",
    name: "Susan Chaudhary",
    position: "Community Founder",
    instagram: "https://instagram.com/personnel",
    linkedin: "https://linkedin.com/personnel",
    twitter: "https://twitter.com/personnel",
  }
];

const members = [
  {
    img: "/images/member-01.jpg",
    name: "Nabin Pyakurel",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-02.png",
    name: "Ishor Chalise",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-03.png",
    name: "Atul Adhikari",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-04.jpg",
    name: "Monika Kafle",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
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
    img: "/images/member-07.png",
    name: "Prachi Rajbanshi",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-08.jpg",
    name: "Jeevan Tamang",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-09.jpg",
    name: "Rojan Shrestha",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-10.jpg",
    name: "Aryan Neupane",
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
    img: "/images/member-12.jpg",
    name: "Yuyutsu Lamsal",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-13.jpg",
    name: "Arpan Pandey",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-14.jpg",
    name: "Anjal Pokharel",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-15.jpg",
    name: "Pujan Upadhyay",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-16.jpg",
    name: "Ananya Dahal",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-17.jpg",
    name: "Samir Gurung",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  // More members...
];

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="text-white">Community Leaders</div>,
    children: (
      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {leaders.map((leader, index) => (
            <Cards
              key={index}
              name={leader.name}
              title={leader.position}
              img={leader.img}
              LinkedIn={leader.linkedin}
              Instagram={leader.instagram}
              twitter={leader.twitter}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    ),
  },
  {
    key: "2",
    label: <div className="text-white">Community Members</div>,
    children: (
      <div className="relative">
        <SliderControl members={members} />
      </div>
    ),
  },
  {
    key: "3",
    label: <div className="text-white">Personnel</div>,
    children: (
      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {personnel.map((person, index) => (
            <Cards
              key={index}
              name={person.name}
              title={person.position}
              img={person.img}
              LinkedIn={person.linkedin}
              Instagram={person.instagram}
              twitter={person.twitter}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    ),
  },
];

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Team Members
            </span>
          </div>
          <h2 className="text-3xl font-semibold text-gray-200">
            Meet Our Team
          </h2>
          <p className="text-lg text-indigo-200/65">
            Explore our community leaders, members, and personnel driving the
            mission of Ethical HCK.
          </p>
        </div>

        <Tabs
          defaultActiveKey="1"
          className="text-white"
          items={items}
          onChange={(key) => console.log(key)}
        />
      </div>
    </section>
  );
}

// Slider for Community Members
function SliderControl({ members }: { members: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleCards = 3; 

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === members.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? members.length - visibleCards : prev - 1
    );
  };
  
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${(currentSlide * 100) / visibleCards}%)`, // Adjust sliding for visible cards
          width: `${(members.length / visibleCards) * 100}%`,
        }}
      >
        {members.map((member: any, index: any) => (
          <div key={index} className="w-1/7 flex-shrink-0 px-4">
            <Cards
              name={member.name}
              title={member.position}
              img={member.img}
              LinkedIn={member.linkedin}
              Instagram={member.instagram}
              twitter={member.twitter}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-indigo-500"
      >
        <FaArrowLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-indigo-500"
      >
        <FaArrowRight size={30} />
      </button>
    </div>
  );
}
