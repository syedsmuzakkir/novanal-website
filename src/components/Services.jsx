// import { motion } from "framer-motion"
// import { BarChart3, Database, Activity, ArrowRight, CheckCircle, Users, Clock, Shield, Layers, FlaskConical, HeartPulse } from "lucide-react"

// const Services = () => {
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

//   const projects = [
//     {
//       id: 1,
//       title: "ISS Pooling Studies",
//       description: "Integrated analysis combining multiple clinical trials to enhance statistical power and safety assessment.",
//       details: "Our team implemented advanced statistical methods to combine data from 5 phase III trials, enabling comprehensive safety evaluation across diverse patient populations. We developed specialized pooling algorithms that maintained data integrity while allowing cross-study comparisons.",
//       icon: <Layers className="h-6 w-6 text-blue-600" />,
//       stats: "12 studies combined | 15,000+ patients",
//       image: "/images/iss-pooling.jpg",
//       technologies: ["SAS Meta-Analysis", "Data Harmonization", "CDISC Standards", "Safety Profiling"]
//     },
//     {
//       id: 2,
//       title: "AME Studies",
//       description: "Absorption, Metabolism, and Excretion studies to understand drug-body interactions.",
//       details: "We conducted comprehensive pharmacokinetic analyses to characterize drug absorption, distribution, metabolism, and excretion pathways across multiple dosing regimens. Our team developed specialized non-compartmental analysis (NCA) models to quantify drug exposure and elimination characteristics.",
//       icon: <FlaskConical className="h-6 w-6 text-green-600" />,
//       stats: "8 compounds analyzed | 98% accuracy rate",
//       image: "/images/ame-study.jpg",
//       technologies: ["Phoenix WinNonlin", "PK/PD Modeling", "Mass Spectrometry", "Non-compartmental Analysis"]
//     },
//     {
//       id: 3,
//       title: "Hepatic Impairment Study",
//       description: "Evaluating pharmacokinetics and safety in patients with liver dysfunction.",
//       details: "Designed and executed a specialized clinical trial to assess dosing adjustments needed for patients with varying degrees of hepatic impairment. We implemented Child-Pugh classification stratification and developed customized pharmacokinetic models to predict drug behavior in impaired liver function.",
//       icon: <HeartPulse className="h-6 w-6 text-red-600" />,
//       stats: "4 severity levels | 200+ participants",
//       image: "/images/hepatic-study.jpg",
//       technologies: ["Child-Pugh Classification", "PK Modeling", "Dose Adjustment Algorithms", "Liver Function Biomarkers"]
//     }
//   ]

//   return (
//     <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Our Services</h2>
//           <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
//             Specialized solutions for the pharmaceutical industry with comprehensive expertise and cutting-edge
//             technology
//           </p>
//         </motion.div>

//         {/* Featured Projects Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <div className="text-center mb-12">
//             <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Featured Case Studies</h3>
//             <p className="text-slate-600 max-w-2xl mx-auto">
//               Recent successful implementations showcasing our expertise in complex clinical research
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title} 
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 flex items-center">
//                     <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
//                       {project.icon}
//                     </div>
//                     <h4 className="ml-3 text-white font-bold text-xl">{project.title}</h4>
//                   </div>
//                 </div>
                
//                 <div className="p-6 flex-1 flex flex-col">
//                   <p className="text-slate-700 mb-4 font-medium">{project.description}</p>
//                   <div className="flex items-center text-sm text-slate-500 mb-4">
//                     <span className="inline-block h-1 w-8 bg-blue-500 mr-2"></span>
//                     {project.stats}
//                   </div>
//                   <p className="text-slate-600 text-sm mb-6 flex-1">
//                     {project.details}
//                   </p>
                  
