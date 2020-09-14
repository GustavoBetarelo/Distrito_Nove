<template>
  <div class="py-12 fill-height col-10 mx-auto container-default">
    <v-layout>
      <v-flex lg6 md6 class="mt-8">
        <div class="text-left textDefault--text">
          <h4
            class="text-uppercase secondary--text font-weight-bold"
            style="letter-spacing: 4px"
          >
            Quem nós somos?
          </h4>
          <h2 class="text-h3 font-weight-medium mt-2">Nossa empresa</h2>
          <h4 class="mt-4">
            Visando inovar e surpreender, a Girabel’s integra populações e
            prefeituras em um só lugar.
          </h4>
          <h4 class="font-weight-light mt-8">
            Diante do atual cenário, de comunicação burocratizada entre pessoas
            e orgãos públicos, nossa plataforma traz como solução, um novo meio
            de comunicação de forma autônoma, visando o compartilhamento e
            integração de informações.
          </h4>
          <v-btn color="secondary" rounded large elevation="0" class="mt-12">
            Vem com a gente
          </v-btn>
        </div>
      </v-flex>
      <v-flex lg5 md5 offset-lg2 offset-md2>
        <v-img
          class="rounded"
          height="80%"
          style="position: relative"
          src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
        >
          <div
            style="width: 50%; position: absolute; right: 5%; bottom: 5%; font-family: 'Times New Roman',serif"
            class="primary white--text rounded pa-8"
          >
            <i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, quibusdam.
            </i>
          </div>
        </v-img>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'WhoWeAre',
};
</script>

<style scoped lang="scss">
.container-default {
  max-height: 100vh;
}
</style>
