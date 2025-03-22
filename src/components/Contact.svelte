<script>
    let name = '';
    let email = '';
    let message = '';
  
    const submitForm = () => {
      // Here you can handle form submission (e.g., send to an API)
      console.log({ name, email, message });
    };
  </script>
  
  <form on:submit|preventDefault={submitForm}>
    <input type="text" bind:value={name} placeholder="Your Name" required />
    <input type="email" bind:value={email} placeholder="Your Email" required />
    <textarea bind:value={message} placeholder="Message" required></textarea>
    <button type="submit">Send Now</button>
  </form>
  
  <style>
    form {
      display: flex;
      flex-direction: column;
    }
    input, textarea {
      margin-bottom: 1rem;
      padding: 0.5rem;
    }
  </style>