//                   <div className="mt-auto">
//                     <h4 className="text-xs font-semibold text-slate-600 mb-2">Technologies Used:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, idx) => (
//                         <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Statistical Programming Service */}
//         <motion.div
//           id="statistical-programming"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
//                 <img
//                   src="/images/novanal-sas-1.png"
//                   alt="Statistical Programming SAS Services"
//                   className="w-full h-full object-contain p-4 max-h-[400px]"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {["SAS Base", "SAS/STAT", "SAS/GRAPH", "SAS Enterprise Guide", "JMP", "R Integration"].map(
//                     (tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ),
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <BarChart3 className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">STATISTICAL PROGRAMMING (SAS)</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our Statistical Programming (SAS) division specializes in delivering comprehensive analytical solutions
//               for pharmaceutical companies. We provide end-to-end statistical programming services including clinical
//               trial design, primary and secondary data points identification, clinical and safety endpoints
//               determination, Statistical Analysis Plan (SAP) preparation, interim data analysis, final data analysis,
//               and clinical report preparation.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Services & Capabilities:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Clinical Trial Design & Statistical Analysis Plans",
//                   "CDISC Standards Implementation (SDTM, ADaM)",
//                   "Regulatory Submission Support (FDA, EMA)",
//                   "Interim & Final Statistical Analysis",
//                   "Clinical Study Reports (CSR) Generation",
//                   "Data Visualization & Interactive Dashboards",
//                   "Adaptive Trial Design Implementation",
//                   "Bayesian Statistical Modeling",
//                   "Time-to-Event Analysis",
//                   "Non-inferiority & Superiority Testing",
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">15+</div>
//                 <div className="text-xs text-slate-600">Expert Team</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100+</div>
//                 <div className="text-xs text-slate-600">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">99%</div>
//                 <div className="text-xs text-slate-600">Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Data Management Service */}
//         <motion.div
//           id="data-management"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
//                 <img
//                   src="/images/data-analytics.png"
//                   alt="Data Management Services"
//                   className="w-full h-full object-contain p-4 max-h-[400px]"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Oracle Clinical",
//                     "Medidata Rave",
//                     "InForm",
//                     "REDCap",
//                     "OpenClinica",
//                     "SAS Clinical Data Integration",
//                   ].map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <Database className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">DATA MANAGEMENT</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our Data Management services ensure the highest standards of data quality, integrity, and regulatory
//               compliance throughout the clinical trial lifecycle. We provide comprehensive solutions from database
//               design to final data lock, implementing industry best practices and regulatory guidelines to support
//               successful clinical development programs.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Services & Capabilities:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Clinical Database Design & Development",
//                   "Electronic Data Capture (EDC) Systems",
//                   "Data Entry & Quality Control",
//                   "Medical Coding (MedDRA, WHO-DD)",
//                   "Data Cleaning & Query Management",
//                   "CDISC Standards Implementation",
//                   "Database Lock & Data Transfer",
//                   "Regulatory Compliance (21 CFR Part 11)",
//                   "Data Integration & Migration",
//                   "Clinical Data Review & Validation",
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">15+</div>
//                 <div className="text-xs text-slate-600">Expert Team</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100+</div>
//                 <div className="text-xs text-slate-600">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">99%</div>
//                 <div className="text-xs text-slate-600">Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Clinical Operations Service */}
//         <motion.div
//           id="clinical-operations"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image - Fixed to fill container */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl w-full h-full">
//                 <img
//                   src="/images/novanal-team-1.jpg"
//                   alt="Clinical Operations Services"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "CTMS Systems",
//                     "eTMF",
//                     "Clinical Trial Registries",
//                     "Safety Databases",
//                     "Project Management Tools",
//                   ].map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <Activity className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">CLINICAL OPERATIONS</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our Clinical Operations team provides comprehensive clinical trial management services, ensuring efficient
//               execution of clinical studies from protocol development to study completion. We combine deep therapeutic
//               expertise with operational excellence to deliver high-quality clinical trials that meet regulatory
//               requirements and timelines.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Services & Capabilities:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Clinical Protocol Development",
//                   "Site Selection & Feasibility Studies",
//                   "Clinical Trial Monitoring (CRA Services)",
//                   "Regulatory Affairs Support",
//                   "Project Management & Timeline Oversight",
//                   "Clinical Supply Management",
//                   "Patient Recruitment & Retention",
//                   "Safety Reporting & Pharmacovigilance",
//                   "Quality Assurance & Auditing",
//                   "Regulatory Submission Support",
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">15+</div>
//                 <div className="text-xs text-slate-600">Expert Team</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100+</div>
//                 <div className="text-xs text-slate-600">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">99%</div>
//                 <div className="text-xs text-slate-600">Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mt-16 sm:mt-20"
//         >
//           <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 lg:p-16 text-white mx-4 sm:mx-0">
//             <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
//               Ready to Transform Your Clinical Trials?
//             </h3>
//             <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
//               Let's discuss how our comprehensive expertise can accelerate your pharmaceutical research and ensure
//               regulatory success
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={scrollToContact}
//                 className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-blue-50 transition-all duration-300 shadow-lg"
//               >
//                 Get Started Today
//               </motion.button>

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={scrollToContact}
//                 className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-blue-600 transition-all duration-300"
//               >
//                 Schedule Consultation
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Services



// import { motion } from "framer-motion"
// import { BarChart3, Database, Activity, ArrowRight, CheckCircle, Users, Clock, Shield, Layers, FlaskConical, HeartPulse, Dna, Pill, Stethoscope } from "lucide-react"

// const Services = () => {
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

//   const projects = [
//     {
//       id: 1,
//       title: "ISS Pooling Studies",
//       description: "Integrated analysis combining multiple clinical trials to enhance statistical power and safety assessment.",
//       details: "Our team implemented advanced statistical methods to combine data from 5 phase III trials, enabling comprehensive safety evaluation across diverse patient populations. We developed specialized pooling algorithms that maintained data integrity while allowing cross-study comparisons.",
//       icon: <Layers className="h-6 w-6 text-blue-600" />,
//       stats: "12 studies combined | 15,000+ patients",
//       image: "/images/Iss_polling.jpg",
//       technologies: ["SAS Meta-Analysis", "Data Harmonization", "CDISC Standards", "Safety Profiling"]
//     },
//     {
//       id: 2,
//       title: "AME Studies",
//       description: "Absorption, Metabolism, and Excretion studies to understand drug-body interactions.",
//       details: "We conducted comprehensive pharmacokinetic analyses to characterize drug absorption, distribution, metabolism, and excretion pathways across multiple dosing regimens. Our team developed specialized non-compartmental analysis (NCA) models to quantify drug exposure and elimination characteristics.",
//       icon: <FlaskConical className="h-6 w-6 text-green-600" />,
//       stats: "8 compounds analyzed | 98% accuracy rate",
//       image: "/images/Ame.avif",
//       technologies: ["Phoenix WinNonlin", "PK/PD Modeling", "Mass Spectrometry", "Non-compartmental Analysis"]
//     },
//     {
//       id: 3,
//       title: "Hepatic Impairment Study",
//       description: "Evaluating pharmacokinetics and safety in patients with liver dysfunction.",
//       details: "Designed and executed a specialized clinical trial to assess dosing adjustments needed for patients with varying degrees of hepatic impairment. We implemented Child-Pugh classification stratification and developed customized pharmacokinetic models to predict drug behavior in impaired liver function.",
//       icon: <HeartPulse className="h-6 w-6 text-red-600" />,
//       stats: "4 severity levels | 200+ participants",
//       image: "/images/hepathic.webp",
//       technologies: ["Child-Pugh Classification", "PK Modeling", "Dose Adjustment Algorithms", "Liver Function Biomarkers"]
//     },
//     {
//   id: 4,
//   title: "Oncology Phase III Trial Analysis",
//   description: "Comprehensive statistical analysis for a global solid tumor study.",
//   details: "Provided end-to-end statistical programming and analysis for a multinational Phase III oncology trial evaluating a novel immunotherapy. Developed specialized SAS macros for RECIST 1.1 tumor response analysis and implemented complex survival analysis methodologies including Kaplan-Meier estimates and Cox proportional hazards models.",
//   icon: <Activity className="h-6 w-6 text-purple-600" />,
//   stats: "32 countries | 850+ patients analyzed",
//   image: "/images/oncology1.jpg",
//   technologies: ["RECIST 1.1", "Survival Analysis", "CDISC ADaM", "Safety Signal Detection"]
// }
// ,
// {
//   id: 5,
//   title: "Global FSP Analytics Partnership",
//   description: "Dedicated SAS programming team for Phase I-III clinical trials.",
//   details: "Deployed a 12-person Functional Service Provider team across 8 therapeutic areas for a mid-sized biotech. Provided continuous statistical programming support from study setup through regulatory submission, reducing sponsor's internal resource burden by 40%. Implemented automated QC checks that reduced data review time by 35%.",
//   icon: <Database className="h-6 w-6 text-green-600" />,
//   stats: "2.5 year engagement | 22 trials supported",
//   image: "/images/sas_programming.jpeg",
//   technologies: ["CDISC Standards", "Automated QC", "TLF Generation", "Submission Ready Datasets"]
// },

