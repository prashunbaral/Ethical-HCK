export const metadata = {
  title: "Ethical HCK",
  description: "Innovate, Secure, and Protect",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import FeaturedEvents from "@/components/featured-events";
import FeaturedLeaders from "@/components/featured-leaders";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <FeaturedEvents />
      <FeaturedLeaders />
    </>
  );
}
