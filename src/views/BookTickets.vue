<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Book Your Ticket</h2>

    <form @submit.prevent="searchBuses">
      <!-- From and To Destinations -->
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="fromDestination" class="form-label">From</label>
          <input type="text" id="fromDestination" v-model="fromDestination" class="form-control" placeholder="Enter departure city" />
        </div>
        <div class="col-md-6">
          <label for="toDestination" class="form-label">To</label>
          <input type="text" id="toDestination" v-model="toDestination" class="form-control" placeholder="Enter destination city" />
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
      <h3 class="text-center">Available Buses</h3>
      <div class="row">
        <div class="col-md-4" v-for="(bus, index) in busList" :key="index">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">{{ bus.name }}</h5>
              <p class="card-text">Departure: {{ bus.departureTime }}</p>
              <p class="card-text">Seats Available: {{ bus.availableSeats }}</p>
              <button class="btn btn-success w-100" @click="bookBus(bus)">Book Now</button>
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
  name: 'BookTickets',
  data() {
    return {
      fromDestination: '',
      toDestination: '',
      departureDate: '',
      returnDate: '',
      transportType: 'bus',
      busList: [],
      searched: false,
    };
  },
  methods: {
    searchBuses() {
      if (this.transportType === 'bus') {
        this.busList = [
          { id: 1, name: 'Express Bus A', departureTime: '8:00 AM', availableSeats: 12, seats: this.generateSeats() },
          { id: 2, name: 'Fast Bus B', departureTime: '10:30 AM', availableSeats: 8, seats: this.generateSeats() },
          { id: 3, name: 'Comfort Bus C', departureTime: '1:00 PM', availableSeats: 5, seats: this.generateSeats() },
        ];
      }
      this.searched = true;
    },

    // Function to generate seats dynamically for each bus
    generateSeats() {
      const seats = [];
      for (let i = 1; i <= 20; i++) {
        seats.push({
          id: i,
          status: Math.random() > 0.5 ? 'available' : 'booked', // Randomly assigning some seats as booked
        });
      }
      return seats;
    },

    bookBus(bus) {
      this.$router.push({ name: 'SeatSelection', params: { busId: bus.id, busName: bus.name, seats: bus.seats } });
    },
  },
};
</script>

<style scoped>
/* Same styling as before */
</style>
