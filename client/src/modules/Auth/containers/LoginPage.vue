<template>
  <div class='vv-login-page'>
    <v-layout row wrap mt-5>
      <v-flex md6 offset-md3>
        <v-card>
          <v-card-media src="/client/assets/top.jpeg" height="200px">
          </v-card-media>
          <v-card-title>
            <h1>Sign In</h1>
          </v-card-title>
          <v-card-text>
            <v-text-field label="User Name" v-model="username" :error-messages="nameErrors" @input="$v.username.$touch()" @blur="$v.username.$touch()" required></v-text-field>
            <v-text-field label="Password" v-model="password" :type="'password'" :error-messages="passwordErrors" @input="$v.password.$touch()" @blur="$v.password.$touch()" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="orange" @click="submit">Sign In</v-btn>
            <v-btn flat color="orange" @click="clear">clear</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { validationMixin } from 'vuelidate';
  import { required } from 'vuelidate/lib/validators';

  export default {
    name: 'LoginPage',
    mixins: [validationMixin],
    validations: {
      username: { required },
      password: { required },
    },
    data() {
      return {
        username: 'root',
        password: 'newfirst',
      };
    },
    computed: {
      nameErrors() {
        const errors = [];
        if (!this.$v.username.$dirty) return errors;
        if (!this.$v.username.required) errors.push('User Name is required.');
        return errors;
      },
      passwordErrors() {
        const errors = [];
        if (!this.$v.password.$dirty) return errors;
        if (!this.$v.password.required) errors.push('Password is required.');
        return errors;
      },
    },
    methods: {
      ...mapActions('login', {
        sendLoginData: 'sendLoginData',
      }),
      submit() {
        this.$v.$touch();
        if (!this.$v.$error) {
          this.sendLoginData({ username: this.username, password: this.password }).then((res) => {
            this.$store.commit('global/auth/loggedIn', res.token);
            this.$router.push({ name: 'dashboard' });
            this.notifySuccess('Signed in Successfully');
          }).catch((err) => {
            console.log(err);
            this.notifyError('Sign in error');
          });
        }
      },
      clear() {
        this.$v.$reset();
        this.username = '';
        this.password = '';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .vv-login-page {
  }
</style>
