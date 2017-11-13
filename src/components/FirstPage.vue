<template>
  <div id='app'>
    <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="star" :particleSize="4" linesColor="#dedede" :linesWidth="2" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="repulse"
      :clickEffect="true" clickMode="push">
    </vue-particles>
    <div class="text__container">
      <h1 class="app__text">What I make</h1>
    </div>
  </div>
</template>

<script>
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    background-color: darkslategray;
    height: 100vh;
  }
</style>
