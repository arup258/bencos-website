"use client"

import Link from "next/link"
import { motion } from "framer-motion"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 103.png"
const PHILOSOPHY_IMAGE = "/images/image 104.png"
const VISION_IMAGE = "/images/image 98.png"
const TEAM_IMAGE = "/images/image 95.png"
const TOGETHER_IMAGE = "/images/image 105.png"
const FUTURE_IMAGE = "/images/hero-lab-1.png"

const principles = [
  "Lead with scientific integrity and transparency",
  "Foster a culture of curiosity and collaboration",
  "Empower teams to innovate boldly and responsibly",
  "Champion diversity of thought and expertise",
  "Make decisions that create lasting, long-term value",
]

// Add more team members here — the grid scales automatically.
const team = [
  {
    name: "Subhanjan Bhowmik",
    title: "Founder & CEO",
    image: "/images/image 452.png",
  },
  {
    name: "Ruma Sadhukhan",
    title: "Director & Operations Head",
    image: "/images/image 453.png",
  },
  {
    name: "Arnab Kapat",
    title: "Executive Director",
    image: "/images/image 454.png",
  },
  {
    name: "Sunaina Jairath",
    title: "CMO & CCO",
    image: "/images/image 455.png",
  },

  {
    name: "Samhita R",
    title: "Advisor Finance",
    image: "/images/image 456.png",
  },
]

export default function LeadershipPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Bencos leadership team meeting in a modern boardroom"
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
              Leadership
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-white/85"
            >
              Our leaders combine expertise in genomics, healthcare, AI, bioinformatics, and biotechnology to drive innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ======================= LEADERSHIP PHILOSOPHY ======================= */}
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
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
               Leading Innovation 

                <br />
               with Science
              </h2>

              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
               Innovation drives our progress, integrity guides every decision, and collaboration expands our impact—helping advance science and improve lives through trusted research and lasting partnerships.
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
                src={PHILOSOPHY_IMAGE}
                alt="Bencos executives discussing strategy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= LEADERSHIP PHILOSOPHY / TEAM ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Leadership Philosophy
            </h2>
            <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
              Our leadership inspires innovation, integrity, and scientific excellence.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              >
                <div className="relative aspect-square overflow-hidden bg-neutral-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= BUILDING THE FUTURE TOGETHER ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-semibold leading-tight text-foreground md:text-2"
          >
           Our aspiration is to transform complex scientific data into discoveries that improve lives and shape the future.
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
            src={TOGETHER_IMAGE}
            alt="Bencos leadership and scientists collaborating in the laboratory"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

     

     
    </>
  )
}
