<template>
  <section>
    <div class="container py-4">
    <div class="row g-5 mb-5 align-items-center">
      <div class="col-lg-6">
        <h1 class="display-5 mb-0">My Projects</h1>
      </div>
      <!-- <div class="col-lg-6 text-lg-end nav nav-tabs card-header-tabs">
        <ul class="list-inline mx-n3 mb-0 d-flex" id="portfolio-filters">
          <li class="mx-3 list-inline-item nav-link " :class="{ active: filter === '*' }" @click="setFilter('*')">All Projects</li>
          <li class="mx-3 list-inline-item nav-link " :class="{ active: filter === 'first' }" @click="setFilter('first')">UI/UX Design</li>
          <li class="mx-3 list-inline-item nav-link " :class="{ active: filter === 'second' }" @click="setFilter('second')">Web Develop</li>
        </ul>
      </div> -->
    </div>
    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4 p-2 hover-zoom">
      <div class="col" v-for="project in filteredProjects" :key="project.title">
        <div class="card h-100 shadow-lg">
          <img :src="project.image" class="card-img-top project-img" alt="Project Image">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <section>
    <div class="container py-4">
    <div class="row g-5 mb-5 align-items-center">
      <div class="col-lg-6">
        <h1 class="display-5 mb-0 text-light">Achivement</h1>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4 p-2 hover-zoom">
      <div class="col">
        <div class="card h-100 shadow-lg">
          <router-link to="/design">
            <img src="@\assets\images\Graphic\pic02.png" alt="Football Team Poster" class="card-img">
          </router-link>
          <div class="card-body">
            <h4>Football match poster</h4>
            <p class="card-text">Graphic Design</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import mobileapp from '@/assets/images/project/mobile-app/mb-page.png';
import admindashboard from '@/assets/images/project/admin-dashboard/home.png';
import portfolio from '@/assets/images/project/portfolio/home.png';
import uxui from '@/assets/images/ui-ux/home-mb.png';


const filter = ref('*');

const projectData = ref([
  { title: 'Personal Portfolio', image: portfolio,description:"Bootstrap and vue", link: '#', category: 'second' },
  { title: 'Admin Dashboard (User, Customer, Product)', image: admindashboard,description:"Develop using Bootstrap, Vue and Laravel api" , link: '#', category: 'first' },
  { title: 'Android Mobile app (Sport Store)', image: mobileapp,description:"JinXing Store is an online shop focused on sport products.", link: '#', category: 'first' },
  { title: 'Computer Store', image: 'https://i.pinimg.com/736x/20/0a/07/200a072465dc3c288a1d5780105705f7.jpg',description:"Html, css, javascript, bootstrap and laravel", link: '#', category: 'second' },
  { title: 'Ux/Ui', image: uxui ,description:"", link: '#', category: 'first' },
]);

const setFilter = (category) => {
  filter.value = category;
};

const filteredProjects = computed(() => {
  if (filter.value === '*') return projectData.value;
  return projectData.value.filter(project => project.category === filter.value);
});
</script>

<style scoped>
.container {
  color: white;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.card-img {
  height: 300px;
  object-fit: cover;
}
.hover-zoom .card {
  transition: transform 0.3s ease-in-out;
}
a:hover {
  text-decoration: underline;
}

/* Zoom effect on hover */
.hover-zoom .card:hover {
  transform: scale(1.1); /* Increase size slightly */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
.active {
  color: #29B6F6!important;
  font-weight: bold;
}
/* Touch support for mobile users */
@media (hover: none) {
  .hover-zoom .card:active {
    transform: scale(1.1);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.3);
  }
}
/* Responsive styles using media queries */
@media (max-width: 768px) {
  .card-img-top {
    height: 150px;
  }
}

@media (max-width: 576px) {
  .card-img-top {
    height: 120px; /* Reduce image size on mobile */
  }
  .card-body h5 {
    font-size: 16px;
  }
}
</style>
