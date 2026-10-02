"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// All page images live in /public/images/education — replace a file (same name) to swap it.
const IMG = "/images/education"

const pathways = [
  {
    name: "BenEd ",
    fullName: "Bencos Education",
    title: ["Build Skills.", "Explore Science.", "Shape the Future."],
    description:
      "Industry-focused biotechnology education for students, researchers and professionals, with hands-on learning, expert mentorship and career support.",
    cta: "Explore BenEd ",
    href: "/bened",
    image: `${IMG}/bened.webp`,
  },
  {
    name: "BREF",
    fullName: "Bencos Research & Education Foundation",
    title: ["Advancing Knowledge.", "Empowering Learners."],
    description:
      "Education and training initiatives that connect learning with research, collaboration and continuous professional development in the life sciences.",
    cta: "Explore BREF",
    href: "/bref-microsite",
    image: `${IMG}/bref.webp`,
  },
]

const offerings = [
  { title: "Courses & Programs", description: "Industry-focused and research-based courses in the life sciences." },
  { title: "Hands-on Learning", description: "Practical training with real laboratory workflows." },
  { title: "Research & Scientific Learning", description: "Learn from current research and emerging technologies." },
  { title: "Expert Faculty & Mentorship", description: "Guidance from experienced researchers and industry professionals." },
  { title: "Laboratory Experience", description: "Access to modern instrumentation and advanced techniques." },
  { title: "Resources & Certification", description: "Learning resources, workshops and verifiable credentials." },
].map((o, i) => ({ ...o, image: `${IMG}/offer-${i + 1}.webp` }))

const journey = [
  { title: "Discover", description: "Understand your interests and choose the right program." },
  { title: "Learn", description: "Structured modules led by experts." },
  { title: "Practice", description: "Apply knowledge through hands-on training and lab sessions." },
  { title: "Connect", description: "Engage with mentors, peers and industry networks." },
  { title: "Advance", description: "Certify, publish and take the next step in your career." },
]

const programs = [
  "Genomics & Next Generation Sequencing",
  "Bioinformatics & Computational Biology",
  "Molecular Biology & Genetic Engineering",
  "Protein Science & Bioprocessing",
  "Plant Biotechnology & Genetic Engineering",
  "Research Methods & Scientific Practice",
].map((title, i) => ({ title, image: `${IMG}/program-${i + 1}.webp` }))

const resources = [
  { title: "Insights & Articles", description: "Explore expert perspectives and emerging research.", href: "/scientific-writing" },
  { title: "Webinars & Workshops", description: "Live sessions with specialists and hands-on learning.", href: "/events-expo" },
  { title: "Learning Resources", description: "Practical guides, toolkits and curated materials.", href: "/insights" },
  { title: "Certifications", description: "Build your credentials with recognized programs.", href: "/bened" },
].map((r, i) => ({ ...r, image: `${IMG}/resource-${i + 1}.webp` }))

const stories = [
  {
    quote:
      "The sequencing module was the first time I understood a workflow end to end. I walked into my interview able to explain every step.",
    name: "Priya Sharma",
    role: "MSc Biotechnology",
    image: `${IMG}/student-priya.webp`,
  },
  {
    quote:
      "Practical, unhurried and genuinely taught by people doing the work. The bioprocessing sessions changed how I approach scale-up.",
    name: "Arjun Nair",
    role: "Process Associate",
    image: `${IMG}/student-arjun.webp`,
  },
  {
    quote:
      "The mentorship made the difference. I moved from academic lab work into a computational biology role within a year.",
    name: "Meera Iyer",
    role: "Research Associate",
    image: `${IMG}/student-meera.webp`,
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
const greenBtn =
  "group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div {...fadeUp}>
      <p className="text-sm font-light uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{text}</p>}
    </motion.div>
  )
}

