"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react"

// Hero image lives in /public/images — swap the src below to change it.
const HERO_IMAGE = "/images/image 117.webp"

// Get a free access key at https://web3forms.com and paste it here.
const WEB3FORMS_ACCESS_KEY = "ea96e555-0fac-4c10-928a-bb399071be8b"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@bencoslife.com",
    href: "mailto:support@bencoslife.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98754 51675",
    href: "tel:+919875451675",
  },
]

const offices = [
  {
    name: "Head Office: Thane, Maharashtra",
    address:
      "ZENIA BUILDING, 4th Floor, Hiranandani Business Park, Arcadia Cir, Hiranandani Estate, Thane West, Maharashtra 400607",
  },
  {
    name: "Bencos Europe, Germany",
    address: "Regus Landsberger Strasse, Munichen, 302827, Germany",
  },
  {
    name: "Bencos, Kolkata",
    address: "AWFIS Technopolis, 11th Floor, BP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091",
  },
  {
    name: "Bencos, Chennai",
    address:
      "AWFIS OMR 273A, Rajiv Gandhi Salai, Nehru Nagar, Perungudi, Padur, Chennai, Tamil Nadu 603103",
  },
  {
    name: "Bencos, Guwahati",
    address:
      "Office Tribe Coworking Space, Shreeji Tower, GS Rd, Kaligaon, Christian Basti, Guwahati, Assam 781005",
  },
]

const inquiryTypes = [
  "General inquiry",
  "Consultancy",
  "NGS Services",
  "BIAAS / Bioinformatics",
  "Partnership",
  "Careers",
]

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    type: inquiryTypes[0],
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[${form.type}] Inquiry from ${form.name}`,
          from_name: "Bencos Contact Form",
          name: form.name,
          email: form.email,
          organization: form.organization,
          inquiry_type: form.type,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setForm({ name: "", email: "", organization: "", type: inquiryTypes[0], message: "" })
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A modern Bencos research facility"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
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
              Contact
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
              Let's Build 
              <br />
              the Future Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
              Whether you're exploring scientific partnerships, healthcare collaborations, genomics solutions, or innovative technology platforms, our experts are ready to help.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-6 max-w-6xl text-muted-foreground leading-relaxed">
                Connect with our multidisciplinary team to discuss research collaborations,
                genomics services, healthcare innovation, technology platforms, scientific
                consulting, or business partnerships.
              </p>

              <div className="mt-8 h-px w-full max-w-xs bg-border" />

              <p className="mt-6 text-sm font-semibold text-foreground">Office Address</p>

              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                {offices.map((office) => (
                  <div key={office.name}>
                    <h3 className="text-base font-semibold text-foreground">{office.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 h-px w-full max-w-xs bg-border" />

              <div className="mt-6 space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-foreground transition-opacity hover:opacity-70"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#4ADE76]" />
                      {item.value}
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-sm border border-border bg-secondary p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                  <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">
                    Thank you!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                    Your message has been sent. Our team will get back to you within two
                    business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setError(false)
                    }}
                    className="mt-8 text-sm font-medium text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-sm border border-border bg-secondary p-8 lg:p-10"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Jane Doe"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="jane@university.edu"
                      />
                    </Field>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <Field label="Organization" htmlFor="organization">
                      <input
                        id="organization"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Institution or company"
                      />
                    </Field>
                    <Field label="Inquiry type" htmlFor="type">
                      <select
                        id="type"
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="mt-6">
                    <Field label="Message" htmlFor="message">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your project or question..."
                      />
                    </Field>
                  </div>

                  {error && (
                    <p className="mt-6 text-sm text-red-500">
                      Something went wrong. Please try again or email us directly at
                      support@bencoslife.in.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="group mt-8 inline-flex items-center gap-3 rounded-sm bg-[#4ADE76] px-6 py-3.5 text-sm font-medium text-primary transition-all hover:bg-green-600/90 disabled:opacity-60"
                  >
                    {sending ? "Sending…" : "Send message"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
