import { d as slot } from './index-Vnmz0EKg.js';

function Banner($$payload) {
  $$payload.out += `<div class="banner svelte-1jzq2ph"><img src="https://t3.ftcdn.net/jpg/04/32/77/02/360_F_432770230_9V0PISRkMirEPivH0YlUB7hu0VxYopxo.jpg" alt="Logo" class="logo svelte-1jzq2ph"> <input type="text" placeholder="Search" class="search svelte-1jzq2ph"> <div class="buttons svelte-1jzq2ph"><div class="button svelte-1jzq2ph">Log In</div> <div class="button svelte-1jzq2ph">Sign Up</div> <div class="button svelte-1jzq2ph">Cart</div></div></div>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-145l7f2"><p><a href="/" class="svelte-145l7f2">Home</a> | <a href="/contact" class="svelte-145l7f2">Contact Us</a> | <a href="/follow" class="svelte-145l7f2">Follow Us</a> | <a href="/legal" class="svelte-145l7f2">Legal &amp; Policy</a></p></footer>`;
}
function _layout($$payload, $$props) {
  Banner($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DDpapxeW.js.map
