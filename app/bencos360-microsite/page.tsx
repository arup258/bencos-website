"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, animate, useInView } from "framer-motion"
import {
  Activity,
  ArrowRight,
  Atom,
  BarChart2,
  BarChart3,
  BrainCircuit,
  ChevronRight,
  Clock,
  Eye,
  Globe,
  LineChart,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  MessageSquare,
  Phone,
  PieChart,
  Rocket,
  Send,
  Shield,
  ShieldCheck,
  Trophy,
  Users,
  Workflow,
  X,
  XCircle,
  Zap,
  Bot,
} from "lucide-react"

// All page images live in /public/images/bencos360 — replace a file (same name) to swap it.
const IMG = "/images/bencos360"
const LOGO = `${IMG}/bencos360-logo.png`
const FOOTER_LOGO = `${IMG}/bencos360-logo-white.png`

// Get a free access key at https://web3forms.com and paste it here.
const WEB3FORMS_ACCESS_KEY = "ea96e555-0fac-4c10-928a-bb399071be8b"

const PHONE = "+91 96066 66610"
const EMAIL = "info@bencosife.com"
const WHATSAPP_URL = "https://wa.me/919606666610"

const BLUE = "#1a6ff4"

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
]

// `count` animates up to that number when the row scrolls into view; `suffix` follows it.
const impactStats = [
  {
    icon: Trophy,
    count: 232,
    suffix: "+",
    title: "Success Journeys",
    description: "Successfully partnering with our clients worldwide.",
    color: "#7a4dfc",
    gradient: "from-[#8b5cf6] to-[#5b4df0]",
  },
  {
    icon: Globe,
    count: 521,
    suffix: "+",
    title: "Global Projects",
    description: "Projects delivered across industries and geographies.",
    color: "#4f6bf5",
    gradient: "from-[#4f6bf5] to-[#3b82f6]",
  },
  {
    icon: Clock,
    count: 24779,
    suffix: "+",
    title: "Hours Of Support",
    description: "Round-the-clock support that keeps you ahead.",
    color: "#14b8a6",
    gradient: "from-[#10b3a3] to-[#14b8a6]",
  },
  {
    icon: Users,
    count: 200,
    suffix: "+",
    title: "Committed Team",
    description: "Experts dedicated to your success, always.",
    color: "#34b24c",
    gradient: "from-[#2fb14a] to-[#3fbf5a]",
  },
]

const trustItems = [
  { icon: ShieldCheck, title: "Trusted by businesses", sub: "across the globe" },
  { icon: LineChart, title: "Delivering impact", sub: "that matters" },
  { icon: Rocket, title: "Driving growth", sub: "through innovation" },
  { icon: XCircle, title: "People. Process.", sub: "Performance." },
]

const solutions = [
  { title: "Customer Experience", description: "Omnichannel support across voice, email, chat, and digital channels.", image: `${IMG}/solution-1.webp` },
  { title: "Customer Support", description: "Responsive, reliable support teams that represent your brand.", image: `${IMG}/solution-2.webp` },
  { title: "Agile Operations", description: "Efficient handling of business processes and operational workflows.", image: `${IMG}/solution-3.webp` },
  { title: "AI & Automation", description: "Intelligent automation that improves speed and consistency.", image: `${IMG}/solution-4.webp` },
  { title: "Workforce Outsourcing", description: "Flexible teams that scale with changing business needs.", image: `${IMG}/solution-5.webp` },
  { title: "Analytics & Quality", description: "Actionable insights that continuously improve service performance.", image: `${IMG}/solution-6.webp` },
]

const pillars = [
  { icon: Users, title: "People-led", description: "Empowering teams to deliver exceptional experiences." },
  { icon: BrainCircuit, title: "AI-enabled", description: "Intelligent automation that enhances every interaction." },
  { icon: BarChart2, title: "Data-driven", description: "Insights that help you make smarter business decisions." },
  { icon: BarChart3, title: "Scalable", description: "Built to grow with your business at every stage." },
]

const industries = [
  { title: "Healthcare", description: "Compliant patient and member support operations.", image: `${IMG}/industry-1.webp` },
  { title: "Financial Services", description: "Secure servicing for regulated customer journeys.", image: `${IMG}/industry-2.webp` },
  { title: "Technology", description: "Scalable technical support for fast-growing products.", image: `${IMG}/industry-3.webp` },
  { title: "Consumer & Retail", description: "High-volume care across every buying moment.", image: `${IMG}/industry-4.webp` },
]

