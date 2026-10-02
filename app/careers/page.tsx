"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X, Upload } from "lucide-react"

// Get a free access key at https://web3forms.com and paste it here.
const WEB3FORMS_ACCESS_KEY = "ea96e555-0fac-4c10-928a-bb399071be8b"

// Google Apps Script "Web app URL" (ends in /exec) that saves CVs to Google Drive and logs each
// application in a Google Sheet. Setup steps: scripts/careers-apps-script.gs
const CAREERS_UPLOAD_URL =
  "https://script.google.com/macros/s/AKfycbxN1mWV-zAeeQXRd3DUOhXtvX4GNQeA0-444sn9E8OiyaBRCDIg3FWh2fTleeGLa5Vnmg/exec"
const HR_EMAIL = "hr@bencoslife.com"

// Open positions — add/edit entries and the list reflows automatically.
const openings = [
  { title: "Research Scientist", department: "Life Sciences", location: "Bengaluru, India", type: "Full time" },
  { title: "Bioinformatics Scientist", department: "Life Sciences", location: "Boston, USA", type: "Full time" },
  { title: "Clinical Genomics Specialist", department: "Life Sciences", location: "Bengaluru, India", type: "Full time" },
  { title: "Software Engineer", department: "Technology", location: "Bengaluru, India", type: "Full time" },
  { title: "Data Scientist", department: "Technology", location: "Bengaluru, India", type: "Full time" },
  { title: "Data Scientist", department: "Technology", location: "Bengaluru, India", type: "Full time" },
  { title: "Business Development Executive", department: "Business & Operations", location: "Bengaluru, India", type: "Full time" },
  { title: "Project Manager", department: "Business & Operations", location: "Bengaluru, India", type: "Full time" },
]

// Section images live in /public/images — swap the srcs below to change them.
const HERO_IMAGE = "/images/image 245.webp"
const PEOPLE_IMAGE = "/images/image 246.webp"
const DISCIPLINES_IMAGE = "/images/image 255.webp"
const JOURNEY_IMAGE = "/images/image 256.webp"

// Culture — alternating rows; even index = image left, odd = image right.
const culture = [
  {
    title: "Innovation",
    description:
      "We encourage bold ideas that accelerate scientific discovery and technological innovation.",
    image: "/images/image 247.webp",
    imageAlt: "Two scientists reviewing work together on a laptop",
  },
  {
    title: "Collaboration",
    description:
      "Our multidisciplinary teams work together across life sciences, healthcare, AI, and business.",
    image: "/images/image 248.webp",
    imageAlt: "A diverse team collaborating around a whiteboard",
  },
  {
    title: "Learning & Growth",
    description:
      "We invest in continuous learning, mentorship, professional development, and knowledge sharing.",
    image: "/images/image 249.webp",
    imageAlt: "A mentor and colleague talking in an office",
  },
  {
    title: "Global Impact",
    description:
      "Every project contributes to improving healthcare, advancing research, and creating meaningful impact worldwide.",
    image: "/images/image 250.webp",
    imageAlt: "A team on a global video call in a meeting room",
  },
]

// Career discipline cards — image, title, and tag pills.
const disciplines = [
  {
    title: "Life Sciences",
    image: "/images/image 251.png",
    tags: ["Scientists", "Genomics", "Bioinformaticians", "Researchers"],
  },
  {
    title: "Healthcare",
    image: "/images/image 252.png",
    tags: ["Genomics", "Diagnostics", "Healthcare", "Precision"],
  },
  {
    title: "Technology",
    image: "/images/image 253.png",
    tags: ["AI", "Software", "Data Science", "Cloud"],
  },
  {
    title: "Business & Operations",
    image: "/images/image 254.png",
    tags: ["Business", "Marketing", "Finance", "Operations"],
  },
]

const MAX_CV_BYTES = 5 * 1024 * 1024

/** Reads a file as base64 (without the "data:...;base64," prefix). */
function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "")
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

