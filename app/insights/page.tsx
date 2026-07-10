"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 225.png"
const EVENTS_IMAGE = "/images/image 236.png"
const INSPIRED_IMAGE = "/images/image 241.png"

// Featured stories carousel — image-top cards; every card reveals "Read more" on hover.
const stories = [
  {
    title: "Clinical Genomics Success",
    description: "How a national hospital network reduced diagnostic timelines from weeks to days using Bencos clinical genomics.",
    image: "/images/image 233.png",
    href: "/clinical-applications",
  },
  {
    title: "AI in Bioinformatics",
    description: "Deploying AI-assisted variant interpretation across large-scale sequencing pipelines.",
    image: "/images/image 234.png",
    href: "/twine",
  },
  {
    title: "Precision Medicine",
    description: "Rolling out genomics-guided treatment pathways for oncology and rare disease programs.",
    image: "/images/image 235.png",
    href: "/clinical-applications",
  },
  {
    title: "Multi-omics at Scale",
    description: "Integrating genomics, transcriptomics and proteomics for deeper biological insight.",
    image: "/images/image 236.png",
    href: "/life-sciences",
  },
]

// Event types — add/edit entries and the grid reflows automatically.
const eventTypes = [
  { title: "Scientific Conferences", image: "/images/image 237.png" },
  { title: "Research Workshops", image: "/images/image 238.png" },
  { title: "Industry Events", image: "/images/image 239.png" },
  { title: "Knowledge Exchange", image: "/images/image 240.png" },
]

// Perspectives — author-bylined thought leadership; grid reflows automatically.
const perspectives = [
  {
    title: "The Future of AI in Healthcare",
    author: "Dr. Amelia Reyes",
    image: "/images/image 241.png",
  },
  {
    title: "Next Generation Genomics",
    author: "Prof. Marcus Chen",
    image: "/images/image 242.png",
  },
  {
    title: "Building Intelligent Research Platforms",
    author: "Ravi Menon",
    image: "/images/image 243.png",
  },
]

// Content-type carousel — image with overlaid title/subtitle; the slider scrolls.
const contentTypes = [
  { title: "Publication", subtitle: "Genomics Research", image: "/images/image 229.png" },
  { title: "White Paper", subtitle: "Bioinformatics", image: "/images/image 230.png" },
  { title: "Research", subtitle: "Clinical Genomics", image: "/images/image 231.png" },
  { title: "Case Study", subtitle: "Multi-omics", image: "/images/image 232.png" },
]

// Topic cards — add/edit entries; every card reveals "Read more" on hover.
const topics = [
  {
    title: "Artificial Intelligence",
    description: "How artificial intelligence is accelerating genomic interpretation and precision medicine.",
    image: "/images/image 226.png",
    href: "/ai-data-analytics",
  },
  {
    title: "Healthcare",
    description: "How genomics, diagnostics, and digital technologies are changing patient care.",
    image: "/images/image 227.png",
    href: "/clinical-applications",
  },
  {
    title: "Conference",
    description: "Highlights from Bencos' flagship scientific conference connecting researchers and innovators worldwide.",
    image: "/images/image 228.png",
    href: "/gatc",
  },
]

export default function InsightsPage() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const storiesRef = useRef<HTMLDivElement>(null)

  const scrollCards = (direction: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: el.clientWidth * 0.9 * direction, behavior: "smooth" })
  }

  const scrollStories = (direction: number) => {
    const el = storiesRef.current
    if (!el) return
    el.scrollBy({ left: el.clientWidth * 0.9 * direction, behavior: "smooth" })
  }

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="An open book and laptop on a desk in a calm, thoughtful workspace"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-medium uppercase tracking-[0.15em] text-white"
            >
              Insights
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
              Knowledge That
              <br />
              Drives Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-white/85"
            >
              Discover the latest insights in science, healthcare, and technology shaping the future of innovation across the Bencos ecosystem.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ======================= TOPICS (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Featured Stories
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {topics.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group/card"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <Link
                  href={item.href || "/newsroom"}
                  className="group/more mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground opacity-0 transition-all duration-300 hover:text-green-600 group-hover/card:opacity-100"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/more:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CONTENT TYPES (CAROUSEL) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
            >
              Powering Every Stage of Scientific Innovation
            </motion.h2>

            {/* Arrow controls */}
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => scrollCards(-1)}
                aria-label="Previous"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-green-600"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCards(1)}
                aria-label="Next"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-green-600"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {contentTypes.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/5] w-[85%] shrink-0 snap-start overflow-hidden rounded-xl bg-neutral-900 sm:w-[45%] lg:w-[calc(33.333%-1rem)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-green-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= FEATURED STORIES (CAROUSEL) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
            >
              Case Studies
            </motion.h2>

            {/* Arrow controls */}
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => scrollStories(-1)}
                aria-label="Previous"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-green-600"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollStories(1)}
                aria-label="Next"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-green-600"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable cards */}
          <div
            ref={storiesRef}
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {stories.map((item) => (
              <div
                key={item.title}
                className="group/card w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <Link
                  href={item.href || "/newsroom"}
                  className="group/more mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground opacity-0 transition-all duration-300 hover:text-green-600 group-hover/card:opacity-100"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/more:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= EVENTS & CONFERENCES ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Events &amp; Conferences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground leading-relaxed"
          >
           Discover upcoming conferences, workshops, webinars, and scientific events organized across the Bencos ecosystem.
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
            src={EVENTS_IMAGE}
            alt="A speaker addressing a full auditorium at a Bencos conference"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= GATC (EVENT TYPES GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            GATC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground leading-relaxed"
          >
            The Bencos flagship conference bringing together scientists, clinicians, and technologists advancing the future of genomics.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {eventTypes.map((item, index) => (
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

      {/* ======================= PERSPECTIVES (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Perspectives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground leading-relaxed"
          >
            Thought leadership from Bencos scientists, healthcare experts, researchers, and technology leaders discussing the future of life sciences, healthcare, AI, and innovation.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {perspectives.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">By {item.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= INSPIRED STATEMENT ======================= */}
      <section className="bg-background pt-16 lg:pt-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Inspired by Discovery. Driven by Knowledge.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-muted-foreground leading-relaxed"
          >
            Every insight shared by Bencos reflects our commitment to advancing science, improving healthcare, and empowering innovation through collaboration, research, and technology.
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
            src={INSPIRED_IMAGE}
            alt="Scientists collaborating over a mobile device in the laboratory"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Centered CTA */}
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-16 text-center lg:px-8 lg:pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-foreground md:text-3xl text-balance"
          >
            Stay Connected with Innovation.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
            Receive the latest research publications, company news, scientific perspectives, and event updates from across the Bencos ecosystem.         
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
              Explore Our Research
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
