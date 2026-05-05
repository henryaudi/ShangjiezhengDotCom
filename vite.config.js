import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: './',
  server: {
    fs: {
      // Allow serving files from up to four levels above this config — needed
      // when running inside a git worktree where node_modules lives in the
      // parent repository rather than the worktree itself.
      allow: [path.resolve(__dirname, '../../../..')],
    },
  },
});
