<template>
  <section class="destination-list">
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    <div v-else-if="destinations.length" class="destinations-grid">
      <DestinationCard 
        v-for="destination in destinations" 
        :key="destination.id" 
        :destination="destination"
      />
    </div>
  </section>
</template>

<script>
import DestinationCard from './DestinationCard.vue';

export default {
  name: 'DestinationList',
  components: {
    DestinationCard
  },
  props: {
    destinations: {
      type: Array,
      default: () => []
    },
    error: {
      type: String,
      default: null
    }
  }
};
</script>

<style>
.destination-list {
  width: 100%;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.error-message {
  text-align: center;
  color: #e74c3c;
  padding: 20px;
  font-size: 1.2em;
}
</style>