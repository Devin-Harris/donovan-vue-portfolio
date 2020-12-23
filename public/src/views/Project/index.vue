<template>
  <div class="project-container">

    <div v-if="$route.name === 'Photo'" class="project-container-photo-container">
      <h1 class="photo__title">// Photo</h1>
      <div
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

    <div v-if="$route.name === 'Design'" class="project-container-design-container">
      <h1 class="design__title">// Design</h1>
      <div class="links-container">
        <h4 class="links-container__link" v-for="project in designProjects" :class="{active: project === selectedDesignProject}" :key="project" @click="selectProject(project)">
          <span v-if="project === selectedDesignProject">//</span>
          <i v-else class="fas fa-plus"></i>
          {{project}}
          </h4>
      </div>
      
      <design-project :project="selectedDesignProject" />
    </div>

  </div>
</template>

<script src="./Project.js"></script>
<style src="./Project.scss" lang="scss"></style>