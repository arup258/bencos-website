"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 181.webp"
const KNOWLEDGE_IMAGE = "/images/image 182.webp"
const COLLABORATION_IMAGE = "/images/image 196.webp"

// Education & learning carousel — add/edit entries; the slider scrolls automatically.
const education = [
  {
    title: "Professional Courses",
    description: "Structured programs for practicing scientists.",
    image: "/images/image 189.webp",
  },
  {
    title: "Scientific Workshops",
    description: "Hands-on sessions led by domain experts.",
    image: "/images/image 190.webp",
  },
  {
    title: "Research Training",
    description: "Method-focused training for early researchers.",
    image: "/images/image 191.webp",
  },
  {
    title: "Internships",
    description: "Immersive experiences inside active research programs.",
    image: "/images/image 192.webp",
  },
  {
    title: "Fellowships",
    description: "Long-form support for independent inquiry.",
    image: "/images/image 190.webp",
  },
]

// Research focus areas — image with overlaid title/subtitle; grid reflows automatically.
const focusAreas = [
  { title: "Genomics – Sequencing & Analysis", subtitle: "Advanced DNA and RNA sequencing solutions, whole-genome, whole-exome and transcriptome analysis that help researchers uncover genetic insights and accelerate discovery.", image: "/images/image 183.png" },
  { title: "Precision Medicine – Data-Driven Care", subtitle: "Integrating genomic, clinical and multi-omics data to enable personalized approaches, biomarker discovery and stratified medicine strategies.", image: "/images/image 184.png" },
  { title: "Cancer Research – Oncology Science", subtitle: "Genomic profiling, tumor sequencing, variant interpretation and collaborative studies that support oncology research and precision oncology initiatives.", image: "/images/image 185.png" },
  { title: "Drug Discovery – Therapeutic Compounds", subtitle: "Multi-omics and computational biology support for target identification, mechanism-of-action studies and therapeutic development pipelines.", image: "/images/image 186.png" },
  { title: "Rare Diseases – Under-Studied Conditions", subtitle: "Specialized genomic and bioinformatics approaches for rare and under-studied conditions, improving diagnosis and research collaboration.", image: "/images/image 187.png" },
  { title: "Bioinformatics – Computational Biology", subtitle: "End-to-end bioinformatics pipelines, AI-assisted analysis, data interpretation and cloud-scale solutions that turn complex omics data into actionable insights.", image: "/images/image 188.png" },
]

// Publications cards — add/edit entries and the grid reflows automatically.
const publications = [
  {
    title: "Research Journals",
    description: "Peer-reviewed periodicals across life sciences.",
    image: "/images/image 193.webp",
  },
  {
    title: "Scientific Articles",
    description: "Original studies and short communications.",
    image: "/images/image 194.webp",
  },
  {
    title: "Review Papers",
    description: "Systematic overviews of active fields.",
    image: "/images/image 195.webp",
  },
]

// Events & academic engagement — image with overlaid title; grid reflows automatically.
const events = [
  {
    title: "Scientific Seminars",
    subtitle: "Expert presentations on current research and emerging methods.",
    image: "/images/image 196.webp",
  },
  {
    title: "Educational Workshops",
    subtitle: "Hands-on sessions focused on practical skills and techniques.",
    image: "/images/image 197.png",
  },
  {
    title: "Research Discussions",
    subtitle: "Open forums for dialogue on research challenges and collaboration.",
    image: "/images/image 198.png",
  },
]

// Why BREF — alternating rows; even index = image left, odd = image right.
const whyBref = [
  {
    title: "Research Excellence",
    description:
      "We support rigorous inquiry across disciplines, from\nfoundational science to translational research that reaches\ncommunities.",
    image: "/images/image 199.webp",
    imageAlt: "Scientists working with samples in a laboratory",
  },
  {
    title: "Knowledge Sharing",
    description:
      "Open discussion, peer review and cross-institutional dialogue\nkeep discoveries moving beyond a single lab.",
    image: "/images/image 200.webp",
    imageAlt: "Two researchers reviewing findings on a laptop",
  },
  {
    title: "Academic Growth",
    description:
      "Structured training and mentorship help students, researchers and educators grow at every career stage.",
    image: "/images/image 201.webp",
    imageAlt: "An educator mentoring students in a laboratory",
  },
  {
    title: "Scientific Integrity",
    description:
      "Editorial rigour, transparent methods and ethical practice sit at\nthe centre of everything we publish and support.",
    image: "/images/image 202.webp",
    imageAlt: "A research team reviewing data on a large screen",
  },
]

// Leadership & Advisory Board — add each person's LinkedIn profile URL in `linkedin`.
// Until one is set, the badge and "More about …" link open the company LinkedIn page.
const COMPANY_LINKEDIN = "https://www.linkedin.com/company/bencoshealth/"

