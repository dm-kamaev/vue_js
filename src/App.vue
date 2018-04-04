<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand" href="#">Menu</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class='nav-item nav-link active' to='/'>Add books <span class="sr-only">(current)</span></router-link>
          <router-link class="nav-item nav-link" to='/review_books'>Review books</router-link>
          <router-link class="nav-item nav-link" to='/about'>About app</router-link>
          <router-link class="nav-item nav-link" to='/not_found'>Not found</router-link>
        </div>
      </div>
    </nav>
   <router-view></router-view>
  </div>
</template>
<script>

import Vue from 'vue';

export default {
  name: 'app',
  // components: {
    // 'App': Books,
  // },
};
</script>
<style>

</style>