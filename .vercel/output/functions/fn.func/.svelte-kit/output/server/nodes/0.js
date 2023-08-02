import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.30d79d20.js","_app/immutable/chunks/paths.6b01fb37.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.83f83461.js","_app/immutable/chunks/index.9fb0017f.js","_app/immutable/chunks/logo.48b427f7.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.4764bbb6.js","_app/immutable/chunks/forms.4fd3e1e6.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.a13aedb9.js"];
export const stylesheets = ["_app/immutable/assets/0.7357089d.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
