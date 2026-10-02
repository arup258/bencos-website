"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 203.webp"
const COMMUNITY_IMAGE = "/images/image 204.webp"

// Conference tracks — image with overlaid title; grid reflows automatically.
const tracks = [
  { title: "Genomics", image: "/images/image 205.png" },
  { title: "Precision Medicine", image: "/images/image 206.png" },
  { title: "Bioinformatics", image: "/images/image 207.png" },
  { title: "Artificial Intelligence", image: "/images/image 208.png" },
  { title: "Biotechnology", image: "/images/image 209.png" },
  { title: "Clinical Research", image: "/images/image 210.png" },
]

// Program formats — add/edit entries and the grid reflows automatically.
const formats = [
  {
    title: "Keynote Sessions",
    description: "World-renowned voices shaping the future of life sciences.",
    image: "/images/image 211.png",
  },
  {
    title: "Hands-on Workshops",
    description: "Practical, lab-grade training with leading protocols.",
    image: "/images/image 212.png",
  },
  {
    title: "Poster Presentations",
    description: "Discover cutting-edge research from emerging scientists.",
    image: "/images/image 213.png",
  },
  {
    title: "Technology Exhibition",
    description: "Explore the newest sequencing and analysis platforms.",
    image: "/images/image 214(1).png",
  },
]

// Why attend — alternating rows; even index = image left, odd = image right.
const whyAttend = [
  {
    title: "Global Speakers",
    description:
      "Hear from Nobel laureates, principal investigators and industry\npioneers presenting the discoveries that will define the next\ndecade of genomics.",
    image: "/images/image 224.webp",
    imageAlt: "A keynote speaker addressing a full conference hall",
  },
  {
    title: "Latest Research",
    description:
      "Access first-look sessions on newly published studies across\nsequencing, precision medicine and computational biology.",
    image: "/images/image 215.webp",
    imageAlt: "Researchers discussing findings around a conference table",
  },
  {
    title: "Networking Opportunities",
    description:
      "Curated networking spaces bring together academia, industry\nand healthcare to spark meaningful collaborations.",
    image: "/images/image 216.webp",
    imageAlt: "Delegates networking at the GATC conference",
  },
  {
    title: "Technology Showcase",
    description:
      "Experience the newest platforms from global technology\nleaders driving the next generation of life science tools.",
    image: "/images/image 217.webp",
    imageAlt: "Attendees exploring the GATC technology exhibition",
  },
]

// Gallery — first two tiles are tall (top row), the rest are shorter (bottom row).
const gallery = [
  { image: "/images/image 219.webp", alt: "GATC opening ceremony ribbon cutting" },
  { image: "/images/image 222.webp", alt: "Delegates in a roundtable discussion" },
  // { image: "/images/image 223(4).png", alt: "Keynote speaker on stage" },
  // { image: "/images/image 223(4).png", alt: "Keynote speaker on stage" },
  // { image: "/images/image 223(4).png", alt: "Keynote speaker on stage" },

  
]

// Closing image strip above the final CTA.
const closingImages = [
  { image: "/images/image 223(1).png", alt: "GATC opening ceremony" },
  { image: "/images/image 221.webp", alt: "Delegates in conversation" },
  { image: "/images/image 223(5).png", alt: "Award presentation at GATC" },
]

export default function GatcPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Attendees at the GATC Genomics Analysis & Technology Conference"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
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
              Knowledge Initiatives
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
              Where Science Meets
              <br />
              Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              A global conference for genomics, biotechnology, and scientific collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="https://gatc-new.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= MEETING POINT ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-3xl"
          >
            A Meeting Point For The World's Genomics Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-6xl whitespace-pre-line text-base text-muted-foreground leading-relaxed"
          >
            {"GATC is a premier scientific conference providing a collaborative platform where academia, healthcare, biotechnology, industry and\ninnovation converge to exchange knowledge, showcase discoveries and shape the future of genomics."}
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
            src={COMMUNITY_IMAGE}
            alt="Delegates networking at the GATC conference"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= CONFERENCE TRACKS (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Conference Tracks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-6xl text-muted-foreground leading-relaxed"
          >
            Six dedicated tracks curated by an international scientific committee to cover the full spectrum of genomics and life sciences.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((item, index) => (
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
                <h3 className="absolute inset-x-0 group-hover:text-[#4ADE76] bottom-0 p-6 pb-18 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CONFERENCE EXPERIENCE (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
           Featured Experiences
          </motion.h2>
          

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {formats.map((item, index) => (
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
                <h3 className="mt-4 text-lg font-semibold text-foreground md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= WHY ATTEND GATC (ALTERNATING) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Why Attend GATC
          </motion.h2>

          <div className="mt-12 space-y-16 lg:space-y-24">
            {whyAttend.map((item, index) => {
              const imageOnLeft = index % 2 === 0
              return (
                <div
                  key={item.title}
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
                      src={item.image}
                      alt={item.imageAlt}
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
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-xl whitespace-pre-line text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= MOMENTS FROM GATC (GALLERY) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Moments From GATC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-5xl text-muted-foreground leading-relaxed"
          >
            A visual record of last year's opening ceremony, keynotes, workshops and award nights.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {gallery.map((item, index) => {
              const isTall = index < 2
              return (
                <motion.div
                  key={item.image}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  className={`group relative overflow-hidden rounded-xl bg-neutral-900 ${
                    index === 0 ? "sm:col-span-2" : ""
                  } ${isTall ? "h-64 lg:h-80" : "h-48 lg:h-56"}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= CLOSING CTA (STRIP + CTA) ======================= */}
      <section className="bg-background pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {closingImages.map((item, index) => (
              <motion.div
                key={item.image}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl text-balance"
            >
              Connect. Learn. Inspire
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-sm text-muted-foreground md:text-base"
            >
              Be part of India's leading genomics and life science conference, where scientific<br/> discovery meets collaboration, innovation and real-world impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="https://gatc-new.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Register Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
