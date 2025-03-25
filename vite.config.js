import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: '/',
    publicDir: 'public',
    define: {
      'process.env': env
    },
    // Add this to replace env variables in index.html
    html: {
      transform(html) {
        return html.replace(/%VITE_GOOGLE_TAG_ID%/g, env.VITE_GOOGLE_TAG_ID)
      }
    }
  }
})