import{p as E}from"./parse.bee59afc.js";import{h as g,j as w}from"./singletons.a13aedb9.js";const H=g("invalidate"),L=g("invalidate_all");function M(t){return w.apply_action(t)}function T(t){const r=JSON.parse(t);return r.data&&(r.data=E(r.data)),r}function y(t){return HTMLElement.prototype.cloneNode.call(t)}function v(t,r=()=>{}){const s=async({action:a,result:c,reset:o})=>{c.type==="success"&&(o!==!1&&HTMLFormElement.prototype.reset.call(t),await L()),(location.origin+location.pathname===a.origin+a.pathname||c.type==="redirect"||c.type==="error")&&M(c)};async function l(a){var d,f,b,h;if(((d=a.submitter)!=null&&d.hasAttribute("formmethod")?a.submitter.formMethod:y(t).method)!=="post")return;a.preventDefault();const o=new URL((f=a.submitter)!=null&&f.hasAttribute("formaction")?a.submitter.formAction:y(t).action),n=new FormData(t),u=(b=a.submitter)==null?void 0:b.getAttribute("name");u&&n.append(u,((h=a.submitter)==null?void 0:h.getAttribute("value"))??"");const m=new AbortController;let p=!1;const A=await r({action:o,cancel:()=>p=!0,controller:m,get data(){return n},formData:n,get form(){return t},formElement:t,submitter:a.submitter})??s;if(p)return;let i;try{const e=await fetch(o,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:n,signal:m.signal});i=T(await e.text()),i.type==="error"&&(i.status=e.status)}catch(e){if((e==null?void 0:e.name)==="AbortError")return;i={type:"error",error:e}}A({action:o,get data(){return n},formData:n,get form(){return t},formElement:t,update:e=>s({action:o,result:i,reset:e==null?void 0:e.reset}),result:i})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",l),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",l)}}}export{v as e,H as i};
