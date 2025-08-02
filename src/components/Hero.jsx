// "use client"

// import { motion } from "framer-motion"
// import { BarChart3, TrendingUp, Database, PieChart } from "lucide-react"

// const Hero = () => {
//   const scrollToServices = () => {
//     const element = document.getElementById("services")
//     if (element) {
//       const headerHeight = 80
//       const elementPosition = element.offsetTop - headerHeight
//       window.scrollTo({
//         top: elementPosition,
//         behavior: "smooth",
//       })
//     }
//   }

//   const scrollToContact = () => {
//     const element = document.getElementById("contact-form")
//     if (element) {
//       const headerHeight = 80
//       const elementPosition = element.offsetTop - headerHeight
//       window.scrollTo({
//         top: elementPosition,
//         behavior: "smooth",
//       })
//     }
//   }

//   const SASComputerIllustration = () => (
//     <motion.div
//       animate={{
//         y: [0, -15, 0],
//       }}
//       transition={{
//         duration: 4,
//         repeat: Number.POSITIVE_INFINITY,
//         ease: "easeInOut",
//       }}
//       className="relative w-full max-w-lg mx-auto"
//     >
//       <svg width="100%" height="auto" viewBox="0 0 600 450" className="w-full h-auto">
//         {/* Main Computer Setup */}

//         {/* Desk */}
//         <rect
//           x="50"
//           y="320"
//           width="500"
//           height="80"
//           fill="rgba(255,255,255,0.9)"
//           stroke="rgba(255,255,255,0.7)"
//           strokeWidth="2"
//           rx="8"
//         />

//         {/* Monitor */}
//         <rect
//           x="150"
//           y="120"
//           width="300"
//           height="200"
//           fill="rgba(255,255,255,0.95)"
//           stroke="rgba(255,255,255,0.8)"
//           strokeWidth="3"
//           rx="12"
//         />

//         {/* Monitor Screen */}
//         <rect x="165" y="135" width="270" height="170" fill="#1e293b" rx="8" />

//         {/* SAS Interface Header */}
//         <rect x="170" y="140" width="260" height="25" fill="#046bd2" rx="4" />
//         <text x="300" y="157" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="white" fontWeight="bold">
//           SAS Enterprise Guide - Clinical Analytics
//         </text>

//         {/* Code Editor Section */}
//         <rect x="175" y="170" width="120" height="80" fill="#2d3748" rx="4" />

//         {/* Code Lines */}
//         <rect x="180" y="180" width="80" height="2" fill="#68d391" rx="1" />
//         <rect x="180" y="190" width="100" height="2" fill="#63b3ed" rx="1" />
//         <rect x="180" y="200" width="60" height="2" fill="#f6ad55" rx="1" />
//         <rect x="180" y="210" width="90" height="2" fill="#68d391" rx="1" />
//         <rect x="180" y="220" width="70" height="2" fill="#63b3ed" rx="1" />
//         <rect x="180" y="230" width="85" height="2" fill="#f6ad55" rx="1" />
//         <rect x="180" y="240" width="95" height="2" fill="#68d391" rx="1" />

//         {/* Data Visualization Panel */}
//         <rect x="305" y="170" width="120" height="80" fill="#f7fafc" stroke="#e2e8f0" strokeWidth="1" rx="4" />

//         {/* Bar Chart */}
//         <motion.rect
//           x="315"
//           y="220"
//           width="12"
//           height="20"
//           fill="#046bd2"
//           rx="2"
//           initial={{ height: 0 }}
//           animate={{ height: 20 }}
//           transition={{ delay: 1, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
//         />
//         <motion.rect
//           x="330"
//           y="210"
//           width="12"
//           height="30"
//           fill="#045cb4"
//           rx="2"
//           initial={{ height: 0 }}
//           animate={{ height: 30 }}
//           transition={{ delay: 1.2, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
//         />
//         <motion.rect
//           x="345"
//           y="200"
//           width="12"
//           height="40"
//           fill="#046bd2"
//           rx="2"
//           initial={{ height: 0 }}
//           animate={{ height: 40 }}
//           transition={{ delay: 1.4, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
//         />
//         <motion.rect
//           x="360"
//           y="215"
//           width="12"
//           height="25"
//           fill="#045cb4"
//           rx="2"
//           initial={{ height: 0 }}
//           animate={{ height: 25 }}
//           transition={{ delay: 1.6, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
//         />

