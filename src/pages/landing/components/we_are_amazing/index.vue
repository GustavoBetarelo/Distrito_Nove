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
          title: 'Interação Social',
          color: 'orange',
          description:
            'A população pode, se auto-ajudar, criando solicitações públicas,' +
            'com a intenção de compartilhar o respaldo da prefeitura,' +
            'com outros usuários, solucionando dúvidas em comum e demonstrando credibilidade.',
          icon: 'mdi-map-marker',
        },
        {
          title: 'Gestão Inteligente',
          color: 'green',
          description:
            'Integrando mais, a população e sua prefeitura,' +
            'nossa plataforma permite que os gestores avaliem as diversas opiniões,' +
            'potencializando ideias para novos projetos',
          icon: 'mdi-map-marker',
        },
        {
          title: 'Produtividade dos colaboradores',
          color: 'pink',
          description:
            'Inovando a metodologia da ouvidoria pública, essa ferramenta otimiza o tempo dos colaboradores,' +
            'permitindo-os, montar análises e repassar a voz do povo,' +
            'aos representantes públicos.',
          icon: 'mdi-map-marker',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
