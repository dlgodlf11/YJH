<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col align="center">
          <v-btn @click="click_L">왼쪽</v-btn>
        </v-col>
        <!-- 
        <div v-for="item in items" :key="item.num" style="position: abolute;">
          <v-btn>{{item.num}}</v-btn>
        </div>-->

        <div style="position: relative; left:15vw;z-index: 2;" :key="items[front].src">
          <v-col class="pa-0" align="center">
            <v-parallax
              :class="rotateclass"
              :src="items[front].src"
              style="height:30vw; width:30vw"
            >{{items[front].num}}</v-parallax>
          </v-col>
        </div>
        <div style="position: relative; left:-15vw; z-index: 1;" :key="items[back].src">
          <v-col class="pa-0" align="center">
            <v-parallax :src="items[back].src" style="height:30vw; width:30vw">{{items[back].num}}</v-parallax>
          </v-col>
        </div>
        <v-col align="center">
          <v-btn @click="click_R">오른쪽</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      rotateclass: "roll-out-blurred-right",
      front: 0,
      back: 1,
      items: [
        {
          num: 1,
          src: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        },
        {
          num: 2,

          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          num: 3,

          src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        },
        {
          num: 4,

          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          num: 5,

          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        }
      ]
    };
  },
  methods: {
    click_L() {
      this.rotateclass = "roll-out-blurred-left";
      this.front = 4;
      this.back = 0;
      var temp = this.items.shift();
      this.items.push(temp);
    },
    click_R() {
      this.rotateclass = "roll-out-blurred-right";
      this.front = 1;
      this.back = 0;
      var temp = this.items.pop();
      this.items.unshift(temp);
    }
  }
};
</script>
<style>
.roll-out-blurred-left {
  animation: roll-out-blurred-left 0.3s cubic-bezier(0.755, 0.05, 0.855, 0.06)
    both;
}
@keyframes roll-out-blurred-left {
  0% {
    transform: translateX(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-1000px) rotate(-720deg);
    filter: blur(50px);
    opacity: 0;
  }
}
.roll-out-blurred-right {
  animation: roll-out-blurred-right 0.3s cubic-bezier(0.755, 0.05, 0.855, 0.06)
    both;
}
@keyframes roll-out-blurred-right {
  0% {
    transform: translateX(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1000px) rotate(720deg);
    filter: blur(50px);
    opacity: 0;
  }
}
</style>