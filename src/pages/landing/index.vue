<template>
  <div class="fill-height">
    <Home />
    <Enterprise id="Enterprise" />
    <DirectionPlatform id="Platform" />
    <WeAreAmazing id="WeAreAmazing" />
    <!--    <Cards />-->
    <!--    <v-divider />-->
    <!--    <Banner />-->
    <!--    <v-divider />-->
    <!--    <Form />-->
    <LoginModal />
  </div>
</template>

<script>
import Home from '@/pages/landing/components/home/index';
import LoginModal from '@/pages/landing/components/login/index';
import DirectionPlatform from '@/pages/landing/components/direction_platform/index';
import WeAreAmazing from '@/pages/landing/components/we_are_amazing/index';
import Enterprise from '@/pages/landing/components/enterprise/index';

export default {
  name: 'Landing',
  components: { WeAreAmazing, DirectionPlatform, LoginModal, Home, Enterprise },
};
</script>

<style lang="scss"></style>
