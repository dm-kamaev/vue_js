import Vue from 'vue';
import Vuex from 'vuex';
import App from './books/App.vue';
import store_books from './books/store_books.js';

Vue.use(Vuex);

const store = {
  modules: {
    books: store_books,
  }
};

new Vue({
  el: 'app',
  components:{ App },
  store: new Vuex.Store(store),
});
