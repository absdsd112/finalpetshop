<script>
  

  let products = [
    { id: 1, name: 'Dog Food', price: 29.99, image: 'dog-food.jpg' },
    { id: 2, name: 'Cat Food', price: 24.99, image: 'cat-food.jpg' }
    // Add more products as needed
  ];

  let currentSection = 'home';
</script>

<style>
  .small-image {
    width: 300px; /* Adjust the width to make the images smaller */
    height: auto;
  }
</style>

<nav>
    <a href="/">Home</a>
    <a href="/pet-shop/woof-shop">Woof Shop</a>
    <a href="/pet-shop/meow-shop">Meow Shop</a>
    <a href="/pet-shop/about">About Us</a>
    <a href="/cart">Cart</a>
</nav>

{#if currentSection === 'home'}
  <div class='home-banner'>
    <div class="banner-text">
      <div class="text-background">
        <h1>Love Starts with Fresh, Healthy Food</h1>
        <h1>And Grows with Every Moment Together...</h1>
      </div>
    </div>
  </div>

  <section class='why-choose-us'>
    <h2>The Reasons for Choosing Us</h2>
    <ul>
      <li>🥩 Meat as the #1 Ingredient</li>
      <li>🍖 Better Flavor for Pets</li>
      <li>🏭 Locally Produced</li>
      <li>🌱 Organic Products</li>
    </ul>
  </section>

  <section class='daily-menu'>
    <h1>Daily Menu for Dogs & Cats</h1>
    <div class='menu-container'>
      <div>
        <h2>Dogs</h2>
        <h2>
          Senior 
          <img class="small-image" src="https://cdn.shopify.com/s/files/1/1410/9922/files/Best_Dog_Foods_-_Product_Review_-_Castor_Pollux_Organix_Organic_Chicken_Brown_Rice_Recipe_Wet_Dog_Food_large.jpg?v=1550002536" alt="Logo" />
        </h2>
        <h2>
          Adult 
          <img class="small-image" src="https://cdn.shopify.com/s/files/1/1410/9922/files/Best_Dog_Foods_-_Product_Review_-_Castor_Pollux_Organix_Organic_Chicken_Brown_Rice_Recipe_Wet_Dog_Food_large.jpg?v=1550002536" alt="Logo" />
        </h2>
        <h2>
          Puppy
          <img class="small-image" src="https://cdn.shopify.com/s/files/1/1410/9922/files/Best_Dog_Foods_-_Product_Review_-_Castor_Pollux_Organix_Organic_Chicken_Brown_Rice_Recipe_Wet_Dog_Food_large.jpg?v=1550002536" alt="Logo" />
        </h2>
      </div>
      <div>
        <h2>Cats</h2>
        <h2>
          Senior 
          <img class="small-image" src="https://cdn.shopify.com/s/files/1/1410/9922/files/Best_Dog_Foods_-_Product_Review_-_Castor_Pollux_Organix_Organic_Chicken_Brown_Rice_Recipe_Wet_Dog_Food_large.jpg?v=1550002536" alt="Logo" />
        </h2>
        <h2>
          Adult 
          <img class="small-image" src="https://cdn.shopify.com/s/files/1/1410/9922/files/Best_Dog_Foods_-_Product_Review_-_Castor_Pollux_Organix_Organic_Chicken_Brown_Rice_Recipe_Wet_Dog_Food_large.jpg?v=1550002536" alt="Logo" />
        </h2>
        <h2>
          Kitten
          <img class="small-image" src="https://cdn.shopify.com/s/files/1/1410/9922/files/Best_Dog_Foods_-_Product_Review_-_Castor_Pollux_Organix_Organic_Chicken_Brown_Rice_Recipe_Wet_Dog_Food_large.jpg?v=1550002536" alt="Logo" />
        </h2>
      </div>
    </div>
  </section>
{/if}

{#if currentSection === 'woof-shop'}
  <section class="product-list">
    <h2>Woof Shop Products</h2>
    <div class="products">
      {#each products.filter(product => product.name.includes('Dog')) as product}
        <div class="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          
        </div>
      {/each}
    </div>
  </section>
{/if}

<!-- Add similar sections for 'meow-shop', 'pet-club', and 'about' -->





