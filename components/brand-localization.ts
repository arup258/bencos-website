/**
 * Brand-name localisation.
 *
 * Google Translate deliberately leaves proper nouns alone, so "Bencos",
 * "TWINE" and "MyNeuron" survive translation in Latin script. These tables put
 * them into the target script instead, applied as a DOM pass after Google has
 * finished with a page.
 *
 * Only the non-Latin locales need entries — German, French, Spanish and Finnish
 * already write these names exactly as English does, so they map to nothing.
 *
 * NOTE FOR REVIEW: the Japanese and Korean forms below are standard
 * transliterations, but a brand's official name in a market is a business
 * decision. If Bencos has registered names in Japan or Korea, replace the
 * right-hand values here and nothing else needs to change.
 */

/**
 * Ordered longest-match-first: "Bencos 360" must be consumed before the bare
 * "Bencos" rule can strand a Latin "360" behind it.
 */
type BrandPair = readonly [from: string, to: string]

const JA: BrandPair[] = [
  ["Bencos Research Solutions", "ベンコス・リサーチ・ソリューションズ"],
  ["Bencos Research", "ベンコス・リサーチ"],
  ["Bencos Healthcare", "ベンコス・ヘルスケア"],
  ["Bencos Health", "ベンコス・ヘルス"],
  ["Bencos360", "ベンコス360"],
  ["Bencos 360", "ベンコス360"],
  ["Bencos AI", "ベンコス・エーアイ"],
  ["BencosRS", "ベンコスRS"],
  ["Bencos", "ベンコス"],
  ["MyNeuron", "マイニューロン"],
  ["My Neuron", "マイニューロン"],
  ["Resilience AI", "レジリエンス・エーアイ"],
  ["TWINE", "トワイン"],
  ["Twine", "トワイン"],
  ["GATC LITE", "ガトック・ライト"],
  ["GATC", "ガトック"],
  ["BREF", "ブレフ"],
  ["BenEd", "ベンエド"],
  ["TANGENESIS", "タンジェネシス"],
  ["Tangenesis", "タンジェネシス"],
  ["Temenos", "テメノス"],
  ["Weeve", "ウィーヴ"],
]

const KO: BrandPair[] = [
  ["Bencos Research Solutions", "벤코스 리서치 솔루션즈"],
  ["Bencos Research", "벤코스 리서치"],
  ["Bencos Healthcare", "벤코스 헬스케어"],
  ["Bencos Health", "벤코스 헬스"],
  ["Bencos360", "벤코스360"],
  ["Bencos 360", "벤코스360"],
  ["Bencos AI", "벤코스 에이아이"],
  ["BencosRS", "벤코스RS"],
  ["Bencos", "벤코스"],
  ["MyNeuron", "마이뉴런"],
  ["My Neuron", "마이뉴런"],
  ["Resilience AI", "레질리언스 에이아이"],
  ["TWINE", "트와인"],
  ["Twine", "트와인"],
  ["GATC LITE", "가트크 라이트"],
  ["GATC", "가트크"],
  ["BREF", "브레프"],
  ["BenEd", "베네드"],
  ["TANGENESIS", "탄제네시스"],
  ["Tangenesis", "탄제네시스"],
  ["Temenos", "테메노스"],
  ["Weeve", "위브"],
]

export const brandTerms: Record<string, BrandPair[]> = {
  ja: JA,
  ko: KO,
  // Latin-script locales write the brand names exactly as English does.
  de: [],
  fr: [],
  es: [],
  fi: [],
  en: [],
}

/** Elements whose text is markup or user input, never display copy. */
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "CODE", "PRE"])

/** Attributes that surface as visible or announced text. */
const TEXT_ATTRIBUTES = ["alt", "title", "placeholder", "aria-label"] as const

function applyPairs(value: string, pairs: BrandPair[]): string {
  let out = value
  for (const [from, to] of pairs) {
    // split/join is a literal replace-all — no regex escaping to get wrong.
    if (out.includes(from)) out = out.split(from).join(to)
  }
  return out
}

/**
 * Rewrites every brand mention under `root` into the script of `code`.
 *
 * Converges on its own: once a pass has run, the Latin source strings are gone,
 * so a second pass finds nothing and mutates nothing.
 */
export function localizeBrands(code: string, root: HTMLElement = document.body): void {
  const pairs = brandTerms[code]
  if (!pairs || pairs.length === 0) return

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement
      if (!parent) return NodeFilter.FILTER_REJECT
      if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT
      // The language switcher lists each language in its own script; rewriting
      // brand names inside it would be meaningless and it is marked notranslate.
      if (parent.closest(".notranslate")) return NodeFilter.FILTER_REJECT
      if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    },
  })

  // Collect first, then write — mutating during the walk invalidates it.
  const textNodes: Text[] = []
  let node = walker.nextNode()
  while (node) {
    textNodes.push(node as Text)
    node = walker.nextNode()
  }

  for (const text of textNodes) {
    const next = applyPairs(text.nodeValue ?? "", pairs)
    if (next !== text.nodeValue) text.nodeValue = next
  }

  const selector = TEXT_ATTRIBUTES.map((a) => `[${a}]`).join(",")
  for (const el of Array.from(root.querySelectorAll<HTMLElement>(selector))) {
    if (el.closest(".notranslate")) continue
    for (const attr of TEXT_ATTRIBUTES) {
      const value = el.getAttribute(attr)
      if (!value) continue
      const next = applyPairs(value, pairs)
      if (next !== value) el.setAttribute(attr, next)
    }
  }
}

/** Brand names inside the tab title, which Google leaves alone as well. */
export function localizeDocumentTitle(code: string): void {
  const pairs = brandTerms[code]
  if (!pairs || pairs.length === 0) return
  const next = applyPairs(document.title, pairs)
  if (next !== document.title) document.title = next
}
