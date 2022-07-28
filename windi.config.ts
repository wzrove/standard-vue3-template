import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  safelist: [...Array.from(Array(9).keys()).map((i) => `text-red-${(i + 1) * 100}`)],
});
