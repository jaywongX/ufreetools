import { defineConfig, mergeConfig } from 'vite';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import { resolve } from 'path';
import baseConfig from './vite.config.js';
import { generateRoutes } from './scripts/prerender-routes.js';

const routes = await generateRoutes();

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [
      ...vitePrerenderPlugin({
        renderTarget: '#app',
        prerenderScript: resolve(process.cwd(), 'scripts/prerender-entry.js'),
        additionalPrerenderRoutes: routes
      })
    ]
  })
);
