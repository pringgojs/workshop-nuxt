<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field
          v-model="search"
          solo
          flat
          hide-details
          light
          outlined
          placeholder="cari.."
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        sm="2"
        md="2"
        lg="2"
        offset-sm="4"
        offset-md="4"
        offset-lg="4"
        class="text-right"
      >
        <v-menu
          v-model="picker"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template slot="activator">
            <v-text-field
              v-model="dateSearch"
              outlined
              solo
              prepend-inner-icon="mdi-calendar"
              flat
              placeholder="Pilih tanggal"
              readonly
              @click:prepend-inner="picker = true"
            />
          </template>
          <v-date-picker
            v-if="picker"
            v-model="dateSearch"
            reactive
            no-title
            scrollable
          />
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in movies" :key="i.id" cols="12" lg="3" md="4" sm="6">
        <MovieItem
          :id="i.show ? i.show.id : i._embedded.show.id"
          :title="i.show ? i.show.name : i.name"
          :summary="i.show ? i.show.summary : i.summary"
          :rating="
            i.show ? i.show.rating.average : i._embedded.show.rating.average
          "
          :image="i.show ? i.show.image.medium : i.image.medium"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieItem from '~/components/MovieItem.vue'

export default {
  components: {
    MovieItem
  },
  data() {
    return {
      movies: [],
      search: null,
      picker: false,
      dateSearch: null
    }
  },
  watch: {
    async dateSearch(value) {
      this.movies = []
      this.movies = await this.$axios
        .$get(process.env.base_url + '/schedule?country=US&date=' + value)
        .then((res) => {
          return res.filter(
            (item) =>
              item.show.image !== null &&
              item.show.summary !== null &&
              item.show.rating.average
          )
        })
    },
    search(value) {
      this.fetchSearchData(value)
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.movies = await this.$axios
        .$get(process.env.base_url + '/schedule/full')
        .then((res) => {
          // console.log(res[0]._embedded.show.rating.average)
          return res.filter(
            (item) =>
              item.image !== null &&
              item.summary !== null &&
              item._embedded.show.rating.average
          )
        })
    },
    async fetchSearchData(param) {
      this.movies = []
      this.movies = await this.$axios
        .$get(process.env.base_url + '/search/shows?q=' + param)
        .then((res) => {
          return res.filter(
            (item) =>
              item.show.image !== null &&
              item.show.summary !== null &&
              item.show.rating.average
          )
        })
    }
  }
}
</script>
