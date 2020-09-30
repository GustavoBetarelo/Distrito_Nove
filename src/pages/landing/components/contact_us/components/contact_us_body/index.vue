<template>
  <div
    class="d-flex container-landing"
    style="position: relative; min-height: 50vh"
  >
    <v-img
      class="hidden-sm-and-down"
      style="position: absolute; right: 0;"
      gradient="to right,
      rgba(246, 16, 103, 1),
      rgba(246, 16, 103, 1)"
      max-width="40%"
      height="100%"
      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt="image-contact-us"
      data-v-image-contact-us-body
    />
    <div class="col-10 mx-auto py-12 flex-fill d-flex">
      <v-layout class="flex-fill" align-center wrap justify-space-between>
        <v-flex lg8 md8 sm12 xs12>
          <div class="pa-0 col-12 col-lg-9 col-md-10 col-sm-12">
            <div class="col-8 pa-0">
              <h5
                class="dark--text font-weight-bold text-h6 text-lg-h5 text-md-h5 text-sm-h5"
              >
                Ficou com alguma dúvida? Vamos conversar!
              </h5>
            </div>
            <div class="mt-6 dark--text">
              <h4 class="font-weight-bold">Nosso escritório</h4>
              <p class="grey--text font-weight-light">
                Rua dos Tuins, 606 Jardim Araguaia Fernandópolis -SP
              </p>
            </div>
            <div class="mt-6 dark--text">
              <h4 class="font-weight-bold">Nosso e-mail</h4>
              <p class="grey--text font-weight-light">
                Contato@girabels.com
              </p>
            </div>
            <div class="mt-6 dark--text">
              <h4 class="font-weight-bold">Nosso número</h4>
              <p class="grey--text font-weight-light">
                (17) 99999-9999
              </p>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUsBody',
};
</script>

<style>
div[data-v-image-contact-us-body] > div.v-image__image {
  background-blend-mode: multiply;
}
</style>
