<template>
  <v-container
    id="container"
    class="fill-height"
    fluid
    v-bind:style="{ backgroundImage: 'url(' + background + ')' }"
  >
    <v-row align="center" justify="center">
      <v-carousel v-model="itemindex" @change="onchange">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" v-on:click="onclick">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ item.name }}</div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemindex: "",
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          name: "다람쥐"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          name: "하늘"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          name: "새"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          name: "행성"
        }
      ],
      background: ""
    };
  },
  computed: {
    UpdateData() {
      //items = axios.post(어쩌고저쩌고)
      console.log("dpfsdpfpsdf", this.itemindex);
    }
  },
  methods: {
    onclick() {
      console.log(this.items[this.itemindex]);
      this.$store.commit("setMusicName", this.items[this.itemindex].name);
      this.$router.push("/three");
    },
    onchange(e) {
      console.log();
      console.log("asdf", this.items[e].name);
      this.background = this.items[e].src;
    }
  }
};
</script>

<style>
#innerbtn {
  font-size: min(3vw, 50px);
  width: 100%;
  height: 100%;
}
#container {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#carousel {
  opacity: 1;
}
</style>
