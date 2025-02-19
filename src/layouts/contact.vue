<template>
  <section>
    <div class="contact-container text-light mt-4">
      <!-- Profile Section -->
      <div class="profile-section">
        <img src="@/assets/images/profile.png" alt="Profile Image" class="profile-image" />
        <h1>Ka Kimsear</h1>
        <p class="bio">
          Hi, I'm Kimsear, a passionate Junior UI/UX Designer and Junior Web Developer. I specialize in creating intuitive and visually appealing user interfaces, while ensuring seamless user experiences. With a solid foundation in web development, I enjoy transforming designs into fully functional websites that are both aesthetically pleasing and responsive across devices. I am constantly learning and evolving, driven by a love for innovation and problem-solving. Let's collaborate and build something amazing together!
        </p>
      </div>

      <p>You can reach me through the following social media platforms:</p>
      <ul class="social-media-list">
        <li>
          <a href="https://www.facebook.com/ka.kimsear.7" class="facebook" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-facebook"></i>
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ka-kimsear-9018b924a/" class="linkedin" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kim_sear7/" class="instagram" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-instagram"></i>
            Instagram
          </a>
        </li>
        <li>
          <a href="mailto:kakimsear07@gmail.com" class="email" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-envelope"></i>
            Email
          </a>
        </li>
        <li>
          <a href="https://t.me/kimsear7" class="telegram" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-telegram"></i>
            Telegram
          </a>
        </li>
      </ul>
    </div>
  </section>

  <!-- Location Section -->
  <section>
    <div class="location-section text-light">
      <h2>My Location</h2>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9297.321197388259!2d104.86437958177243!3d11.548842578235906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951ccee8065ff%3A0xf8ade76b6b96b8d7!2sAng%20Ta%20Minh%20Pagoda%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1739419587113!5m2!1sen!2skh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script required
</script>

<style scoped>
/* General Contact Section */
.contact-container {
  text-align: center;
  background-color: #333;
  border-radius: 8px;
  padding: 30px;
  max-width: 800px;
  margin: auto;
}

.profile-section {
  margin-bottom: 30px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.bio {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 20px;
}

p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

/* Social Media List */
.social-media-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.social-media-list li {
  margin: 10px 20px;
}

.social-media-list a {
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease-in-out;
}

.social-media-list a:hover {
  color: #007bff;
}

.social-media-list i {
  margin-right: 8px;
}

/* Location Section */
.location-section {
  text-align: center;
  padding: 30px;
}

.map-container {
  width: 100%;
  max-width: 800px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 400px;
  border: 0;
}

/* Media Queries */
@media (max-width: 768px) {
  .profile-image {
    width: 120px;
    height: 120px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .bio, p {
    font-size: 1rem;
  }

  .social-media-list {
    flex-wrap: wrap;
    justify-content: center;
  }

  .social-media-list li {
    margin: 8px;
  }

  iframe {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 100px;
    height: 100px;
  }

  h1 {
    font-size: 1.6rem;
  }

  .bio, p {
    font-size: 0.95rem;
  }

  .social-media-list a {
    font-size: 1.1rem;
  }

  iframe {
    height: 250px;
  }
}
</style>
