import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import PageIllustration from "@/components/page-illustration";

export default function ContactPage() {
  return (
    <>
      <PageIllustration />
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Contact Us
            </h1>
            <p className="text-lg text-indigo-200/65">
              Have questions or want to collaborate? We'd love to hear from you.
              Reach out to us through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Email Card */}
              <a
                href="mailto:ethicalhck@heraldcollege.edu.np"
                className="group rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/20 mb-4 group-hover:bg-indigo-500/30 transition">
                  <FaEnvelope className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">Email Us</h3>
                <p className="text-sm text-indigo-200/65 break-all">
                  ethicalhck@heraldcollege.edu.np
                </p>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+9779842980808"
                className="group rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/20 mb-4 group-hover:bg-indigo-500/30 transition">
                  <FaPhone className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">Call Us</h3>
                <p className="text-sm text-indigo-200/65">
                  +977 9842980808
                </p>
              </a>

              {/* Location Card */}
              <a
                href="https://maps.google.com/?q=Herald+College+Kathmandu+Naxal"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 sm:col-span-2 lg:col-span-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/20 mb-4 group-hover:bg-indigo-500/30 transition">
                  <FaMapMarkerAlt className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">Visit Us</h3>
                <p className="text-sm text-indigo-200/65">
                  Herald College Kathmandu, Naxal, Nepal
                </p>
              </a>
            </div>

            {/* Social Media Section */}
            <div className="mt-12 rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm border border-gray-700/50 text-center">
              <h2 className="text-2xl font-semibold text-gray-200 mb-2">
                Connect With Us
              </h2>
              <p className="text-indigo-200/65 mb-6">
                Follow us on social media to stay updated with our latest events and activities.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/ethicalhck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700/50 text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/devcorps.ethicalhck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61565057190640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700/50 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://discord.gg/ethicalhck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700/50 text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  <FaDiscord className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