// {
//   id: 6,
//   title: "R Programming Clinical Analytics",
//   description: "Advanced statistical solutions for complex trial data.",
//   details: "Implemented R-based solutions for a Phase III cardiovascular trial, developing custom Shiny dashboards for safety monitoring and creating reproducible analysis pipelines. Reduced statistical review cycles by 30% through automated reporting while maintaining full 21 CFR Part 11 compliance. Integrated R with existing SAS workflows for enhanced modeling capabilities.",
//   // icon: <Code className="h-6 w-6 text-orange-600" />,
//   stats: "9,000+ patients analyzed | 100% compliance",
//   image: "/images/r_programming.png", 
//   technologies: ["R Shiny", "ggplot2", "Bayesian Methods", "CDISC Conversion"]
// }

//   ]

//   return (
//     <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Our Services</h2>
//           <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
//             Specialized solutions for the pharmaceutical industry with comprehensive expertise and cutting-edge
//             technology
//           </p>
//         </motion.div>

//         {/* Featured Projects Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <div className="text-center mb-12">
//             <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Featured Case Studies</h3>
//             <p className="text-slate-600 max-w-2xl mx-auto">
//               Recent successful implementations showcasing our expertise in complex clinical research
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title} 
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 flex items-center">
//                     <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
//                       {project.icon}
//                     </div>
//                     <h4 className="ml-3 text-white font-bold text-xl">{project.title}</h4>
//                   </div>
//                 </div>
                
//                 <div className="p-6 flex-1 flex flex-col">
//                   <p className="text-slate-700 mb-4 font-medium">{project.description}</p>
//                   <div className="flex items-center text-sm text-slate-500 mb-4">
//                     <span className="inline-block h-1 w-8 bg-blue-500 mr-2"></span>
//                     {project.stats}
//                   </div>
//                   <p className="text-slate-600 text-sm mb-6 flex-1">
//                     {project.details}
//                   </p>
                  
//                   <div className="mt-auto">
//                     <h4 className="text-xs font-semibold text-slate-600 mb-2">Technologies Used:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, idx) => (
//                         <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Oncology & Hematology Service */}

