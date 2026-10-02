"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Building,
  Building2,
  Droplet,
  Eye,
  FlaskConical,
  GraduationCap,
  Handshake,
  HeartHandshake,
  HeartPulse,
  Hospital,
  Lightbulb,
  Menu,
  Microscope,
  ScatterChart,
  Stethoscope,
  TrendingUp,
  Truck,
  Users,
  X,
} from "lucide-react"

// All page images live in /public/images/bref-microsite — replace a file (same name) to swap it.
const IMG = "/images/bref-microsite"
const LOGO = "/images/bref_logo.png"

// "Connect With BREF" opens a WhatsApp chat with this number (country code + number, digits only).
const WHATSAPP_NUMBER = "919606666610"
const WHATSAPP_MESSAGE = "Hello BREF, I'd like to connect with the Bencos Research and Education Foundation."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const EMAIL = "contact@bref.org"

const GREEN = "#2e8b3e"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Impact", href: "#impact" },
  { label: "Healthcare", href: "#healthcare" },
  { label: "Contact", href: "#contact" },
]

const focusAreas = [
  {
    icon: Microscope,
    title: "Research & Innovation",
    description:
      "Advance knowledge in Life Sciences and related fields while supporting innovation in medicine, healthcare technology and patient care.",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description:
      "Develop high-standard teaching, training, continuing education and online learning opportunities for students and professionals.",
  },
  {
    icon: Handshake,
    title: "Industry Collaboration",
    description:
      "Build meaningful connections between academia and industry through faculty exchange, consultancy, collaborative research and institutional partnerships.",
  },
  {
    icon: Users,
    title: "Social Outreach",
    description:
      "Support communities through extension programs, educational assistance, scholarships, technology access and youth empowerment.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    description:
      "Promote healthcare infrastructure and services including hospitals, clinics, diagnostic centres and healthcare support initiatives.",
  },
]

const researchTiles = [
  { icon: Microscope, label: "Microscopy" },
  { icon: ScatterChart, label: "Molecules" },
  { icon: FlaskConical, label: "Analysis" },
]

const learningSteps = [
  { icon: BookOpen, title: "Learn", description: "Access quality education and resources for continuous growth." },
  { icon: Users, title: "Connect", description: "Bridging education, research and industry for greater impact." },
  { icon: TrendingUp, title: "Empower", description: "Building skills and confidence to create a better tomorrow." },
]

// Grid order matches the design: 01 · 03 on the first row, 02 · 04 on the second.
const collaborations = [
  { n: "01", icon: BookOpen, title: "Knowledge Exchange", description: "Facilitating the exchange of ideas, expertise, and best practices for mutual growth." },
  { n: "03", icon: Microscope, title: "Collaborative Research", description: "Co-creating research that drives innovation and delivers impactful outcomes." },
  { n: "02", icon: Building2, title: "Industrial Consultancy", description: "Delivering domain expertise and strategic solutions to address real-world challenges." },
  { n: "04", icon: Building, title: "Benchmark Institution", description: "Upholding global standards through continuous learning and excellence." },
]

const impactCards = [
  { icon: GraduationCap, title: "Education Access", description: "Expanding access to quality education for underprivileged students and communities.", image: `${IMG}/impact-1.webp` },
  { icon: Users, title: "Community Development", description: "Strengthening communities through sustainable programs and local partnerships.", image: `${IMG}/impact-2.webp` },
  { icon: Lightbulb, title: "Youth Empowerment", description: "Empowering young minds with skills, mentorship, and opportunities to grow.", image: `${IMG}/impact-3.webp` },
  { icon: HeartHandshake, title: "Healthcare Outreach", description: "Improving health and well-being through awareness, support, and outreach initiatives.", image: `${IMG}/impact-4.webp` },
]

