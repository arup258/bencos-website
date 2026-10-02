"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Hero background image — swap the src to change it.
const HERO_IMAGE = "/images/image 503.webp"

const TIMELINE_DATA = [
  {
    year: "2011",
    chapter: "01",
    headline: "Inception",
    details: [
      "Conceptualization and early development of MyNeuron",
    ],
    image: "/images/image 619.jpeg",
  },
  {
    year: "2012",
    chapter: "02",
    headline: "The First Step",
    details: [
      "Initiated BenEd Training program",
      "Lab Setup in Delhi",
    ],
    image: "/images/image 620.jpeg",
  },
  {
    year: "2013",
    chapter: "03",
    headline: "Expanding Horizons",
    details: [
      "Expansion of BenEd",
      "Introduction of Protein Expression & Cloning Services",
    ],
    image: "/images/image 621.jpeg",
  },
  {
    year: "2014",
    chapter: "04",
    headline: "Deepening Capabilities",
    details: [
      "Introduction of Genomics Services both Sanger and NextGen Sequencing Services",
      "Initiation of Oligo & Gene Synthesis Services",
      "Partnership with Macrogen Inc.",
    ],
    image: "/images/image 622.jpeg",
  },
  {
    year: "2015",
    chapter: "05",
    headline: "Genomics Exploration",
    details: [
      "Introduction of NGS Services on Whole Genome, Transcriptome and Metagenome",
      "Development of Genome Studio Servers for data analysis",
    ],
    image: "/images/image 623.jpeg",
  },
  {
    year: "2016",
    chapter: "06",
    headline: "Precision Genomics and Personalized Medicine Initiatives",
    details: [
      "Inception of GATC in Mumbai",
      "Targeted Cancer Panels introduced to the portfolio",
      "Clinical Whole Exome Seq introduced",
    ],
    image: "/images/image 624.jpeg",
  },
  {
    year: "2017",
    chapter: "07",
    headline: "Global Entry",
    details: [
      "Entry into SEA markets",
      "Projects secured from NUS, NTU and GIS Singapore",
      "Seed funding of INR 2.5Mn raised",
      "GATC in Guwahati, Assam",
    ],
    image: "/images/image 625.jpeg",
  },
  {
    year: "2018",
    chapter: "08",
    headline: "Algorithm Innovation & Global Expansion",
    details: [
      "Entry into the EU Market",
      "New network algorithm developed for Max Planck Freiburg, Germany",
      "In-house De novo functional annotation developed",
      "GATC in RMRC, Dibrugarh, Assam",
    ],
    image: "/images/image 626.jpeg",
  },
  {
    year: "2019",
    chapter: "09",
    headline: "Increased International Presence",
    details: [
      "Middle East Expansion",
      "Participated in the first international conference on genomics in India",
      "Satellite GATCs initiated",
      "Secured projects from Italy, Germany and Finland",
      "Initiated the first Finnish DIPP Transcriptome project",
      "GATC in Bhubaneshwar, Orissa",
    ],
    image: "/images/image 627.jpeg",
  },
  {
    year: "2020",
    chapter: "10",
    headline: "The COVID-19 Challenge",
    details: [
      "Developed the first population specific SARS CoV 2 RT-PCR kit in association with ICMR-NIRRH",
      "Initiated the first population specific COVID-19 Study with ICMR-NIV",
    ],
    image: "/images/image 628.jpeg",
  },
  {
    year: "2021",
    chapter: "11",
    headline: "Beginning of a New Era",
    details: [
      "Inception of Bencos Healthcare Solutions Pvt Ltd.",
      "Partnership Initiated with Sudarshan Pharma Ltd. for co-development of COVID-19 RAPID Antigen Kits",
      "Initiated the first LncRNA Project from MD Anderson, USA",
    ],
    image: "/images/image 629.jpeg",
  },
  {
    year: "2022",
    chapter: "12",
    headline: "Ecosystem Expansion",
    details: [
      "Bencos360 launched as a non Science business division within Bencos",
      "Partnership Initiated with AWS Cloud",
      "TWINE development was Initiated",
    ],
    image: "/images/image 630.jpeg",
  },
  {
    year: "2023",
    chapter: "13",
    headline: "Scaling the Cloud",
    details: [
      "AWS Partnership expanded into elaborate business initiatives",
      "Jointly organized Indian Genomics Summit with AWS in Bangalore and Delhi",
      "Expansion of Bencos360",
      "Expansion of BenEd was Initiated",
      "GATC Bangalore, India",
    ],
    image: "/images/image 631.jpeg",
  },
  {
    year: "2024",
    chapter: "14",
    headline: "Healthcare Genomics Revolution",
    details: [
      "Introduced our Pre-analytical product range",
      "Introduced TWINE Library preparation Kits",
      "TWINE BI Suite V 0.5 was introduced",
      "Bencos participated in its first ever ClinVar meeting",
      "GATC New Delhi, India",
      "Sponsored Stempeers USA Chicago",
    ],
    image: "/images/image 632.jpeg",
  },
  {
    year: "2025",
    chapter: "15",
    headline: "Global Strategic Partnerships",
    details: [
      "Strategic Partnership locked with Euformatics Oy",
      "Organized Clinical Workshop in Pune",
      "Gold Sponsored the AMP Middle East",
      "Partnered as a Genomics mentor with CII Genomics in India",
      "Exhibited at ASHG Boston",
      "Exhibited at AMP Boston",
      "GATC Pune, India",
    ],
    image: "/images/image 633.jpeg",
  },
  {
    year: "2026",
    chapter: "16",
    headline: "Full Circle Completed",
    details: [
      "Development and launch of MyNeuron",
      "Exhibited successfully at WHX Dubai",
      "Celebrated 15th year of successful existence",
      "Launched full version of TWINE Genomics",
      "Launched the PANAROMA Project - The first ever Long Read Cancer Atlas Project in Global South",
      "Exhibited at the ARVO 2026 Meeting",
      "Sponsored Stempeers USA New York",
      "GATC on Single Cell & Spatial Biology",
    ],
    image: "/images/image 634.png",
  },
]

