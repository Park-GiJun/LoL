import{n as J,z as Re,s as se,o as ue,d as F,l as qe,r as Pe,c as Ne}from"../chunks/scheduler.D-hlb3f-.js";import{J as ze,f as m,K as Me,S as ae,i as ne,e as E,c as D,b as A,n as T,h as V,p as be,a as G,s as H,d as L,g as B,j as i,k as O,m as Q,E as ie,o as Z,y as oe,z as re,A as ce,t as he,B as fe,C as de}from"../chunks/index.Bpkdz8h_.js";import{e as ee,u as Ae,f as He}from"../chunks/each.BL9GZNLh.js";import{w as Be}from"../chunks/index.BQTS4XdM.js";const Ee=typeof window<"u";let Ke=Ee?()=>window.performance.now():()=>Date.now(),me=Ee?l=>requestAnimationFrame(l):J;const x=new Set;function De(l){x.forEach(e=>{e.c(l)||(x.delete(e),e.f())}),x.size!==0&&me(De)}function Se(l){let e;return x.size===0&&me(De),{promise:new Promise(t=>{x.add(e={c:l,f:t})}),abort(){x.delete(e)}}}const te=new Map;let le=0;function Ge(l){let e=5381,t=l.length;for(;t--;)e=(e<<5)-e^l.charCodeAt(t);return e>>>0}function Le(l,e){const t={stylesheet:Me(e),rules:{}};return te.set(l,t),t}function Ie(l,e,t,a,s,r,n,d=0){const h=16.666/a;let g=`{
`;for(let o=0;o<=1;o+=h){const f=e+(t-e)*r(o);g+=o*100+`%{${n(f,1-f)}}
`}const v=g+`100% {${n(t,1-t)}}
}`,c=`__svelte_${Ge(v)}_${d}`,R=ze(l),{stylesheet:k,rules:w}=te.get(R)||Le(R,l);w[c]||(w[c]=!0,k.insertRule(`@keyframes ${c} ${v}`,k.cssRules.length));const $=l.style.animation||"";return l.style.animation=`${$?`${$}, `:""}${c} ${a}ms linear ${s}ms 1 both`,le+=1,c}function Oe(l,e){const t=(l.style.animation||"").split(", "),a=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-a.length;s&&(l.style.animation=a.join(", "),le-=s,le||Ve())}function Ve(){me(()=>{le||(te.forEach(l=>{const{ownerNode:e}=l.stylesheet;e&&m(e)}),te.clear())})}function We(l,e,t,a){if(!e)return J;const s=l.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return J;const{delay:r=0,duration:n=300,easing:d=Re,start:h=Ke()+r,end:g=h+n,tick:v=J,css:c}=t(l,{from:e,to:s},a);let R=!0,k=!1,w;function $(){c&&(w=Ie(l,0,1,n,r,d,c)),r||(k=!0)}function o(){c&&Oe(l,w),R=!1}return Se(f=>{if(!k&&f>=h&&(k=!0),k&&f>=g&&(v(1,0),o()),!R)return!1;if(k){const N=f-h,q=0+1*d(N/n);v(q,1-q)}return!0}),$(),v(0,1),o}function je(l){const e=getComputedStyle(l);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:a}=e,s=l.getBoundingClientRect();l.style.position="absolute",l.style.width=t,l.style.height=a,Fe(l,s)}}function Fe(l,e){const t=l.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const a=getComputedStyle(l),s=a.transform==="none"?"":a.transform;l.style.transform=`${s} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function ge(l,e,t){const a=l.slice();return a[3]=e[t].header,a[4]=e[t].value,a}function ke(l){let e,t,a=l[3]+"",s,r,n,d=l[4]+"",h,g;return{c(){e=E("div"),t=E("div"),s=G(a),r=H(),n=E("div"),h=G(d),g=H(),this.h()},l(v){e=D(v,"DIV",{class:!0});var c=A(e);t=D(c,"DIV",{class:!0});var R=A(t);s=L(R,a),R.forEach(m),r=B(c),n=D(c,"DIV",{class:!0});var k=A(n);h=L(k,d),k.forEach(m),g=B(c),c.forEach(m),this.h()},h(){T(t,"class","stat-header svelte-1dloci2"),T(n,"class","stat-content svelte-1dloci2"),T(e,"class","stat-card svelte-1dloci2")},m(v,c){V(v,e,c),i(e,t),i(t,s),i(e,r),i(e,n),i(n,h),i(e,g)},p(v,c){c&1&&a!==(a=v[3]+"")&&O(s,a),c&1&&d!==(d=v[4]+"")&&O(h,d)},d(v){v&&m(e)}}}function Ye(l){let e,t=ee(l[0]),a=[];for(let s=0;s<t.length;s+=1)a[s]=ke(ge(l,t,s));return{c(){e=E("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=D(s,"DIV",{class:!0});var r=A(e);for(let n=0;n<a.length;n+=1)a[n].l(r);r.forEach(m),this.h()},h(){T(e,"class","stats-grid svelte-1dloci2")},m(s,r){V(s,e,r);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(e,null)},p(s,[r]){if(r&1){t=ee(s[0]);let n;for(n=0;n<t.length;n+=1){const d=ge(s,t,n);a[n]?a[n].p(d,r):(a[n]=ke(d),a[n].c(),a[n].m(e,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=t.length}},i:J,o:J,d(s){s&&m(e),be(a,s)}}}function Je(l,e,t){let a={},s=[];ue(async()=>{a=await(await fetch("/api/getArchive")).json(),t(0,s=r())});function r(){return[{header:"Total Games Played",key:"totalGamesPlayed"},{header:"Days Played",key:"totalDaysPlayed"},{header:"Total Kills",key:"totalKills"},{header:"Most Champion",key:"mostPlayedChampion"},{header:"Most Kills",key:"mostKillsChampion"},{header:"Most Deaths",key:"mostDeathsChampion"},{header:"Most Champions",key:"mostDifferentChampion"},{header:"Best KDA",key:"bestKDAChampion"}].map(n=>({...n,value:a[n.key]||"Loading..."}))}return[s]}class Qe extends ae{constructor(e){super(),ne(this,e,Je,Ye,se,{})}}function we(l,e,t){const a=l.slice();return a[1]=e[t],a[3]=t,a}function ye(l){let e,t=l[0].teamRed[l[3]].nickname+"",a,s,r,n,d=l[0].teamRed[l[3]].summonerName+"",h,g,v,c,R=l[0].teamRed[l[3]].champion+"",k,w,$,o,f=l[0].teamRed[l[3]].kills+"",N,q,_=l[0].teamRed[l[3]].deaths+"",P,S,b=l[0].teamRed[l[3]].assists+"",z,I;return{c(){e=E("td"),a=G(t),r=H(),n=E("td"),h=G(d),v=H(),c=E("td"),k=G(R),$=H(),o=E("td"),N=G(f),q=G("/"),P=G(_),S=G("/"),z=G(b),this.h()},l(u){e=D(u,"TD",{class:!0});var M=A(e);a=L(M,t),M.forEach(m),r=B(u),n=D(u,"TD",{class:!0});var W=A(n);h=L(W,d),W.forEach(m),v=B(u),c=D(u,"TD",{class:!0});var K=A(c);k=L(K,R),K.forEach(m),$=B(u),o=D(u,"TD",{class:!0});var p=A(o);N=L(p,f),q=L(p,"/"),P=L(p,_),S=L(p,"/"),z=L(p,b),p.forEach(m),this.h()},h(){T(e,"class",s=F(l[0].teamRed[l[3]].winning?"victory":"defeat")+" svelte-1e5cpq8"),T(n,"class",g=F(l[0].teamRed[l[3]].winning?"victory":"defeat")+" svelte-1e5cpq8"),T(c,"class",w=F(l[0].teamRed[l[3]].winning?"victory":"defeat")+" svelte-1e5cpq8"),T(o,"class",I=F(l[0].teamRed[l[3]].winning?"victory":"defeat")+" svelte-1e5cpq8")},m(u,M){V(u,e,M),i(e,a),V(u,r,M),V(u,n,M),i(n,h),V(u,v,M),V(u,c,M),i(c,k),V(u,$,M),V(u,o,M),i(o,N),i(o,q),i(o,P),i(o,S),i(o,z)},p(u,M){M&1&&t!==(t=u[0].teamRed[u[3]].nickname+"")&&O(a,t),M&1&&s!==(s=F(u[0].teamRed[u[3]].winning?"victory":"defeat")+" svelte-1e5cpq8")&&T(e,"class",s),M&1&&d!==(d=u[0].teamRed[u[3]].summonerName+"")&&O(h,d),M&1&&g!==(g=F(u[0].teamRed[u[3]].winning?"victory":"defeat")+" svelte-1e5cpq8")&&T(n,"class",g),M&1&&R!==(R=u[0].teamRed[u[3]].champion+"")&&O(k,R),M&1&&w!==(w=F(u[0].teamRed[u[3]].winning?"victory":"defeat")+" svelte-1e5cpq8")&&T(c,"class",w),M&1&&f!==(f=u[0].teamRed[u[3]].kills+"")&&O(N,f),M&1&&_!==(_=u[0].teamRed[u[3]].deaths+"")&&O(P,_),M&1&&b!==(b=u[0].teamRed[u[3]].assists+"")&&O(z,b),M&1&&I!==(I=F(u[0].teamRed[u[3]].winning?"victory":"defeat")+" svelte-1e5cpq8")&&T(o,"class",I)},d(u){u&&(m(e),m(r),m(n),m(v),m(c),m($),m(o))}}}function $e(l){let e,t,a=l[1].nickname+"",s,r,n,d,h=l[1].summonerName+"",g,v,c,R,k=l[1].champion+"",w,$,o,f,N=l[1].kills+"",q,_,P=l[1].deaths+"",S,b,z=l[1].assists+"",I,u,M,W,K=l[0].teamRed[l[3]]&&ye(l);return{c(){e=E("tr"),t=E("td"),s=G(a),n=H(),d=E("td"),g=G(h),c=H(),R=E("td"),w=G(k),o=H(),f=E("td"),q=G(N),_=G("/"),S=G(P),b=G("/"),I=G(z),M=H(),K&&K.c(),W=H(),this.h()},l(p){e=D(p,"TR",{});var y=A(e);t=D(y,"TD",{class:!0});var C=A(t);s=L(C,a),C.forEach(m),n=B(y),d=D(y,"TD",{class:!0});var U=A(d);g=L(U,h),U.forEach(m),c=B(y),R=D(y,"TD",{class:!0});var j=A(R);w=L(j,k),j.forEach(m),o=B(y),f=D(y,"TD",{class:!0});var Y=A(f);q=L(Y,N),_=L(Y,"/"),S=L(Y,P),b=L(Y,"/"),I=L(Y,z),Y.forEach(m),M=B(y),K&&K.l(y),W=B(y),y.forEach(m),this.h()},h(){T(t,"class",r=F(l[1].winning?"victory":"defeat")+" svelte-1e5cpq8"),T(d,"class",v=F(l[1].winning?"victory":"defeat")+" svelte-1e5cpq8"),T(R,"class",$=F(l[1].winning?"victory":"defeat")+" svelte-1e5cpq8"),T(f,"class",u=F(l[1].winning?"victory":"defeat")+" svelte-1e5cpq8")},m(p,y){V(p,e,y),i(e,t),i(t,s),i(e,n),i(e,d),i(d,g),i(e,c),i(e,R),i(R,w),i(e,o),i(e,f),i(f,q),i(f,_),i(f,S),i(f,b),i(f,I),i(e,M),K&&K.m(e,null),i(e,W)},p(p,y){y&1&&a!==(a=p[1].nickname+"")&&O(s,a),y&1&&r!==(r=F(p[1].winning?"victory":"defeat")+" svelte-1e5cpq8")&&T(t,"class",r),y&1&&h!==(h=p[1].summonerName+"")&&O(g,h),y&1&&v!==(v=F(p[1].winning?"victory":"defeat")+" svelte-1e5cpq8")&&T(d,"class",v),y&1&&k!==(k=p[1].champion+"")&&O(w,k),y&1&&$!==($=F(p[1].winning?"victory":"defeat")+" svelte-1e5cpq8")&&T(R,"class",$),y&1&&N!==(N=p[1].kills+"")&&O(q,N),y&1&&P!==(P=p[1].deaths+"")&&O(S,P),y&1&&z!==(z=p[1].assists+"")&&O(I,z),y&1&&u!==(u=F(p[1].winning?"victory":"defeat")+" svelte-1e5cpq8")&&T(f,"class",u),p[0].teamRed[p[3]]?K?K.p(p,y):(K=ye(p),K.c(),K.m(e,W)):K&&(K.d(1),K=null)},d(p){p&&m(e),K&&K.d()}}}function Ue(l){let e,t,a,s,r,n,d=l[0].winningTeam==="Purple"?"(승리)":"",h,g,v,c,R=l[0].winningTeam==="Red"?"(승리)":"",k,w,$,o='<th class="nickname svelte-1e5cpq8">닉네임</th> <th class="summonerName svelte-1e5cpq8">이름</th> <th class="champion svelte-1e5cpq8">챔피언</th> <th class="kda svelte-1e5cpq8">KDA</th> <th class="nickname svelte-1e5cpq8">닉네임</th> <th class="summonerName svelte-1e5cpq8">이름</th> <th class="champion svelte-1e5cpq8">챔피언</th> <th class="kda svelte-1e5cpq8">KDA</th>',f,N,q=ee(l[0].teamPurple),_=[];for(let P=0;P<q.length;P+=1)_[P]=$e(we(l,q,P));return{c(){e=E("div"),t=E("table"),a=E("thead"),s=E("tr"),r=E("th"),n=G("퍼플 팀 "),h=G(d),g=H(),v=E("th"),c=G("레드 팀 "),k=G(R),w=H(),$=E("tr"),$.innerHTML=o,f=H(),N=E("tbody");for(let P=0;P<_.length;P+=1)_[P].c();this.h()},l(P){e=D(P,"DIV",{class:!0});var S=A(e);t=D(S,"TABLE",{class:!0});var b=A(t);a=D(b,"THEAD",{});var z=A(a);s=D(z,"TR",{});var I=A(s);r=D(I,"TH",{class:!0,colspan:!0});var u=A(r);n=L(u,"퍼플 팀 "),h=L(u,d),u.forEach(m),g=B(I),v=D(I,"TH",{class:!0,colspan:!0});var M=A(v);c=L(M,"레드 팀 "),k=L(M,R),M.forEach(m),I.forEach(m),w=B(z),$=D(z,"TR",{"data-svelte-h":!0}),Q($)!=="svelte-1od3yf0"&&($.innerHTML=o),z.forEach(m),f=B(b),N=D(b,"TBODY",{});var W=A(N);for(let K=0;K<_.length;K+=1)_[K].l(W);W.forEach(m),b.forEach(m),S.forEach(m),this.h()},h(){T(r,"class","team-purple nickname svelte-1e5cpq8"),T(r,"colspan","4"),T(v,"class","team-red nickname svelte-1e5cpq8"),T(v,"colspan","4"),T(t,"class","svelte-1e5cpq8"),T(e,"class","main_container svelte-1e5cpq8")},m(P,S){V(P,e,S),i(e,t),i(t,a),i(a,s),i(s,r),i(r,n),i(r,h),i(s,g),i(s,v),i(v,c),i(v,k),i(a,w),i(a,$),i(t,f),i(t,N);for(let b=0;b<_.length;b+=1)_[b]&&_[b].m(N,null)},p(P,[S]){if(S&1&&d!==(d=P[0].winningTeam==="Purple"?"(승리)":"")&&O(h,d),S&1&&R!==(R=P[0].winningTeam==="Red"?"(승리)":"")&&O(k,R),S&1){q=ee(P[0].teamPurple);let b;for(b=0;b<q.length;b+=1){const z=we(P,q,b);_[b]?_[b].p(z,S):(_[b]=$e(z),_[b].c(),_[b].m(N,null))}for(;b<_.length;b+=1)_[b].d(1);_.length=q.length}},i:J,o:J,d(P){P&&m(e),be(_,P)}}}function Xe(l,e,t){let a={teamPurple:[],teamRed:[],winningTeam:""};return ue(async()=>{const r=await(await fetch("/api/recentMatch")).json(),n=r.filter(g=>g.teamColor==="Purple"),d=r.filter(g=>g.teamColor==="Red"),h=n.some(g=>g.winning===1)?"Purple":"Red";t(0,a={...a,teamPurple:n,teamRed:d,winningTeam:h})}),[a]}class Ze extends ae{constructor(e){super(),ne(this,e,Xe,Ue,se,{})}}function xe(l){const e=l-1;return e*e*e+1}function et(l,{from:e,to:t},a={}){const s=getComputedStyle(l),r=s.transform==="none"?"":s.transform,[n,d]=s.transformOrigin.split(" ").map(parseFloat),h=e.left+e.width*n/t.width-(t.left+n),g=e.top+e.height*d/t.height-(t.top+d),{delay:v=0,duration:c=k=>Math.sqrt(k)*120,easing:R=xe}=a;return{delay:v,duration:qe(c)?c(Math.sqrt(h*h+g*g)):c,easing:R,css:(k,w)=>{const $=w*h,o=w*g,f=k+w*e.width/t.width,N=k+w*e.height/t.height;return`transform: ${r} translate(${$}px, ${o}px) scale(${f}, ${N});`}}}function Ce(l,e,t){const a=l.slice();return a[12]=e[t],a}function Te(l,e){let t,a,s=e[12].PlayedGame+"",r,n,d,h,g=e[12].Nickname+"",v,c,R,k,w=e[12].Name+"",$,o,f,N=e[12].MostChampion+"",q,_,P,S=e[12].WinningPercentage+"",b,z,I,u=e[12].Kda+"",M,W,K,p=J;return{key:l,first:null,c(){t=E("tr"),a=E("td"),r=G(s),n=H(),d=E("td"),h=E("a"),v=G(g),R=H(),k=E("td"),$=G(w),o=H(),f=E("td"),q=G(N),_=H(),P=E("td"),b=G(S),z=H(),I=E("td"),M=G(u),W=H(),this.h()},l(y){t=D(y,"TR",{});var C=A(t);a=D(C,"TD",{class:!0});var U=A(a);r=L(U,s),U.forEach(m),n=B(C),d=D(C,"TD",{class:!0});var j=A(d);h=D(j,"A",{href:!0,target:!0});var Y=A(h);v=L(Y,g),Y.forEach(m),j.forEach(m),R=B(C),k=D(C,"TD",{class:!0});var X=A(k);$=L(X,w),X.forEach(m),o=B(C),f=D(C,"TD",{class:!0});var _e=A(f);q=L(_e,N),_e.forEach(m),_=B(C),P=D(C,"TD",{class:!0});var ve=A(P);b=L(ve,S),ve.forEach(m),z=B(C),I=D(C,"TD",{class:!0});var pe=A(I);M=L(pe,u),pe.forEach(m),W=B(C),C.forEach(m),this.h()},h(){T(a,"class","svelte-th9ozx"),T(h,"href",c="https://www.op.gg/summoners/kr/"+e[12].Nickname),T(h,"target","_blank"),T(d,"class","svelte-th9ozx"),T(k,"class","svelte-th9ozx"),T(f,"class","svelte-th9ozx"),T(P,"class","svelte-th9ozx"),T(I,"class","svelte-th9ozx"),this.first=t},m(y,C){V(y,t,C),i(t,a),i(a,r),i(t,n),i(t,d),i(d,h),i(h,v),i(t,R),i(t,k),i(k,$),i(t,o),i(t,f),i(f,q),i(t,_),i(t,P),i(P,b),i(t,z),i(t,I),i(I,M),i(t,W)},p(y,C){e=y,C&1&&s!==(s=e[12].PlayedGame+"")&&O(r,s),C&1&&g!==(g=e[12].Nickname+"")&&O(v,g),C&1&&c!==(c="https://www.op.gg/summoners/kr/"+e[12].Nickname)&&T(h,"href",c),C&1&&w!==(w=e[12].Name+"")&&O($,w),C&1&&N!==(N=e[12].MostChampion+"")&&O(q,N),C&1&&S!==(S=e[12].WinningPercentage+"")&&O(b,S),C&1&&u!==(u=e[12].Kda+"")&&O(M,u)},r(){K=t.getBoundingClientRect()},f(){je(t),p()},a(){p(),p=We(t,K,et,{duration:400})},d(y){y&&m(t)}}}function tt(l){let e,t,a,s,r,n="PlayedGame",d,h,g="Nickname",v,c,R="Name",k,w,$="Most Champion",o,f,N="WinningPercentage",q,_,P="KDA",S,b,z=[],I=new Map,u,M,W=ee(l[0]);const K=p=>p[12].id;for(let p=0;p<W.length;p+=1){let y=Ce(l,W,p),C=K(y);I.set(C,z[p]=Te(C,y))}return{c(){e=E("div"),t=E("table"),a=E("thead"),s=E("tr"),r=E("th"),r.textContent=n,d=H(),h=E("th"),h.textContent=g,v=H(),c=E("th"),c.textContent=R,k=H(),w=E("th"),w.textContent=$,o=H(),f=E("th"),f.textContent=N,q=H(),_=E("th"),_.textContent=P,S=H(),b=E("tbody");for(let p=0;p<z.length;p+=1)z[p].c();this.h()},l(p){e=D(p,"DIV",{style:!0});var y=A(e);t=D(y,"TABLE",{class:!0});var C=A(t);a=D(C,"THEAD",{});var U=A(a);s=D(U,"TR",{});var j=A(s);r=D(j,"TH",{class:!0,"data-svelte-h":!0}),Q(r)!=="svelte-1vkpmen"&&(r.textContent=n),d=B(j),h=D(j,"TH",{class:!0,"data-svelte-h":!0}),Q(h)!=="svelte-89yl7b"&&(h.textContent=g),v=B(j),c=D(j,"TH",{class:!0,"data-svelte-h":!0}),Q(c)!=="svelte-voei9z"&&(c.textContent=R),k=B(j),w=D(j,"TH",{class:!0,"data-svelte-h":!0}),Q(w)!=="svelte-2ur1b5"&&(w.textContent=$),o=B(j),f=D(j,"TH",{class:!0,"data-svelte-h":!0}),Q(f)!=="svelte-60euv5"&&(f.textContent=N),q=B(j),_=D(j,"TH",{class:!0,"data-svelte-h":!0}),Q(_)!=="svelte-11i59vt"&&(_.textContent=P),j.forEach(m),U.forEach(m),S=B(C),b=D(C,"TBODY",{});var Y=A(b);for(let X=0;X<z.length;X+=1)z[X].l(Y);Y.forEach(m),C.forEach(m),y.forEach(m),this.h()},h(){T(r,"class","svelte-th9ozx"),T(h,"class","svelte-th9ozx"),T(c,"class","svelte-th9ozx"),T(w,"class","svelte-th9ozx"),T(f,"class","svelte-th9ozx"),T(_,"class","svelte-th9ozx"),T(t,"class","table-container svelte-th9ozx"),ie(e,"overflow-x","auto"),ie(e,"overflow-y","auto"),ie(e,"max-height","500px")},m(p,y){V(p,e,y),i(e,t),i(t,a),i(a,s),i(s,r),i(s,d),i(s,h),i(s,v),i(s,c),i(s,k),i(s,w),i(s,o),i(s,f),i(s,q),i(s,_),i(t,S),i(t,b);for(let C=0;C<z.length;C+=1)z[C]&&z[C].m(b,null);u||(M=[Z(r,"click",l[3]),Z(h,"click",l[4]),Z(c,"click",l[5]),Z(w,"click",l[6]),Z(f,"click",l[7]),Z(_,"click",l[8])],u=!0)},p(p,[y]){if(y&1){W=ee(p[0]);for(let C=0;C<z.length;C+=1)z[C].r();z=Ae(z,y,K,1,p,W,I,b,He,Te,null,Ce);for(let C=0;C<z.length;C+=1)z[C].a()}},i:J,o:J,d(p){p&&m(e);for(let y=0;y<z.length;y+=1)z[y].d();u=!1,Pe(M)}}}function lt(l,e,t){let a;const s=Be([]);Ne(l,s,$=>t(0,a=$)),ue(async()=>{try{const o=await(await fetch("/api/loadLeaderboard")).json();console.log(o);const f=o.map((N,q)=>({id:q,PlayedGame:N.playedGames,Nickname:N.nickname,Name:N.summonerName,MostChampion:N.mostChampion,WinningPercentage:N.winningPercentage,Kda:N.kda}));s.set(f)}catch($){console.error("Error fetching data:",$)}});let n="PlayedGame",d=!0;function h($){n===$?d=!d:d=!0,n=$,s.update(o=>[...o].sort((f,N)=>{let q=f[$],_=N[$];return $==="WinningPercentage"&&(q=parseFloat(q),_=parseFloat(_)),!isNaN(q)&&!isNaN(_)?d?q-_:_-q:(q=(q==null?void 0:q.toString().toLowerCase())??"",_=(_==null?void 0:_.toString().toLowerCase())??"",q<_?d?-1:1:q>_?d?1:-1:0)}))}return[a,s,h,()=>h("PlayedGame"),()=>h("Nickname"),()=>h("Name"),()=>h("MostChampion"),()=>h("WinningPercentage"),()=>h("Kda")]}class st extends ae{constructor(e){super(),ne(this,e,lt,tt,se,{})}}function at(l){let e,t="기록실",a,s,r,n,d="최근 경기",h,g,v,c,R="순위표",k,w,$;return s=new Qe({}),g=new Ze({}),w=new st({}),{c(){e=E("h2"),e.textContent=t,a=H(),oe(s.$$.fragment),r=H(),n=E("h2"),n.textContent=d,h=H(),oe(g.$$.fragment),v=H(),c=E("h2"),c.textContent=R,k=H(),oe(w.$$.fragment),this.h()},l(o){e=D(o,"H2",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1v3uhvl"&&(e.textContent=t),a=B(o),re(s.$$.fragment,o),r=B(o),n=D(o,"H2",{class:!0,"data-svelte-h":!0}),Q(n)!=="svelte-rutr2d"&&(n.textContent=d),h=B(o),re(g.$$.fragment,o),v=B(o),c=D(o,"H2",{class:!0,"data-svelte-h":!0}),Q(c)!=="svelte-1d8xgq2"&&(c.textContent=R),k=B(o),re(w.$$.fragment,o),this.h()},h(){T(e,"class","svelte-e07spv"),T(n,"class","svelte-e07spv"),T(c,"class","svelte-e07spv")},m(o,f){V(o,e,f),V(o,a,f),ce(s,o,f),V(o,r,f),V(o,n,f),V(o,h,f),ce(g,o,f),V(o,v,f),V(o,c,f),V(o,k,f),ce(w,o,f),$=!0},p:J,i(o){$||(he(s.$$.fragment,o),he(g.$$.fragment,o),he(w.$$.fragment,o),$=!0)},o(o){fe(s.$$.fragment,o),fe(g.$$.fragment,o),fe(w.$$.fragment,o),$=!1},d(o){o&&(m(e),m(a),m(r),m(n),m(h),m(v),m(c),m(k)),de(s,o),de(g,o),de(w,o)}}}class ct extends ae{constructor(e){super(),ne(this,e,null,at,se,{})}}export{ct as component};