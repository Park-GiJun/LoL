import{s as g,n as y,r as C}from"../chunks/scheduler.sv-XTJax.js";import{S as P,i as S,e as d,s as N,c as m,a as I,f as T,m as O,d as b,n as u,g as U,h as c,q as f,o as _}from"../chunks/index.5I4ndzvw.js";function k(r){let s,t,i,e,p,n,h="입력",o,v;return{c(){s=d("div"),t=d("input"),i=N(),e=d("input"),p=N(),n=d("button"),n.textContent=h,this.h()},l(l){s=m(l,"DIV",{class:!0});var a=I(s);t=m(a,"INPUT",{type:!0,placeholder:!0,class:!0}),i=T(a),e=m(a,"INPUT",{type:!0,placeholder:!0,class:!0}),p=T(a),n=m(a,"BUTTON",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-1drvay1"&&(n.textContent=h),a.forEach(b),this.h()},h(){u(t,"type","text"),u(t,"placeholder","닉네임"),u(t,"class","svelte-10cu441"),u(e,"type","text"),u(e,"placeholder","이름"),u(e,"class","svelte-10cu441"),u(n,"class","svelte-10cu441"),u(s,"class","form-container svelte-10cu441")},m(l,a){U(l,s,a),c(s,t),f(t,r[0]),c(s,i),c(s,e),f(e,r[1]),c(s,p),c(s,n),o||(v=[_(t,"input",r[3]),_(e,"input",r[4]),_(n,"click",r[2])],o=!0)},p(l,[a]){a&1&&t.value!==l[0]&&f(t,l[0]),a&2&&e.value!==l[1]&&f(e,l[1])},i:y,o:y,d(l){l&&b(s),o=!1,C(v)}}}function q(r,s,t){let i,e;function p(){fetch("/api/submitName",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:i,name:e})}).then(o=>o.text()).then(o=>{alert(o),t(0,i=""),t(1,e="")})}function n(){i=this.value,t(0,i)}function h(){e=this.value,t(1,e)}return[i,e,p,n,h]}class B extends P{constructor(s){super(),S(this,s,q,k,g,{})}}export{B as component};