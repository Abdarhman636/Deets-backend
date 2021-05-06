<template>
  <div class="container">
      <div class="f-flex justify-content-start">
          <div class="col-md-6 mt-5">
              <div class="card">
                  <div class="card-header">
                      Account
                  </div>

                  <div class="card-body">
                      <h3>Welcome, {{user.email}}</h3>
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
    data(){
        return {
            user: ''
        }
    },

    mounted(){
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;

            if(!this.user) {
                this.$router.push('/')
            }
        })
    }
}
</script>