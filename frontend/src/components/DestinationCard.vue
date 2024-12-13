<template>
  <article class="destination-card">
    <div class="destination-image">
      <img :src="destination.imageUrl" :alt="destination.name">
      <div class="destination-overlay">
        <h2>{{ destination.name }}</h2>
      </div>
    </div>
    <section class="destination-content">
      <p class="description">{{ destination.description }}</p>
      <div class="destination-details">
        <div class="detail-row">
          <span class="detail-label">
            Country <span class="icon">🌍</span>
          </span>
          <span class="detail-value">{{ destination.country }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">
            Best Time <span class="icon">🌞</span>
          </span>
          <span class="detail-value">{{ destination.bestTimeToVisit }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">
            Weather <span class="icon">🌡️</span>
          </span>
          <span class="detail-value">{{ destination.averageWeather }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">
            Average Cost Per Day <span class="icon">💰</span>
          </span>
          <span class="detail-value">${{ destination.averageCostPerDay }} per day</span>
        </div>
      </div>
      <section class="attractions">
        <h3>Main Attractions</h3>
        <ul>
          <li
            v-for="(attraction, index) in destination.mainAttractions"
            :key="index">
            {{ attraction }}
          </li>
        </ul>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: 'DestinationCard',
  props: {
    destination: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.destination-card {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  --label-color: #2c3e50; 
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.destination-card .detail-value {
  color: var(--label-color);
  justify-self:end;
}

.destination-card:nth-child(1) {
  --label-color: #DB7093;
}

.destination-card:nth-child(2) {
  --label-color:#4682B4; 
}

.destination-card:nth-child(3) {
  --label-color: #4B0082; 
}

.destination-card:nth-child(4) {
  --label-color: #FFA500; 
}
.destination-card:nth-child(5) {
  --label-color:#CD5C5C; 
}
.destination-card:nth-child(6) {
  --label-color: #40E0D0; 
}
.destination-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.destination-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.destination-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  padding: 20px;
  color: white;
}

.destination-overlay h2 {
  margin: 0;
  font-size: 1.8em;
}

.destination-content {
  padding: 20px;
}

.destination-details {
  margin-bottom: 15px;
}

.detail-row {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
}

.detail-label {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  font-weight: 400;
}

.icon {
  margin-right: 10px;
  font-size: 1.5em;
}

.description {
  color: #666;
  font-style: italic;
  margin-bottom: 15px;
  line-height: 1.6;
}

.attractions h3 {
  font-weight:200;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.attractions ul {
  list-style-type: none;
  padding: 0;
}

.attractions li {
  color:black;
  background-color: #f0f4f8;
  margin: 8px 0;
  padding: 10px;
  border-radius: 6px;
}
</style>