function TimelineItem({
  item,
  isEven,
}: {
  item: (typeof TIMELINE_DATA)[0]
  isEven: boolean
}) {
  return (
    <div className="group relative flex w-full items-center justify-center py-10 md:py-32">
      {/* Central node / dot */}
      <motion.div
        // Start small (not 0) so the in-view check still sees the dot.
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-6 top-[2.95rem] z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-green-600 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_18px_rgba(22,163,74,0.45)] md:left-1/2 md:top-auto"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 pl-14 pr-5 md:grid-cols-2 md:gap-24 md:px-6 lg:gap-32 lg:px-8">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={cn(
            "flex flex-col",
            isEven
              ? "md:order-1 md:items-end md:pr-12 md:text-right"
              : "md:order-2 md:items-start md:pl-12 md:text-left"
          )}
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-green-600">
            Chapter {item.chapter}
          </span>
          <h2 className="mb-3 text-4xl font-medium leading-tight text-foreground md:mb-4 md:text-5xl lg:text-7xl">
            {item.year}
          </h2>
          <h3 className="mb-4 text-lg font-medium leading-snug text-foreground md:mb-6 md:text-xl lg:text-2xl">
            {item.headline}
          </h3>
          <div className={cn("mb-4 h-px w-12 bg-border md:mb-6", isEven && "md:ml-auto")} />
          <ul className="space-y-2 md:space-y-3">
            {item.details.map((detail, idx) => (
              <li
                key={idx}
                className={cn(
                  "flex items-start gap-2.5 text-[15px] leading-relaxed text-muted-foreground md:text-base",
                  isEven && "md:justify-end"
                )}
              >
                <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                <span className={cn(isEven && "md:text-left")}>{detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          className={cn(
            "relative aspect-[16/10] w-full overflow-hidden rounded-md bg-neutral-100 md:aspect-square md:rounded-sm lg:aspect-[3/4]",
            isEven ? "md:order-2" : "md:order-1"
          )}
          // Fade/slide in. (A clip-path reveal starts at zero visible area, so on small
          // screens the in-view check never fired and the photo stayed hidden.)
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={item.image}
            alt={item.headline}
            loading="lazy"
            className="h-full w-full transform-gpu object-cover"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function OurHistoryPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  })

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A team collaborating in a modern research facility"
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
              className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:whitespace-nowrap font-elegant thin tracking-wide text-white leading-[1.25]"
            >
              Our Story of Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
             A journey driven by scientific excellence, technological innovation, and meaningful global impact.
            </motion.p>

            
          </div>
        </div>
      </section>

      {/* ============================ TIMELINE ============================ */}
      <section id="timeline" className="bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-6 pb-4 pt-16 text-center md:pb-8 md:pt-24 lg:pt-32">
          
          <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Our History
          </h2>
        </div>

        <div ref={containerRef} className="relative w-full pb-12 md:pb-24">
          {/* Background static line */}
          <div className="absolute bottom-0 left-6 top-0 w-px -translate-x-1/2 bg-border md:left-1/2" />
          {/* Animated progress line */}
          <motion.div
            className="absolute bottom-0 left-6 top-0 w-px -translate-x-1/2 origin-top bg-green-600 md:left-1/2"
            style={{ scaleY: scrollYProgress }}
          />

          {TIMELINE_DATA.map((item, index) => (
            <TimelineItem key={item.year} item={item} isEven={index % 2 === 0} />
          ))}
        </div>
      </section>

      {/* ============================ CLOSING CTA ============================ */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-4xl font-medium leading-tight text-foreground"
          >
            Building the Future Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-sm text-muted-foreground md:text-base"
          >
            From a small research initiative to a global ecosystem spanning healthcare, AI, <br className="hidden md:block" />technology, education, and scientific collaboration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/our-ecosystem"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
            >
              Explore Our Ecosystem
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
