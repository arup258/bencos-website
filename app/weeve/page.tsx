"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 638.webp"

// STAND-IN IMAGE — every photo in /public/images is genomics/lab stock, and
// Weeve is a financial-services product. Drop the real photo in and point this
// at it; the layout does not need to change.
const INTRO_IMAGE = "/images/image 639.png"

// Benefit bullets in the "Introducing Weeve" split.
const introBenefits = [
  "Reduce delinquency rates",
  "Improve member engagement",
  "Boost collections efficiency",
]

// Features & Benefits cards.
//
// IMAGES PENDING: leave `image` empty and the card falls back to the project's
// grey /placeholder.svg, the same pattern the homepage news cards use. None of
// the photos in /public/images suit these (the library is genomics/lab stock,
// and a scientist at a microscope would read as wrong on "Multiple Payment
// Methods"). Fill in a path per card as the real artwork arrives — they can be
// added one at a time.
const features = [
  {
    title: "Flexible Hosting",
    description: "Choose between SaaS/Cloud or On-Prem options to suit your institution’s needs.",
    image: "/images/image 640.png",
  },
  {
    title: "Multiple Payment Methods",
    description:
      "Support for ACH, Credit Cards, Google Pay, and Apple Pay to make payments easy.",
    image: "/images/image 641.png",
  },
  {
    title: "Customizable UI",
    description: "A clean, modern interface tailored to your brand.",
    image: "/images/image 642.png",
  },
  {
    title: "Advanced Reporting",
    description:
      "Track payments, promises-to-pay, and delinquency reasons with detailed metrics.",
    image: "/images/image 643.png",
  },
  {
    title: "Seamless Integration",
    description: "Automatic syncing with existing collection platforms and core systems.",
    image: "/images/image 644.png",
  },
  {
    title: "Mobile-First Design",
    description: "Optimized for mobile, with smooth transitions to desktop and tablet.",
    image: "/images/image 645.png",
  },
  {
    title: "24/7 Automated Collection",
    description: "Automate outreach anytime, freeing your team to focus on high-value tasks.",
    image: "/images/image 646.png",
  },
  {
    title: "Multi-Channel Comms",
    description: "Engage members via text, email, or phone for higher response rates.",
    image: "/images/image 647.png",
  },
]

// Payment-experience section. Photo pending, same as the feature cards.
const PAYMENT_IMAGE = "/images/image 648.png"

// Screenshots for the two product mockups. Set either one and it replaces the
// version built in markup below; leave it empty and the built version shows, so
// the page never renders a gap while the artwork is being prepared.
const PHONE_IMAGE = "/images/image 654.png"
const PORTAL_IMAGE = ""

// Rows in the phone mockup. Exactly one should be `selected`.
const paymentMethods = [
  { name: "ACH", selected: true },
  { name: "Credit Card", selected: false },
  { name: "Google Pay", selected: false },
  { name: "Apple Pay", selected: false },
]

// Photos pending, same as the feature cards.
const INTEGRATION_IMAGE = "/images/image 649.png"
const HOSTING_IMAGE = "/images/image 650.png"
const BRAND_IMAGE = "/images/image 651.png"

/** Vertical flow shown beside the integration copy, in order. */
const integrationFlow = [
  "Collection platform",
  "Weeve",
  "Collection activity",
  "Reporting",
]

const hostingOptions = [
  { name: "SaaS / Cloud", detail: "Hosted by Weeve" },
  { name: "On-Prem", detail: "Hosted in your environment" },
]

const TANGENESIS_IMAGE = "/images/image 652.webp"
const CLOSING_IMAGE = "/images/image 653.webp"

// Hero copy. `title` renders one line per entry — add a second string to split
// the headline across two lines.
const hero = {
  eyebrow: "What We do",
  title: ["Simplify Loan Collections. Maximize Recovery Results."],
  description:
    "Weeve is an all-in-one loan delinquency management solution that helps financial institutions reduce delinquency rates, improve member engagement, and boost collections efficiency with automated outreach for early- and late-stage delinquencies.",
  cta: { label: "Schedule a Demo", href: "/contact" },
  imageAlt: "A research operations floor with genomic dashboards on screen",
}

