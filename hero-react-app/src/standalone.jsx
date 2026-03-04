import React from 'react';
import { createRoot } from 'react-dom/client';
import HeroScrollVideo from './components/HeroScrollVideo';

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
    window.initHeroScroll = function () {
        const rootElement = document.getElementById('react-hero-root');

        if (rootElement) {
            const root = createRoot(rootElement);
            root.render(
                <HeroScrollVideo
                    title="Scroll Animated Video"
                    subtitle="SUBTITLE"
                    meta="Q3 • 2025"
                    credits={
                        <>
                            <p>CRAFTED BY</p>
                            <p>SCOTT CLAYTON</p>
                        </>
                    }
                    mediaType="image"
                    overlay={{
                        caption: "PROJECT • 07",
                        heading: "Clarity in Motion",
                        paragraphs: [
                            "Scroll to expand the frame and reveal the story.",
                            "Built with GSAP ScrollTrigger and optional Lenis smooth scroll.",
                            "A production-ready React hero section."
                        ],
                        extra: (
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
                                <a href="course.html" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '14px 28px',
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    color: 'white',
                                    textDecoration: 'none',
                                    borderRadius: '12px',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)'
                                }}>
                                    🎓 Начать обучение
                                </a>
                                <a href="pages/simulator.html" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '14px 28px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    textDecoration: 'none',
                                    borderRadius: '12px',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    💬 Simulator
                                </a>
                            </div>
                        )
                    }}
                    initialBoxSize={360}
                    targetSize="fullscreen"
                    scrollHeightVh={280}
                    showHeroExitAnimation={true}
                    sticky={true}
                    overlayBlur={10}
                    overlayRevealDelay={0.35}
                    smoothScroll={true}
                />
            );
        }
    };

    // Auto-init on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.initHeroScroll);
    } else {
        window.initHeroScroll();
    }
}
