<template>
  <div class="fill-height d-flex purple" style="max-height: 100vh">
    <div class="col-10 mx-auto py-12 flex-fill d-flex">
      <v-layout class="flex-fill" align-center wrap justify-space-between>
        <v-flex lg12 md12 sm12 xs12 class="fill-height d-flex">
          <div class="text-center flex-fill d-flex flex-column">
            <div>
              <h5
                class="text-uppercase text-caption font-weight-bold pink--text"
              >
                We Are Amazing
              </h5>
            </div>
            <div class="mt-6">
              <h3 class="white--text font-weight-regular text-h3">
                Funcionalidades
              </h3>
            </div>
            <div class="mt-6">
              <p class="white--text font-weight-bold">
                As funcionalidades que o Right Direction é capaz de entregar
              </p>
            </div>
            <div
              class="flex-fill d-flex white--text align-center justify-center"
            >
              Coming Soon
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
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeAreAmazing',
};
</script>

<style scoped></style>
