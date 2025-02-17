<template>
  <section id="hero" class="hero section dark-background">

    <img src="https://i.pinimg.com/originals/75/87/df/7587df77ef521cf98057d0028ee983f1.gif" alt="" data-aos="fade-in" class="">

    <div class="container text-light" data-aos="fade-up" data-aos-delay="100">
      <h2>KA Kimsear</h2>
      <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Web Designer</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      <div class="social-links">
        <a href="#" class="twitter" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-twitter-x"></i>
        </a>
        <a href="https://www.facebook.com/ka.kimsear.7" class="facebook" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#" class="instagram" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#" class="youtube" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-youtube"></i>
        </a>
        <a href="#" class="linkedin" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
    <div>
      </div>
  </section>
  
</template>

<script setup lang="ts">

</script>

<style scoped>
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
  background: color-mix(in srgb, var(--background-color), transparent 70%);
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

.hero .social-links {
  margin-top: 25px;
}

.hero .social-links a {
  font-size: 24px;
  display: inline-block;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  line-height: 1;
  margin-right: 20px;
  transition: 0.3s;
}

.hero .social-links a:hover {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 20px;
  }
}
</style>
