"use client"

import Link from "next/link"
import { motion } from "framer-motion"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 440.png"
const FUTURE_IMAGE = "/images/image 441.png"
const PURPOSE_IMAGE = "/images/image 442.png"
const VISION_IMAGE = "/images/image 27.png"
const COMMITMENT_IMAGE = "/images/image 443(1).png"
const DISCOVERIES_IMAGE = "/images/image 444.png"

const visionPoints = [
  "Connect researchers, clinicians and innovators worldwide",
  "Foster open knowledge sharing and collaboration",
  "Support education and the next generation of scientists",
  "Build inclusive, cross-disciplinary partnerships",
  "Advance science and healthcare for lasting impact",
]

export default function CommunityPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="The Bencos community of researchers and clinicians"
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
             Sustainability
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-white/85"
            >
              Driving scientific innovation responsibly while creating long-term value for people, healthcare, and the planet.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ======================= BUILDING TOGETHER ======================= */}
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
                Our Commitment<br/> to
                 Sustainability
              </h2>

              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
                At Bencos, sustainability means advancing science responsibly. We integrate ethical innovation, environmentally conscious practices, and digital transformation across our research and operations to reduce impact, create lasting value, and build a healthier future for people and the planet.
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
                src={FUTURE_IMAGE}
                alt="Bencos community collaborating in a life sciences laboratory"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= PURPOSE STATEMENT ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-2xl"
          >
            Every scientific breakthrough should contribute to a healthier world while protecting the environment for future generations.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-10 aspect-[4/3] w-full overflow-hidden bg-neutral-900 sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <img
            src={PURPOSE_IMAGE}
            alt="Bencos researchers collaborating in the laboratory"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      

      {/* ======================= A COMMITMENT THAT DRIVES US ======================= */}
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
                Innovation with 
                <br />
                Responsibility
              </h2>

              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
                At Bencos, innovation is driven by responsibility. We combine advanced science, technology, and sustainable practices to deliver smarter healthcare solutions while collaborating with global partners to create lasting impact for people, science, and the environment.
              </p>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900"
            >
              <img
                src={COMMITMENT_IMAGE}
                alt="Members of the Bencos community collaborating"
                className="h-full w-full object-cover"
              />
            </motion.div>
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
              Stronger together, for generations.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-lg text-sm leading-relaxed text-white/85 md:text-base"
            >
              Our community is committed to advancing research and innovation, transforming
              ideas into discoveries and discoveries into better healthcare for the future.
            </motion.p>
          </div>
        </div>
      </section>

      
    </>
  )
}
