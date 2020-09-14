<template>
  <v-layout column fill-height class="container-landing py-12">
    <v-flex shrink>
      <v-layout justify-space-between class="col-10 mx-auto white--text shrink">
        <v-flex>
          <h3 class="text-h5 font-weight-bold text-left">
            Girabel's Enterprise
          </h3>
        </v-flex>
        <v-flex>
          <v-layout align-center>
            <v-flex>
              <h4 class="font-weight-light">Início</h4>
            </v-flex>
            <v-flex>
              <h4 class="font-weight-light">Empresa</h4>
            </v-flex>
            <v-flex>
              <h4 class="font-weight-light">Serviços</h4>
            </v-flex>
            <v-flex>
              <v-btn large color="secondary" rounded elevation="0">
                Entrar
              </v-btn>
            </v-flex>
            <v-flex>
              <v-icon color="white" size="28">mdi-menu</v-icon>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex class="d-flex align-center justify-start">
      <v-layout
        align-start
        wrap
        class="col-10 mx-auto white--text flex-fill text-left"
      >
        <v-flex lg12 md12>
          <h4
            class="text-h6 text-uppercase"
            style="letter-spacing: 6px !important;"
          >
            O que nós fazemos?
          </h4>
        </v-flex>
        <v-flex lg12 md12 class="mt-4">
          <h3 class="text-h1 font-weight-black">
            Nós damos <br /><span class="secondary--text">voz ao povo</span>
          </h3>
        </v-flex>
        <v-flex lg6 md8 class="mt-12">
          <div
            class="pa-6 d-flex align-center justify-space-between border-default"
          >
            <h4 class="font-weight-light">
              Já conhece a plataforma? Vamos direto ao ponto!
            </h4>
            <v-btn icon class="border-default white--text">
              <v-icon color="white" size="15">mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'HomeLanding',
};
</script>

<style scoped lang="scss">
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
  height: 100vh;
  max-height: 100vh;
}
.border-default {
  border: 1px solid rgba(238, 238, 238, 0.5);
}
</style>
