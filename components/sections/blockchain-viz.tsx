"use client"

import { useEffect, useRef } from "react"
import { useReveal } from "@/hooks/use-reveal"

export function BlockchainVisualization() {
  const { ref, isVisible } = useReveal(0.3)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const animate = () => {
      timeRef.current += 0.01
      const time = timeRef.current

      // Clear canvas
      ctx.fillStyle = "transparent"
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const centerX = canvas.offsetWidth / 2
      const centerY = canvas.offsetHeight / 2

      // Draw blockchain chain
      const chainLength = 6
      const spacing = 60

      for (let i = 0; i < chainLength; i++) {
        const x = centerX - (chainLength / 2) * spacing + i * spacing
        const y = centerY + Math.sin(time + i * 0.5) * 20

        // Draw connecting line
        if (i > 0) {
          const prevX = centerX - (chainLength / 2) * spacing + (i - 1) * spacing
          const prevY = centerY + Math.sin(time + (i - 1) * 0.5) * 20

          const gradient = ctx.createLinearGradient(prevX, prevY, x, y)
          gradient.addColorStop(0, "rgba(0, 255, 136, 0.5)")
          gradient.addColorStop(0.5, "rgba(30, 144, 255, 0.3)")
          gradient.addColorStop(1, "rgba(124, 58, 237, 0.5)")

          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(prevX, prevY)
          ctx.lineTo(x, y)
          ctx.stroke()
        }

        // Draw block
        const blockSize = 30 + Math.sin(time * 2 + i) * 5
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, blockSize)
        gradient.addColorStop(0, "rgba(0, 255, 136, 0.8)")
        gradient.addColorStop(1, "rgba(30, 144, 255, 0.4)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, blockSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw block border
        ctx.strokeStyle = "rgba(0, 255, 136, 0.6)"
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw transaction indicator
        const txOpacity = (Math.sin(time * 3 + i * 0.8) + 1) / 2
        ctx.fillStyle = `rgba(0, 255, 136, ${txOpacity * 0.6})`
        ctx.beginPath()
        ctx.arc(x, y, blockSize * 0.3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw transaction speed indicator
      const speedText = `${Math.floor(400 + Math.sin(time) * 100)} TPS`
      ctx.fillStyle = "rgba(0, 255, 136, 0.8)"
      ctx.font = "14px monospace"
      ctx.textAlign = "center"
      ctx.fillText(speedText, centerX, centerY + 100)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible])

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col items-center justify-center px-6 pt-20 md:px-12 md:pt-0"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div
          className={`mb-8 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Blockchain Speed
          </h2>
          <p className="font-mono text-sm text-accent md:text-base">/ Real-time Transaction Processing</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1">
            <canvas
              ref={canvasRef}
              className={`h-80 w-full rounded-lg border border-accent/20 bg-black/30 transition-all duration-700 md:h-96 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            />
          </div>

          <div className="flex-1 space-y-6">
            {[
              { label: "Speed", value: "400,000+ TPS", icon: "ri-rocket-line" },
              { label: "Finality", value: "<1 second", icon: "ri-checkbox-circle-line" },
              { label: "Cost", value: "<$0.00025", icon: "ri-coin-line" },
              { label: "Energy", value: "Efficient", icon: "ri-leaf-line" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 rounded-lg border border-accent/20 bg-accent/5 p-4 transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${400 + i * 100}ms`,
                }}
              >
                <i className={`${item.icon} mt-1 text-xl text-accent flex-shrink-0`} />
                <div>
                  <p className="font-mono text-xs text-accent/70">{item.label}</p>
                  <p className="font-sans font-bold text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
