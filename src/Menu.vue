<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand" href="#">Menu</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class='nav-item nav-link active' to='/'>Add books <span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" to='/list_reviews'>Review books</router-link>
        <router-link class="nav-item nav-link" to='/about'>About app</router-link>
        <!-- <router-link class="nav-item nav-link" to='/not_found'>Not found</router-link> -->
      </div>
    </div>
  </nav>
</template>
<script>



export default {
  name: 'Menu',
  components: {},
};
</script>
<style>

</style>