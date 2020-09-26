<template>
<v-container class="pa-0 d-flex" style="min-height: 100vh">
  <v-layout class="d-flex flex-fill">
    <v-flex lg12 md12 sm12 xs12 class="py-12 d-flex align-center">

      <div class="col-12 col-sm-12 col-lg-5 col-md-5 pa-0">
        <div class=" d-flex pa-0">
          <h5 class="text-uppercase text-caption font-weight-bold pink--text">
            Quem somos nós?
          </h5>
        </div>

        <!-- Titulo -->
        <div class="d-flex pa-0 text-center mt-2">
         <h1 class="font-weight-regular">Nossa empresa</h1>
        </div>

        <!-- Conteudo -->
        <div class=" d-flex flex-column pa-0 py-8">
          <h4>Visando inovar e surpreender, a Girabel’s integra populações e prefeituras em um só lugar.</h4>
          <p class="py-12 grey--text">
           Diante do atual cenário, de comunicação burocratizada entre pessoas e orgãos públicos, nossa plataforma traz como solução, um novo meio de comunicação de forma autônoma, visando o compartilhamento e integração de informações. 
          </p>
        </div>
        <div>
          <v-btn class="white--text font-weight-regular"
          dark
          large
          color='pink' 
          elevation=0 rounded>Vem com a gente</v-btn>
       </div>
      </div>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name:'EnterpriseContent',

}
</script>

<style>

</style>