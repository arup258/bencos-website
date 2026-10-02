"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 530.webp"

const BULDING_IMAGE = "/images/image 531.webp"



const disciplines = [
  { label: "Commercial Construction", image: "/images/image 537.webp" },
  { label: "Infrastructure Development", image: "/images/image 538.webp" },
  { label: "Smart Cities", image: "/images/image 539.webp" },
  { label: "Real Estate", image: "/images/image 540.webp" },
  { label: "Transportation", image: "/images/image 541.webp" },
  { label: "Energy & Utilities", image: "/images/image 542.png" },
  { label: "Industrial Facilities", image: "/images/image 543.webp" },
  { label: "Public Infrastructure", image: "/images/image 544.webp" },
 
  
]









// Reasons — alternating rows; even index = image right (content left), odd = image left.
const reasons = [
  {
    title: "Infrastructure Risk Intelligence",
    description:
      "Identify, monitor, and understand risks that may affect infrastructure, assets, and construction operations to support informed decision-making throughout the project lifecycle.",
    image: "/images/image 532.webp",
    imageAlt: "A construction management team collaborating in a modern office",
  },
  {
    title: "Climate & Disaster Resilience",
    description:
      "Support construction organizations in preparing for climate-related challenges through resilience planning, infrastructure assessments, and operational preparedness.",
    image: "/images/image 533.webp",
    imageAlt: "An operations center with real-time data dashboards",
  },
  {
    title: "Asset & Project Monitoring",
    description:
      "Improve visibility across construction projects with intelligent monitoring, performance tracking, and infrastructure health assessments across the entire portfolio",
    image: "/images/image 534.webp",
    imageAlt: "A large modern corporate atrium",
  },
  {
    title: "ESG & Regulatory Compliance",
    description:
      "Strengthen sustainability initiatives and regulatory compliance through structured reporting, governance support, and responsible infrastructure planning.",
    image: "/images/image 535.webp",
    imageAlt: "Executives reviewing performance dashboards in a boardroom",
  },

  {
    title: "Operational Excellence",
    description:
      "Enhance project coordination, streamline operational workflows, and improve efficiency across engineering and construction operations at every stage.",
      image: "/images/image 536.webp",
    imageAlt: "A large modern corporate atrium",
  },

  
]





export default function ConstructionPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A modern construction site with cranes and buildings"
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
              Construction Industry <br/>Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
              Helping construction and infrastructure organizations build resilient, sustainable, and future-ready projects through intelligent risk management, operational excellence, and data-driven decision-making.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="/contact"

                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
               Book a Free Consultancy
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

     
     {/* ======================= BUILDING KNOWLEDGE ======================= */}
           <section className="bg-background py-16 lg:py-20">
             <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
               <motion.h2
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
               >
                 Building Smarter Infrastructure
               </motion.h2>
               <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className="mx-auto mt-6 max-w-5xl text-[16px] text-muted-foreground leading-relaxed"
               >
                 Construction projects today require more than engineering excellence. They demand resilience, operational intelligence, sustainability, and proactive risk management across the entire project lifecycle.

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
                 src={BULDING_IMAGE}
                 alt="Researchers and students collaborating around a table in a library"
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

 

{/* ======================= POWERING DISCOVERY (DISCIPLINES GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
          Industries We Support
          </motion.h2>
          <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className=" mt-6 max-w-5xl text-[16px] text-muted-foreground leading-relaxed"
               >
                 From skylines to public works, Bencos360 partners with organizations shaping<br/> the built environment across every sector of the construction economy.
               </motion.p>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {disciplines.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group relative aspect-[327/354] overflow-hidden rounded-xl bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 text-base font-medium text-white transition-colors md:text-lg group-hover:text-green-600">
                  {item.label}
                </h3>
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
            Build Resilient Infrastructure for Tomorrow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-sm text-muted-foreground md:text-base"
          >
            Partner with Bencos360 to strengthen infrastructure resilience,  <br/>improve operational performance, and deliver sustainable  <br/>construction projects with confidence.
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
