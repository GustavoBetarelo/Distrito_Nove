<template>
  <v-app>
    <v-main>
      <HomeLanding />
      <WhoWeAre />
      <div class="col-10 mx-auto">
        TESTE
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HomeLanding from '@/pages/landing/components/home/index.vue';
import WhoWeAre from '@/pages/landing/components/who_we_are/index.vue';

export default {
  name: 'Landing',
  components: { WhoWeAre, HomeLanding },
};
</script>
