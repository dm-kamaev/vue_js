<template>
  <div class=wrap__b-review>
    <div v-if='not_loaded' class='b-review b-review--center'>
      Загрузка...
    </div>

    <div v-if='not_error' class='b-review b-review--center'>
      Произошла ошибка загрузки...
    </div>

    <div v-if='review'>
      <div class=b-review>
        <img style=width:100%; :src='review.img' alt='Книга'>
        <h1 style=margin-top:16px>{{review.title}}</h1>
        <p style=margin-top:16px>{{review.description}}</p>
      </div>
    </div>

    <div style=margin-top:24px; class='b-review b-review--center'>
      <router-link to="/list_reviews">Назад</router-link>
    </div>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Review',
  data: function () {
    return {
      not_loaded: true,
      not_error: false,
      review: null
    };
  },
  beforeCreate: function () {
    const me = this;
    axios.get('/api/review_book/'+this.$route.params.review_id)
      .then(function(res) {
        me.not_loaded = false;
        var data = res.data;
        if (data.ok) {
          me.review = data.data;
        } else {
          throw data;
        }
      })
      .catch(function(error) {
        me.not_error = true;
      });
  }
};
</script>

<style scoped>
  .wrap__b-review{
    font-family: Helvetica, Arial;
    font-size: 120%;
  }

  .b-review{
    margin: 0 auto;
    width: 20%;
  }

  .b-review--center{
    text-align:center
  }
</style>