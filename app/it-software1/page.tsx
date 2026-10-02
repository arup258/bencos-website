"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

// Section image lives in /public/images — swap the src below to change it.
const HERO_IMAGE = "/images/image 462.webp"

// Service cards — image with overlaid title/description. Swap images as needed.
const services = [
  {
    title: "Software Engineering",
    description:
      "Build scalable enterprise software and custom business applications designed to improve efficiency, collaboration, and long-term business growth.",
    image: "/images/image 463.png",
  },
  {
    title: "Web & Mobile Development",
    description:
      "Create responsive websites, enterprise portals, customer platforms, and mobile applications with exceptional user experiences.",
    image: "/images/image 464.png",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Deliver secure cloud migration, enterprise hosting, infrastructure modernization, backup solutions, disaster recovery, and scalable cloud environments.",
    image: "/images/image 465.png",
  },
  {
    title: "Enterprise Applications",
    description:
      "Develop ERP systems, CRM platforms, workflow management solutions, API integrations, and enterprise business applications.",
    image: "/images/image 466.png",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Implement CI/CD pipelines, infrastructure management, deployment workflows, monitoring, and enterprise DevOps practices.",
    image: "/images/image 467.png",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect enterprise systems through governance, compliance, identity management, network security, and cyber resilience.",
    image: "/images/image 468.png",
  },
]

// Industries shown as check-mark pills (ordered to flow left→right across two columns).
const industries = [
  "Healthcare",
  "Finance",
  "Insurance",
  "Education",
  "Manufacturing",
  "Retail",
  "Government",
  "Technology",
]

// Image for the "Trusted across industries" section — swap as needed.
const TRUSTED_IMAGE = "/images/image 469.webp"

// Capabilities — image top, title below. Swap images as needed.
const capabilities = [
  { title: "Cloud Computing", image: "/images/image 470.png" },
  { title: "Enterprise Software", image: "/images/image 471.png" },
  { title: "Web Development", image: "/images/image 472.png" },
  { title: "Mobile Development", image: "/images/image 473.png" },
  { title: "DevOps", image: "/images/image 474.png" },
  { title: "Cybersecurity", image: "/images/image 475.png" },
  { title: "API Integration", image: "/images/image 476.png" },
  { title: "Database Engineering", image: "/images/image 478.png" },
]

export default function ITSoftware1Page() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Software engineers collaborating on a digital platform"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
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
              What we do
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
              className="mt-8 text-3xl sm:text-4xl md:text-4xl font-elegant thin tracking-wide text-white leading-[1.25]"
            >
             Enterprise IT & Software
              <br />
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
              Building secure, scalable, and future-ready software solutions that accelerate digital transformation and business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

       {/* ======================= OUR SERVICES (GRID) ======================= */}
            <section className="bg-background pt-16 pb-24 lg:pt-20 lg:pb-32">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="mt-2 text-center text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
                >
                  A complete stack of enterprise software services
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mx-auto mt-4  max-w-6xl text-center text-muted-foreground leading-relaxed"
                >
                  From development and cloud to security and operations, Bencos360 delivers the full engineering spectrum <br />required to run mission-critical enterprise platforms.
                </motion.p>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                      className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 pb-16">
                        <h3 className="flex min-h-[3.5rem] items-end text-xl font-semibold leading-tight text-white transition-colors group-hover:text-[#4ADE76] md:min-h-[4rem] md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 line-clamp-4 min-h-[5.75rem] text-sm leading-relaxed text-white/80">
                          {item.description}
                        </p>
                      </div>
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
                Trusted across regulated<br/>

                and high-growth industries
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

      {/* ======================= CAPABILITIES (GRID) ======================= */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-2  text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Deep engineering across
            <br />
            the enterprise stack.
          </motion.h2>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground md:text-lg">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Centered CTA */}
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 text-center lg:px-8 lg:pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-foreground md:text-3xl text-balance"
          >
            Build Your Next Digital Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
            Partner with Bencos360 to create secure, scalable, and <br/> enterprise-grade software solutions.
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
              Start Your Journey
            </Link>
          </motion.div>
        </div>
    </>


  )
}
