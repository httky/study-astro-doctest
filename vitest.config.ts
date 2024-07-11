/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import { doctest } from 'vite-plugin-doctest';

export default getViteConfig({
    plugins: [doctest({})],
    test: {
        includeSource: [
            './src/**/*.[jt]s?(x)',
            // './src/**/*.astro', // FIXME: astroファイル内のscriptはテストできない？
        ],
    },
});