"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react"

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer id="footer" className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative">
              About Novanal
              <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-blue-600 mt-2"></div>
            </h3>
            <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              We use our skills and extensive experience for the development of ambitious solutions for your projects in
              the pharmaceutical industry.
            </p>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold  leading-tight bg-gradient-to-r from-pink-600 via-blue-700 to-pink-800 bg-clip-text text-transparent"
             >
              <span className="block sm:inline">Novanal Science</span>
              <span className="block sm:inline sm:ml-1">& Technologies</span>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-blue-600 mt-2"></div>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="flex items-center justify-center md:justify-start text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm sm:text-base"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="flex items-center justify-center md:justify-start text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm sm:text-base"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="flex items-center justify-center md:justify-start text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm sm:text-base"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="flex items-center justify-center md:justify-start text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm sm:text-base"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                  Statistical Programming (SAS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact-form")}
                  className="flex items-center justify-center md:justify-start text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm sm:text-base"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative">
              Contact Us
              <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-blue-600 mt-2"></div>
            </h3>
            <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Have questions, comments or just want to say hello:
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center md:justify-start">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@novanal.com"
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base break-all"
                  >
                    info@novanal.com
                  </a>
                </div>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+917893067967"
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    +91 7801072017
                  </a>
                </div>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  8-1-332-3/B/L, 7 Tombs Rd, JPB Colony, Aravind Nagar Colony, Shaikpet, Hyderabad, Telangana 500008, Hyderabad, Telangana 500031
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-6 sm:pt-8 text-center"
        >
          <p className="text-slate-400 text-xs sm:text-sm">
            Copyright © 2023 Novanal Science & Technologies. All rights reserved. Designed by NV
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
