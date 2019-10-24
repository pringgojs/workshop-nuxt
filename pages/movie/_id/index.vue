<template>
  <v-container>
    <v-row>
      <v-col md="6" cols="12">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"> </v-img>
      </v-col>
      <v-col md="6" cols="12">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Jumanji 2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Rating</v-list-item-title>
            <v-list-item-subtitle>4.5</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Summary</v-list-item-title>
            <v-list-item-subtitle>
              Secondary line text Lorem ipsum dolor sit amet, Secondary line
              text Lorem ipsum dolor sit amet, Secondary line text Lorem ipsum
              dolor sit amet, Secondary line text Lorem ipsum dolor sit amet,
              Secondary line text Lorem ipsum dolor sit amet,
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item three-line>
          <v-btn rounded color="primary" class="text-none" to="/">
            Kembali
          </v-btn>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>
