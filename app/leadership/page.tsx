"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 637.jpeg"
const PHILOSOPHY_IMAGE = "/images/image 104.webp"
const VISION_IMAGE = "/images/image 98.webp"
const TEAM_IMAGE = "/images/image 95.webp"
const TOGETHER_IMAGE = "/images/image 105.webp"
const FUTURE_IMAGE = "/images/hero-lab-1.webp"

const principles = [
  "Lead with scientific integrity and transparency",
  "Foster a culture of curiosity and collaboration",
  "Empower teams to innovate boldly and responsibly",
  "Champion diversity of thought and expertise",
  "Make decisions that create lasting, long-term value",
]

// Add more team members here — the grid scales automatically.
// `linkedin`: the member's profile URL. Left empty, the badge links to the company LinkedIn page.
// Both the LinkedIn badge and "More about …" open the member's LinkedIn profile in a new tab.
/** Used for the LinkedIn badge when a member has no personal profile URL yet. */
const COMPANY_LINKEDIN = "https://www.linkedin.com/company/bencoshealth/"

interface TeamMember {
  name: string
  title: string
  description: string
  image: string
  linkedin?: string
}

const team: TeamMember[] = [
  {
    name: "Subhanjan Bhowmik",
    title: "Founder & CEO",
    description:
      "Visionary leader driving strategic growth, innovation, and impactful solutions across research, healthcare, and technology.",
    image: "/images/image 452.png",
    linkedin: "https://www.linkedin.com/in/subhanjan-bhowmik-b974a19/",
  },
  {
    name: "Arnab Kapat",
    title: "Executive Director",
    description:
      "Brings extensive academic and industry experience to guide strategic direction, research excellence, and organizational development.",
    image: "/images/image 454.png",
    linkedin: "https://www.linkedin.com/in/arnab-kapat-ph-d-49b6b44/",
  },
  {
    name: "Ruma Sadhukhan",
    title: "Director & Operations Head",
    description:
      "Leads operations with a focus on efficiency, collaboration, and sustainable growth, ensuring seamless execution across diverse initiatives.",
    image: "/images/image 453.png",
    linkedin: "https://www.linkedin.com/in/ruma-sadhukhan-0b6a6516/",
  },
  {
    name: "Sunaina Jairath",
    title: "CMO & CCO",
    description:
      "Shapes brand, market strategy, and customer relationships to expand Bencos' reach and build lasting partnerships worldwide.",
    image: "/images/image 455.png",
    linkedin: "https://www.linkedin.com/in/sunaina-jairath-4421b35/",
  },
  {
    name: "Samhita R",
    title: "Advisor Finance",
    description:
      "Provides financial guidance and strategic oversight to support responsible growth and long-term value creation.",
    image: "/images/image 456.png",
    linkedin: "https://www.linkedin.com/in/samhitar/",
  },
]

// "Diverse and skilled team" carousel — add people here (photo, name, role, expertise).
// `position` sets which part of the photo stays in frame (CSS object-position); default keeps the face near the top.
// `linkedin` is optional — the green "in" badge next to the name only shows when it is set.
type TeamStory = {
  name: string
  role: "Collaborator" | "Advisor"
  expertise: string
  image: string
  linkedin?: string
  position?: string
}

