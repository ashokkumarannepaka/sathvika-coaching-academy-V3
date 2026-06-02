import { motion } from "motion/react";

export function DirectorMessage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Director Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}vijay.png`}
                alt="B. Vijay Kumar"
                className="w-80 h-auto rounded-3xl shadow-2xl border-4 border-orange-500"
              />
            </div>
          </motion.div>

          {/* Director Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold mb-4">
              Director's Message
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Sathvika Coaching Academy
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Sathvika Coaching Academy, we believe every student has the
              potential to achieve excellence. Our mission is to provide
              quality education, strong conceptual understanding, and
              personalized guidance that helps students excel in IIT-JEE,
              NEET, Olympiads, and Board Examinations.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are committed to nurturing confidence, discipline, and
              academic excellence through experienced faculty, innovative
              teaching methods, and continuous mentoring.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-blue-900">
                B. Vijay Kumar
              </h3>

              <p className="text-orange-500 font-semibold text-lg">
                Director
              </p>

              <p className="text-gray-500">
                Sathvika Coaching Academy
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
