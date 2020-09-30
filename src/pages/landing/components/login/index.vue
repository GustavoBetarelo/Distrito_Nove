<template>
  <v-dialog
    transition="slide-y-transition"
    v-model="open"
    @click:outside="open = false"
    max-width="1000"
  >
    <v-card>
      <v-layout fill-height class="flex-column flex-lg-row flex-md-row">
        <v-flex lg6 md6 sm12>
          <v-img
            height="100%"
            :class="$vuetify.breakpoint.xs ? 'rounded-b' : 'rounded-r-pill'"
            src="https://w.wallhaven.cc/full/lm/wallhaven-lm5z12.jpg"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          >
            <div class="white--text pa-12">
              <h1 class="col-10 pa-0 font-weight-bold">
                A few clicks away from creating your company.
              </h1>
              <p class="mt-3 font-weight-light col-10 pa-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                tempore id eligendi repellat unde doloremque.
              </p>
            </div>
          </v-img>
        </v-flex>
        <v-flex lg6 md6 class="pa-12 d-flex justify-center flex-column">
          <v-layout justify-end>
            <v-flex shrink>
              <v-icon @click="open = false" color="grey">mdi-close</v-icon>
            </v-flex>
          </v-layout>
          <v-form class="flex-fill my-12">
            <div class="text-caption font-weight-light text-center grey--text ">
              Para fazer login
            </div>
            <div class="text-center font-weight-bold text-h6 grey--text">
              Entre com seus dados
            </div>
            <v-layout column class="mt-6">
              <v-flex>
                <v-text-field
                  type="mail"
                  label="E-mail"
                  outlined
                  rounded
                  color="pink"
                />
              </v-flex>
              <v-flex>
                <v-text-field
                  :type="viewPassword ? 'text' : 'password'"
                  label="Senha"
                  outlined
                  color="pink"
                  rounded
                  :append-icon="viewPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="viewPassword = !viewPassword"
                />
              </v-flex>
              <v-flex class="mt-8">
                <v-btn
                  block
                  large
                  rounded
                  elevation="0"
                  color="pink"
                  class="white--text"
                >
                  Fazer login
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LoginModal',
  data: () => ({
    open: false,
    viewPassword: false,
  }),
  methods: {
    handleChange(value) {
      this.open = value;
    },
  },
  beforeMount() {
    this.$bus.$on('changeLogin', this.handleChange);
  },
};
</script>

<style></style>
