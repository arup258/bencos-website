import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Terms of Service | Bencos Research Solutions",
  description:
    "The terms governing your use of the Bencos Research Solutions website and services.",
}

const lastUpdated = "January 2026"

const sections = [
  {
    heading: "Acceptance of terms",
    body: [
      "These Terms of Service (“Terms”) govern your access to and use of the Bencos Research Solutions website and any related services. By accessing the site, you agree to be bound by these Terms.",
    ],
  },
  {
    heading: "Use of the website",
    body: [
      "You may use this website for lawful purposes only. You agree not to misuse the site, interfere with its operation, or attempt to access it using a method other than the interfaces we provide.",
    ],
  },
  {
    heading: "Services and agreements",
    body: [
      "Specific services — including consultancy, NGS services, and bioinformatics — are governed by separate written agreements. In the event of a conflict, the terms of that service agreement take precedence over these Terms for the relevant engagement.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All content on this website, including text, graphics, logos, and software, is the property of Bencos Research Solutions or its licensors and is protected by applicable intellectual property laws. You may not reproduce or distribute it without prior written permission.",
    ],
  },
  {
    heading: "Disclaimer of warranties",
    body: [
      "The website and its content are provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied, including fitness for a particular purpose.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Bencos Research Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "Questions about these Terms can be directed to hello@bencos.in.",
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHeader
        tagline="Legal"
        title="Terms of Service"
        description="The terms that govern your use of our website and services."
      />
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
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
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