export default function EducationPage() {
  return (
    <div className="bg-background text-foreground">
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={`${IMG}/hero.webp`}
            alt="Scientist using a microscope in a modern laboratory"
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
              Education
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
              className="mt-8 text-3xl sm:text-4xl md:text-4xl font-elegant thin tracking-wide text-white leading-[1.25]"
            >
              Building Knowledge.
              <br />
              Shaping <span className="text-[#4ADE76]">Futures.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              Education that connects scientific learning, practical skills and real-world opportunities. Through BenEd
              and BREF, we empower students, researchers and professionals to grow, innovate and create impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="/contact" className={greenBtn}>
                Talk to Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              {/* <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white/90"
              >
                Learn About Our Education
              </a> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ BEYOND THE CLASSROOM ============================ */}
      <section id="about" className="scroll-mt-24 bg-[#f9fbfd] pb-12 pt-6 lg:pb-14 lg:pt-5">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[1fr_minmax(0,674px)] lg:gap-14">
          <motion.div {...fadeUp} className="px-4 sm:px-6 md:pr-0 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-8">
            <p className="text-sm font-light uppercase tracking-[0.2em] text-slate-500">Education at Bencos</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Learning That Goes Beyond the Classroom
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Bencos brings together education, scientific knowledge and practical learning to help students, researchers
              and professionals develop skills, gain experience and advance their careers.
            </p>
          </motion.div>
          <motion.img
            {...fadeUp}
            src={`${IMG}/classroom.webp`}
            alt="Students discussing results with a mentor in a lab"
            className="mx-4 aspect-[674/468] w-[calc(100%-2rem)] rounded-xl object-cover sm:mx-6 sm:w-[calc(100%-3rem)] md:ml-0 md:w-[calc(100%-1.5rem)] lg:mr-10 lg:w-[calc(100%-2.5rem)]"
          />
        </div>
      </section>

      {/* ============================ TWO PATHWAYS ============================ */}
      <section className="py-16">
        <div className={container}>
          <SectionIntro
            eyebrow="Our Education Initiatives"
            title="Two Pathways. One Purpose."
            text="BenEd  and BREF complement each other to create a stronger education ecosystem — building skills, advancing knowledge and creating opportunities in the life sciences."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {pathways.map((p, i) => (
              <motion.article
                key={p.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:grid-cols-[330fr_298fr]"
              >
                <div className="px-6 py-8 sm:px-7">
                  <p className="text-2xl font-semibold text-foreground">{p.name}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">{p.fullName}</p>
                  <h3 className="mt-6 text-2xl font-medium leading-[1.15] text-foreground sm:text-[26px]">
                    {p.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <Link
                    href={p.href}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
                  >
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <img src={p.image} alt={p.name} className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-full sm:min-h-[240px]" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ LEARNING ECOSYSTEM ============================ */}
      <section className="bg-[#f7fafc] py-16">
        <div className={container}>
          <SectionIntro
            eyebrow="What We Offer"
            title="A Complete Learning Ecosystem"
            text="From foundational skills to advanced research learning, our education programs are designed to prepare you for real-world opportunities."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => (
              <motion.article
                key={o.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="aspect-[412/126] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-5 pb-7 pt-5">
                  <h3 className="text-lg font-medium text-foreground">{o.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{o.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ LEARNING JOURNEY ============================ */}
      <section className="py-16">
        <div className={container}>
          <SectionIntro
            eyebrow="Learning Journey"
            title="From Curiosity to Career"
            text="A structured learning journey to help you build skills, gain experience and achieve your goals."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {journey.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-medium text-green-600">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-foreground">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ PROGRAM AREAS ============================ */}
      <section id="programs" className="scroll-mt-24 bg-[#f7fafc] py-16">
        <div className={container}>
          <SectionIntro
            eyebrow="Program Areas"
            title="Explore Our Learning Programs"
            text="Focused, practice-first programs across key areas of the life sciences."
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-[18px]">
            {programs.map((p, i) => (
              <motion.article
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="aspect-[198/176] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="min-h-[68px] px-3.5 pb-5 pt-4 text-xs font-medium leading-snug text-foreground group-hover:text-green-700">
                  {p.title}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ KNOWLEDGE & RESOURCES ============================ */}
      <section className="bg-[#f7fafc] pb-16 pt-6">
        <div className={container}>
          <SectionIntro
            eyebrow="Knowledge & Resources"
            title="Keep Learning. Keep Growing."
            text="Access a range of resources to support your learning journey anytime, anywhere."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((r, i) => (
              <motion.div key={r.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link
                  href={r.href}
                  className="group block h-full overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="aspect-[304/130] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-4 pb-9 pt-5">
                    <h3 className="text-base font-medium text-foreground group-hover:text-green-700">{r.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ STUDENT STORIES ============================ */}
      <section className="py-14">
        <div className={container}>
          <SectionIntro
            eyebrow="Student Stories"
            title="Real Learning. Real Growth."
            text="Hear from our learners about how our education programs made a difference."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {stories.map((s, i) => (
              <motion.figure
                key={s.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col rounded-xl bg-white px-6 pb-5 pt-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-12 flex items-center gap-3">
                  <img src={s.image} alt={s.name} className="h-12 w-12 rounded-full object-cover" />
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{s.name}</span>
                    <span className="block text-xs text-muted-foreground">{s.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="relative overflow-hidden bg-[#0b2240]">
        <img
          src={`${IMG}/cta.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-[#0b2240]/40 md:hidden" />
        <div className={`${container} relative py-16`}>
          <motion.div {...fadeUp}>
            <p className="text-sm font-light uppercase tracking-[0.2em] text-white/70">Be Part of a Brighter Tomorrow</p>
            <h2 className="mt-5 text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl">
              Your Journey in Science
              <br />
              Starts Here.
            </h2>
            <p className="mt-4 text-white/80">Learn. Practice. Connect. Grow.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/contact" className={greenBtn}>
                Contact Our Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              {/* <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-neutral-900"
              >
                Contact Our Team
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
