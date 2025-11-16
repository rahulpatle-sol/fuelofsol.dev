"use client"

import { MagneticButton } from "@/components/magnetic-button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-screen shrink-0 flex-col justify-center overflow-hidden px-6 pb-16 pt-24 md:px-12 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />

      <div className="relative z-10 max-w-4xl">
        <div className="mb-4 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 backdrop-blur-md duration-700">
          <p className="font-mono text-xs text-accent">Building on Solana</p>
        </div>

        <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-8 font-sans text-6xl font-bold leading-[1.1] tracking-tight text-foreground duration-1000 md:text-7xl lg:text-8xl flex item-center">
          <span className="text-balance">
            Fuel of
          
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Sol</span>
          </span>
        </h1>

        <p className="mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 text-lg leading-relaxed text-foreground/90 duration-1000 delay-200 md:text-xl">
          <span className="text-pretty">
            A vibrant community where developers build lean, ship fast, and create the future on Solana. Join us to collaborate, learn, and transform ideas into reality.
          </span>
        </p>

        <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-4 duration-1000 delay-300 sm:flex-row sm:items-center">
          <MagneticButton size="lg" variant="primary">
            <a href="https://discord.gg/ZckgFCXge" className="flex items-center gap-2">
              <i className="ri-discord-fill"></i>
              Join Discord
            </a>
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary">
            <a href="https://github.com/fuel-of-sol" className="flex items-center gap-2">
              <i className="ri-github-fill"></i>
              GitHub
            </a>
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-in fade-in duration-1000 delay-500">
        <div className="flex items-center gap-2">
          <p className="font-mono text-xs text-foreground/80">Scroll to explore</p>
          <div className="flex h-6 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/15 backdrop-blur-md">
            <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
