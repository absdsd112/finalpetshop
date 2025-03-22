<script>
    import { onMount } from 'svelte';
    import { cart, removeFromCart } from '$lib/stores/cart';store';
  
    let open = true;
    let items = [];
  
    onMount(() => {
      cart.subscribe(value => {
        items = value;
      });
    });
  
    const totalItems = () => items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = () => items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    function onCheckout() {
      console.log("Checkout clicked");
    }
  
    function onRemoveItem(id) {
      removeFromCart(id);
    }
  
    function onUpdateQuantity(id, quantity) {
      if (quantity > 0) {
        const item = items.find(item => item.id === id);
        if (item) {
          item.quantity = quantity;
          cart.set([...items]);
        }
      }
    }
  </script>
  
  <style>
    .dropdown-menu {
      position: relative;
    }
  
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 200px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
  
    .dropdown-menu:hover .dropdown-content {
      display: block;
    }
  
    .button {
      background-color: #FF7043;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      cursor: pointer;
    }
  
    .button:hover {
      background-color: #FF5722;
    }
  
    .badge {
      background-color: red;
      color: white;
      border-radius: 50%;
      padding: 0.2rem 0.5rem;
      position: absolute;
      top: -10px;
      right: -10px;
    }
  
    .cart-item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
  
    .cart-item img {
      width: 50px;
      height: auto;
      margin-right: 1rem;
    }
  
    .cart-item div {
      flex: 1;
    }
  
    .cart-item button {
      background: none;
      border: none;
      color: red;
      cursor: pointer;
    }
  </style>
  
  <div class="dropdown-menu">
    <button class="button">
      Cart
      {#if totalItems() > 0}
        <span class="badge">{totalItems()}</span>
      {/if}
    </button>
    <div class="dropdown-content">
      <h3>Your Cart</h3>
      {#if items.length === 0}
        <p>Your cart is empty.</p>
      {:else}
        <div>
          {#each items as item (item.id)}
            <div class="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <div>
                  <button on:click={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                  <span>{item.quantity}</span>
                  <button on:click={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button on:click={() => onRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          {/each}
        </div>
        <div>
          <p>Subtotal: ${subtotal().toFixed(2)}</p>
          <button class="button" on:click={onCheckout}>Checkout</button>
        </div>
      {/if}
    </div>
  </div>