import { generateRoutes } from './prerender-routes.js';

const mode = process.argv[2] || 'core';
if (mode === 'all') {
  process.env.PRERENDER_MODE = 'all';
} else {
  process.env.PRERENDER_MODE = 'core';
}

const routes = await generateRoutes();
console.log(JSON.stringify(routes, null, 2));
