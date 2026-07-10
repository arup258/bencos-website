"use client"

import Link from "next/link"
import { motion } from "framer-motion"
// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/hero-lab.png"
const JOURNEY_IMAGE = "/images/twine-dna.png"                                                                                                                                                                                                                                             
const SERVE_IMAGE = "/images/bencos-health.png"                                                                                                                                                                                                               
const MILESTONES_IMAGE = "/images/hero-lab.jpg"                                                                                                                                                                                                                                             
const DISCOVERIES_IMAGE = "/images/image 74.png"                                                                                                                                                                                                                                              

const milestones = [                                                                                                                                              
  {                                                                                                                                             
    year: "2012",                                                                                                                                             
    title: "Founded",                                                                                                                                             
    description: "Bencos established with a vision for genomic-driven research.",
  },
  {
    year: "2015",
    title: "Bioinformatics Lab",
    description: "Launched dedicated analytics and computational biology unit.",
  },
  {
    year: "2018",
    title: "Clinical Genomics",
    description: "Expanded into diagnostic and clinical genomics services.",
  },
  {
    year: "2021",
    title: "AI Platform",
    description: "Introduced AI-driven multiomics and discovery workflows.",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Serving 200+ clients across research and healthcare worldwide.",
  },
]

// "Who We Serve" cards — swap the image paths for the real photos when ready.
const serveCards = [
  { title: "Pharmaceutical Companies", image: "/images/image 62.png" },
  { title: "Biotechnology Companies", image: "/images/image 61.png" },
  { title: "Hospitals", image: "/images/image 63.png" },
  { title: "Research Organizations", image: "/images/image 65.png" },
  { title: "Universities", image: "/images/image 66.png" },
  { title: "Healthcare Providers", image: "/images/image 67.png" },
  { title: "Government Research Programs", image: "/images/image 68.png" },
  { title: "Clinical Laboratories", image: "/images/image 69.png" },
]

// Alternating commitment rows — swap the image paths for the real photos.
const commitments = [
  {
    title: "Our Global Commitment",
    image: "/images/image 70.png",
    paragraphs: [
      "Our commitment extends beyond delivering research services. We strive to build long-term partnerships based on trust, scientific excellence, innovation and ethical responsibility.",
      "Every project reflects our dedication to improving healthcare through science and technology.",
    ],
  },
  {
    title: "Driven by Research Excellence",
    image: "/images/image 72.png",
    paragraphs: [
      "Innovation is at the heart of everything we do. Our multidisciplinary expertise enables us to solve complex biological challenges while maintaining the highest standards of scientific integrity, quality and precision.",
    ],
  },
  {
    title: "Transforming Healthcare",
    image: "/images/image 73.png",
    paragraphs: [
      "Through our healthcare ecosystem and advanced scientific capabilities, we support the future of precision medicine, genomics, digital healthcare and personalized treatment approaches that improve patient care across the globe.",
    ],
  },
]

export default function WhoWeArePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Scientists working in a Bencos research laboratory"
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
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
              className="mt-8 text-3xl sm:text-4xl font-medium text-white md:text-4xl"
            >
              Advancing Science.
              <br />
              Transforming Healthcare.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-white/85"
            >
              Accelerating scientific discovery through genomics, bioinformatics, AI, and precision healthcare.
            </motion.p>
            
          </div>
        </div>
      </section>

      {/* ======================= OUR JOURNEY (INTRO) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900"
            >
              <img
                src={JOURNEY_IMAGE}
                alt="Bencos scientist analysing genomic data in the laboratory"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Right: heading + copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Our Journey
              </h2>

              <p className="mt-8 text-muted-foreground leading-relaxed">
                Bencos was established with the vision of bridging biology, technology and
                innovation.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From advanced genomics research to AI-powered bioinformatics and precision
                healthcare, our mission has always been to create meaningful scientific
                impact.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Today, we continue to empower researchers, healthcare professionals and
                organizations with intelligent research solutions that drive innovation and
                improve lives worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= OUR JOURNEY (MILESTONES) ======================= */}
      <section id="journey" className="relative overflow-hidden bg-background py-16 lg:py-20">
        {/* Faint background image */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src={MILESTONES_IMAGE}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent"
          >
            Our Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-5xl text-balance"
          >
            A decade of milestones in life sciences.
          </motion.h2>

          <div className="relative mt-20">
            {/* Animated connecting line (desktop) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-border lg:block"
            />

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                      delay: 0.3 + index * 0.15,
                    }}
                    className="relative z-10 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background"
                  />

                  {/* Copy */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  >
                    <p className="mt-5 text-sm font-semibold text-accent">{milestone.year}</p>
                    <h3 className="mt-2 text-base font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
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
                Who We Serve
              </h2>

              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
               Bencos partners with leading organizations across the global life sciences and healthcare ecosystem—delivering scientific rigor, technical depth and operational excellence at every collaboration.
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

      {/* ======================= WHO WE SERVE — CARDS ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serveCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative aspect-[449/544] overflow-hidden rounded-md"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 text-lg font-medium text-white">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= COMMITMENT (ALTERNATING) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {commitments.map((item, index) => {
              const imageLeft = index % 2 === 1
              return (
                <div
                  key={item.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, x: imageLeft ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                      {item.title}
                    </h2>
                    {item.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={paragraph}
                        className={`${pIndex === 0 ? "mt-6" : "mt-4"} max-w-md text-sm text-muted-foreground leading-relaxed`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: imageLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-900 ${
                      imageLeft ? "lg:order-first" : ""
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= DISCOVERIES BANNER ======================= */}
      <section className="relative min-h-[480px] overflow-hidden lg:min-h-[560px]">
        <div className="absolute inset-0">
          <img
            src={DISCOVERIES_IMAGE}
            alt="Sunrise over a global research campus"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-7xl items-center px-4 py-20 lg:min-h-[560px] lg:px-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-medium leading-tight text-white md:text-5xl"
            >
              Discoveries that shape generations.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-lg text-sm leading-relaxed text-white/85 md:text-base"
            >
              As science continues to evolve, Bencos will remain dedicated to pushing the
              boundaries of research and innovation. Our aspiration is to become a globally
              trusted partner that transforms ideas into discoveries and discoveries into
              meaningful healthcare solutions for future generations.
            </motion.p>
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
            className="text-2xl font-semibold text-foreground md:text-3xl text-balance"
          >
            Creating Meaningful Impact Through Science
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
        At Bencos, we believe scientific innovation should improve lives, strengthen healthcare systems and inspire the next generation of discovery.
Our journey continues with one purpose—to create a healthier, smarter and more sustainable future through science.
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
              className="inline-flex items-center justify-center rounded-full bg-green-700 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              Explore Our Ecosystem
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
