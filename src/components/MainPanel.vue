<script setup>
</script>

<template>
  <div class="main-panel">
    <div class="title">Let's start with some basic information</div>
    <div class="desc">Please provide your name, address, Country.</div>
    <div class="input-desc">
      Full name<span class="red">*</span>
    </div>
    <div class="input-wrapper">
      <input type="text" class="input" placeholder="Nom" />
      <img class="input-icon" src="icons/user.svg" alt="user">
    </div>
    <div class="input-desc">Personal address<span class="red">*</span></div>
    <div class="input-wrapper">
      <input type="text" class="input" placeholder="Personal address" />
      <img class="input-icon" src="icons/location.svg" alt="location">
    </div>
    <div class="input-desc">Country<span class="red">*</span></div>
    <input type="text" class="input" placeholder="Country" />
    <div class="button">Continue
      <img src="icons/arrow-right.svg" alt="arrow-right">
    </div>
  </div>
</template>