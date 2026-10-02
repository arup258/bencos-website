"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, Plus } from "lucide-react"

// All page images live in /public/images/scientific-writing — replace a file (same name) to swap it.
const IMG = "/images/scientific-writing"

type Card = {
  tag: string
  title: string
  description: string
  author: string
  meta: string
  image: string
  href: string
}

const articles: Card[] = [
  {
    tag: "Article",
    title: "Advances in Brain Health: From Research to Real-World Solutions",
    description: "Exploring the latest research and innovations that are transforming brain health and improving lives.",
    author: "Dr. Neha Sharma",
    meta: "Oct 12, 2024 · 5 min read",
    image: `${IMG}/article-1.webp`,
    href: "/insights",
  },
  {
    tag: "Article",
    title: "The Role of Biomarkers in Early Detection",
    description: "How emerging biomarkers are enabling earlier diagnosis and more personalized treatment approaches.",
    author: "Dr. Arjun Mehta",
    meta: "Sep 28, 2024 · 7 min read",
    image: `${IMG}/article-2.webp`,
    href: "/insights",
  },
  {
    tag: "Article",
    title: "AI and Neuroscience: A New Frontier in Healthcare",
    description: "How artificial intelligence is helping researchers understand the brain and develop better therapies.",
    author: "Dr. Priya Nair",
    meta: "Sep 15, 2024 · 6 min read",
    image: `${IMG}/article-3.webp`,
    href: "/insights",
  },
]

const papers: Card[] = [
  {
    tag: "Research Papers",
    title: "Novel Biomarkers for Early Disease Detection",
    description: "An analysis of circulatory microRNAs as predictive biomarkers in oncology.",
    author: "M. Dubois, K. Patel, et al.",
    meta: "Oct 10, 2026",
    image: `${IMG}/paper-1.webp`,
    href: "/insights",
  },
  {
    tag: "Research Papers",
    title: "AI in Diagnostics: A New Frontier",
    description: "Comparing machine learning models against traditional diagnostic workflows in pathology.",
    author: "A. Kumar, J. Smith",
    meta: "Sep 22, 2026",
    image: `${IMG}/paper-2.webp`,
    href: "/insights",
  },
  {
    tag: "Research Papers",
    title: "Targeted Drug Delivery Systems",
    description: "Nanoparticle-based approaches for targeted therapeutic delivery in solid tumors.",
    author: "L. Chen, R. Davis",
    meta: "Sep 05, 2026",
    image: `${IMG}/paper-3.webp`,
    href: "/insights",
  },
]

const caseStudies: Card[] = [
  {
    tag: "Case Studies",
    title: "Improving Rural Healthcare through Mobile Diagnostics",
    description: "How a portable lab setup increased early detection rates by 40% in remote communities.",
    author: "Global Health Initiative",
    meta: "Aug 14, 2026",
    image: `${IMG}/case-1.webp`,
    href: "/insights",
  },
  {
    tag: "Case Studies",
    title: "Scaling Genomic Research in Resource-Limited Settings",
    description: "A framework for establishing sequencing capabilities in developing regions.",
    author: "Genomics for All",
    meta: "Jul 29, 2026",
    image: `${IMG}/case-2.webp`,
    href: "/insights",
  },
  {
    tag: "Case Studies",
    title: "Building Research Capacity Through Collaboration",
    description: "Partnership models that successfully accelerated vaccine development timelines.",
    author: "Bencos Partner Network",
    meta: "Jul 10, 2026",
    image: `${IMG}/case-3.webp`,
    href: "/insights",
  },
]

const blogPosts: Card[] = [
  {
    tag: "Blog",
    title: "5 Breakthroughs in Life Sciences to Watch in 2026",
    description: "From CRISPR advancements to synthetic biology, these are the trends shaping the future.",
    author: "Editorial Team",
    meta: "Oct 14, 2026 · 4 min read",
    image: `${IMG}/blog-1.webp`,
    href: "/insights",
  },
  {
    tag: "Blog",
    title: "How Green Science Is Shaping a Healthier Tomorrow",
    description: "Sustainable practices in modern laboratories and their impact on environmental health.",
    author: "Dr. Martin Green",
    meta: "Oct 02, 2026 · 7 min read",
    image: `${IMG}/blog-2.webp`,
    href: "/insights",
  },
  {
    tag: "Blog",
    title: "The Role of AI in Modern Research",
    description: "Why artificial intelligence is becoming an indispensable tool for research scientists.",
    author: "Anita Desai",
    meta: "Sep 18, 2026 · 5 min read",
    image: `${IMG}/blog-3.webp`,
    href: "/insights",
  },
]