const healthcareServices = [
  { icon: Hospital, label: "Hospitals" },
  { icon: Eye, label: "Organ & Eye Banks" },
  { icon: Stethoscope, label: "Diagnostic Centres" },
  { icon: Truck, label: "Health Centres" },
  { icon: HeartPulse, label: "Rehabilitation" },
  { icon: Droplet, label: "Blood Banks" },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const container = "mx-auto w-full max-w-[1440px] px-4 sm:px-[18px]"
const greenBtn =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#2f8a44] to-[#1d5e2c] font-semibold text-white shadow-[0_8px_18px_rgba(29,94,44,0.35)] transition-opacity hover:opacity-90"

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs font-semibold uppercase text-[#2e8b3e] ${className}`}>{children}</p>
}

function WhatsAppLink({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-[#f8fafb] transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className={`${container} flex h-[80px] items-center justify-between lg:h-[102px]`}>
        <Link href="/bref-microsite" aria-label="Bencos Research and Education Foundation home" className="shrink-0">
          <img src={LOGO} alt="Bencos Research and Education Foundation" className="h-14 w-auto lg:h-[74px]" />
        </Link>

        <nav className="hidden items-center lg:flex">
          <div className="mr-[68px] flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-neutral-950 transition-colors hover:text-[#2e8b3e]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <WhatsAppLink className="rounded-full bg-gradient-to-r from-[#1fbf6a] to-[#11807a] px-6 py-[11px] text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Connect With BREF
          </WhatsAppLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-900 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-neutral-200 bg-[#f8fafb] lg:hidden"
          >
            <div className={`${container} flex flex-col gap-1 py-4`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-[15px] font-medium text-neutral-900 hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
              <WhatsAppLink className="mt-2 rounded-full bg-gradient-to-r from-[#1fbf6a] to-[#11807a] px-6 py-3 text-center text-[15px] font-semibold text-white">
                Connect With BREF
              </WhatsAppLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  const bottomLinks = [
    { label: "Research", href: "#research" },
    { label: "Education", href: "#education" },
    { label: "Healthcare", href: "#healthcare" },
    { label: "Social Development", href: "#impact" },
  ]
  return (
    <footer className="border-t border-neutral-200 bg-[#f9f8f5]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-20 sm:grid-cols-2 sm:px-8 lg:grid-cols-[285px_318px_318px_1fr] lg:px-[160px]">
        <Link href="/bref-microsite" aria-label="BREF home" className="inline-block">
          <img src={LOGO} alt="Bencos Research and Education Foundation" className="h-[112px] w-auto" />
        </Link>
        <ul className="space-y-3 text-[13px] text-neutral-600">
          <li><a href="#about" className="font-medium text-neutral-950 hover:text-[#2e8b3e]">About</a></li>
          <li><a href="#education" className="hover:text-[#2e8b3e]">Education</a></li>
          <li><a href="#impact" className="hover:text-[#2e8b3e]">Social Impact</a></li>
          <li><a href="#contact" className="hover:text-[#2e8b3e]">Contact</a></li>
        </ul>
        <ul className="space-y-3 text-[13px] text-neutral-600">
          <li><a href="#research" className="font-medium text-neutral-950 hover:text-[#2e8b3e]">Research</a></li>
          <li><a href="#collaboration" className="hover:text-[#2e8b3e]">Industry Collaboration</a></li>
          <li><a href="#healthcare" className="hover:text-[#2e8b3e]">Healthcare</a></li>
        </ul>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-600">Contact</p>
          <a href={`mailto:${EMAIL}`} className="mt-3 block text-[13px] text-neutral-950 hover:text-[#2e8b3e]">
            {EMAIL}
          </a>
          <div className="mt-5 flex gap-5 text-[11px] text-neutral-700">
            <a href="https://www.linkedin.com/company/bencoshealth/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#2e8b3e]">LI</a>
            <a href="https://x.com/BencosRS" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-[#2e8b3e]">X</a>
            <a href="https://www.instagram.com/bencosrs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#2e8b3e]">IN</a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-6 text-[11px] text-neutral-600 sm:px-8 lg:px-[160px]">
          <p>© {new Date().getFullYear()} Bencos Research and Education Foundation</p>
          <div className="flex flex-wrap items-center gap-4">
            {bottomLinks.map((l, i) => (
              <span key={l.label} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden>•</span>}
                <a href={l.href} className="hover:text-[#2e8b3e]">{l.label}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function BrefMicrositePage() {
  return (
    <div className="scroll-smooth bg-[#f8fafb] font-sans text-neutral-950">
      <Header />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-neutral-600">
        <img
          src={`${IMG}/hero.png`}
          alt="Microscope, test tubes and a molecular model in a research lab"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/40 md:hidden" />
        <div className={`${container} relative flex min-h-[520px] items-center py-16 lg:min-h-[605px]`}>
          <div className="max-w-[700px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-medium leading-[1.2] text-white sm:text-5xl lg:text-[54px] lg:leading-[1.22]"
            >
              Advancing Life Sciences.
              <br />
              Empowering Knowledge.
              <br />
              <span className="text-[#4cd07a]">Creating Impact.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-3 max-w-[640px] text-base leading-[1.75] text-white"
            >
              Bencos Research and Education Foundation works across research, education, healthcare and
              social development to build pathways for innovation, excellence and meaningful societal
              progress.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#about" className={`${greenBtn} h-[52px] px-7 text-[15px]`}>
                Explore Our Mission →
              </a>
              <a
                href="#research"
                className="inline-flex h-[52px] items-center rounded-full bg-[#f7f4ee] px-7 text-[15px] font-semibold text-neutral-900 shadow-md transition-colors hover:bg-white"
              >
                Our Focus Areas
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ FOCUS AREAS ============================ */}
      <section id="about" className="scroll-mt-24 mt-12 bg-[#f3f6f7] pb-16 pt-12 lg:mt-[112px] lg:pb-28 lg:pt-[70px]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[82px]">
          <motion.div {...fadeUp} className="flex flex-wrap items-start justify-between gap-6">
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#162218] sm:text-[52px]">
              Where Knowledge
              <br />
              Meets Impact
            </h2>
            <p className="max-w-[310px] text-[15px] leading-[1.55] text-neutral-600 lg:mr-[70px] lg:mt-[10px]">
              Our work connects scientific advancement with education, healthcare, industry and community
              development.
            </p>
          </motion.div>
          <div className="mt-10 space-y-4 lg:mt-[76px] lg:max-w-[1290px]">
            {focusAreas.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="grid grid-cols-[48px_56px_1fr] items-center gap-x-3 gap-y-3 rounded-[22px] bg-[#f5f8f9] px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06),inset_0_1px_0_#fff] sm:px-5 md:grid-cols-[68px_92px_1fr_1.35fr] md:gap-0"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7faf9] text-sm md:h-[68px] md:w-[68px] md:text-[15px] font-semibold text-[#2e8b3e] shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7faf9] text-[#2e8b3e] shadow-[0_6px_16px_rgba(15,23,42,0.06)] md:ml-6 md:h-[92px] md:w-[92px]">
                    <Icon className="h-6 w-6 md:h-10 md:w-10" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-lg font-medium leading-snug text-neutral-950 md:ml-6 md:text-[22px] md:border-l md:border-neutral-200 md:py-6 md:pl-6">
                    {f.title}
                  </h3>
                  <p className="col-span-3 text-sm leading-[1.5] text-neutral-600 md:col-span-1 md:pr-6">{f.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================ RESEARCH ============================ */}
      <section id="research" className="scroll-mt-24 mt-12 lg:mt-[120px] bg-gradient-to-br from-[#f1f5f6] to-[#e6ecee] py-16 lg:py-[64px]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 pl-4 pr-4 sm:pl-[25px] lg:grid-cols-[440px_1fr] lg:gap-[25px] lg:pr-2">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-semibold uppercase text-neutral-600">Research &amp; Innovation</p>
            <h2 className="mt-6 text-3xl leading-[1.25] text-[#1d2a2e] sm:text-[38px] lg:mt-16">
              Advancing Knowledge.
              <br />
              Creating Impact.
            </h2>
            <div className="mt-8 flex gap-4 sm:gap-6 lg:mt-28">
              {researchTiles.map((t) => {
                const Icon = t.icon
                return (
                  <div
                    key={t.label}
                    className="flex h-[104px] w-[104px] flex-col items-center justify-center gap-3 rounded-2xl bg-[#f8fafa] shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                  >
                    <Icon className="h-7 w-7 text-[#2e8b3e]" />
                    <span className="text-[10px] text-neutral-600">{t.label}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
          <motion.img
            {...fadeUp}
            src={`${IMG}/research.webp`}
            alt="Scientist using a microscope in a bright laboratory"
            className="aspect-[942/638] w-full rounded-[32px] object-cover lg:rounded-[64px] shadow-[0_24px_50px_rgba(15,23,42,0.18)]"
          />
        </div>
      </section>

      {/* ============================ EDUCATION ============================ */}
      <section id="education" className="scroll-mt-24 bg-[#f3f7fa] py-20">
        <div className="mx-auto grid max-w-[1440px] items-start gap-14 px-4 sm:px-8 lg:grid-cols-[617px_1fr] lg:gap-[65px] lg:px-[90px]">
          <motion.div {...fadeUp} className="relative pb-6">
            <img
              src={`${IMG}/education.webp`}
              alt="Team gathered around monitors in a modern office"
              className="aspect-[4/3] w-full rounded-[28px] object-cover object-top lg:aspect-[617/697] shadow-[0_20px_40px_rgba(15,23,42,0.15)]"
            />
            <div className="absolute bottom-0 left-4 right-4 flex items-center gap-4 rounded-[22px] border border-white/70 bg-white/55 px-5 py-6 backdrop-blur-md sm:left-8 sm:right-auto sm:w-[420px]">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#2e8b3e] shadow">
                <GraduationCap className="h-6 w-6" />
              </span>
              <p className="text-[17px] leading-snug text-neutral-600">
                Knowledge today,
                <br />
                <span className="font-semibold text-neutral-950">Empowerment tomorrow.</span>
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2e8b3e]">Education &amp; Knowledge</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-[#13254a] sm:text-[52px]">
              Building knowledge.
              <br />
              <span className="text-[#2e8b3e]">Shaping futures.</span>
            </h2>
            <p className="mt-4 max-w-[420px] text-[17px] leading-[1.55] text-neutral-600">
              We create learning experiences and knowledge solutions that drive growth and meaningful impact.
            </p>
            <div className="relative mt-8 space-y-5 pl-9">
              <span aria-hidden className="absolute bottom-[90px] left-[11px] top-[70px] w-[2px] bg-blue-300/70" />
              {learningSteps.map((s, i) => {
                const Icon = s.icon
                return (
                  <div key={s.title} className="relative">
                    <span aria-hidden className="absolute -left-[29px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#2e8b3e] ring-4 ring-[#e3eef8]" />
                    <div className="flex items-center gap-6 rounded-[22px] border border-white bg-white/70 px-6 py-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] lg:max-w-[560px]">
                      <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-white to-[#dbe9fb] text-[#2e8b3e]">
                        <Icon className="h-7 w-7" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-[#2e8b3e]">{String(i + 1).padStart(2, "0")}</p>
                        <p className="mt-1 text-lg font-semibold text-neutral-950">{s.title}</p>
                        <p className="mt-1 max-w-[200px] text-xs leading-[1.45] text-neutral-600">{s.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================ COLLABORATION ============================ */}
      <section id="collaboration" className="scroll-mt-24 bg-white py-[70px]">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-4 sm:px-8 lg:grid-cols-[720px_1fr] lg:gap-[50px] lg:px-[64px]">
          <motion.div {...fadeUp}>
            <div className="grid gap-8 md:grid-cols-[1fr_340px]">
              <div>
                <Eyebrow>Industry &amp; Academia</Eyebrow>
                <h2 className="mt-5 text-4xl font-bold leading-[1.15] text-[#1b221d] sm:text-[42px]">
                  Connecting Academia with Industry
                </h2>
              </div>
              <p className="text-[15px] leading-[1.5] text-neutral-500 md:pt-7">
                Strong industry linkages create pathways for knowledge transfer, practical research, and
                innovation. BREF seeks to strengthen collaboration between institutions, researchers, and
                global enterprises.
              </p>
            </div>
            <div className="mt-9 grid gap-4 rounded-[28px] bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2">
              {collaborations.map((c) => {
                const Icon = c.icon
                return (
                  <div
                    key={c.title}
                    className="min-h-[218px] rounded-[22px] bg-white px-6 py-6 shadow-[0_6px_18px_rgba(15,23,42,0.07)] ring-1 ring-neutral-100"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-[#2e8b3e]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-base font-semibold text-[#2e8b3e]">{c.n}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-neutral-950">{c.title}</h3>
                    <p className="mt-2 text-[13px] leading-[1.5] text-neutral-500">{c.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
          <motion.img
            {...fadeUp}
            src={`${IMG}/industry.webp`}
            alt="Colleagues collaborating over a laptop at a conference table"
            className="aspect-[4/3] w-full rounded-[28px] object-cover lg:aspect-[540/756] shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
          />
        </div>
      </section>

      {/* ============================ SOCIAL IMPACT ============================ */}
      <section id="impact" className="scroll-mt-24 border-t border-neutral-200 bg-white pb-16 pt-12">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[80px]">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_652px]">
            <motion.div {...fadeUp} className="pt-5">
              <p className="pl-3.5 text-xs font-semibold uppercase text-[#2e8b3e]">Social Impact</p>
              <h2 className="mt-12 text-4xl font-bold leading-[1.2] tracking-tight text-[#1b221d] sm:text-[56px]">
                Creating Impact
                <br />
                Beyond Education
              </h2>
              <p className="mt-12 max-w-[540px] text-base leading-[1.65] text-neutral-900">
                We believe in building opportunities, empowering communities, and creating meaningful change
                that transforms lives and shapes a better future.
              </p>
              <a href="#contact" className={`${greenBtn} mt-7 h-[50px] px-7 text-base`}>
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
            <motion.img
              {...fadeUp}
              src={`${IMG}/social.webp`}
              alt="Teacher and children doing crafts in a classroom"
              className="aspect-[652/392] w-full rounded-[22px] object-cover"
            />
          </div>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {impactCards.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.article
                  key={c.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-[26px] bg-white px-6 pb-8 pt-7 shadow-[0_10px_30px_rgba(15,23,42,0.1)] ring-1 ring-neutral-100"
                >
                  <img src={c.image} alt={c.title} className="aspect-[227/203] w-full rounded-lg object-cover" />
                  <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[15px] text-neutral-950 shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-[#2e8b3e]">
                      <Icon className="h-4 w-4" />
                    </span>
                    {c.title}
                  </span>
                  <span className="mt-3 block h-[3px] w-8 rounded-full bg-[#2e8b3e]" />
                  <p className="mt-6 text-sm leading-[1.6] text-neutral-900">{c.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================ HEALTHCARE ============================ */}
      <section id="healthcare" className="scroll-mt-24 bg-[#f9f8f5] py-[108px]">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-4 sm:px-8 lg:grid-cols-[620px_1fr] lg:gap-[64px] lg:px-[80px]">
          <motion.div {...fadeUp} className="rounded-[36px] bg-white p-4">
            <img
              src={`${IMG}/healthcare.webp`}
              alt="Doctor in conversation with a patient in a bright clinic"
              className="aspect-[588/648] w-full rounded-[30px] object-cover"
            />
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="pt-7">
            <Eyebrow className="text-[15px]">Healthcare</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.15] text-[#1d2939] sm:text-[48px]">
              Extending Impact Into Healthcare
            </h2>
            <p className="mt-4 max-w-[580px] text-base leading-[1.65] text-neutral-600">
              Beyond research and education, BREF&apos;s vision includes supporting healthcare facilities and
              medical services, with particular attention to underserved and marginalized communities.
            </p>
            <div className="mt-9 grid gap-3.5 sm:grid-cols-2">
              {healthcareServices.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.label}
                    className="flex items-center gap-4 rounded-2xl bg-white px-4 py-[15px] shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f3f2] text-[#2e8b3e]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-base font-semibold text-neutral-900">{s.label}</span>
                  </div>
                )
              })}
            </div>
            <a
              href="#contact"
              className="group mt-9 inline-flex h-[54px] items-center gap-3 rounded-2xl bg-gradient-to-b from-[#3b7d4c] to-[#245533] px-8 text-base font-semibold text-white shadow-[0_10px_22px_rgba(36,85,51,0.3)] transition-opacity hover:opacity-90"
            >
              Explore Healthcare
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section id="contact" className="scroll-mt-24 relative mt-14 overflow-hidden bg-[#efede8]">
        <img
          src={`${IMG}/cta.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative mx-auto max-w-[1440px] px-4 pb-24 pt-28 sm:px-8 lg:px-[160px] lg:pb-[170px] lg:pt-[220px]">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-600">Let&apos;s talk</p>
            <h2
              className="mt-10 text-5xl leading-[1.15] text-[#1b2b22] sm:text-[62px]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Let&apos;s Build What Comes
              <br />
              Next.
            </h2>
            <p className="mt-10 max-w-[600px] text-base leading-[1.65] text-neutral-600">
              Through knowledge, collaboration and innovation, we can create stronger pathways for research,
              education, healthcare and social development.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppLink className="inline-flex h-[45px] items-center rounded-full bg-[#14241c] px-7 text-sm font-medium text-white transition-colors hover:bg-[#1f3a2c]">
                Connect With BREF
              </WhatsAppLink>
              <a
                href="#about"
                className="inline-flex h-[45px] items-center rounded-full border border-neutral-400 bg-white/30 px-7 text-sm font-medium text-neutral-900 transition-colors hover:bg-white/70"
              >
                Explore Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
