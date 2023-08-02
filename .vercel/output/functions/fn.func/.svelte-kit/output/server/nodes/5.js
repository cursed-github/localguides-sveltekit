import * as server from '../entries/pages/registeration/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/registeration/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/registeration/+page.server.js";
export const imports = ["_app/immutable/nodes/5.849ea61d.js","_app/immutable/chunks/scheduler.83f83461.js","_app/immutable/chunks/index.9fb0017f.js","_app/immutable/chunks/logo.48b427f7.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.4764bbb6.js","_app/immutable/chunks/Card.b6e234e1.js","_app/immutable/chunks/Label.525f6067.js","_app/immutable/chunks/forms.4fd3e1e6.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.a13aedb9.js","_app/immutable/chunks/paths.6b01fb37.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
