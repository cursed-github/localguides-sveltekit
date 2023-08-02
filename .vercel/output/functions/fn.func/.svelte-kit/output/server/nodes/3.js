import * as server from '../entries/pages/account/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/account/+page.server.js";
export const imports = ["_app/immutable/nodes/3.10d77be1.js","_app/immutable/chunks/scheduler.83f83461.js","_app/immutable/chunks/index.9fb0017f.js","_app/immutable/chunks/paths.6b01fb37.js"];
export const stylesheets = [];
export const fonts = [];
