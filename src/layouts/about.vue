<template>
  <section id="about" class="about section text-light m-1">
      <div class="container section-title p-4" data-aos="fade-up">
        <h2 class="text-center">CURRICULUM VITAE</h2>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img src="@\assets\images\profile.png" alt="Profile Picture" class="img-fluid rounded-circle mb-2" style="max-width: 350px;">
          </div>
          <div class="col-lg-8 content">
            <h4>I'm KA Kimsear <b class="text-primary">(高金星)</b></h4>
            <h6>Junior UI/UX Designer &amp; Junior Web Developer.</h6>
            <p class="fst-italic py-3">

            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><strong>Birthday:</strong> <span>12 December 2001</span></li>
                  <li><strong>Sex:</strong> <span>Male</span></li>
                  <li><strong>Phone:</strong> <span>+855 962 711 963</span></li>
                  <li><strong>City:</strong> <span>Phnom Penh, Cambodia</span></li>
                  <li><strong>Place of Birth: </strong> <span>Pursat Province</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><strong>Age:</strong> <span>23</span></li>
                  <li><strong>Degree:</strong> <span>Bachelor</span></li>
                  <li><strong>Email:</strong> <span>kakimsear07@gmail.com</span></li>
                  <li><strong>Marital Status: </strong> <span>Single</span></li>
                  <li><strong>Cambodian Driving License: </strong> <span>B Type</span></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  <section id="resume" class="resume section text-light mt-4">
      <!-- Section Title -->
      <div class="container section-title text-center" data-aos="fade-up">
        <h2>Resume</h2>
      </div><!-- End Section Title -->
      <div class="container">

        <div class="row">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h5 class="resume-title">Education</h5>
            <div class="resume-item">
              <h6>Diplomat</h6>
              <p> 2013 – 2016 : Diplomat at Pursat Scondary school</p>
              <p><em>Pursat Scondary school</em></p>
            </div>
            <div class="resume-item">
              <h6>Baccalaureate II</h6>
              <p> 2016 – 2019 		: Baccalaureate II at Pursat High School</p>
              <p><em>Pursat High School</em></p>
            </div>
            <div class="resume-item">
              <h6>English Program</h6>
              <p> August 2020 : Complete the Intensive English Program at the School of foreign Language at the University of Cambodia</p>
              <p><em>The University of Cambodia</em></p>
            </div>
            <div class="resume-item">
              <h6>Bachelor Degree</h6>
              <p> 2020 – 2024	: Graduated Bachelor of Information Technology, majoring in College of Science and Technology at The University of Cambodia</p>
              <p><em>The University of Cambodia</em></p>
            </div>

          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h5 class="resume-title">Professional Experience</h5>
            <div class="resume-item">
              <h6><strong>Internship</strong></h6>
              <p>Feb 2024 – Aug 2024</p>
              <p><em>The University of Cambodia, Phnom Penh, Cambodia </em></p>
              <ul>
                <li>Internship in the Office of Academic Affairs (OAA), at the University of Cambodia</li>
              </ul>
            </div><!-- Edn Resume Item -->

            <div class="resume-item">
              <h6><strong> Web Developer Intern</strong></h6>
              <p>Nov 2024 - Feb 2025 </p>
              <p><em>Chip Mong Group, Phnom Penh, Cambodia</em></p>
              <ul>
                <li>Internship as Web Developer</li>
                <li>Dahboard Design using Vue3, Bootstrap5, Larevel11, Api, jwt-authentication-laravel, mysql database.</li>
              </ul>
            </div><!-- Edn Resume Item -->
            <div class="col-lg-12">
                <p><strong>QR Code:</strong> Scan this QR code for my Education information:</p>
                <img src="@/assets/images/qr.jpg" alt="QR Code" style="width: 150px; height: 150px;">
              </div>
          </div>
        </div>
      </div>
  </section>
  <section>
    <div class="container text-light">
      <h2 class="py-4">My Skills</h2>
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 p-2 hover-zoom">
          <div class="col" v-for="(project, index) in projectData" :key="index">
            <div class="card">
              <img :src="project.image" class="card-img-top" alt="Project Image">
              <div class="card-body text-center">
                <h5 class="card-title">{{ project.title }}</h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import htmlImage from '@/assets/images/skills/html.png';
