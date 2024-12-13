<template>
  <div class="app-container">
    <header>
      <AppHeader/>
    </header>
    <main>
      <DestinationList 
        :destinations="destinations" 
        :error="error" 
      />
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import DestinationList from './components/DestinationList.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    DestinationList
  },
  data() {
    return {
      destinations: [],
      error: null
    };
  },
  created() {
    this.fetchDestinations();
  },
  methods: {
    fetchDestinations() {
      fetch('https://backend-travel-uoxu.onrender.com/api')
        .then(response => response.json())
        .then(data => {
          const destinationsData = data[0]?.destinations || [];
          this.destinations = destinationsData.map(dest => ({
            ...dest,
            imageUrl: `https://backend-travel-uoxu.onrender.com${dest.imageUrl}`
          }));
        })
        .catch(error => {
          console.error('Error loading destinations:', error.message);
          this.error = 'Error loading destinations. Please try again.';
        });
    }
  }
};
</script>

<style>
body {
  background-color: #f0f4f8;
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.app-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}
</style>