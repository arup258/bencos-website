"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 165.png"
const HUMAN_AI_IMAGE = "/images/image 166.png"
const TRANSFORMATION_IMAGE = "/images/image 177.png"

// Solution cards — add/edit entries and the grid reflows automatically.
const solutions = [
  { title: "Customer Experience", image: "/images/image 167.png" },
  { title: "Business Process Services", image: "/images/image 168.png" },
  { title: "Artificial Intelligence", image: "/images/image 169.png" },
  { title: "Digital Transformation", image: "/images/image 170.png" },
  { title: "Data & Analytics", image: "/images/image 171.png" },
  { title: "Business Consulting", image: "/images/image 172.png" },
]

// Reasons — alternating rows; even index = image left, odd = image right.
const reasons = [
  {
    title: "Human centered service",
    description:
      "We start with people. Every engagement is designed around the customers, employees and stakeholders whose experience defines your brand.",
    image: "/images/image 173.png",
    imageAlt: "A customer experience team collaborating in an office",
  },
  {
    title: "AI-powered operations",
    description:
      "We embed intelligent automation into the fabric of daily work — freeing teams to focus on judgement, empathy and growth.",
    image: "/images/image 174.png",
    imageAlt: "An operations center with real-time data dashboards",
  },
  {
    title: "Scalable Solutions",
    description:
      "From regional programs to global rollouts, our delivery model scales with confidence, governance and speed.",
    image: "/images/image 175.png",
    imageAlt: "A large modern corporate atrium",
  },
  {
    title: "Business excellence",
    description:
      "Measurable outcomes are the standard. We tie every initiative to the performance metrics that matter to leadership.",
    image: "/images/image 176.png",
    imageAlt: "Executives reviewing performance dashboards in a boardroom",
  },
]

// Chapter cards — image with overlaid label/title; grid reflows automatically.
const chapters = [
  {
    label: "Chapter 01",
    title: "AI-powered customer engagement",
    image: "/images/image 178.png",
  },
  {
    label: "Chapter 02",
    title: "Smarter business operations",
    image: "/images/image 179.png",
  },
  {
    label: "Chapter 03",
    title: "Future-ready organizations",
    image: "/images/image 180.png",
  },
]

export default function Bencos360Page() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A team working with data dashboards in a modern operations center"
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
              className="text-lg font-medium text-white md:text-xl"
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
              className="mt-8 text-3xl sm:text-4xl font-medium text-white md:text-4xl"
            >
              Human Intelligence Meets AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-white/85"
            >
              Bencos360 helps organizations create exceptional customer experiences by combining human expertise, intelligent automation, AI-driven solutions and modern business operations to deliver measurable business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="https://bencos360.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore 360
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= HUMAN MEETS AI ======================= */}
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
                Human Meets AI
              </h2>

              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
               At Bencos360, we combine experienced professionals with intelligent technologies to deliver seamless customer experiences, improve operational efficiency, and help organizations adapt to a rapidly evolving digital world.
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
                src={HUMAN_AI_IMAGE}
                alt="A team reviewing analytics dashboards together"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= OUR SOLUTIONS (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Our solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground leading-relaxed"
          >
            End-to-end services that connect customer experience, operations and intelligent technology across the enterprise.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground md:text-xl">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= WHY BENCOS360 (ALTERNATING) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Why organizations choose Bencos360
          </motion.h2>

          <div className="mt-12 space-y-16 lg:space-y-24">
            {reasons.map((reason, index) => {
              const imageOnLeft = index % 2 === 0
              return (
                <div
                  key={reason.title}
                  className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: imageOnLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900 ${
                      imageOnLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <img
                      src={reason.image}
                      alt={reason.imageAlt}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  {/* Heading + copy */}
                  <motion.div
                    initial={{ opacity: 0, x: imageOnLeft ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={imageOnLeft ? "lg:order-2" : "lg:order-1"}
                  >
                    <h3 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                      {reason.title}
                    </h3>
                    <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= DRIVING DIGITAL TRANSFORMATION ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Driving digital transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-muted-foreground leading-relaxed"
          >
            Organizations today need more than technology. They need intelligent strategies, exceptional customer experiences and trusted partners who understand business transformation.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-10 aspect-[4/3] w-full overflow-hidden bg-neutral-900 sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <img
            src={TRANSFORMATION_IMAGE}
            alt="Business leaders collaborating in a modern glass office"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= FUTURE OF CX (CHAPTERS) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            The future of customer experience
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {chapters.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">{item.label}</h3>
                  <p className="mt-1 text-sm text-white/80">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CLOSING CTA ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-2.5xl"
          >
             Create better experiences. Build smarter businesses.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
            Partner with Bencos360 to transform customer experiences, streamline operations and accelerate digital innovation through intelligent business solutions.
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
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
