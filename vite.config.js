import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],

  // server: {
  //   host: true,
  // },
})


// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"