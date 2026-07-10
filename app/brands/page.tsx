"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ArrowUpRight,
  ArrowRight,
  Brain,
  Globe,
  Heart,
  GraduationCap,
  Sparkles,
  Zap,
  Network,
  Lightbulb,
} from "lucide-react"

const brands = [
  {
    name: "TWINE",
    tagline: "AI-Enhanced Multi-Omics BI Suite",
    description:
      "A comprehensive bioinformatics platform that integrates genomics, transcriptomics, and proteomics data with AI-powered analysis workflows. Built for researchers who demand precision and scalability.",
    href: "https://twine.myneuron.in",
    image: "/images/twine-dna.jpg",
    icon: Brain,
    features: ["Multi-omics integration", "AI-powered insights", "Cloud-native architecture"],
    external: true,
  },
  {
    name: "GATC",
    tagline: "Global Genomics Conference Platform",
    description:
      "The premier international conference connecting genomics researchers, clinicians, and innovators. GATC brings together the brightest minds to shape the future of precision medicine.",
    href: "https://gatc.co.in",
    image: "/images/gatc-conference.jpg",
    icon: Globe,
    features: ["Annual summit", "Global speakers", "Industry networking"],
    external: true,
  },
  {
    name: "Bencos Health",
    tagline: "Precision Clinical Genomics",
    description:
      "Translating genomic insights into clinical action. Our precision medicine division partners with healthcare providers to deliver actionable genetic testing for oncology and rare diseases.",
    href: "https://bencoshealth.in",
    image: "/images/bencos-health.jpg",
    icon: Heart,
    features: ["Clinical diagnostics", "Oncology focus", "Rare disease panels"],
    external: true,
  },
  {
    name: "BenED",
    tagline: "Educational Initiatives",
    description:
      "Democratizing genomics education through workshops, training programs, and certification courses. Empowering the next generation of bioinformaticians and genomics professionals.",
    href: "/brands#bened",
    image: "/images/neural-network.jpg",
    icon: GraduationCap,
    features: ["Training programs", "Certification courses", "Academic partnerships"],
    external: false,
  },
]

const neurons = [
  {
    id: 1,
    title: "Pattern Recognition",
    description: "Identify complex patterns across multi-omics datasets",
    icon: Network,
    position: { top: "10%", left: "15%" },
  },
  {
    id: 2,
    title: "Insight Generation",
    description: "Transform raw data into actionable discoveries",
    icon: Lightbulb,
    position: { top: "25%", right: "20%" },
  },
  {
    id: 3,
    title: "AI Enhancement",
    description: "Machine learning models trained on genomic data",
    icon: Sparkles,
    position: { top: "60%", left: "10%" },
  },
  {
    id: 4,
    title: "Rapid Processing",
    description: "High-throughput analysis with cloud infrastructure",
    icon: Zap,
    position: { bottom: "20%", right: "15%" },
  },
]

function NeuronNode({
  neuron,
  index,
}: {
  neuron: (typeof neurons)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const Icon = neuron.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 200 }}
      className="absolute group cursor-pointer"
      style={neuron.position}
    >
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
        className="absolute inset-0 rounded-full bg-accent"
      />
      <div className="relative h-14 w-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center transition-all group-hover:bg-green-600/20 group-hover:border-green-600">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-primary text-primary-foreground rounded-sm px-4 py-3 shadow-lg min-w-[200px]">
          <p className="text-sm font-medium">{neuron.title}</p>
          <p className="text-xs text-primary-foreground/60 mt-1">{neuron.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function BrandsPage() {
  const myNeuronRef = useRef(null)
  const myNeuronInView = useInView(myNeuronRef, { once: true, margin: "-100px" })

  return (
    <>
      {/* ======================= BRANDS HERO ======================= */}
      <section className="relative py-16 lg:py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Our Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl text-balance"
            >
              Products & Platforms for{" "}
              <span className="text-accent">Precision Science</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              A portfolio built for the future of genomics—from AI-powered analysis
              platforms to global scientific conferences and clinical precision medicine.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
          >
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 rounded-full border border-accent/20" />
              <div className="absolute inset-8 rounded-full border border-accent/30" />
              <div className="absolute inset-16 rounded-full border border-accent/40" />
              <div className="absolute inset-24 rounded-full bg-accent/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= BRAND CARDS ======================= */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {brands.map((brand, index) => {
              const Icon = brand.icon
              return (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={brand.href}
                    target={brand.external ? "_blank" : undefined}
                    rel={brand.external ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    <div
                      className={`grid lg:grid-cols-2 gap-8 items-center bg-background rounded-sm border border-border/50 overflow-hidden transition-all hover:border-green-600/30 hover:shadow-xl ${
                        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                        <Image
                          src={brand.image || "/placeholder.svg"}
                          alt={brand.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <div className="h-12 w-12 rounded-sm bg-accent/90 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                      </div>

                      <div className="p-8 lg:p-12">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-serif font-medium text-foreground group-hover:text-green-600 transition-colors">
                              {brand.name}
                            </h3>
                            <p className="mt-1 text-sm text-accent font-medium">
                              {brand.tagline}
                            </p>
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 -translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                        </div>

                        <p className="mt-6 text-muted-foreground leading-relaxed">
                          {brand.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {brand.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-block px-3 py-1 text-xs font-medium text-foreground/70 bg-secondary rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-border/50">
                          <span className="text-sm font-medium text-foreground group-hover:text-green-600 transition-colors">
                            {brand.external ? "Visit Platform" : "Learn More"}
                            <span className="ml-2">→</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================= MYNEURON ======================= */}
      <section
        id="myneuron"
        ref={myNeuronRef}
        className="py-16 lg:py-20 bg-background overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={myNeuronInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Insight Discovery Engine
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-5xl">
                  MyNeuron
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Every insight is a neuron—a discovery that triggers new connections, new
                  understanding, and new possibilities in genomics research.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={myNeuronInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 space-y-6"
              >
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <Network className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Connected Insights</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Each analysis builds on previous discoveries, creating a network of
                      interconnected insights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">AI-Powered Discovery</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Machine learning algorithms identify patterns humans might miss,
                      accelerating breakthrough moments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Real-Time Processing</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cloud-native infrastructure delivers results when you need them, not
                      days later.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={myNeuronInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10"
              >
                <Link
                  href="https://twine.myneuron.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Experience TWINE
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={myNeuronInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 rounded-sm overflow-hidden">
                  <Image
                    src="/images/neural-network.jpg"
                    alt="Neural network visualization"
                    fill
                    className="object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="h-24 w-24 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-accent/30 flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-accent" />
                    </div>
                  </motion.div>
                </div>

                {neurons.map((neuron, index) => (
                  <NeuronNode key={neuron.id} neuron={neuron} index={index} />
                ))}

                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={myNeuronInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    x1="50%"
                    y1="50%"
                    x2="22%"
                    y2="17%"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={myNeuronInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    x1="50%"
                    y1="50%"
                    x2="75%"
                    y2="32%"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={myNeuronInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    x1="50%"
                    y1="50%"
                    x2="17%"
                    y2="67%"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={myNeuronInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    x1="50%"
                    y1="50%"
                    x2="78%"
                    y2="73%"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
