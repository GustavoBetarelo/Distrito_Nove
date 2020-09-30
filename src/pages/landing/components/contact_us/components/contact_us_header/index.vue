<template>
  <div class="d-flex container-landing" style="min-height: 20vh">
    <div class="col-10 mx-auto py-12 flex-fill d-flex">
      <v-layout class="flex-fill" align-center wrap justify-space-between>
        <v-flex lg12 md12 sm12 xs12>
          <div class="pa-0 col-12 col-lg-9 col-md-10 col-sm-12">
            <div class="mt-6">
              <h3
                class="pink--text font-weight-regular text-h4 text-lg-h3 text-md-h3 text-sm-h3"
              >
                Contate-nos
              </h3>
            </div>
            <div class="mt-6">
              <p class="white--text font-weight-bold">
                Entre em contato sobre qualquer dúvida
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
  name: 'ContactUsHeader',
};
</script>

<style scoped>
.container-landing {
  background-image: linear-gradient(
      to right,
      rgba(94, 35, 157, 1),
      rgba(94, 35, 157, 0.6)
    ),
    url('https://images.unsplash.com/photo-1462180744199-87947354c7fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80');
  background-color: #5e239d;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-attachment: fixed;
}
</style>
