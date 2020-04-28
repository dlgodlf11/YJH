<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <video autoplay="true" id="video" width="640" height="362"></video>
      <video class="video-stream" src="../videos/정국.mp4" type="video/mp4" id="video2" width="640" height="362"></video>
      <canvas id="output" />
      <canvas id="output2" />
    </v-row>
    <v-row align="center" justify="center">
      <v-btn @click="start">start</v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <transition name="bounce" mode="out-in">
        <div :key="score">
          <h1>{{ score }}</h1>
        </div>
      </transition>
    </v-row>
    {{ msg }}
  </v-container>
</template>

<script>
import setupCamera from "../modules/setvideo";
import estimator from "../modules/estimator";
export default {
  data() {
    return {
      msg: "no error",
      poses: "",
      refpose: "",
      intvid: "",
      score: 0,
      show: false,
      net: undefined,
    };
  },
  async mounted() {
    document.getElementById("video2").addEventListener("ended", this.endvid, false);
    setupCamera(document.getElementById("video"));
    this.net = await posenet.load();
  },
  methods: {
    async start() {
      try {
        await document.getElementById("video2").play();
        this.intvid = setInterval(this.check, 1000);
      } catch (err) {
        this.msg = err;
      }
    },
    async check() {
      estimator(this.net, (pose_user, pose_ref) => {
        //console.log(pose_user, pose_ref);
        if (this.show == true) this.show = false;
        else this.show = true;
      });
      this.score += 1;
    },
    endvid() {
      clearInterval(this.intvid);
      console.log("asdfsd");
      this.$router.push("/five");
      this.$store.commit("setScore", this.score);
    },
  },
  beforeDestroy() {
    console.log("끝");
    clearInterval(this.intvid);
  },
};
</script>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
