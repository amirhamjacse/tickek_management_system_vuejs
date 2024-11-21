<template>
    <div class="container py-5">
      <h2 class="text-center mb-4">Contact Us</h2>
  
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Full Name</label>
          <input type="text" id="name" class="form-control" placeholder="Enter your name" />
        </div>
  
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input type="email" id="email" class="form-control" placeholder="Enter your email" />
        </div>
  
        <div class="mb-3">
          <label for="message" class="form-label">Your Message</label>
          <textarea id="message" class="form-control" rows="4" placeholder="Write your message here"></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  };
  </script>
  
  <style scoped>
  .form-label {
    font-weight: bold;
  }
  
  .btn {
    width: 100%;
    font-size: 1.2rem;
  }
  </style>
  