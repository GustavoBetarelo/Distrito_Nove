<template>
  <div class="d-flex purple" style="min-height: 100vh">
    <div class="col-10 mx-auto py-12 flex-fill d-flex">
      <v-layout class="flex-fill" align-center wrap justify-space-between>
        <v-flex lg6 md6 sm12 xs12>
          <div class="pa-0 col-12 col-lg-9 col-md-10 col-sm-12">
            <div>
              <h5
                class="text-uppercase text-caption font-weight-bold pink--text"
              >
                Produto
              </h5>
            </div>
            <div class="mt-6">
              <h3
                class="white--text font-weight-regular text-h4 text-lg-h3 text-md-h3 text-sm-h3"
              >
                Plataforma Direction
              </h3>
            </div>
            <div class="mt-6">
              <p class="white--text font-weight-bold">
                Right Direction, a primeira ferramenta que integra a população e
                seus gestores municipais
              </p>
            </div>
            <div class="white--text font-weight-light mt-16">
              <p>
                A comunidade é ouvida, assim como o municipio, a informação
                chega a toda população.
              </p>
              <p>
                Participe de enquetes, pesquise lugares, resolva problemas, tudo
                isso em apenas um clique.
              </p>
              <p>
                Como gestor é possível analisar o respaldo da população, antes
                de uma tomada de decisão. Além de compartilhar as mudanças e
                avanços conquistados pelo atual mandato.
              </p>
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
        <v-flex lg6 md6 sm12 xs12 class="hidden-sm-and-down">
          <div class="pa-0 ml-auto col-12 col-lg-10 col-md-9 col-sm-12">
            <v-img
              max-width="100%"
              class="rounded"
              src="https://images.unsplash.com/photo-1587377838658-e7d21b152a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            />
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DirectionPlatform',
};
</script>

<style scoped></style>
