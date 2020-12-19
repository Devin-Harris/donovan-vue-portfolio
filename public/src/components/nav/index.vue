<template>
  <div class="nav-container">
    <div class="nav-container-information">
      <h2 class="name-link" @click="linkClick(links[0])">// Donovan Staab</h2>
      <i
        class="fas fa-plus hamburger"
        @click="toggleLinks"
        :class="{ open: isLinksOpen }"
      ></i>
      <transition name="slide-fade">
        <div v-if="isLinksOpen">
          <div class="link-container" v-for="link in links" :key="link.name">
              <h2
                class="link-container__link"
                :class="{ active: link.isActive }"
                @click.stop="linkClick(link)"
              >
                <span v-if="link.isActive">//</span>
                <i v-else class="fas fa-plus"></i>
                {{ link.name }}
              </h2>
              <transition name="slide-fade-fast">
                <div v-if="link.subLinksOpen">
                  <h2
                    class="link-container__sub-link"
                    :class="{ active: subLink.isActive }"
                    v-for="subLink in link.subLinks"
                    :key="subLink.name"
                    @click.stop="subLinkClick(subLink)"
                  >
                    <span v-if="subLink.isActive">//</span>
                    <i v-else class="fas fa-plus"></i>
                    {{ subLink.name }}
                  </h2>
                </div>
              </transition>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script src="./nav.js"></script>
<style src="./nav.scss" lang="scss"></style>