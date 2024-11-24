<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Book Your Ticket</h2>

    <!-- Main Row: Filters + Search Results -->
    <div class="row">
      <!-- Filters Section -->
      <div class="col-md-3 filter-section">
        <h5>Filters</h5>
        <button class="btn btn-outline-danger w-100 mb-3" @click="resetFilters">Reset</button>

        <!-- Bus Type -->
        <h6>Bus Type</h6>
        <div class="form-check" v-for="(type, index) in busTypes" :key="index">
          <input
            class="form-check-input"
            type="checkbox"
            :value="type"
            v-model="selectedBusTypes"
            :id="'busType' + index"
          />
          <label class="form-check-label" :for="'busType' + index">{{ type }}</label>
        </div>

        <!-- Operator -->
        <h6 class="mt-3">Operator</h6>
        <div class="form-check" v-for="(operator, index) in busOperators" :key="'operator' + index">
          <input
            class="form-check-input"
            type="checkbox"
            :value="operator"
            v-model="selectedOperators"
            :id="'operator' + index"
          />
          <label class="form-check-label" :for="'operator' + index">{{ operator }}</label>
        </div>

        <!-- Boarding Point -->
        <h6 class="mt-3">Boarding Point</h6>
        <div class="form-check" v-for="(point, index) in boardingPoints" :key="'boarding' + index">
          <input
            class="form-check-input"
            type="checkbox"
            :value="point"
            v-model="selectedBoardingPoints"
            :id="'boarding' + index"
          />
          <label class="form-check-label" :for="'boarding' + index">{{ point }}</label>
        </div>
      </div>

      <!-- Results Section -->
      <div class="col-md-9">
        <!-- Search Form -->
        <form @submit.prevent="searchBuses">
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

          <button type="submit" class="btn btn-primary btn-lg w-100">Search Buses</button>
        </form>

        <!-- Results Section -->
        <div v-if="busList.length > 0" class="mt-5">
          <div class="filter-sort d-flex justify-content-between align-items-center mb-3">
            <h5>Available Buses</h5>
            <div class="btn-group">
              <button class="btn btn-outline-primary" @click="sortBy('price', 'asc')">Low to High</button>
              <button class="btn btn-outline-primary" @click="sortBy('price', 'desc')">High to Low</button>
            </div>
          </div>

          <div class="bus-cards">
            <div
              class="card bus-card"
              v-for="(bus, index) in filteredBuses"
              :key="index"
            >
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
      busTypes: ["AC", "Non AC"],
      busOperators: ["Manik Express", "Akota Transport", "Hanif Enterprise"],
      boardingPoints: ["Kallyanpur", "Sohrab Pump"],
      selectedBusTypes: [],
      selectedOperators: [],
      selectedBoardingPoints: [],
    };
  },
  computed: {
    filteredBuses() {
      return this.busList.filter((bus) => {
        const matchType =
          this.selectedBusTypes.length === 0 ||
          this.selectedBusTypes.includes(bus.type);
        const matchOperator =
          this.selectedOperators.length === 0 ||
          this.selectedOperators.includes(bus.name);
        const matchBoarding =
          this.selectedBoardingPoints.length === 0 ||
          this.selectedBoardingPoints.includes(bus.boardingPoint);

        return matchType && matchOperator && matchBoarding;
      });
    },
  },
  methods: {
    searchBuses() {
      this.busList = [
        {
          id: 1,
          name: "Manik Express",
          type: "AC",
          departureTime: "01:00 PM",
          duration: "5h 0m",
          price: "৳800",
          availableSeats: 21,
          boardingPoint: "Kallyanpur",
        },
        // Additional dummy data
      ];
      this.searched = true;
    },
    sortBy(field, order) {
      const multiplier = order === "asc" ? 1 : -1;
      this.busList.sort((a, b) =>
        a[field] > b[field] ? 1 * multiplier : -1 * multiplier
      );
    },
    resetFilters() {
      this.selectedBusTypes = [];
      this.selectedOperators = [];
      this.selectedBoardingPoints = [];
    },
    Bookbus() {
      this.$router.push({ name: "SeatSelection" });
    },
  },
};
</script>

<style scoped>
/* Same styles as before */
</style>
