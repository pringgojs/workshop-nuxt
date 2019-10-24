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
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateSearch"
              outlined
              solo
              prepend-inner-icon="mdi-calendar"
              flat
              placeholder="Pilih tanggal"
              readonly
              v-on="on"
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
      <v-col
        v-for="i in movie_search.length == 0 ? movies : movie_search"
        :key="i.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <MovieItem
          :id="i.id"
          :title="i.title"
          :summary="i.summary"
          :rating="i.rating"
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
      dateSearch: null,
      movie_search: []
    }
  },
  watch: {
    dateSearch() {
      this.movies = [
        {
          id: 1,
          title: 'Lorem 1',
          summary: 'Lorem ipusakjasf',
          rating: 4.5
        }
      ]
    },
    search(value) {
      this.movie_search = []
      this.movies.forEach((item) => {
        console.log(item.title.includes(value))
        console.log(value)
        if (item.title.toLowerCase().includes(value.toLowerCase())) {
          this.movie_search.push(item)
        }
      })
    }
  },
  created() {
    this.movies = [
      {
        id: 1,
        title: 'Jumanji 2',
        summary: 'Lorem ipusakjasf',
        rating: 4.5
      },
      {
        id: 2,
        title: 'Spiderman 2',
        summary: 'Lorem ipusakjasf',
        rating: 3.5
      },
      {
        id: 3,
        title: 'Meteor Garden',
        summary: 'Lorem ipusakjasf',
        rating: 2
      },
      {
        id: 4,
        title: 'Fantasic 4',
        summary: 'Lorem ipusakjasf',
        rating: 5
      }
    ]
  }
}
</script>
