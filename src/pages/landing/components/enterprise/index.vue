<template>
  <div
    class="d-flex white"
    style="min-height: 100vh; background-attachment: fixed"
  >
    <div class="col-10 mx-auto py-12 flex-fill d-flex">
      <v-layout class="flex-fill" align-center wrap justify-space-between>
        <v-flex lg6 md6 sm12 xs12>
          <div class="pa-0 col-12 col-lg-9 col-md-10 col-sm-12">
            <div>
              <h5
                class="text-uppercase text-caption font-weight-bold pink--text"
              >
                Quem somos nós?
              </h5>
            </div>
            <div class="mt-6">
              <h3
                class="dark--text font-weight-regular text-h4 text-lg-h3 text-md-h3 text-sm-h3"
              >
                Nossa empresa
              </h3>
            </div>
            <div class="mt-6">
              <p class="dark--text font-weight-bold">
                Visando inovar e surpreender, a Girabel’s integra populações e
                prefeituras em um só lugar.
              </p>
            </div>
            <div class="dark--text font-weight-light mt-16">
              <p>
                Diante do atual cenário, de comunicação burocratizada entre
                pessoas e orgãos públicos, nossa plataforma traz como solução,
                um novo meio de comunicação de forma autônoma, visando o
                compartilhamento e integração de informações.
              </p>
            </div>
            <div class="mt-6">
              <v-btn
                color="pink"
                large
                rounded
                @click="$vuetify.goTo('#Platform')"
                elevation="0"
                class="white--text"
              >
                Vem com a gente
              </v-btn>
            </div>
          </div>
        </v-flex>
        <v-flex lg6 md6 sm12 xs12 class="hidden-sm-and-down">
          <div class="pa-0 ml-auto col-12 col-lg-10 col-md-9 col-sm-12">
            <v-img
              max-width="100%"
              :aspect-ratio="9 / 16"
              max-height="700px"
              class="rounded"
              src="https://images.unsplash.com/photo-1524383880260-db51af30f5e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Enterprise',
};
</script>

<style scoped></style>
