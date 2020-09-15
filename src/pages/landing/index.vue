<template>
  <v-container class="py-12 container-landing fill-height" fluid>
    <v-layout class="white--text col-10 mx-auto" column>
      <!-- Top bar -->
      <v-flex shrink class="d-flex justify-space-between align-center mr-12">
        <v-layout>
          <v-flex>
            <h3 class="text-h6 font-weight">Girabel's Enterprise</h3>
          </v-flex>

          <v-flex class="d-flex justify-space-between align-center">
            <h4>Inicio</h4>
            <h4>Empresa</h4>
            <h4>Serviços</h4>
            <v-btn color="secondary" class="white--text" rounded elevation
              >Entrar</v-btn
            >
            <v-app-bar-nav-icon
              @click="drawer = true"
              color="white"
            ></v-app-bar-nav-icon>

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
      <v-flex class="d-flex flex-column" grow>
        <div class="d-flex align-center">
          <p class="font-weight-thin">O que nós fazemos?</p>
        </div>

        <div>
          <h1 class="text-h3 font-weight-bold">Nós damos</h1>
          <h1 class="pink--text text-h3 font-weight-bold">voz ao povo</h1>
        </div>

        <div>
          <p class="">Já conhece nossa plataforma? Vamos direto ao ponto!</p>
        </div>
      </v-flex>

      <!-- Cards -->
      <v-flex class="d-flex align-center justify-space-between">
        <v-card class="mx-auto col-3" height="250px">
          <v-card-text>
            <v-icon color="primary">mdi-google-maps</v-icon>
            <p class="display-1 text--primary">Localizações públicas</p>

            <div class="text--primary">
              Gerenciados pela prefeitura, o sistema apresenta e mostra como
              chegar a todos os ecopontos da cidade
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto col-3" height="250px">
          <v-card-text>
            <v-icon color="primary">mdi-apple</v-icon>
            <p class="display-1 text--primary">Comunicação</p>

            <div class="text--primary">
              A ferramenta possui, um sistema de solicitações feitas pela
              população, com o intuito de relatar um problema para a prefeitura,
              otimizando a ouvidoria
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto col-3" height="250px" color="">
          <v-card-text>
            <v-icon color="primary">mdi-microphone</v-icon>
            <p class="display-1 text--primary">Enquetes</p>

            <div class="text--primary">
              A população pode repassar seu feedback respondendo enquetes
              realizadas pelo serviço público, fazendo com que a comunidade seja
              ouvida em tomada de decisões.
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

      <!-- Carousels -->
      <v-flex class="mt-16 d-flex flex-column align-center">
        <!-- hide-delimiter-background = "barra de tarefas" do carrossel,
        com a mesma cor que o fundo -->
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
          class="col-11"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-flex>

      <!-- Formulário -->
      <v-flex class="px-16 align-center">
        <v-card class="px-2 py-1">
          <form>
            <v-text-field
              background-color="white"
              v-model="name"
              label="Name"
              required
            >
            </v-text-field>

            <v-text-field
              background-color="white"
              v-model="name"
              label="Name"
              required
            >
            </v-text-field>

            <v-text-field
              background-color="white"
              v-model="name"
              label="Name"
              required
            >
            </v-text-field>
          </form>
        </v-card>
      </v-flex>
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

#top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 400px;
}

h1,
h2,
button {
  color: white;
}

h2,
button {
  font-family: 'mplus-1p-regular';
}

h1 {
  font-size: 2.2rem;
}

h2 {
  font-size: 1.2rem;
}

button {
  background-color: #f61067;
  padding: 0.5rem;
  border-radius: 0.8rem;
  font-size: 1.2rem;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: 150px;
  padding-bottom: 0;
  padding-top: 0;
}

blockquote,
p {
  color: azure;
}
</style>
