import Image from "next/image";
import HomeImage from "@/public/images/home.png";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 md:pt-16 md:py-16">
          {/* Two column layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Left side - Content */}
            <div className="lg:w-1/2 pb-10 md:pb-10">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-2 font-nacelle text-4xl font-semibold text-transparent md:text-5xl pt-12"
                data-aos="fade-up"
              >
                Ethical HCK
              </h1>
              <p
                className="text-lg md:text-xl text-indigo-400/80 font-medium tracking-wide"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Innovate, Secure, and Protect
              </p>
              <div className="max-w-3xl">
                <p
                  className="mb-6 text-lg text-indigo-200/65 pt-8 text-justify"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  A student-led cybersecurity initiative under Herald DevCorps at Herald College Kathmandu, founded in 2021. Proud winners of <span className="text-indigo-400 font-semibold">DevFest 2025</span> with international collaborations including <span className="text-indigo-400 font-semibold">Hack The Box</span>, bringing world-class ethical hacking resources and opportunities to our community.
                </p>
                <p
                  className="mb-8 text-lg text-indigo-200/55 text-justify"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  We educate and empower the next generation of cybersecurity professionals through hands-on workshops, CTF competitions, interactive seminars, and practical training sessions. From penetration testing to digital forensics, we cover the full spectrum of ethical hacking. Join us in building a more secure digital future—one hack at a time.
                </p>
                <div className="max-w-xs sm:flex sm:max-w-none sm:justify-start">
                  <div data-aos="fade-up" data-aos-delay={400}>
                    <a
                      className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      href="https://www.instagram.com/devcorps.ethicalhck/"
                      target="_blank"
                    >
                      <span className="relative inline-flex items-center">
                        Contact Us
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right side - Image */}
            <div
              className="lg:w-[55%] flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-delay={300}
            >
              <div className="relative w-full max-w-2xl lg:max-w-3xl h-[400px] lg:h-[500px] overflow-hidden">
                <Image
                  src={HomeImage}
                  alt="Ethical HCK Community"
                  className="rounded-2xl shadow-2xl object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
