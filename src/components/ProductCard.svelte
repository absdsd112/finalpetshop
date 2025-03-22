<script>
    import { addToCart } from '../stores/cartStore';
    export let product;
  
    const addToCartHandler = () => {
      addToCart(product);
    };
  </script>
  
  <div class="product-card">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <button on:click={addToCartHandler}>Add to Cart</button>
  </div>
  
  <style>
    .product-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 1rem;
      margin: 1rem;
    }
    button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  </style>