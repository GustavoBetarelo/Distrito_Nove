<template>
  <div class="d-flex dark" style="min-height: 100vh">
    <div class="col-10 mx-auto py-12 flex-fill d-flex align-center">
      <v-layout class="flex-fill" align-center wrap justify-space-between>
        <v-flex lg12 md12 sm12 xs12 class="fill-height d-flex">
          <div class="text-center flex-fill d-flex flex-column">
            <div>
              <h5
                class="text-uppercase text-caption font-weight-bold pink--text"
              >
                We Are Amazing
              </h5>
            </div>
            <div class="mt-6">
              <h3
                class="white--text font-weight-regular text-h4 text-lg-h3 text-md-h3 text-sm-h3"
              >
                Funcionalidades
              </h3>
            </div>
            <div class="mt-6">
              <p class="white--text font-weight-bold">
                As funcionalidades que o Right Direction é capaz de entregar
              </p>
            </div>
            <div class="d-flex white--text align-center justify-center">
              <v-container fluid class="pa-0" grid-list-lg>
                <v-layout wrap>
                  <v-flex
                    lg4
                    md4
                    sm6
                    xs12
                    v-for="(card, index) in cards"
                    :key="index"
                  >
                    <WeAreAmazingCard
                      :icon="card.icon"
                      :color="card.color"
                      :description="card.description"
                      :title="card.title"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
            <div class="mt-6">
              <v-btn
                color="pink"
                large
                rounded
                elevation="0"
                class="white--text"
              >
                Saiba mais
              </v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import WeAreAmazingCard from '@/pages/landing/components/we_are_amazing/card/index';
export default {
  name: 'WeAreAmazing',
  components: { WeAreAmazingCard },
  data() {
    return {
      cards: [
        {
          title: 'Localizações públicas',
          color: 'green',
          description:
            'Gerenciados pela prefeitura, o sistema apresenta e mostra como' +
            'chegar a todos os ecopontos da cidade ',
          icon: 'mdi-map-marker',
        },
        {
          title: 'Comunicação',
          color: 'pink',
          description:
            'A ferramenta possui, um sistema de solicitações feitas pela' +
            'população, com o intuito de relatar um problema para a' +
            'prefeitura, otimizando a ouvidoria',
          icon: 'mdi-map-marker',
        },
        {
          title: 'Enquetes',
          color: 'orange',
          description:
            'A população pode repassar seu feedback respondendo enquetes' +
            'realizadas pelo serviço público, fazendo com que a comunidade' +
            'seja ouvida em tomada de decisões.',
          icon: 'mdi-map-marker',
        },
        {
          title: 'Marketing',
          color: 'orange',
          description:
            'Id venenatis a condimentum vitae. Magna fermentum iaculis' +
            'eu non diam phasellus vestibulum lorem. Tortor dignissim' +
            'convallis aenean et.',
          icon: 'mdi-map-marker',
        },
        {
          title: 'Webdesign',
          color: 'green',
          description:
            'Sollicitudin ac orci phasellus egestas tellus rutrum' +
            'tellus pellentesque. Malesuada fames ac turpis egestas' +
            'sed.',
          icon: 'mdi-map-marker',
        },
        {
          title: 'Webdev',
          color: 'pink',
          description:
            'Integer quis auctor elit sed vulputate mi. Semper auctor neque' +
            'vitae tempus. Vulputate odio ut enim blandit volutpat' +
            'maecenas volutpat.',
          icon: 'mdi-map-marker',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
