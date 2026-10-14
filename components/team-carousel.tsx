"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Photo carousel of people, shared by the Leadership and BREF pages.
// `role` is shown as a small badge above the name.
// `position` sets which part of the photo stays in frame (CSS object-position); default keeps the face near the top.
// `linkedin` is optional — the green "in" badge next to the name only shows when it is set.
// `image` is optional — without it the card shows the person's initials.
export type TeamStory = {
  name: string
  role: string
  expertise?: string
  image?: string
  linkedin?: string
  position?: string
}

const ROLE_BADGE: Record<string, string> = {
  Advisor: "bg-[#e9f5e1] text-[#3a8a1e]",
  Collaborator: "bg-sky-50 text-sky-700",
  Scientist: "bg-violet-50 text-violet-700",
  Trustee: "bg-amber-50 text-amber-700",
  "Ethics Board": "bg-sky-50 text-sky-700",
  "Scientific Board": "bg-violet-50 text-violet-700",
  "Clinical Board": "bg-rose-50 text-rose-700",
}
const DEFAULT_BADGE = "bg-[#e9f5e1] text-[#3a8a1e]"

/** "Dr. Sujata Basu, PhD" -> "SB" */
function initials(name: string) {
  return name
    .replace(/^(Dr|Prof)\.?\s+/i, "")
    .split(",")[0]
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

interface TeamCarouselProps {
  people: TeamStory[]
  title: string
  description: string
  label: string
}

export function TeamCarousel({ people, title, description, label }: TeamCarouselProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const count = people.length
  const go = (dir: number) => setActive((i) => (i + dir + count) % count)

  // Gentle auto-advance; pauses while hovered/focused or when the user prefers reduced motion.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => setActive((i) => (i + 1) % count), 4500)
    return () => clearInterval(id)
  }, [paused, count])

  const person = people[active]

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
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
      </div>

      {/* Track: the active card sits in the centre, neighbours fade out to the sides. */}
      <div
        className="relative mt-12 h-[300px] sm:h-[340px]"
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
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
        {people.map((m, i) => {
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
              {m.image ? (
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: m.position ?? "50% 15%" }}
                  loading="lazy"
                  draggable={false}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#e9f5e1]">
                  <span className="text-6xl font-light tracking-wide text-[#3a8a1e]">{initials(m.name)}</span>
                </div>
              )}
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
            className={`inline-block rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${ROLE_BADGE[person.role] ?? DEFAULT_BADGE}`}
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
          {person.expertise && (
            <p className="mx-auto mt-1 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              {person.expertise}
            </p>
          )}
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
        {people.map((m, i) => (
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
