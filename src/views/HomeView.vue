<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div class="page-wrapper">
    <Navbar />

    <main class="hero-container">
      <!-- Left Hero Column -->
      <div class="hero-left">
        <div class="hero-content">
          <div class="established-tag">
            <span class="line"></span>
            <span>ESTABLISHED 1905</span>
          </div>

          <h1 class="hero-heading">
            Exemplary <span>Christian</span><br />
            Education for Life.
          </h1>

          <p class="hero-description">
            A leading Christian institution in the Philippines, Central Philippine University nurtures intellectual growth and spiritual development through a commitment to <strong>Scientia et Fides</strong> (Science and Faith).
          </p>

          <div class="cta-group">
            <button class="btn-primary">Explore Academics</button>
            <button class="btn-secondary">Request Information</button>
          </div>
        </div>

        <!-- Metric Bar aligned to match target grid -->
        <div class="stats-card">
          <div class="stat-item">
            <h3>118+</h3>
            <p>Years of Excellence</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <h3>20+</h3>
            <p>Academic Programs</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <h3>5,000+</h3>
            <p>Active Students</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <h3>20+</h3>
            <p>Partner Institutions</p>
          </div>
        </div>
      </div>

      <!-- Right Card Column -->
      <div class="hero-right">
        <div class="gradient-card">
          <img alt="CPUlogo" class="logo" src="@/assets/PicLogo.jpg" width="125" height="125" />
          <h2 class="card-title">Central Philippine<br />University</h2>
          <p class="card-subtitle">SCIENTIA ET FIDES</p>
          <div class="card-divider"></div>
          <p class="card-quote">"A Heritage of Excellence,<br />A Future of Faith"</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-wrapper {
  width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.hero-container {
  height: 50vh;
  min-height: 480px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  padding: 1rem 4rem 2rem 4rem;
  gap: 3.5rem;
  box-sizing: border-box;
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.established-tag {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #7A5A00;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.established-tag .line {
  width: 32px;
  height: 2px;
  background-color: #C8A100;
}

.hero-heading {
  font-size: 3.3rem;
  color: #2B1B5E;
  margin: 0;
  line-height: 1.05;
  font-family: serif;
  font-weight: 700;
}

.hero-heading span {
  color: #C8A100;
  font-style: italic;
  font-weight: 400;
}

.hero-description {
  color: #4A4A4A;
  font-size: 0.95rem;
  max-width: 520px;
  margin: 0.25rem 0 0.5rem 0;
  line-height: 1.5;
}

.cta-group {
  display: flex;
  gap: 1.2rem;
}

.btn-primary {
  background-color: #2B1B5E;
  color: #ffffff;
  border: none;
  padding: 0.85rem 1.8rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
}

.btn-secondary {
  background-color: transparent;
  color: #2B1B5E;
  border: 1.5px solid #2B1B5E;
  padding: 0.85rem 1.8rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
}

.stats-card {
  display: flex;
  background-color: #F5F6FA;
  border: 1px solid #E6E6EC;
  border-radius: 12px;
  padding: 1.1rem 1rem;
  align-items: center;
  justify-content: space-around;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-divider {
  width: 1px;
  height: 35px;
  background-color: #E6E6EC;
}

.stat-item h3 {
  color: #2B1B5E;
  margin: 0;
  font-size: 1.35rem;
  font-weight: 800;
}

.stat-item p {
  color: #555555;
  margin: 0.2rem 0 0 0;
  font-size: 0.72rem;
  font-weight: 500;
}

.hero-right {
  display: flex;
  align-items: stretch;
}

.gradient-card {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #C8A100 0%, #FFFFFF 100%);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
}

.card-seal {
  width: 155px;
  height: 155px;
  object-fit: contain;
  margin-bottom: 1.2rem;
}

.card-title {
  color: #2B1B5E;
  font-family: serif;
  font-size: 1.85rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.15;
}

.card-subtitle {
  color: #7A5A00;
  font-size: 0.8rem;
  letter-spacing: 2.5px;
  font-weight: 700;
  margin-top: 0.5rem;
}

.card-divider {
  width: 40px;
  height: 2px;
  background-color: #7A5A00;
  margin: 1.2rem 0;
}

.card-quote {
  color: #333333;
  font-style: italic;
  font-size: 1.05rem;
  font-family: serif;
  margin: 0;
  line-height: 1.3;
}
</style>