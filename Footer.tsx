import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={`${import.meta.env.BASE_URL}sathvika-logo.png`}
                alt="Sathvika Coaching Academy"
                className="h-16 w-auto object-contain bg-white rounded-xl p-1"
              />

              <div>
                <h2 className="text-2xl font-bold text-white leading-none">
                  SATHVIKA
                </h2>

                <p className="text-orange-500 font-semibold text-sm tracking-wide mt-1">
                  COACHING ACADEMY
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-4">
              Transforming dreams into reality through quality education and
              expert guidance.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin, Twitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-500 transition-colors"
                >
                  Our Courses
                </a>
              </li>

              <li>
                <a
                  href="#results"
                  className="hover:text-orange-500 transition-colors"
                >
                  Results
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="hover:text-orange-500 transition-colors"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Courses</h3>

            <ul className="space-y-2">
              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-500 transition-colors"
                >
                  IIT-JEE
                </a>
              </li>

              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-500 transition-colors"
                >
                  NEET
                </a>
              </li>

              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-500 transition-colors"
                >
                  Foundation
                </a>
              </li>

              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-500 transition-colors"
                >
                  Olympiads
                </a>
              </li>

              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-500 transition-colors"
                >
                  Board Exams
                </a>
              </li>

              <li>
                <a
                  href="#courses"
                  className="hover:text-orange-500 transition-colors"
                >
                  Online Classes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />

                <div>
                  <a
                    href="tel:+919035955777"
                    className="hover:text-orange-500"
                  >
                    +91 90359 55777
                  </a>

                  <p className="text-sm text-gray-400">
                    Mon - Sat: 9 AM - 7 PM
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />

                <div>
                  <a
                    href="mailto:info@sathvikacoachingacademy.com"
                    className="hover:text-orange-500"
                  >
                    info@sathvikacoachingacademy.com
                  </a>

                  <p className="text-sm text-gray-400">
                    We'll respond within 24 hours
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm">
              © 2026 Sathvika Coaching Academy. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                Refund Policy
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
