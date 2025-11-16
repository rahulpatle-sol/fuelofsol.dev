"use client"

import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

export function SolanaFeaturesSection() {
  const { ref, isVisible } = useReveal(0.3)

  const features = [
    {
      stat: "400,000+",
      label: "Transactions Per Second",
      description: "Lightning-fast blockchain performance",
      highlight: true,
    },
    {
      stat: "$0.00025",
      label: "Average Gas Fee",
      description: "One of the lowest transaction costs",
      highlight: false,
    },
    {
      stat: "#1",
      label: "Developer Favorite",
      description: "Most loved blockchain by builders worldwide",
      highlight: true,
    },
    {
      stat: "🇮🇳",
      label: "India Dev Hub",
      description: "Leading community of developers from India",
      highlight: false,
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Why Solana?
          </h2>
          <p className="font-mono text-sm text-accent md:text-base">/ Fast, Secure, Scalable Blockchain</p>
        </div>

        {/* 3D Blockchain Visualization */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="relative h-64 w-full max-w-2xl">
            <Image
              src="/blockchain-cubes.png"
              alt="Blockchain 3D Cubes"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative flex flex-col justify-center rounded-lg border transition-all duration-700 p-6 hover:-translate-y-2 ${
                feature.highlight
                  ? "border-accent/50 bg-gradient-to-br from-accent/20 to-primary/10 hover:border-accent"
                  : "border-accent/20 bg-accent/5 hover:border-accent/50 hover:bg-accent/10"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="mb-3 font-sans text-4xl font-bold text-accent md:text-5xl">
                {feature.stat}
              </div>
              <h3 className="mb-2 font-sans font-bold text-foreground">
                {feature.label}
              </h3>
              <p className="text-sm text-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 rounded-lg border border-accent/30 bg-gradient-to-r from-accent/10 to-primary/10 p-8 text-center transition-all duration-700 md:p-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "500ms",
          }}
        >
          <h3 className="mb-3 font-sans text-2xl font-bold text-foreground md:text-3xl">
            Ready to Build on Solana?
          </h3>
          <p className="mb-6 max-w-2xl text-foreground/80">
            Join thousands of developers worldwide and be part of the fastest-growing blockchain ecosystem. Start building your next dApp today.
          </p>
          <a
            href="https://discord.gg/ZckgFCXge"
            className="inline-block rounded-lg bg-accent px-6 py-3 font-sans font-semibold text-background transition-transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
