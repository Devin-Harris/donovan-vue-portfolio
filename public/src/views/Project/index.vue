<template>
  <div class="project-container">
    <div
      v-if="$route.name === 'Photo'"
      class="project-container__photo"
    >
      <div
        class="image-container"
        v-for="image in images"
        :key="image"
        :style="{ backgroundImage: `url('${getImageSrc(image)}')` }"
      ></div>
    </div>
  </div>
</template>

<script src="./Project.js"></script>
<style src="./Project.scss" lang="scss"></style>