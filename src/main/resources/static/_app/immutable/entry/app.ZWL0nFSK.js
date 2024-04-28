function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.BWBQxT0g.js","../chunks/scheduler.D-hlb3f-.js","../chunks/index.dPIM5Pwm.js","../assets/0.BHk-skSB.css","../nodes/1.BbHrti-k.js","../chunks/entry.COb1kTY-.js","../chunks/index.BQTS4XdM.js","../nodes/2.CM1JJig-.js","../chunks/each.Dws1Pdbm.js","../assets/2.CbR6UXru.css","../nodes/3.C6UvH4mo.js","../assets/3.BBhjvNTc.css","../nodes/4.7-56G6xr.js","../assets/4.CqCtbvyY.css","../nodes/5.BBDQu8mc.js","../assets/5.ChpgZJWY.css","../nodes/6.C07NZMw2.js","../assets/6.DHjfeAkR.css","../nodes/7.C3OSiqZf.js","../assets/7.D20xxZH5.css","../nodes/8.D-Vl3Be7.js","../assets/8.D6n841i7.css","../nodes/9.BOJh_ulw.js","../assets/9.YvvQIwgN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as N,e as U,o as q,f as T,t as z}from"../chunks/scheduler.D-hlb3f-.js";import{S as F,i as G,s as M,l as h,g as W,h as v,B as g,D as A,t as w,f as E,e as j,c as H,b as J,n as I,E as d,a as K,d as Q,k as X,F as D,G as R,y as P,z as O,A as y,C as L}from"../chunks/index.dPIM5Pwm.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},V={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=Z(o,i),o in V)return;V[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=_.length-1;b>=0;b--){const k=_[b];if(k.href===o&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Y,f||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),f)return new Promise((b,k)=>{u.addEventListener("load",b),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=R(r,_(a)),a[12](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=R(r,_(t)),t[12](e),P(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=R(r,_(a)),a[11](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=R(r,_(t)),t[11](e),P(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=R(r,_(a)),a[10](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=R(r,_(t)),t[10](e),P(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[10](null),e&&L(e,t)}}}function S(a){let e,n=a[6]&&B(a);return{c(){e=j("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(E),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=B(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&E(e),n&&n.d()}}}function B(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&E(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),i=M(),f&&f.c(),r=h()},l(l){n.l(l),i=W(l),f&&f.l(l),r=h()},m(l,m){s[e].m(l,m),v(l,i,m),f&&f.m(l,m),v(l,r,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?s[e].p(l,m):(D(),g(s[u],1,1,()=>{s[u]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){_||(w(n),_=!0)},o(l){g(n),_=!1},d(l){l&&(E(i),E(r)),s[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:f=null}=e;U(i.page.notify);let l=!1,m=!1,u=null;q(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),z().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){T[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function k(c){T[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){T[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,s=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,o,f,l,m,u,i,r,b,k,C]}class oe extends F{constructor(e){super(),G(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.BWBQxT0g.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>p(()=>import("../nodes/1.BbHrti-k.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url),()=>p(()=>import("../nodes/2.CM1JJig-.js"),__vite__mapDeps([7,1,2,8,6,9]),import.meta.url),()=>p(()=>import("../nodes/3.C6UvH4mo.js"),__vite__mapDeps([10,1,2,8,11]),import.meta.url),()=>p(()=>import("../nodes/4.7-56G6xr.js"),__vite__mapDeps([12,1,2,8,13]),import.meta.url),()=>p(()=>import("../nodes/5.BBDQu8mc.js"),__vite__mapDeps([14,1,2,8,15]),import.meta.url),()=>p(()=>import("../nodes/6.C07NZMw2.js"),__vite__mapDeps([16,1,2,8,6,17]),import.meta.url),()=>p(()=>import("../nodes/7.C3OSiqZf.js"),__vite__mapDeps([18,1,2,8,19]),import.meta.url),()=>p(()=>import("../nodes/8.D-Vl3Be7.js"),__vite__mapDeps([20,1,2,8,6,21]),import.meta.url),()=>p(()=>import("../nodes/9.BOJh_ulw.js"),__vite__mapDeps([22,1,2,23]),import.meta.url)],le=[],fe={"/":[2],"/AutoMatch":[3],"/Board":[4],"/Matches":[5],"/Player":[6],"/SaveMatch":[7],"/TierList":[8],"/UserRegi":[9]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
