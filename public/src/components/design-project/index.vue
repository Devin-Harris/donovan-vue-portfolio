<template>
  <div class="design-project-container">

    <div v-if="project === 'Five Spaces'" class="five-spaces-container">
      
    </div>

    <div v-if="project === 'Motion Form'" class="motion-form-container">
      
    </div>

    <div v-if="project === 'Modular Wall'" class="modular-wall-container">
      <div class="main-images image-grid">
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV1.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV1.jpg')}')`}" />
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV2.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV2.jpg')}')`}" />
      </div>
      <div class="main-text project-text">
        <h4>The modular wall involved the development of creating a repetitive unit that could be assembled in various configurations to construct a mobile wall. Working on a team of 9, 60 module units were cast and assembled.</h4>
      </div>
      <div class="images-grid-3 image-grid">
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV10.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV10.jpg')}')`}" />
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV9.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV9.jpg')}')`}" />
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV8.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV8.jpg')}')`}" />
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
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV3.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV3.jpg')}')`}" />
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV4.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV4.jpg')}')`}" />
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV7.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV7.jpg')}')`}" />
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV6.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV6.jpg')}')`}" />
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWallV.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWallV.jpg')}')`}" />
        <div class="main-image" @click.stop="openImage('../../assets/images/Projects/Design/ModularWall/ModularWall5.jpg')" :style="{backgroundImage: `url('${require('../../assets/images/Projects/Design/ModularWall/ModularWall5.jpg')}')`}" />
      </div>

      <transition name="fade">
        <div v-if="selectedImage" class="project-container__design-modal-container">
          <img class="project-container__design-modal" :src="require(getImage)" />
        </div>
      </transition>
      <transition name="fade">
        <div v-if="selectedImage" class="project-container__design-overlay"></div>
      </transition>
    </div>

    <div v-if="project === '[L] Pool'" class="pool-container">
      
    </div>

    <div v-if="project === '[M] Pavilion'" class="pavilion-container">
      
    </div>

    <div v-if="project === '[S] Restroom'" class="restroom-container">
      
    </div>

  </div>
</template>

<script src="./design-project.js"></script>
<style scoped lang="scss" src="./design-project.scss"></style>