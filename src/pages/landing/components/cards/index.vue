<template>
  <div class="d-flex">
    <div
      class="d-flex flex-column align-start justify-start col-12 col-lg-10 col-md-10 col-sm-10 mx-auto py-6 py-lg-12 py-md-12 py-sm-12"
    >
      <div>
        <h4 class="text-h4 font-weight-bold dark--text">Cards</h4>
      </div>
      <v-container fluid class="pa-0 mt-6" grid-list-lg>
        <v-layout wrap>
          <v-flex lg4 md5 sm12 xs12 v-for="i in 3" :key="i">
            <v-card
              height="100%"
              elevation="0"
              class="default-card pa-8 white--text"
            >
              <v-card-text>
                <v-icon size="40" color="pink">mdi-google-maps</v-icon>

                <p
                  class="display-1 mt-4 font-weight-bold dark--text col-10 col-md-12 pa-0"
                >
                  Localizações públicas
                </p>

                <div class="dark--text">
                  Gerenciados pela prefeitura, o sistema apresenta e mostra como
                  chegar a todos os ecopontos da cidade
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
};
</script>

<style scoped>
.default-card {
  border: 1px solid #eee;
  transition: all 0.2s ease-in-out;
}

.default-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1) !important;
}
</style>
