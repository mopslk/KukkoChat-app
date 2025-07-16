// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  ssr: false,
  typescript: {
    typeCheck: true,
  },
  telemetry: false,
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
    },
  },
  ignore: ['**/src-tauri/**'],
  srcDir: 'src/',
  dir: {
    pages: 'presentation/views',
  },
  build: {
    transpile: ['tsyringe', 'reflect-metadata']
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
