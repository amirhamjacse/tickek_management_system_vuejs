<template>
    <div class="checkout-container">
      <h2 class="text-center">Checkout</h2>
      <p class="text-center">Thank you for selecting your seat! Please provide your details and proceed to payment.</p>
  
      <!-- Passenger Information Form -->
      <div class="passenger-info-form">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              id="fullName"
              v-model="passengerInfo.fullName"
              class="form-control"
              placeholder="Enter full name"
              required
            />
          </div>
          
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              v-model="passengerInfo.email"
              class="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input
              type="tel"
              id="phone"
              v-model="passengerInfo.phone"
              class="form-control"
              placeholder="Enter your phone number"
              required
            />
          </div>
  
          <div class="mb-3">
            <label for="ticketNumber" class="form-label">Ticket Number</label>
            <input
              type="text"
              id="ticketNumber"
              v-model="ticketNumber"  
              class="form-control"
              :disabled="true"  
            />
          </div>
  
          <!-- Button to Proceed to Payment -->
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-success">Proceed to Payment</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Checkout',
    data() {
      return {
        // Store passenger details
        passengerInfo: {
          fullName: '',
          email: '',
          phone: '',
        },
        // Generate a random ticket number (for demo purposes)
        ticketNumber: this.generateTicketNumber(),
      };
    },
    methods: {
      // Method to generate a random ticket number
      generateTicketNumber() {
        const randomNumber = Math.floor(Math.random() * 1000000);
        return `TICKET ID-${randomNumber}`;
      },
  
      // Method to handle form submission
      submitForm() {
        if (this.passengerInfo.fullName && this.passengerInfo.email && this.passengerInfo.phone) {
          // Ideally, send the data to a server or process it here
          alert(`Thank you, ${this.passengerInfo.fullName}! Your ticket number is ${this.ticketNumber}.`);
          this.proceedToPayment();
        } else {
          alert('Please fill in all the details.');
        }
      },
  
      // Method to redirect to the payment page
      proceedToPayment() {
        // For now, just a placeholder to show that the user is moving to payment
        alert('Redirecting to payment...');
        // You can replace this with the actual routing logic to your payment page:
        // this.$router.push({ name: 'PaymentPage' });
      },
    },
  };
  </script>
  
  <style scoped>
  .checkout-container {
    padding: 20px;
  }
  
  .passenger-info-form {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .form-label {
    font-weight: bold;
  }
  
  button {
    font-size: 1.2rem;
    padding: 10px 20px;
  }
  
  input {
    font-size: 1rem;
  }
  
  button:disabled {
    background-color: #ccc;
  }
  
  .mb-3 {
    margin-bottom: 15px;
  }
  </style>
  