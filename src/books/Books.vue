<template>
  <div class='main'>
      <div style='display:inline-block;width:20%;vertical-align:top'>
      <Book-Form/>
    </div>
    <div style='display:inline-block;width:70%;vertical-align:top'>
      <List-Book/>
    </div>
    <Debug :listBook='get_list_books'/>
  </div>
</template>
<script>

import Vue from 'vue';
import Debug from '../Debug.vue';
import BookForm from './BookForm.vue';
import ListBook from './ListBook.vue';
import action_types from './action_types.js';

export default {
  name: 'Books',
  components: {
    'Debug': Debug,
    'Book-Form': BookForm,
    'List-Book': ListBook
  },
  data: function () {
    return {};
  },
  computed: {
    get_list_books() {
      return this.$store.getters.books;
    }
  },
  methods: {},
};
</script>
<style>
  .main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    line-height: 1.5;
    font-size: 100%;
  }
</style>