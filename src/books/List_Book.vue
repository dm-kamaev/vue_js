<template>
  <div @click='on_element_edit_or_remove_book' style='width:50%;margin:0 auto;'>
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
</template>
<script>

import Vue from 'vue';
import service_books from '../services/service_books.js';
import action_types from './action_types.js';
import books_bus from './books_bus.js';

export default {
  name: 'ListBook',
  data: function () {
    return {
      u_id: null,
    };
  },
  async beforeCreate() {
    const books = await service_books.get_all(this.$cookie.get('u_id'));
    books.forEach(book => {
      this.$store.dispatch(action_types.ADD_BOOK, book);
    });
  },
  created: function () {
    this.u_id = this.$cookie.get('u_id');
  },
  computed: {
    get_list_books() {
      return this.$store.getters.books;
    }
  },
  methods: {
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
      var book = this.$store.getters.get_book(book_index);
      var { author, name, year } = book;
      books_bus.emit_edit_book({
        author,
        name,
        year,
        textButton: 'Редактировать',
        index: book_index,
      });
    },
    _remove_book: function (book_index, e) {
      this.$store.dispatch(action_types.REMOVE_BOOK, book_index);
      service_books.update(this.u_id, this.$store.getters.books);
    },
  }
};
</script>
<style>

</style>