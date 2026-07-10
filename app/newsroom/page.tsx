"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Calendar, FileText, Download } from "lucide-react"
import { PageHeader } from "@/components/page-header"

const articles = [
  {
    category: "News",
    date: "January 10, 2026",
    title: "Bencos expands operations to European market with Cambridge office",
    excerpt:
      "Strategic expansion brings our genomics expertise closer to leading European research institutions.",
  },
  {
    category: "Blog",
    date: "January 5, 2026",
    title: "Best practices for single-cell RNA sequencing study design",
    excerpt:
      "A comprehensive guide to optimizing your scRNA-seq experiments for maximum insight.",
  },
  {
    category: "News",
    date: "December 28, 2025",
    title: "GATC 2026 conference dates announced",
    excerpt:
      "Join us in Bangalore for the second annual Genomics, AI & Translational Conference.",
  },
  {
    category: "Blog",
    date: "December 20, 2025",
    title: "Understanding batch effects in multi-omics integration",
    excerpt:
      "Technical deep-dive into identifying and correcting batch effects across different omics layers.",
  },
  {
    category: "News",
    date: "December 15, 2025",
    title: "Partnership announced with leading pharma company",
    excerpt:
      "Strategic collaboration to accelerate drug discovery through integrated genomics services.",
  },
  {
    category: "Blog",
    date: "December 10, 2025",
    title: "The future of clinical genomics: trends for 2026",
    excerpt:
      "Industry outlook on emerging technologies and applications in clinical genomics.",
  },
]

const whitepapers = [
  {
    title: "Multi-omics Integration: A Practical Guide",
    description:
      "Comprehensive methodology for integrating genomics, transcriptomics, and proteomics data.",
    pages: 24,
    downloadUrl: "#",
  },
  {
    title: "Quality Control in NGS Workflows",
    description:
      "Best practices for ensuring data quality throughout the sequencing pipeline.",
    pages: 18,
    downloadUrl: "#",
  },
  {
    title: "Clinical Genomics Implementation Framework",
    description:
      "A roadmap for healthcare institutions adopting genomics-based diagnostics.",
    pages: 32,
    downloadUrl: "#",
  },
]

export default function NewsroomPage() {
  return (
    <>
      <PageHeader
        tagline="Insights"
        title="News, insights, and scientific resources"
        description="Explore our latest publications, industry news, and thought leadership in genomics and bioinformatics."
      />

      {/* ======================= FEATURED ARTICLE ======================= */}
      <section id="blog" className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
              <Image
                src="/images/twine-dna.jpg"
                alt="TWINE multi-omics platform"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                Featured
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  January 15, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />8 min read
                </span>
              </div>
              <h2 className="mt-4 font-serif text-2xl font-medium text-foreground md:text-3xl lg:text-4xl text-balance">
                How TWINE is standardizing multi-omics interpretation
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Discover how our flagship platform is transforming the way researchers
                analyze and interpret complex multi-omics datasets, enabling faster
                discoveries and more reproducible results.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  Multi-omics
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  TWINE
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  Bioinformatics
                </span>
              </div>
              <Link
                href="#"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-green-600"
              >
                Read the full article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= ARTICLES GRID ======================= */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-serif text-2xl font-medium text-foreground md:text-3xl"
              >
                Latest Articles
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-2"
            >
              <button
                type="button"
                className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
              >
                All
              </button>
              <button
                type="button"
                className="rounded-full bg-card px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                News
              </button>
              <button
                type="button"
                className="rounded-full bg-card px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Blog
              </button>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-sm border border-border bg-card p-6 transition-colors hover:border-green-600/50"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 font-medium text-accent">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground leading-snug transition-colors group-hover:text-green-600">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Read more
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= WHITEPAPERS ======================= */}
      <section id="whitepapers" className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Resources
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 font-serif text-2xl font-medium text-foreground md:text-3xl"
            >
              Whitepapers & Technical Reports
            </motion.h2>
          </div>

          <div className="space-y-4">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group flex flex-col gap-4 rounded-sm border border-border bg-card p-6 transition-colors hover:border-green-600/50 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{paper.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {paper.description}
                    </p>
                    <span className="mt-2 inline-block text-xs text-muted-foreground">
                      {paper.pages} pages
                    </span>
                  </div>
                </div>
                <a
                  href={paper.downloadUrl}
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:shrink-0"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
