"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ClipboardCheck,
  Lightbulb,
  Shield,
  FileText,
  Check,
  Cpu,
  Database,
  LineChart,
  GitBranch,
  ArrowRight,
  Microscope,
  Heart,
  Leaf,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

const consultancyServices = [
  {
    icon: Lightbulb,
    title: "Experimental Design",
    description:
      "Optimize your study design for statistical power and reproducibility with expert guidance.",
  },
  {
    icon: ClipboardCheck,
    title: "Protocol Development",
    description:
      "Custom protocols tailored to your sample types, throughput requirements, and research objectives.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Navigate FDA, EMA, and other regulatory frameworks for clinical genomics applications.",
  },
  {
    icon: FileText,
    title: "Grant Writing Support",
    description:
      "Technical sections and budget planning for genomics-focused research proposals.",
  },
]

const ngsServices = [
  {
    title: "Whole Genome Sequencing",
    description:
      "Comprehensive genomic profiling with high coverage depth for variant discovery.",
    features: [
      "Human, animal, and plant genomes",
      "30X-60X coverage options",
      "De novo assembly available",
    ],
  },
  {
    title: "RNA Sequencing",
    description:
      "Gene expression profiling and transcript discovery for transcriptomics studies.",
    features: ["mRNA, total RNA, small RNA", "Single-cell RNA-seq", "Spatial transcriptomics"],
  },
  {
    title: "Targeted Sequencing",
    description:
      "Focused panels for specific genes, regions, or pathways of interest.",
    features: ["Custom panel design", "Exome sequencing", "Amplicon sequencing"],
  },
  {
    title: "Metagenomics",
    description:
      "Microbial community profiling and functional analysis from environmental samples.",
    features: ["16S/18S/ITS profiling", "Shotgun metagenomics", "Metatranscriptomics"],
  },
]

const biaasFeatures = [
  {
    icon: Cpu,
    title: "Scalable Computing",
    description: "Cloud-native infrastructure that scales with your data volume.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Secure storage, versioning, and FAIR-compliant data handling.",
  },
  {
    icon: LineChart,
    title: "Custom Pipelines",
    description: "Tailored analysis workflows for your specific research questions.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Reproducible analyses with complete audit trails.",
  },
]

const analysisTypes = [
  "Variant Calling & Annotation",
  "Differential Expression",
  "Pathway Analysis",
  "Multi-omics Integration",
  "Machine Learning Models",
  "Statistical Reporting",
]

const industries = [
  {
    id: "life-sciences",
    icon: Microscope,
    title: "Life Sciences",
    description:
      "Supporting academic research, drug discovery, and basic science with comprehensive genomics solutions.",
    applications: ["Academic research", "Pharmaceutical R&D", "Biotech startups"],
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    description:
      "Enabling precision medicine through clinical genomics, diagnostics, and personalized treatment strategies.",
    applications: ["Clinical diagnostics", "Pharmacogenomics", "Rare disease research"],
  },
  {
    id: "climate-science",
    icon: Leaf,
    title: "Climate Science",
    description:
      "Environmental genomics for biodiversity monitoring, conservation, and climate adaptation research.",
    applications: ["Environmental DNA (eDNA)", "Conservation genetics", "Agricultural genomics"],
  },
  {
    id: "technology",
    icon: Cpu,
    title: "Technology",
    description:
      "Partnering with tech companies to develop AI-driven tools and platforms for genomics analysis.",
    applications: ["AI/ML integration", "Platform development", "Data infrastructure"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        tagline="What We Do"
        title="Comprehensive genomics and bioinformatics services"
        description="From experimental design to publication-ready insights, we provide end-to-end support for your research journey."
      />

      {/* ======================= CONSULTANCY ======================= */}
      <section id="consultancy" className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
              >
                Consultancy
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl text-balance"
              >
                Strategic guidance for your research
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-muted-foreground leading-relaxed"
              >
                Our team of experienced scientists and bioinformaticians provides
                strategic consultancy to help you design robust studies, navigate
                regulatory requirements, and maximize the impact of your genomics
                research.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs font-medium text-muted-foreground">
                  Validated Workflows
                </span>
                <div className="h-px flex-1 bg-border" />
              </motion.div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {consultancyServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="rounded-sm border border-border bg-card p-5 transition-colors hover:border-green-600/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10">
                    <service.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================== NGS ========================== */}
      <section id="ngs" className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
            >
              NGS Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl"
            >
              Next-Generation Sequencing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-muted-foreground leading-relaxed"
            >
              State-of-the-art sequencing platforms with standardized protocols, rigorous
              QC, and fast turnaround times.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ngsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="rounded-sm border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <div className="mt-4 h-px bg-border" />
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== BIAAS ========================== */}
      <section id="biaas" className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
              >
                BIAAS
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl text-balance"
              >
                Bioinformatics as a Service
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-muted-foreground leading-relaxed"
              >
                Leverage our computational expertise without building in-house
                infrastructure. From raw data to publication-ready figures, we handle the
                heavy lifting.
              </motion.p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {biaasFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <feature.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h4 className="text-sm font-medium text-foreground">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-sm border border-border bg-card p-8"
            >
              <h3 className="text-lg font-semibold text-foreground">Analysis Types</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our bioinformatics team specializes in:
              </p>
              <div className="my-6 h-px bg-border" />
              <ul className="grid grid-cols-2 gap-3">
                {analysisTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {type}
                  </li>
                ))}
              </ul>
              <div className="my-6 h-px bg-border" />
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-green-600/80"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= INDUSTRIES ======================= */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40"
            >
              Industries We Serve
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-4xl font-medium leading-tight text-primary-foreground md:text-5xl"
            >
              Cross-Sector Expertise
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="rounded-sm border border-sidebar-border bg-sidebar p-6 transition-colors hover:border-green-600/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                    <industry.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {industry.applications.map((app) => (
                        <span
                          key={app}
                          className="rounded-full bg-sidebar-accent px-3 py-1 text-xs text-primary-foreground/80"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
