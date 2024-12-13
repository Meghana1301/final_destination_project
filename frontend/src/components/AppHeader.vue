<template>
  <header class="app-header">
    <img src="../assets/icon3.png" alt="Logo" class="header-logo" />
    <div class="header-text">
      <h1>Atlas Odyssey</h1>
      <p>Discover Your Next Adventure</p>
    </div>
    <img src="../assets/icon4.png" alt="Logo" class="header-logo1" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style>
.app-header {
  position: relative; 
  padding: 30px;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #4a90e2, #50c878);
  color: white;
  border-radius: 15px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  text-align: center;
}

.header-logo {
  grid-column: 1;
  width: 110px; 
  height: 110px;
  border-radius: 50%; 
}

.header-logo1 {
  grid-column: 3;
  width: 110px; 
  height: 110px;
  border-radius: 50%; 
}

.header-text {
  grid-column: 2;
}

.header-text h1 {
  margin: 0;
  font-size: 2.5em; 
  letter-spacing: 1px;
}

.header-text p {
  margin: 5px 0 0;
  font-size: 1.3em;
}
</style>
