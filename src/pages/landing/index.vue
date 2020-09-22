<template>
  <div class="fill-height">
    <Home />
    <Cards />
    <v-divider />
    <Banner />
    <v-divider />
    <Form />
    <LoginModal />
  </div>
</template>

<script>
import Home from '@/pages/landing/components/home/index';
import Cards from '@/pages/landing/components/cards/index';
import Banner from '@/pages/landing/components/banner/index';
import Form from '@/pages/landing/components/form/index';
import LoginModal from '@/pages/landing/components/login/index';
export default {
  name: 'Landing',
  components: { LoginModal, Form, Banner, Cards, Home },
};
</script>

<style lang="scss"></style>
