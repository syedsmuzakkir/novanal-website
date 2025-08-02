"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Lightbulb } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">About Us</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Delivering innovative solutions for the pharmaceutical industry
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group max-w-lg mx-auto lg:max-w-none">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="transform transition-transform duration-500"
              >
                <img
                  src="/images/novanal-team-1.jpg"
                  alt="Novanal Science & Technologies Team Collaboration"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold">15+</div>
                      <div className="text-xs sm:text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold">100+</div>
                      <div className="text-xs sm:text-sm">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 text-center lg:text-left">
              Your Trusted Partner in Pharmaceutical Analytics
            </h3>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Novanal Science & Technologies SAS programming division is specialized in delivering value-focused
                services that includes clinical trial design, primary and secondary data points identification, clinical
                and safety endpoints determination, SAP preparation, interim data analysis, to final data analysis and
                clinical report preparation.
              </p>

              <p>
                Our team members are highly knowledgeable in clinical statistic principles such adaptive trial design,
                time to event analysis, Bayesian modelling and analysis, and non-inferiority approaches and have
                extensive experience across different indications.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6 sm:my-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-lg"
              >
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">Expert Team</div>
                  <div className="text-xs sm:text-sm text-slate-600">Experienced professionals</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-lg"
              >
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">Precision</div>
                  <div className="text-xs sm:text-sm text-slate-600">Accurate analysis</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-lg"
              >
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">Quality</div>
                  <div className="text-xs sm:text-sm text-slate-600">Industry standards</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-lg"
              >
                <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">Innovation</div>
                  <div className="text-xs sm:text-sm text-slate-600">Cutting-edge solutions</div>
                </div>
              </motion.div>
            </div>

            <div className="text-center lg:text-left">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(4, 107, 210, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" })}
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
