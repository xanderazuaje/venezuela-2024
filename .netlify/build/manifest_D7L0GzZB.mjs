import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_C3VS3fch.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/xander/work/venezuela-2024/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/queue/accept","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/queue\\/accept\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"queue","dynamic":false,"spread":false}],[{"content":"accept","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/queue/accept.ts","pathname":"/api/queue/accept","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/queue/reject","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/queue\\/reject\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"queue","dynamic":false,"spread":false}],[{"content":"reject","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/queue/reject.ts","pathname":"/api/queue/reject","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DUbI7o2f.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DUbI7o2f.css"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DUbI7o2f.css"},{"type":"inline","content":"*,*:before,*:after{box-sizing:border-box}body{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/xander/work/venezuela-2024/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/home/xander/work/venezuela-2024/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/xander/work/venezuela-2024/src/pages/signin.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"pages/api/auth/signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/api/queue/accept@_@ts":"pages/api/queue/accept.astro.mjs","\u0000@astro-page:src/pages/api/queue/reject@_@ts":"pages/api/queue/reject.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D7L0GzZB.mjs","@astrojs/preact/client.js":"_astro/client.ChS0FRnu.js","@/components/ContactList.tsx":"_astro/ContactList.CK5MTslZ.js","/home/xander/work/venezuela-2024/src/components/RowDashboard":"_astro/RowDashboard.CEZdQHbv.js","/home/xander/work/venezuela-2024/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.COS4wmts.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/inter-cyrillic-ext-400-normal.Dc4VJyIJ.woff2","/_astro/inter-cyrillic-400-normal.BLGc9T1a.woff2","/_astro/inter-greek-ext-400-normal.Bput3-QP.woff2","/_astro/inter-greek-400-normal.DxZsaF_h.woff2","/_astro/inter-vietnamese-400-normal.DMkecbls.woff2","/_astro/inter-latin-ext-400-normal.hnt3BR84.woff2","/_astro/inter-latin-400-normal.BOOGhInR.woff2","/_astro/inter-cyrillic-ext-800-normal.DkJRRbRv.woff2","/_astro/inter-cyrillic-800-normal.Gn5VisWc.woff2","/_astro/inter-greek-ext-800-normal.JPzvdjtt.woff2","/_astro/inter-greek-800-normal.C7uvZBs2.woff2","/_astro/inter-vietnamese-800-normal.Cm7tD1pz.woff2","/_astro/inter-latin-ext-800-normal.DhAspwKZ.woff2","/_astro/inter-latin-800-normal.qNthNgub.woff2","/_astro/inter-cyrillic-ext-400-normal.BPnxn4xp.woff","/_astro/inter-cyrillic-400-normal.ZzOtrSSW.woff","/_astro/inter-greek-ext-400-normal.DCpCPQOf.woff","/_astro/inter-greek-400-normal.BZzXV7-1.woff","/_astro/inter-vietnamese-400-normal.BUNmGMP1.woff","/_astro/inter-latin-ext-400-normal.C1t-h-pH.woff","/_astro/inter-latin-400-normal.gitzw0hO.woff","/_astro/inter-cyrillic-ext-800-normal.Blqt89nY.woff","/_astro/inter-cyrillic-800-normal.C1n5rDZ2.woff","/_astro/inter-greek-ext-800-normal.D4Z3eQTi.woff","/_astro/inter-greek-800-normal.DCnbPe0-.woff","/_astro/inter-vietnamese-800-normal.BUZV_87j.woff","/_astro/inter-latin-ext-800-normal.B4NYOez9.woff","/_astro/inter-latin-800-normal.DDBFRMkW.woff","/_astro/dashboard.DUbI7o2f.css","/asistencia legal.svg","/db-export-1722451149.sql","/favicon.svg","/mlv_logo.png","/médico.svg","/phone.svg","/psicólogo.svg","/subrayado.svg","/vzla.svg","/_astro/ContactList.CK5MTslZ.js","/_astro/RowDashboard.CEZdQHbv.js","/_astro/client.ChS0FRnu.js","/_astro/hooks.module.BFtGk6Ka.js","/_astro/index.DxWDHyKq.css","/_astro/jsxRuntime.module.BIWTLvyB.js","/_astro/preact.module.9bA1UASV.js","/_astro/signals.module.COS4wmts.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
