<template>
  <v-container>
    <v-row>
      <v-col md="6" cols="12">
        <v-img :src="image ? image : '/v.png'"> </v-img>
      </v-col>
      <v-col md="6" cols="12">
        <v-card>
          <v-card-title>
            {{ title }} <v-spacer /> <v-icon class="mr-3">mdi-star</v-icon>
            {{ rating }}
          </v-card-title>
          <v-card-text>
            {{ summary ? replaceTagHtml(summary) : '' }}
          </v-card-text>
        </v-card>
        <v-list-item three-line>
          <v-btn rounded color="primary" class="text-none" to="/">
            Kembali
          </v-btn>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import helper from '~/mixins/helper'
export default {
  mixins: [helper],
  data() {
    return {
      image: null,
      summary: null,
      title: null,
      rating: null
    }
  },
  created() {
    const id = this.$route.params.id
    this.$axios.$get('http://api.tvmaze.com/shows/' + id).then((res) => {
      console.log(res)
      this.image = res.image.medium
      this.summary = res.summary
      this.title = res.name
      this.rating = res.rating.average
    })
  }
}
</script>
