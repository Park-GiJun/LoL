function w(){}const A=t=>t;function E(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function B(){return Object.create(null)}function q(t){t.forEach(j)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function S(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function U(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const r of n)r(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t){let n;return y(t,e=>n=e)(),n}function D(t,n,e){t.$$.on_destroy.push(y(n,e))}function G(t,n,e,r){if(t){const c=m(t,n,e,r);return t[0](c)}}function m(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const a=[],_=Math.max(n.dirty.length,c.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|c[s];return a}return n.dirty|c}return n.dirty}function I(t,n,e,r,c,a){if(c){const _=m(n,e,r,a);t.p(_,c)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t){return t??""}let f;function h(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){k().$$.on_mount.push(t)}function N(t){k().$$.after_update.push(t)}function Q(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const l=[],b=[];let u=[];const g=[],x=Promise.resolve();let p=!1;function v(){p||(p=!0,x.then(z))}function R(){return v(),x}function O(t){u.push(t)}const d=new Set;let o=0;function z(){if(o!==0)return;const t=f;do{try{for(;o<l.length;){const n=l[o];o++,h(n),M(n.$$)}}catch(n){throw l.length=0,o=0,n}for(h(null),l.length=0,o=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(l.length);for(;g.length;)g.pop()();p=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{v as A,A as B,S as a,O as b,D as c,Q as d,N as e,b as f,C as g,K as h,G as i,J as j,H as k,B as l,z as m,w as n,L as o,F as p,U as q,q as r,P as s,R as t,I as u,T as v,f as w,h as x,j as y,l as z};