const capabilities = [
  { icon: Atom, title: "Flexible engagement models", description: "Adaptable frameworks tailored to support scaling requirements and custom sample-size demands.", tint: "border-blue-500 text-blue-600" },
  { icon: Users, title: "Experienced delivery teams", description: "Domain-expert laboratory specialists overseeing operations for clinical-grade precision.", tint: "border-teal-500 text-teal-500" },
  { icon: Workflow, title: "Technology-first operations", description: "Automated bioinformatic workflows reducing manual hand-offs for faster turnaround times.", tint: "border-violet-500 text-violet-500" },
  { icon: LineChart, title: "Continuous optimization", description: "Rigorous QA pipelines ensuring continuous quality improvement at every step of sequencing.", tint: "border-emerald-500 text-emerald-500" },
]

const weeveFeatures = [
  { icon: Zap, title: "Automated Outreach", description: "Engage borrowers 24/7 across multiple channels." },
  { icon: MessageCircle, title: "Multi-Channel Communication", description: "SMS, Email, Voice & Push for better engagement." },
  { icon: BarChart2, title: "Real-Time Insights", description: "Track performance and make data-driven decisions." },
  { icon: Zap, title: "Personalized Messaging", description: "Tailor communication based on user preferences and behavior." },
]

const resilienceSteps = [
  { icon: Eye, title: "Detect", description: "AI models identify potential disruptions and emerging risks in real time." },
  { icon: Activity, title: "Assess", description: "Evaluate impact across operations, people, and supply chains." },
  { icon: Shield, title: "Respond", description: "Activate intelligent response plans and minimize business impact." },
  { icon: PieChart, title: "Evolve", description: "Continuously learn and strengthen resilience for the future." },
]

