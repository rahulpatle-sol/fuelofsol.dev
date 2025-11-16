"use client"

import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

export function LearnSection() {
  const { ref, isVisible } = useReveal(0.3)

  const resources = [
    {
      title: "Anchor",
      description: "Rust framework for Solana program development",
      icon: "/anchor-logo.png",
      link: "https://www.anchor-lang.com/",
      isImage: true,
    },
    {
      title: "TypeScript",
      description: "Build type-safe Solana applications",
      icon: "/typescript-logo.png",
      link: "https://www.typescriptlang.org/",
      isImage: true,
    },
    {
      title: "Next.js",
      description: "Full-stack framework for Solana dApps",
      icon: "https://imgs.search.brave.com/wjm9zuyc6N8civDdhgzB8q890y1Aqi94IWg2a2h9u90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9uZXh0anMt/aWNvbi5wbmc",
      link: "https://nextjs.org/",
      isImage: true,
    },
    {
      title: "Rust",
      description: "Build Programs on solana with rust",
      icon: "https://imgs.search.brave.com/OrLGhleMF2hZGU6mWL1U5M0EaAjSTWJPvxqiH0SqS0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ldXJv/cnVzdC5ldS9pbWFn/ZXMvcnVzdC1sb2dv/LnBuZw",
      link: "https://rust-lang.org/",
      isImage: true,
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-12 mt-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Learn & Build
          </h2>
          <p className="font-mono text-sm text-accent md:text-base">/ Master Solana development with these tools</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, i) => (
            <a
              key={i}
              href={resource.link}
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
              {resource.isImage ? (
                <div className="relative h-16 w-16 transition-transform group-hover:scale-110">
                  <Image
                    src={resource.icon || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <i className={`${resource.icon} text-4xl text-accent transition-transform group-hover:scale-110`} />
              )}
              <h3 className="font-sans text-xl font-bold text-foreground text-center">
                {resource.title}
              </h3>
              <p className="text-center text-sm text-foreground/70">
                {resource.description}
              </p>
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
            Want to Learn Together?
          </h3>
          <p className="mb-6 max-w-2xl text-foreground/80">
            Join our Discord community to access exclusive workshops, mentorship programs, and collaborative learning sessions with experienced Solana developers.
          </p>
          <a
            href="https://discord.gg/ZckgFCXge"
            className="inline-block rounded-lg bg-accent px-6 py-3 font-sans font-semibold text-background transition-transform hover:scale-105"
          >
            Join Community
          </a>
        </div>
      </div>
    </section>
  )
}
