<template>
  <v-app>
    <v-app-bar app clipped-left color="black">
      <v-toolbar-side-icon name="logo">
        <v-img :src="require('./assets/swrv_logo.png')" class="mr-3" height="30px" width="30px" />
      </v-toolbar-side-icon>
      <router-link id="toolbar_title" to="/">
        <v-toolbar-title>SWRV</v-toolbar-title>
      </router-link>
    </v-app-bar>
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>

<style>
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
</style>
