<template>
  <div class="d-flex">
    <div
      class="d-flex flex-column align-start justify-start col-12 col-lg-10 col-md-10 col-sm-10 mx-auto py-6 py-lg-12 py-md-12 py-sm-12"
    >
      <div>
        <h4 class="text-h4 font-weight-bold dark--text">Formulário</h4>
      </div>
      <v-container fluid class="pa-0 mt-6" grid-list-lg>
        <v-layout>
          <v-flex class="align-center">
            <v-card elevation="0" style="border: 1px solid #eee">
              <v-layout class="flex-column flex-lg-row flex-md-row">
                <v-flex lg6 md6 sm12 xs12>
                  <div
                    class="pink pa-8 white--text fill-height form-default-side"
                    :class="
                      $vuetify.breakpoint.smAndDown
                        ? 'rounded-tl rounded-tr'
                        : 'rounded-tl rounded-bl'
                    "
                  >
                    <h2
                      class="text-h4 text-lg-h2 text-md-h2 text-sm-h2 font-weight-bold col-6 pa-0"
                    >
                      Aqui seu dinheiro vale mais
                    </h2>
                    <p class="col-6 pa-0 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A, asperiores dolores esse ipsam laudantium officia quasi
                      sed ullam ut! Alias, aut consectetur eius expedita minima
                      minus pariatur perspiciatis praesentium sapiente.
                    </p>
                  </div></v-flex
                >
                <v-flex lg6 md6 sm12 xs12 class="px-12 py-8">
                  <v-form v-model="formData.validate">
                    <v-layout wrap>
                      <v-flex lg6 md6 sm6 xs12>
                        <v-text-field
                          background-color="white"
                          v-model="name"
                          color="pink"
                          outlined
                          label="Nome"
                          required
                          :rules="[formRules.required]"
                        >
                        </v-text-field>
                      </v-flex>
                      <v-flex lg6 md6 sm6 xs12>
                        <v-text-field
                          background-color="white"
                          v-model="name"
                          color="pink"
                          outlined
                          label="Celular"
                          required
                          :rules="[formRules.required]"
                        >
                        </v-text-field>
                      </v-flex>
                      <v-flex lg6 md6 sm6 xs12>
                        <v-text-field
                          background-color="white"
                          v-model="name"
                          color="pink"
                          outlined
                          label="E-mail"
                          required
                          :rules="[formRules.required]"
                        >
                        </v-text-field>
                      </v-flex>
                      <v-flex lg6 md6 sm6 xs12>
                        <v-select
                          menu-props="auto"
                          background-color="white"
                          v-model="state"
                          color="pink"
                          outlined
                          label="Estado"
                          required
                          item-text="label"
                          item-value="value"
                          :items="[{ label: 'São Paulo', value: 1 }]"
                          :rules="[formRules.required]"
                        >
                        </v-select>
                      </v-flex>
                      <v-flex lg12 md12 sm12 xs12>
                        <v-textarea
                          menu-props="auto"
                          background-color="white"
                          v-model="name"
                          outlined
                          color="pink"
                          label="Descrição (Opcional)"
                          required
                        />
                      </v-flex>
                      <v-flex lg12 md12 sm12 xs12 class="d-flex justify-end">
                        <v-btn
                          rounded
                          color="pink"
                          elevation="0"
                          large
                          :disabled="!formData.validate"
                          class="white--text"
                        >
                          Concluir cadastro
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      name: '',
      state: '',
      formData: {
        validate: false,
      },
    };
  },
  computed: {
    formRules() {
      return {
        required: value => {
          if (value) return true;
          return 'Esse campo é obrigatório';
        },
      };
    },
  },
};
</script>

<style scoped>
.form-default-side {
  background-image: url('https://storytale.io/wp-content/uploads/2020/05/humanity-07-relax.png');
  background-size: 60%;
  background-position: bottom right;
  background-blend-mode: multiply;
}
</style>
