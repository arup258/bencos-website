"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Hero background image — swap the src to change it.
const HERO_IMAGE = "/images/image 502(1).png"

// Strategic focus areas — numbered cards. Swap images/copy as needed.
const focusAreas = [
  {
    title: "Innovation",
    description:
      "Advancing scientific and digital frontiers through disciplined research and applied engineering.",
    image: "/images/image 582.png",
  },
  {
    title: "Healthcare",
    description:
      "Partnering with clinicians and life-science leaders to translate discovery into patient outcomes.",
    image: "/images/image 583.png",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Building responsible, domain-aware AI systems that enhance human decision-making at scale.",
    image: "/images/image 584.png",
  },
  {
    title: "Enterprise Technology",
    description:
      "Modernizing the digital core of organizations with resilient, secure and interoperable platforms.",
    image: "/images/image 586.png",
  },
  {
    title: "Scientific Research",
    description:
      "Investing in laboratories, methods and talent that expand the boundaries of applied knowledge.",
    image: "/images/image 587.png",
  },
  {
    title: "Global Expansion",
    description:
      "Extending presence and partnerships across strategic regions to serve customers worldwide.",
    image: "/images/image 585.png",
  },
  {
    title: "Education",
    description:
      "Cultivating the next generation of scientists, technologists and leaders through learning ecosystems.",
    image: "/images/image 599.png",
  },
  {
    title: "Sustainability",
    description:
      "Designing operations, products and partnerships that create lasting environmental and social value.",
    image: "/images/image 588.png",
  },
]

// Core principles cards. Swap images/copy as needed.
const principles = [
  {
    title: "Innovation",
    description: "Continuously advancing science and technology to shape what comes next.",
    image: "/images/image 600.png",
  },
  {
    title: "Integrity",
    description: "Building trust through ethics, transparency and accountability in every decision.",
    image: "/images/image 601.webp",
  },
  {
    title: "Collaboration",
    description:
      "Working together — across disciplines and borders — to solve complex global challenges.",
    image: "/images/image 602.png",
  },
  {
    title: "Excellence",
    description:
      "Delivering exceptional quality across research, healthcare and enterprise solutions.",
    image: "/images/image 603.png",
  },
]

export default function Vision2030Page() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A forward-looking vision for 2030"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-sm md:text-xl font-light tracking-tight antialiased"
            >
              Who we are
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
              Vision 2030
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
             By 2030, Bencos aims to become a globally recognized innovation ecosystem advancing research, healthcare, AI, digital platforms, education, and business solutions to create lasting global impact.
            </motion.p>

            
          </div>
        </div>
      </section>

      {/* ======================= STRATEGIC FOCUS AREAS ======================= */}
      <section id="focus-areas" className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Strategic priorities for 2030
          </motion.h2> */}

          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold text-green-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-foreground md:text-lg">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CORE PRINCIPLES ======================= */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Our Core Principles.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base"
          >
            Five convictions shape how we build, partner and lead — expressed in every project,
            every laboratory and every conversation with the customers we serve.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-foreground md:text-lg">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 {/* ======================= CLOSING CTA ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Creating Impact
            <br />
            Beyond Innovation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-muted-foreground leading-relaxed"
          >
            Partner with Bencos to shape the future of science, healthcare, technology, and<br/>
            enterprise through trusted collaboration and continuous innovation
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
               Explore Industry we serve
            </Link>
          </motion.div>
        </div>
      </section>






    </>
  )
}
