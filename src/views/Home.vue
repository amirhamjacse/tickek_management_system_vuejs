<template>
  <div class="container-fluid bg-light">
    <!-- Hero Section -->
    <div class="row hero-section py-5 text-center text-white bg-sucess">
      <div class="col">
        <h1 class="fw-bold display-3">Book Your Tickets Today</h1>
        <p class="lead">Easy and quick ticket booking for all your travel needs</p>
        <router-link to="/book-tickets" class="btn btn-light btn-lg">Book Now</router-link>
      </div>
    </div>

    <!-- Services Section -->
    <div class="row py-5 text-center">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <i class="bi bi-briefcase-fill fs-2 text-primary"></i>
            <h5 class="card-title mt-3">Reliable Transport</h5>
            <p class="card-text">Choose from various transport options including buses, trains, and flights.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <i class="bi bi-calendar-check-fill fs-2 text-success"></i>
            <h5 class="card-title mt-3">Easy Booking</h5>
            <p class="card-text">Book tickets in a few simple steps, from choosing your destination to payment.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <i class="bi bi-check-circle-fill fs-2 text-warning"></i>
            <h5 class="card-title mt-3">Instant Confirmation</h5>
            <p class="card-text">Get instant booking confirmation with all the details you need for your journey.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <!-- <div class="row bg-dark text-white py-5 text-center">
      <div class="col">
        <h2>About Us</h2>
        <p>We are a trusted platform helping you book transportation tickets easily, providing a seamless and efficient booking experience for your travel needs.</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.hero-section {
  background-color: #388e3c;
}

.card {
  border: none;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}

.text-primary {
  color: #007bff;
}

.text-success {
  color: #28a745;
}

.text-warning {
  color: #ffc107;
}
</style>
