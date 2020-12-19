<template>
  <div
    class="image-slider-container"
    :style="{ backgroundImage: `url(${imageSrc})` }"
  >
    <!-- <div class="arrows">
      <div class="left-click">
        <i class="fas fa-chevron-left" @click="prevImage"></i>
      </div>
      <div class="right-click">
        <i class="fas fa-chevron-right" @click="nextImage"></i>
      </div>
    </div> -->
  </div>
</template>

<script src="./image-slider.js"></script>
<style src="./image-slider.scss" lang="./image-slider.scss"></style>