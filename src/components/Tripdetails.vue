<template>
  <div class="trip-details-container">
    <h2 class="text-center">Trip Details</h2>

    <div class="tab-container">
      <button class="tab active">Boarding</button>
      <button class="tab">Dropping</button>
    </div>

    <div class="timeline">
      <div v-for="(stop, index) in stops" :key="index" class="timeline-item">
        <div class="timeline-time">
          <p>Starts at</p>
          <strong>{{ stop.time }}</strong>
        </div>
        <div class="timeline-circle"></div>
        <div class="timeline-info">
          <p class="stop-name">{{ stop.name }}</p>
          <p class="stop-details">{{ stop.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TripDetails",
  data() {
    return {
      stops: [
        { name: "Kallyanpur Bus Point", time: "01:00 PM", details: "KOL" },
        { name: "Kallyanpur Sohrab Pump", time: "01:10 PM", details: "Kallyanpur Sohrab Filling Station_ME" },
        { name: "Technical (TC) Gabtoli", time: "01:20 PM", details: "GB tech" },
        { name: "Savar Bus Point", time: "01:30 PM", details: "Savar" },
        { name: "Nabinagar Bus Point", time: "01:40 PM", details: "Nabinagar" },
        { name: "Baipal Bus Point", time: "01:45 PM", details: "Baipail" },
        { name: "Sreepur Bus Point", time: "01:50 PM", details: "Sreepur Counter" },
        { name: "Zerani Bazar", time: "01:55 PM", details: "Zirani" },
        { name: "Chandra Bus Point", time: "02:00 PM", details: "Chandra" },
        { name: "Hatubhanga Bus Point", time: "02:05 PM", details: "" },
      ],
    };
  },
};
</script>

<style scoped>
.trip-details-container {
  padding: 20px;
  max-width: 500px;
  margin: auto;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.tab-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tab {
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #f9f9f9;
  color: #555;
  margin-right: 10px;
  cursor: pointer;
  font-size: 0.9rem;
}

.tab.active {
  background: #007bff;
  color: #fff;
}

.timeline {
  position: relative;
  padding: 20px;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
}

.timeline-time {
  flex-shrink: 0;
  width: 100px;
  text-align: right;
  font-size: 0.85rem;
  color: #555;
  margin-right: 10px;
}

.timeline-time strong {
  color: #007bff;
  font-size: 1rem;
}

.timeline-circle {
  width: 12px;
  height: 12px;
  background-color: #007bff;
  border-radius: 50%;
  position: relative;
  z-index: 2;
}

.timeline-item::after {
  content: "";
  position: absolute;
  width: 2px;
  height: calc(100% + 114px);
  background-color: #ccc;
  left: calc(27.7% - 1px);
  top:20px;
  z-index: 1;
}

.timeline-item:last-child::after {
  display: none;
}

.timeline-info {
  flex-grow: 1;
}

.stop-name {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.stop-details {
  font-size: 0.85rem;
  color: #777;
  margin: 0;
}
</style>
