<template>
  <div class="fill-height">
    <Home />
    <Cards />
    <Banner />
  </div>

  <!-- Formulário -->
  <!--      <v-flex class="px-16 align-center">-->
  <!--        <v-card class="px-2 py-1">-->
  <!--          <form>-->
  <!--            <v-text-field-->
  <!--              background-color="white"-->
  <!--              v-model="name"-->
  <!--              label="Name"-->
  <!--              required-->
  <!--            >-->
  <!--            </v-text-field>-->

  <!--            <v-text-field-->
  <!--              background-color="white"-->
  <!--              v-model="name"-->
  <!--              label="Name"-->
  <!--              required-->
  <!--            >-->
  <!--            </v-text-field>-->

  <!--            <v-text-field-->
  <!--              background-color="white"-->
  <!--              v-model="name"-->
  <!--              label="Name"-->
  <!--              required-->
  <!--            >-->
  <!--            </v-text-field>-->
  <!--          </form>-->
  <!--        </v-card>-->
  <!--      </v-flex>-->
</template>

<script>
import Home from '@/pages/landing/components/home/index';
import Cards from '@/pages/landing/components/cards/index';
import Banner from '@/pages/landing/components/banner/index';
export default {
  name: 'Landing',
  components: { Banner, Cards, Home },
};
</script>

<style lang="scss"></style>
