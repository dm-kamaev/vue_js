<template>
  <div class=wrap__about>
    <div style=text-align:center>
      <h1>About app</h1>
    </div>

    <p class=text>This example vue js app with base server side. I  use Vuex for routing and Vuex for work with state, independent components connecting via Vue bus.</p>

    <p class=text>On <b>main page</b>, you can add/edit/remove book (it saves on server). Detecting user via cookie.</p>

    <p class=text>On page <b>/list_reviews</b>, you can see reviews books, every review loaded from server via axios</p>
  </div>
</template>
<script>

export default {
  name: 'About',
};

</script>

<style scoped>
  .wrap__about{
    margin: 24px auto 0 auto;
    width: 60%;
    font-family: Helvetica, Arial;
    font-size: 120%;
  }
  .text{
    margin-top: 16px
  }
</style>