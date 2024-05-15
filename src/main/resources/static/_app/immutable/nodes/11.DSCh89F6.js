import{s as mt,n as bt,r as Et,c as jt,o as gt}from"../chunks/scheduler.sv-XTJax.js";import{S as yt,i as Bt,e as s,s as j,c as n,a as _,m as z,d as h,f as g,n as b,g as Ct,h as t,o as F,p as Dt,t as K,b as V,j as G}from"../chunks/index.BNwmkyTc.js";import{e as Tt}from"../chunks/each.66lwba9m.js";import{w as Ot}from"../chunks/index.Dhp1VnCc.js";function pt(r,e,c){const f=r.slice();return f[14]=e[c],f}function kt(r){let e,c,f=r[14].tier+"",l,y,C,L,T=r[14].champion+"",N,P,S,M=r[14].winRate+"",U,x,J,A,v=r[14].banRate+"",k,q,$,m,E=r[14].played+"",Q,X,B,D=r[14].kda+"",Z,tt,O,R=r[14].mostPlayedBy+"",et,lt,H,w=r[14].playersCount+"",at,st;return{c(){e=s("tr"),c=s("td"),l=K(f),C=j(),L=s("td"),N=K(T),P=j(),S=s("td"),U=K(M),x=K("%"),J=j(),A=s("td"),k=K(v),q=K("%"),$=j(),m=s("td"),Q=K(E),X=j(),B=s("td"),Z=K(D),tt=j(),O=s("td"),et=K(R),lt=j(),H=s("td"),at=K(w),st=j(),this.h()},l(i){e=n(i,"TR",{});var a=_(e);c=n(a,"TD",{"data-tier":!0,class:!0});var nt=_(c);l=V(nt,f),nt.forEach(h),C=g(a),L=n(a,"TD",{class:!0});var W=_(L);N=V(W,T),W.forEach(h),P=g(a),S=n(a,"TD",{class:!0});var u=_(S);U=V(u,M),x=V(u,"%"),u.forEach(h),J=g(a),A=n(a,"TD",{class:!0});var d=_(A);k=V(d,v),q=V(d,"%"),d.forEach(h),$=g(a),m=n(a,"TD",{class:!0});var I=_(m);Q=V(I,E),I.forEach(h),X=g(a),B=n(a,"TD",{class:!0});var o=_(B);Z=V(o,D),o.forEach(h),tt=g(a),O=n(a,"TD",{class:!0});var Y=_(O);et=V(Y,R),Y.forEach(h),lt=g(a),H=n(a,"TD",{class:!0});var p=_(H);at=V(p,w),p.forEach(h),st=g(a),a.forEach(h),this.h()},h(){b(c,"data-tier",y=r[14].tier),b(c,"class","svelte-j62fbh"),b(L,"class","svelte-j62fbh"),b(S,"class","svelte-j62fbh"),b(A,"class","svelte-j62fbh"),b(m,"class","svelte-j62fbh"),b(B,"class","svelte-j62fbh"),b(O,"class","svelte-j62fbh"),b(H,"class","svelte-j62fbh")},m(i,a){Ct(i,e,a),t(e,c),t(c,l),t(e,C),t(e,L),t(L,N),t(e,P),t(e,S),t(S,U),t(S,x),t(e,J),t(e,A),t(A,k),t(A,q),t(e,$),t(e,m),t(m,Q),t(e,X),t(e,B),t(B,Z),t(e,tt),t(e,O),t(O,et),t(e,lt),t(e,H),t(H,at),t(e,st)},p(i,a){a&1&&f!==(f=i[14].tier+"")&&G(l,f),a&1&&y!==(y=i[14].tier)&&b(c,"data-tier",y),a&1&&T!==(T=i[14].champion+"")&&G(N,T),a&1&&M!==(M=i[14].winRate+"")&&G(U,M),a&1&&v!==(v=i[14].banRate+"")&&G(k,v),a&1&&E!==(E=i[14].played+"")&&G(Q,E),a&1&&D!==(D=i[14].kda+"")&&G(Z,D),a&1&&R!==(R=i[14].mostPlayedBy+"")&&G(et,R),a&1&&w!==(w=i[14].playersCount+"")&&G(at,w)},d(i){i&&h(e)}}}function Rt(r){let e,c,f,l,y,C,L="Tier",T,N,P,S="Champion",M,U,x,J="Win Rate",A,v,k,q="ban Rate",$,m,E,Q="Played",X,B,D,Z="KDA",tt,O,R,et="Most Played By",lt,H,w,at="Players Count",st,i,a,nt,W=Tt(r[0]),u=[];for(let d=0;d<W.length;d+=1)u[d]=kt(pt(r,W,d));return{c(){e=s("div"),c=s("table"),f=s("thead"),l=s("tr"),y=s("th"),C=s("button"),C.textContent=L,T=j(),N=s("th"),P=s("button"),P.textContent=S,M=j(),U=s("th"),x=s("button"),x.textContent=J,A=j(),v=s("th"),k=s("button"),k.textContent=q,$=j(),m=s("th"),E=s("button"),E.textContent=Q,X=j(),B=s("th"),D=s("button"),D.textContent=Z,tt=j(),O=s("th"),R=s("button"),R.textContent=et,lt=j(),H=s("th"),w=s("button"),w.textContent=at,st=j(),i=s("tbody");for(let d=0;d<u.length;d+=1)u[d].c();this.h()},l(d){e=n(d,"DIV",{class:!0});var I=_(e);c=n(I,"TABLE",{class:!0});var o=_(c);f=n(o,"THEAD",{});var Y=_(f);l=n(Y,"TR",{});var p=_(l);y=n(p,"TH",{class:!0});var ot=_(y);C=n(ot,"BUTTON",{"data-svelte-h":!0}),z(C)!=="svelte-1cttcay"&&(C.textContent=L),ot.forEach(h),T=g(p),N=n(p,"TH",{class:!0});var ct=_(N);P=n(ct,"BUTTON",{"data-svelte-h":!0}),z(P)!=="svelte-195i9ea"&&(P.textContent=S),ct.forEach(h),M=g(p),U=n(p,"TH",{class:!0});var ht=_(U);x=n(ht,"BUTTON",{"data-svelte-h":!0}),z(x)!=="svelte-1uncrj0"&&(x.textContent=J),ht.forEach(h),A=g(p),v=n(p,"TH",{class:!0});var it=_(v);k=n(it,"BUTTON",{"data-svelte-h":!0}),z(k)!=="svelte-il7tlu"&&(k.textContent=q),it.forEach(h),$=g(p),m=n(p,"TH",{class:!0});var dt=_(m);E=n(dt,"BUTTON",{"data-svelte-h":!0}),z(E)!=="svelte-1bv74t6"&&(E.textContent=Q),dt.forEach(h),X=g(p),B=n(p,"TH",{class:!0});var _t=_(B);D=n(_t,"BUTTON",{"data-svelte-h":!0}),z(D)!=="svelte-1ban7w4"&&(D.textContent=Z),_t.forEach(h),tt=g(p),O=n(p,"TH",{class:!0});var ft=_(O);R=n(ft,"BUTTON",{"data-svelte-h":!0}),z(R)!=="svelte-1lg9u0c"&&(R.textContent=et),ft.forEach(h),lt=g(p),H=n(p,"TH",{class:!0});var ut=_(H);w=n(ut,"BUTTON",{"data-svelte-h":!0}),z(w)!=="svelte-1de2v0g"&&(w.textContent=at),ut.forEach(h),p.forEach(h),Y.forEach(h),st=g(o),i=n(o,"TBODY",{});var vt=_(i);for(let rt=0;rt<u.length;rt+=1)u[rt].l(vt);vt.forEach(h),o.forEach(h),I.forEach(h),this.h()},h(){b(y,"class","svelte-j62fbh"),b(N,"class","svelte-j62fbh"),b(U,"class","svelte-j62fbh"),b(v,"class","svelte-j62fbh"),b(m,"class","svelte-j62fbh"),b(B,"class","svelte-j62fbh"),b(O,"class","svelte-j62fbh"),b(H,"class","svelte-j62fbh"),b(c,"class","svelte-j62fbh"),b(e,"class","main_container svelte-j62fbh")},m(d,I){Ct(d,e,I),t(e,c),t(c,f),t(f,l),t(l,y),t(y,C),t(l,T),t(l,N),t(N,P),t(l,M),t(l,U),t(U,x),t(l,A),t(l,v),t(v,k),t(l,$),t(l,m),t(m,E),t(l,X),t(l,B),t(B,D),t(l,tt),t(l,O),t(O,R),t(l,lt),t(l,H),t(H,w),t(c,st),t(c,i);for(let o=0;o<u.length;o+=1)u[o]&&u[o].m(i,null);a||(nt=[F(C,"click",r[3]),F(P,"click",r[4]),F(x,"click",r[5]),F(k,"click",r[6]),F(E,"click",r[7]),F(D,"click",r[8]),F(R,"click",r[9]),F(w,"click",r[10])],a=!0)},p(d,[I]){if(I&1){W=Tt(d[0]);let o;for(o=0;o<W.length;o+=1){const Y=pt(d,W,o);u[o]?u[o].p(Y,I):(u[o]=kt(Y),u[o].c(),u[o].m(i,null))}for(;o<u.length;o+=1)u[o].d(1);u.length=W.length}},i:bt,o:bt,d(d){d&&h(e),Dt(u,d),a=!1,Et(nt)}}}function Ht(r,e){const c=[.2,.4,.6,.8],f=["Tier 1","Tier 2","Tier 3","Tier 4","Tier 5"];for(let l=0;l<c.length;l++)if(r<=e*c[l])return f[l];return f[f.length-1]}function wt(r,e,c){let f;const l=Ot([]);jt(r,l,v=>c(0,f=v));let y=null,C=1;async function L(){const k=await(await fetch("/api/tierList")).json();k.forEach((q,$)=>{q.tier=Ht($+1,k.length)}),l.set(k)}function T(v){y===v?C*=-1:(y=v,C=1),l.update(k=>k.slice().sort((q,$)=>{const m=q[v],E=$[v];return m<E?-1*C:m>E?1*C:0}))}return gt(L),[f,l,T,()=>T("tier"),()=>T("champion"),()=>T("winRate"),()=>T("banRate"),()=>T("played"),()=>T("kda"),()=>T("mostPlayedBy"),()=>T("playersCount")]}class At extends yt{constructor(e){super(),Bt(this,e,wt,Rt,mt,{})}}export{At as component};
