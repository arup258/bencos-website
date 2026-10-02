"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 106.webp"
const INTRO_IMAGE = "/images/image 461.png"
const CONNECTED_IMAGE = "/images/image 104.webp"
const PURPOSE_IMAGE = "/images/image 98.webp"
const PILLARS_IMAGE = "/images/image 95.webp"
const VISION_IMAGE = "/images/image 104.webp"
const GATC_IMAGE = "/images/image 115.webp"
const IMPACT_IMAGE = "/images/image 116.webp"
const FUTURE_IMAGE = "/images/hero-lab-1.webp"

// Alternating content sections — add/edit entries and the layout flips automatically.
const ecosystemSections = [
  {
    heading: ["One Connected", "Ecosystem"],
    paragraphs: [
      "The Bencos ecosystem connects research, healthcare,\ntechnology, customer experience, and scientific collaboration to\ncreate lasting value for people, organizations, and communities\nworldwide.",
    ],
    image: "/images/image 108.webp",
    imageAlt: "Bencos scientists collaborating around a shared workstation",
  },
  {
    heading: ["Bencos Research Solutions"],
    paragraphs: [
      "Bencos Research Solutions is the scientific foundation of the\necosystem, delivering advanced research services across\ngenomics, bioinformatics, multi-omics, artificial intelligence,\nand scientific consulting.",
      "By transforming complex biological data into meaningful insights,\nwe empower researchers, biotechnology companies,\npharmaceutical organizations, and academic institutions to\naccelerate scientific discovery.",
    ],
    image: "/images/image 109.webp",
    imageAlt: "Bencos teams collaborating across research and technology",
  },
  {
    heading: ["Bencos Healthcare"],
    paragraphs: [
      "Bencos Healthcare extends the ecosystem into the clinic — delivering\nprecision medicine, molecular diagnostics, clinical genomics,\nand digital healthcare services that translate scientific\nadvances into measurable patient outcomes.",
      "By combining advanced diagnostics with personalized care\npathways, we help clinicians and health systems deliver care\nthat is more accurate, more proactive, and more human.",
    ],
    image: "/images/image 110.webp",
    imageAlt: "Advanced technology and data systems powering the Bencos ecosystem",
  },
  {
    heading: ["Bencos360"],
    paragraphs: [
      "Bencos360 empowers businesses with intelligent customer experience, AI-enabled digital operations, and scalable enterprise solutions. ",
      "By combining human expertise with advanced technology, it helps organizations improve customer engagement, streamline operations, and accelerate sustainable business growth.",
    ],
    image: "/images/image 111.webp",
    imageAlt: "The global impact of the Bencos connected ecosystem",
  },
]

// Platform cards — add/edit entries; include `href` to show a "Read more" link.
const platforms = [
  {
    name: "TWINE",
    description:
      "AI-powered genomics platform transforming sequencing data into accurate and clinically actionable intelligence.",
    image: "/images/image 112.webp",
    href: "https://twine.myneuron.in",
    external: true,
  },
  {
    name: "MyNeuron",
    description:
      "Research collaboration and scientific knowledge platform connecting researchers, institutions, and innovation teams.",
    image: "/images/image 113.webp",
    href: "/myneuron",
    external: false,
  },
  {
    name: "BREF",
    description:
      "Scientific knowledge and research intelligence platform designed to support learning, discovery, and evidence-driven decision making.",
    image: "/images/image 114.webp",
    href: "/bref",
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
              className="mt-8 text-3xl sm:text-4xl md:text-4xl font-elegant thin tracking-wide text-white leading-[1.25]"
            >
              One Ecosystem
              <br />
              Endless Possibilities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              The Bencos ecosystem unites research, healthcare, technology, and collaboration to create meaningful global impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ======================= INTRO STATEMENT ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            One Vision<br/> Multiple Innovations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-5xl whitespace-pre-line text-muted-foreground leading-relaxed"
          >
            {"Every organization within the Bencos ecosystem shares one common purpose—to accelerate scientific discovery,\nimprove healthcare, develop intelligent technologies, and create meaningful value through collaboration"}
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
                      className={`${pIndex === 0 ? "mt-8" : "mt-4"} max-w-xl whitespace-pre-line text-muted-foreground leading-relaxed`}
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
          <div className="mx-auto max-w-7xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-3xl font-medium leading-tight text-foreground md:text-5xl"
            >
              Intelligent Platforms, Built for Discovery.
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
          <div className="mx-auto max-w-7xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
            >
              Innovation Grows Through Collaboration
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-6 text-muted-foreground leading-relaxed"
            >
              The Bencos ecosystem supports global scientific and business communities through conferences, workshops, knowledge exchange,<br/> collaborative research, and enterprise partnership programs that span genomics, life sciences, and digital transformation.

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
              <h2 className="text-3xl sm:text-5xl font-medium leading-tight text-foreground md:text-4xl">
                Genomics Advancements
                <br />
                Through Convergence
              </h2>

              <p className="mt-8 max-w-xl whitespace-pre-line text-muted-foreground leading-relaxed">
                {"A flagship scientific conference connecting researchers, clinicians, industry leaders, innovators, and enterprise decision-makers from around the world to advance genomics, multi-omics, precision medicine, and the future of healthcare and life-sciences business."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= GREATER IMPACT ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Together We Create Greater Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-6xl whitespace-pre-line text-muted-foreground leading-relaxed"
          >
            {"By connecting research, healthcare, technology, customer experience, and scientific collaboration, the Bencos ecosystem creates\nlasting value for people, organizations, and communities around the world."}
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
            Building the Future Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 whitespace-pre-line text-sm text-muted-foreground md:text-base"
          >
            {"Every breakthrough begins with collaboration. Explore how the Bencos ecosystem\nis shaping the future of life sciences, healthcare, technology, and global\ninnovation."}
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


