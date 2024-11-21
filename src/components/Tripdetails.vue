<template>
    <div class="trip-details-container">
      <h2 class="text-center">Trip Details</h2>
      
      <div class="timeline">
        <div v-for="(stop, index) in stops" :key="index" class="timeline-item">
          <div class="timeline-circle" :class="{ 'completed': stop.completed }">
            <span>{{ stop.time }}</span>
          </div>
          <div class="timeline-info">
            <p><strong>{{ stop.name }}</strong></p>
            <p>{{ stop.details }}</p>
          </div>
          <div v-if="index < stops.length - 1" class="timeline-line"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TripDetails',
    data() {
      return {
        stops: [
          { name: 'Station A', time: '08:00 AM', details: 'Departure from Station A', completed: true },
          { name: 'Station B', time: '10:30 AM', details: 'Stop for refreshments', completed: false },
          { name: 'Station C', time: '12:00 PM', details: 'Main destination', completed: false },
          { name: 'Station D', time: '02:30 PM', details: 'Final stop', completed: false },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .trip-details-container {
    padding: 20px;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  
  .timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 20px;
  }
  
  .timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }
  
  .timeline-circle {
    width: 40px;
    height: 40px;
    background-color: #28a745;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
  
  .timeline-circle span {
    font-size: 0.9rem;
  }
  
  .timeline-info {
    margin-left: 60px;
    font-size: 1rem;
  }
  
  .timeline-line {
    width: 2px;
    height: 100%;
    background-color: #ccc;
    position: absolute;
    top: 20px;
    left: 50%;
    z-index: -1;
  }
  
  .timeline-item:last-child .timeline-line {
    display: none;
  }
  
  .completed {
    background-color: #007bff; /* Blue color for completed stops */
  }
  
  .timeline-item:first-child .timeline-circle {
    left: 0;
  }
  </style>
  