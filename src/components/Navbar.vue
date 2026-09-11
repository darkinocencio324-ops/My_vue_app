<template>
    <header class="navbar">
        <div class="logo_container">
            <img alt="CPUlogo" class="logo" src="@/assets/CPULogo.png" width="50" height="50" />
            <div class="logo-text">
                <span class="brand-title">Central Philippine University</span>
                <span class="brand-motto">SCIENTIA ET FIDES</span>
            </div>
        </div>
        <nav class="nav-links">
      <router-link to="/" class="active">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/admissions">Admissions</router-link>
      <router-link to="/academics">Academics</router-link>
      <router-link to="/sample3">Sample3</router-link>
      <router-link to="/sample2">sample2</router-link>
      <router-link to="/sample">Sample</router-link>
    </nav>
    </header>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 4rem;
  background-color: #ffffff;
  width: 100%;
  box-sizing: border-box;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.logo-img {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-family: serif;
  font-weight: 700;
  font-size: 1.35rem;
  color: #2B1B5E;
  line-height: 1.1;
}

.brand-motto {
  font-size: 0.65rem;
  letter-spacing: 2.5px;
  color: #7A5A00;
  font-weight: 700;
  margin-top: 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.2rem;
}

.nav-item {
  text-decoration: none;
  color: #333333;
  font-size: 0.95rem;
  font-weight: 500;
  padding-bottom: 4px;
  white-space: nowrap;
}

.nav-item.active {
  color: #2B1B5E;
  font-weight: 700;
  border-bottom: 3px solid #C8A100;
}

.btn-portal {
  background-color: #2B1B5E;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.6rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
}
</style>