export default function CareersPage() {
  const [applyJob, setApplyJob] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [fileName, setFileName] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const closeModal = () => {
    setApplyJob(null)
    setStatus("idle")
    setFileName("")
    setErrorMessage("")
  }

  const fail = (message = "") => {
    setErrorMessage(message)
    setStatus("error")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const cv = formData.get("cv")
    if (!(cv instanceof File) || cv.size === 0) return fail("Please upload your CV as a PDF,")
    if (cv.size > MAX_CV_BYTES) return fail("Your CV is larger than 5 MB. Please upload a smaller PDF,")

    const applicant = {
      position: applyJob ?? "",
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("contact") ?? ""),
    }

    setStatus("submitting")
    setErrorMessage("")
    try {
      // 1) Save the CV to the Google Drive folder and log a row in the Google Sheet (like Google Forms).
      let cvUrl = ""
      if (CAREERS_UPLOAD_URL) {
        const res = await fetch(CAREERS_UPLOAD_URL, {
          method: "POST",
          // text/plain keeps this a "simple" request so Apps Script accepts it without a CORS preflight.
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            ...applicant,
            fileName: cv.name,
            mimeType: cv.type || "application/pdf",
            fileData: await fileToBase64(cv),
          }),
        })
        const saved = (await res.json()) as { success: boolean; cvUrl?: string; message?: string }
        if (!saved.success || !saved.cvUrl) return fail("We couldn't upload your CV. Please try again,")
        cvUrl = saved.cvUrl
      }

      // 2) Email the application (with the Drive link) to the admin via Web3Forms.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Job Application: ${applicant.position} — ${applicant.name}`,
          from_name: "Bencos Careers",
          // Lets the admin hit "Reply" to answer the applicant directly.
          replyto: applicant.email,
          // Keys below are shown as the field labels in the admin's Web3Forms email.
          "Position": applicant.position,
          "Name": applicant.name,
          "Email": applicant.email,
          "Phone Number": applicant.phone,
          "CV (Google Drive)": cvUrl || `Not uploaded (file: ${cv.name})`,
        }),
      })
      const data = await res.json()
      if (data.success) setStatus("success")
      else fail()
    } catch {
      fail()
    }
  }

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="A bright, modern research facility with scientists and engineers at work"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
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
              Careers
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
              Build the Future <br/>With
              
              Us.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-white"
            >
             Join a team driving innovation across life sciences, healthcare, and technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ======================= WHY BENCOS ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Why Bencos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Innovation Begins With People
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-6xl text-muted-foreground leading-relaxed"
          >
            At Bencos, we foster a collaborative environment where scientific excellence, creativity, and continuous learning empower<br/> individuals to solve meaningful challenges across research, healthcare, and technology.
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
            src={PEOPLE_IMAGE}
            alt="People collaborating in a bright, modern Bencos research building"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      
      {/* ======================= OPEN POSITIONS ======================= */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Open Positions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Find your place at Bencos.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground leading-relaxed"
          >
            Explore exciting opportunities across the Bencos ecosystem.
          </motion.p>

          <div className="mt-10 border-t border-border">
            {openings.map((job, index) => (
              <motion.div
                key={`${job.title}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="grid grid-cols-1 items-center gap-2 border-b border-border py-6 md:grid-cols-[2fr_1fr_1fr_1fr_auto] md:gap-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.department}</p>
                <p className="text-sm text-muted-foreground">{job.location}</p>
                <p className="text-sm text-muted-foreground">{job.type}</p>
                <button
                  type="button"
                  onClick={() => setApplyJob(job.title)}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-green-600 md:justify-self-end"
                >
                  Apply
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CLOSING STATEMENT + CTA ======================= */}
      <section className="bg-background pt-16 lg:pt-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:text-4xl"
          >
            Together We Build What&apos;s Next.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-muted-foreground leading-relaxed"
          >
            Every innovation begins with talented people. Join Bencos and help shape the
            future of life sciences, healthcare, artificial intelligence, and technology.
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
            src={JOURNEY_IMAGE}
            alt="A diverse Bencos team collaborating in a bright modern office"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Centered CTA */}
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-16 text-center lg:px-8 lg:pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-foreground md:text-3xl text-balance"
          >
            Start Your Journey With Bencos.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm text-muted-foreground md:text-base"
          >
            Discover opportunities where your ideas, expertise, and passion can create
            meaningful impact for people around the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <button
              type="button"
              onClick={() => setApplyJob("General Application")}
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* ======================= APPLY MODAL ======================= */}
      <AnimatePresence>
        {applyJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div
              onClick={closeModal}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-background p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="text-center text-2xl font-semibold text-foreground md:text-3xl">
                Apply for this job
              </h2>
              <p className="mt-1 text-center text-sm text-muted-foreground">{applyJob}</p>

              {status === "success" ? (
                <div className="mt-8 text-center">
                  <p className="text-lg font-medium text-foreground">
                    Thank you for applying!
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We&apos;ve received your application and will be in touch soon.
                  </p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      required
                      className="mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Upload CV <span className="text-muted-foreground">(PDF, max 5&nbsp;MB)</span>
                    </label>
                    <div className="mt-3 flex flex-col items-center gap-3">
                      <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border-2 border-accent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-green-600/10">
                        <Upload className="h-4 w-4" />
                        {fileName || "Upload CV (PDF)"}
                        <input
                          type="file"
                          name="cv"
                          required
                          accept="application/pdf,.pdf"
                          onChange={(e) => {
                            setFileName(e.target.files?.[0]?.name ?? "")
                            setErrorMessage("")
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-center text-sm text-red-500">
                      {errorMessage || "Something went wrong. Please try again,"} or email your CV directly to{" "}
                      {HR_EMAIL}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30 disabled:opacity-60"
                  >
                    {status === "submitting" ? "Submitting…" : "Submit Application"}
                  </button>

                  <p className="text-center text-sm text-muted-foreground">
                    You can send your CV directly via email to{" "}
                    <a
                      href={`mailto:${HR_EMAIL}`}
                      className="font-medium text-accent underline"
                    >
                      {HR_EMAIL}
                    </a>
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
