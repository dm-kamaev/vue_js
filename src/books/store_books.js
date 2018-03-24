import Vue from 'vue';
import action_types from './action_types.js';

export default {
  state: {
    listBooks: [],
  },
  actions: { // maybe async actions; In this methods  call commit
    [action_types.ADD_BOOK]: function (state, book) {
      state.commit(action_types.ADD_BOOK, book);
    },
    [action_types.EDIT_BOOK]: function (state, param) {
      state.commit(action_types.EDIT_BOOK, param);
    },
    [action_types.REMOVE_BOOK]: function (state, index) {
      state.commit(action_types.REMOVE_BOOK, index);
    }
  },
  mutations: { // only sync method
    [action_types.ADD_BOOK]: function (state, book) { // store.commit('ADD_BOOK', { id, author, name, year })
      const books = state.listBooks;
      book.id = books.length;
      books.push(book);
    },
    [action_types.EDIT_BOOK]: function (state, param) {
      const index = param.index
      const book = param.book;
      book.id = index;
      Vue.set(state.listBooks, index, book);
    },
    [action_types.REMOVE_BOOK]: function (state, index) {
      index = parseInt(index, 10);
      const books = state.listBooks;
      state.listBooks = state.listBooks.filter(el => {
        return parseInt(el.id, 10) !== index;
      });
    }
  },
  getters: {
    books: function (state, getters) {
      return state.listBooks;
    },
    get_book: function (state, getters) {
      return (index) => {
        return state.listBooks[index];
      }
    }
  },
  modules: {}
};