const insights = [
  { tag: "Artificial Intelligence", title: "The future of AI-assisted customer support", image: `${IMG}/insight-1.webp`, href: "/insights" },
  { tag: "Measurement", title: "Measuring CX beyond response times", image: `${IMG}/insight-2.webp`, href: "/insights" },
  { tag: "Operations", title: "Building scalable service operations", image: `${IMG}/insight-3.webp`, href: "/insights" },
]

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "Customer Experience", href: "#solutions" },
      { label: "Customer Support", href: "#solutions" },
      { label: "Back Office", href: "#solutions" },
      { label: "AI & Automation", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Insights", href: "#insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const container = "mx-auto w-full max-w-[1440px] px-4 sm:px-[17px]"

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="text-[15px] font-semibold uppercase text-[#1a6ff4]">{children}</p>
      <span className="mt-1.5 block h-[3px] w-12 rounded-full bg-[#1a6ff4]" />
    </div>
  )
}

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-[#1a6ff4]">{children}</span>
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
    <header className={`sticky top-0 z-50 bg-[#f8fafc] transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className={`${container} flex h-[80px] items-center justify-between lg:h-[102px]`}>
        <Link href="/bencos360-microsite" aria-label="Bencos360 home" className="shrink-0">
          <img src={LOGO} alt="Bencos360 — Redefining Business Opportunities" className="h-11 w-auto lg:h-[56px]" />
        </Link>

        <nav className="hidden items-center lg:flex">
          <div className="mr-[112px] flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-neutral-950 transition-colors hover:text-[#1a6ff4]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#1391d1] px-6 py-[11px] text-[15px] font-semibold text-white transition-colors hover:bg-[#0f7fb8]"
          >
            Talk to an Expert
          </a>
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
            className="overflow-hidden border-t border-neutral-200 bg-[#f8fafc] lg:hidden"
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
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[#1391d1] px-6 py-3 text-center text-[15px] font-semibold text-white"
              >
                Talk to an Expert
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

/** Impact cards whose numbers count up together once the row scrolls into view. */
function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, 1, {
      duration: 2,
      ease: "easeOut",
      onUpdate: setProgress,
      onComplete: () => setProgress(1),
    })
    return () => controls.stop()
  }, [inView])

  return (
    <div ref={ref} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[70px]">
      {impactStats.map((s, i) => {
        const Icon = s.icon
        const value = Math.max(1, Math.round(1 + (s.count - 1) * progress))
        return (
          <motion.div
            key={s.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative overflow-hidden rounded-[26px] bg-[#f3f6fb] px-6 pt-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
              <Icon className="h-6 w-6" style={{ color: s.color }} />
            </span>
            <p
              className={`mt-5 bg-gradient-to-r ${s.gradient} bg-clip-text text-[46px] font-semibold leading-none tabular-nums text-transparent`}
            >
              {value.toLocaleString("en-US")}
              {s.suffix}
            </p>
            <span className="mx-auto mt-4 block h-[3px] w-6 rounded-full" style={{ backgroundColor: s.color }} />
            <h3 className="mt-4 text-[15px] font-medium text-neutral-900">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-[160px] text-[11px] leading-[1.5] text-neutral-500">{s.description}</p>
            <div className="relative mx-auto mt-8 h-[50px] w-[104px]">
              <span
                className="absolute inset-0 rounded-t-full border-x border-t bg-white/60"
                style={{ borderColor: `${s.color}55`, boxShadow: `0 -6px 16px ${s.color}22` }}
              />
              <span
                className="absolute left-1/2 top-[24px] h-2 w-2 -translate-x-1/2 rounded-full"
                style={{ backgroundColor: s.color }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[Bencos360] Enquiry from ${form.name}`,
          from_name: "Bencos360 Contact Form",
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("done")
        setForm({ name: "", email: "", organization: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const label = "block text-sm font-medium text-neutral-900"
  const field =
    "mt-2.5 w-full rounded-lg border border-neutral-200 bg-[#f7f9fc] px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#1a6ff4] focus:bg-white focus:ring-2 focus:ring-[#1a6ff4]/15"

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] bg-white px-6 pb-16 pt-10 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:px-10"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1a6ff4]">
          <MessageSquare className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xl font-bold text-neutral-950">Send us a message</p>
          <p className="mt-1 text-sm text-neutral-600">Fill out the form and our team will get back to you.</p>
        </div>
      </div>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className={label}>
          First Name
          <input name="name" required value={form.name} onChange={handleChange} placeholder="e.g. Sarah" className={field} />
        </label>
        <label className={label}>
          Work Email
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="e.g. sarah@institution.org" className={field} />
        </label>
      </div>
      <label className={`${label} mt-7`}>
        Company
        <input name="organization" value={form.organization} onChange={handleChange} placeholder="Company Name" className={field} />
      </label>
      <label className={`${label} mt-7`}>
        Enquiry Details
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          className={`${field} resize-none`}
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1a6ff4] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#155fd6] disabled:opacity-70"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "done" && (
        <p className="mt-4 text-center text-sm text-green-700">Thanks! Our team will get back to you shortly.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-center text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <p className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-500">
        <Lock className="h-3.5 w-3.5" />
        Your information is secure and confidential.
      </p>
    </form>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0b1324] text-white">
      <div className="mx-auto max-w-[1440px] px-4 pt-[108px] sm:px-6 lg:px-[80px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[471px_320px_280px_1fr] lg:gap-0">
          <div>
            <Link href="/bencos360-microsite" aria-label="Bencos360 home" className="inline-block">
              <img src={FOOTER_LOGO} alt="Bencos360 — Redefining Business Opportunities" className="h-[62px] w-auto" />
            </Link>
            <p className="mt-10 text-[15px] leading-[1.8] text-white/70">
              Human expertise. Intelligent technology.
              <br />
              Better customer experiences.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-semibold uppercase text-white/50">{col.title}</p>
              <ul className="mt-5 space-y-4 text-[15px] text-white/70">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-[13px] font-semibold uppercase text-white/50">Contact</p>
            <ul className="mt-5 space-y-4 text-[15px] text-white/70">
              <li>
                <a href={`mailto:${EMAIL}`} className="underline hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li>Enterprise CX &amp; BPO Solutions</li>
              <li>Global delivery centres</li>
            </ul>
          </div>
        </div>
        <p className="px-5 py-20 text-[13px] text-white/50">
          © {new Date().getFullYear()} Bencos360. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function Bencos360MicrositePage() {
  return (
    <div className="scroll-smooth bg-[#f8fafc] font-sans text-neutral-950">
      <Header />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-neutral-800">
        <img
          src={`${IMG}/hero.png`}
          alt="Headset, phone and analytics tablet on a desk"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/45 md:hidden" />
        <div className={`${container} relative flex min-h-[520px] items-center py-16 lg:min-h-[605px]`}>
          <div className="max-w-[700px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[640px] text-4xl font-medium leading-[1.2] text-white sm:text-5xl lg:text-[54px] lg:leading-[1.22]"
            >
              Customer experiences that scale with <span className="text-[#2f7cf6]">your business.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-3 text-base leading-[1.75] text-white"
            >
              Bencos360 combines experienced teams, intelligent automation, and data-driven
              operations to help enterprises deliver faster, smarter, and more consistent customer
              experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-9 flex flex-wrap gap-8"
            >
              <a
                href="#contact"
                className="inline-flex h-[57px] w-[225px] items-center justify-center rounded-full bg-gradient-to-r from-[#0b86c9] to-[#1a9ae0] text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Talk to an Expert
              </a>
              <a
                href="#solutions"
                className="inline-flex h-[57px] w-[225px] items-center justify-center rounded-full border border-white text-sm font-bold text-white transition-colors hover:bg-white hover:text-neutral-950"
              >
                Explore Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ IMPACT ============================ */}
      <section id="about" className="scroll-mt-24 pt-[118px]">
        <div className={container}>
          <motion.div {...fadeUp}>
            <Eyebrow>Our Impact in Numbers</Eyebrow>
            <h2 className="mt-4 text-4xl font-medium text-neutral-950 sm:text-[44px]">
              Experience with <span className="font-bold text-[#1a6ff4]">Bencos 360</span>
            </h2>
            <p className="mt-5 max-w-[760px] text-[17px] leading-[1.6] text-neutral-600">
              At Bencos 360, we go beyond outsourcing. We become an extension of your team, combining
              technology, people, and processes to help your business grow with confidence.
            </p>
          </motion.div>
          <ImpactStats />

          <motion.div
            {...fadeUp}
            className="mt-8 grid gap-6 rounded-[18px] bg-[#0b1128] px-10 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
          >
            {trustItems.map((t, i) => {
              const Icon = t.icon
              return (
                <div
                  key={t.title}
                  className={`flex items-center gap-5 ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.title}</p>
                    <p className="text-[13px] text-white/60">{t.sub}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================ SOLUTIONS ============================ */}
      <section id="solutions" className="scroll-mt-24 pb-10 pt-16">
        <div className={container}>
          <motion.div {...fadeUp}>
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="mt-6 max-w-[560px] text-3xl font-semibold leading-[1.45] text-neutral-950 sm:text-[33px]">
              Solutions <Accent>designed around</Accent> your operations.
            </h2>
          </motion.div>
          <div className="mt-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[76px] lg:gap-y-[68px]">
            {solutions.map((s, i) => (
              <motion.article
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <img src={s.image} alt={s.title} className="aspect-[418/204] w-full object-cover" />
                <div className="px-[17px] pb-8 pt-6 lg:min-h-[226px] lg:pb-10 lg:pt-7">
                  <h3 className="text-2xl font-medium text-[#1a6ff4]">{s.title}</h3>
                  <p className="mt-4 text-base leading-[1.5] text-neutral-950 lg:mt-[50px]">{s.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ HUMAN + AI ============================ */}
      <section id="technology" className="scroll-mt-24 pb-12 pt-[110px]">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-[1fr_760px]`}>
          <motion.div {...fadeUp}>
            <Eyebrow>Human + AI</Eyebrow>
            <h2 className="mt-8 text-4xl font-semibold leading-[1.15] text-[#0f172a] sm:text-[56px]">
              Better together.
              <br />
              <Accent>Smarter</Accent> outcomes.
            </h2>
            <p className="mt-8 max-w-[440px] text-base leading-[1.65] text-neutral-500">
              We combine human expertise with AI innovation to create meaningful customer experiences
              that drive real impact.
            </p>
            <div className="mt-6 flex gap-10">
              <span className="flex h-[104px] w-[104px] flex-col items-center justify-center gap-2 rounded-2xl bg-[#1a6ff4] text-center text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                <Users className="h-6 w-6" />
                Human
                <br />
                Expertise
              </span>
              <span className="flex h-[104px] w-[104px] flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white text-center text-xs font-semibold text-neutral-900">
                <Bot className="h-6 w-6 text-[#1a6ff4]" />
                AI
                <br />
                Innovation
              </span>
            </div>
          </motion.div>
          <motion.img
            {...fadeUp}
            src={`${IMG}/human-ai.webp`}
            alt="Team collaborating at a bank of monitors"
            className="aspect-[760/377] w-full rounded-[34px] object-cover"
          />
        </div>
      </section>

      {/* ============================ PILLARS STRIP ============================ */}
      <section className="bg-[#eef5fe] py-8">
        <div className={`${container} grid grid-cols-2 gap-y-8 lg:grid-cols-4`}>
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-[#1a6ff4]/70" : ""}`}
              >
                <Icon className="mx-auto h-6 w-6 text-[#1a6ff4]" />
                <p className="mt-5 text-base font-semibold text-neutral-950">{p.title}</p>
                <p className="mx-auto mt-2 max-w-[180px] text-xs leading-[1.5] text-neutral-500">{p.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ============================ INDUSTRIES ============================ */}
      <section id="industries" className="scroll-mt-24 pb-16 pt-[110px]">
        <div className={container}>
          <motion.div {...fadeUp}>
            <Eyebrow>Industries</Eyebrow>
            <h2 className="mt-6 max-w-[470px] text-3xl font-semibold leading-[1.45] text-neutral-950 sm:text-[33px]">
              Experience across <Accent>complex industries.</Accent>
            </h2>
          </motion.div>
          <div className="mt-11 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[57px]">
            {industries.map((ind, i) => (
              <motion.article
                key={ind.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <img src={ind.image} alt={ind.title} className="aspect-[309/273] w-full object-cover" />
                <div className="px-[11px] pb-8 pt-5 lg:min-h-[216px] lg:pb-10">
                  <p className="text-base text-neutral-950">{String(i + 1).padStart(2, "0")}</p>
                  <span className="mt-2 block h-px w-12 bg-neutral-400" />
                  <h3 className="mt-5 text-xl font-medium text-[#1a6ff4]">{ind.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-neutral-950">{ind.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ PLATFORM CAPABILITIES ============================ */}
      <section className="pb-24 pt-10">
        <div className={`${container} grid items-start gap-10 lg:grid-cols-[584px_1fr] lg:gap-10`}>
          <motion.img
            {...fadeUp}
            src={`${IMG}/platform.webp`}
            alt="Executives reviewing documents in a meeting"
            className="aspect-[4/3] w-full rounded-[34px] object-cover lg:aspect-[584/762]"
          />
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="pt-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase text-[#0b86c9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0b86c9]" />
              Platform capabilities
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-[#0f172a] sm:text-[40px]">
              The operational backbone of modern genomics
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-neutral-600">
              We integrate high-throughput sequencing with highly optimized operations to deliver
              reliable results for global scale research and clinical cohorts.
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a6ff4] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#155fd6]"
            >
              Explore platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="mt-9 rounded-2xl border border-neutral-200 bg-white p-4 sm:px-12 sm:py-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((cap, i) => {
                  const Icon = cap.icon
                  return (
                    <div
                      key={cap.title}
                      className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.05)] ${
                        i >= 2 ? "sm:translate-x-12" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-lg border ${cap.tint}`}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-lg text-[#1a6ff4]">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="mt-5 text-[15px] font-medium text-neutral-950">{cap.title}</h3>
                      <p className="mt-2 text-xs leading-[1.5] text-neutral-500">{cap.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================ WEEVE ============================ */}
      <section className="relative overflow-hidden pb-24 pt-32">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-24 h-[520px] w-[560px] rounded-full bg-[#edf5ff]" />
        <div aria-hidden className="pointer-events-none absolute -right-24 top-6 h-[800px] w-[480px] rotate-[-20deg] rounded-full bg-[#e3eefd]" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#fdfbef]" />
        <div className="relative mx-auto grid w-full max-w-[1440px] items-start gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_548px] lg:pr-[73px]">
          <motion.div {...fadeUp} className="lg:pt-6">
            <Eyebrow>Weeve</Eyebrow>
            <h2 className="mt-12 text-4xl font-light leading-[1.12] tracking-tight text-[#0f1f3d] sm:text-[62px]">
              Smarter Collections.
              <br />
              In Better Outcomes.
            </h2>
            <p className="mt-9 max-w-[530px] text-[17px] leading-[1.65] text-neutral-500">
              WEEVE is a powerful loan delinquency management platform that automates outreach,
              simplifies payments, and delivers actionable insights—so you can focus on what matters
              most.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-12">
              <Link
                href="/weeve"
                className="group inline-flex h-[60px] items-center gap-4 rounded-full bg-[#1a6ff4] px-8 text-[15px] text-white shadow-[0_12px_24px_rgba(26,111,244,0.3)] transition-colors hover:bg-[#155fd6]"
              >
                Explore WEEVE
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/weeve" className="group inline-flex items-center gap-4 text-[15px] text-[#1a6ff4]">
                Learn More
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
          <div className="space-y-[18px]">
            {weeveFeatures.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-5 rounded-2xl bg-white px-6 py-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
                >
                  <span className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-xl bg-[#eef5fe] text-[#1a6ff4]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[17px] text-neutral-950">{f.title}</p>
                    <p className="mt-1 text-xs text-neutral-500">{f.description}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef5fe] text-[#1a6ff4]">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================ WEEVE BAND ============================ */}
      <section className="bg-[#050c1c]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-4 py-12 sm:px-8 lg:px-[100px]">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a6ff4]">Driving better outcomes</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-[28px]">
              Stronger relationships. Healthier portfolios.
            </h2>
            <p className="mt-3 text-sm text-white/60">Helps lenders recover more while building lasting borrower trust.</p>
          </motion.div>
          <Link
            href="/weeve"
            className="group inline-flex h-[50px] items-center gap-2 rounded-full bg-[#1a6ff4] px-8 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(26,111,244,0.35)] transition-colors hover:bg-[#155fd6]"
          >
            Explore WEEVE
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ============================ RESILIENCE360 ============================ */}
      <section className="py-24 lg:pb-[140px] lg:pt-[160px]">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-[600px_1fr] lg:gap-20`}>
          <motion.div {...fadeUp}>
            <h2 className="text-5xl font-extrabold tracking-tight text-[#0f172a] sm:text-[58px]">
              Resilience<span className="text-[#1a6ff4]">360</span>
            </h2>
            <p className="mt-6 text-2xl font-bold text-[#0f172a]">
              Enterprise Resilience. <span className="text-[#1a6ff4]">AI-Powered.</span>
            </p>
            <p className="mt-5 text-base leading-[1.55] text-neutral-600">
              Resilience360 is an intelligent platform that helps organizations anticipate disruptions,
              manage risks, and build operational resilience with the power of AI and advanced
              analytics.
            </p>
            <div className="mt-14 border-t border-neutral-200" />
            <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-4">
              {resilienceSteps.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.title}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eaf2fe] text-[#1a6ff4]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-sm font-semibold text-neutral-950">{step.title}</p>
                    <p className="mt-3 text-[11px] leading-[1.5] text-neutral-500">{step.description}</p>
                  </div>
                )
              })}
            </div>
            <a
              href="#contact"
              className="group mt-14 inline-flex h-11 items-center gap-2 rounded-full bg-[#1a6ff4] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#155fd6]"
            >
              Explore Resilience360
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          <motion.img
            {...fadeUp}
            src={`${IMG}/resilience360.webp`}
            alt="Resilience360 risk monitoring illustration"
            className="mx-auto w-full max-w-[520px] lg:justify-self-end"
          />
        </div>
      </section>

      {/* ============================ INSIGHTS ============================ */}
      <section id="insights" className="scroll-mt-24">
        <div className="mx-auto max-w-[1440px] bg-[#f2f5f9] pb-16 pt-[72px] lg:mr-[17px]">
          <div className="px-4 sm:px-[17px]">
            <motion.div {...fadeUp}>
              <Eyebrow>Insights</Eyebrow>
              <h2 className="mt-6 max-w-[520px] text-3xl font-semibold leading-[1.45] text-neutral-950 sm:text-[33px]">
                Ideas shaping better <Accent>customer experiences.</Accent>
              </h2>
            </motion.div>
            <div className="mt-9 grid gap-10 md:grid-cols-3 lg:gap-[105px]">
              {insights.map((ins, i) => (
                <motion.article key={ins.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <img src={ins.image} alt={ins.title} className="aspect-[398/313] w-full rounded-lg object-cover" />
                  <p className="mt-6 text-[15px] uppercase tracking-[0.1em] text-neutral-500">{ins.tag}</p>
                  <h3 className="mt-5 text-xl leading-[1.5] tracking-[0.04em] text-neutral-950 md:min-h-[60px]">{ins.title}</h3>
                  <Link
                    href={ins.href}
                    className="group mt-6 inline-flex h-11 items-center gap-2 rounded bg-[#1a6ff4] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#155fd6]"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section
        className="relative mt-28 overflow-hidden bg-[#0b1a38]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div className="mx-auto grid max-w-[1440px] items-center lg:grid-cols-[760px_1fr]">
          <div className="px-4 py-16 sm:px-[34px] lg:py-[76px]">
            <motion.div
              {...fadeUp}
              className="rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-12 backdrop-blur sm:px-12"
            >
              <span className="inline-block rounded-full border border-[#1a6ff4]/60 bg-[#1a6ff4]/10 px-4 py-1.5 text-[11px] font-semibold uppercase text-[#6ea3ff]">
                Enterprise Platform
              </span>
              <h2 className="mt-8 text-4xl font-semibold leading-[1.2] text-white sm:text-[44px]">
                Ready to create better customer experiences?
              </h2>
              <span className="mt-8 block h-[3px] w-14 rounded-full bg-sky-400" />
              <p className="mt-8 max-w-[400px] text-[17px] leading-[1.3] text-white/70">
                Let&apos;s explore how Bencos360 can support your customer operations and growth goals.
              </p>
              <div className="mt-14 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex h-[52px] items-center rounded-md bg-gradient-to-r from-[#1a6ff4] to-[#18a3f0] px-8 text-base font-medium text-white shadow-[0_8px_24px_rgba(26,111,244,0.35)] transition-opacity hover:opacity-90"
                >
                  Contact Us
                </a>
                
              </div>
            </motion.div>
          </div>
          <motion.img
            {...fadeUp}
            src={`${IMG}/cta-illustration.webp`}
            alt="Bencos360 customer journey illustration: understand, growth, engage, delight"
            className="hidden h-full w-full object-cover lg:block"
          />
        </div>
      </section>

      {/* ============================ CONTACT ============================ */}
      <section id="contact" className="scroll-mt-24 pb-28 pt-[70px]">
        <div className="mx-auto grid w-full max-w-[1440px] items-start gap-12 px-4 sm:px-[21px] lg:grid-cols-[544px_1fr] lg:gap-[160px] lg:pr-[14px]">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase text-[#1a6ff4]">
              <span className="h-2 w-2 rounded-full bg-[#1a6ff4]" />
              Contact us
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[50px]">
              Let&apos;s talk about
              <br />
              your <Accent>operations.</Accent>
            </h2>
            <p className="mt-6 text-base leading-[1.5] text-neutral-600">
              We&apos;d love to learn more about your goals and explore how Bencos360 can help your
              business grow smarter and faster.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Talk to an Expert", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}`, tint: "bg-blue-50 text-[#1a6ff4]" },
                { icon: MessageCircle, label: "WhatsApp Business", value: "Chat with our team", href: WHATSAPP_URL, tint: "bg-green-50 text-green-500" },
                { icon: Mail, label: "Email Inquiries", value: EMAIL, href: `mailto:${EMAIL}`, tint: "bg-blue-50 text-[#1a6ff4]" },
              ].map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white px-5 py-4 transition-colors hover:border-[#1a6ff4]/40"
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${c.tint}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs text-neutral-500">{c.label}</span>
                      <span className="block text-base font-semibold text-neutral-950">{c.value}</span>
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-50 text-[#1a6ff4] transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                )
              })}
            </div>
            <div className="mt-8 flex items-center gap-4 rounded-xl border-l-4 border-[#1a6ff4] bg-[#eef5fe] px-5 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1a6ff4]">
                <Send className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-neutral-950">We typically reply within a few hours.</span>
                <span className="block text-xs text-neutral-600">Let&apos;s build something great together!</span>
              </span>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
