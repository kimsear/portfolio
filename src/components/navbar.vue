<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary position-sticky top-0 w-100 shadow" style="z-index: 1050;">
    <div class="container">
      <!-- Logo -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="https://i.pinimg.com/736x/7b/6c/5e/7b6c5e8d93bc6830ae6ea45df4bcee61.jpg"
             alt="Logo" class="rounded-circle me-2" width="40" height="40">
        <!-- <span>My Portfolio</span> -->
      </router-link>

      <!-- Mobile Toggle Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: $route.path === '/' }" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: $route.path === '/about' }" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: $route.path === '/project' }" to="/project">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: $route.path === '/contact' }" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* Navbar link hover effect */
.navbar-nav .nav-link {
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: #29B6F6!important;
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .navbar-nav {
    text-align: center;
  }
}
</style>
