<template>
  <section id="hero" class="hero section dark-background">

    <img src="https://i.pinimg.com/originals/75/87/df/7587df77ef521cf98057d0028ee983f1.gif" alt="" data-aos="fade-in" class="">

    <div class="container text-light" data-aos="fade-up" data-aos-delay="100">
      <h2>KA Kimsear</h2>
      <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Junior Web Developer.</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      <div class="social-links">
        <a href="https://www.facebook.com/ka.kimsear.7" class="facebook" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/kim_sear7/" class="instagram" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/ka-kimsear-9018b924a/" class="linkedin" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://t.me/kimsear7" class="telegram" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-telegram"></i>
        </a>
        <a href="mailto:kakimsear07@gmail.com" class="email" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row text-light">
            <div class="col-lg-12 text-center my-2">
                <h4>My Album</h4>
            </div>
         </div>
         <!-- <div class="portfolio-menu mt-2 mb-4">
            <ul>
               <li class="btn btn-outline-dark active" data-filter="*">All</li>
               <li class="btn btn-outline-dark" data-filter=".gts">Girls T-shirt</li>
               <li class="btn btn-outline-dark" data-filter=".lap">Laptops</li>
               <li class="btn btn-outline-dark text" data-filter=".selfie">selfie</li>
            </ul>
         </div> -->
         <div class="portfolio-item row g-2 p-3">
            <div class="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="@/assets/images/album/pic1.jpg" class="fancylight popup-btn" data-fancybox-group="light">
                <img class="img-fluid album-img" src="@/assets/images/album/pic1.jpg" alt="">
              </a>
            </div>
            <div class="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="@/assets/images/album/pic2.jpg" class="fancylight popup-btn" data-fancybox-group="light">
                <img class="img-fluid album-img" src="@/assets/images/album/pic2.jpg" alt="">
              </a>
            </div>
            <div class="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="@/assets/images/album/pic9.jpg" class="fancylight popup-btn" data-fancybox-group="light">
                <img class="img-fluid album-img" src="@/assets/images/album/pic13.jpg" alt="">
              </a>
            </div>
            <div class="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="@/assets/images/album/pic4.jpg" class="fancylight popup-btn" data-fancybox-group="light">
                <img class="img-fluid album-img" src="@/assets/images/album/pic4.jpg" alt="">
              </a>
            </div>
            <div class="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="@/assets/images/album/pic5.jpg" class="fancylight popup-btn" data-fancybox-group="light">
                <img class="img-fluid album-img" src="@/assets/images/album/pic5.jpg" alt="">
              </a>
            </div>
            <div class="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="@/assets/images/album/pic6.jpg" class="fancylight popup-btn" data-fancybox-group="light">
                <img class="img-fluid album-img" src="@/assets/images/album/pic6.jpg" alt="">
              </a>
            </div>
            <div class="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="@/assets/images/album/pic7.jpg" class="fancylight popup-btn" data-fancybox-group="light">
                <img class="img-fluid album-img" src="@/assets/images/album/pic7.jpg" alt="">
              </a>
            </div>
            <div class="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="@/assets/images/album/pic7.jpg" class="fancylight popup-btn" data-fancybox-group="light">
                <img class="img-fluid album-img" src="@/assets/images/album/pic11.jpg" alt="">
              </a>
            </div>
          </div>
       </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* Hero Section */
.hero {
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero:before {
  content: "";
  /* Background mix using rgba for better cross-browser support */
  background: rgba(var(--background-color), 0.7);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero .container {
  position: relative;
  z-index: 3;
}

.hero h2 {
  margin: 0;
  font-size: 64px;
  font-weight: 700;
}

.hero p {
  margin: 5px 0 0 0;
  font-size: 26px;
}

.hero p span {
  letter-spacing: 1px;
  border-bottom: 2px solid var(--accent-color);
}

/* Social links */
.hero .social-links {
  margin-top: 25px;
}

.hero .social-links a {
  font-size: 24px;
  display: inline-block;
  color: rgba(var(--default-color), 0.5); /* More compatible with color mixing */
  line-height: 1;
  margin-right: 20px;
  transition: 0.3s;
}

.hero .social-links a:hover {
  color: var(--accent-color);
}

/* Responsive styling for small screens */
@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 20px;
  }

  /* Album images */
  .album-img {
    width: 100%; /* Ensure image takes full width on smaller screens */
    height: 200px; /* Set a fixed height on mobile if desired */
    object-fit: cover; /* Maintain aspect ratio */
  }
}

/* Larger screens */
@media (min-width: 769px) {
  .album-img {
    height: 250px; /* Set a fixed height for larger screens */
    object-fit: cover; /* Maintain aspect ratio */
  }
}

/* Album Item Styles */
.album-img {
  width: 100%; /* Make the image width responsive to its container */
  height: 320px; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure images are cropped and cover the space within the given dimensions */
}

.item {
  position: relative; /* Allows for absolute positioning of overlay, if needed */
  overflow: hidden; /* Ensure no image overflows */
}
</style>
