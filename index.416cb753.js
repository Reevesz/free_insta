(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function v(){}function Ut(e,t){for(const n in t)e[n]=t[n];return e}function Xt(e){return e()}function Dt(){return Object.create(null)}function F(e){e.forEach(Xt)}function st(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let G;function ot(e,t){return G||(G=document.createElement("a")),G.href=t,e===G.href}function ne(e){return Object.keys(e).length===0}function re(e,...t){if(e==null)return v;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function u(e,t){e.appendChild(t)}function L(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function lt(e){return document.createTextNode(e)}function p(){return lt(" ")}function it(){return lt("")}function ct(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function oe(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}function Q(e,t){return new e(t)}let z;function M(e){z=e}function ut(){if(!z)throw new Error("Function called outside component initialization");return z}function le(e){ut().$$.after_update.push(e)}function ie(e){ut().$$.on_destroy.push(e)}function ce(){const e=ut();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=oe(t,n,{cancelable:s});return r.slice().forEach(f=>{f.call(e,i)}),!i.defaultPrevented}return!0}}function Ht(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(s=>s.call(this,t))}const H=[],Mt=[],W=[],zt=[],Yt=Promise.resolve();let nt=!1;function Gt(){nt||(nt=!0,Yt.then(Kt))}function ft(){return Gt(),Yt}function rt(e){W.push(e)}const et=new Set;let K=0;function Kt(){const e=z;do{for(;K<H.length;){const t=H[K];K++,M(t),ue(t.$$)}for(M(null),H.length=0,K=0;Mt.length;)Mt.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];et.has(n)||(et.add(n),n())}W.length=0}while(H.length);for(;zt.length;)zt.pop()();nt=!1,et.clear(),M(e)}function ue(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(rt)}}const J=new Set;let C;function at(){C={r:0,c:[],p:C}}function dt(){C.r||F(C.c),C=C.p}function A(e,t){e&&e.i&&(J.delete(e),e.i(t))}function N(e,t,n,s){if(e&&e.o){if(J.has(e))return;J.add(e),C.c.push(()=>{J.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function Wt(e,t){const n={},s={},r={$$scope:1};let i=e.length;for(;i--;){const f=e[i],l=t[i];if(l){for(const o in f)o in l||(s[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);e[i]=l}else for(const o in f)r[o]=1}for(const f in s)f in n||(n[f]=void 0);return n}function Jt(e){return typeof e=="object"&&e!==null?e:{}}function B(e){e&&e.c()}function R(e,t,n,s){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),s||rt(()=>{const f=e.$$.on_mount.map(Xt).filter(st);e.$$.on_destroy?e.$$.on_destroy.push(...f):F(f),e.$$.on_mount=[]}),i.forEach(rt)}function I(e,t){const n=e.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(H.push(e),Gt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(e,t,n,s,r,i,f,l=[-1]){const o=z;M(e);const c=e.$$={fragment:null,ctx:[],props:i,update:v,not_equal:r,bound:Dt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:Dt(),dirty:l,skip_bound:!1,root:t.target||o.$$.root};f&&f(c.root);let m=!1;if(c.ctx=n?n(e,t.props||{},(g,$,...b)=>{const w=b.length?b[0]:$;return c.ctx&&r(c.ctx[g],c.ctx[g]=w)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](w),m&&fe(e,g)),$}):[],c.update(),m=!0,F(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const g=se(t.target);c.fragment&&c.fragment.l(g),g.forEach(S)}else c.fragment&&c.fragment.c();t.intro&&A(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),Kt()}M(o)}class U{$destroy(){I(this,1),this.$destroy=v}$on(t,n){if(!st(n))return v;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const P=[];function Qt(e,t){return{subscribe:Vt(e,t).subscribe}}function Vt(e,t=v){let n;const s=new Set;function r(l){if(D(e,l)&&(e=l,n)){const o=!P.length;for(const c of s)c[1](),P.push(c,e);if(o){for(let c=0;c<P.length;c+=2)P[c][0](P[c+1]);P.length=0}}}function i(l){r(l(e))}function f(l,o=v){const c=[l,o];return s.add(c),s.size===1&&(n=t(r)||v),l(e),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:f}}function Zt(e,t,n){const s=!Array.isArray(e),r=s?[e]:e,i=t.length<2;return Qt(n,f=>{let l=!1;const o=[];let c=0,m=v;const g=()=>{if(c)return;m();const b=t(s?o[0]:o,f);i?f(b):m=st(b)?b:v},$=r.map((b,w)=>re(b,x=>{o[w]=x,c&=~(1<<w),l&&g()},()=>{c|=1<<w}));return l=!0,g(),function(){F($),m()}})}function ae(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,s,r,i,f=[],l="",o=e.split("/");for(o[0]||o.shift();r=o.shift();)n=r[0],n==="*"?(f.push("wild"),l+="/(.*)"):n===":"?(s=r.indexOf("?",1),i=r.indexOf(".",1),f.push(r.substring(1,~s?s:~i?i:r.length)),l+=!!~s&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(l+=(~s?"?":"")+"\\"+r.substring(i))):l+="/"+r;return{keys:f,pattern:new RegExp("^"+l+(t?"(?=$|/)":"/?$"),"i")}}function de(e){let t,n,s;const r=[e[2]];var i=e[0];function f(l){let o={};for(let c=0;c<r.length;c+=1)o=Ut(o,r[c]);return{props:o}}return i&&(t=Q(i,f()),t.$on("routeEvent",e[7])),{c(){t&&B(t.$$.fragment),n=it()},m(l,o){t&&R(t,l,o),L(l,n,o),s=!0},p(l,o){const c=o&4?Wt(r,[Jt(l[2])]):{};if(i!==(i=l[0])){if(t){at();const m=t;N(m.$$.fragment,1,0,()=>{I(m,1)}),dt()}i?(t=Q(i,f()),t.$on("routeEvent",l[7]),B(t.$$.fragment),A(t.$$.fragment,1),R(t,n.parentNode,n)):t=null}else i&&t.$set(c)},i(l){s||(t&&A(t.$$.fragment,l),s=!0)},o(l){t&&N(t.$$.fragment,l),s=!1},d(l){l&&S(n),t&&I(t,l)}}}function _e(e){let t,n,s;const r=[{params:e[1]},e[2]];var i=e[0];function f(l){let o={};for(let c=0;c<r.length;c+=1)o=Ut(o,r[c]);return{props:o}}return i&&(t=Q(i,f()),t.$on("routeEvent",e[6])),{c(){t&&B(t.$$.fragment),n=it()},m(l,o){t&&R(t,l,o),L(l,n,o),s=!0},p(l,o){const c=o&6?Wt(r,[o&2&&{params:l[1]},o&4&&Jt(l[2])]):{};if(i!==(i=l[0])){if(t){at();const m=t;N(m.$$.fragment,1,0,()=>{I(m,1)}),dt()}i?(t=Q(i,f()),t.$on("routeEvent",l[6]),B(t.$$.fragment),A(t.$$.fragment,1),R(t,n.parentNode,n)):t=null}else i&&t.$set(c)},i(l){s||(t&&A(t.$$.fragment,l),s=!0)},o(l){t&&N(t.$$.fragment,l),s=!1},d(l){l&&S(n),t&&I(t,l)}}}function he(e){let t,n,s,r;const i=[_e,de],f=[];function l(o,c){return o[1]?0:1}return t=l(e),n=f[t]=i[t](e),{c(){n.c(),s=it()},m(o,c){f[t].m(o,c),L(o,s,c),r=!0},p(o,[c]){let m=t;t=l(o),t===m?f[t].p(o,c):(at(),N(f[m],1,1,()=>{f[m]=null}),dt(),n=f[t],n?n.p(o,c):(n=f[t]=i[t](o),n.c()),A(n,1),n.m(s.parentNode,s))},i(o){r||(A(n),r=!0)},o(o){N(n),r=!1},d(o){f[t].d(o),o&&S(s)}}}function Bt(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let s="";return n>-1&&(s=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:s}}const _t=Qt(null,function(t){t(Bt());const n=()=>{t(Bt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Zt(_t,e=>e.location);Zt(_t,e=>e.querystring);const Tt=Vt(void 0);async function pe(e){if(!e||e.length<1||e.charAt(0)!="/"&&e.indexOf("#/")!==0)throw Error("Invalid parameter location");await ft(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(e.charAt(0)=="#"?"":"#")+e}async function te(){await ft(),window.history.back()}function me(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function ge(e,t,n){let{routes:s={}}=t,{prefix:r=""}=t,{restoreScrollState:i=!1}=t;class f{constructor(d,h){if(!h||typeof h!="function"&&(typeof h!="object"||h._sveltesparouter!==!0))throw Error("Invalid component object");if(!d||typeof d=="string"&&(d.length<1||d.charAt(0)!="/"&&d.charAt(0)!="*")||typeof d=="object"&&!(d instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:E,keys:k}=ae(d);this.path=d,typeof h=="object"&&h._sveltesparouter===!0?(this.component=h.component,this.conditions=h.conditions||[],this.userData=h.userData,this.props=h.props||{}):(this.component=()=>Promise.resolve(h),this.conditions=[],this.props={}),this._pattern=E,this._keys=k}match(d){if(r){if(typeof r=="string")if(d.startsWith(r))d=d.substr(r.length)||"/";else return null;else if(r instanceof RegExp){const O=d.match(r);if(O&&O[0])d=d.substr(O[0].length)||"/";else return null}}const h=this._pattern.exec(d);if(h===null)return null;if(this._keys===!1)return h;const E={};let k=0;for(;k<this._keys.length;){try{E[this._keys[k]]=decodeURIComponent(h[k+1]||"")||null}catch{E[this._keys[k]]=null}k++}return E}async checkConditions(d){for(let h=0;h<this.conditions.length;h++)if(!await this.conditions[h](d))return!1;return!0}}const l=[];s instanceof Map?s.forEach((_,d)=>{l.push(new f(d,_))}):Object.keys(s).forEach(_=>{l.push(new f(_,s[_]))});let o=null,c=null,m={};const g=ce();async function $(_,d){await ft(),g(_,d)}let b=null,w=null;i&&(w=_=>{_.state&&(_.state.__svelte_spa_router_scrollY||_.state.__svelte_spa_router_scrollX)?b=_.state:b=null},window.addEventListener("popstate",w),le(()=>{me(b)}));let x=null,j=null;const q=_t.subscribe(async _=>{x=_;let d=0;for(;d<l.length;){const h=l[d].match(_.location);if(!h){d++;continue}const E={route:l[d].path,location:_.location,querystring:_.querystring,userData:l[d].userData,params:h&&typeof h=="object"&&Object.keys(h).length?h:null};if(!await l[d].checkConditions(E)){n(0,o=null),j=null,$("conditionsFailed",E);return}$("routeLoading",Object.assign({},E));const k=l[d].component;if(j!=k){k.loading?(n(0,o=k.loading),j=k,n(1,c=k.loadingParams),n(2,m={}),$("routeLoaded",Object.assign({},E,{component:o,name:o.name,params:c}))):(n(0,o=null),j=null);const O=await k();if(_!=x)return;n(0,o=O&&O.default||O),j=k}h&&typeof h=="object"&&Object.keys(h).length?n(1,c=h):n(1,c=null),n(2,m=l[d].props),$("routeLoaded",Object.assign({},E,{component:o,name:o.name,params:c})).then(()=>{Tt.set(c)});return}n(0,o=null),j=null,Tt.set(void 0)});ie(()=>{q(),w&&window.removeEventListener("popstate",w)});function X(_){Ht.call(this,e,_)}function Y(_){Ht.call(this,e,_)}return e.$$set=_=>{"routes"in _&&n(3,s=_.routes),"prefix"in _&&n(4,r=_.prefix),"restoreScrollState"in _&&n(5,i=_.restoreScrollState)},e.$$.update=()=>{e.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[o,c,m,s,r,i,X,Y]}class be extends U{constructor(t){super(),T(this,t,ge,he,D,{routes:3,prefix:4,restoreScrollState:5})}}function ye(e){let t,n,s,r,i,f,l,o,c,m,g,$,b,w,x,j,q,X,Y,_,d,h,E,k,O,ht,pt,mt,gt,bt,yt,wt,$t,vt,kt,xt,Et,jt,Ot,At,St,Ct,Nt,Lt,qt,Pt,Rt,It,V,Z,Ft;return{c(){t=a("main"),n=a("img"),r=p(),i=a("h1"),i.textContent="Free Instagram Generator",f=p(),l=a("br"),o=p(),c=a("br"),m=p(),g=a("br"),$=p(),b=a("br"),w=p(),x=a("span"),x.textContent="Generate",j=p(),q=a("br"),X=p(),Y=a("br"),_=p(),d=a("br"),h=p(),E=a("br"),k=lt(`npm \r
    `),O=a("br"),ht=p(),pt=a("br"),mt=p(),gt=a("br"),bt=p(),yt=a("br"),wt=p(),$t=a("br"),vt=p(),kt=a("br"),xt=p(),Et=a("br"),jt=p(),Ot=a("br"),At=p(),St=a("br"),Ct=p(),Nt=a("br"),Lt=p(),qt=a("br"),Pt=p(),Rt=a("br"),It=p(),V=a("h2"),V.textContent="github.com/reevesz",y(n,"class","logo"),ot(n.src,s=we)||y(n,"src",s),y(i,"class","title_1"),y(x,"class","genr")},m(tt,ee){L(tt,t,ee),u(t,n),u(t,r),u(t,i),u(t,f),u(t,l),u(t,o),u(t,c),u(t,m),u(t,g),u(t,$),u(t,b),u(t,w),u(t,x),u(t,j),u(t,q),u(t,X),u(t,Y),u(t,_),u(t,d),u(t,h),u(t,E),u(t,k),u(t,O),u(t,ht),u(t,pt),u(t,mt),u(t,gt),u(t,bt),u(t,yt),u(t,wt),u(t,$t),u(t,vt),u(t,kt),u(t,xt),u(t,Et),u(t,jt),u(t,Ot),u(t,At),u(t,St),u(t,Ct),u(t,Nt),u(t,Lt),u(t,qt),u(t,Pt),u(t,Rt),u(t,It),u(t,V),Z||(Ft=ct(x,"click",e[0]),Z=!0)},p:v,i:v,o:v,d(tt){tt&&S(t),Z=!1,Ft()}}}let we="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png";function $e(e){return[()=>{pe("#/roll")}]}class ve extends U{constructor(t){super(),T(this,t,$e,ye,D,{})}}function ke(e){let t,n,s,r,i,f,l,o,c,m,g,$,b,w,x;return{c(){t=a("main"),n=a("h1"),n.textContent="Nokhi irunno ippa kittum",s=p(),r=a("h1"),r.textContent="\u{1F92A}",i=p(),f=a("img"),o=p(),c=a("br"),m=p(),g=a("br"),$=p(),b=a("span"),b.textContent="Back to Home",y(n,"class","svelte-gx6slj"),y(r,"class","lol svelte-gx6slj"),y(f,"id","rick_roll"),ot(f.src,l=xe)||y(f,"src",l),y(f,"class","svelte-gx6slj"),y(c,"class","svelte-gx6slj"),y(g,"class","svelte-gx6slj"),y(b,"id","go_Home"),y(b,"class","svelte-gx6slj"),y(t,"class","svelte-gx6slj")},m(j,q){L(j,t,q),u(t,n),u(t,s),u(t,r),u(t,i),u(t,f),u(t,o),u(t,c),u(t,m),u(t,g),u(t,$),u(t,b),w||(x=ct(b,"click",e[0]),w=!0)},p:v,i:v,o:v,d(j){j&&S(t),w=!1,x()}}}let xe="https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif";function Ee(e){return[()=>{te()}]}class je extends U{constructor(t){super(),T(this,t,Ee,ke,D,{})}}function Oe(e){let t,n,s,r,i,f,l,o,c,m,g,$,b;return{c(){t=a("main"),n=a("h1"),n.textContent="Page Not Found",s=p(),r=a("img"),f=p(),l=a("br"),o=p(),c=a("br"),m=p(),g=a("span"),g.textContent="Back to Home",y(n,"class","svelte-gx6slj"),y(r,"id","rick_roll"),ot(r.src,i=Ae)||y(r,"src",i),y(r,"class","svelte-gx6slj"),y(l,"class","svelte-gx6slj"),y(c,"class","svelte-gx6slj"),y(g,"id","go_Home"),y(g,"class","svelte-gx6slj"),y(t,"class","svelte-gx6slj")},m(w,x){L(w,t,x),u(t,n),u(t,s),u(t,r),u(t,f),u(t,l),u(t,o),u(t,c),u(t,m),u(t,g),$||(b=ct(g,"click",e[0]),$=!0)},p:v,i:v,o:v,d(w){w&&S(t),$=!1,b()}}}let Ae="https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif";function Se(e){return[()=>{te()}]}class Ce extends U{constructor(t){super(),T(this,t,Se,Oe,D,{})}}function Ne(e){let t,n,s;return n=new be({props:{routes:e[0]}}),{c(){t=a("main"),B(n.$$.fragment)},m(r,i){L(r,t,i),R(n,t,null),s=!0},p:v,i(r){s||(A(n.$$.fragment,r),s=!0)},o(r){N(n.$$.fragment,r),s=!1},d(r){r&&S(t),I(n)}}}function Le(e){return[{"/":ve,"/roll":je,"*":Ce}]}class qe extends U{constructor(t){super(),T(this,t,Le,Ne,D,{})}}new qe({target:document.getElementById("app")});
