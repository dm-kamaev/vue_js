<template>
  <div>{{debug()}}</div>
</template>

<script>
export default {
    name: 'Debug',
    props: ['listBook'],
    methods: {
        debug() {
            return JSON.stringify(this.listBook, null, 2);
        }
    }
};
</script>

<style>

</style>