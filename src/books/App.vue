<template>
  <div id='app'>
    <div style=display:inline-block;width:20%;vertical-align:top>
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

    <div style='display:inline-block;width:70%;vertical-align:top'>
      <div @click=on_element_edit_or_remove_book style='width:50%;margin:0 auto;'>
        <div v-for="book in get_list_books" :key="book.id" style="border-bottom:2px solid #EEE;text-align:left;padding-bottom:24px">
          <p>Автор: {{book.author}}</p>
          <p>Название: {{book.name}}</p>
          <p>Год: {{book.year}}</p>
          <table style=width:100%>
            <tr>
              <td style=width:10%><button data-type-action=edit :data-book-id=book.id class='btn btn-outline-success' type=button>Редактировать</button></td>
              <td style=width:60%><button data-type-action=remove :data-book-id=book.id class='btn btn-outline-danger' type=button>Удалить</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <Debug :listBook='get_list_books'/>

  </div>
</template>
<script>

import Vue from 'vue';
import Debug from '../Debug.vue';
import action_types from './action_types.js';

export default {
  name: 'app',
  components: { 'Debug': Debug, },
  data: function () {
    return {
      author: '',
      name: '',
      year: '',
      index: null,
      textButton: 'Добавить',
      // listBook: this.$store.books,
      // listBook: [{
      //   id: 0,
      //   author: 'Пушкин',
      //   name: 'евгений онегин',
      //   year: 1792
      // }]
    }
  },
  beforeCreate() {
    // TODO: ajax request to server
    this.$store.dispatch(action_types.ADD_BOOK, {
      id: 0,
      author: 'Пушкин',
      name: 'евгений онегин',
      year: 1792
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
        console.log('=== HERE ===', 'editBook', index, { author, name, year });
        this.$store.dispatch(action_types.EDIT_BOOK, { index, book: { author, name, year }});
        // Vue.set(this.listBook, index, { id: index, author, name, year });
        this.author = '';
        this.name = '';
        this.year = '';
        this.textButton = 'Добавить';
        this.index = null;
      } else { // form add new book
        const { author, name, year } = this;
        // const listBook = this.listBook;
        // console.log(listBook);
        // listBook.push({ id: listBook.length, author, name, year });
        this.$store.dispatch(action_types.ADD_BOOK, { author, name, year });
        this.author = '';
        this.name = '';
        this.year = '';
      }
    },
    // set to block with book
    on_element_edit_or_remove_book: function (e) {
      const t = e.target;
      const action = t.getAttribute('data-type-action');
      const book_index = t.getAttribute('data-book-id');
      if (action === 'edit') {
        this._edit_book(book_index, e);
      } else if (action === 'remove') {
        this._remove_book(book_index, e);
      }
    },
    _edit_book: function (book_index, e) {
      // var book = this.listBook[bookIndex];
      var book = this.$store.getters.get_book(book_index);
      var { author, name, year } = book;
      this.author = author;
      this.name = name;
      this.year = year;
      this.textButton = 'Редактировать';
      this.index = book_index;
    },
    _remove_book: function (bookIndex, e) {
      this.$store.dispatch(action_types.REMOVE_BOOK, bookIndex);
    },

  }
};
</script>
<style>
#app {
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