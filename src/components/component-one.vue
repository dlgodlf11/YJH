<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <transition name="puff">
        <v-btn v-if="show" x-large color="success" dark @click="onclick">start</v-btn>
      </transition>
      {{ showbtn }}
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    showbtn() {
      this.show = true;
    },
  },
  methods: {
    onclick() {
      this.show = false;
      setTimeout(() => {
        this.$router.push("/two");
      }, 300);
    },
  },
};
</script>
<style>
.puff-enter-active {
  animation: puff-in-center 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}
.puff-leave-active {
  animation: puff-out-center 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}
@keyframes puff-in-center {
  0% {
    transform: scale(5);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-out-center {
  0% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    filter: blur(4px);
    opacity: 0;
  }
}
</style>