import bootstrapImage from '@/assets/images/skills/bootstrap.png';
import vueImage from '@/assets/images/skills/vue.png';
import tailwindImage from '@/assets/images/skills/tailwind.png';
import laravelImage from '@/assets/images/skills/laravel.png';
import figmaImage from '@/assets/images/skills/figma.png';

const projectData = [
  {
    title: 'html',
    image: htmlImage,
  },
  {
    title: 'css',
    image: 'https://static.vecteezy.com/system/resources/previews/012/697/301/non_2x/3d-css-icon-design-free-png.png',
  },
  {
    title: 'javascript',
    image: 'https://i.pinimg.com/736x/f8/5b/8f/f85b8fbae36a23c52a33504d9f8fc5ab.jpg',
  },
  {
    title: 'PHP',
    image: 'https://i.pinimg.com/736x/bf/c2/4f/bfc24f20e1d558d3c8df6163a3fe61cd.jpg',
  },
  {
    title: 'bootstrap',
    image: bootstrapImage,
  },
  {
    title: 'tailwind',
    image: tailwindImage,
  },
  {
    title: 'laravel',
    image: laravelImage,
  },
  {
    title: 'mysql Database',
    image: 'https://i.pinimg.com/736x/f8/ee/69/f8ee696f018c1a4ad6b9972b85fc6b2e.jpg',
  },
  {
    title: 'Xampp',
    image: 'https://i.pinimg.com/736x/5c/3d/4b/5c3d4b018e0995b97171a35e06da9dae.jpg',
  },
  {
    title: 'vue',
    image: vueImage,
  },
  {
    title: 'figma',
    image: figmaImage,
  },
  {
    title: 'photoshop',
    image: 'https://i.pinimg.com/736x/e3/41/a0/e341a0235ac9e036bf0c414597e36a3f.jpg',
  },
  {
    title: 'illustrator',
    image: 'https://i.pinimg.com/736x/3b/a0/97/3ba097e2e8013f56b287a607b6721868.jpg',
  },
  {
    title: 'canva',
    image: 'https://i.pinimg.com/736x/4a/bd/1b/4abd1bb47e59cefcd9c5e472c9705e52.jpg',
  },
  {
    title: 'github',
    image: 'https://i.pinimg.com/736x/60/5f/9d/605f9d4d4e1bef979969a2e56b6dfbe3.jpg',
  },
  {
    title: 'word',
    image: 'https://i.pinimg.com/736x/17/dd/2d/17dd2dcb352fbf6b1426552c63c6bfce.jpg',
  },
  {
    title: 'excel',
    image: 'https://i.pinimg.com/736x/4a/32/02/4a3202d402f8f563dc6ffc0419df3403.jpg',
  },
  {
    title: 'powerpoint',
    image: 'https://i.pinimg.com/736x/80/68/92/8068924250f6c5dc490267ab19a91a21.jpg',
  },

];
</script>

<style>
.card-img-top {
    height: 190px;
    object-fit: cover;
}
.hover-zoom .card {
  transition: transform 0.3s ease-in-out;
}

/* Zoom effect on hover */
.hover-zoom .card:hover {
  transform: scale(1.1); /* Increase size slightly */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
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
    height: 80px; /* Reduce image size on tablets */
  }
}

@media (max-width: 576px) {
  .card-img-top {
    height: 120px;
  }
  .card-body h5 {
    font-size: 14px;
  }
  .profile{
    padding: 10px;
    margin-bottom: 20px;
  }
}
</style>
