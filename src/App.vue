<script setup>
import Sidebar from './components/Sidebar.vue';
import './assets/scss/style.scss';
</script>

<template>
  <div class="app">
    <div class="container">
      <img src="logo.svg" alt="logo">
      <div class="title">
        <b>Application</b> Information
      </div>
      <div class="sub-container">
        <Sidebar></Sidebar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
