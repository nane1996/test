// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBST02qWmOB4qn1IFvKxnmAkEAb9S1SMFE",
      authDomain: "luys-9ee7c.firebaseapp.com",
      databaseURL: "https://luys-9ee7c.firebaseio.com",
      projectId: "luys-9ee7c",
      storageBucket: "luys-9ee7c.appspot.com",
      messagingSenderId: "39821917453"
    })
  }
})
