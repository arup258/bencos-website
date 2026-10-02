"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { Check, ChevronDown, Globe } from "lucide-react"
import { localizeBrands, localizeDocumentTitle } from "@/components/brand-localization"

/**
 * Languages offered in the header switcher. `code` is the Google Translate
 * target code; "en" means "no translation" and clears the cookie instead.
 */
export const languages = [
  { code: "en", label: "Global (En)", native: "English", short: "Global (En)" },
  { code: "ko", label: "Korean", native: "한국어", short: "한국어" },
  { code: "fi", label: "Finnish", native: "Suomi", short: "Suomi" },
  { code: "de", label: "German", native: "Deutsch", short: "Deutsch" },
  { code: "fr", label: "French", native: "Français", short: "Français" },
  { code: "es", label: "Spanish", native: "Español", short: "Español" },
  { code: "ja", label: "Japanese", native: "日本語", short: "日本語" },
] as const

export type LanguageCode = (typeof languages)[number]["code"]

const TRANSLATE_COOKIE = "googtrans"
const INCLUDED = languages
  .filter((l) => l.code !== "en")
  .map((l) => l.code)
  .join(",")

declare global {
  interface Window {
    google?: any
    googleTranslateElementInit?: () => void
  }
}

/** Reads the active language out of the `googtrans` cookie (`/en/ko` form). */
function readCookieLanguage(): LanguageCode {
  if (typeof document === "undefined") return "en"
  const raw = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${TRANSLATE_COOKIE}=`))
    ?.split("=")[1]
  if (!raw) return "en"
  const target = decodeURIComponent(raw).split("/")[2]
  return (languages.find((l) => l.code === target)?.code ?? "en") as LanguageCode
}

/**
 * Writes the cookie on every host variant Google may read it from, so the
 * choice survives a hard reload as well as client-side navigation.
 */
function writeCookieLanguage(code: LanguageCode) {
  const value = code === "en" ? "" : `/en/${code}`
  const host = window.location.hostname
  // Bare host, dot-host and the registrable domain each need their own write —
  // Google reads whichever it finds first, and a stale one would win otherwise.
  const domains = ["", host, `.${host}`]
  const parts = host.split(".")
  if (parts.length > 2) domains.push(`.${parts.slice(-2).join(".")}`)

  for (const domain of domains) {
    const scope = domain ? `; domain=${domain}` : ""
    if (value) {
      document.cookie = `${TRANSLATE_COOKIE}=${value}; path=/${scope}`
    } else {
      document.cookie = `${TRANSLATE_COOKIE}=; path=/${scope}; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }
  }
}

let scriptRequested = false
let domPatched = false

/**
 * Google Translate swaps text nodes React still believes it owns, which makes
 * React throw on the next unmount ("Failed to execute 'removeChild'"). Making
 * both mutations no-ops when the node has already moved keeps the page alive.
 * Only applied while a translation is active, so untranslated visitors run on
 * stock DOM methods.
 */
function patchDomForTranslation() {
  if (domPatched || typeof Node !== "function" || !Node.prototype) return
  domPatched = true

  const originalRemoveChild = Node.prototype.removeChild
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child
    return originalRemoveChild.call(this, child) as T
  }

  const originalInsertBefore = Node.prototype.insertBefore
  Node.prototype.insertBefore = function <T extends Node>(
    this: Node,
    newNode: T,
    referenceNode: Node | null,
  ): T {
    if (referenceNode && referenceNode.parentNode !== this) return newNode
    return originalInsertBefore.call(this, newNode, referenceNode) as T
  }
}

/**
 * Header language switcher. A custom dropdown drives the (hidden) Google
 * Translate element, so the whole site translates without the stock widget UI.
 */
