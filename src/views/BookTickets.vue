<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Book Your Ticket</h2>

    <!-- Search Form -->
    <form @submit.prevent="searchBuses" class="mb-5">
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

      <!-- Transport Type Dropdown -->
      <div class="mb-3">
        <label for="transportType" class="form-label">Choose Transport</label>
        <select id="transportType" v-model="transportType" class="form-select">
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="flight">Flight</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary btn-lg w-100">Search</button>
    </form>

    <!-- Results Section -->
    <div v-if="busList.length > 0" class="d-flex">
      <!-- Left Filter Section -->
      <div v-if="showFilter" class="col-md-3 p-3 border-end">
        <h5>Filters</h5>

        <!-- Price Filter -->
        <div class="mb-3">
          <label for="priceFilter" class="form-label">Price</label>
          <select id="priceFilter" v-model="priceFilter" class="form-select">
            <option value="all">All</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        <!-- Available Seats Filter -->
        <div class="mb-3">
          <label for="seatFilter" class="form-label">Available Seats</label>
          <input type="range" id="seatFilter" v-model="seatFilter" min="0" max="50" class="form-range" />
          <span>{{ seatFilter }} Seats</span>
        </div>

        <!-- AC / Non-AC Filter -->
        <div class="mb-3">
          <label for="acFilter" class="form-label">AC/Non-AC</label>
          <select id="acFilter" v-model="acFilter" class="form-select">
            <option value="all">All</option>
            <option value="ac">AC</option>
            <option value="non-ac">Non-AC</option>
          </select>
        </div>

        <!-- Bus Name Filter -->
        <div class="mb-3">
          <label for="busNameFilter" class="form-label">Bus Name</label>
          <input
            type="text"
            id="busNameFilter"
            v-model="busNameFilter"
            class="form-control"
            placeholder="Enter bus name"
          />
        </div>
      </div>

      <!-- Results Section (Cards) -->
      <div class="col-md-9">
        <div class="filter-sort d-flex justify-content-between align-items-center mb-3">
          <h5>Available {{ transportType.charAt(0).toUpperCase() + transportType.slice(1) }}s</h5>
        </div>

        <!-- Loop through available buses and show cards -->
        <div class="bus-cards">
          <div class="card bus-card" v-for="(bus, index) in filteredBusList" :key="index">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title">{{ bus.name }}</h5>
                <span class="price">{{ "৳" + bus.price }}</span>
              </div>
              
              <!-- From and To Locations -->
              <div class="location-info mb-3">
                <span class="from-to"><strong>From:</strong> {{ bus.from }}</span><br />
                <span class="from-to"><strong>To:</strong> {{ bus.to }}</span>
              </div>

              <!-- <div class="d-flex justify-content-between align-items-center">
                <p class="route">
                  <i class="fas fa-route"></i> Route: {{ bus.route }}
                </p>
              </div> -->
              
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
    </div>

    <!-- No Results Message -->
    <div v-else-if="searched && busList.length === 0" class="alert alert-warning mt-4" role="alert">
      No {{ transportType.charAt(0).toUpperCase() + transportType.slice(1) }}s available for the selected route and date.
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
      showFilter: false,
      priceFilter: "all",
      seatFilter: 0,
      acFilter: "all",
      busNameFilter: "",
    };
  },
  computed: {
    filteredBusList() {
      let filtered = this.busList;

      // Filter by price
      if (this.priceFilter === "low") {
        filtered = filtered.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      } else if (this.priceFilter === "high") {
        filtered = filtered.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      }

      // Filter by available seats
      filtered = filtered.filter(bus => bus.availableSeats >= this.seatFilter);

      // Filter by AC/Non-AC
      if (this.acFilter !== "all") {
        filtered = filtered.filter(bus => bus.ac === this.acFilter);
      }

      // Filter by bus name
      if (this.busNameFilter) {
        filtered = filtered.filter(bus => bus.name.toLowerCase().includes(this.busNameFilter.toLowerCase()));
      }

      return filtered;
    },
  },
  methods: {
    searchBuses() {
      this.showFilter = true;

      // Dummy data for buses
      if (this.transportType === "bus") {
        this.busList = [
          { id: 1, name: "Manik Express", departureTime: "01:00 PM", duration: "5h 0m", price: "800", availableSeats: 21, from: "Dhaka", to: "Chittagong", route: "Dhaka -> Chittagong", ac: "ac" },
          { id: 2, name: "Akota Transport", departureTime: "02:00 PM", duration: "5h 0m", price: "550", availableSeats: 40, from: "Dhaka", to: "Sylhet", route: "Dhaka -> Sylhet", ac: "non-ac" },
          { id: 3, name: "Hanif Enterprise", departureTime: "02:00 PM", duration: "8h 40m", price: "550", availableSeats: 34, from: "Dhaka", to: "Rajshahi", route: "Dhaka -> Rajshahi", ac: "ac" },
          { id: 4, name: "Orin Travels", departureTime: "02:15 PM", duration: "5h 15m", price: "550", availableSeats: 36, from: "Dhaka", to: "Khulna", route: "Dhaka -> Khulna", ac: "non-ac" },
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
  grid-template-columns: 1fr;
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

.location-info {
  font-size: 1rem;
}

.route {
  font-size: 0.9rem;
  color: #6c757d;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

.filter-sort,
.card-footer {
  font-size: 0.9rem;
}

.card-text {
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.btn-outline-secondary {
  margin-right: 5px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

.btn-outline-secondary {
  margin-right: 5px;
}
</style>
