<template>
  <v-app id="apps">
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">노오오오래</v-list-item-title>
          <v-list-item-subtitle>선택하시오</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group v-model="itemindex">
          <v-list-item v-for="item in items" :key="item.title" link @click="listclick">
            <v-list-item-avatar>
              <v-img :src="item.src"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <!-- <v-carousel v-model="itemindex" @change="onchange" v-if="show" height="100vh">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" v-on:click="onclick">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ item.name }}</div>
        </v-row>
      </v-carousel-item>
      </v-carousel>-->
      <v-container class="fill-height">
        <v-card class="mx-auto" width="100%" height="100%">
          <v-img class="white--text align-end" height="80vh" :src="items[itemindex].src">
            <v-card-title>{{items[itemindex].name}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">이번역은 {{items[itemindex].name}} 역입니다</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>내리실문은 오른쪽입니다</div>

            <div>this stop is {{items[itemindex].name}}, {{items[itemindex].name}}</div>
          </v-card-text>

          <v-btn color="orange" width="100%" v-on:click="onclick">Play!!</v-btn>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemindex: 0,
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
      background: "",
      show: false
    };
  },
  async mounted() {
    //items = axios.post(어쩌고저쩌고)
    var storageRef = firebase.storage().ref();
    var listRef = storageRef.child("musics");
    var refs = [];
    await listRef.listAll().then(async function(res) {
      while (res.items.length) {
        var item = res.items.pop();
        var name = item.name.split(".")[0];
        await item.getDownloadURL().then(function(url) {
          refs.push({ src: url, name: name });
        });
      }
    });
    this.items = refs;
    this.show = await true;
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
    },
    listclick() {
      console.log(this.pick);
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
  opacity: 0.7;
}
.carousel {
  height: 100vh;
}
#apps {
  background-image: url("../assets/imgs/back.jpg");
  background-size: 120%;
}
</style>
