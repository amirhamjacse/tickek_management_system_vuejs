<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Book Your Ticket</h2>

    <form>
      <!-- From and To Destinations -->
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="fromDestination" class="form-label">From</label>
          <input type="text" id="fromDestination" class="form-control" placeholder="Enter departure city" />
        </div>
        <div class="col-md-6">
          <label for="toDestination" class="form-label">To</label>
          <input type="text" id="toDestination" class="form-control" placeholder="Enter destination city" />
        </div>
      </div>

      <!-- Date Picker Row -->
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="departureDate" class="form-label">Departure Date</label>
          <input type="date" id="departureDate" class="form-control" />
        </div>
        <div class="col-md-6">
          <label for="returnDate" class="form-label">Return Date (Optional)</label>
          <input type="date" id="returnDate" class="form-control" />
        </div>
      </div>

      <!-- Transport Type -->
      <div class="mb-3">
        <label for="transportType" class="form-label">Choose Transport</label>
        <select id="transportType" class="form-select">
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="flight">Flight</option>
        </select>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary btn-lg w-100">Book Ticket</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BookTickets',
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

.row .col-md-6 {
  margin-bottom: 1rem;
}
</style>