//         <motion.div
//           id="oncology-hematology"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
//                 <img
//                   src="/images/Oncology.jpg"
//                   alt="Oncology and Hematology Analytics Services"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Analytical Focus Areas:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Tumor Response Analysis",
//                     "Survival Analysis",
//                     "Biomarker Analysis",
//                     "Safety Signal Detection",
//                     "Dose Optimization",
//                     "Comparative Effectiveness"
//                   ].map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <BarChart3 className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">ONCOLOGY & HEMATOLOGY ANALYTICS</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our specialized oncology analytics team provides comprehensive SAS programming and statistical analysis for cancer clinical trials. We deliver precise, regulatory-compliant analytics for oncology studies including tumor response assessments, survival analyses, and biomarker evaluations.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Analytical Services:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "RECIST 1.1 Tumor Response Analysis",
//                   "Progression-Free Survival (PFS) Analysis",
//                   "Overall Survival (OS) Analysis",
//                   "Time-to-Event Analysis for Oncology",
//                   "Adverse Event Analysis in Cancer Trials",
//                   "Biomarker & Companion Diagnostic Analysis",
//                   "Dose-Limiting Toxicity Analysis",
//                   "Oncology Safety Signal Detection",
//                   "CDISC Implementation for Oncology Studies",
//                   "DSMB Support for Oncology Trials"
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">12+</div>
//                 <div className="text-xs text-slate-600">Oncology SAS Experts</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Database className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">40+</div>
//                 <div className="text-xs text-slate-600">Oncology Trials Analyzed</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100%</div>
//                 <div className="text-xs text-slate-600">Regulatory Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>



      
//         {/* Statistical Programming Service */}
//         <motion.div
//           id="statistical-programming"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
//                 <img
//                   src="/images/novanal-sas-1.png"
//                   alt="Statistical Programming SAS Services"
//                   className="w-full h-full object-contain p-4 max-h-[400px]"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {["SAS Base", "SAS/STAT", "SAS/GRAPH", "SAS Enterprise Guide", "JMP", "R Integration"].map(
//                     (tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ),
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <BarChart3 className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">STATISTICAL PROGRAMMING (SAS)</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our Statistical Programming (SAS) division specializes in delivering comprehensive analytical solutions
//               for pharmaceutical companies. We provide end-to-end statistical programming services including clinical
//               trial design, primary and secondary data points identification, clinical and safety endpoints
//               determination, Statistical Analysis Plan (SAP) preparation, interim data analysis, final data analysis,
//               and clinical report preparation.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Services & Capabilities:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Clinical Trial Design & Statistical Analysis Plans",
//                   "CDISC Standards Implementation (SDTM, ADaM)",
//                   "Regulatory Submission Support (FDA, EMA)",
//                   "Interim & Final Statistical Analysis",
//                   "Clinical Study Reports (CSR) Generation",
//                   "Data Visualization & Interactive Dashboards",
//                   "Adaptive Trial Design Implementation",
//                   "Bayesian Statistical Modeling",
//                   "Time-to-Event Analysis",
//                   "Non-inferiority & Superiority Testing",
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">15+</div>
//                 <div className="text-xs text-slate-600">Expert Team</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100+</div>
//                 <div className="text-xs text-slate-600">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">99%</div>
//                 <div className="text-xs text-slate-600">Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Data Management Service */}
//         <motion.div
//           id="data-management"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
//                 <img
//                   src="/images/data-analytics.png"
//                   alt="Data Management Services"
//                   className="w-full h-full object-contain p-4 max-h-[400px]"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Oracle Clinical",
//                     "Medidata Rave",
//                     "InForm",
//                     "REDCap",
//                     "OpenClinica",
//                     "SAS Clinical Data Integration",
//                   ].map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <Database className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">DATA MANAGEMENT</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our Data Management services ensure the highest standards of data quality, integrity, and regulatory
//               compliance throughout the clinical trial lifecycle. We provide comprehensive solutions from database
//               design to final data lock, implementing industry best practices and regulatory guidelines to support
//               successful clinical development programs.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Services & Capabilities:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Clinical Database Design & Development",
//                   "Electronic Data Capture (EDC) Systems",
//                   "Data Entry & Quality Control",
//                   "Medical Coding (MedDRA, WHO-DD)",
//                   "Data Cleaning & Query Management",
//                   "CDISC Standards Implementation",
//                   "Database Lock & Data Transfer",
//                   "Regulatory Compliance (21 CFR Part 11)",
//                   "Data Integration & Migration",
//                   "Clinical Data Review & Validation",
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">15+</div>
//                 <div className="text-xs text-slate-600">Expert Team</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100+</div>
//                 <div className="text-xs text-slate-600">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">99%</div>
//                 <div className="text-xs text-slate-600">Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Clinical Operations Service */}
//         <motion.div
//           id="clinical-operations"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image - Fixed to fill container */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl w-full h-full">
//                 <img
//                   src="/images/novanal-team-1.jpg"
//                   alt="Clinical Operations Services"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "CTMS Systems",
//                     "eTMF",
//                     "Clinical Trial Registries",
//                     "Safety Databases",
//                     "Project Management Tools",
//                   ].map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <Activity className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">CLINICAL OPERATIONS</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our Clinical Operations team provides comprehensive clinical trial management services, ensuring efficient
//               execution of clinical studies from protocol development to study completion. We combine deep therapeutic
//               expertise with operational excellence to deliver high-quality clinical trials that meet regulatory
//               requirements and timelines.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Services & Capabilities:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Clinical Protocol Development",
//                   "Site Selection & Feasibility Studies",
//                   "Clinical Trial Monitoring (CRA Services)",
//                   "Regulatory Affairs Support",
//                   "Project Management & Timeline Oversight",
//                   "Clinical Supply Management",
//                   "Patient Recruitment & Retention",
//                   "Safety Reporting & Pharmacovigilance",
//                   "Quality Assurance & Auditing",
//                   "Regulatory Submission Support",
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">15+</div>
//                 <div className="text-xs text-slate-600">Expert Team</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100+</div>
//                 <div className="text-xs text-slate-600">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">99%</div>
//                 <div className="text-xs text-slate-600">Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mt-16 sm:mt-20"
//         >
//           <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 lg:p-16 text-white mx-4 sm:mx-0">
//             <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
//               Ready to Transform Your Clinical Trials?
//             </h3>
//             <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
//               Let's discuss how our comprehensive expertise can accelerate your pharmaceutical research and ensure
//               regulatory success
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={scrollToContact}
//                 className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-blue-50 transition-all duration-300 shadow-lg"
//               >
//                 Get Started Today
//               </motion.button>

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={scrollToContact}
//                 className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-blue-600 transition-all duration-300"
//               >
//                 Schedule Consultation
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Services



// import { motion } from "framer-motion"
// import { BarChart3, Database, Activity, ArrowRight, CheckCircle, Users, Clock, Shield, Layers, FlaskConical, HeartPulse, Dna, Pill, Stethoscope } from "lucide-react"

// const Services = () => {
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

