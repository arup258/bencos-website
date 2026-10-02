"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the src below to change it.
const HERO_IMAGE = "/images/image 153.webp"
const JOIN_IMAGE = "/images/image 164.webp"

// Platform modules carousel — add/edit entries; every card reveals "Read more" on hover.
const platformModules = [
  {
    title: "Plasma",
    description: "A frictionless research workspace where ideas, data and discoveries flow together.",
    image: "/images/image 154.png",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.myneuronworld.com/plasma",
    
  },
  {
    title: "Events",
    description: "Discover and host conferences, workshops and meetups across the scientific community.",
    image: "/images/image 155.webp",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.myneuronworld.com/events",
  },
  {
    title: "My Bookshelf",
    description: "Your personal library of papers, books, and references  organized for faster research.",
    image: "/images/image 156.webp",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.myneuronworld.com/my-bookshelf",
  },
  {
    title: "Impulse Feed",
    description: "A real-time stream of the breakthroughs and conversations that matter to you.",
    image: "/images/image 157.webp",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.myneuronworld.com/impulse/feed",
  },
  {
    title: "Articles",
    description: "Long-form writing from researchers, thinkers and pioneers, distilled for clarity.",
    image: "/images/image 457.webp",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.myneuronworld.com/news",
  },
]

// Capability cards — image with overlaid title/description; grid reflows automatically.
const capabilities = [
  {
    title: "AI Research Tools",
    description: "Augmented reasoning, summarisation and discovery powered by modern models.",
    image: "/images/image 158.png",
  },
  {
    title: "Scientific Networking",
    description: "Meet collaborators across labs, fields and continents.",
    image: "/images/image 159.png",
  },
  {
    title: "Knowledge Sharing",
    description: "Publish, cite and remix knowledge openly with attribution.",
    image: "/images/image 160.png",
  },
  {
    title: "Community Collaboration",
    description: "Spaces for teams, journal clubs and reading groups.",
    image: "/images/image 161.png",
  },
  {
    title: "Events & Learning",
    description: "Workshops, lectures and conferences in one calendar.",
    image: "/images/image 162.png",
  },
  {
    title: "Personalized Insights",
    description: "Signals tuned to your research interests and reading patterns.",
    image: "/images/image 163.png",
  },
]

export default function MyNeuronPage() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollCards = (direction: number) => {
    const el = scrollRef.current
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
            alt="Scientists collaborating in a modern research laboratory"
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
              Empowering Scientific Discovery
              <br />
              Through Intelligent Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
             A unified platform for scientific research, AI-powered discovery, collaboration, learning, and knowledge sharing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="https://www.myneuronworld.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore MyNeuron
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= PLATFORM MODULES (CAROUSEL) ======================= */}
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
              One Intelligent Platform Multiple Possibilities
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
            {platformModules.map((item) => (
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
                  href={item.href || "/services"}
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

      {/* ======================= CAPABILITIES (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Powering Every Stage of Scientific Innovation
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 pb-16">
                  <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#4ADE76] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= JOIN BANNER ======================= */}
      <section className="relative min-h-[420px] overflow-hidden lg:min-h-[480px]">
        <div className="absolute inset-0">
          <img
            src={JOIN_IMAGE}
            alt="A modern research campus at dusk"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-20 lg:min-h-[480px] lg:px-8">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl text-3xl sm:text-4xl font-medium lg:whitespace-nowrap leading-tight text-white md:text-5xl"
            >
              Join the <span className="text-[#4ADE76]">Future of Scientific <br/> Collaboration</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-sm leading-relaxed text-white/85 md:text-base lg:whitespace-nowrap"
            >
              Step into the ecosystem where researchers, builders and thinkers move ideas
              forward — <br/>together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8"
            >
              <a
                href="https://www.myneuronworld.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Visit MyNeuron
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
