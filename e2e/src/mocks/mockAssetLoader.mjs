// ignore-assets-loader.mjs
import { URL, fileURLToPath } from 'node:url';

export function resolve(specifier, context, nextResolve) {
  // Ignore @assets/icons/*.svg imports
  if ([".svg", ".png", ".jpg", ".jpeg", ".gif"].some(ext => specifier.includes(ext))) {
    return {
      url: new URL('data:text/javascript,export default "";', context.parentURL).href,
      format: 'module',
      shortCircuit: true,
    };
  }
  // Pass through other imports
  return nextResolve(specifier, context);
}

export function load(url, context, nextLoad) {
  if (url.startsWith('data:text/javascript')) {
    return {
      format: 'module',
      source: 'export default "";',
      shortCircuit: true,
    };
  }
  return nextLoad(url, context);
}
