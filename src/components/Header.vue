<template>
    <header class="bg-gradient-green text-white">
      <nav class="navbar navbar-expand-lg navbar-light container py-3">
        <a class="navbar-brand fw-bold fs-3 d-flex align-items-center" href="/">
          <i class="bi bi-bus-front me-2"> </i>TicketMaster
        </a>
  
        <!-- Toggle button for mobile view -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/book-tickets" active-class="active">Book Tickets</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" active-class="active">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" active-class="active">Contact</router-link>
            </li>
          </ul>
  
          <!-- User Profile Dropdown -->
          <div class="dropdown ms-3">
            <button
              class="btn btn-outline-light dropdown-toggle"
              type="button"
              id="userMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle me-2"></i>User
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
              <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
              <li><router-link class="dropdown-item" to="/settings">Settings</router-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><router-link class="dropdown-item text-danger" to="/logout">Logout</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  /* Gradient Background for Navbar with Green Tones */
  .bg-gradient-green {
    background: linear-gradient(45deg, #4caf50, #388e3c); /* Green gradient */
  }
  
  .navbar-light .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .navbar-light .navbar-nav .nav-link:hover {
    color: #ffffff; /* Highlight link on hover */
  }
  
  .navbar-brand {
    font-size: 1.75rem;
  }
  
  .navbar-toggler-icon {
    background-color: #fff;
  }
  
  .dropdown-menu {
    background-color: #388e3c; /* Darker green for dropdown */
  }
  
  .dropdown-item:hover {
    background-color: #4caf50;
    color: #fff;
  }
  
  /* Ensure the navbar is mobile-friendly */
  @media (max-width: 767px) {
    .navbar-brand {
      font-size: 1.5rem;
    }
  
    .navbar-nav .nav-item {
      margin-left: 0;
      text-align: center;
    }
  
    .navbar-nav {
      margin-top: 10px;
    }
  }
  
  /* Extra Large Screens: Adjust for larger screens */
  @media (min-width: 1200px) {
    .container {
      max-width: 1150px;
    }
  }
  </style>
  