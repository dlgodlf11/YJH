<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <transition name="custom-classes-transition" enter-active-class="animated bounceInLeft">
        <div :key="score">
          <h1 v-if="show">{{ score }}</h1>
        </div>
      </transition>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center">
        <v-btn @click="$router.push('/two')">다시하기</v-btn>
      </v-col>
      <v-col align="center">
        <v-btn @click="change">처음으로</v-btn>
      </v-col>
    </v-row>
    {{ showtext }}
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      score: 0,
      show: false,
    };
  },
  computed: {
    showtext: function() {
      this.score = this.$store.getters.getScore;
      this.show = true;
    },
  },
  methods: {
    change() {
      this.score += 1;
    },
  },
};
</script>
