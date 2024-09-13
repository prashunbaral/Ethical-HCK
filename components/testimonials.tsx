"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Cards from "./cards";

const onChange = (key: string) => {
  console.log(key);
};
const leaders = [
  {
    img: "/images/leader-01.jpg",
    name: "Leader 1",
    position: "Community Leader",
    instagram: "https://instagram.com/leader",
    linkedin: "https://linkedin.com/leader",
    twitter: "https://twitter.com/leader",
  },
  {
    img: "/images/leader-02.jpg",
    name: "Leader 2",
    position: "Community Leader",
    instagram: "https://instagram.com/leader",
    linkedin: "https://linkedin.com/leader",
    twitter: "https://twitter.com/leader",
  },
  {
    img: "/images/leader-03.jpg",
    name: "Leader 3",
    position: "Community Leader",
    instagram: "https://instagram.com/leader",
    linkedin: "https://linkedin.com/leader",
    twitter: "https://twitter.com/leader",
  },
];

const personnel = [
  {
    img: "/images/personnel-01.jpg",
    name: "Personnel 1",
    position: "Technical Lead",
    instagram: "https://instagram.com/personnel",
    linkedin: "https://linkedin.com/personnel",
    twitter: "https://twitter.com/personnel",
  },
  {
    img: "/images/personnel-02.jpg",
    name: "Personnel 2",
    position: "Support Staff",
    instagram: "https://instagram.com/personnel",
    linkedin: "https://linkedin.com/personnel",
    twitter: "https://twitter.com/personnel",
  },
];

const members = [
  {
    img: "/images/member-01.jpg",
    name: "Membe_1r",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-01.jpg",
    name: "Member_2",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-01.jpg",
    name: "Member_3",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-01.jpg",
    name: "Member_4",
    position: "Community Member",
    instagram: "https://instagram.com/member",
    linkedin: "https://linkedin.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    img: "/images/member-01.jpg",
    name: "Member_4",
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
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <Cards
              name={leader.name}
              title={leader.position}
              img={leader.img}
              LinkedIn={leader.linkedin}
              Instagram={leader.instagram}
              twitter={leader.twitter}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: <div className="text-white">Community members</div>,
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
      <div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personnel.map((person, index) => (
              <Cards
                name={person.name}
                title={person.position}
                img={person.img}
                LinkedIn={person.linkedin}
                Instagram={person.instagram}
                twitter={person.twitter}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function Team() {
  const [activeTab, setActiveTab] = useState("leaders");

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
          onChange={onChange}
        />
      </div>
    </section>
  );
}

function TeamCard({
  img,
  name,
  position,
}: {
  img: string;
  name: string;
  position: string;
}) {
  return (
    <div className="bg-gray-800 rounded-lg p-5 text-center">
      <Image
        src={img}
        alt={name}
        width={100}
        height={100}
        className="mx-auto rounded-full"
      />
      <h3 className="mt-4 text-xl font-bold text-gray-200">{name}</h3>
      <p className="text-indigo-200/65">{position}</p>
    </div>
  );
}

function SliderControl({ members }: { members: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex justify-around transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${(currentSlide * 100) / 3}%)`,
          width: `${(members.length / 3) * 100}%`,
        }}
      >
        {members.map((member: any, index: any) => (
          <div key={index} className="w-1/3 flex-shrink-0">
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
}