//   const projects = [
//     {
//       id: 1,
//       title: "ISS Pooling Studies",
//       description: "Integrated analysis combining multiple clinical trials to enhance statistical power and safety assessment.",
//       details: "Our team implemented advanced statistical methods to combine data from 5 phase III trials, enabling comprehensive safety evaluation across diverse patient populations. We developed specialized pooling algorithms that maintained data integrity while allowing cross-study comparisons.",
//       icon: <Layers className="h-6 w-6 text-blue-600" />,
//       stats: "12 studies combined | 15,000+ patients",
//       image: "/images/Iss_polling.jpg",
//       technologies: ["SAS Meta-Analysis", "Data Harmonization", "CDISC Standards", "Safety Profiling"]
//     },
//     {
//       id: 2,
//       title: "AME Studies",
//       description: "Absorption, Metabolism, and Excretion studies to understand drug-body interactions.",
//       details: "We conducted comprehensive pharmacokinetic analyses to characterize drug absorption, distribution, metabolism, and excretion pathways across multiple dosing regimens. Our team developed specialized non-compartmental analysis (NCA) models to quantify drug exposure and elimination characteristics.",
//       icon: <FlaskConical className="h-6 w-6 text-green-600" />,
//       stats: "8 compounds analyzed | 98% accuracy rate",
//       image: "/images/Ame.avif",
//       technologies: ["Phoenix WinNonlin", "PK/PD Modeling", "Mass Spectrometry", "Non-compartmental Analysis"]
//     },
//     {
//       id: 3,
//       title: "Hepatic Impairment Study",
//       description: "Evaluating pharmacokinetics and safety in patients with liver dysfunction.",
//       details: "Designed and executed a specialized clinical trial to assess dosing adjustments needed for patients with varying degrees of hepatic impairment. We implemented Child-Pugh classification stratification and developed customized pharmacokinetic models to predict drug behavior in impaired liver function.",
//       icon: <HeartPulse className="h-6 w-6 text-red-600" />,
//       stats: "4 severity levels | 200+ participants",
//       image: "/images/hepathic.webp",
//       technologies: ["Child-Pugh Classification", "PK Modeling", "Dose Adjustment Algorithms", "Liver Function Biomarkers"]
//     },
//     {
//       id: 4,
//       title: "Oncology Phase III Trial Analysis",
//       description: "Comprehensive statistical analysis for a global solid tumor study.",
//       details: "Provided end-to-end statistical programming and analysis for a multinational Phase III oncology trial evaluating a novel immunotherapy. Developed specialized SAS macros for RECIST 1.1 tumor response analysis and implemented complex survival analysis methodologies including Kaplan-Meier estimates and Cox proportional hazards models.",
//       icon: <Activity className="h-6 w-6 text-purple-600" />,
//       stats: "32 countries | 850+ patients analyzed",
//       image: "/images/oncology1.jpg",
//       technologies: ["RECIST 1.1", "Survival Analysis", "CDISC ADaM", "Safety Signal Detection"]
//     },
//     {
//       id: 5,
//       title: "Global FSP Analytics Partnership",
//       description: "Dedicated SAS programming team for Phase I-III clinical trials.",
//       details: "Deployed a 12-person Functional Service Provider team across 8 therapeutic areas for a mid-sized biotech. Provided continuous statistical programming support from study setup through regulatory submission, reducing sponsor's internal resource burden by 40%. Implemented automated QC checks that reduced data review time by 35%.",
//       icon: <Database className="h-6 w-6 text-green-600" />,
//       stats: "2.5 year engagement | 22 trials supported",
//       image: "/images/sas_programming.jpeg",
//       technologies: ["CDISC Standards", "Automated QC", "TLF Generation", "Submission Ready Datasets"]
//     },
//     {
//       id: 6,
//       title: "R Programming Clinical Analytics",
//       description: "Advanced statistical solutions for complex trial data.",
//       details: "Implemented R-based solutions for a Phase III cardiovascular trial, developing custom Shiny dashboards for safety monitoring and creating reproducible analysis pipelines. Reduced statistical review cycles by 30% through automated reporting while maintaining full 21 CFR Part 11 compliance. Integrated R with existing SAS workflows for enhanced modeling capabilities.",
//       stats: "9,000+ patients analyzed | 100% compliance",
//       image: "/images/r_programming.png", 
//       technologies: ["R Shiny", "ggplot2", "Bayesian Methods", "CDISC Conversion"]
//     }
//   ]

//   return (
//     <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Our Services</h2>
//           <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
//             Specialized solutions for the pharmaceutical industry with comprehensive expertise and cutting-edge technology
//           </p>
//         </motion.div>

//         {/* Featured Projects Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <div className="text-center mb-12">
//             <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Featured Case Studies</h3>
//             <p className="text-slate-600 max-w-2xl mx-auto">
//               Recent successful implementations showcasing our expertise in complex clinical research
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title} 
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 flex items-center">
//                     <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
//                       {project.icon}
//                     </div>
//                     <h4 className="ml-3 text-white font-bold text-xl">{project.title}</h4>
//                   </div>
//                 </div>
                
//                 <div className="p-6 flex-1 flex flex-col">
//                   <p className="text-slate-700 mb-4 font-medium">{project.description}</p>
//                   <div className="flex items-center text-sm text-slate-500 mb-4">
//                     <span className="inline-block h-1 w-8 bg-gradient-to-r from-pink-500 to-blue-600 mr-2"></span>
//                     {project.stats}
//                   </div>
//                   <p className="text-slate-600 text-sm mb-6 flex-1">
//                     {project.details}
//                   </p>
                  
//                   <div className="mt-auto">
//                     <h4 className="text-xs font-semibold text-slate-600 mb-2">Technologies Used:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, idx) => (
//                         <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Oncology & Hematology Service */}
       

