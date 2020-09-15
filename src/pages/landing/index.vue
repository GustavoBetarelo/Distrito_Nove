<template>
  <div>
    <HomeLanding />
    <WhoWeAre />
  </div>
</template>

<script>
import HomeLanding from '@/pages/landing/components/home/index.vue';
import WhoWeAre from '@/pages/landing/components/who_we_are/index.vue';

export default {
  name: 'Landing',
  components: { WhoWeAre, HomeLanding },
};
</script>
