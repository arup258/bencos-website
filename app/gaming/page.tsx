"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 517.webp"
const PHILOSOPHY_IMAGE = "/images/image 518.webp"
const PHILOSOPHY1_IMAGE = "/images/image 529.webp"


const disciplines = [
  { label: "Online Gaming", image: "/images/image 523.webp" },
  { label: "Mobile Gaming", image: "/images/image 524.webp" },
  { label: "Esports", image: "/images/image 525.webp" },
  { label: "Fantasy Sports", image: "/images/image 526.webp" },
  { label: "Game Publishers", image: "/images/image 527.webp" },
  { label: "Gaming Platforms", image: "/images/image 528.webp" },
  
]
// Reasons — alternating rows; even index = image right (content left), odd = image left.
const reasons = [
  {
    title: "Customer Support Services",
    description:
      "Provide 24/7 multilingual customer support through live chat, email, and voice channels to ensure fast, professional, and reliable assistance for players worldwide.",
    image: "/images/image 519.webp",
    imageAlt: "A gaming support team collaborating in a modern office",
  },
  {
    title: "Player Experience",
    description:
      "Responsive, personalized support that directly improves the player experience, raises satisfaction, strengthens engagement, and builds long-term loyalty.",
    image: "/images/image 520.webp",
    imageAlt: "An operations center with real-time data dashboards",
  },
  {
    title: "Back Office Operations",
    description:
      "Support account administration, verification processes, operational workflows, reporting, and business support functions that keep gaming platforms running efficiently so technical and administrative friction never damages the player experience.",
    image: "/images/image 521.webp",
    imageAlt: "A large modern corporate atrium",
  },
  {
    title: "Trust & Compliance Support",
    description:
      "Assist gaming organizations with operational compliance processes, documentation management, and quality assurance to maintain reliable customer service standards and protect the integrity of the player experience.",
    image: "/images/image 522.webp",
    imageAlt: "Executives reviewing performance dashboards in a boardroom",
  },

]




export default function GamingPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Immersive gaming and interactive technology"
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
              Supporting the Gaming <br/>Industry

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
              The gaming industry runs 24/7 and depends on reliable customer support and efficient business operations. Bencos360 helps gaming companies deliver exceptional player experiences through scalable support services, operational excellence, and customer-focused solutions that improve satisfaction, strengthen engagement, and support long-term growth.

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
                Talk to Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
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
              Supporting the

                <br />
               Gaming Industry
              </h2>

              <p className="mt-8 max-w-xl whitespace-pre-line text-muted-foreground leading-relaxed">
                {"The gaming industry operates around the clock, requiring\n reliable customer support and efficient business operations.\n Bencos360 helps gaming companies deliver exceptional player\n experiences through scalable support services, operational\n excellence, and customer-focused solutions."}
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



      {/* ======================= DEDICATED PRACTICE ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl  text-center  ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
          A complete operating layer for modern gaming businesses
          </motion.h2>
         
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
          Purpose-built for every corner 
            <br />
            of gaming
          </motion.h2>

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
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl">
              Experience, scale, and a 

                
              customer-first approach
              </h2>

              <p className="mt-8 max-w-xl whitespace-pre-line text-muted-foreground leading-relaxed">
                {"Bencos360 brings together experienced professionals, scalable delivery models, and a true customer-first approach to help gaming businesses improve operational efficiency and deliver exceptional player support worldwide always with the player experience as the priority."}
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
                src={PHILOSOPHY1_IMAGE}
                alt="Bencos executives discussing strategy"
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
            Transform your gaming operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-sm text-muted-foreground md:text-base"
          >
           Partner with Bencos360 to elevate player experiences streamline operations, and create scalable,<br/> high-performing solutions that support the future of your gaming business.
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
