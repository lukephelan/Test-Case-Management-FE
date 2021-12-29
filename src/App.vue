<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand>
        <b-img :src="Logo" alt="Icon" height="50"></b-img>
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/cases">Cases</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Logo from "./assets/Logo.png";

export default {
  name: "app",
  data() {
    return {
      Logo
    };
  }
};
</script>

<style></style>
