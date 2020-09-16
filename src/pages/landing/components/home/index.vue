<template>
  <v-container class="py-12 container-landing fill-height" fluid>
    <v-layout class="white--text col-10 mx-auto" column>
      <!-- Top Bar -->
      <v-flex shrink class="d-flex justify-space-between align-center">
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

            <v-navigation-drawer
              color="pink"
              v-model="drawer"
              absolute
              width="15%"
              style="box-shadow: none; max-height: 100vh"
              temporary
              class="rounded-tr-xl rounded-br-xl"
            >
              <v-list nav dense>
                <v-list-item-group>
                  <v-list-item class="white--text">
                    <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Content -->
      <v-flex class="d-flex">
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
              <v-btn
                icon
                class="border-default"
                v-ripple="{ class: 'white--text' }"
              >
                <v-icon color="white" size="16">
                  mdi-arrow-right
                </v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.container-landing {
  background-image: linear-gradient(
      to right,
      rgba(94, 35, 157, 1),
      rgba(94, 35, 157, 0.6)
    ),
    url('../../../../assets/landing-home-background.png');
  background-color: #5e239d;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  max-height: 100vh;
}

.border-default {
  border: 1px solid rgba(238, 238, 238, 0.5);
}
</style>