export function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<LanguageCode>("en")
  const rootRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  /** Pathname this page load started on, so we can spot a client-side nav. */
  const initialPathname = useRef(pathname)

  // Load the translate engine once per page load and mirror the saved choice.
  useEffect(() => {
    const saved = readCookieLanguage()
    setCurrent(saved)
    if (saved !== "en") {
      patchDomForTranslation()
      document.documentElement.lang = saved
    }
    if (scriptRequested) return
    scriptRequested = true

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: INCLUDED,
          autoDisplay: false,
        },
        "google_translate_element",
      )
    }

    const script = document.createElement("script")
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    document.body.appendChild(script)
  }, [])

  // Next.js swaps pages in client-side, and the newly mounted page renders in
  // English. While a translation is active, turn internal link clicks into full
  // document loads so the next page arrives already translated by the cookie —
  // no English frame is ever painted.
  useEffect(() => {
    if (current === "en") return

    const onClick = (e: MouseEvent) => {
      // Leave modified clicks alone: they open tabs/windows, not this document.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return
      }
      const anchor = (e.target as HTMLElement | null)?.closest?.("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || href.startsWith("#") || anchor.target === "_blank") return
      if (anchor.hasAttribute("download")) return

      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname) return

      e.preventDefault()
      window.location.assign(url.href)
    }

    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [current])

  // Safety net for navigations the click handler cannot see — router.push from
  // the search panel, and browser back/forward. If we ended up on a different
  // page without a document load, reload it so it comes back translated.
  useEffect(() => {
    if (current === "en") return
    if (pathname === initialPathname.current) return
    window.location.reload()
  }, [pathname, current])

  // Close on outside click / Escape, matching the nav dropdown behaviour.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const selectLanguage = (code: LanguageCode) => {
    setOpen(false)
    if (code === current) return
    writeCookieLanguage(code)

    // Returning to English only fully unwinds on a reload — the widget leaves
    // already-translated nodes in place otherwise.
    if (code === "en") {
      window.location.reload()
      return
    }

    patchDomForTranslation()
    document.documentElement.lang = code

    // Driving the widget's own select translates the whole current document in
    // place, so the visible page changes language without a reload.
    const combo = document.querySelector<HTMLSelectElement>("select.goog-te-combo")
    if (combo) {
      setCurrent(code)
      combo.value = code
      combo.dispatchEvent(new Event("change"))
      return
    }
    // Widget not ready yet (slow network): the cookie is set, so a reload
    // brings the page back already translated.
    window.location.reload()
  }

  const active = languages.find((l) => l.code === current) ?? languages[0]

  if (variant === "mobile") {
    return (
      <div className="notranslate" translate="no">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-green-600">
          <Globe className="h-3.5 w-3.5" />
          Language
        </p>
        <ul className="grid grid-cols-2 gap-1">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => selectLanguage(lang.code)}
                className={`flex w-full items-center justify-between rounded-sm px-2 py-2 text-left text-sm transition-colors ${
                  lang.code === current
                    ? "bg-white/10 text-green-600"
                    : "text-primary-foreground/80 hover:text-green-600"
                }`}
              >
                <span>{lang.short}</span>
                {lang.code === current && <Check className="h-3.5 w-3.5 shrink-0" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div ref={rootRef} className="notranslate relative" translate="no">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Select language"
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
          open
            ? "bg-white/10 text-green-600"
            : "text-primary-foreground/80 hover:bg-white/5 hover:text-green-600"
        }`}
      >
        <Globe className="h-4 w-4" />
        {active.short}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-sm border border-white/10 bg-neutral-800 py-1 shadow-2xl">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => selectLanguage(lang.code)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                  lang.code === current
                    ? "bg-white/5 text-green-600"
                    : "text-primary-foreground/80 hover:bg-white/5 hover:text-green-600"
                }`}
              >
                <span className="flex flex-col">
                  <span>{lang.native}</span>
                  {lang.code !== "en" && (
                    <span className="text-[11px] text-primary-foreground/40">{lang.label}</span>
                  )}
                </span>
                {lang.code === current && <Check className="h-4 w-4 shrink-0" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/**
 * Mount point the Google widget renders into, and the single owner of the
 * brand-name pass. Rendered once per page, unlike LanguageSwitcher, which the
 * header mounts twice (desktop and mobile) — so the observer below cannot end
 * up duplicated.
 */
export function GoogleTranslateHost() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined

    const observeOptions: MutationObserverInit = {
      childList: true,
      subtree: true,
      characterData: true,
    }

    // Google rewrites text asynchronously and in several passes, and menus and
    // search results mount later still. Re-run on a trailing debounce so every
    // batch of new text gets the brand treatment.
    const observer = new MutationObserver(() => schedule())

    const run = () => {
      const code = readCookieLanguage()
      if (code === "en") return
      // Our own rewrites would otherwise retrigger the observer.
      observer.disconnect()
      localizeBrands(code)
      localizeDocumentTitle(code)
      observer.observe(document.body, observeOptions)
    }

    const schedule = () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(run, 250)
    }

    observer.observe(document.body, observeOptions)
    schedule()

    return () => {
      if (timer) clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return <div id="google_translate_element" aria-hidden className="sr-only" />
}
