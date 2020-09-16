<template>
  <div class="fill-height">
    <Home />
    <Cards />
    <Banner />
    <Form />
  </div>
</template>

<script>
import Home from '@/pages/landing/components/home/index';
import Cards from '@/pages/landing/components/cards/index';
import Banner from '@/pages/landing/components/banner/index';
import Form from '@/pages/landing/components/form/index';
export default {
  name: 'Landing',
  components: { Form, Banner, Cards, Home },
};
</script>

<style lang="scss"></style>
