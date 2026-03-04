import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: '../hero-scroll-section',
        lib: {
            entry: 'src/standalone.jsx',
            name: 'HeroScrollVideo',
            formats: ['iife'],
            fileName: () => 'hero-scroll.js'
        },
        rollupOptions: {
            external: [],
            output: {
                assetFileNames: 'hero-scroll.[ext]'
            }
        }
    }
})
