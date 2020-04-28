<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
          <v-slide-item v-for="(item, n) in items" :key="n" v-slot:default="{ active, toggle }">
            <v-card :color="active ? undefined : 'grey lighten-1'" class="ma-4" height="200" width="100" @click="toggle">
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                </v-scale-transition>
                <h2>{{ item }}</h2>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn @click="onclick">next</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: null,
    items: ["혹", "시", "몰", "라", "서", "냄", "겨", "둠"],
  }),
  methods: {
    onclick() {
      console.log(this.items[this.model]);
      this.$router.push("/four");
    },
  },
};
</script>
