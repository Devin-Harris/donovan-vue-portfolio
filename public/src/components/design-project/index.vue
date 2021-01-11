<template>
  <div class="design-project-container">
    
    <div v-if="project === 'Five Spaces'" class="five-spaces-container">
      
    </div>

    <div v-if="project === 'Motion Form'" class="motion-form-container">
      
    </div>

    <div v-if="project === 'Modular Wall'" class="modular-wall-container">
      <div class="main-images image-grid">
        <div class="main-image" @click.stop="openImage(modularWallImages[0])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[0])}')`}" />
        <div class="main-image" @click.stop="openImage(modularWallImages[1])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[1])}')`}" />
      </div>
      <div class="main-text project-text">
        <h4>The modular wall involved the development of creating a repetitive unit that could be assembled in various configurations to construct a mobile wall. Working on a team of 9, 60 module units were cast and assembled.</h4>
      </div>
      <div class="images-grid-3 image-grid">
        <div class="main-image" @click.stop="openImage(modularWallImages[2])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[2])}')`}" />
        <div class="main-image" @click.stop="openImage(modularWallImages[3])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[3])}')`}" />
        <div class="main-image" @click.stop="openImage(modularWallImages[4])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[4])}')`}" />
        <div class="main-text">
          <h4>// CNC Unit
            <br>
            + High density foam core unit
            <br>
            + Two part negative mold with keying
          </h4>
        </div>
        <div class="main-text">
          <h4>// Mold Creation
            <br>
            + Polyurethame VytaFlex mold
            <br>
            + PVC cap embedded within the units
          </h4>
        </div>
        <div class="main-text">
          <h4>// Unit Set
            <br>
            + 60 Units created
            <br>
            + 25 Lb. per concrete unit
          </h4>
        </div>
      </div>
      <div class="images-grid-2 image-grid">
        <div class="main-image" @click.stop="openImage(modularWallImages[5])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[5])}')`}" />
        <div class="main-image" @click.stop="openImage(modularWallImages[6])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[6])}')`}" />
        <div class="main-image" @click.stop="openImage(modularWallImages[7])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[7])}')`}" />
        <div class="main-image" @click.stop="openImage(modularWallImages[8])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[8])}')`}" />
        <div class="main-image" @click.stop="openImage(modularWallImages[9])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[9])}')`}" />
        <div class="main-image" @click.stop="openImage(modularWallImages[10])" :style="{backgroundImage: `url('${getImageSrc(modularWallImages[10])}')`}" />
      </div>

      <transition name="fade">
        <div v-if="selectedImage" class="project-container__design-modal-container">
          <div class="actions">
            <i class="fas fa-times" @click="closeOverlay"></i>
          </div>
          <img class="project-container__design-modal" :src="getImageSrc(selectedImage)" />
        </div>
      </transition>
      <transition name="fade">
        <div v-if="selectedImage" class="project-container__design-overlay"></div>
      </transition>
    </div>

    <div v-if="project === '[L] Pool'" class="pool-container">
      
    </div>

    <div v-if="project === '[M] Pavilion'" class="pavilion-container">
      <div class="main-images image-grid">
        <div class="main-image" @click.stop="openImage(pavilionImages[0])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[0])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[1])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[1])}')`}" />
      </div>
      <div class="main-text project-text">
        <h4>The modular wall involved the development of creating a repetitive unit that could be assembled in various configurations to construct a mobile wall. Working on a team of 9, 60 module units were cast and assembled.</h4>
      </div>
      <div class="images-grid-3 image-grid">
        <div class="main-image" @click.stop="openImage(pavilionImages[2])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[2])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[3])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[3])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[4])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[4])}')`}" />
        <div class="main-text">
          <h4>// CNC Unit
            <br>
            + High density foam core unit
            <br>
            + Two part negative mold with keying
          </h4>
        </div>
        <div class="main-text">
          <h4>// Mold Creation
            <br>
            + Polyurethame VytaFlex mold
            <br>
            + PVC cap embedded within the units
          </h4>
        </div>
        <div class="main-text">
          <h4>// Unit Set
            <br>
            + 60 Units created
            <br>
            + 25 Lb. per concrete unit
          </h4>
        </div>
      </div>
      <div class="images-grid-2 image-grid">
        <div class="main-image" @click.stop="openImage(pavilionImages[5])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[5])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[6])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[6])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[7])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[7])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[8])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[8])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[9])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[9])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[10])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[10])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[11])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[11])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[12])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[12])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[13])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[13])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[14])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[14])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[15])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[15])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[16])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[16])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[17])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[17])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[18])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[18])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[19])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[19])}')`}" />
        <div class="main-image" @click.stop="openImage(pavilionImages[20])" :style="{backgroundImage: `url('${getImageSrc(pavilionImages[20])}')`}" />
      </div>

      <transition name="fade">
        <div v-if="selectedImage" class="project-container__design-modal-container">
          <div class="actions">
            <i class="fas fa-times" @click="closeOverlay"></i>
          </div>
          <img class="project-container__design-modal" :src="getImageSrc(selectedImage)" />
        </div>
      </transition>
      <transition name="fade">
        <div v-if="selectedImage" class="project-container__design-overlay"></div>
      </transition>
    </div>

    <div v-if="project === '[S] Restroom'" class="restroom-container">
      
    </div>

  </div>
</template>

<script src="./design-project.js"></script>
<style scoped lang="scss" src="./design-project.scss"></style>