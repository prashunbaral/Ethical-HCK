"use client";

import { useState } from "react";
import Cards from "@/components/cards";
import { motion, AnimatePresence } from "framer-motion";
import PageIllustration from "@/components/page-illustration";
import Spotlight from "@/components/spotlight";
import { leaders, personnel, members } from "@/data/team";

type TabKey = "leaders" | "members" | "personnel";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("leaders");

  const tabs = [
    { key: "leaders" as TabKey, label: "Community Leaders" },
    { key: "members" as TabKey, label: "Community Members" },
    { key: "personnel" as TabKey, label: "Personnel" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "leaders":
        return (
          <AnimatePresence mode="wait">
            <Spotlight className="group mx-auto grid max-w-md items-start gap-6 lg:max-w-none lg:grid-cols-4">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Cards
                    name={leader.name}
                    title={leader.role}
                    img={leader.image}
                    LinkedIn={leader.linkedin}
                    Instagram={leader.github}
                    twitter={leader.twitter}
                  />
                </motion.div>
              ))}
            </Spotlight>
          </AnimatePresence>
        );

      case "members":
        return (
          <AnimatePresence mode="wait">
            <Spotlight className="group mx-auto grid max-w-md items-start gap-6 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
              {members.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Cards
                    name={member.name}
                    title={member.role}
                    img={member.image}
                    LinkedIn={member.linkedin}
                    Instagram={member.github}
                    twitter={member.twitter}
                  />
                </motion.div>
              ))}
            </Spotlight>
          </AnimatePresence>
        );

      case "personnel":
        return (
          <AnimatePresence mode="wait">
            <Spotlight className="group mx-auto grid max-w-md items-start gap-6 lg:max-w-none lg:grid-cols-3">
              {personnel.map((person, index) => (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Cards
                    name={person.name}
                    title={person.role}
                    img={person.image}
                    LinkedIn={person.linkedin}
                    Instagram={person.github}
                    twitter={person.twitter}
                  />
                </motion.div>
              ))}
            </Spotlight>
          </AnimatePresence>
        );
    }
  };

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

          {/* Custom Tabs */}
          <div className="mb-8">
            <div className="flex justify-center border-b border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 font-medium transition-all ${
                    activeTab === tab.key
                      ? "border-b-2 border-indigo-500 text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="mt-8">{renderTabContent()}</div>
        </div>
      </section>
    </>
  );
}
