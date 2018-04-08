<template>
  <div class=wrap__b-reviews>
    <h1 style=margin-top:24px;>Обзоры на книги</h1>

    <div v-if='not_loaded' class='b-reviews b-reviews--center'>
      Загрузка...
    </div>

    <div v-if='not_error' class='b-reviews b-reviews--center'>
      Произошла ошибка загрузки...
    </div>

    <div v-if='reviews_books' class='b-reviews b-reviews--center'>
      <div v-for="(review, i) in reviews_books" :key='review.id'>
        <!-- <p v-if='i!==0' class=b-review__border></p> -->
        <img :src='review.img' :class='(i !== 0) ? "b-review__img b-review__img--margin" : "b-review__img"' alt='Книга'>
        <h2 class=b-review__title>{{review.title}}</h2>
        <p class=b-review__link>
          <router-link :to="{ name: 'review', params: { review_id: review.id }}">Подробнее</router-link>
        </p>
      </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'List_Reviews',
  data: function () {
    return {
      not_loaded: true,
      not_error: false,
      reviews_books: null
    };
  },
  beforeCreate: function () {
    const me = this;
    axios.get('/api/review_book')
      .then(function(res) {
        me.not_loaded = false;
        var data = res.data;
        if (data.ok) {
          me.reviews_books = data.data;
          console.log('res=', JSON.stringify(data.data, null, 2));
        } else {
          throw data;
        }
      })
      .catch(function(error) {
        me.not_error = true;
        console.log('Error=', error);
      });
  }
};
</script>

<style scoped>
  .wrap__b-reviews{
    font-family: Helvetica, Arial;
    font-size: 120%;
    text-align: center;
  }

  .b-reviews{
    margin: 16px auto 0 auto;
    width: 20%;
  }

  .b-reviews--center{
    text-align:center
  }

  .b-review__title{
    margin-top: 8px;
    font-size: 130%;
  }

  .b-review__link{
    margin-top: 16px;
    text-align: center;
    font-size: 120%;
  }

  .b-review__border{
    width: 70%;
    margin: 16px auto 0 auto;
    border-bottom: 2px solid #EEE;
  }

  .b-review__img{
    width:80%;
  }

  .b-review__img--margin{
    margin-top: 16px;
  }

</style>