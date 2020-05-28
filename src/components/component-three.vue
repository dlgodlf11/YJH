<template>
  <v-container class="fill-height">
    <v-row>돌아가기</v-row>
    <v-row>
      <v-row class="pa-0">
        <v-col cols="6" class="pa-0">
          <v-row align="center" justify="start">
            <v-img src="../assets/imgs/nowplaying.png" style="max-width:8vw;" />
          </v-row>

          <v-row>
            <p class="ma-0">오마이갓-오마이굿니스</p>
          </v-row>
        </v-col>
        <v-col cols="2" align="center" class="pa-0"></v-col>
        <v-col cols="4" align="center" class="pa-0">
          <v-progress-circular :value="progress" size="130" width="15" color="white">{{progress}}</v-progress-circular>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="6" class="pa-0">
          <video autoplay="true" id="video" width="570px" height="361px"></video>
        </v-col>
        <v-col cols="2" class="pa-6">
          <v-img src="../assets/imgs/poseperson.png" style="height:361px;" />
        </v-col>
        <v-col cols="4" align="center" class="pl-5">
          <v-row>
            <v-col cols="6" v-for="i in poses" class="pa-1">
              <v-btn :disabled="!i.value" width="100%" height="5vh" color="#B39DDB">{{i.name}}</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">카메라 중앙에 잘 서있으시오 관절 위치를 확인중이다 위치파악대면 불들오온다</v-row>
      <!-- <v-row align="center" justify="center">
      <video autoplay="true" id="video" width="640" height="360"></video>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="1" v-for="i in poses" align="center">
        <v-checkbox :value="i.value" :label="i.name" color="orange"></v-checkbox>
      </v-col>
    </v-row>
      <v-row>{{out}}</v-row>-->
    </v-row>
  </v-container>
</template>

<script>
import setupCamera from "../modules/setvideo";
import estimate from "../modules/estimator";
export default {
  data: () => ({
    interval: null,
    net: null,
    out: 0,
    poses: {
      0: { name: "머리", value: false },
      5: { name: "어깨R", value: false },
      6: { name: "어깨L", value: false },
      7: { name: "팔꿈치R", value: false },
      8: { name: "팔꿈치L", value: false },
      9: { name: "손목R", value: false },
      10: { name: "손목L", value: false },
      11: { name: "골반R", value: false },
      12: { name: "골반L", value: false },
      13: { name: "무릎R", value: false },
      14: { name: "무릎L", value: false },
      15: { name: "발목R", value: false },
      16: { name: "발목L", value: false }
    },
    progress: 0
  }),
  methods: {
    async check() {
      estimate(this.net, pose_user => {
        var count = 0;
        for (var i in pose_user[0].keypoints) {
          if (i < 1 || i > 4) {
            if (pose_user[0].keypoints[i].score >= 0.8) {
              this.poses[i.toString()].value = true;
              count += 1;
            } else {
              this.poses[i.toString()].value = false;
            }
          }
        }
        if (count > 10) {
          this.progress += 1;
        }
        if (this.progress == 100) {
          this.$router.push("/four");
        }
      });
    }
  },
  async mounted() {
    setupCamera(document.getElementById("video"));
    this.net = await posenet.load();

    this.interval = setInterval(this.check, 100);
  },
  beforeDestroy() {
    console.log("끝");
    clearInterval(this.interval);
  }
};
</script>
<style>
#video {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
}
</style>