const teamStories: TeamStory[] = [
  // Collaborators
  {
    name: "Raghunath Chatterjee",
    linkedin: "https://www.linkedin.com/in/raghunath-chatterjee-3a74b422/",
    role: "Collaborator",
    expertise: "Multi-omics and oral cancer research",
    image: "/images/Raghunath Chatterjee.jpeg",
    position: "50% 30%",
  },
  {
    name: "Pankaj Barah",
    linkedin: "https://www.linkedin.com/in/pankaj-barah-2a71025/",
    role: "Collaborator",
    expertise: "Bioinformatics, machine learning and predictive modelling using long-read NGS in cancers such as gall bladder cancer",
    image: "/images/Pankaj barah.jpeg",
    position: "50% 8%",
  },
  {
    name: "Tej Sowpati",
    role: "Collaborator",
    expertise: "Bioinformatics, DNA methylation and epigenetics using AI, machine learning and long-read NGS, focused on breast cancer",
    image: "/images/Tej sowpati.jpeg",
    position: "50% 10%",
  },
  {
    name: "Sabarinathan Radhakrishnan",
    linkedin: "https://www.linkedin.com/in/sabarinathan-radhakrishnan-7a46294b/",
    role: "Collaborator",
    expertise: "Computational and functional cancer genomics, variant interpretation and cataloguing across international cancer projects",
    image: "/images/Sabarinathan.jpeg",
  },
  {
    name: "Satyendra Tripathi",
    linkedin: "https://www.linkedin.com/in/satyendra-tripathi-09311a20/",
    role: "Collaborator",
    expertise: "Oncology — predicting tumor markers with proteomics and metabolomics",
    image: "/images/Satyendra Tripathi.jpeg",
    position: "50% 5%",
  },
  {
    name: "Anupam Sarma",
    linkedin: "https://www.linkedin.com/in/dr-anupam-sarma-md-phd-20235b29/",
    role: "Collaborator",
    expertise: "Regenerative medicine for cancers, biomarker development and clinical research through genomic and transcriptomic studies",
    image: "/images/Anupam Sarma.jpeg",
  },
  // Advisors
  {
    name: "Arindam Maitra",
    linkedin: "https://www.linkedin.com/in/arindam-maitra-63937017/",
    role: "Advisor",
    expertise: "Integrating functional genomics, transcriptomics and tumor studies",
    image: "/images/Arindam maitra.jpeg",
  },
  {
    name: "Bratati Kahali",
    role: "Advisor",
    expertise: "Computational genomics, massive joint genotyping and biobanking",
    image: "/images/Bratati kahali.jpeg",
  },
  {
    name: " K. Thangraj",
    role: "Advisor",
    expertise: "Population genomics and genetic diversity",
    image: "/images/Prof. K. Thangraj.jpeg",
  },
  {
    name: "B.K. Thelma",
    role: "Advisor",
    expertise: "Medical genomics, complex disease genetics and pharmacogenetics",
    image: "/images/Bk thelma.jpeg",
  },
  {
    name: "Ravi Kanan",
    role: "Advisor",
    expertise: "Surgical oncology, public health and healthcare administration",
    image: "/images/Dr. Ravi Kanan.jpeg",
  },
  {
    name: "Rashmi Shukla",
    role: "Advisor",
    expertise: "Molecular genetics and clinical NGS",
    image: "/images/Reshmi Shukla.jpeg",
  },
]

function TeamCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const count = teamStories.length
  const go = (dir: number) => setActive((i) => (i + dir + count) % count)

  // Gentle auto-advance; pauses while hovered/focused or when the user prefers reduced motion.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => setActive((i) => (i + 1) % count), 4500)
    return () => clearInterval(id)
  }, [paused, count])

  const person = teamStories[active]

  return (
    <section
      className="overflow-hidden bg-background py-16 lg:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-medium leading-tight text-foreground sm:text-4xl"
        >
          Diverse Minds, Shared Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground"
        >
          Our progress is driven by the collective contributions of our people, past and present. Discover the stories and experiences that have shaped our journey.
        </motion.p>
      </div>

      {/* Track: the active card sits in the centre, neighbours fade out to the sides. */}
      <div
        className="relative mt-12 h-[300px] sm:h-[340px]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Team members"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1)
          if (e.key === "ArrowRight") go(1)
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
          touchX.current = null
        }}
      >
        {teamStories.map((m, i) => {
          // Shortest signed distance from the active card, so the row wraps around.
          let offset = i - active
          if (offset > count / 2) offset -= count
          if (offset < -count / 2) offset += count
          const isActive = offset === 0
          const hidden = Math.abs(offset) > 2
          return (
            <button
              key={m.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${m.name}`}
              aria-current={isActive}
              tabIndex={hidden ? -1 : 0}
              className="absolute left-1/2 top-0 h-full w-[220px] overflow-hidden rounded-sm bg-neutral-100 transition-all duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:w-[260px]"
              style={{
                transform: `translateX(calc(-50% + ${offset} * (100% + 12px))) scale(${isActive ? 1 : 0.92})`,
                opacity: hidden ? 0 : isActive ? 1 : 0.45,
                filter: isActive ? "none" : "grayscale(1)",
                zIndex: 10 - Math.abs(offset),
                pointerEvents: hidden ? "none" : "auto",
              }}
            >
              <img
                src={m.image}
                alt={m.name}
                className="h-full w-full object-cover"
                style={{ objectPosition: m.position ?? "50% 15%" }}
                loading="lazy"
                draggable={false}
              />
            </button>
          )
        })}
      </div>

      {/* Name + controls */}
      <div className="mx-auto mt-8 flex max-w-xl items-start justify-between gap-4 px-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous team member"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#5fb82e] text-[#3a8a1e] transition-colors hover:bg-[#5fb82e] hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="min-h-[104px] min-w-0 flex-1 text-center sm:min-h-[92px]" aria-live="polite">
          <span
            className={`inline-block rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
              person.role === "Advisor" ? "bg-[#e9f5e1] text-[#3a8a1e]" : "bg-sky-50 text-sky-700"
            }`}
          >
            {person.role}
          </span>
          <div className="mt-2 flex items-center justify-center gap-2">
            <p className="text-lg font-semibold text-foreground">{person.name}</p>
            {person.linkedin && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} on LinkedIn`}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5fb82e] text-[12px] font-bold leading-none text-white transition-transform hover:scale-110"
              >
                <span className="-mt-px">in</span>
              </a>
            )}
          </div>
          <p className="mx-auto mt-1 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            {person.expertise}
          </p>
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next team member"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#5fb82e] text-[#3a8a1e] transition-colors hover:bg-[#5fb82e] hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {teamStories.map((m, i) => (
          <button
            key={m.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to ${m.name}`}
            className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[#5fb82e]" : "w-2 bg-neutral-300 hover:bg-neutral-400"}`}
          />
        ))}
      </div>
    </section>
  )
}


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
              className="mt-8 text-3xl sm:text-4xl md:text-4xl font-elegant thin tracking-wide text-white leading-[1.25]"
            >
              Leadership
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              Our leaders bring deep expertise in genomics, healthcare, AI, bioinformatics, and biotechnology to drive scientific innovation and strategic growth.
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

              <p className="mt-8 max-w-xl whitespace-pre-line text-muted-foreground leading-relaxed">
                {"Innovation drives our progress, integrity guides every decision,\nand collaboration expands our impact—helping advance\nscience and improve lives through trusted research and lasting\npartnerships."}
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
      <section className="bg-background py-16 ">
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
            <p className="mt-8  text-muted-foreground leading-relaxed">
              Our leadership inspires innovation, integrity, and scientific excellence.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {team.map((member, index) => {
              const firstName = member.name.split(" ")[0]
              const linkedin = member.linkedin || COMPANY_LINKEDIN
              return (
                <motion.div
                  key={`${member.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="relative aspect-[200/214] w-full max-w-[340px] overflow-hidden rounded-sm bg-neutral-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                    />
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#5fb82e] text-[15px] font-bold leading-none tracking-tight text-white shadow-sm transition-transform hover:scale-110"
                    >
                      <span className="-mt-px">in</span>
                    </a>
                  </div>
                  <h3 className="mt-5 text-xl font-normal text-foreground md:text-[22px]">{member.name}</h3>
                  <p className="mt-1 text-sm text-foreground">{member.title}</p>
                  <p className="mt-4 max-w-[340px] text-sm font-light leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex w-fit items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-green-700"
                  >
                    More about {firstName}
                    <ChevronRight className="h-4 w-4 text-green-600 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= DIVERSE & SKILLED TEAM (CAROUSEL) ======================= */}
      <TeamCarousel />

      {/* ======================= BUILDING THE FUTURE TOGETHER ======================= */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl font-semibold leading-relaxed text-foreground whitespace-pre-line md:text-2xl md:leading-relaxed"
          >
            {"Our aspiration is to transform complex scientific data into meaningful discoveries that advance genomics, improve lives, and shape the future of healthcare."}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-10 aspect-[16/9] w-full overflow-hidden bg-neutral-900 sm:aspect-[21/9] lg:aspect-[3/1]"
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
