<template>
  <div>
    <form style=text-align:left>
      <p>
        <label for='author'>Автор:</label><br/>
        <input v-model="author" id='author' class="form-control form-control-lg" type=text/>
        <span v-if='error_author' style='color:#DC3545'>{{error_author}}</span>
      </p>
      <p>
        <label for='name'>Имя:</label><br/>
        <input v-model="name"  id='name' class="form-control form-control-lg" type=text/>
        <span v-if='error_name' style='color:#DC3545'>{{error_name}}</span>
      </p>
      <p>
        <label for='year'>Год:</label><br/>
        <input v-model='year'  id='year' class="form-control form-control-lg" type=text/>
        <span v-if='error_year' style='color:#DC3545'>{{error_year}}</span>
      </p>
      <button @click="button_add_or_edit_book" class='btn btn-success' type=button>{{textButton}}</button>
    </form>
  </div>
</template>
<script>

import Vue from 'vue';
import service_books from '../services/service_books.js';
import action_types from './action_types.js';
import books_bus from './books_bus.js';

export default {
  name: 'Book_Form',
  data: function () {
    return {
      u_id: null,
      author: '',
      name: '',
      year: '',
      index: null,
      textButton: 'Добавить',
      error_author: null,
      error_name: null,
      error_year: null,
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
      const u_id = this.$cookie.get('u_id');
      var index = this.index;
      this.error_author = null;
      this.error_name = null;
      this.error_year = null;
      if (index || index === 0) { // form edit book
        const { author, name, year } = this;
        if (!this._validate(author, name, year)) {
          return false;
        }
        this.$store.dispatch(action_types.EDIT_BOOK, { index, book: { author, name, year }});
        service_books.update(u_id, this.$store.getters.books);
        this.author = '';
        this.name = '';
        this.year = '';
        this.textButton = 'Добавить';
        this.index = null;
      } else { // form add new book
        const { author, name, year } = this;
        if (!this._validate(author, name, year)) {
          return false;
        }
        this.$store.dispatch(action_types.ADD_BOOK, { author, name, year });
        service_books.update(u_id, this.$store.getters.books);
        this.author = '';
        this.name = '';
        this.year = '';
      }
    },
    _validate: function (author, name, year) {
      const list_error = [];
      if (!author) {
        list_error.push({ key: 'error_author', text: '* Укажите автора' });
      }
      if (!name) {
        list_error.push({ key: 'error_name', text: '* Укажите название книги' });
      }
      if (not_validate_year(year)) {
        list_error.push({ key: 'error_year', text: '* Год должен содержать только цифры (минимум 3 цифры)' });
      }
      if (list_error.length > 0) {
        list_error.forEach(err => {
          this[err.key] = err.text;
        });
        return false;
      }
      return true;
    }

  },
};

function not_validate_year(year) {
  if (!year) {
    return true;
  }
  if (year.length < 3) {
    return true;
  }
  return !/^\d+$/.test(year);
}
</script>
<style>

</style>