import{a6 as f,a7 as _,a8 as b,C as y,a9 as q,aa as x,ab as B,Q as O}from"./rNBbjRlv.js";let w=!1;function T(){w||(w=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const a of r.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function E(r){var t=b,a=y;f(null),_(null);try{return r()}finally{f(t),_(a)}}function D(r,t,a,n=a){r.addEventListener(t,()=>E(a));const i=r.__on_r;i?r.__on_r=()=>{i(),n(!0)}:r.__on_r=()=>n(!0),T()}const M=new Set,N=new Set;function W(r,t,a,n={}){function i(e){if(n.capture||m.call(t,e),!e.cancelBubble)return E(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?x(()=>{t.addEventListener(r,i,n)}):t.addEventListener(r,i,n),i}function Q(r,t,a,n,i){var e={capture:n,passive:i},o=W(r,t,a,e);(t===document.body||t===window||t===document)&&q(()=>{t.removeEventListener(r,o,e)})}function m(r){var g;var t=this,a=t.ownerDocument,n=r.type,i=((g=r.composedPath)==null?void 0:g.call(r))||[],e=i[0]||r.target,o=0,d=r.__root;if(d){var l=i.indexOf(d);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var p=i.indexOf(t);if(p===-1)return;l<=p&&(o=l)}if(e=i[o]||r.target,e!==t){B(r,"currentTarget",{configurable:!0,get(){return e||a}});var L=b,k=y;f(null),_(null);try{for(var s,h=[];e!==null;){var v=e.assignedSlot||e.parentNode||e.host||null;try{var u=e["__"+n];if(u!=null&&(!e.disabled||r.target===e))if(O(u)){var[P,...S]=u;P.apply(e,[r,...S])}else u.call(e,r)}catch(c){s?h.push(c):s=c}if(r.cancelBubble||v===t||v===null)break;e=v}if(s){for(let c of h)queueMicrotask(()=>{throw c});throw s}}finally{r.__root=t,delete r.currentTarget,f(L),_(k)}}}export{T as a,M as b,Q as e,m as h,D as l,N as r};
