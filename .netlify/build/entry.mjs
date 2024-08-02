import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D7L0GzZB.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/signin.astro.mjs');
const _page2 = () => import('./pages/api/auth/signout.astro.mjs');
const _page3 = () => import('./pages/api/queue/accept.astro.mjs');
const _page4 = () => import('./pages/api/queue/reject.astro.mjs');
const _page5 = () => import('./pages/dashboard.astro.mjs');
const _page6 = () => import('./pages/signin.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/signin.ts", _page1],
    ["src/pages/api/auth/signout.ts", _page2],
    ["src/pages/api/queue/accept.ts", _page3],
    ["src/pages/api/queue/reject.ts", _page4],
    ["src/pages/dashboard.astro", _page5],
    ["src/pages/signin.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "2d173559-591c-4a3b-a536-3265bbcf3fed"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
