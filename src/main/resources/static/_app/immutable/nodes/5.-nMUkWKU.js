import{s as ot,n as tt,o as it,a as rt,g as nt}from"../chunks/scheduler.sv-XTJax.js";import{S as ct,i as ut,e as _,s as q,c as m,a as w,f as y,m as W,d as g,n as b,g as A,h as e,o as ft,t as C,b as k,j as I}from"../chunks/index.BNwmkyTc.js";import{g as dt}from"../chunks/entry.B_dful_n.js";import{p as ht}from"../chunks/stores.BOXPSyRJ.js";function pt(c){let t,l="Loading...";return{c(){t=_("p"),t.textContent=l},l(o){t=m(o,"P",{"data-svelte-h":!0}),W(t)!=="svelte-qdsr2u"&&(t.textContent=l)},m(o,r){A(o,t,r)},p:tt,d(o){o&&g(t)}}}function vt(c){let t,l,o=c[0].title+"",r,i,u,f,s=c[0].category+"",E,h,n,p,B=c[0].writer+"",H,N,P,R,U=c[0].time+"",L,Y,V,z,$=c[0].visit+"",M,G,j,D,et="Content",J,T,F=c[0].content+"",O,K,d=c[0].youtubeUrl&&st(c);return{c(){t=_("div"),l=_("h2"),r=C(o),i=q(),u=_("p"),f=C("Category: "),E=C(s),h=q(),n=_("p"),p=C("Writer: "),H=C(B),N=q(),P=_("p"),R=C("Date: "),L=C(U),Y=q(),V=_("p"),z=C("Visit Count: "),M=C($),G=q(),j=_("div"),D=_("h3"),D.textContent=et,J=q(),T=_("p"),O=C(F),K=q(),d&&d.c(),this.h()},l(v){t=m(v,"DIV",{});var a=w(t);l=m(a,"H2",{class:!0});var lt=w(l);r=k(lt,o),lt.forEach(g),i=y(a),u=m(a,"P",{});var Q=w(u);f=k(Q,"Category: "),E=k(Q,s),Q.forEach(g),h=y(a),n=m(a,"P",{});var X=w(n);p=k(X,"Writer: "),H=k(X,B),X.forEach(g),N=y(a),P=m(a,"P",{});var Z=w(P);R=k(Z,"Date: "),L=k(Z,U),Z.forEach(g),Y=y(a),V=m(a,"P",{});var x=w(V);z=k(x,"Visit Count: "),M=k(x,$),x.forEach(g),G=y(a),j=m(a,"DIV",{class:!0});var S=w(j);D=m(S,"H3",{class:!0,"data-svelte-h":!0}),W(D)!=="svelte-1qnf76d"&&(D.textContent=et),J=y(S),T=m(S,"P",{});var at=w(T);O=k(at,F),at.forEach(g),S.forEach(g),K=y(a),d&&d.l(a),a.forEach(g),this.h()},h(){b(l,"class","svelte-1qtjwar"),b(D,"class","svelte-1qtjwar"),b(j,"class","content svelte-1qtjwar")},m(v,a){A(v,t,a),e(t,l),e(l,r),e(t,i),e(t,u),e(u,f),e(u,E),e(t,h),e(t,n),e(n,p),e(n,H),e(t,N),e(t,P),e(P,R),e(P,L),e(t,Y),e(t,V),e(V,z),e(V,M),e(t,G),e(t,j),e(j,D),e(j,J),e(j,T),e(T,O),e(t,K),d&&d.m(t,null)},p(v,a){a&1&&o!==(o=v[0].title+"")&&I(r,o),a&1&&s!==(s=v[0].category+"")&&I(E,s),a&1&&B!==(B=v[0].writer+"")&&I(H,B),a&1&&U!==(U=v[0].time+"")&&I(L,U),a&1&&$!==($=v[0].visit+"")&&I(M,$),a&1&&F!==(F=v[0].content+"")&&I(O,F),v[0].youtubeUrl?d?d.p(v,a):(d=st(v),d.c(),d.m(t,null)):d&&(d.d(1),d=null)},d(v){v&&g(t),d&&d.d()}}}function st(c){let t,l,o="YouTube Video",r,i,u;return{c(){t=_("div"),l=_("h3"),l.textContent=o,r=q(),i=_("iframe"),this.h()},l(f){t=m(f,"DIV",{class:!0});var s=w(t);l=m(s,"H3",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-kb1fqw"&&(l.textContent=o),r=y(s),i=m(s,"IFRAME",{width:!0,height:!0,src:!0,frameborder:!0,allow:!0}),w(i).forEach(g),s.forEach(g),this.h()},h(){b(l,"class","svelte-1qtjwar"),b(i,"width","560"),b(i,"height","315"),rt(i.src,u=c[0].youtubeUrl)||b(i,"src",u),b(i,"frameborder","0"),b(i,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),i.allowFullscreen=!0,b(t,"class","youtube svelte-1qtjwar")},m(f,s){A(f,t,s),e(t,l),e(t,r),e(t,i)},p(f,s){s&1&&!rt(i.src,u=f[0].youtubeUrl)&&b(i,"src",u)},d(f){f&&g(t)}}}function _t(c){let t,l,o,r,i="Back to List",u,f;function s(n,p){return p&1&&(l=null),l==null&&(l=Object.keys(n[0]).length>0),l?vt:pt}let E=s(c,-1),h=E(c);return{c(){t=_("div"),h.c(),o=q(),r=_("button"),r.textContent=i,this.h()},l(n){t=m(n,"DIV",{class:!0});var p=w(t);h.l(p),o=y(p),r=m(p,"BUTTON",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-2aad71"&&(r.textContent=i),p.forEach(g),this.h()},h(){b(r,"class","svelte-1qtjwar"),b(t,"class","detail-container svelte-1qtjwar")},m(n,p){A(n,t,p),h.m(t,null),e(t,o),e(t,r),u||(f=ft(r,"click",c[1]),u=!0)},p(n,[p]){E===(E=s(n,p))&&h?h.p(n,p):(h.d(1),h=E(n),h&&(h.c(),h.m(t,o)))},i:tt,o:tt,d(n){n&&g(t),h.d(),u=!1,f()}}}function mt(c,t,l){let o="",r={};function i(){return nt(ht).params.id}async function u(){try{const s=await fetch(`/api/board/getBoardDetail/${o}`);s.ok?(l(0,r=await s.json()),console.log(r)):console.error("Failed to fetch detail:",s.statusText)}catch(s){console.error("Error fetching detail:",s)}}it(()=>{o=i(),u()});function f(){dt("/Board")}return[r,f]}class kt extends ct{constructor(t){super(),ut(this,t,mt,_t,ot,{})}}export{kt as component};