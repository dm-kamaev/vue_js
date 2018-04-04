<template>
  <div>
    <form style=text-align:left>
      <p>
        <label for='author'>Автор:</label><br/>
        <input v-model="author" id='author' class="form-control form-control-lg" type=text/>
      </p>
      <p>
        <label for='name'>Имя:</label><br/>
        <input v-model="name"  id='name' class="form-control form-control-lg" type=text/>
      </p>
      <p>
        <label for='year'>Год:</label><br/>
        <input v-model='year'  id='year' class="form-control form-control-lg" type=text/>
      </p>
      <button @click="button_add_or_edit_book" class='btn btn-success' type=button>{{textButton}}</button>
    </form>
  </div>
</template>
<script>

import Vue from 'vue';
import action_types from './action_types.js';
import books_bus from './books_bus.js';

export default {
  name: 'BookForm',
  data: function () {
    return {
      author: '',
      name: '',
      year: '',
      index: null,
      textButton: 'Добавить',
    }
  },
  beforeCreate: function () {
    const self = this;
    books_bus.on_edit_book(function (book) {
      self.author = book.author;
      self.name = book.name;
      self.year = book.year;
      self.textButton = 'Редактировать';
      self.index = book.index;
    });
  },
  computed: {
    get_list_books() {
      return this.$store.getters.books;
    }
  },
  methods: {
    // button for for form
    button_add_or_edit_book: function (e) {
      var index = this.index;
      if (index || index === 0) { // form edit book
        const { author, name, year } = this;
        this.$store.dispatch(action_types.EDIT_BOOK, { index, book: { author, name, year }});
        this.author = '';
        this.name = '';
        this.year = '';
        this.textButton = 'Добавить';
        this.index = null;
      } else { // form add new book
        const { author, name, year } = this;
        this.$store.dispatch(action_types.ADD_BOOK, { author, name, year });
        this.author = '';
        this.name = '';
        this.year = '';
      }
    },
  }
};
</script>
<style>

</style>