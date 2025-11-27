"use client"

import { useEffect, useRef, useState, useMemo, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

interface ParticleSystemProps {
  particleCount?: number
  interactive?: boolean
  className?: string
}

export function ParticleSystem({ particleCount = 50, interactive = true, className = "" }: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Particle colors based on TECHTUNE brand
  const colors = useMemo(() => [
    "rgba(20, 184, 166, 0.9)", // Teal vivid
    "rgba(59, 130, 246, 0.9)", // Blue vivid
    "rgba(245, 158, 11, 0.7)", // Golden yellow vivid
    "rgba(20, 184, 166, 0.6)", // Light teal
    "rgba(59, 130, 246, 0.6)", // Light blue
    "rgba(255, 255, 255, 0.7)", // White accent
  ], [])

  const createParticle = useCallback((x?: number, y?: number): Particle => {
    const canvas = canvasRef.current
    if (!canvas) return {} as Particle

    return {
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 7 + 2,
      opacity: Math.random() * 0.9 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 300 + 200,
    }
  }, [colors, canvasRef])

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    particlesRef.current = Array.from({ length: particleCount }, () => createParticle())
  }, [particleCount, canvasRef, createParticle])

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Interactive mouse attraction
      if (interactive) {
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.vx += (dx / distance) * force * 0.01
          particle.vy += (dy / distance) * force * 0.01
        }
      }

      // Boundary collision with smooth bounce
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -0.8
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -0.8
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      }

      // Apply friction
      particle.vx *= 0.99
      particle.vy *= 0.99

      // Update life and opacity
      particle.life++
      if (particle.life > particle.maxLife) {
        particlesRef.current[index] = createParticle()
      } else {
        const lifeRatio = particle.life / particle.maxLife
        particle.opacity = Math.sin(lifeRatio * Math.PI) * 0.8 + 0.2
      }
    })
  }, [interactive, createParticle])

  const drawParticles = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw connections between nearby particles
    particlesRef.current.forEach((particle, i) => {
      particlesRef.current.slice(i + 1).forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(20, 184, 166, ${0.2 * (1 - distance / 100)})`
          ctx.lineWidth = 1
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
        }
      })
    })

    // Draw particles
      particlesRef.current.forEach((particle) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 24;
        ctx.fill();
        ctx.restore();
    })
  }

  const animate = useCallback(() => {
    updateParticles()
    drawParticles()
    animationRef.current = requestAnimationFrame(animate)
  }, [updateParticles])

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    initParticles()
    animate()

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [dimensions, particleCount, interactive, animate, initParticles])

  return <canvas ref={canvasRef} className={`particle-container ${className}`} />
}
