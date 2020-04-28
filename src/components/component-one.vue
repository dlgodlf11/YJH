<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <h1 class="popups-enter-active">The Choom</h1>
      {{ showbtn }}
    </v-row>
    <v-row align="center" justify="center">
      <transition name="puff">
        <v-btn class="jello-horizontal" v-if="show" x-large dark @click="onclick">start</v-btn>
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
.popups-enter-active {
  font-size: min(10vw, 130px);
  text-align: center;
  animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate both;
}
@keyframes text-pop-up-top {
  0% {
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateY(-50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc,
      0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}
.jello-horizontal {
  animation: jello-horizontal 5s infinite both;
}
@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }
  5% {
    transform: scale3d(1.25, 0.75, 1);
  }
  10% {
    transform: scale3d(0.75, 1.25, 1);
  }
  15% {
    transform: scale3d(1.15, 0.85, 1);
  }
  20% {
    transform: scale3d(0.95, 1.05, 1);
  }
  25% {
    transform: scale3d(1.05, 0.95, 1);
  }
  30% {
    transform: scale3d(1, 1, 1);
  }
}
</style>
