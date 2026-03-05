'use client'

import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
}

export default function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        const initParticles = () => {
            particles = []
            const particleCount = Math.floor((canvas.width * canvas.height) / 12000)

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    size: Math.random() * 2.5 + 1,
                    opacity: Math.random() * 0.6 + 0.4,
                })
            }
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw gradient background
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width / 2
            )
            gradient.addColorStop(0, '#0a0a1a')
            gradient.addColorStop(0.5, '#000000')
            gradient.addColorStop(1, '#0a0a1a')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particles.forEach((particle) => {
                particle.x += particle.vx
                particle.y += particle.vy

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width
                if (particle.x > canvas.width) particle.x = 0
                if (particle.y < 0) particle.y = canvas.height
                if (particle.y > canvas.height) particle.y = 0

                // Draw particle with glow
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

                // Create glow effect
                const glowGradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 3
                )
                glowGradient.addColorStop(0, `rgba(139, 92, 246, ${particle.opacity * 0.8})`)
                glowGradient.addColorStop(0.5, `rgba(99, 102, 241, ${particle.opacity * 0.4})`)
                glowGradient.addColorStop(1, 'rgba(99, 102, 241, 0)')

                ctx.fillStyle = glowGradient
                ctx.fill()
            })

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 150) {
                        ctx.beginPath()
                        const opacity = 0.3 * (1 - distance / 150)
                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
                        ctx.lineWidth = 1
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                })
            })

            animationFrameId = requestAnimationFrame(drawParticles)
        }

        resizeCanvas()
        drawParticles()

        window.addEventListener('resize', resizeCanvas)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
        />
    )
}
