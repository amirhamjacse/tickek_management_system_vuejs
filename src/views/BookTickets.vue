<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Book Your Ticket</h2>

    <form @submit.prevent="searchBuses">
      <!-- From and To Destinations -->
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="fromDestination" class="form-label">From</label>
          <input
            type="text"
            id="fromDestination"
            v-model="fromDestination"
            class="form-control"
            placeholder="Enter departure city"
          />
        </div>
        <div class="col-md-6">
          <label for="toDestination" class="form-label">To</label>
          <input
            type="text"
            id="toDestination"
            v-model="toDestination"
            class="form-control"
            placeholder="Enter destination city"
          />
        </div>
      </div>

      <!-- Date Picker Row -->
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="departureDate" class="form-label">Departure Date</label>
          <input type="date" id="departureDate" v-model="departureDate" class="form-control" />
        </div>
        <div class="col-md-6">
          <label for="returnDate" class="form-label">Return Date (Optional)</label>
          <input type="date" id="returnDate" v-model="returnDate" class="form-control" />
        </div>
      </div>

      <!-- Transport Type -->
      <div class="mb-3">
        <label for="transportType" class="form-label">Choose Transport</label>
        <select id="transportType" v-model="transportType" class="form-select">
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="flight">Flight</option>
        </select>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary btn-lg w-100">Search Buses</button>
    </form>

    <!-- Results Section -->
    <div v-if="busList.length > 0" class="mt-5">
      <div class="filter-sort d-flex justify-content-between align-items-center mb-3">
        <h5>Available Buses</h5>
        <div class="btn-group">
          <button class="btn btn-outline-primary">Low to High</button>
          <button class="btn btn-outline-primary">High to Low</button>
        </div>
      </div>

      <div class="bus-cards">
        <div class="card bus-card" v-for="(bus, index) in busList" :key="index">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title">{{ bus.name }}</h5>
              <span class="price">{{ bus.price }}</span>
            </div>
            <p class="card-text">
              <strong>Departure:</strong> {{ bus.departureTime }}<br />
              <strong>Duration:</strong> {{ bus.duration }}<br />
              <strong>Seats:</strong> {{ bus.availableSeats }} Seats Available
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <button class="btn btn-outline-secondary btn-sm">Cancellation Policy</button>
                <button class="btn btn-outline-secondary btn-sm">Boarding Point</button>
                <button class="btn btn-outline-secondary btn-sm">Dropping Point</button>
                <button class="btn btn-outline-secondary btn-sm">Amenities</button>
              </div>
              <button class="btn btn-success" @click="Bookbus">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results Message -->
    <div v-else-if="searched && busList.length === 0" class="alert alert-warning mt-4" role="alert">
      No buses available for the selected route and date.
    </div>
  </div>
</template>

<script>
export default {
  name: "BookTickets",
  data() {
    return {
      fromDestination: "",
      toDestination: "",
      departureDate: "",
      returnDate: "",
      transportType: "bus",
      busList: [],
      searched: false,
    };
  },
  methods: {
    searchBuses() {
      if (this.transportType === "bus") {
        this.busList = [
          { id: 1, name: "Manik Express", departureTime: "01:00 PM", duration: "5h 0m", price: "৳800", availableSeats: 21 },
          { id: 2, name: "Akota Transport", departureTime: "02:00 PM", duration: "5h 0m", price: "৳550", availableSeats: 40 },
          { id: 3, name: "Hanif Enterprise", departureTime: "02:00 PM", duration: "8h 40m", price: "৳550", availableSeats: 34 },
          { id: 4, name: "Orin Travels", departureTime: "02:15 PM", duration: "5h 15m", price: "৳550", availableSeats: 36 },
        ];
      }
      this.searched = true;
    },
    Bookbus() {
        // Navigate to the checkout page
        this.$router.push({ name: 'SeatSelection' });  // Assuming you have a Checkout route defined
      },
  },
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
}

.filter-sort {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.bus-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.bus-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.bus-card .card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.2rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #28a745;
}

.btn-sm {
  font-size: 0.85rem;
}

.btn-success {
  font-size: 1rem;
  padding: 10px 20px;
}
</style>
