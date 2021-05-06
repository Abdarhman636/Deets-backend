<template>
    <div class="contaoner py-5">
      <div class="d-flex flex-row justify-content-center my-5">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header">Sign In</div>

                  <div class="card-body">

                      <form @submit.prevent="pressed">

                          <div class="form-group">
                              <input type="text" placeholder="Email" v-model="email" class="form-control">
                          </div>
                          
                            <div class="form-group">
                              <input type="password" placeholder="Password" v-model="password" class="form-control">
                          </div>

                          <button type="submit">Submit</button>

                      </form>

                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            errors: ''
        }
    },

    methods: {
        pressed() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
                console.log(user);
                this.$router.push('/account')
            }).catch(error => {
                this.errors = error
            })
        }
    }
}
</script>

<style>

</style>