type HubCategory = "Articles" | "Research Papers" | "Case Studies" | "Blog"

const hubBadge: Record<HubCategory, { label: string; className: string; avatar: string }> = {
  Articles: { label: "Article", className: "bg-green-50 text-green-700", avatar: "bg-blue-100 text-blue-600" },
  "Research Papers": { label: "Research Paper", className: "bg-blue-50 text-blue-700", avatar: "bg-blue-100 text-blue-600" },
  "Case Studies": { label: "Case Study", className: "bg-orange-50 text-orange-600", avatar: "bg-orange-100 text-orange-600" },
  Blog: { label: "Blog", className: "bg-purple-50 text-purple-700", avatar: "bg-purple-100 text-purple-600" },
}

const hubItems: {
  category: HubCategory
  date: string
  title: string
  description: string
  author: string
  image: string
  href: string
}[] = [
  {
    category: "Articles",
    date: "Sep 2, 2026",
    title: "The Future of Biotechnology in Public Health",
    description:
      "Exploring how advances in synthetic biology and genomics are transforming disease prevention and population health...",
    author: "Prof. R. Osei",
    image: `${IMG}/hub-1.webp`,
    href: "/https://www.myneuronworld.com/news",
  },
  {
    category: "Research Papers",
    date: "Aug 28, 2026",
    title: "Novel Biomarkers for Early Disease Detection",
    description:
      "Identifying protein and RNA biomarker signatures that enable earlier, more accurate diagnosis of oncological conditions.",
    author: "Prof. R. Osei",
    image: `${IMG}/hub-2.webp`,
    href: "/https://www.myneuronworld.com/news",
  },
  {
    category: "Case Studies",
    date: "Aug 15, 2026",
    title: "Improving Rural Healthcare through Mobile Diagnostics",
    description:
      "How portable diagnostic tools and telemedicine closed critical healthcare gaps across three under-resourced districts.",
    author: "Dr. S. Boateng",
    image: `${IMG}/hub-3.webp`,
    href: "/insights",
  },
  {
    category: "Blog",
    date: "Aug 10, 2026",
    title: "5 Breakthroughs in Life Sciences to Watch in 2026",
    description:
      "From mRNA therapeutics to precision fermentation — the research stories shaping the next decade of biomedicine.",
    author: "Bencos Editorial",
    image: `${IMG}/hub-4.webp`,
    href: "/insights",
  },
]

const hubFilters = ["All", "Articles", "Research Papers", "Case Studies", "Blog"] as const

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
const greenBtn =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-green-600 font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
const outlineBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white font-semibold text-foreground transition-colors hover:border-green-600 hover:text-green-700"

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#12803f]">{children}</p>
}

