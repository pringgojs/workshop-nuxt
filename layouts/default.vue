<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" fixed app color="primary" dark>
      <v-btn text to="/">Belajar Vuex</v-btn>
      <!-- <v-menu offset-y>
        <template>
          <v-text-field
            v-model="search"
            solo
            flat
            hide-details
            light
            placeholder="cari.."
            class="ml-5"
            append-icon="mdi-magnify"
          ></v-text-field>
        </template>
        <v-list v-if="search !== null">
          <v-list-item>
            <v-list-item-title>String</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <v-spacer />
      <v-btn icon to="/about">
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      search: null,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-android',
          title: 'Tentang',
          to: 'about'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Belajar Nuxt'
    }
  }
}
</script>