//         {/* Pie Chart */}
//         <circle cx="390" cy="190" r="20" fill="none" stroke="#e2e8f0" strokeWidth="4" />
//         <motion.circle
//           cx="390"
//           cy="190"
//           r="20"
//           fill="none"
//           stroke="#046bd2"
//           strokeWidth="4"
//           strokeDasharray="125"
//           strokeDashoffset="0"
//           initial={{ strokeDashoffset: 125 }}
//           animate={{ strokeDashoffset: 31 }}
//           transition={{ delay: 2, duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
//         />

//         {/* Results Panel */}
//         <rect x="175" y="260" width="250" height="35" fill="#f0fff4" stroke="#68d391" strokeWidth="1" rx="4" />
//         <text x="300" y="275" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#22543d">
//           Analysis Complete: 1,247 patients analyzed
//         </text>
//         <text x="300" y="290" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#22543d">
//           P-value: 0.0023 | CI: 95% | Effect Size: 0.67
//         </text>

//         {/* Monitor Stand */}
//         <rect x="280" y="320" width="40" height="30" fill="rgba(255,255,255,0.8)" rx="6" />
//         <rect x="250" y="345" width="100" height="12" fill="rgba(255,255,255,0.7)" rx="6" />

//         {/* Keyboard */}
//         <rect
//           x="200"
//           y="360"
//           width="200"
//           height="30"
//           fill="rgba(255,255,255,0.9)"
//           stroke="rgba(255,255,255,0.7)"
//           strokeWidth="2"
//           rx="6"
//         />

//         {/* Keyboard Keys */}
//         {Array.from({ length: 10 }, (_, i) => (
//           <rect key={i} x={210 + i * 18} y="365" width="15" height="8" fill="rgba(255,255,255,0.95)" rx="2" />
//         ))}
//         {Array.from({ length: 8 }, (_, i) => (
//           <rect key={i} x={220 + i * 18} y="375" width="15" height="8" fill="rgba(255,255,255,0.95)" rx="2" />
//         ))}
//         <rect x="240" y="385" width="80" height="8" fill="rgba(255,255,255,0.95)" rx="2" />

//         {/* Mouse */}
//         <ellipse
//           cx="420"
//           cy="375"
//           rx="15"
//           ry="20"
//           fill="rgba(255,255,255,0.9)"
//           stroke="rgba(255,255,255,0.7)"
//           strokeWidth="2"
//         />

//         {/* Secondary Monitor/Laptop */}
//         <rect
//           x="480"
//           y="200"
//           width="100"
//           height="70"
//           fill="rgba(255,255,255,0.9)"
//           stroke="rgba(255,255,255,0.7)"
//           strokeWidth="2"
//           rx="6"
//         />
//         <rect x="485" y="205" width="90" height="50" fill="#1a202c" rx="4" />

//         {/* Laptop Screen Content */}
//         <rect x="490" y="210" width="80" height="8" fill="#046bd2" rx="1" />
//         <text x="530" y="218" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="white">
//           SAS Studio
//         </text>

//         {/* Mini Charts */}
//         <rect x="495" y="225" width="6" height="15" fill="#046bd2" rx="1" />
//         <rect x="505" y="230" width="6" height="10" fill="#045cb4" rx="1" />
//         <rect x="515" y="220" width="6" height="20" fill="#046bd2" rx="1" />
//         <rect x="525" y="235" width="6" height="5" fill="#045cb4" rx="1" />

//         {/* Laptop Base */}
//         <rect x="475" y="270" width="110" height="15" fill="rgba(255,255,255,0.8)" rx="4" />

//         {/* Coffee Cup */}
//         <ellipse
//           cx="120"
//           cy="340"
//           rx="12"
//           ry="8"
//           fill="rgba(255,255,255,0.9)"
//           stroke="rgba(255,255,255,0.7)"
//           strokeWidth="2"
//         />
//         <rect x="108" y="332" width="24" height="16" fill="rgba(255,255,255,0.9)" rx="2" />
//         <path
//           d="M132 340 Q140 340 140 345 Q140 350 132 350"
//           fill="none"
//           stroke="rgba(255,255,255,0.7)"
//           strokeWidth="2"
//         />

