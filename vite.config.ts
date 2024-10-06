import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'offline.html',
      },
      srcDir: 'src',
      strategies: 'injectManifest',
      includeManifestIcons: false,
      includeAssets: [
        'world/*',
        'pwa/**/*',
        'farms/*',
        'offline/*',
        'offline.html',
      ],
      injectManifest: {
        maximumFileSizeToCacheInBytes: 15000000,
        globPatterns: ['assets/*.{jpg,mp3,svg,gif,png}'],
        globIgnores: ['**/*.{js,css,html}'],
      },
      filename: 'sw.ts',
      manifest: {
        name: 'Kepler Space',
        id: 'com.kepler.space',
        description:
          'Enjoy full-screen action, easy access, and exclusive features!',
        short_name: 'Kepler Space',
        start_url: '/',
        theme_color: '#6b337c',
        display: 'standalone',
        background_color: '#0d0222',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa/icons/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: 'pwa/screenshots/1.jpg',
            sizes: '900x1680',
            type: 'image/jpg',
            form_factor: 'narrow',
          },
          {
            src: 'pwa/screenshots/2.jpg',
            sizes: '900x1680',
            type: 'image/jpg',
            form_factor: 'narrow',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
