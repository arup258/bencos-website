import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | Bencos Research Solutions",
  description:
    "The terms governing your use of the Bencos Research Solutions website and services.",
}

// Hero background image — swap the src to change it.
const HERO_IMAGE = "/images/image 502.webp"

const lastUpdated = "July 2026"

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Introduction and Acceptance of Terms of Use",
    body: [
      'Bencos Research Solutions Private Limited offers you a wide range of content, communication tools, forums, and information about its products and services ("Materials") via this website. By using this website, you are agreeing to accept and comply with the terms and conditions of use as stated below ("Terms of Use"), which Bencos Research Solutions, may update at any time without notice. You should visit this page periodically to review the current Terms of Use. Please note that Bencos Research Solutions may, at its sole discretion, terminate your access to this website at any time without notice.',
    ],
  },
  {
    heading: "Limited Right to Use",
    body: [
      "This website is owned and operated by Bencos Research Solutions Private Limited. Unless otherwise specified, all materials on this website are the property of Bencos Research Solutions, and are protected by the copyright laws of the United States and, throughout the world by the applicable copyright laws. You may, view, print and/or download one copy of the materials from this website on any single computer solely for your personal, informational, non-commercial use, provided you keep intact all copyright and other proprietary notices. No materials published by Bencos Research Solutions, on this website, in whole or in part, may be copied, reproduced, modified, republished, uploaded, posted, transmitted, or distributed in any form or by any means without prior written permission from Bencos Research Solutions. The use of any such materials on any other website or networked computer environment or for any other purpose is strictly prohibited and such unauthorized use may violate copyright, trademark and other similar laws.",
    ],
  },
  {
    heading: "Communications",
    body: [
      "Except for any disclosure for technical support purposes, or as specified in our Privacy Policy, all communications from you to this website will be considered non-confidential and non-proprietary. You agree that any and all comments, information, feedback and ideas regarding our company, products or services that you communicate to Bencos Research Solutions, will be deemed, at the time of communication to Bencos Research Solutions, the property of Bencos Research Solutions and Bencos Research Solutions, shall be entitled to full rights of ownership, including without limitation, unrestricted right to use or disclose such feedback in any form, medium or technology now known or later developed, and for any purpose, commercial or otherwise, without compensation to you. You are solely responsible for the content of your communications and their legality under all laws and regulations. You agree not to use this website to distribute, link to or solicit content that is defamatory, harassing, unlawful, libellous, harmful to minors, threatening, obscene, false, misleading, or infringing a third party intellectual or privacy rights.",
    ],
  },
  {
    heading: "Monitoring",
    body: [
      "Although Bencos Research Solutions Private Limited is not obligated to do so, it will have the right to review your communications on this website to determine whether you comply with our Terms of Use. Bencos Research Solutions will not have any liability or responsibility for the content of any communications you post to this website, or for any errors or violations of any laws or regulations by you. Bencos Research Solutions will comply with any court order in disclosing the identity of any person posting communications on this website. It is advisable that you review our Privacy Policy before posting any such communications. Please note that when you conduct transactions with other companies providing content via this website, you will also be subject to their privacy policies.",
    ],
  },
  {
    heading: "Links to Other Sites",
    body: [
      "The linked sites are not under the control of Bencos Research Solutions, and Bencos Research Solutions, is not responsible for the content of any linked site or any link contained in a linked site. Bencos Research Solutions, reserves the right to terminate any link at any time. Bencos Research Solutions, may provide links from this website to other sites as a convenience to you and in no way should this be interpreted as an endorsement of any company, content or products to which it links. If you decide to access any of the third-party sites linked to this website, you do this entirely at your own risk. BENCOS RESEARCH SOLUTIONS PRIVATE LIMITED DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, TO ANY SUCH LINKED SITES, INCLUDING BUT NOT LIMITED TO ANY TERMS AS TO THE ACCURACY, OWNERSHIP, VALIDITY OR LEGALITY OF ANY CONTENT OF A LINKED SITE.",
    ],
  },
  {
    heading: "Trademarks",
    body: [
      'The trademarks, service marks and logos of Bencos Research Solutions Private Limited and others used in this website ("Trademarks") are the property of Bencos Research Solutions, and their respective owners. You have no right to use any such Trademarks, and nothing contained in this website or the Terms of Use grants any right to use (by implication, waiver or otherwise) any Trademarks without the prior written permission of Bencos Research Solutions, or the respective owner. Bencos and Bencos logo and Bencos Relics are registered trademarks of Bencos Research Solutions Private Limited. Other products, brands and trademarks are property of their respective owners/companies.',
    ],
  },
  {
    heading: "Indemnity",
    body: [
      "You agree to indemnify, defend and hold Bencos Research Solutions Private Limited harmless from and against any and all third-party claims, liabilities, damages, losses or expenses (including reasonable attorney's fees and costs) arising out of, based on or in connection with your access and/or use of this website.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "IN NO EVENT SHALL BENCOS RESEARCH SOLUTIONS PRIVATE LIMITED OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, WITHOUT LIMITATION, LOSS PROFITS OR REVENUES, COSTS OF REPLACEMENT GOODS, LOSS OR DAMAGE TO DATA ARISING OUT OF THE USE OR INABILITY TO USE THIS WEBSITE OR ANY LINKED SITE, DAMAGES RESULTING FROM USE OF OR RELIANCE ON THE INFORMATION OR MATERIALS PRESENTED ON THIS WEBSITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT OR ANY OTHER LEGAL THEORY EVEN IF BENCOS RESEARCH SOLUTIONS PRIVATE LIMITED OR ITS SUPPLIERS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
    ],
  },
  {
    heading: "Disclaimer",
    body: [
      'Bencos Research Solutions Private Limited assumes no responsibility for accuracy, correctness, timeliness, or content of the materials provided on this website. You should not assume that the materials on this website are continuously updated or otherwise contain current information. Bencos Research Solutions is not responsible for supplying content or materials from the website that have expired or have been removed. THE MATERIALS PROVIDED AT THIS WEBSITE ARE PROVIDED "AS IS" AND ANY WARRANTY (EXPRESS OR IMPLIED), CONDITION OR OTHER TERM OF ANY KIND, INCLUDING WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTIBILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OR TITLE IS HEREBY EXCLUDED.',
    ],
  },
  {
    heading: "General",
    body: [
      "If you have any questions regarding the Terms of Use, please go to Contact Us.",
    ],
  },
]

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
              The terms and conditions governing your use of the Bencos Research Solutions website.
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
