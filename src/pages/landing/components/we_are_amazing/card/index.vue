<template>
  <v-card
    elevation="0"
    color="dark"
    height="300"
    class="d-flex align-start justify-start pa-8 white--text"
  >
    <div class="d-flex flex-fill flex-column align-start">
      <div class="rounded-circle">
        <v-icon :color="color" large>mdi-map-marker</v-icon>
      </div>
      <div class="mt-4">
        <h3
          class=" text-h5 font-weight-bold text-left"
          :class="`${color}--text`"
        >
          {{ title }}
        </h3>
      </div>
      <div class="mt-6">
        <p class="white--text font-weight-light text-left">
          {{ description }}
        </p>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'WeAreAmazingCard',
  props: {
    icon: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
    color: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style scoped></style>
