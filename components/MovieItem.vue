<template>
  <v-card class="mx-auto" max-width="400" :to="'/movie/' + id">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{ title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>{{ summary }}</div>
    </v-card-text>

    <v-card-actions>
      {{ rating }}
      <v-spacer />
      <v-rating v-model="rating" half-icon size="16"></v-rating>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
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
