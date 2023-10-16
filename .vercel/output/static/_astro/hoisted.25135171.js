import{_ as a}from"./astro-assets-services.5d54009f.js";function V(t,e){t.classList.toggle(e)}function C(t,e){return t.classList.contains(e)}function T(){return C(document.documentElement,"dark")}const{replace:$}="",B=/[&<>'"]/g,F={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},U=t=>F[t],X=t=>$.call(t,B,U);function dt(t){return!!t&&typeof t=="object"&&typeof t.then=="function"}async function*Y(t){const e=t.getReader();try{for(;;){const{done:n,value:o}=await e.read();if(n)return;yield o}}finally{e.releaseLock()}}const ut=X;class S extends Uint8Array{}Object.defineProperty(S.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});class v extends String{get[Symbol.toStringTag](){return"HTMLString"}}const j=t=>t instanceof v?t:typeof t=="string"?new v(t):t;function ft(t){return Object.prototype.toString.call(t)==="[object HTMLString]"}function G(t){return new S(t)}function k(t){return typeof t.getReader=="function"}async function*A(t){if(k(t))for await(const e of Y(t))yield y(e);else for await(const e of t)yield y(e)}function*K(t){for(const e of t)yield y(e)}function y(t){if(t&&typeof t=="object"){if(t instanceof Uint8Array)return G(t);if(t instanceof Response&&t.body){const e=t.body;return A(e)}else{if(typeof t.then=="function")return Promise.resolve(t).then(e=>y(e));if(Symbol.iterator in t)return K(t);if(Symbol.asyncIterator in t||k(t))return A(t)}}return j(t)}const mt=Symbol.for("astro:fragment"),pt=Symbol.for("astro:renderer");new TextEncoder;new TextDecoder;function ht(t){return!!t&&typeof t=="object"&&"render"in t&&typeof t.render=="function"}function g({globResult:t,contentDir:e}){const n={};for(const o in t){const c=o.replace(new RegExp(`^${e}`),"").split("/");if(c.length<=1)continue;const l=c[0];n[l]??={},n[l][o]=t[o]}return n}const _="/src/content/",R=Object.assign({"/src/content/post/cover-image/index.md":()=>a(()=>import("./index.344b8558.js"),[]),"/src/content/post/draft-post.md":()=>a(()=>import("./draft-post.9391b0fe.js"),[]),"/src/content/post/hello-world/index.mdx":()=>a(()=>import("./index.f8c5067b.js"),[]),"/src/content/post/long-title.md":()=>a(()=>import("./long-title.690993ab.js"),[]),"/src/content/post/markdown-elements/index.md":()=>a(()=>import("./index.b2008528.js"),[]),"/src/content/post/missing-content.md":()=>a(()=>import("./missing-content.f156d3ff.js"),[]),"/src/content/post/social-image.md":()=>a(()=>import("./social-image.c86289e7.js"),[]),"/src/content/post/unique-tags.md":()=>a(()=>import("./unique-tags.c0dfb798.js"),[]),"/src/content/post/webmentions/index.md":()=>a(()=>import("./index.a1abeb2e.js"),[]),"/src/content/post/テスト記事.md":()=>a(()=>import("./テスト記事.708d09cc.js"),[])});g({globResult:R,contentDir:_});const P=Object.assign({});g({globResult:P,contentDir:_});g({globResult:{...R,...P},contentDir:_});const W=Object.assign({"/src/content/post/cover-image/index.md":()=>a(()=>import("./index.122ab242.js"),["_astro/index.122ab242.js","_astro/astro-assets-services.5d54009f.js"]),"/src/content/post/draft-post.md":()=>a(()=>import("./draft-post.6fb2b464.js"),["_astro/draft-post.6fb2b464.js","_astro/astro-assets-services.5d54009f.js"]),"/src/content/post/hello-world/index.mdx":()=>a(()=>import("./index.d70b4999.js"),["_astro/index.d70b4999.js","_astro/astro-assets-services.5d54009f.js"]),"/src/content/post/long-title.md":()=>a(()=>import("./long-title.18bd546e.js"),["_astro/long-title.18bd546e.js","_astro/astro-assets-services.5d54009f.js"]),"/src/content/post/markdown-elements/index.md":()=>a(()=>import("./index.6e97871b.js"),["_astro/index.6e97871b.js","_astro/astro-assets-services.5d54009f.js"]),"/src/content/post/missing-content.md":()=>a(()=>import("./missing-content.4fe635dd.js"),["_astro/missing-content.4fe635dd.js","_astro/astro-assets-services.5d54009f.js"]),"/src/content/post/social-image.md":()=>a(()=>import("./social-image.579f1c0c.js"),["_astro/social-image.579f1c0c.js","_astro/astro-assets-services.5d54009f.js"]),"/src/content/post/unique-tags.md":()=>a(()=>import("./unique-tags.b8866363.js"),["_astro/unique-tags.b8866363.js","_astro/astro-assets-services.5d54009f.js"]),"/src/content/post/webmentions/index.md":()=>a(()=>import("./index.60017053.js"),["_astro/index.60017053.js","_astro/astro-assets-services.5d54009f.js"]),"/src/content/post/テスト記事.md":()=>a(()=>import("./テスト記事.effa84aa.js"),["_astro/テスト記事.effa84aa.js","_astro/astro-assets-services.5d54009f.js"])});g({globResult:W,contentDir:_});const N="https://astro-cactus.chriswilliams.dev/";new URL(N).hostname;class z extends HTMLElement{constructor(){super();const e=document.getElementById("main-header"),n=document.getElementById("toggle-navigation-menu");let o=!1;function s(){V(e,"menu-open"),o=!o,n.setAttribute("aria-expanded",o.toString())}n.addEventListener("click",s),document.addEventListener("astro:after-swap",()=>{o&&s()})}}customElements.define("mobile-button",z);const J=t=>history.state&&history.replaceState(t,""),b=!!document.startViewTransition,E=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),x=t=>location.pathname===t.pathname&&location.search===t.search,I=t=>document.dispatchEvent(new Event(t)),M=()=>I("astro:page-load"),Q=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.setAttribute("style","position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px"),document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},p="data-astro-transition-persist",Z=new DOMParser;let h=0;history.state?(h=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):E()&&history.replaceState({index:h,scrollX,scrollY,intraPage:!1},"");const tt=(t,e)=>{let n=!1,o=!1;return(...s)=>{if(n){o=!0;return}t(...s),n=!0,setTimeout(()=>{o&&(o=!1,t(...s)),n=!1},e)}};async function et(t){try{const e=await fetch(t),n=e.headers.get("content-type")?.replace(/;.*$/,"");return n!=="text/html"&&n!=="application/xhtml+xml"?null:{html:await e.text(),redirected:e.redirected?e.url:void 0,mediaType:n}}catch{return null}}function O(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function D(){for(const t of document.scripts)t.dataset.astroExec=""}function nt(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=document.createElement("script");n.innerHTML=e.innerHTML;for(const o of e.attributes){if(o.name==="src"){const s=new Promise(c=>{n.onload=c});t=t.then(()=>s)}n.setAttribute(o.name,o.value)}n.dataset.astroExec="",e.replaceWith(n)}return t}function ot(t){const e=t.effect;return!e||!(e instanceof KeyframeEffect)||!e.target?!1:window.getComputedStyle(e.target,e.pseudoElement).animationIterationCount==="infinite"}const H=(t,e,n)=>{const o=!x(t);t.href!==location.href&&(e?history.replaceState({...history.state},"",t.href):(history.replaceState({...history.state,intraPage:n},""),history.pushState({index:++h,scrollX,scrollY},"",t.href)),o&&scrollTo({left:0,top:0,behavior:"instant"})),t.hash?location.href=t.href:scrollTo({left:0,top:0,behavior:"instant"})};async function L(t,e,n,o,s){const c=r=>{const d=r.getAttribute(p),m=d&&t.head.querySelector(`[${p}="${d}"]`);if(m)return m;if(r.matches("link[rel=stylesheet]")){const i=r.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${i}"]`)}return null},l=()=>{const r=document.documentElement,d=[...r.attributes].filter(({name:i})=>(r.removeAttribute(i),i.startsWith("data-astro-")));[...t.documentElement.attributes,...d].forEach(({name:i,value:u})=>r.setAttribute(i,u));for(const i of document.scripts)for(const u of t.scripts)if(!i.src&&i.textContent===u.textContent||i.src&&i.type===u.type&&i.src===u.src){u.dataset.astroExec="";break}for(const i of Array.from(document.head.children)){const u=c(i);u?u.remove():i.remove()}document.head.append(...t.head.children);const m=document.body;document.body.replaceWith(t.body);for(const i of m.querySelectorAll(`[${p}]`)){const u=i.getAttribute(p),w=document.querySelector(`[${p}="${u}"]`);w&&w.replaceWith(i)}o?scrollTo(o.scrollX,o.scrollY):H(e,n.history==="replace",!1),I("astro:after-swap")},f=[];for(const r of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${p}="${r.getAttribute(p)}"], link[rel=stylesheet][href="${r.getAttribute("href")}"]`)){const d=document.createElement("link");d.setAttribute("rel","preload"),d.setAttribute("as","style"),d.setAttribute("href",r.getAttribute("href")),f.push(new Promise(m=>{["load","error"].forEach(i=>d.addEventListener(i,m)),document.head.append(d)}))}if(f.length&&await Promise.all(f),s==="animate"){const r=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const d=document.getAnimations().filter(u=>!r.includes(u)&&!ot(u)),m=Promise.all(d.map(u=>u.finished)),i=()=>{l(),document.documentElement.dataset.astroTransitionFallback="new"};await m,i()}else l()}async function q(t,e,n,o){let s;const c=e.href,l=await et(c);if(l===null){location.href=c;return}l.redirected&&(e=new URL(l.redirected));const f=Z.parseFromString(l.html,l.mediaType);if(f.querySelectorAll("noscript").forEach(r=>r.remove()),!f.querySelector('[name="astro-view-transitions-enabled"]')){location.href=c;return}o||history.replaceState({...history.state,scrollX,scrollY},""),document.documentElement.dataset.astroTransition=t,b?s=document.startViewTransition(()=>L(f,e,n,o)).finished:s=L(f,e,n,o,O());try{await s}finally{await nt(),D(),M(),Q()}}function rt(t,e){if(!E()){location.href=t;return}const n=new URL(t,location.href);location.origin===n.origin&&x(n)?H(n,e?.history==="replace",!0):q("forward",n,e??{})}if(b||O()!=="none"){addEventListener("popstate",e=>{if(!E()&&e.state){history.scrollRestoration&&(history.scrollRestoration="manual"),location.reload();return}if(e.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const n=history.state;if(n.intraPage)scrollTo(n.scrollX,n.scrollY);else{const o=n.index,s=o>h?"forward":"back";h=o,q(s,new URL(location.href),{},n)}}),addEventListener("load",M);const t=()=>{J({...history.state,scrollX,scrollY})};"onscrollend"in window?addEventListener("scrollend",t):addEventListener("scroll",tt(t,300)),D()}function st(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function it(t){if(document.querySelector(`link[rel=prefetch][href="${t}"]`))return;if(navigator.connection){let n=navigator.connection;if(n.saveData||/(2|3)g/.test(n.effectiveType||""))return}let e=document.createElement("link");e.setAttribute("rel","prefetch"),e.setAttribute("href",t),document.head.append(e)}(b||st()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;e instanceof Element&&e.tagName!=="A"&&(e=e.closest("a")),!(!e||!(e instanceof HTMLAnchorElement)||e.dataset.astroReload!==void 0||e.hasAttribute("download")||!e.href||e.target&&e.target!=="_self"||e.origin!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented)&&(t.preventDefault(),rt(e.href,{history:e.dataset.astroHistory==="replace"?"replace":"auto"}))}),["mouseenter","touchstart","focus"].forEach(t=>{document.addEventListener(t,e=>{if(e.target instanceof HTMLAnchorElement){let n=e.target;n.origin===location.origin&&n.pathname!==location.pathname&&E()&&it(n.pathname)}},{passive:!0,capture:!0})}));class at extends HTMLElement{constructor(){super();const e=this.querySelector("button"),n=document.documentElement;e&&(e.setAttribute("aria-pressed",String(T())),new MutationObserver(s=>{for(const c of s)if(c.type==="attributes"&&c.attributeName==="class"){const l=c.target.classList.contains("dark");e.setAttribute("aria-pressed",String(l))}}).observe(n,{attributeFilter:["class"]}),e.addEventListener("click",s=>{if(s.currentTarget instanceof HTMLButtonElement){let c=T(),l=new CustomEvent("theme-change",{detail:{theme:c?"light":"dark"}});document.dispatchEvent(l)}}))}}customElements.define("theme-toggle",at);class ct extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),n=this.querySelector("button[data-close-modal]"),o=this.querySelector("dialog"),s=this.querySelector(".dialog-frame"),c=r=>{("href"in(r.target||{})||document.body.contains(r.target)&&!s.contains(r.target))&&f()},l=r=>{o.showModal(),this.querySelector("input")?.focus(),r?.stopPropagation(),window.addEventListener("click",c)},f=()=>{o.open&&(o.close(),window.removeEventListener("click",c))};e.addEventListener("click",l),e.disabled=!1,n.addEventListener("click",f),window.addEventListener("keydown",r=>{r.key==="/"&&!o.open&&(l(),r.preventDefault())}),window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(d=>setTimeout(d,1)))(async()=>{const{PagefindUI:d}=await a(()=>import("./ui-core.bf69c772.js"),["_astro/ui-core.bf69c772.js","_astro/astro-assets-services.5d54009f.js"]);new d({element:"#cactus__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,showSubResults:!0})})}),document.addEventListener("astro:after-swap",()=>{document.querySelector(".pagefind-ui__search-clear")?.click(),f()})}}customElements.define("site-search",ct);export{mt as F,v as H,pt as R,ht as a,dt as b,ut as e,ft as i,j as m,y as u};