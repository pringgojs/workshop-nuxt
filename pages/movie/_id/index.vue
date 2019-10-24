<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12" sm="12" lg="12" class="text-right">
        <v-btn rounded color="primary" class="text-none" to="/">
          Kembali
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      <v-col md="6" cols="12">
        <v-img :src="image ? image : '/v.png'"> </v-img>
      </v-col>
      <v-col md="6" cols="12">
        <v-card>
          <v-card-title>
            {{ title }} <v-spacer />
            <v-icon class="mr-3" color="warning">mdi-star</v-icon>
            {{ rating }}
          </v-card-title>
          <v-card-text>
            {{ summary ? replaceTagHtml(summary) : '' }}
          </v-card-text>
          <v-card-actions>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              {{ genres }}
            </v-chip>
          </v-card-actions>
        </v-card>

        <v-alert v-if="coments.length == 0" type="info" dense class="mt-5">
          Belum ada komentar
        </v-alert>

        <v-card v-else class="mt-5">
          <v-list three-line>
            <template v-for="item in coments">
              <v-list-item :key="item.id">
                <v-list-item-avatar>
                  <v-img src="/avatar.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="item.name" />
                  <v-list-item-subtitle v-text="item.content" />
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
        <v-card class="mt-5">
          <v-card-text>
            <v-form ref="form_comment">
              <v-text-field
                v-model="form.name"
                solo
                flat
                outlined
                :rules="[(v) => !!v || 'Wajib diisi']"
                placeholder="Nama Anda"
              />
              <v-textarea
                v-model="form.content"
                solo
                flat
                outlined
                :rules="[(v) => !!v || 'Wajib diisi']"
                placeholder="Tulis komentar Anda .."
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-spacer />
            <v-btn text class="primary" @click="submit()">Simpan</v-btn>
          </v-card-actions>
        </v-card>
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
      rating: null,
      genres: [],
      coments: [],
      form: {
        name: null,
        content: null
      },
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    }
  },
  created() {
    const id = this.$route.params.id
    this.$axios.$get(process.env.base_url + '/shows/' + id).then((res) => {
      this.image = res.image.medium
      this.summary = res.summary
      this.title = res.name
      this.rating = res.rating.average
      this.genres = res.genres.join(', ')
    })

    this.$axios
      .$get('http://127.0.0.1/api-workshop-nuxt/select.php?movie_id=' + id)
      .then((res) => {
        this.coments = res
      })
  },
  methods: {
    submit() {
      if (this.$refs.form_comment.validate()) {
        this.$axios
          .$post('http://127.0.0.1/api-workshop-nuxt/comment.php', {
            ...this.form,
            movie_id: this.$route.params.id
          })
          .then((res) => {
            this.coments.push(res[res.length - 1])
            this.$refs.form_comment.reset()
          })
      }
    }
  }
}
</script>
