<template>
  <footer class="bg-dark text-white py-4 mt-5">
    <div class="container">
      <!-- Footer Top Section: Logo and Links -->
      <div class="row">
        <!-- Logo and About Section -->
        <div class="col-md-4">
          <h4 class="fw-bold text-white">TicketMaster</h4>
          <p class="text-white text-muted">Your trusted source for booking tickets online, ensuring a smooth and easy travel experience.</p>
        </div>

        <!-- Quick Links Section -->
        <div class="col-md-4">
          <h5 class="fw-bold text-white">Quick Links</h5>
          <ul class="list-unstyled">
            <li><router-link to="/" class="text-white">Home</router-link></li>
            <li><router-link to="/tickets" class="text-white">Book Tickets</router-link></li>
            <li><router-link to="/about" class="text-white">About</router-link></li>
            <li><router-link to="/contact" class="text-white">Contact</router-link></li>
          </ul>
        </div>

        <!-- Social Media Section -->
        <div class="col-md-4">
          <h5 class="fw-bold text-white">Follow Us</h5>
          <div class="d-flex">
            <a href="#" class="text-white me-3"><i class="bi bi-facebook fs-4"></i></a>
            <a href="#" class="text-white me-3"><i class="bi bi-twitter fs-4"></i></a>
            <a href="#" class="text-white me-3"><i class="bi bi-instagram fs-4"></i></a>
            <a href="#" class="text-white me-3"><i class="bi bi-linkedin fs-4"></i></a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom Section: Copyright -->
      <div class="text-center mt-4">
        <p class="text-white mb-0">&copy; 2024 TicketMaster. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* Footer Background */
.bg-dark {
  background-color: #343a40 !important; /* Dark background for footer */
}

/* Footer Text Styling */
.text-white {
  color: white !important;
}

/* Footer Link Styling */
a {
  text-decoration: none;
}

a:hover {
  color: #4caf50; /* Hover effect in green */
}

/* Social Media Icons */
.bi {
  transition: color 0.3s ease;
}

.bi:hover {
  color: #4caf50; /* Green hover effect for icons */
}

/* Responsive Layout */
@media (max-width: 767px) {
  .footer-top-section {
    text-align: center;
  }

  .col-md-4 {
    margin-bottom: 2rem;
  }
}
</style>
