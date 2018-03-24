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
        <button @click="addOrEditBook" class='btn btn-success' type=button>{{textButton}}</button>
      </form>
    </div>

    <div style='display:inline-block;width:70%;vertical-align:top'>
      <div @click=editOrRemoveBook style='width:50%;margin:0 auto;'>
        <div v-for="book in listBook" :key="book.id" style="border-bottom:2px solid #EEE;text-align:left;padding-bottom:24px">
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

    <Debug :listBook='listBook'/>

  </div>
</template>
<script>

import Vue from 'vue';
import Debug from './Debug.vue'

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
      listBook: [{
        id: 0,
        author: 'Пушкин',
        name: 'евгений онегин',
        year: 1792
      }]
    }
  },
  methods: {
    addOrEditBook: function (e) {
      var index = this.index;
      if (index || index === 0) {
        const { author, name, year } = this;
        Vue.set(this.listBook, index, { id: index, author, name, year });
        this.author = '';
        this.name = '';
        this.year = '';
        this.textButton = 'Добавить';
        this.index = null;
      } else {
        const { author, name, year } = this;
        const listBook = this.listBook;
        listBook.push({ id: listBook.length, author, name, year });
      }
    },
    editOrRemoveBook: function (e) {
      const t = e.target;
      const action = t.getAttribute('data-type-action');
      const bookIndex = t.getAttribute('data-book-id');
      if (action === 'edit') {
        this._editBook(bookIndex, e);
      } else if (action === 'remove') {
        this._removeBook(bookIndex, e);
      }
    },
    _editBook: function (bookIndex, e) {
      var book = this.listBook[bookIndex];
      var { author, name, year } = book;
      this.author = author;
      this.name = name;
      this.year = year;
      this.textButton = 'Редактировать';
      this.index = bookIndex;
    },
    _removeBook: function (bookIndex, e) {
      bookIndex = parseInt(bookIndex, 10);
      this.listBook = this.listBook.filter(el => {
        return parseInt(el.id, 10) !== bookIndex;
      });
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