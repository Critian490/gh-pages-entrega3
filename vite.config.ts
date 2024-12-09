import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base:"/gh-pages-entrega3/",
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
  },
})
