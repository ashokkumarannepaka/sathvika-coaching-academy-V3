import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Users,
  Trophy,
  TrendingUp,
  Award,
} from "lucide-react";

export function QuickRegistration() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-orange-400 text-white px-5 py-2 rounded-full mb-6">
            ⭐ 100% FREE • NO OBLIGATION
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get Free Counseling
          </h2>

          <p className="text-2xl text-orange-300 font-medium mb-4">
            Start Your Success Journey Today!
          </p>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Speak with our expert counselors and get personalized guidance
            for the right course and career path.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">

          {/* Counseling */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-200"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <ArrowRight className="w-10 h-10 text-orange-500" />
            </div>

            <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Get Free Counseling
            </h3>

            <p className="text-gray-600 text-center mb-8">
              Our experts will call you back and guide you personally.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfXExv7VkWuZa0JVHWI-wJOl02irzEBy1zSnZfirDFkneqiiQ/viewform",
                  "_blank"
                )
              }
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all"
            >
              Request Callback →
            </button>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-green-200"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10 text-green-500" />
            </div>

            <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Chat on WhatsApp
            </h3>

            <p className="text-gray-600 text-center mb-8">
              Chat instantly on WhatsApp and get quick answers.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919035955777?text=Hi%20I%20need%20counseling%20for%20admission",
                  "_blank"
                )
              }
              className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-all"
            >
              Chat Now →
            </button>
          </motion.div>

          {/* Call */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-200"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <Phone className="w-10 h-10 text-blue-500" />
            </div>

            <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Call Us Now
            </h3>

            <p className="text-gray-600 text-center mb-8">
              Speak directly with our admission counselors.
            </p>

            <a
              href="tel:+919035955777"
              className="block w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all"
            >
              📞 +91 90359 55777
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-10 h-10 mx-auto text-blue-600 mb-3" />
              <div className="text-4xl font-bold text-blue-600">5000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>

            <div>
              <Trophy className="w-10 h-10 mx-auto text-orange-500 mb-3" />
              <div className="text-4xl font-bold text-orange-500">500+</div>
              <div className="text-gray-600">Top Rankers</div>
            </div>

            <div>
              <TrendingUp className="w-10 h-10 mx-auto text-green-500 mb-3" />
              <div className="text-4xl font-bold text-green-500">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>

            <div>
              <Award className="w-10 h-10 mx-auto text-purple-500 mb-3" />
              <div className="text-4xl font-bold text-purple-500">10+</div>
              <div className="text-gray-600">Years Excellence</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