//         {/* Documents/Papers */}
//         <rect
//           x="70"
//           y="300"
//           width="60"
//           height="40"
//           fill="rgba(255,255,255,0.95)"
//           stroke="rgba(255,255,255,0.7)"
//           strokeWidth="1"
//           rx="2"
//         />
//         <rect x="75" y="305" width="50" height="2" fill="#64748b" rx="1" />
//         <rect x="75" y="310" width="45" height="2" fill="#64748b" rx="1" />
//         <rect x="75" y="315" width="40" height="2" fill="#64748b" rx="1" />
//         <text x="100" y="330" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="#1e293b">
//           Clinical Protocol
//         </text>

//         {/* Floating Data Elements */}
//         <motion.g
//           animate={{
//             y: [0, -10, 0],
//             opacity: [0.7, 1, 0.7],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//             delay: 0.5,
//           }}
//         >
//           <circle cx="100" cy="150" r="15" fill="rgba(255,255,255,0.2)" />
//           <foreignObject x="85" y="135" width="30" height="30">
//             <div className="flex items-center justify-center w-full h-full">
//               <BarChart3 className="h-4 w-4 text-white" />
//             </div>
//           </foreignObject>
//         </motion.g>

//         <motion.g
//           animate={{
//             y: [0, 10, 0],
//             opacity: [0.7, 1, 0.7],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         >
//           <circle cx="500" cy="120" r="15" fill="rgba(255,255,255,0.2)" />
//           <foreignObject x="485" y="105" width="30" height="30">
//             <div className="flex items-center justify-center w-full h-full">
//               <Database className="h-4 w-4 text-white" />
//             </div>
//           </foreignObject>
//         </motion.g>

//         <motion.g
//           animate={{
//             y: [0, -8, 0],
//             opacity: [0.7, 1, 0.7],
//           }}
//           transition={{
//             duration: 3.5,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//             delay: 1.5,
//           }}
//         >
//           <circle cx="80" cy="250" r="15" fill="rgba(255,255,255,0.2)" />
//           <foreignObject x="65" y="235" width="30" height="30">
//             <div className="flex items-center justify-center w-full h-full">
//               <TrendingUp className="h-4 w-4 text-white" />
//             </div>
//           </foreignObject>
//         </motion.g>

//         <motion.g
//           animate={{
//             y: [0, 12, 0],
//             opacity: [0.7, 1, 0.7],
//           }}
//           transition={{
//             duration: 2.5,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//         >
//           <circle cx="520" cy="300" r="15" fill="rgba(255,255,255,0.2)" />
//           <foreignObject x="505" y="285" width="30" height="30">
//             <div className="flex items-center justify-center w-full h-full">
//               <PieChart className="h-4 w-4 text-white" />
//             </div>
//           </foreignObject>
//         </motion.g>
//       </svg>
//     </motion.div>
//   )

//   return (
//     <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-blue-700 to-pink-800"></div>

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             rotate: [0, 360],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//           className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full"
//         />
//         <motion.div
//           animate={{
//             rotate: [360, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//           className="absolute bottom-20 right-20 w-32 h-32 border border-white/10 rounded-full"
//         />
//       </div>

//       {/* Wave Pattern Overlay */}
//       <div className="absolute bottom-0 left-0 w-full">
//         <svg viewBox="0 0 1440 320" className="w-full h-auto">
//           <path
//             fill="rgba(255,255,255,0.1)"
//             d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,218.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20">
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)]">
//           {/* Hero Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex-1 text-white text-center lg:text-left mb-8 lg:mb-0 lg:pr-8 xl:pr-12"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-2xl sm:text-3xl mt-20 md:text-4xl md:mt-4 lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
//             >
//               SAS provides analytics tools for large pharmaceutical companies
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0"
//             >
//               We help improve business performance to deliver effective medicines and therapies to patients faster and
//               more efficiently.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//             >
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={scrollToServices}
//                 className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide hover:bg-blue-50 transition-all duration-300 shadow-lg"
//               >
//                 Our Services
//               </motion.button>

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={scrollToContact}
//                 className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide hover:bg-white hover:text-blue-600 transition-all duration-300"
//               >
//                 Contact Us
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Hero Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="flex-1 flex justify-center items-center w-full"
//           >
//             <SASComputerIllustration />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero


