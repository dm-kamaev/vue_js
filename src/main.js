import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './App.vue';
import Books from './books/Books.vue';
import About from './About.vue';
import List_Reviews from './reviews_books/List_Reviews.vue';
import Review from './reviews_books/Review.vue';
import Not_found from './Not_found.vue';

import store_books from './books/store_books.js';

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
  { path: '*', component: Not_found },
  { path: '/', component: Books },
  { path: '/list_reviews', component: List_Reviews },
  { path: '/about', component: About },
  { path: '/review/:review_id', name: 'review', component: Review, props: true }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

const store = {
  modules: {
    books: store_books,
  }
};

new Vue({
  el: 'app',
  components: {
    App
  },
  store: new Vuex.Store(store),
  router,
});





