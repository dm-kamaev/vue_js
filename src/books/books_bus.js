// Event bus for communicate between differents components

import Vue from 'vue';

export default {
  books_bus: new Vue(),
  emit_edit_book: function (data) {
    this.books_bus.$emit(this.events.EDIT_BOOK, data);
  },
  on_edit_book: function (cb) {
    this.books_bus.$on(this.events.EDIT_BOOK, cb);
  },
  events: {
    EDIT_BOOK: 'EDIT_BOOK',
  }
};

