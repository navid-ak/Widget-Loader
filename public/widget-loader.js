var myLibrary=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function o(){}n.r(e),n.d(e,"configManually",(function(){return D})),n.d(e,"toggleManualConfig",(function(){return F})),n.d(e,"toggleShowWidget",(function(){return G}));function r(t){return t()}function a(){return Object.create(null)}function i(t){t.forEach(r)}function l(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}new Set;function s(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}new Set;let h;function $(t){h=t}const b=[],y=[],w=[],_=[],v=Promise.resolve();let S=!1;function x(){S||(S=!0,v.then(O))}function k(t){w.push(t)}let C=!1;const I=new Set;function O(){if(!C){C=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];$(e),j(e.$$)}for(b.length=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];I.has(e)||(I.add(e),e())}w.length=0}while(b.length);for(;_.length;)_.pop()();S=!1,C=!1,I.clear()}}function j(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const A=new Set;function E(t,e){t&&t.i&&(A.delete(t),t.i(e))}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let M;function T(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e,n,u,c,s,f=[-1]){const g=h;$(t);const p=e.props||{},m=t.$$={fragment:null,ctx:null,props:s,update:o,not_equal:c,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:a(),dirty:f,skip_bound:!1};let y=!1;if(m.ctx=n?n(t,p,(e,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&c(m.ctx[e],m.ctx[e]=r)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](r),y&&function(t,e){-1===t.$$.dirty[0]&&(b.push(t),x(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],m.update(),y=!0,i(m.before_update),m.fragment=!!u&&u(m.ctx),e.target){if(e.hydrate){const t=(w=e.target,Array.from(w.childNodes));m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();e.intro&&E(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:a,on_destroy:u,after_update:c}=t.$$;o&&o.m(e,n),k(()=>{const e=a.map(r).filter(l);u?u.push(...e):i(e),t.$$.on_mount=[]}),c.forEach(k)}(t,e.target,e.anchor),O()}var w;$(g)}"function"==typeof HTMLElement&&(M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){T(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class P{$destroy(){T(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function N(t){let e,n,r;return{c(){e=g("p"),n=p("Hello "),r=p(t[0])},m(t,o){f(t,e,o),s(e,n),s(e,r)},p(t,[e]){var n,o;1&e&&(n=r,o=""+(o=t[0]),n.wholeText!==o&&(n.data=o))},i:o,o:o,d(t){t&&d(e)}}}function q(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}var H=class extends P{constructor(t){super(),W(this,t,q,N,u,{name:0})}};function L(t){let e,n;return{c(){e=g("img"),m(e,"alt",""),e.src!==(n="./favicon.png")&&m(e,"src","./favicon.png")},m(t,n){f(t,e,n)},p:o,i:o,o:o,d(t){t&&d(e)}}}var B=class extends P{constructor(t){super(),W(this,t,null,L,u,{})}};function z(){let t=Array.prototype.slice.call(document.getElementsByTagName("div"),0),e=/^widget-id-/;t.forEach(t=>{if(e.test(t.id))if("image"==t.getAttribute("data-widget-type"))new B({target:t});else if("hello-world"==t.getAttribute("data-widget-type")){var n;n=t.getAttribute("data-widget-name")?t.getAttribute("data-widget-name"):"world",new H({target:t,props:{name:n}})}})}function D(){localStorage.getItem("manualConfig")||window.localStorage.setItem("manualConfig","false"),localStorage.getItem("showWidget")||window.localStorage.setItem("showWidget","false")}function F(){let t;t="true"!=localStorage.getItem("manualConfig"),window.localStorage.removeItem("manualConfig"),window.localStorage.setItem("manualConfig",t)}function G(){let t;t="true"!=localStorage.getItem("showWidget"),window.localStorage.removeItem("showWidget"),window.localStorage.setItem("showWidget",t)}"false"!=localStorage.getItem("manualConfig")&&localStorage.getItem("manualConfig")?"true"==localStorage.getItem("showWidget")&&z():z()}]);
//# sourceMappingURL=widget-loader.js.map