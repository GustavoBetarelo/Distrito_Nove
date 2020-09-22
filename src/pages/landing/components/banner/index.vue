<template>
  <div class="d-flex">
    <div
      class="d-flex flex-column align-start justify-start col-12 col-lg-10 col-md-10 col-sm-10 mx-auto py-6 py-lg-12 py-md-12 py-sm-12"
    >
      <div>
        <h4 class="text-h4 font-weight-bold dark--text">Banner</h4>
      </div>
      <v-container fluid class="pa-0 mt-6" grid-list-lg>
        <v-layout>
          <v-flex
            class="mt-6 mt-lg-16 mt-md-16 mt-sm-16 d-flex flex-column align-center"
          >
            <v-carousel
              hide-delimiter-background
              class="rounded-lg"
              cycle
              vertical
            >
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet
                  :color="colors[i]"
                  height="100%"
                  class="d-flex justify-start pa-12 default-sheet"
                  :style="`background-image: url(${slide.image})`"
                >
                  <div
                    class="fill-height text-left col-12 col-lg-8 col-md-8 col-sm-8 ml-0 ml-lg-12 ml-md-12 ml-sm-12 d-flex flex-column align-start justify-start"
                  >
                    <div class="text-h4 font-weight-bold">
                      {{ slide.label }}
                    </div>
                    <p class="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Adipisci consectetur, consequatur dicta, dolores ea fugit
                      itaque laudantium magnam modi nisi pariatur quidem quis
                      rem saepe sint tempora tenetur veritatis, voluptatibus?
                    </p>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],

      slides: [
        {
          label: 'Esses são slides rotativos',
          image:
            'https://storytale.io/wp-content/uploads/2020/05/humanity-07-relax.png',
        },
        {
          label: 'O que você achou?',
          image:
            'https://storytale.io/wp-content/uploads/2020/06/wake-up-05-education.png',
        },
        {
          label: 'Provavelmente não usaremos no projeto final',
          image:
            'https://storytale.io/wp-content/uploads/2020/08/uxui-07-user-security.png',
        },
        {
          label: 'Mas ficou bem bonitinho',
          image:
            'https://storytale.io/wp-content/uploads/2020/06/friday-07-lost-in-the-city.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
.default-sheet {
  background-size: 40%;
  background-position: bottom right;
  background-blend-mode: multiply;
}
</style>
