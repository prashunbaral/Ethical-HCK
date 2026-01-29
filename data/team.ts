import { TeamMember } from "@/types";

export const leaders: TeamMember[] = [
  {
    id: 1,
    name: "Nabin Pyakurel",
    role: "Community Leader",
    image: "/images/nabin-pyakurel.jpg",
    bio: "Leading the Ethical HCK community with passion for cybersecurity education.",
    linkedin: "https://www.linkedin.com/in/nabin-pyakurel-04b92126b/",
    github: "https://www.instagram.com/nabin.pyakurel/",
    twitter: "https://x.com/nabinpyakurel4?s=21",
  },
  {
    id: 2,
    name: "Prashun Baral",
    role: "Community Leader",
    image: "/images/prashun-baral.png",
    bio: "Dedicated to fostering ethical hacking practices and community growth.",
    linkedin: "https://www.linkedin.com/in/prashun-baral-66aa67249/",
    github: "https://www.instagram.com/prashun.sh",
    twitter: "https://www.linkedin.com/in/prashunbaral/",
  },
  {
    id: 3,
    name: "Monika Kafle",
    role: "Community Leader",
    image: "/images/monika-kafle.png",
    bio: "Empowering the next generation of cybersecurity professionals.",
    linkedin: "https://linkedin.com/member",
    github: "https://instagram.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    id: 4,
    name: "Rojan Shrestha",
    role: "Community Leader",
    image: "/images/rojan-shrestha.png",
    bio: "Passionate about building a secure digital future through education.",
    linkedin: "https://www.linkedin.com/in/rojan-shrestha2121/",
    github: "https://www.instagram.com/rojanshrestha987/",
    twitter: "https://x.com/rojanstha621?s=11",
  },
];

export const personnel: TeamMember[] = [
  {
    id: 5,
    name: "Dipesh Shrestha",
    role: "DevCorps Head",
    image: "/images/dipesh-shrestha.png",
    bio: "Leading the development initiatives and technical direction of Ethical HCK.",
    linkedin: "https://www.linkedin.com/in/dipeshshrestha1221/",
    github: "https://instagram.com/personnel",
    twitter: "https://twitter.com/personnel",
  },
  {
    id: 6,
    name: "Viraj Subedi",
    role: "Community Mentor",
    image: "/images/viraj-subedi.png",
    bio: "Mentoring and guiding community members in their cybersecurity journey.",
    linkedin: "https://www.linkedin.com/in/viraj-subedi-3852a9258/",
    github: "https://www.instagram.com/viraj_subedi",
    twitter: "https://www.linkedin.com/in/viraj-subedi/",
  },
  {
    id: 7,
    name: "Susan Chaudhary",
    role: "Community Founder",
    image: "/images/susan-chaudhary.png",
    bio: "Founder of Ethical HCK, pioneering cybersecurity education at Herald College.",
    linkedin: "https://linkedin.com/personnel",
    github: "https://instagram.com/personnel",
    twitter: "https://twitter.com/personnel",
  },
];

export const members: TeamMember[] = [
  {
    id: 8,
    name: "Ishor Chalise",
    role: "Community Member",
    image: "/images/ishor-chalise.png",
    bio: "Active community member contributing to various cybersecurity initiatives.",
    linkedin: "https://www.linkedin.com/in/ishwor-chalise-036574293/",
    github: "https://www.instagram.com/chalise.ishwor/",
    twitter: "https://x.com/IshworCha",
  },
  {
    id: 9,
    name: "Atul Adhikari",
    role: "Community Member",
    image: "/images/atul-adhikari.png",
    bio: "Enthusiastic learner exploring the world of ethical hacking and security.",
    linkedin: "https://www.linkedin.com/in/atul-adhikari-833945285/",
    github: "https://www.instagram.com/atuladhikari4/",
    twitter: "https://x.com/Atul_Adhikari01",
  },
  {
    id: 10,
    name: "Kripa GC",
    role: "Community Member",
    image: "/images/kripa-gc.png",
    bio: "Dedicated to learning and practicing cybersecurity fundamentals.",
    linkedin: "https://linkedin.com/member",
    github: "https://instagram.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    id: 11,
    name: "Nikisha Shrestha",
    role: "Community Member",
    image: "/images/nikisha-shrestha.jpg",
    bio: "Contributing to community events and cybersecurity workshops.",
    linkedin: "https://linkedin.com/member",
    github: "https://instagram.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    id: 12,
    name: "Saurya Aryal",
    role: "Community Member",
    image: "/images/saurya-aryal.jpg",
    bio: "Passionate about network security and penetration testing.",
    linkedin: "https://linkedin.com/member",
    github: "https://instagram.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    id: 13,
    name: "Pujan Upadhyay",
    role: "Community Member",
    image: "/images/pujan-upadhyay.jpg",
    bio: "Exploring various aspects of cybersecurity and ethical hacking.",
    linkedin: "https://linkedin.com/member",
    github: "https://instagram.com/member",
    twitter: "https://twitter.com/member",
  },
  {
    id: 14,
    name: "Ananya Dahal",
    role: "Community Member",
    image: "/images/ananya-dahal.png",
    bio: "Active participant in community learning sessions and events.",
    linkedin: "https://linkedin.com/member",
    github: "https://instagram.com/member",
    twitter: "https://twitter.com/member",
  },
];

// Helper function to get all team members
export const getAllTeamMembers = (): TeamMember[] => {
  return [...leaders, ...personnel, ...members];
};

// Helper function to get team members by role
export const getTeamMembersByRole = (role: string): TeamMember[] => {
  return getAllTeamMembers().filter((member) => member.role === role);
};

// Helper function to get a specific team member by ID
export const getTeamMemberById = (id: number): TeamMember | undefined => {
  return getAllTeamMembers().find((member) => member.id === id);
};
