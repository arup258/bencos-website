"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"

// Hero background image — swap the src to change it.
const HERO_IMAGE = "/images/image 504.webp"

// "Who We Serve" section image — swap as needed.
const SERVE_IMAGE = "/images/image 505.webp"

// Country cards — "Rooted globally. Connected locally". Swap images as needed.
// left/top are % positions tuned to /images/world-map.svg (same calibration as OFFICES).
const countries = [
  { name: "India", description: "Headquarters for research, healthcare and enterprise operations.", image: "/images/image 509.png", left: 69.2, top: 35.3 },
  { name: "United States", description: "Technology, AI, and strategic enterprise partnerships.", image: "/images/image 511.png", left: 20.0, top: 25.8 },
  { name: "Finland", description: "Nordic research and university collaborations.", image: "/images/image 512.png", left: 54.2, top: 13.1 },
  { name: "Germany", description: "Enterprise, engineering and healthcare partners.", image: "/images/image 510.png", left: 50.1, top: 19.2 },
  { name: "Spain", description: "Academic and innovation networks across Iberia.", image: "/images/image 513.png", left: 46.2, top: 25.3 },
  { name: "Italy", description: "Scientific research alliances and clinical partners.", image: "/images/image 514.png", left: 50.7, top: 24.2 },
  { name: "Singapore", description: "Asia-Pacific technology and innovation hub.", image: "/images/image 515.png", left: 76.1, top: 46.8 },
  { name: "United Arab Emirates", description: "Middle East enterprise and innovation gateway.", image: "/images/image 516.png", left: 62.2, top: 34.2 },
]

// Regional highlights — alternating rows (content ↔ image). Swap images/copy as needed.
const regions = [
  {
    title: "Global Partnerships",
    description:
      "Through collaborations with universities, hospitals, research organizations, technology companies, and enterprise partners, Bencos continues to create meaningful impact across global markets.",
    image: "/images/image 506.webp",
    imageAlt: "Bencos India operations team collaborating",
  },
  {
    title: "Research Without Borders",
    description:
      "Scientific knowledge has no boundaries. Our international collaborations enable innovation, accelerate discoveries, and strengthen global research communities.",
    image: "/images/image 507.webp",
    imageAlt: "Bencos European office in Munich",
  },
  {
    title: "Driving Global Innovation",
    description:
      "By combining research excellence, healthcare expertise, intelligent technology, and enterprise solutions, Bencos delivers innovations that create measurable impact across industries worldwide.",
    image: "/images/image 508.webp",
    imageAlt: "Global partners collaborating across continents",
  },
]

// Office locations. left/top are percentages tuned to /images/world-map.svg
// (equirectangular, with a lon -10° / lat +4.5° calibration baked in).
type Office = {
  id: string
  city: string
  type: string
  address: string
  left: number
  top: number
  color: string
}

const OFFICES: Office[] = [
  {
    id: "thane",
    city: "Thane (Mumbai)",
    type: "Corporate Headquarters",
    address:
      "ZENIA Building, 4th Floor, Hiranandani Business Park, Arcadia Cir, Hiranandani Estate, Thane West, Maharashtra 400607, India",
    left: 67.5,
    top: 36.8,
    color: "#16a34a",
  },
  {
    id: "kolkata",
    city: "Kolkata",
    type: "Development and Oparation Center",
    address:
      "AWFIS Technopolis, 11th Floor, BP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091, India",
    left: 71.4,
    top: 35.6,
    color: "#0d9488",
  },
  {
    id: "munich",
    city: "Munich, Germany",
    type: "European Office",
    address: "Regus Landsberger Strasse, München, 302827, Germany",
    left: 50.4,
    top: 20.8,
    color: "#2563eb",
  },
]

