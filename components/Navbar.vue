<template>
<nav class="navbar navbar-expand-lg navbar-dark static-top pt-3">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" alt="" width="70px"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end flex-column flex-md-row order-1 order-md-1 collapse navbarNav navbar-collapse nav col-12 col-md-auto mb-2 mb-md-0" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="why-deets">About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#cards">shop</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="function">Features</a>
          </li>

          <li class="nav-item" v-if="user">
            <a class="nav-link" id="contact-link" @click="signout">Sign Out</a>
          </li>

          <li class="nav-item" v-else>
            <a class="nav-link" id="contact-link" href="/signin">Signin</a>
          </li>
          

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      user: ''
    }
  },

  mounted(){
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
      console.log(user)
    })
  },

  methods: {
    signout() {
      firebase.auth().signOut().then(result => {
        console.log(result)
        this.user = ''
        this.$router.push('/')
      })
    }
  }

}
</script>

<style>
@import '../assets/css/sections/nav.css';
</style>
