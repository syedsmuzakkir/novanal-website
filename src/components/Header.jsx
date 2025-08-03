// "use client"

// import { useState, useEffect } from "react"
// import { Menu, X, ChevronDown } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       const headerHeight = 80
//       const elementPosition = element.offsetTop - headerHeight
//       window.scrollTo({
//         top: elementPosition,
//         behavior: "smooth",
//       })
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <header
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-md"
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-3 sm:py-4">
//           {/* Logo */}
//           <div className="flex items-center cursor-pointer"  
//               onClick={() => scrollToSection("hero")}
          
//           >
//             <img
//               src="/images/novanal-logo.png"
//               alt="Novanal Science & Technologies"
//               className="h-8 sm:h-10 md:h-12 w-36 mr-3"
//             />
//             <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 leading-tight">
//               {/* <span className="block sm:inline">Novanal Science</span> */}
//               {/* <span className="block sm:inline sm:ml-1">& Technologies</span> */}
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//             <button
//               onClick={() => scrollToSection("hero")}
//               className="text-slate-700 hover:text-blue-600 font-semibold transition-colors duration-300 text-sm xl:text-base"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-slate-700 hover:text-blue-600 font-semibold transition-colors duration-300 text-sm xl:text-base"
//             >
//               About Us
//             </button>
//             <div className="relative group">
//               <button className="flex items-center text-slate-700 hover:text-blue-600 font-semibold transition-colors duration-300 text-sm xl:text-base">
//                 Our Services
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                 <div className="py-2">
//                   <button
//                     onClick={() => scrollToSection("statistical-programming")}
//                     className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 text-sm"
//                   >
//                     Statistical Programming (SAS)
//                   </button>
//                   <button
//                     onClick={() => scrollToSection("data-management")}
//                     className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 text-sm"
//                   >
//                     Data Management
//                   </button>
//                   <button
//                     onClick={() => scrollToSection("clinical-operations")}
//                     className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 text-sm"
//                   >
//                     Clinical Operations
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => scrollToSection("contact-form")}
//               className="text-slate-700 hover:text-blue-600 font-semibold transition-colors duration-300 text-sm xl:text-base"
//             >
//               Contact
//             </button>
//           </nav>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors duration-300"
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="lg:hidden bg-white border-t border-slate-200"
//             >
//               <nav className="py-4 space-y-1">
//                 <button
//                   onClick={() => scrollToSection("hero")}
//                   className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors duration-300"
//                 >
//                   Home
//                 </button>
//                 <button
//                   onClick={() => scrollToSection("about")}
//                   className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors duration-300"
//                 >
//                   About Us
//                 </button>
//                 <div className="px-4 py-2">
//                   <div className="text-slate-700 font-semibold mb-2">Our Services</div>
//                   <div className="pl-4 space-y-1">
//                     <button
//                       onClick={() => scrollToSection("statistical-programming")}
//                       className="block w-full text-left py-2 text-slate-600 hover:text-blue-600 transition-colors duration-300"
//                     >
//                       Statistical Programming (SAS)
//                     </button>
//                     <button
//                       onClick={() => scrollToSection("data-management")}
//                       className="block w-full text-left py-2 text-slate-600 hover:text-blue-600 transition-colors duration-300"
//                     >
//                       Data Management
//                     </button>
//                     <button
//                       onClick={() => scrollToSection("clinical-operations")}
//                       className="block w-full text-left py-2 text-slate-600 hover:text-blue-600 transition-colors duration-300"
//                     >
//                       Clinical Operations
//                     </button>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => scrollToSection("contact-form")}
//                   className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors duration-300"
//                 >
//                   Contact
//                 </button>
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   )
// }

// export default Header






"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("hero")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active tab based on scroll position
      const sections = ["hero", "about", "statistical-programming", "data-management", "clinical-operations", "contact-form"]
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveTab(currentSection)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    setActiveTab(sectionId)
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "contact-form", label: "Contact" }
  ]

  const serviceItems = [
    { id: "statistical-programming", label: "Statistical Programming (SAS)" },
    { id: "data-management", label: "Data Management" },
    { id: "clinical-operations", label: "Clinical Operations" },
    { id: "oncology-hematology", label: "ONCOLOGY & HEMATOLOGY" }


  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg" 
          : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer hover:opacity-90 transition-opacity duration-200"  
            onClick={() => scrollToSection("hero")}
          >
            <img
              src="/images/novanal-logo.png"
              alt="Novanal Science & Technologies"
              className="h-8 sm:h-10 md:h-12  mr-3"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm xl:text-base transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center px-4 py-2 rounded-lg font-semibold text-sm xl:text-base transition-all duration-200 ${
                  serviceItems.some(service => activeTab === service.id)
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {serviceItems.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 ${
                        activeTab === service.id
                          ? "bg-blue-600 text-white"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 animate-in slide-in-from-top-2 duration-300">
            <nav className="py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 font-semibold transition-colors duration-200 ${
                    activeTab === item.id
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="px-4 py-2">
                <div className="text-slate-700 font-semibold mb-2 text-sm uppercase tracking-wide">Our Services</div>
                <div className="pl-4 space-y-1">
                  {serviceItems.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className={`block w-full text-left py-2 px-3 rounded transition-colors duration-200 ${
                        activeTab === service.id
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header