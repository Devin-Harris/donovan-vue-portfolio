<template>
  <div class="contact-container">
    <h2 class="contact-container__title">// Contact</h2>
    <h2><i class="fas fa-plus"></i> 02.08.2001</h2>
    <h2 class="link" @click="openLink('Email')">
      <i class="fas fa-plus"></i>
      staabdp@mail.uc.edu
    </h2>
    <h2><i class="fas fa-plus"></i> 1.859.835.2642</h2>
    <h2 class="link" @click="openLink('Instagram')">
      <i class="fas fa-plus"></i> Instagram
    </h2>
    <h2 class="link" @click="openLink('Youtube')">
      <i class="fas fa-plus"></i> Youtube
    </h2>
  </div>
</template>

<script src="./contact.js"></script>
<style src="./contact.scss" lang="scss"></style>