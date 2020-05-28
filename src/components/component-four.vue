<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row class="pt-10" align="end">
        <v-col cols="1" align="right" class="pa-0">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            width="5vw"
            height="5vw"
            style="border-radius: 1vw;"
          />
        </v-col>
        <v-col class="pt-0 pb-0">
          <v-row>
            <v-col class="pb-0">
              <p class="ma-0">BTRS</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 pb-0">
              <p class="ma-0">노래제목</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-row>
            <v-col align="center" class="pa-0">
              <p class="ma-0">YOU</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0">
              <video autoplay="true" id="video" width="100%"></video>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col align="center" class="pa-0">
              <p class="ma-0">CALLI</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0">
              <video
                class="video-stream"
                src="../videos/junggok.mp4"
                type="video/mp4"
                id="video2"
                width="100%"
                crossorigin="anonymous"
                muted
              ></video>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col align="center">
          <div :key="score" class="slide-in-blurred-bottom">
            <p>{{ score }}</p>
          </div>
        </v-col>
        <v-col align="center">
          <v-row>
            <v-col>
              <p>칼뤼의 한마디</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div :key="coments[0].text" class="rotate-in-hor">
                <v-btn id="btntext" width="100%">{{coments[0].text}}</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import setupCamera from "../modules/setvideo";
import { process } from "../modules/estimator";
import checkpose from "../modules/checkpose";

export default {
  data() {
    return {
      msg: "no error",
      pose: "",
      refpose: "",
      intvid: "",
      score: 0,
      show: false,
      net: undefined,
      musicname: "",
      duration: 0,
      now: 0,
      text_p: [
        "정말 멋진 퍼포먼스에요~~!",
        "우와~ 정확하네요!",
        "오마이갓 쩐다",
        "퍼가요!!"
      ],
      icons_p: [
        "mdi-emoticon-excited-outline",
        "mdi-emoticon-cool-outline",
        "mdi-emoticon-happy-outline",
        "mdi-emoticon-kiss-outline"
      ],

      text_g: [
        "뭐 이정도는 저도 할 수 있을거 같아요",
        "저는 지금 배가 고프네요",
        "좋아요.."
      ],
      icons_g: [
        "mdi-emoticon-confused-outline",
        "mdi-emoticon-neutral-outline",
        "mdi-emoticon-lol-outline",
        "mdi-emoticon-tongue-outline"
      ],

      text_b: [
        "똑같이 따라하고 있는거 맞나요..?",
        "좀더 팍팍 움직여봐요!",
        "팔의 움직임이 소심하네요"
      ],
      icons_b: [
        "mdi-emoticon-angry-outline",
        "mdi-emoticon-frown-outline",
        "mdi-emoticon-sad-outline",
        "mdi-emoticon-cry-outline",
        "mdi-emoticon-dead-outline",
        "mdi-emoticon-devil-outline",
        "mdi-emoticon-poop-outline"
      ],

      coments: [
        { text: "글자 테스트 중입니다" },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    };
  },
  async mounted() {
    // setTimeout(async () => {
    //   try {
    //     await document.getElementById("video2").play();
    //     this.intvid = setInterval(this.check, 1000);
    //   } catch (err) {
    //     this.msg = err;
    //   }
    // }, 5000);

    setupCamera(document.getElementById("video"));

    await document.getElementById("video2").play();
    this.duration = document.getElementById("video2").duration;
    console.log("asdfasdf", this.duration);

    this.intvid = setInterval(this.check, 500);
    this.musicname = this.$store.getters.getMusicName;

    document
      .getElementById("video2")
      .addEventListener("ended", this.endvid, false);
    this.net = await posenet.load();

    // var storageRef = firebase.storage().ref("junggok.mp4");
    // storageRef.getDownloadURL().then(function(url) {
    //   document.getElementById("video2").src = url;
    //   console.log(url);
    // });
  },
  methods: {
    async start() {
      try {
        await document.getElementById("video2").play();

        this.intvid = setInterval(this.check, 100);
      } catch (err) {
        this.msg = err;
      }
    },
    async check() {
      process(this.net, (pose_user, pose_ref) => {
        this.pose = pose_user;
        this.refpose = pose_ref;
      });
      var tik = checkpose(this.pose, this.refpose);
      // console.log(tik);
      // console.log(
      //   document.getElementById("video2").currentduration,
      //   document.getElementById("video2").duration
      // );
      if (tik > 100) {
        this.coments.push({
          text: this.text_p[this.random(0, this.text_p.length - 1)],
          icon: this.icons_p[this.random(0, this.icons_p.length - 1)]
        });
      } else if (tik > 50) {
        this.coments.push({
          text: this.text_g[this.random(0, this.text_g.length - 1)],
          icon: this.icons_g[this.random(0, this.icons_g.length - 1)]
        });
      } else {
        this.coments.push({
          text: this.text_b[this.random(0, this.text_b.length - 1)],
          icon: this.icons_b[this.random(0, this.icons_b.length - 1)]
        });
      }
      if (this.coments.length >= 11) {
        this.coments.shift();
      }
      this.score += tik;
      this.now += (100 / (this.duration * 1000)) * 100;
    },
    endvid() {
      clearInterval(this.intvid);
      console.log("asdfsd");
      this.$router.push("/five");
      this.$store.commit("setScore", this.score);
    },
    random(min, max) {
      var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
      return ranNum;
    }
  },

  beforeDestroy() {
    console.log("끝");
    clearInterval(this.intvid);
  }
};
</script>
<style>
.slide-in-blurred-bottom {
  font-size: 5vw;
  animation: slide-in-blurred-bottom 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;
}
@keyframes slide-in-blurred-bottom {
  0% {
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 100%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
.rotate-in-hor {
  animation: rotate-in-hor 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes rotate-in-hor {
  0% {
    transform: rotateX(360deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
#video {
  border-radius: 10px;
  overflow: hidden;
}
#video2 {
  border-radius: 10px;
  overflow: hidden;
}
#btntext {
  font-size: 2vw;
  letter-spacing: 5px;
}
</style>
