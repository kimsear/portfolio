<template>
  <section>
    <div class="container text-light" data-aos="fade-up" data-aos-delay="100">

      <div class="row justify-content-center mt-2">
        <div class="col-lg-4">
          <img src="../assets/images/profile.png" class="profile rounded-circle text-center mt-4" width="300" height="300">
        </div>
        <div class="col-lg-8 content">
          <h3>Web Developer &amp; UI/UX Designer</h3>
          <p class="fst-italic py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li> <strong>Birthday:</strong> <span>12 December 2001</span></li>
                <li> <strong>Website:</strong> <span>www.example.com</span></li>
                <li> <strong>Phone:</strong> <span>+855 962 711 963</span></li>
                <li> <strong>City:</strong> <span>Phnom Penh, CAMBODIA</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><strong>Age:</strong> <span>23</span></li>
                <li><strong>Degree:</strong> <span>Baclor</span></li>
                <li> <strong>Email:</strong> <span>kakimsear07@gmail.com</span></li>
                <li> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          <p class="py-3">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
          </p>
        </div>
      </div>

    </div>
  </section>
  <section id="resume" class="resume section text-light">

<!-- Section Title -->
    <div class="container section-title " data-aos="fade-up">
      <h2>Resume</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row">

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Sumary</h3>

          <div class="resume-item pb-0">
            <h4>Brandon Johnson</h4>
            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div><!-- Edn Resume Item -->

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Master of Fine Arts &amp; Graphic Design</h4>
            <h5>2015 - 2016</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
          </div><!-- Edn Resume Item -->

          <div class="resume-item">
            <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
            <h5>2010 - 2014</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
          </div><!-- Edn Resume Item -->

        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Senior graphic design specialist</h4>
            <h5>2019 - Present</h5>
            <p><em>Experion, New York, NY </em></p>
            <ul>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
          </div><!-- Edn Resume Item -->

          <div class="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div><!-- Edn Resume Item -->

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
  {
    title: 'photoshop',
    image: 'https://i.pinimg.com/736x/e3/41/a0/e341a0235ac9e036bf0c414597e36a3f.jpg',
  },
  {
    title: 'photoshop',
    image: 'https://i.pinimg.com/736x/e3/41/a0/e341a0235ac9e036bf0c414597e36a3f.jpg',
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
