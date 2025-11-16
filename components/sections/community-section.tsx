"use client"

import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function CommunitySectionNew({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  const members = [
    { role: "Builders", count: "500+", description: "Active developers" },
    { role: "Projects", count: "50+", description: "Shipped products" },
    { role: "Events", count: "24+", description: "Hackathons & meetups" },
    { role: "Partners", count: "10+", description: "Ecosystem allies" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Community
          </h2>
          <p className="font-mono text-sm text-accent md:text-base">/ Fueling Innovation Together</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {members.map((member, i) => (
            <div
              key={i}
              className={`rounded-lg border border-accent/20 bg-accent/5 p-6 backdrop-blur-sm transition-all duration-700 hover:border-accent/40 hover:bg-accent/10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <p className="mb-2 font-mono text-xs text-accent/70">{member.role}</p>
              <div className="mb-3 text-4xl font-bold text-accent">{member.count}</div>
              <p className="text-sm text-foreground/70">{member.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 transition-all duration-700 md:mt-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <h3 className="mb-6 font-sans text-2xl font-bold text-foreground md:text-3xl">What We Do</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Learn Together", desc: "Workshops, tutorials & knowledge sharing" },
              { title: "Build Products", desc: "From prototype to production on Solana" },
              { title: "Ship Fast", desc: "Launch with minimal bloat, maximum impact" },
              { title: "Collaborate", desc: "Partner on projects and grow together" },
              { title: "Market Reach", desc: "Connect with investors and users" },
              { title: "Support System", desc: "Mentorship from experienced builders" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-2 transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${500 + i * 80}ms`,
                }}
              >
                <h4 className="font-sans font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
