import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.195b5c29.js","_app/immutable/chunks/scheduler.83f83461.js","_app/immutable/chunks/index.9fb0017f.js","_app/immutable/chunks/Card.b6e234e1.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.4764bbb6.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
