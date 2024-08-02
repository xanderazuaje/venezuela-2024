
				import createSSRHandler from './home/xander/work/venezuela-2024/.netlify/build/entry.mjs';
				export default createSSRHandler({"cacheOnDemandPages":false});
				export const config = {
					includedFiles: ['**/*'],
					name: 'Astro SSR',
					nodeBundler: 'none',
					generator: '@astrojs/netlify@5.4.0',
					path: '/*',
					preferStatic: true,
				};
			