/** Intro block for each content type: text + buttons on the left, photo on the right. */
function ContentIntro({
  id,
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  primary,
  secondary,
}: {
  id: string
  eyebrow: string
  title: React.ReactNode
  text: string
  image: string
  imageAlt: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <div id={id} className={`${container} grid scroll-mt-28 items-center gap-10 lg:grid-cols-[1fr_minmax(0,660px)] lg:gap-16`}>
      <motion.div {...fadeUp}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{text}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link href={primary.href} className={`${greenBtn} px-7 py-3.5 text-sm`}>
            {primary.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {secondary && (
            <Link href={secondary.href} className={`${outlineBtn} px-7 py-3.5 text-sm`}>
              {secondary.label}
              <Plus className="h-4 w-4" />
            </Link>
          )}
        </div>
      </motion.div>
      <motion.img
        {...fadeUp}
        src={image}
        alt={imageAlt}
        className="aspect-[660/450] w-full rounded-2xl object-cover"
      />
    </div>
  )
}

function TrendingHeader({ title, subtitle, href }: { title: string; subtitle?: string; href: string }) {
  return (
    <div className={`${container} flex flex-wrap items-end justify-between gap-4`}>
      <motion.div {...fadeUp}>
        <Eyebrow>Trending</Eyebrow>
        <h3 className="mt-2 text-2xl font-medium leading-tight text-foreground sm:text-3xl">{title}</h3>
        {subtitle && <p className="mt-4 leading-relaxed text-muted-foreground">{subtitle}</p>}
      </motion.div>
      <Link
        href={href}
        className="group mb-1 inline-flex items-center gap-2 rounded-full bg-[#e8f4ed] px-4 py-2 text-sm font-medium text-[#12803f] transition-colors hover:bg-[#d6ecdf]"
      >
        View All
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

function ContentCard({ card, index }: { card: Card; index: number }) {
  return (
    <motion.article
      {...fadeUp}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
    >
      <div className="overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="aspect-[450/260] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-7 md:px-4 lg:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#12803f]">{card.tag}</p>
        <h4 className="mt-4 text-lg font-semibold leading-snug text-foreground">{card.title}</h4>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-neutral-200 pt-5">
          <div>
            <p className="text-[13px] font-semibold text-neutral-950">{card.author}</p>
            <p className="mt-1 text-xs text-neutral-500">{card.meta}</p>
          </div>
          <Link
            href={card.href}
            aria-label={`Read ${card.title}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f4ed] text-[#12803f] transition-colors hover:bg-[#12803f] hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className={`${container} mt-10 grid gap-6 md:grid-cols-3 md:gap-4 lg:gap-9`}>
      {cards.map((c, i) => (
        <ContentCard key={c.title} card={c} index={i} />
      ))}
    </div>
  )
}

function KnowledgeHub() {
  const [filter, setFilter] = useState<(typeof hubFilters)[number]>("All")
  const items = filter === "All" ? hubItems : hubItems.filter((i) => i.category === filter)

  return (
    <section className="pb-24 pt-10">
      <div className={`${container} flex flex-wrap items-end justify-between gap-6`}>
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase text-[#12803f]">Featured Content</p>
          <h2 className="mt-2 text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">Latest from Our Knowledge Hub</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Explore research-driven articles, perspectives and insights.</p>
        </motion.div>
        <div className="-mx-4 max-w-[calc(100%+2rem)] overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:max-w-full sm:px-0">
          <div role="tablist" aria-label="Filter content" className="flex w-max items-center gap-1 rounded-full bg-[#f1f3f6] p-1.5">
            {hubFilters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  filter === f ? "bg-[#12803f] font-semibold text-white" : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`${container} mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7`}>
        <AnimatePresence mode="popLayout">
          {items.map((item) => {
            const badge = hubBadge[item.category]
            return (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <img src={item.image} alt={item.title} className="aspect-[330/200] w-full object-cover" />
                <div className="flex flex-1 flex-col px-5 pb-6 pt-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase ${badge.className}`}>
                      {badge.label}
                    </span>
                    <span className="text-[13px] text-neutral-500">{item.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{item.title}</h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="flex items-center gap-3 text-sm text-neutral-600">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${badge.avatar}`}>
                        {item.author.charAt(0)}
                      </span>
                      {item.author}
                    </span>
                    <Link
                      href={item.href}
                      aria-label={`Read ${item.title}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-green-600 hover:text-green-700"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default function ScientificWritingPage() {
  useEffect(() => {
    document.title = "Scientific Writing | Bencos Research Solutions"
  }, [])

  return (
    <div className="scroll-smooth bg-background text-foreground">

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-neutral-800">
        <img
          src={`${IMG}/hero.webp`}
          alt="Researcher annotating scientific papers beside a laptop"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/35 md:bg-black/10" />
        <div className={`${container} relative flex min-h-[520px] items-center py-16 lg:min-h-[670px] lg:items-start lg:pb-16 lg:pt-[92px]`}>
          <div className="w-full max-w-[885px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-light tracking-tight text-white antialiased md:text-xl"
            >
              What we do
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 h-px w-full origin-left bg-white/60"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 font-elegant text-3xl tracking-wide text-white sm:text-4xl md:text-5xl leading-[1.25]"
            >
              Ideas.Evidence.
              <br />
              Impact.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              Explore scientific writing, research papers, case studies and articles that advance knowledge and create
              real-world impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
              >
                Talk to Our Expert
              </a>
              <Link
                href="https://www.myneuronworld.com/articles/add"
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white/90"
              >
                Submit Content
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ BRIDGING ============================ */}
      <section className="pt-20 lg:pt-[82px]">
        <motion.div {...fadeUp} className="mx-auto max-w-[1100px] px-4 text-center">
          <h2 className="text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
            Bridging Science and Society
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Thought-provoking articles, commentaries and perspectives that translate scientific knowledge into meaningful
            understanding.
          </p>
        </motion.div>
        {/* Full-bleed photo, edge to edge like the design. */}
        <motion.img
          {...fadeUp}
          src={`${IMG}/bridging.png`}
          alt="Scientist explaining research to families at a public science event"
          className="mt-10 block aspect-[1440/500] w-full object-cover max-md:aspect-[4/3]"
        />
      </section>

      {/* ============================ ARTICLES ============================ */}
      {/* <section className="pt-24 lg:pt-[184px]">
        <ContentIntro
          id="articles"
          eyebrow="Articles"
          title={
            <>
              Ideas, Insights, and
              <br className="hidden sm:block" /> expert perspectives
            </>
          }
          text="Insights and stories that bring scientific discoveries, healthcare innovation and emerging ideas into focus."
          image={`${IMG}/articles.webp`}
          imageAlt="Scientists reviewing brain scans together"
          primary={{ label: "Explore Articles", href: "/insights" }}
          secondary={{ label: "Submit an Article", href: "/contact" }}
        />
        <div className="mt-20">
          <TrendingHeader
            title="Trending Articles"
            subtitle="Research, discoveries and ideas shaping healthcare and science today."
            href="/insights"
          />
          <CardGrid cards={articles} />
        </div>
      </section> */}

      {/* ============================ RESEARCH PAPERS ============================ */}
      <section className="pt-24 lg:pt-[116px]">
        <ContentIntro
          id="research-papers"
          eyebrow="Research Papers"
          title={
            <>
              Evidence that
              <br className="hidden sm:block" /> advances innovation.
            </>
          }
          text="Explore research findings, scientific discoveries and contributions from the Bencos research community."
          image={`${IMG}/research.webp`}
          imageAlt="Researchers using a microscope in a lab"
          primary={{ label: "Explore Research Papers", href: "https://www.myneuronworld.com/news" }}
          secondary={{ label: "Submit a Paper", href: "https://www.myneuronworld.com/articles/add" }}
        />
        {/* <div className="mt-12">
          <TrendingHeader title="Trending Research Papers" href="/insights" />
          <CardGrid cards={papers} />
        </div> */}
      </section>

      {/* ============================ CASE STUDIES ============================ */}
      <section className="pt-24 lg:pt-[146px]">
        <ContentIntro
          id="case-studies"
          eyebrow="Case Studies"
          title={
            <>
              Real-world
              <br className="hidden sm:block" /> applications and
              <br className="hidden sm:block" /> learnings.
            </>
          }
          text="Explore real-world applications, challenges, approaches and outcomes from research and innovation."
          image={`${IMG}/case-studies.webp`}
          imageAlt="Scientist working at a microscope"
          primary={{ label: "Explore Case Studies", href: "/insights" }}
          secondary={{ label: "Submit a Case Study", href: "/contact" }}
        />
        {/* <div className="mt-16">
          <TrendingHeader title="Trending Case Studies" href="/insights" />
          <CardGrid cards={caseStudies} />
        </div> */}
      </section>

      {/* ============================ BLOG ============================ */}
      <section className="pb-12 pt-24 lg:pt-[118px]">
        <ContentIntro
          id="blog"
          eyebrow="Blog"
          title={
            <>
              Conversations in
              <br className="hidden sm:block" /> science
            </>
          }
          text="Latest stories, updates and perspectives from science, healthcare and innovation."
          image={`${IMG}/blog.webp`}
          imageAlt="Doctors discussing reports at a table"
          primary={{ label: "Read Our Blog", href: "https://www.myneuronworld.com/news" }}
        />
        {/* <div className="mt-20">
          <TrendingHeader title="Trending from the Blog" href="/insights" />
          <CardGrid cards={blogPosts} />
        </div> */}
      </section>

      {/* ============================ KNOWLEDGE HUB ============================ */}
      <KnowledgeHub />

    </div>
  )
}