export default function WeevePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt={hero.imageAlt}
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
              {hero.eyebrow}
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
              className="mt-8 text-3xl sm:text-4xl md:text-5xl font-elegant thin tracking-wide text-white leading-[1.25]"
            >
              {/* One <span> per entry, so the headline works whether `title`
                  holds one line or several. Indexing title[1] directly left a
                  stray <br /> and an empty line when the copy became one line. */}
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-6xl text-base font-light leading-relaxed text-white"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href={hero.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                {hero.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== INTRODUCING WEEVE ===================== */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={INTRO_IMAGE}
                alt="A financial services professional reviewing accounts on a laptop"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Introducing Weeve
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-poppins text-foreground md:text-4xl">
                Streamline your loan delinquency management.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Weeve is a powerful, all-in-one solution built for financial
                institutions. From early-stage to late-stage delinquencies, it
                brings automated outreach, member communication, payments and
                reporting into a single experience.
              </p>

              <div className="mt-8 h-px w-full bg-border" />

              <ul className="mt-8 space-y-4">
                {introBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-green-600" />
                    <span className="text-sm font-medium text-foreground md:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURES & BENEFITS ===================== */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Features &amp; Benefits
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-2xl font-semibold leading-snug text-foreground md:text-4xl"
          >
            Everything you need to simplify collections.
          </motion.h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                // Stagger within a row of four, then restart, so the cards
                // arrive row by row rather than in one long cascade.
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md"
              >
                <div className="overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-medium text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PAYMENT EXPERIENCE ===================== */}
      <section className="bg-muted/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Copy + photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Payment Experience
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-snug text-foreground md:text-4xl">
                Make payments easier.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Support for ACH, Credit Cards, Google Pay, and Apple Pay so members can pay quickly and conveniently reducing friction and improving recovery rates.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src={PAYMENT_IMAGE || "/placeholder.svg"}
                  alt="A member paying contactlessly by phone at a card terminal"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <a
                href={hero.cta.href}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                {hero.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Phone: a supplied screenshot if there is one, otherwise the
                mockup built in markup — whose copy stays editable and
                translates with the rest of the page. */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2"
            >
              {PHONE_IMAGE ? (
                <img
                  src={PHONE_IMAGE}
                  alt="The Weeve payment screen on a phone, with ACH selected"
                  className="mx-auto w-full max-w-[320px] rounded-[2.5rem] shadow-2xl"
                />
              ) : (
              <div className="mx-auto w-full max-w-[320px] rounded-[2.5rem] bg-neutral-900 p-3 shadow-2xl">
                {/* Speaker slot */}
                <div className="mx-auto h-1 w-12 rounded-full bg-white/25" />

                {/* Title sits on the device chrome, above the screen */}
                <div className="px-3 pb-5 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Weeve
                  </p>
                  <p className="mt-1.5 text-lg font-semibold text-white">Make a payment</p>
                </div>

                {/* Screen */}
                <div className="rounded-[1.75rem] bg-white p-4">
                  <ul className="space-y-3">
                    {paymentMethods.map((method) => (
                      <li
                        key={method.name}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                          method.selected
                            ? "border-green-600/40 bg-green-50"
                            : "border-neutral-200 bg-white"
                        }`}
                      >
                        <span className="text-sm font-medium text-neutral-800">
                          {method.name}
                        </span>
                        <span
                          aria-hidden
                          className={`h-3.5 w-3.5 rounded-full ${
                            method.selected
                              ? "bg-green-600"
                              : "border border-neutral-300 bg-white"
                          }`}
                        />
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 rounded-xl bg-neutral-100 px-4 py-3">
                    <p className="text-[11px] text-neutral-500">Prefer to arrange a date?</p>
                    <p className="mt-0.5 text-sm font-semibold text-neutral-900">
                      Set a promise-to-pay
                    </p>
                  </div>

                  <div className="mt-10 rounded-xl bg-neutral-900 px-4 py-3 text-center">
                    <span className="text-sm font-semibold text-white">Continue</span>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-white/25" />
              </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== SEAMLESS INTEGRATION ===================== */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={INTEGRATION_IMAGE || "/placeholder.svg"}
                alt="Fibre-optic cables carrying data between systems"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Seamless Integration
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                Seamless integration
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Weeve is a powerful, all-in-one solution built for financial
                institutions. From early-stage to late-stage delinquencies, it
                brings automated outreach, member communication, payments and
                reporting into a single experience.
              </p>

              {/* Each step sits under a rule with a short connector dropping to
                  the next, reading as one continuous flow. */}
              <ul className="mt-8">
                {integrationFlow.map((step) => (
                  <li key={step} className="border-t border-border pt-3">
                    <p className="text-sm text-foreground">{step}</p>
                    <span aria-hidden className="mt-2 block h-4 w-px bg-border" />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== FLEXIBLE HOSTING ===================== */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Deployment
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                Flexible Hosting
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Choose between SaaS/Cloud or On-Prem options to suit your needs.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                {hostingOptions.map((option) => (
                  <div
                    key={option.name}
                    className="rounded-xl border border-border px-5 py-3"
                  >
                    <p className="text-sm font-semibold text-foreground">{option.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{option.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={HOSTING_IMAGE || "/placeholder.svg"}
                alt="A server beside a cloud, representing on-prem and cloud hosting"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== CUSTOMIZABLE UI ===================== */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={BRAND_IMAGE || "/placeholder.svg"}
                alt="An analyst reviewing portfolio dashboards on a large display"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Customizable UI
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                Designed around your brand.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A clean, modern interface tailored to your brand.
              </p>

              {/* Member-portal preview: a supplied screenshot if there is one,
                  otherwise the version built in markup, whose label stays
                  editable and translates with the page. */}
              {PORTAL_IMAGE ? (
                <img
                  src={PORTAL_IMAGE}
                  alt="The Weeve member portal styled with an institution's branding"
                  className="mt-6 w-full rounded-lg border border-border shadow-sm"
                />
              ) : (
              <div className="mt-6 overflow-hidden rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-2 bg-neutral-900 px-3 py-2.5">
                  <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
                  <span className="text-[11px] text-white/80">
                    Your institution &middot; Member portal
                  </span>
                </div>

                <div className="bg-white p-4">
                  <div aria-hidden className="space-y-2">
                    <div className="h-2 w-3/4 rounded bg-neutral-200" />
                    <div className="h-2 w-2/3 rounded bg-neutral-200" />
                  </div>
                  <div aria-hidden className="mt-4 flex gap-2">
                    <div className="h-6 w-24 rounded bg-green-600" />
                    <div className="h-6 w-24 rounded border border-neutral-200" />
                  </div>
                </div>
              </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== THE COMPANY BEHIND WEEVE ===================== */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={TANGENESIS_IMAGE || "/placeholder.svg"}
                alt="The Tangenesis team working together around a laptop"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-sm text-muted-foreground">The company behind Weeve</p>

              <h2 className="mt-3 text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                Tangenesis
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
               Tangenesis is a trusted team of former Temenos LMS architects, developers, and consultants with deep expertise in financial institution platforms. Founded in 2021, the team prioritizes Transparency, Integrity, and Quality while serving the unique needs of banks and credit unions.

              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Founded in 2021 by David Miller, a 15-year veteran of the Temenos
                LMS platform, TANGENESIS is a team of Temenos experts dedicated to
                serving financial institutions. We prioritize three essential
                pillars of business: Transparency, Integrity, and Quality.
              </p>

              <a
                href={hero.cta.href}
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                {hero.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING CTA ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CLOSING_IMAGE || "/placeholder.svg"}
            // Purely atmospheric — the heading carries the meaning, so an empty
            // alt keeps screen readers from announcing scenery.
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-neutral-950/" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
        >
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            Ready to transform your collections strategy?
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80">
            Weeve helps financial institutions reduce delinquency rates, improve
            member engagement and boost collections efficiency — with flexible,
            automated outreach for early-stage and late-stage delinquencies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* <a
              href={hero.cta.href}
              className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
            >
             Contact Tangenesis
            </a> */}
            <a
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Tangenesis
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
