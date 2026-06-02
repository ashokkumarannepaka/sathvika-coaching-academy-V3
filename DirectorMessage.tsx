import { motion } from "motion/react";

export function DirectorMessage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Photo Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}vijay.png`}
                alt="B. Vijay Kumar"
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Message Section */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold mb-4 w-fit">
                Managing Director's Message
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Sathvika Coaching Academy
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At Sathvika Coaching Academy, we believe every student has
                the potential to achieve extraordinary success when guided
                with dedication, discipline, and the right mentorship.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our mission is to provide high-quality education and
                personalized coaching that empowers students to excel in
                IIT-JEE, NEET, Olympiads, Foundation Programs, and Board
                Examinations.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We are committed to building confidence, academic excellence,
                and a strong foundation for every student's future through
                innovative teaching methods and continuous support.
              </p>

              <div className="border-t pt-6">
                <h3 className="text-2xl font-bold text-blue-900">
                  B. Vijay Kumar
                </h3>

                <p className="text-orange-500 font-semibold text-lg">
                  Managing Director
                </p>

                <p className="text-gray-500">
                  Sathvika Coaching Academy
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
