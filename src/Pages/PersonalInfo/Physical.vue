<script setup>

</script>

<template>
  <div class="main-panel">
    <div class="title">Proof of European physical presencen</div>
    <div class="desc">Please provide your Office space, Economic Area, Home address.</div>
    <div class="input-desc">
      Office space<span class="red">*</span>
    </div>
    <div class="input-wrapper">
      <input type="text" class="input" placeholder="Office space" />
      <img class="input-icon" src="icons/office.svg" alt="office">
    </div>
    <div class="input-desc">Economic Area<span class="red">*</span></div>
    <div class="input-wrapper">
      <input type="text" class="input" placeholder="Economic Area" />
      <img class="input-icon" src="icons/location.svg" alt="location">
    </div>
    <div class="input-desc">Director home address<span class="red">*</span></div>
    <div class="input-wrapper">
      <input type="text" class="input" placeholder="Director home address" />
      <img class="input-icon" src="icons/home.svg" alt="home">
    </div>
    <div class="buttons">
      <div class="next-button">Continue
        <img src="icons/arrow-right.svg" alt="arrow-right">
      </div>
      <router-link to="/basicinfo">
        <div class="prev-button">Back
        </div>
      </router-link>
    </div>
  </div>
</template>