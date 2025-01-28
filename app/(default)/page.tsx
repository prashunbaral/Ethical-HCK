export const metadata = {
  title: "Ethical HCK",
  description: "Innovate, Secure, and Protect",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Testimonials />
      
    </>
  );
}
