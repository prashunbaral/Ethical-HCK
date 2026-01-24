import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      
      {/* Footer illustration */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-40"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={FooterIllustration}
          width={1076}
          height={378}
          alt="Footer illustration"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          {/* Main footer content */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Brand Block */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Empowering the next generation of cybersecurity professionals through hands-on learning and community collaboration.
              </p>
              <p className="text-xs text-indigo-400/80 font-medium">
                Innovate, Secure, and Protect
              </p>
            </div>

            {/* Quick Links Block */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    className="text-gray-400 hover:text-indigo-400 transition duration-200 flex items-center gap-2"
                    href="/"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-indigo-400 transition duration-200 flex items-center gap-2"
                    href="/events"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-indigo-400 transition duration-200 flex items-center gap-2"
                    href="/team"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-indigo-400 transition duration-200 flex items-center gap-2"
                    href="/gallery"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-indigo-400 transition duration-200 flex items-center gap-2"
                    href="/contact"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Block */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    className="text-gray-400 hover:text-indigo-400 transition duration-200 flex items-center gap-3"
                    href="mailto:ethicalhck@heraldcollege.edu.np"
                  >
                    <FaEnvelope className="text-indigo-500 flex-shrink-0" />
                    <span className="break-all">ethicalhck@heraldcollege.edu.np</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-indigo-400 transition duration-200 flex items-center gap-3"
                    href="tel:+9779842980808"
                  >
                    <FaPhone className="text-indigo-500 flex-shrink-0" />
                    +977 9842980808
                  </a>
                </li>
                <li>
                  <div className="text-gray-400 flex items-start gap-3">
                    <FaMapMarkerAlt className="text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span>Herald College Kathmandu,<br />Naxal, Kathmandu, Nepal</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social & Community Block */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Connect With Us
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Follow us on social media and join our community.
              </p>
              <div className="flex items-center gap-3">
                <a
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  href="https://www.linkedin.com/in/ethicalhck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300"
                  href="https://www.instagram.com/devcorps.ethicalhck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  href="https://www.facebook.com/profile.php?id=61565057190640&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  href="https://discord.gg/ethicalhck"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <FaDiscord className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Ethical HCK. All rights reserved.
              </p>
              <p className="text-xs text-gray-600">
                Made with 💜 by DevCorps
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
