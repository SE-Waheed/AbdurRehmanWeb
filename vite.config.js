import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
// import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             return id.split('node_modules/')[1].split('/')[0].toString(); // Creates a chunk for each node module
//           }
//         }
//       }
//     }
//   }
// };
build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return id.split('node_modules/')[1].split('/')[0].toString(); // Creates a chunk for each node module
        }
      }
    }
  }
}
})
