import { motion } from "motion/react";
import { Phone, MessageCircle, FileText } from "lucide-react";

export function QuickRegistration() {
const formUrl =
"https://docs.google.com/forms/d/e/1FAIpQLSfXExv7VkWuZa0JVHWI-wJOl02irzEBy1zSnZfirDFkneqiiQ/viewform?usp=publish-editor";

return ( <section id="registration" className="py-16 bg-gradient-to-br from-blue-600 to-blue-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
> <div className="text-center mb-8"> <h2 className="text-3xl font-bold text-white mb-3">
Quick Registration </h2> <p className="text-blue-100">
Register now and get free counseling from our expert team </p> </div>

```
      <div className="text-center">
        <motion.a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          <FileText className="w-5 h-5" />
          Open Registration Form
        </motion.a>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <motion.a
          href="https://wa.me/919035955777?text=Hi%20I%20want%20to%20know%20more%20about%20Sathvika%20Coaching%20Academy"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Now
        </motion.a>

        <motion.a
          href="tel:+919035955777"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>
```

);
}
