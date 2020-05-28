<template>
  <v-content
    class="ap"
    column
    align-center
    justify-center
    :style="{ backgroundImage: 'url(' + background_url + ')',backgroundSize:'100%',backgroundPosition: 'center center', backgroundcolor:'rgba(255,0,0,0.3)'}"
  >
    <v-container class="fill-height" fluid style="background-color:rgba(255,255,255,0.4)">
      <v-row align="center" justify="center">
        <v-slide-group v-model="model" class="pa-4" center-active mandatory @change="changes">
          <v-row align="center" justify="center">
            <v-slide-item v-for="n in items" :key="n.num" v-slot:default="{ active, toggle }">
              <v-col class="pa-0">
                <v-card
                  height="15vw"
                  width="15vw"
                  :class="active ? 'imageleft1' : ''"
                  @click="toggle"
                  v-bind:style="{ backgroundImage: 'url(' + n.src + ')',backgroundSize:'100%', opacity:0.7}"
                >
                  <v-row v-if="active" class="fill-height" align="end" justify="center">asdfasdfasdf</v-row>
                </v-card>
              </v-col>
            </v-slide-item>
          </v-row>
        </v-slide-group>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      model: "",
      background_url: "",
      items: [
        {
          num: 0,
          src: require("../assets/imgs/test1.jpg")
        },
        {
          num: 1,

          src: require("../assets/imgs/test2.jpg")
        },
        {
          num: 2,

          src: require("../assets/imgs/test3.jpg")
        },
        {
          num: 3,

          src: require("../assets/imgs/test4.jpg")
        },
        {
          num: 4,

          src: require("../assets/imgs/test5.jpg")
        },
        {
          num: 5,

          src: require("../assets/imgs/test6.jpg")
        },
        {
          num: 6,
          src: require("../assets/imgs/test1.jpg")
        },
        {
          num: 7,
          src: require("../assets/imgs/test1.jpg")
        },
        {
          num: 8,
          src: require("../assets/imgs/test1.jpg")
        }
      ]
    };
  },
  methods: {
    changes() {
      console.log(this.model);
      this.background_url = this.items[this.model].src;
    }
  }
};
</script>
<style>
.imageleft1 {
  animation: slide-fwd-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-fwd-center {
  0% {
    height: 15vw;
    opacity: 0.7;
  }
  100% {
    height: 20vw;
    opacity: 1;
  }
}
</style>