// const Vue = require('vue');
// const App = require('./App.vue');

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    listBooks: [],
  },
  actions: { // maybe async actions; In this methods  call commit
    addBook: function (state, book) {
      state.commit('ADD_BOOK', book);
    }
  },
  mutations: { // only sync method
    ADD_BOOK: function (state, book) { // store.commit('ADD_BOOK', { id, author, name, year })
      console.log('ADD_BOOK', book);
      state.listBooks.push(book);
    }
  },
  getters: {
    getListBook: function (state, getters) {
      return state.listBooks;
    }
  },
  modules: {}
});

new Vue({
  el: 'app',
  components:{ App },
  store,
});


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
