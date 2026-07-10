"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 445.png"
const INTRO_IMAGE = "/images/image 451.png"
const COLLAB_IMAGE = "/images/image 450.png"
const IMPACT_IMAGE = "/images/image 449.png"

// Alternating content sections — add/edit entries and the layout flips automatically.
const sustainabilitySections = [
  
 
  {
    heading: ["Responsible Scientific Innovation"],
    paragraphs: [
      "Bencos advances scientific discovery through responsible research practices, ethical data management, and technologies designed to improve healthcare while maintaining the highest standards of quality, transparency, and integrity.",
    ],
    image: "/images/image 447.png",
    imageAlt: "Clean technology powering sustainable research",
  },
  {
    heading: ["Digital Transformation for a Better Tomorrow"],
    paragraphs: [
      "By embracing artificial intelligence, digital platforms, and intelligent automation, Bencos develops sustainable solutions that improve efficiency, reduce complexity, and accelerate innovation across life sciences and healthcare.",
    ],
    image: "/images/image 448.png",
    imageAlt: "A thriving natural landscape representing lasting impact",
  },
]

// Initiative cards — add/edit entries; include `href` to show a "Read more" link.
const initiatives = [
  {
    name: "Green Laboratories",
    description:
      "Energy-efficient facilities, responsible resource use, and greener lab practices that reduce our environmental footprint.",
    image: "/images/image 81.png",
    href: "",
    external: false,
  },
  {
    name: "Responsible Computing",
    description:
      "Low-impact, scalable infrastructure and AI workflows engineered to deliver more science with fewer resources.",
    image: "/images/image 82.png",
    href: "",
    external: false,
  },
  {
    name: "Community Wellbeing",
    description:
      "Programs that support the health, education, and wellbeing of the communities our science is meant to serve.",
    image: "/images/image 87.png",
    href: "",
    external: false,
  },
]

export default function SustainabilityPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A modern research campus with green roofs and solar panels"
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
              Building a Sustainable Future
              <br />
              Through Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-white/85"
            >
              Driving sustainable impact through responsible science and ethical innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ======================= INTRO STATEMENT ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
           Our Commitment to Sustainability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-muted-foreground leading-relaxed"
          >
            We believe that scientific innovation should create lasting value for people, communities, and the environment. Every solution we develop is guided by responsibility, integrity, and a vision for a healthier and more sustainable future.
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
            src={INTRO_IMAGE}
            alt="A thriving natural landscape representing our commitment to the planet"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= ALTERNATING CONTENT SECTIONS ======================= */}
      {sustainabilitySections.map((section, index) => {
        const imageOnLeft = index % 2 === 1
        return (
          <section key={section.heading.join(" ")} className="bg-background py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
                    src={section.image}
                    alt={section.imageAlt}
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
                  <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                    {section.heading[0]}
                    <br />
                    {section.heading[1]}
                  </h2>

                  {section.paragraphs.map((para, pIndex) => (
                    <p
                      key={pIndex}
                      className={`${pIndex === 0 ? "mt-8" : "mt-4"} max-w-md text-muted-foreground leading-relaxed`}
                    >
                      {para}
                    </p>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      

      

      {/* ======================= GREATER IMPACT ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Empowering People and Communities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-muted-foreground leading-relaxed"
          >
            Sustainability extends beyond technology. We support scientific education, collaborative research, knowledge sharing, and community engagement to empower researchers, healthcare professionals, students, and future innovators.
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
            src={IMPACT_IMAGE}
            alt="A sustainable research campus surrounded by nature"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= GROWING RESPONSIBLY ======================= */}
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
                Growing Responsibly
              </h2>
              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
                As the Bencos ecosystem grows, we remain committed to responsible
                business practices, environmental awareness, ethical governance, and
                long-term partnerships that create positive impact across industries
                and communities.
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
                src={COLLAB_IMAGE}
                alt="Bencos laboratory advancing science responsibly"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= INNOVATION WITH PURPOSE ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Innovation with Purpose
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-muted-foreground leading-relaxed"
          >
            Our vision is to build a future where scientific progress, technological
            innovation, and sustainable development work together to improve lives and
            create lasting global impact.
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
            src={INTRO_IMAGE}
            alt="Bencos scientists collaborating in a research laboratory"
            className="h-full w-full object-cover"
          />
        </motion.div>
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
            Building Tomorrow, Responsibly
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
           Together with our partners, researchers, healthcare professionals, and communities, Bencos is shaping a future driven by innovation, responsibility, and sustainable growth.
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
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
