<template>
  <div>
    <Navbar style="z-index: 100;"/>
      <main class="flex-grow-1">
        <router-view />
      </main>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
</script>

<style>
body {
  background-image: url(https://i.pinimg.com/originals/3d/c3/87/3dc387151b115cf7ae0cf344b8e40eff.gif);
  background-size: cover;
}
</style>