//         {/* Statistical Programming Service */}
//         <motion.div
//           id="statistical-programming"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
//                 <img
//                   src="/images/novanal-sas-1.png"
//                   alt="Statistical Programming SAS Services"
//                   className="w-full h-full object-contain p-4 max-h-[400px]"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {["SAS Base", "SAS/STAT", "SAS/GRAPH", "SAS Enterprise Guide", "JMP", "R Integration"].map(
//                     (tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ),
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-3 rounded-full mr-4">
//                 <BarChart3 className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Statistical Programming (SAS)</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our Statistical Programming (SAS) division specializes in delivering comprehensive analytical solutions
//               for pharmaceutical companies. We provide end-to-end statistical programming services including clinical
//               trial design, primary and secondary data points identification, clinical and safety endpoints
//               determination, Statistical Analysis Plan (SAP) preparation, interim data analysis, final data analysis,
//               and clinical report preparation.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Services & Capabilities:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Clinical Trial Design & Statistical Analysis Plans",
//                   "CDISC Standards Implementation (SDTM, ADaM)",
//                   "Regulatory Submission Support (FDA, EMA)",
//                   "Interim & Final Statistical Analysis",
//                   "Clinical Study Reports (CSR) Generation",
//                   "Data Visualization & Interactive Dashboards",
//                   "Adaptive Trial Design Implementation",
//                   "Bayesian Statistical Modeling",
//                   "Time-to-Event Analysis",
//                   "Non-inferiority & Superiority Testing",
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">15+</div>
//                 <div className="text-xs text-slate-600">Expert Team</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100+</div>
//                 <div className="text-xs text-slate-600">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">99%</div>
//                 <div className="text-xs text-slate-600">Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Data Management Service */}
//         <motion.div
//           id="data-management"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
//                 <img
//                   src="/images/data-analytics.png"
//                   alt="Data Management Services"
//                   className="w-full h-full object-contain p-4 max-h-[400px]"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Oracle Clinical",
//                     "Medidata Rave",
//                     "InForm",
//                     "REDCap",
//                     "OpenClinica",
//                     "SAS Clinical Data Integration",
//                   ].map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-3 rounded-full mr-4">
//                 <Database className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Data Management</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our Data Management services ensure the highest standards of data quality, integrity, and regulatory
//               compliance throughout the clinical trial lifecycle. We provide comprehensive solutions from database
//               design to final data lock, implementing industry best practices and regulatory guidelines to support
//               successful clinical development programs.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Services & Capabilities:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Clinical Database Design & Development",
//                   "Electronic Data Capture (EDC) Systems",
//                   "Data Entry & Quality Control",
//                   "Medical Coding (MedDRA, WHO-DD)",
//                   "Data Cleaning & Query Management",
//                   "CDISC Standards Implementation",
//                   "Database Lock & Data Transfer",
//                   "Regulatory Compliance (21 CFR Part 11)",
//                   "Data Integration & Migration",
//                   "Clinical Data Review & Validation",
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">15+</div>
//                 <div className="text-xs text-slate-600">Expert Team</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100+</div>
//                 <div className="text-xs text-slate-600">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">99%</div>
//                 <div className="text-xs text-slate-600">Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Clinical Operations Service */}
//         <motion.div
//           id="clinical-operations"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
//         >
//           {/* Service Image */}
//           <div className="flex-1 w-full">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
//             >
//               <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl w-full h-full">
//                 <img
//                   src="/images/novanal-team-1.jpg"
//                   alt="Clinical Operations Services"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Technologies */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "CTMS Systems",
//                     "eTMF",
//                     "Clinical Trial Registries",
//                     "Safety Databases",
//                     "Project Management Tools",
//                   ].map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 w-full flex flex-col">
//             <div className="flex items-center mb-4">
//               <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-3 rounded-full mr-4">
//                 <Activity className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Clinical Operations</h3>
//             </div>

//             <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
//               Our Clinical Operations team provides comprehensive clinical trial management services, ensuring efficient
//               execution of clinical studies from protocol development to study completion. We combine deep therapeutic
//               expertise with operational excellence to deliver high-quality clinical trials that meet regulatory
//               requirements and timelines.
//             </p>

//             {/* Key Features */}
//             <div className="mb-6">
//               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
//                 Key Services & Capabilities:
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Clinical Protocol Development",
//                   "Site Selection & Feasibility Studies",
//                   "Clinical Trial Monitoring (CRA Services)",
//                   "Regulatory Affairs Support",
//                   "Project Management & Timeline Oversight",
//                   "Clinical Supply Management",
//                   "Patient Recruitment & Retention",
//                   "Safety Reporting & Pharmacovigilance",
//                   "Quality Assurance & Auditing",
//                   "Regulatory Submission Support",
//                 ].map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start">
//                     <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                     <span className="text-slate-600 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Users className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">15+</div>
//                 <div className="text-xs text-slate-600">Expert Team</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">100+</div>
//                 <div className="text-xs text-slate-600">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Shield className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-blue-600">99%</div>
//                 <div className="text-xs text-slate-600">Compliance</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 onClick={scrollToContact}
//                 className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white"
//               >
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={scrollToContact}
//                 className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mt-16 sm:mt-20"
//         >
//           <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 lg:p-16 text-white mx-4 sm:mx-0">
//             <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
//               Ready to Transform Your Clinical Trials?
//             </h3>
//             <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
//               Let's discuss how our comprehensive expertise can accelerate your pharmaceutical research and ensure
//               regulatory success
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={scrollToContact}
//                 className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-blue-50 transition-all duration-300 shadow-lg"
//               >
//                 Get Started Today
//               </motion.button>

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={scrollToContact}
//                 className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-blue-600 transition-all duration-300"
//               >
//                 Schedule Consultation
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Services







import { motion } from "framer-motion"
import { BarChart3, Database, Activity, ArrowRight, CheckCircle, Users, Clock, Shield, Layers, FlaskConical, HeartPulse, Dna, Pill, Stethoscope } from "lucide-react"

