"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 488.webp"

const TRANSFORMATION_IMAGE = "/images/image 489.webp"

// Solution cards — add/edit entries and the grid reflows automatically.





// Reasons — alternating rows; even index = image right (content left), odd = image left.
const reasons = [
  {
    title: "See the risk. Shape the response.",
    description:
      "Identify, evaluate, and manage climate-related risks with enterprise-grade climate risk assessment. Strengthen long-term business resilience and protect operational continuity against physical and transition risks.",
    image: "/images/image 490.webp",
    imageAlt: "A customer experience team collaborating in an office",
  },
  {
    title: "ESG that moves from principle to practice",
    description:
      "Achieve ESG goals with practical sustainability strategies, governance frameworks, and responsible business practices. Our ESG advisory helps organizations move from commitment to measurable performance.",
    image: "/images/image 491.webp",
    imageAlt: "An operations center with real-time data dashboards",
  },
  {
    title: "Measure, monitor, decarbonize",
    description:
      "Measure, monitor, and reduce carbon emissions while advancing toward net-zero objectives. Comprehensive carbon management support for accurate reporting and effective decarbonization roadmaps.",
    image: "/images/image 492.webp",
    imageAlt: "A large modern corporate atrium",
  },
  {
    title: "Signal from an environment of noise",
    description:
      "Transform environmental data into actionable insights for smarter planning, resource optimization, and sustainable growth. Turn complex climate and ESG data into clear decision intelligence.",
    image: "/images/image 493.webp",
    imageAlt: "Executives reviewing performance dashboards in a boardroom",
  },

  {
    title: "Confidence across every framework",
    description:
      "Navigate evolving environmental regulations with confidence. We provide compliance frameworks, reporting standards, and governance support aligned with TCFD, CSRD, and other leading climate disclosure requirements.",
      image: "/images/image 494.webp",
    imageAlt: "A large modern corporate atrium",
  },

  {
    title: "Enterprises engineered to endure",
    description:
      "Develop resilient business strategies that protect organizations against climate-related disruptions and future environmental challenges. Build lasting climate resilience into your core operations and value chain.",
    image: "/images/image 495.webp",
    imageAlt: "Executives reviewing performance dashboards in a boardroom",
  },
]

// Advisory suite — image with overlaid title/description. Swap images as needed.
const advisory = [
  {
    title: "Climate Risk Assessment",
    description: "Identify climate risks and build resilient business strategies.",
    image: "/images/image 496.png",
  },
  {
    title: "ESG Advisory",
    description:
      "Helping organizations achieve sustainable growth through effective ESG strategies and responsible governance.",
    image: "/images/image 497.png",
  },
  {
    title: "Carbon Management",
    description:
      "Enterprise-grade engagement designed for measurable resilience, transparency, and long-term value creation.",
    image: "/images/image 498.png",
  },
  {
    title: "Environmental Reporting",
    description:
      "Delivering accurate environmental reporting for informed and sustainable decision-making.",
    image: "/images/image 499.png",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensuring compliance with evolving regulations while minimizing risk and maintaining operational excellence.",
    image: "/images/image 500.png",
  },
  {
    title: "Sustainability Strategy",
    description:
      "Creating sustainable strategies for long-term business growth.",
    image: "/images/image 501.png",
  },
]



export default function ClimateResiliencePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A team working with data dashboards in a modern operations center"
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
              className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:whitespace-nowrap font-elegant thin tracking-wide text-white leading-[1.25]"
            >
              Climate Resilience<br/> for the Enterprise Era
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
              Help your organization build climate resilience, manage climate risk, and create long-term value through expert climate risk assessment, ESG advisory, carbon management, and sustainability strategy.

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="contact/"
                
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= DRIVING DIGITAL TRANSFORMATION ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
           Industries We Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-6xl text-muted-foreground leading-relaxed"
          >
           Trusted by leaders in regulated, capital-intensive, and public sectors to turn climate ambition into measurable enterprise outcomes through climate risk management and ESG strategies.

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
            src={TRANSFORMATION_IMAGE}
            alt="Business leaders collaborating in a modern glass office"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

   

     


      {/* ======================= WHY BENCOS360 (ALTERNATING) ======================= */}
      <section className="bg-background ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          

          <div className="mt-12 space-y-16 lg:space-y-24">
            {reasons.map((reason, index) => {
              const imageOnLeft = index % 2 !== 0
              return (
                <div
                  key={reason.title}
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
                      src={reason.image}
                      alt={reason.imageAlt}
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
                      {reason.title}
                    </h3>
                    <p className="mt-6 max-w-lg whitespace-pre-line text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= ADVISORY SUITE (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            A full advisory suite for the
            <br />
            resilient enterprise
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisory.map((item, index) => (
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
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#4ADE76] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 min-h-[4.25rem] text-sm leading-relaxed text-white/80">
                    {item.description}
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
            Build a More Resilient Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-sm text-muted-foreground md:text-base"
          >
           Strengthen climate resilience, improve ESG performance, <br/>and create lasting environmental and business value with a partner built for the enterprise.

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
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
