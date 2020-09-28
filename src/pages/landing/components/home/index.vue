<template>
  <v-container
    class="py-4 py-lg-12 py-md-12 py-sm-12 container-landing pa-0 d-flex"
    style="min-height: 100vh"
    fluid
  >
    <v-layout
      class="white--text col-10 col-lg-10 col-md-10 col-sm-10 mx-auto flex-fill"
      column
    >
      <!-- Top Bar -->
      <v-flex shrink class="d-flex justify-space-between align-center">
        <v-layout>
          <v-flex>
            <h4 class="text-h4 font-weight-bold">Girabel's Enterprise</h4>
          </v-flex>

          <v-flex>
            <v-container fluid class="pa-0" grid-list-xl>
              <v-layout align-center justify-end>
                <v-flex class="hidden-xs-only" shrink>
                  <h4>Inicio</h4>
                </v-flex>
                <v-flex class="hidden-xs-only " shrink>
                  <h4>Empresa</h4>
                </v-flex>
                <v-flex class="hidden-xs-only " shrink>
                  <h4>Serviços</h4>
                </v-flex>
                <v-flex class="hidden-xs-only " shrink>
                  <v-btn
                    color="pink"
                    elevation="0"
                    dark
                    rounded
                    large
                    @click="openLogin"
                  >
                    Entrar
                  </v-btn>
                </v-flex>
                <v-flex class="" shrink>
                  <v-app-bar-nav-icon @click="drawer = true" color="white" />
                </v-flex>
              </v-layout>
            </v-container>

            <v-navigation-drawer
              color="pink"
              v-model="drawer"
              absolute
              :width="$vuetify.breakpoint.smAndDown ? '50%' : '15%'"
              style="box-shadow: none; max-height: 100vh"
              temporary
              class="rounded-tr-xl rounded-br-xl"
            >
              <v-list nav dense>
                <v-list-item-group>
                  <v-list-item class="white--text">
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>User</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="white--text">
                    <v-list-item-icon>
                      <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Leave</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Content -->
      <v-flex class="d-flex mt-12">
        <v-layout column justify-center>
          <v-flex class="d-flex align-center" shrink>
            <div>
              <div class="d-flex align-center">
                <h2 class="font-weight-thin text-h5">O que nós fazemos?</h2>
              </div>

              <div>
                <h2
                  class="text-h3 text-lg-h1 text-md-h1 text-sm-h1 font-weight-black"
                >
                  Nós damos
                </h2>
                <h1
                  class="pink--text text-h3 text-lg-h1 text-md-h1 text-sm-h1 font-weight-black"
                >
                  voz ao povo
                </h1>
              </div>
            </div>
          </v-flex>
          <v-flex shrink>
            <div
              class="border-default d-flex align-center justify-space-between pa-6 mt-12 col-12 col-lg-6 col-md-6 col-sm-6"
            >
              <p class="mb-0">
                Não conhece a plataforma? Vamos fazer um tour!
              </p>
              <v-btn
                icon
                @click="$vuetify.goTo('#Enterprise')"
                class="border-default"
                v-ripple="{ class: 'white--text' }"
              >
                <v-icon color="white" size="16">
                  mdi-arrow-down
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
  methods: {
    openLogin() {
      this.$bus.$emit('changeLogin', true);
    },
    handleScroll(event, teste) {
      console.log(event, teste);
      // return this.$vuetify.goTo('#Enterprise');
    },
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
  background-attachment: fixed;
}

.border-default {
  border: 1px solid rgba(238, 238, 238, 0.5);
}
</style>
