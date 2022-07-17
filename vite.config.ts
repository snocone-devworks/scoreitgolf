import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
const path = require('path');

export default defineConfig({
  plugins: [
    process.env.NODE !== 'production' ? react({ jsxRuntime: 'classic' }) : react(),
    svgrPlugin(),
    dts({ include: 'lib/**', exclude: ['src/**', 'tests/**', 'node_modules/**'] }),
  ],
});