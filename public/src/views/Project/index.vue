<template>
  <div class="project-container">
    <div
      v-if="$route.name === 'Photo'"
      class="project-container__photo"
    >
      <div
        class="image-container"
        v-for="image in images"
        @click="openImage(image)"
        :key="image"
        :style="{ backgroundImage: `url('${getImageSrc(image)}')` }"
      ></div>
    </div>
    <transition name="fade">
      <div v-if="selectedImage" class="project-container__photo-modal-container">
        <div class="actions">
          <i class="fas fa-caret-left" @click="prevImageOverlay"></i>
          <i class="fas fa-caret-right" @click="nextImageOverlay"></i>
          <i class="fas fa-times" @click="closeOverlay"></i>
        </div>
        <!-- <div class="project-container__photo-modal" :style="{ backgroundImage: `url('${getImageSrc(selectedImage)}')` }"></div> -->
        <img class="project-container__photo-modal" :src="getImageSrc(selectedImage)" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="selectedImage" class="project-container__photo-overlay"></div>
    </transition>
  </div>
</template>

<script src="./Project.js"></script>
<style src="./Project.scss" lang="scss"></style>