const boardMembers = [
  {
    name: "Arnab Kapat",
    title: "Executive Director",
    description:
      "Brings extensive academic and industry experience to guide strategic direction, research excellence, and organizational development.",
    image: "/images/image 454.png",
    linkedin: "https://www.linkedin.com/in/arnab-kapat-ph-d-49b6b44/",
  },
  {
    name: "Rita Mukhopadhyay",
    title: "Trustee",
    description:
      "A dedicated trustee with deep commitment to advancing research, education, and healthcare for meaningful societal impact",
    image: "/images/bref-rita.webp",
    linkedin: "https://www.linkedin.com/in/rita-mukhopadhyaya-26707557/",
  },
]

export default function BrefPage() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollCards = (direction: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: el.clientWidth * 0.9 * direction, behavior: "smooth" })
  }

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Researchers collaborating in a life sciences laboratory"
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
             Knowledge Initiatives
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
              Research. Learn. Collaborate.
            </motion.h1>

            

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              A multidisciplinary institution (founded by Bencos Research Solutions Pvt. Ltd.) bringing researchers, educators, students and scientific communities together to support progress in genomics, precision medicine and knowledge-driven new therapeutics discovery

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="/bref-microsite"
                target="_blank"
                rel="noopener noreferrer"
                
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Explore Programs
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
            Building Scientific Knowledge Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-5xl text-[16px] text-muted-foreground leading-relaxed"
          >
            BREF creates opportunities for learning, collaboration and scientific excellence. We connect academic institutions, researchers, educators and future innovators through knowledge-driven initiatives in genomics, bioinformatics, multi-omics and precision medicine. BREF provides structured professional courses, hands-on scientific workshops and collaborative research programs designed for practicing scientists and the next generation of discovery leaders.


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
            src={KNOWLEDGE_IMAGE}
            alt="Researchers and students collaborating around a table in a library"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= LEADERSHIP & ADVISORY BOARD ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Leadership &amp; Advisory Board
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member, index) => {
              const linkedin = member.linkedin || COMPANY_LINKEDIN
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="relative aspect-[200/214] w-full max-w-[340px] overflow-hidden rounded-sm bg-neutral-200">
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
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
                    More about {member.name.split(" ")[0]}
                    <ChevronRight className="h-4 w-4 text-green-600 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= RESEARCH FOCUS AREAS (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Research Focus Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl leading-relaxed text-muted-foreground"
          >
            Discover the core scientific domains where Bencos and BREF drive collaboration, training and innovation.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((item, index) => (
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
                  <h3 className="text-2xl group-hover:text-[#4ADE76] font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 pb-12 text-sm text-white/80">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= EDUCATION & LEARNING (CAROUSEL) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
              >
                Education & Learning
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mx-auto mt-6 max-w-6xl text-base text-muted-foreground leading-relaxed"
              >
                Supporting lifelong learning through specialised education, scientific training, workshops and academic development programs.
              </motion.p>
            </div>

            {/* Arrow controls */}
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => scrollCards(-1)}
                aria-label="Previous"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-green-600"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCards(1)}
                aria-label="Next"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-green-600"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {education.map((item) => (
              <div
                key={item.title}
                className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= PUBLICATIONS (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Publications &amp; Knowledge Sharing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=" mt-6 max-w-6xl text-base text-muted-foreground leading-relaxed"
          >
            Sharing scientific discoveries through journals, research articles, white papers, books and educational resources that contribute to the advancement of global science.

          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {publications.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= SCIENTIFIC COLLABORATION ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Scientific Collaboration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-6xl text-[16px] text-muted-foreground leading-relaxed"
          >
            BREF encourages meaningful collaboration between universities, research institutes, healthcare organisations, educators, and scientific communities to accelerate innovation and shared discovery in the life sciences.
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
            src={COLLABORATION_IMAGE}
            alt="A diverse team of researchers collaborating around a table"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ======================= EVENTS & ACADEMIC ENGAGEMENT (GRID) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Events &amp; Academic Engagement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-5xl text-muted-foreground leading-relaxed"
          >
            Creating opportunities for learning and collaboration through

          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {events.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= WHY BREF (ALTERNATING) ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Why BREF
          </motion.h2>

          <div className="mt-12 space-y-16 lg:space-y-24">
            {whyBref.map((item, index) => {
              const imageOnLeft = index % 2 === 0
              return (
                <div
                  key={item.title}
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
                      src={item.image}
                      alt={item.imageAlt}
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
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-xl whitespace-pre-line text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= CLOSING CTA ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Together We Advance Knowledge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
            Join BREF in building a stronger scientific community through research, education, collaboration and lifelong learning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-700 to-green-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-green-500/30"
            >
              Explore BREF
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
