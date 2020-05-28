<template>
  <!-- <v-app
    class="bg-pan-left"
    style="background: linear-gradient(270deg, #cc6aa5, #3e91cc, #2dcca7); background-size:600% 100%"
  >-->
  <v-app id="apps">
    <!-- <v-app-bar app clipped-left color="black">
      <v-toolbar-side-icon name="logo">
        <v-img :src="require('./assets/swrv_logo.png')" class="mr-3" height="30px" width="30px" />
      </v-toolbar-side-icon>
      <router-link id="toolbar_title" to="/">
        <v-toolbar-title>SWRV</v-toolbar-title>
      </router-link>
    </v-app-bar>-->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style>
.bg-pan-left {
  animation: bg-pan-left 5s infinite alternate both;
}
/*
@keyframes bg-pan-left {
  0% {
    background: linear-gradient(270deg, #cc6aa5, #3e91cc, #2dcca7);
  }
  100% {
    background: linear-gradient(90deg, #2dcca7, #cc6aa5, #3e91cc);
  }
} */
@keyframes bg-pan-left {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
#toolbar_title {
  color: white;
  text-decoration: inherit;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#apps {
  background-image: url("./assets/imgs/back.jpg");
  background-size: 120%;
}
</style>