function GlobalPresenceMap() {
  const [activeId, setActiveId] = useState<string>("thane")

  return (



















    
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
            Where we operate
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Our Global Presence
          </h2>
          <p className="mt-5 text-sm text-muted-foreground md:text-base">
            Explore our offices across the world. Select a marker on the map — or a location
            on the right — to view the full address.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[4378/2435] w-full overflow-hidden rounded-2xl border border-border bg-muted/30">
              {/* Base world map (grey silhouette) */}
              <img
                src="/images/world-map.svg"
                alt="World map showing Bencos office locations"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
              />

              {/* Markers */}
              {OFFICES.map((office, index) => {
                const isActive = activeId === office.id
                const openLeft = office.left > 55
                return (
                  <motion.button
                    key={office.id}
                    type="button"
                    onClick={() => setActiveId(office.id)}
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="group absolute z-10 -translate-x-1/2 -translate-y-full"
                    style={{ left: `${office.left}%`, top: `${office.top}%` }}
                    aria-label={`${office.city} — ${office.type}`}
                  >
                    {/* Pulse ring */}
                    <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                        style={{ backgroundColor: office.color }}
                      />
                    </span>

                    {/* Pin */}
                    <MapPin
                      className={`relative drop-shadow-sm transition-transform duration-300 ${
                        isActive ? "scale-125" : "group-hover:scale-110"
                      }`}
                      style={{ color: office.color }}
                      strokeWidth={2.5}
                      fill={isActive ? office.color : "white"}
                      size={isActive ? 30 : 26}
                    />

                    {/* Name tooltip */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute bottom-full mb-1 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background ${
                            openLeft ? "right-0" : "left-0"
                          }`}
                        >
                          {office.city}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                )
              })}

              {/* Country highlights */}
              {countries.map((country, index) => {
                const openLeft = country.left > 55
                return (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                    className="group absolute z-0 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${country.left}%`, top: `${country.top}%` }}
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white" />
                    </span>
                    <span
                      className={`pointer-events-none absolute bottom-full mb-1 whitespace-nowrap rounded-md bg-foreground px-2 py-0.5 text-[10px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 ${
                        openLeft ? "right-0" : "left-0"
                      }`}
                    >
                      {country.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Legend / office list */}
          <div className="space-y-4">
            {OFFICES.map((office) => {
              const isActive = activeId === office.id
              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveId(office.id)}
                  className={`block w-full rounded-xl border p-5 text-left transition-all ${
                    isActive
                      ? "border-transparent bg-muted/60 shadow-sm ring-2"
                      : "border-border hover:border-green-600/40 hover:bg-muted/30"
                  }`}
                  style={isActive ? ({ ["--tw-ring-color" as string]: office.color } as React.CSSProperties) : undefined}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${office.color}1a` }}
                    >
                      <MapPin size={18} style={{ color: office.color }} strokeWidth={2.5} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-foreground">{office.type}</h3>
                      <p className="mt-0.5 text-sm font-medium" style={{ color: office.color }}>
                        {office.city}
                      </p>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 block">{office.address}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function GlobalPresencePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A connected world map representing global operations"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
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
              className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:whitespace-nowrap font-elegant thin tracking-wide text-white leading-[1.25]"
            >
              Global Presence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
             Building global partnerships and delivering innovation across research, healthcare, technology, and enterprise solution
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#presence-map"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                View our locations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
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
              <h2 className="text-3xl sm:text-6xl font-medium leading-tight text-foreground md:text-5xl">
                A Network Built on<br/> Trust, Across Continents
              </h2>

              <p className="mt-8 max-w-xl whitespace-pre-line text-muted-foreground leading-relaxed">
                {"Bencos continues to expand its global presence by collaborating with academic institutions, healthcare organizations, technology partners, research centers, and enterprises across multiple countries, advancing genomics, precision medicine, scientific innovation, and scalable business solutions worldwide."}
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

      {/* ============================ GLOBAL PRESENCE MAP ============================ */}
      <div id="presence-map">
        <GlobalPresenceMap />
      </div>

      {/* ======================= REGIONAL HIGHLIGHTS (ALTERNATING) ======================= */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {regions.map((region, index) => {
              const imageOnLeft = index % 2 !== 0
              return (
                <div
                  key={region.title}
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
                      src={region.image}
                      alt={region.imageAlt}
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
                      {region.title}
                    </h3>
                    <p className="mt-6 max-w-lg text-muted-foreground leading-relaxed">
                      {region.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= ROOTED GLOBALLY (COUNTRY CARDS) ======================= */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Rooted Globally
            <br />
            Connected Locally
          </motion.h2>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-foreground">{country.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {country.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CLOSING CTA ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-4xl font-medium leading-tight text-foreground"
          >
            Together Beyond Borders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-sm text-muted-foreground md:text-base"
          >
            Partner with Bencos to advance genomics research, precision healthcare, AI technology, and enterprise<br/> innovation through trusted global collaboration.

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
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
