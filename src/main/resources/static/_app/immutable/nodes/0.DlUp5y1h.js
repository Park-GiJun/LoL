import{s as m,n as r,a as h,u as $,g as d,b as g}from"../chunks/scheduler.C-T2b6Ue.js";import{S as v,i as f,e as y,c as M,m as B,n as C,h as _,f as p,v as S,s as H,w as L,g as b,x as w,t as o,y as c,z as P}from"../chunks/index.CXrps5Uo.js";function R(n){let e,l='<div class="logo svelte-1vutmu0"><a href="/" class="svelte-1vutmu0">내전 전적</a></div> <ul class="nav-links svelte-1vutmu0"><li class="svelte-1vutmu0"><a href="/" class="svelte-1vutmu0">Main</a></li> <li class="svelte-1vutmu0"><a href="/BestPlayer" class="svelte-1vutmu0">Best Player</a></li> <li class="svelte-1vutmu0"><a href="/BestChampion" class="svelte-1vutmu0">Best Champion</a></li> <li class="svelte-1vutmu0"><a href="/RecentMatch" class="svelte-1vutmu0">Recent Match</a></li> <li class="svelte-1vutmu0"><a href="/SaveMatch" class="svelte-1vutmu0">Save Match</a></li></ul>';return{c(){e=y("nav"),e.innerHTML=l,this.h()},l(a){e=M(a,"NAV",{class:!0,"data-svelte-h":!0}),B(e)!=="svelte-1gryyon"&&(e.innerHTML=l),this.h()},h(){C(e,"class","header svelte-1vutmu0")},m(a,u){_(a,e,u)},p:r,i:r,o:r,d(a){a&&p(e)}}}class T extends v{constructor(e){super(),f(this,e,null,R,m,{})}}function k(n){let e,l,a;e=new T({});const u=n[1].default,s=h(u,n,n[0],null);return{c(){S(e.$$.fragment),l=H(),s&&s.c()},l(t){L(e.$$.fragment,t),l=b(t),s&&s.l(t)},m(t,i){w(e,t,i),_(t,l,i),s&&s.m(t,i),a=!0},p(t,[i]){s&&s.p&&(!a||i&1)&&$(s,u,t,t[0],a?g(u,t[0],i,null):d(t[0]),null)},i(t){a||(o(e.$$.fragment,t),o(s,t),a=!0)},o(t){c(e.$$.fragment,t),c(s,t),a=!1},d(t){t&&p(l),P(e,t),s&&s.d(t)}}}function q(n,e,l){let{$$slots:a={},$$scope:u}=e;return n.$$set=s=>{"$$scope"in s&&l(0,u=s.$$scope)},[u,a]}class A extends v{constructor(e){super(),f(this,e,q,k,m,{})}}export{A as component};