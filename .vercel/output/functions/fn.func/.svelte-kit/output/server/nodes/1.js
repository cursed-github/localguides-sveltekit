

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.92aad5df.js","_app/immutable/chunks/scheduler.83f83461.js","_app/immutable/chunks/index.9fb0017f.js","_app/immutable/chunks/singletons.a13aedb9.js","_app/immutable/chunks/paths.6b01fb37.js"];
export const stylesheets = [];
export const fonts = [];
