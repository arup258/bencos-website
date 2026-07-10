"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 106.png"
const INTRO_IMAGE = "/images/image 107.png"
const CONNECTED_IMAGE = "/images/image 104.png"
const PURPOSE_IMAGE = "/images/image 98.png"
const PILLARS_IMAGE = "/images/image 95.png"
const VISION_IMAGE = "/images/image 104.png"
const GATC_IMAGE = "/images/image 115.png"
const IMPACT_IMAGE = "/images/image 116.png"
const FUTURE_IMAGE = "/images/hero-lab-1.png"

// Alternating content sections — add/edit entries and the layout flips automatically.
const ecosystemSections = [
  {
    heading: ["One connected", "ecosystem"],
    paragraphs: [
      "The Bencos ecosystem connects research, healthcare, technology, customer experience, and scientific collaboration to create lasting value for people, organizations, and communities worldwide.",
    ],
    image: "/images/image 108.png",
    imageAlt: "Bencos scientists collaborating around a shared workstation",
  },
  {
    heading: ["Bencos Research Solutions"],
    paragraphs: [
      "Bencos Research Solutions is the scientific foundation of the ecosystem, delivering advanced research services across genomics, bioinformatics, multi-omics, artificial intelligence,and scientific consulting.",
      "By transforming complex biological data into meaningful insights, we empower researchers, biotechnology companies, pharmaceutical organizations, and academic institutions to accelerate scientific discovery.",
    ],
    image: "/images/image 109.png",
    imageAlt: "Bencos teams collaborating across research and technology",
  },
  {
    heading: ["Bencos Health"],
    paragraphs: [
      "Bencos Health extends the ecosystem into the clinic — delivering precision medicine, molecular diagnostics, clinical genomics, and digital healthcare services that translate scientific advances into measurable patient outcomes.",
      "By combining advanced diagnostics with personalized care pathways, we help clinicians and health systems deliver care that is more accurate, more proactive, and more human.",
    ],
    image: "/images/image 110.png",
    imageAlt: "Advanced technology and data systems powering the Bencos ecosystem",
  },
  {
    heading: ["Bencos360"],
    paragraphs: [
      "Bencos Research Solutions is the scientific foundation of the ecosystem, delivering advanced research services across genomics, bioinformatics, multi-omics, artificial intelligence, and scientific consulting.",
      "By transforming complex biological data into meaningful insights, we empower researchers, biotechnology companies, pharmaceutical organizations, and academic institutions to accelerate scientific discovery.",
    ],
    image: "/images/image 111.png",
    imageAlt: "The global impact of the Bencos connected ecosystem",
  },
]

// Platform cards — add/edit entries; include `href` to show a "Read more" link.
const platforms = [
  {
    name: "TWINE",
    description:
      "AI-powered genomics platform transforming sequencing data into accurate and clinically actionable intelligence.",
    image: "/images/image 112.png",
    href: "https://twine.myneuron.in",
    external: true,
  },
  {
    name: "MyNeuron",
    description:
      "Research collaboration and scientific knowledge platform connecting researchers, institutions, and innovation teams.",
    image: "/images/image 113.png",
    href: "/myneuron",
    external: false,
  },
  {
    name: "BREF",
    description:
      "Scientific knowledge and research intelligence platform designed to support learning, discovery, and evidence-driven decision making.",
    image: "/images/image 114.png",
    href: "",
    external: false,
  },
]

const pillars = [
  "Scientific research and next-generation discovery",
  "Precision healthcare and clinical insight",
  "Intelligent technology and data platforms",
  "Seamless customer and researcher experience",
  "Global scientific collaboration and partnerships",
]

export default function OurEcosystemPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Bencos researchers walking through a connected campus at sunset"
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
              One Ecosystem.
              <br />
              Endless Possibilities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-white/85"
            >
              The Bencos ecosystem unites research, healthcare, technology, and collaboration to create meaningful global impact.
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
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            One Vision. Multiple Innovations.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-muted-foreground leading-relaxed"
          >
            Every organization within the Bencos ecosystem shares one common purpose—to accelerate scientific discovery, improve healthcare, develop intelligent technologies, and create meaningful value through collaboration
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
            alt="The Bencos connected ecosystem campus"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= ALTERNATING CONTENT SECTIONS ======================= */}
      {ecosystemSections.map((section, index) => {
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

      {/* ======================= INTELLIGENT PLATFORMS ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
            >
              Intelligent platforms, built for discovery.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-muted-foreground leading-relaxed"
            >
              Our intelligent platforms simplify research, enable collaboration, and accelerate scientific discovery across the Bencos ecosystem.
            </motion.p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900">
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                  {platform.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {platform.description}
                </p>
                {platform.href &&
                  (platform.external ? (
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-green-600"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <Link
                      href={platform.href}
                      className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-green-600"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= COLLABORATION / GATC ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
            >
              Innovation grows through collaboration.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-muted-foreground leading-relaxed"
            >
              The Bencos ecosystem supports global scientific communities through conferences, workshops, knowledge exchange, and collaborative research initiatives.
            </motion.p>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900"
            >
              <img
                src={GATC_IMAGE}
                alt="Attendees at the GATC Genomics Analysis & Technology Conference"
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
                GATC — Genomics Analysis &amp; Technology Conference
              </h2>

              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
                A flagship scientific conference connecting researchers, clinicians, industry leaders, and innovators from around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= GREATER IMPACT ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Together we create greater impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-muted-foreground leading-relaxed"
          >
        By connecting research, healthcare, technology, customer experience, and scientific collaboration, the Bencos ecosystem creates lasting value for people, organizations, and communities around the world.
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
            alt="Bencos research campus at sunset representing collective impact"
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
            Building the future together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
            Every breakthrough begins with collaboration. Explore how the Bencos ecosystem is shaping the future of life sciences, healthcare, technology, and global innovation.
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
