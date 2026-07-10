import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Privacy Policy | Bencos Research Solutions",
  description:
    "How Bencos Research Solutions collects, uses, and protects your personal and research data.",
}

const lastUpdated = "January 2026"

const sections = [
  {
    heading: "Introduction",
    body: [
      "Bencos Research Solutions (“Bencos”, “we”, “us”) is committed to protecting the privacy of the universities, innovators, and individuals we work with. This Privacy Policy explains what information we collect, how we use it, and the choices you have.",
      "By using our website or services, you agree to the practices described in this policy.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect information you provide directly, such as your name, email address, organization, and the contents of any inquiry you submit through our contact forms.",
      "We also collect limited technical information automatically, including browser type, device information, and aggregated usage analytics, to improve our website experience.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use your information to respond to inquiries, deliver and improve our services, communicate updates relevant to your project, and meet our legal and contractual obligations.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "Research and sample data",
    body: [
      "Biological samples, sequencing data, and derived results that you entrust to us are treated as confidential and handled under the terms of the applicable service agreement. Access is restricted to personnel directly involved in your project.",
    ],
  },
  {
    heading: "Data retention and security",
    body: [
      "We retain personal and project data only for as long as necessary to fulfil the purposes described in this policy or as required by law. We apply appropriate technical and organizational measures to protect data against unauthorized access, loss, or disclosure.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information, or to object to certain processing. To exercise these rights, contact us at hello@bencos.in.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "If you have questions about this Privacy Policy or our data practices, please email hello@bencos.in.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        tagline="Legal"
        title="Privacy Policy"
        description="How we collect, use, and safeguard your personal and research data."
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
