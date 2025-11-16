"use client"

import { useReveal } from "@/hooks/use-reveal"

export function PartnersSection() {
  const { ref, isVisible } = useReveal(0.3)

  const partners = [
    { name: "Solana", logo: "/solana-logo.png", url: "https://solana.org" },
    { name: "Superteam", logo: "https://imgs.search.brave.com/W5EdZs4DLsSoy6d_lnwT7QmiAcThbHA6JSKDlhWQX0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L29SQXp1aDNrclRS/QkQ4UmZEWEx2VGlT/Q1kucG5n", url: "https://superteam.fun" },
    { name: "Turbine", logo: "https://www.turbin3.org/images/turbin3.svg", url: "https://turbine3.com" },
    { name: "Blueshift", logo: "/blueshift-logo.png", url: "https://blueshift.gg" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Our Ecosystem
          </h2>
          <p className="font-mono text-sm text-accent md:text-base">/ Powered by industry leaders</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center gap-4 rounded-lg border border-accent/20 bg-accent/5 p-12 transition-all duration-700 hover:border-accent/50 hover:bg-accent/10 hover:-translate-y-2 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="h-16 w-16 transition-transform group-hover:scale-110">
                <img 
                  src={partner.logo || "/placeholder.svg"} 
                  alt={partner.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground text-center">
                {partner.name}
              </h3>
            </a>
          ))}
        </div>

        <div
          className={`mt-16 rounded-lg border border-accent/30 bg-gradient-to-r from-accent/10 to-primary/10 p-8 text-center transition-all duration-700 md:p-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "400ms",
          }}
        >
          <h3 className="mb-3 font-sans text-2xl font-bold text-foreground md:text-3xl">
            Want to Partner With Us?
          </h3>
          <p className="mb-6 max-w-2xl text-foreground/80">
            We're always looking for ecosystem partners, sponsors, and collaborators who share our vision of building the future on Solana.
          </p>
          <a
            href="https://discord.gg/ZckgFCXge"
            className="inline-block rounded-lg bg-accent px-6 py-3 font-sans font-semibold text-background transition-transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
