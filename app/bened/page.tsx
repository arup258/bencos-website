"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence,  } from "framer-motion"
import { ArrowRight, MapPin , CheckCircle2 } from "lucide-react"

// Hero background image — swap the src to change it.
const HERO_IMAGE = "/images/image 557.webp"

// "Who We Serve" section image — swap as needed.
const SERVE_IMAGE = "/images/image 567.png"




const disciplines = [
  { label: "Life Sciences", image: "/images/image 559.webp" },
  { label: "Biotechnology", image: "/images/image 560.webp" },
  { label: "Bioinformatics", image: "/images/image 561.png" },
  { label: "Clinical Research", image: "/images/image 562.webp" },
  { label: "Healthcare", image: "/images/image 563.webp" },
  { label: "Artificial Intelligence", image: "/images/image 564.webp" },
  { label: "Data Analytics", image: "/images/image 565.webp" },
  { label: "Research Methodology", image: "/images/image 566.webp" },
]

const disciplines1 = [
  { label: "Students", image: "/images/image 569.webp" },
  { label: "Graduated", image: "/images/image 570.webp" },
  { label: "Researchers", image: "/images/image 571.webp" },
  { label: "Healthcare Processionals", image: "/images/image 572.webp" },
  { label: "Faculty Members", image: "/images/image 573.webp" },
  { label: "Industry Professionals", image: "/images/image 574.webp" },
  { label: "Corporate Teams", image: "/images/image 575.webp" },
  
]





// Industries shown as check-mark pills (ordered to flow left→right across two columns).
const industries = [
  "Certification Programs",
  "Internship Programs",
  "Industrial Training",
  "Professional Workshops",
  "Research Training",
  "Skill Development Programs",
  "Faculty Development Programs",
  "Career Readiness Programs",
]



// Image for the "Trusted across industries" section — swap as needed.
const TRUSTED_IMAGE = "/images/image 567.png"

// "Learning Beyond the Classroom" section image + highlights — swap as needed.
const LEARNING_IMAGE = "/images/image 568.png"
const learning = [
  "Real-world Project Work",
  "Expert Industry Mentorship",
  "Practical Problem-solving",
  "Corporate Partnerships",
]

// "Engaging. Career-Focused. Practical" section image + pillars — swap as needed.
const ENGAGING_IMAGE = "/images/image 617.png"
const approach = [
  { title: "Expert-led", description: "Instruction from industry veterans" },
  { title: "Project-based", description: "Real deliverables and measurable outcomes" },
  { title: "Mentorship", description: "Continuous one-on-one professional guidance" },
  { title: "Internships", description: "Structured hands-on industry placement" },
]



export default function BenEdPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A connected world map representing global operations"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-sm md:text-xl font-light tracking-tight antialiased"
            >
               Knowledge Initiatives
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 h-px w-full origin-left bg-white/40"
            />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:whitespace-nowrap font-elegant thin tracking-wide text-white leading-[1.25]"
            >
             Building Skills Through <br/>Industry-Focused<br/> Education
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
             Empowering students and professionals through practical learning, industry exposure, certification programs, internships, and career-focused education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= WHO WE SERVE ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: heading + copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                A network built on<br/> trust, across continents
              </h2>

              <p className="mt-8 max-w-xl whitespace-pre-line font-light text-muted-foreground leading-relaxed">
                {"Bencos continues to expand its global presence by\n collaborating with academic institutions, healthcare\n organizations, technology partners, research centers, and\n enterprises across multiple countries."}
              </p>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900"
            >
              <img
                src={SERVE_IMAGE}
                alt="Bencos team collaborating with healthcare professionals"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

    
      {/* ======================= EVENT CATEGORIES ======================= */}
     <section className="bg-background py-16 lg:py-20">
             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               <motion.h2
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
               >
               Explore Your Field
                
               </motion.h2>
     
               <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
                 {disciplines.map((item, index) => (
                   <motion.div
                     key={item.label}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                     className="group relative aspect-[327/354] overflow-hidden rounded-xl bg-neutral-900"
                   >
                     <img
                       src={item.image}
                       alt={item.label}
                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                     <h3 className="absolute inset-x-0 bottom-0 p-5 text-base font-medium text-white transition-colors md:text-lg group-hover:text-green-600">
                       {item.label}
                     </h3>
                   </motion.div>
                 ))}
               </div>
             </div>
           </section>
     
 {/* ======================= TRUSTED INDUSTRIES ======================= */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: heading + industry pills */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-2  text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
              >
                Structured Pathways<br/>
                
                to Excellence
              </motion.h2>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industries.map((name, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index % 2) * 0.05 + Math.floor(index / 2) * 0.05 }}
                    className="flex items-center gap-3 rounded-full border border-border px-5 py-3.5 transition-colors hover:border-green-600/50"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm font-medium text-foreground">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900"
            >
              <img
                src={TRUSTED_IMAGE}
                alt="Professionals collaborating across industries"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= LEARNING BEYOND THE CLASSROOM ======================= */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: heading + copy + highlights */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl">
                Learning That Goes<br/> Beyond the Classroom
              </h2>

              <p className="mt-6 max-w-xl font-light text-muted-foreground leading-relaxed">
                BenEd emphasizes hands-on experience, real-world projects, expert mentorship,
                and practical problem-solving to develop industry-ready professionals who thrive
                from day one.
              </p>

              <ul className="mt-8 space-y-4">
                {learning.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="border-l-2 border-green-600 pl-4 text-sm font-medium text-foreground"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900"
            >
              <img
                src={LEARNING_IMAGE}
                alt="Students learning through hands-on, real-world projects"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>


  {/* ======================= EVENT CATEGORIES ======================= */}
      <section className="bg-background py-16 lg:py-20">
             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               <motion.h2
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
               >
               Education for Every Stage
                
               </motion.h2>
     <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base leading-relaxed "
            >
             BenEd welcomes learners from all professional backgrounds and career stages.
            </motion.p>
               <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
                 {disciplines1.map((item, index) => (
                   <motion.div
                     key={item.label}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                     className="group relative aspect-[327/354] overflow-hidden rounded-xl bg-neutral-900"
                   >
                     <img
                       src={item.image}
                       alt={item.label}
                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                     <h3 className="absolute inset-x-0 bottom-0 p-5 text-base font-medium text-white transition-colors md:text-lg group-hover:text-green-600">
                       {item.label}
                     </h3>
                   </motion.div>
                 ))}
               </div>
             </div>
           </section>

      {/* ======================= ENGAGING / CAREER-FOCUSED / PRACTICAL ======================= */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: heading + copy + pillars */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Engaging.<br/> Career-Focused. Practical
              </h2>

              <p className="mt-6 max-w-xl font-light text-muted-foreground leading-relaxed">
                BenEd combines expert-led instruction, practical assignments, project-based
                learning, internships, and continuous mentorship to create an engaging and
                career-focused educational experience.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {approach.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="border-l-2 border-green-600 pl-4"
                  >
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm font-light text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900"
            >
              <img
                src={ENGAGING_IMAGE}
                alt="Learners engaged in a career-focused, practical session"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* ======================= CLOSING CTA ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-4xl font-medium leading-tight text-foreground"
          >
            Build Skills. Advance Careers. Create Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-sm font-light text-muted-foreground md:text-base"
          >
            Join BenEd to gain practical knowledge, industry experience, and professional skills <br/>that prepare you for the opportunities of tomorrow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
            >
              Join BenEd
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
