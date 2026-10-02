import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Bencos Research Solutions",
  description:
    "How Bencos Research Solutions uses cookies and similar technologies on our website.",
}

// Hero background image — swap the src to change it.
const HERO_IMAGE = "/images/image 502.webp"

const lastUpdated = "July 2026"

type Block =
  | { type: "p"; text: string }
  | { type: "defs"; items: { term: string; text: string }[] }

interface Section {
  heading: string
  blocks: Block[]
}

const sections: Section[] = [
  {
    heading: "Introduction",
    blocks: [
      {
        type: "p",
        text: "Welcome to Bencoslife. This Cookie Policy explains how we use cookies and similar technologies on our website. By using our website, you agree to the use of cookies as described in this policy.",
      },
    ],
  },
  {
    heading: "What are Cookies?",
    blocks: [
      {
        type: "p",
        text: "Cookies are small text files that are stored on your computer or device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience. Cookies can be persistent (they remain on your computer after you close your browser) or session-based (they are deleted when you close your browser).",
      },
    ],
  },
  {
    heading: "How We Use Cookies",
    blocks: [
      { type: "p", text: "Bencoslife uses cookies for the following purposes:" },
      {
        type: "defs",
        items: [
          { term: "Essential Cookies", text: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility." },
          { term: "Analytical Cookies", text: "We use analytical cookies to analyze how visitors use our website, track website performance, and gather anonymous statistical data. This helps us improve the website's structure and content." },
          { term: "Functionality Cookies", text: "These cookies enhance your experience by remembering your preferences and choices (e.g., language preferences)." },
          { term: "Third-Party Cookies", text: "Some content on our website may be provided by third parties. These third parties may set their own cookies on your device. We do not have control over these cookies." },
        ],
      },
    ],
  },
  {
    heading: "Your Consent",
    blocks: [
      {
        type: "p",
        text: "By using our website, you consent to the use of cookies as outlined in this Cookie Policy. If you do not agree to the use of cookies, you can adjust your browser settings to reject cookies or notify you when a cookie is set. Please note that blocking or disabling certain cookies may affect the functionality of our website.",
      },
    ],
  },
  {
    heading: "Managing Cookies",
    blocks: [
      {
        type: "p",
        text: "You can manage your cookie preferences by adjusting your browser settings. Most browsers allow you to refuse or accept cookies, delete specific cookies, or disable cookies altogether. Refer to your browser's help documentation for more information on how to manage cookies.",
      },
    ],
  },
  {
    heading: "Changes to this Cookie Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Any changes will be posted on this page, so please check back regularly for updates.",
      },
    ],
  },
  {
    heading: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have any questions about our Cookie Policy, please Contact Us.",
      },
    ],
  },
]

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p className="text-muted-foreground leading-relaxed">{block.text}</p>
  }
  return (
    <ul className="space-y-3 text-muted-foreground leading-relaxed">
      {block.items.map((item, i) => (
        <li key={i} className="border-l-2 border-green-600/60 pl-4">
          <span className="font-semibold text-foreground">{item.term}:</span> {item.text}
        </li>
      ))}
    </ul>
  )
}

export default function CookiePolicyPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[45vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[45vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
              Legal
            </p>
            <div className="mt-4 h-px w-full origin-left bg-white/40" />
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-elegant thin tracking-wide text-white">
              Cookie Policy
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
              How we use cookies and similar technologies to improve your experience on our website.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ CONTENT ============================ */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
          <div className="mt-12 space-y-12">
            {sections.map((section, i) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  {i + 1}. {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, j) => (
                    <BlockView key={j} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
