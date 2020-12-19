<template>
  <div class="nav-container">
    <h2 class="name-link">// Donovan Staab</h2>
    <i
      class="fas fa-plus hamburger"
      @click="toggleLinks"
      :class="{ open: isLinksOpen }"
    ></i>
    <div v-if="isLinksOpen">
      <div class="link-container" v-for="link in links" :key="link.name">
        <h2 class="link-container__link" @click.stop="linkClick(link)">
          <span>{{ link.isActive ? "//" : "+" }}</span> {{ link.name }}
        </h2>
        <div v-if="link.subLinksOpen">
          <h2
            class="link-container__sub-link"
            v-for="subLink in link.subLinks"
            :key="subLink.name"
            @click.stop="subLinkClick(subLink)"
          >
            <span>{{ subLink.isActive ? "//" : "+" }}</span> {{ subLink.name }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./nav.js"></script>
<style src="./nav.scss" lang="scss"></style>