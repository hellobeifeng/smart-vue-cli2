<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus">
html, body {
  font-family: "Times New Roman",Georgia,Serif;
  margin: 0;
  padding: 0;
}
</style>
