<template>
    <div class="seat-selection-container">
      <h2 class="text-center mb-4">Select Your Seat</h2>
  
      <!-- Bus Layout -->
      <div class="bus-seats">
        <div class="seats-left">
          <!-- Left side seats in pairs (10 pairs of seats, 20 seats total) -->
          <div v-for="(seatPair, pairIndex) in leftSeatPairs" :key="'left-' + pairIndex" class="seat-pair">
            <div
              v-for="(seat, seatIndex) in seatPair"
              :key="'left-' + pairIndex + '-' + seatIndex"
              :class="{
                'seat': true,
                'available': seat.status === 'available',
                'booked': seat.status === 'booked',
                'selected': seat.status === 'selected'
              }"
              @click="selectSeat('left', pairIndex, seatIndex)"
              :title="seat.status === 'booked' ? 'Booked' : ''"
            >
              {{ seat.status === 'booked' ? 'B' : seatIndex + 1 }}
            </div>
          </div>
        </div>
  
        <!-- Aisle -->
        <div class="aisle"></div>
  
        <div class="seats-right">
          <!-- Right side seats in pairs (10 pairs of seats, 20 seats total) -->
          <div v-for="(seatPair, pairIndex) in rightSeatPairs" :key="'right-' + pairIndex" class="seat-pair">
            <div
              v-for="(seat, seatIndex) in seatPair"
              :key="'right-' + pairIndex + '-' + seatIndex"
              :class="{
                'seat': true,
                'available': seat.status === 'available',
                'booked': seat.status === 'booked',
                'selected': seat.status === 'selected'
              }"
              @click="selectSeat('right', pairIndex, seatIndex)"
              :title="seat.status === 'booked' ? 'Booked' : ''"
            >
              {{ seat.status === 'booked' ? 'B' : seatIndex + 1 }}
            </div>
          </div>
        </div>
      </div>
  
      <!-- Submit Button -->
      <div class="text-center mt-4">
        <button class="btn btn-primary" @click="confirmSelection">Confirm Selection</button>
      </div>
  
      <!-- Modal Popup for Selected Seat -->
      <div class="modal fade" id="seatSelectionModal" tabindex="-1" aria-labelledby="seatSelectionModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="seatSelectionModalLabel">Seat Selected</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>You have selected the following seat:</p>
              <p><strong>{{ selectedSeat }}</strong></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="goToCheckoutPage">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Left side seats, each pair having 2 seats (10 pairs, 20 seats)
        leftSeatPairs: Array(10).fill().map((_, index) => [
          { status: index % 2 === 0 ? 'available' : 'booked' },
          { status: (index + 1) % 2 === 0 ? 'available' : 'booked' }
        ]),
  
        // Right side seats, each pair having 2 seats (10 pairs, 20 seats)
        rightSeatPairs: Array(10).fill().map((_, index) => [
          { status: index % 2 === 0 ? 'available' : 'booked' },
          { status: (index + 1) % 2 === 0 ? 'available' : 'booked' }
        ]),
  
        selectedSeat: '', // Store the selected seat information
      };
    },
    methods: {
      // Method to handle seat selection
      selectSeat(side, pairIndex, seatIndex) {
        const seats = side === 'left' ? this.leftSeatPairs : this.rightSeatPairs;
        const seat = seats[pairIndex][seatIndex];
        // Only allow selection if the seat is available
        if (seat.status === 'available') {
          seat.status = 'selected';  // Mark seat as selected
          this.selectedSeat = `${side === 'left' ? 'Left' : 'Right'} Seat ${pairIndex * 2 + seatIndex + 1}`;
          this.showModal();  // Show the modal with selected seat
        }
      },
  
      // Show the modal to confirm seat selection
      showModal() {
        const modal = new bootstrap.Modal(document.getElementById('seatSelectionModal'));
        modal.show();
      },
  
      // Redirect to the checkout page
      goToCheckoutPage() {
        this.$router.push({ name: 'Checkout' });  // Assuming you have a Checkout route defined
      },
    },
  };
  </script>
  
  <style scoped>
  .seat-selection-container {
    padding: 20px;
  }
  
  .bus-seats {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .seats-left, .seats-right {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .seat-pair {
    display: flex;
    gap: 10px;
  }
  
  .seat {
    width: 40px;
    height: 40px;
    background-color: #28a745;
    text-align: center;
    line-height: 40px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .seat.booked {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  
  .seat.selected {
    background-color: #ffc107;
  }
  
  .seat:hover {
    background-color: #218838;
  }
  
  .aisle {
    width: 30px;
    height: 100%;
    background-color: #f1f1f1;
  }
  
  button {
    font-size: 1.2rem;
  }
  
  /* Modal Styling */
  .modal-header {
    background-color: #28a745;
    color: white;
  }
  
  .modal-body {
    text-align: center;
  }
  
  .modal-footer button {
    font-size: 1rem;
  }
  </style>
  