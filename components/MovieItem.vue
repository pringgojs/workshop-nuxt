<template>
  <v-card class="mx-auto" max-width="400" :to="'/movie/' + id">
    <v-img class="white--text align-end" height="200px" :src="image">
      <v-card-title>{{ title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary text-justify">
      {{ limitString(replaceTagHtml(summary)) }}
    </v-card-text>

    <v-card-actions>
      <v-icon class="mr-3">mdi-star</v-icon>
      {{ rating }}
    </v-card-actions>
  </v-card>
</template>

<script>
import helper from '~/mixins/helper'
export default {
  mixins: [helper],
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: 'Judul'
    },
    image: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
    },
    summary: {
      type: String,
      default: 'lorem'
    },
    rating: {
      type: Number,
      default: 0
    }
  }
}
</script>
