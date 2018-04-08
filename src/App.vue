<template>
  <div>
    <Menu/>
   <router-view></router-view>
  </div>
</template>
<script>

import Menu from './Menu.vue';

export default {
  name: 'app',
  components: {
    'Menu': Menu,
  },
};
</script>
<style>

</style>