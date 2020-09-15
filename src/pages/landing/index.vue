<template>
  <v-container class="py-12 container-landing fill-height" fluid>
    <v-layout class="white--text col-10 mx-auto" column>
      <!-- Top bar -->
      <v-flex shrink class="d-flex justify-space-between align-center mr-12">
        <v-layout>
          <v-flex>
            <h4 class="text-h4 font-weight-bold">Girabel's Enterprise</h4>
          </v-flex>

          <v-flex class="d-flex justify-space-between align-center">
            <h4>Inicio</h4>
            <h4>Empresa</h4>
            <h4>Serviços</h4>
            <v-btn color="pink" elevation="0" dark rounded large>Entrar</v-btn>
            <v-app-bar-nav-icon @click="drawer = true" color="white" />

            <v-navigation-drawer v-model="drawer" absolute temporary>
              <v-list nav dense>
                <v-list-item-group
                  v-model="group"
                  active-class="deep-purple--text text--accent-4"
                >
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="primary">mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="primary">mdi-whatsapp</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Chama lá</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Content -->
      <v-flex class="d-flex flex-column justify-center" grow>
        <v-layout column justify-center>
          <v-flex class="d-flex align-center" shrink>
            <div>
              <div class="d-flex align-center">
                <h2 class="font-weight-thin text-h5">O que nós fazemos?</h2>
              </div>

              <div>
                <h1 class="text-h1 font-weight-black">
                  Nós damos
                </h1>
                <h1 class="pink--text text-h1 font-weight-black">
                  voz ao povo
                </h1>
              </div>
            </div>
          </v-flex>
          <v-flex shrink>
            <div
              class="border-default d-flex align-center justify-space-between pa-6 mt-12 col-6"
            >
              <p class="mb-0">
                Já conhece nossa plataforma? Vamos direto ao ponto!
              </p>
              <v-btn icon class="border-default">
                <v-icon color="white" size="16">
                  mdi-arrow-right
                </v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Cards -->
      <!--      <v-flex class="d-flex align-center justify-space-between">-->
      <!--        <v-card class="mx-auto col-3" height="100%" v-for="i in 3" :key="i">-->
      <!--          <v-card-text>-->
      <!--            <v-icon color="primary" size="40">mdi-google-maps</v-icon>-->
      <!--            <p class="display-1 text&#45;&#45;primary mt-4 font-weight-bold">-->
      <!--              Localizações públicas-->
      <!--            </p>-->

      <!--            <div class="text&#45;&#45;primary">-->
      <!--              Gerenciados pela prefeitura, o sistema apresenta e mostra como-->
      <!--              chegar a todos os ecopontos da cidade-->
      <!--            </div>-->
      <!--          </v-card-text>-->
      <!--        </v-card>-->
      <!--      </v-flex>-->

      <!-- Carousels -->
      <!--      <v-flex class="mt-16 d-flex flex-column align-center">-->
      <!--        &lt;!&ndash; hide-delimiter-background = "barra de tarefas" do carrossel,-->
      <!--        com a mesma cor que o fundo &ndash;&gt;-->
      <!--        <v-carousel-->
      <!--          cycle-->
      <!--          height="400"-->
      <!--          hide-delimiter-background-->
      <!--          show-arrows-on-hover-->
      <!--          class="col-11"-->
      <!--        >-->
      <!--          <v-carousel-item v-for="(slide, i) in slides" :key="i">-->
      <!--            <v-sheet :color="colors[i]" height="100%">-->
      <!--              <v-row class="fill-height" align="center" justify="center">-->
      <!--                <div class="display-3">{{ slide }} Slide</div>-->
      <!--              </v-row>-->
      <!--            </v-sheet>-->
      <!--          </v-carousel-item>-->
      <!--        </v-carousel>-->
      <!--      </v-flex>-->

      <!-- Formulário -->
      <!--      <v-flex class="px-16 align-center">-->
      <!--        <v-card class="px-2 py-1">-->
      <!--          <form>-->
      <!--            <v-text-field-->
      <!--              background-color="white"-->
      <!--              v-model="name"-->
      <!--              label="Name"-->
      <!--              required-->
      <!--            >-->
      <!--            </v-text-field>-->

      <!--            <v-text-field-->
      <!--              background-color="white"-->
      <!--              v-model="name"-->
      <!--              label="Name"-->
      <!--              required-->
      <!--            >-->
      <!--            </v-text-field>-->

      <!--            <v-text-field-->
      <!--              background-color="white"-->
      <!--              v-model="name"-->
      <!--              label="Name"-->
      <!--              required-->
      <!--            >-->
      <!--            </v-text-field>-->
      <!--          </form>-->
      <!--        </v-card>-->
      <!--      </v-flex>-->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Landing',

  data: () => ({
    drawer: false,

    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],

    slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
  }),
};
</script>

<style lang="scss">
.container-landing {
  background-image: linear-gradient(
      to right,
      rgba(94, 35, 157, 1),
      rgba(94, 35, 157, 0.6)
    ),
    url('../../assets/landing-home-background.png');
  background-color: #5e239d;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
}

.border-default {
  border: 1px solid rgba(238, 238, 238, 0.5);
}
</style>
