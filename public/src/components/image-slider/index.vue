<template>
  <div class="image-slider-container">
    <div class="image-item-container" v-for="(image, i) in images" :key="i">
      <transition name="fade">
        <div
          v-if="i === activeImageIndex"
          class="image-item"
          :style="{ backgroundImage: `url(${getImageSrc(image)})` }"
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
      </transition>
    </div>
  </div>
</template>

<script src="./image-slider.js"></script>
<style src="./image-slider.scss" lang="./image-slider.scss"></style>