"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Database, PieChart } from "lucide-react"

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact-form")
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const SASComputerIllustration = () => (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="relative w-full max-w-lg mx-auto"
    >
      <svg width="100%" height="auto" viewBox="0 0 600 450" className="w-full h-auto">
        {/* Main Computer Setup */}

        {/* Desk */}
        <rect
          x="50"
          y="320"
          width="500"
          height="80"
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
          rx="8"
        />

        {/* Monitor */}
        <rect
          x="150"
          y="120"
          width="300"
          height="200"
          fill="rgba(255,255,255,0.95)"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="3"
          rx="12"
        />

        {/* Monitor Screen */}
        <rect x="165" y="135" width="270" height="170" fill="#1e293b" rx="8" />

        {/* SAS Interface Header */}
        <rect x="170" y="140" width="260" height="25" fill="#046bd2" rx="4" />
        <text x="300" y="157" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="white" fontWeight="bold">
          SAS Enterprise Guide - Clinical Analytics
        </text>

        {/* Code Editor Section */}
        <rect x="175" y="170" width="120" height="80" fill="#2d3748" rx="4" />

        {/* Code Lines */}
        <rect x="180" y="180" width="80" height="2" fill="#68d391" rx="1" />
        <rect x="180" y="190" width="100" height="2" fill="#63b3ed" rx="1" />
        <rect x="180" y="200" width="60" height="2" fill="#f6ad55" rx="1" />
        <rect x="180" y="210" width="90" height="2" fill="#68d391" rx="1" />
        <rect x="180" y="220" width="70" height="2" fill="#63b3ed" rx="1" />
        <rect x="180" y="230" width="85" height="2" fill="#f6ad55" rx="1" />
        <rect x="180" y="240" width="95" height="2" fill="#68d391" rx="1" />

        {/* Data Visualization Panel */}
        <rect x="305" y="170" width="120" height="80" fill="#f7fafc" stroke="#e2e8f0" strokeWidth="1" rx="4" />

        {/* Bar Chart */}
        <motion.rect
          x="315"
          y="220"
          width="12"
          height="20"
          fill="#046bd2"
          rx="2"
          initial={{ height: 0 }}
          animate={{ height: 20 }}
          transition={{ delay: 1, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
        />
        <motion.rect
          x="330"
          y="210"
          width="12"
          height="30"
          fill="#045cb4"
          rx="2"
          initial={{ height: 0 }}
          animate={{ height: 30 }}
          transition={{ delay: 1.2, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
        />
        <motion.rect
          x="345"
          y="200"
          width="12"
          height="40"
          fill="#046bd2"
          rx="2"
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{ delay: 1.4, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
        />
        <motion.rect
          x="360"
          y="215"
          width="12"
          height="25"
          fill="#045cb4"
          rx="2"
          initial={{ height: 0 }}
          animate={{ height: 25 }}
          transition={{ delay: 1.6, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
        />

        {/* Pie Chart */}
        <circle cx="390" cy="190" r="20" fill="none" stroke="#e2e8f0" strokeWidth="4" />
        <motion.circle
          cx="390"
          cy="190"
          r="20"
          fill="none"
          stroke="#046bd2"
          strokeWidth="4"
          strokeDasharray="125"
          strokeDashoffset="0"
          initial={{ strokeDashoffset: 125 }}
          animate={{ strokeDashoffset: 31 }}
          transition={{ delay: 2, duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
        />

        {/* Results Panel */}
        <rect x="175" y="260" width="250" height="35" fill="#f0fff4" stroke="#68d391" strokeWidth="1" rx="4" />
        <text x="300" y="275" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#22543d">
          Analysis Complete: 1,247 patients analyzed
        </text>
        <text x="300" y="290" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#22543d">
          P-value: 0.0023 | CI: 95% | Effect Size: 0.67
        </text>

        {/* Monitor Stand */}
        <rect x="280" y="320" width="40" height="30" fill="rgba(255,255,255,0.8)" rx="6" />
        <rect x="250" y="345" width="100" height="12" fill="rgba(255,255,255,0.7)" rx="6" />

        {/* Keyboard */}
        <rect
          x="200"
          y="360"
          width="200"
          height="30"
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
          rx="6"
        />

        {/* Keyboard Keys */}
        {Array.from({ length: 10 }, (_, i) => (
          <rect key={i} x={210 + i * 18} y="365" width="15" height="8" fill="rgba(255,255,255,0.95)" rx="2" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x={220 + i * 18} y="375" width="15" height="8" fill="rgba(255,255,255,0.95)" rx="2" />
        ))}
        <rect x="240" y="385" width="80" height="8" fill="rgba(255,255,255,0.95)" rx="2" />

        {/* Mouse */}
        <ellipse
          cx="420"
          cy="375"
          rx="15"
          ry="20"
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
        />

        {/* Secondary Monitor/Laptop */}
        <rect
          x="480"
          y="200"
          width="100"
          height="70"
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
          rx="6"
        />
        <rect x="485" y="205" width="90" height="50" fill="#1a202c" rx="4" />

        {/* Laptop Screen Content */}
        <rect x="490" y="210" width="80" height="8" fill="#046bd2" rx="1" />
        <text x="530" y="218" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="white">
          SAS Studio
        </text>

        {/* Mini Charts */}
        <rect x="495" y="225" width="6" height="15" fill="#046bd2" rx="1" />
        <rect x="505" y="230" width="6" height="10" fill="#045cb4" rx="1" />
        <rect x="515" y="220" width="6" height="20" fill="#046bd2" rx="1" />
        <rect x="525" y="235" width="6" height="5" fill="#045cb4" rx="1" />

        {/* Laptop Base */}
        <rect x="475" y="270" width="110" height="15" fill="rgba(255,255,255,0.8)" rx="4" />

        {/* Coffee Cup */}
        <ellipse
          cx="120"
          cy="340"
          rx="12"
          ry="8"
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
        />
        <rect x="108" y="332" width="24" height="16" fill="rgba(255,255,255,0.9)" rx="2" />
        <path
          d="M132 340 Q140 340 140 345 Q140 350 132 350"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
        />

        {/* Documents/Papers */}
        <rect
          x="70"
          y="300"
          width="60"
          height="40"
          fill="rgba(255,255,255,0.95)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1"
          rx="2"
        />
        <rect x="75" y="305" width="50" height="2" fill="#64748b" rx="1" />
        <rect x="75" y="310" width="45" height="2" fill="#64748b" rx="1" />
        <rect x="75" y="315" width="40" height="2" fill="#64748b" rx="1" />
        <text x="100" y="330" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="#1e293b">
          Clinical Protocol
        </text>

        {/* Floating Data Elements */}
        <motion.g
          animate={{
            y: [0, -10, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <circle cx="100" cy="150" r="15" fill="rgba(255,255,255,0.2)" />
          <foreignObject x="85" y="135" width="30" height="30">
            <div className="flex items-center justify-center w-full h-full">
              <BarChart3 className="h-4 w-4 text-white" />
            </div>
          </foreignObject>
        </motion.g>

        <motion.g
          animate={{
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <circle cx="500" cy="120" r="15" fill="rgba(255,255,255,0.2)" />
          <foreignObject x="485" y="105" width="30" height="30">
            <div className="flex items-center justify-center w-full h-full">
              <Database className="h-4 w-4 text-white" />
            </div>
          </foreignObject>
        </motion.g>

        <motion.g
          animate={{
            y: [0, -8, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <circle cx="80" cy="250" r="15" fill="rgba(255,255,255,0.2)" />
          <foreignObject x="65" y="235" width="30" height="30">
            <div className="flex items-center justify-center w-full h-full">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
          </foreignObject>
        </motion.g>

        <motion.g
          animate={{
            y: [0, 12, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <circle cx="520" cy="300" r="15" fill="rgba(255,255,255,0.2)" />
          <foreignObject x="505" y="285" width="30" height="30">
            <div className="flex items-center justify-center w-full h-full">
              <PieChart className="h-4 w-4 text-white" />
            </div>
          </foreignObject>
        </motion.g>
      </svg>
    </motion.div>
  )

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-blue-700 to-pink-800"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-32 h-32 border border-white/10 rounded-full"
        />
      </div>

      {/* Wave Pattern Overlay */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,218.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)]">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-white text-center lg:text-left mb-8 lg:mb-0 lg:pr-8 xl:pr-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl mt-20 md:text-4xl md:mt-4 lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            >
              Expert SAS Programming & Analytics Solutions for Pharma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0"
            >
              We deliver specialized SAS programming services, statistical analysis, data management, and clinical operations support to accelerate your clinical trials and regulatory submissions with precision and compliance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Our Analytics Solutions
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center items-center w-full"
          >
            <SASComputerIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero