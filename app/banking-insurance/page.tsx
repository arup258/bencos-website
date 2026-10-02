"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 502.webp"




// Reasons — alternating rows; even index = image right (content left), odd = image left.
const reasons = [
  {
    title: "Digital Banking Transformation",
    description:
      "Support banks in modernizing customer services, digital channels, and core enterprise operations with secure, scalable digital banking transformation strategies that improve agility and customer engagement.",
    image: "/images/image 482.webp",
    imageAlt: "A banking team collaborating in a modern office",
  },
  {
    title: "Insurance Solutions",
    description:
      "Enable insurers to streamline policy management, enhance customer engagement, boost operational efficiency, and accelerate claims processing through modern digital insurance solutions.",
    image: "/images/image 483.webp",
    imageAlt: "An operations center with real-time data dashboards",
  },
  {
    title: "Customer Experience",
    description:
      "Deliver seamless, personalized, and trusted customer experiences across every banking and insurance interaction driving loyalty, satisfaction, and long-term value.",
    image: "/images/image 484.webp",
    imageAlt: "A large modern corporate atrium",
  },
  {
    title: "Business Process Excellence",
    description:
      "Improve operational efficiency through optimized financial workflows, intelligent process automation, enterprise support services, and end-to-end business process management.",
    image: "/images/image 485.webp",
    imageAlt: "Executives reviewing performance dashboards in a boardroom",
  },

  {
    title: "Risk, Governance & Compliance",
    description:
      "Strengthen regulatory compliance, corporate governance, operational risk management, and business resilience across banks, insurers, and financial institutions.",
      image: "/images/image 486.webp",
    imageAlt: "A large modern corporate atrium",
  },

  {
    title: "Financial Consulting",
    description:
      "Provide strategic financial consulting to help banking and insurance organizations improve performance, optimize operations, reduce costs, and achieve sustainable growth.",
    image: "/images/image 487.webp",
    imageAlt: "Executives reviewing performance dashboards in a boardroom",
  },
]

// Industries shown as check-mark pills (ordered to flow left→right across two columns).
const industries = [
  "Banking Operations",
  "Customer Experience",
  "Enterprise Consulting",
  "Insurance Operations",
  "Digital Transformation",
  "Risk Management",
  "Regulatory Compliance",
  "Managed Services",
]

// Image for the "Trusted across industries" section — swap as needed.
const TRUSTED_IMAGE = "/images/image 469.webp"


export default function BankingInsurancePage() {
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
               Digital Transformation Solutions<br/> for Banking & Insurance

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
              Helping banks, insurers, and financial institutions modernize core operations, enhance customer experience, strengthen regulatory compliance, and accelerate secure digital transformation with data-driven technology and intelligent automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="/contact"

                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Talk to Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              {/* <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white/90"
              >
                Talk to Our Experts
              </Link> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= DRIVING DIGITAL TRANSFORMATION ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl lg:whitespace-nowrap text-center  ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
          A Dedicated Banking & Insurance Practice for <br/>Digital Finance Transformation

          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-6xl text-muted-foreground leading-relaxed"
          >
            Bencos360 partners with retail banks, corporate banks, wealth managers, and insurers to reimagine how financial<br/> services are designed, delivered, and governed. From core banking modernization and regulatory compliance to human-centered <br/>customer experience and intelligent automation, our consultants combine the depth of a global firm with the agility of a <br/>specialist helping institutions accelerate secure digital transformation in the era of digital finance.

          </motion.p>
        </div>


      </section>


      {/* ======================= WHY BENCOS360 (ALTERNATING) ======================= */}
      <section className="bg-background  ">
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

 {/* ======================= TRUSTED INDUSTRIES ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: heading + industry pills */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-2  text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
              >
                Solutions We Deliver for Banking & Insurance

              </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 max-w-6xl text-muted-foreground leading-relaxed"
                >
                  A comprehensive portfolio engineered for the modern financial enterprise built for scale, resilience, regulatory compliance, and superior customer trust.


                </motion.p>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industries.map((name, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index % 2) * 0.05 + Math.floor(index / 2) * 0.05 }}
                    className="flex items-center gap-3 rounded-full border border-border px-5 py-3.5 transition-colors hover:border-green-600/50"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm font-medium text-foreground">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900"
            >
              <img
                src={TRUSTED_IMAGE}
                alt="Professionals collaborating across industries"
                className="h-full w-full object-cover"
              />
            </motion.div>
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
           Transform Your Financial Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-sm text-muted-foreground md:text-base"
          >
           Partner with Bencos360 to modernize banking and insurance operations,<br/> strengthen regulatory compliance, enhance customer experience,<br/> and build secure, high-performing financial solutions for the future.

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
