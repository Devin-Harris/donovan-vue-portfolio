<template>
  <div id="app">
    <div class="content">
      <Nav />
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/nav";
export default {
  name: "app",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "HelveticaBold";
  src: url("./assets/fonts/Helvetica-Bold.ttf") format("truetype"); /* Safari, Android, iOS */
}
@font-face {
  font-family: "Helvetica";
  src: url("./assets/fonts/Helvetica.ttf") format("truetype"); /* Safari, Android, iOS */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: HelveticaBold;
}

html {
  background-color: $dark;
}

.content {
  display: grid;
  grid-template-columns: max-content auto;
}
</style>