const Services = () => {
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

  const projects = [
    {
      id: 1,
      title: "ISS Pooling Studies",
      description: "Integrated analysis combining multiple clinical trials to enhance statistical power and safety assessment.",
      details: "Our team implemented advanced statistical methods to combine data from 5 phase III trials, enabling comprehensive safety evaluation across diverse patient populations. We developed specialized pooling algorithms that maintained data integrity while allowing cross-study comparisons.",
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      stats: "12 studies combined | 15,000+ patients",
      image: "/images/Iss_polling.jpg",
      technologies: ["SAS Meta-Analysis", "Data Harmonization", "CDISC Standards", "Safety Profiling"]
    },
    {
      id: 2,
      title: "AME Studies",
      description: "Absorption, Metabolism, and Excretion studies to understand drug-body interactions.",
      details: "We conducted comprehensive pharmacokinetic analyses to characterize drug absorption, distribution, metabolism, and excretion pathways across multiple dosing regimens. Our team developed specialized non-compartmental analysis (NCA) models to quantify drug exposure and elimination characteristics.",
      icon: <FlaskConical className="h-6 w-6 text-green-600" />,
      stats: "8 compounds analyzed | 98% accuracy rate",
      image: "/images/Ame.avif",
      technologies: ["Phoenix WinNonlin", "PK/PD Modeling", "Mass Spectrometry", "Non-compartmental Analysis"]
    },
    {
      id: 3,
      title: "Hepatic Impairment Study",
      description: "Evaluating pharmacokinetics and safety in patients with liver dysfunction.",
      details: "Designed and executed a specialized clinical trial to assess dosing adjustments needed for patients with varying degrees of hepatic impairment. We implemented Child-Pugh classification stratification and developed customized pharmacokinetic models to predict drug behavior in impaired liver function.",
      icon: <HeartPulse className="h-6 w-6 text-red-600" />,
      stats: "4 severity levels | 200+ participants",
      image: "/images/hepathic.webp",
      technologies: ["Child-Pugh Classification", "PK Modeling", "Dose Adjustment Algorithms", "Liver Function Biomarkers"]
    },
    {
      id: 4,
      title: "Oncology Phase III Trial Analysis",
      description: "Comprehensive statistical analysis for a global solid tumor study.",
      details: "Provided end-to-end statistical programming and analysis for a multinational Phase III oncology trial evaluating a novel immunotherapy. Developed specialized SAS macros for RECIST 1.1 tumor response analysis and implemented complex survival analysis methodologies including Kaplan-Meier estimates and Cox proportional hazards models.",
      icon: <Activity className="h-6 w-6 text-purple-600" />,
      stats: "32 countries | 850+ patients analyzed",
      image: "/images/oncology1.jpg",
      technologies: ["RECIST 1.1", "Survival Analysis", "CDISC ADaM", "Safety Signal Detection"]
    }
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Our Services</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Specialized solutions for the pharmaceutical industry with comprehensive expertise and cutting-edge technology
          </p>
        </motion.div> */}

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
          id = {"projects"}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Featured Case Studies</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Recent successful implementations showcasing our expertise in complex clinical research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      {project.icon}
                    </div>
                    <h4 className="ml-3 text-white font-bold text-xl">{project.title}</h4>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-700 mb-4 font-medium">{project.description}</p>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <span className="inline-block h-1 w-8 bg-gradient-to-r from-pink-500 to-blue-600 mr-2"></span>
                    {project.stats}
                  </div>
                  <p className="text-slate-600 text-sm mb-6 flex-1">
                    {project.details}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-xs font-semibold text-slate-600 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
 {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Our Services</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Specialized solutions for the pharmaceutical industry with comprehensive expertise and cutting-edge technology
          </p>
        </motion.div>
        {/* Statistical Programming Service */}
        <motion.div
          id="statistical-programming"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
        >
          {/* Service Image */}
          <div className="flex-1 w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
              <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
                <img
                  src="/images/novanal-sas-1.png"
                  alt="Statistical Programming SAS Services"
                  className="w-full h-full object-contain p-4 max-h-[400px]"
                />
              </div>


              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {["SAS Base", "SAS/STAT", "SAS/GRAPH", "SAS Enterprise Guide", "JMP", "R Integration"].map(
                    (tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>

       

          {/* Service Content */}
          <div className="flex-1 w-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-3 rounded-full mr-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Statistical Programming (SAS)</h3>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              Our Statistical Programming (SAS) division specializes in delivering comprehensive analytical solutions
              for pharmaceutical companies. We provide end-to-end statistical programming services including clinical
              trial design, primary and secondary data points identification, clinical and safety endpoints
              determination, Statistical Analysis Plan (SAP) preparation, interim data analysis, final data analysis,
              and clinical report preparation.
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Key Services & Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Clinical Trial Design & Statistical Analysis Plans",
                  "CDISC Standards Implementation (SDTM, ADaM)",
                  "Regulatory Submission Support (FDA, EMA)",
                  "Interim & Final Statistical Analysis",
                  "Clinical Study Reports (CSR) Generation",
                  "Data Visualization & Interactive Dashboards",
                  "Adaptive Trial Design Implementation",
                  "Bayesian Statistical Modeling",
                  "Time-to-Event Analysis",
                  "Non-inferiority & Superiority Testing",
                ].map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-xs text-slate-600">Expert Team</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-xs text-slate-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-xs text-slate-600">Compliance</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={scrollToContact}
                className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* R Programming Service */}
        <motion.div
          id="r-programming"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
        >
          {/* Service Image */}
          <div className="flex-1 w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
              <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
                <img
                  src="/images/r_programming.png"
                  alt="R Programming Clinical Analytics"
                  className="w-full h-full object-contain p-4 max-h-[400px]"
                />
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "R Shiny",
                    "ggplot2",
                    "dplyr",
                    "tidyr",
                    "knitr",
                    "rmarkdown",
                    "bayesplot",
                    "lme4"
                  ].map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Content */}
          <div className="flex-1 w-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-3 rounded-full mr-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">R Programming Clinical Analytics</h3>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              Our R Programming team delivers cutting-edge statistical solutions using the power of open-source R. We
              specialize in creating reproducible analyses, interactive visualizations, and advanced modeling for
              clinical trials. Our solutions integrate seamlessly with existing SAS workflows while offering enhanced
              flexibility and innovation.
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Key Services & Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Interactive R Shiny Dashboards",
                  "Advanced Data Visualization",
                  "Reproducible Research Reports",
                  "Bayesian Statistical Modeling",
                  "Machine Learning Applications",
                  "CDISC Data Conversion",
                  "Safety Signal Detection",
                  "Clinical Trial Simulations",
                  "Automated Reporting Pipelines",
                  "Integration with SAS Environments"
                ].map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-xs text-slate-600">R Experts</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-xs text-slate-600">R Projects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-xs text-slate-600">Compliance</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={scrollToContact}
                className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Global FSP Analytics Service */}
        <motion.div
          id="fsp-analytics"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
        >
          {/* Service Image */}
          <div className="flex-1 w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
              <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
                <img
                  src="/images/sas_programming.jpeg"
                  alt="Global FSP Analytics Partnership"
                  className="w-full h-full object-contain p-4 max-h-[400px]"
                />
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Service Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Dedicated Teams",
                    "Therapeutic Expertise",
                    "Process Optimization",
                    "Quality Control",
                    "Regulatory Compliance",
                    "Cost Efficiency"
                  ].map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Content */}
          <div className="flex-1 w-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-3 rounded-full mr-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Global FSP Analytics Partnership</h3>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              Our Functional Service Provider (FSP) model provides dedicated statistical programming and analytics teams
              that integrate seamlessly with your organization. We become an extension of your team, delivering
              consistent, high-quality support while reducing your operational overhead and improving efficiency.
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Key Benefits & Offerings:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Dedicated SAS/R Programming Teams",
                  "Therapeutic Area Specialists",
                  "Flexible Resourcing Models",
                  "Process Optimization & Standardization",
                  "Reduced Sponsor Resource Burden",
                  "Faster Study Start-up Times",
                  "Improved Quality & Consistency",
                  "Cost-effective Solutions",
                  "Knowledge Retention",
                  "Seamless Sponsor Integration"
                ].map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-xs text-slate-600">Dedicated FTEs</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">22</div>
                <div className="text-xs text-slate-600">Trials Supported</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">40%</div>
                <div className="text-xs text-slate-600">Cost Reduction</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={scrollToContact}
                className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Data Management Service */}
        <motion.div
          id="data-management"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
        >
          {/* Service Image */}
          <div className="flex-1 w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
              <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center w-full h-full">
                <img
                  src="/images/data-analytics.png"
                  alt="Data Management Services"
                  className="w-full h-full object-contain p-4 max-h-[400px]"
                />
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Oracle Clinical",
                    "Medidata Rave",
                    "InForm",
                    "REDCap",
                    "OpenClinica",
                    "SAS Clinical Data Integration",
                  ].map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Content */}
          <div className="flex-1 w-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-3 rounded-full mr-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Data Management</h3>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              Our Data Management services ensure the highest standards of data quality, integrity, and regulatory
              compliance throughout the clinical trial lifecycle. We provide comprehensive solutions from database
              design to final data lock, implementing industry best practices and regulatory guidelines to support
              successful clinical development programs.
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Key Services & Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Clinical Database Design & Development",
                  "Electronic Data Capture (EDC) Systems",
                  "Data Entry & Quality Control",
                  "Medical Coding (MedDRA, WHO-DD)",
                  "Data Cleaning & Query Management",
                  "CDISC Standards Implementation",
                  "Database Lock & Data Transfer",
                  "Regulatory Compliance (21 CFR Part 11)",
                  "Data Integration & Migration",
                  "Clinical Data Review & Validation",
                ].map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-xs text-slate-600">Expert Team</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-xs text-slate-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-xs text-slate-600">Compliance</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={scrollToContact}
                className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Clinical Operations Service */}
        <motion.div
          id="clinical-operations"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-16 lg:mb-24"
        >
          {/* Service Image */}
          <div className="flex-1 w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
              <div className="flex-1 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl w-full h-full">
                <img
                  src="/images/novanal-team-1.jpg"
                  alt="Clinical Operations Services"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Technologies & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "CTMS Systems",
                    "eTMF",
                    "Clinical Trial Registries",
                    "Safety Databases",
                    "Project Management Tools",
                  ].map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Content */}
          <div className="flex-1 w-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-3 rounded-full mr-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Clinical Operations</h3>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              Our Clinical Operations team provides comprehensive clinical trial management services, ensuring efficient
              execution of clinical studies from protocol development to study completion. We combine deep therapeutic
              expertise with operational excellence to deliver high-quality clinical trials that meet regulatory
              requirements and timelines.
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Key Services & Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Clinical Protocol Development",
                  "Site Selection & Feasibility Studies",
                  "Clinical Trial Monitoring (CRA Services)",
                  "Regulatory Affairs Support",
                  "Project Management & Timeline Oversight",
                  "Clinical Supply Management",
                  "Patient Recruitment & Retention",
                  "Safety Reporting & Pharmacovigilance",
                  "Quality Assurance & Auditing",
                  "Regulatory Submission Support",
                ].map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-xs text-slate-600">Expert Team</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-xs text-slate-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-xs text-slate-600">Compliance</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={scrollToContact}
                className="flex items-center justify-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group bg-white border-2 border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 lg:p-16 text-white mx-4 sm:mx-0">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Clinical Trials?
            </h3>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our comprehensive expertise can accelerate your pharmaceutical research and ensure
              regulatory success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Get Started Today
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services