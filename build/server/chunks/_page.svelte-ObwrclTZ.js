import { e as ensure_array_like } from './index-Vnmz0EKg.js';
import { a as attr } from './attributes-YVTFWYF4.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload) {
  let products = [
    {
      id: 4,
      name: "Dry Cat Food",
      price: 27.99,
      image: "dry-cat-food.jpg"
    },
    {
      id: 5,
      name: "Wet Cat Food",
      price: 22.99,
      image: "wet-cat-food.jpg"
    },
    {
      id: 6,
      name: "Cat Treats",
      price: 8.99,
      image: "cat-treats.jpg"
    }
    // Add more products as needed
  ];
  const each_array = ensure_array_like(products);
  $$payload.out += `<nav><a href="/">Home</a></nav> <h1>Meow Shop</h1> <section class="product-list"><h2>Products for Cats</h2> <div class="products"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let product = each_array[$$index];
    $$payload.out += `<div class="product-card"><img${attr("src", product.image)}${attr("alt", product.name)}> <h3>${escape_html(product.name)}</h3> <p>$${escape_html(product.price)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-ObwrclTZ.js.map
