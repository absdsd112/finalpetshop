import { e as ensure_array_like } from './index-Vnmz0EKg.js';
import { a as attr } from './attributes-YVTFWYF4.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload) {
  let products = [
    {
      id: 1,
      name: "Premium Dog Food",
      price: 39.99,
      image: "premium-dog-food.jpg"
    },
    {
      id: 2,
      name: "Organic Dog Treats",
      price: 19.99,
      image: "organic-dog-treats.jpg"
    }
    // Add more products as needed
  ];
  const each_array = ensure_array_like(products);
  $$payload.out += `<nav><a href="/">Home</a></nav> <h1>Woof Shop</h1> <section class="product-list"><h2>Products for Dogs</h2> <div class="products"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let product = each_array[$$index];
    $$payload.out += `<div class="product-card"><img${attr("src", product.image)}${attr("alt", product.name)}> <h3>${escape_html(product.name)}</h3> <p>$${escape_html(product.price)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BX0HFug-.js.map
