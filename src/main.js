const Vue = require('vue');
const App = require('./App.vue');

// import Vue from 'vue'
// import App from './App.vue'

new Vue({
  el: 'app',
  components:{ App: App.default }
})


// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

// new Vue({
//   el: '#main',
//   data: {
//     message: "Hello Vue 123"
//   }
// });
