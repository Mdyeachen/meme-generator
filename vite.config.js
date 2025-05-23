import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/meme-generator",
  server: {
    port : 8080,
    open : true
  },
  build:{
    sourcemap : true,
    outDir : "build"
  }
})
