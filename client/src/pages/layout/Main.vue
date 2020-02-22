<template>
  <div>
    <section class="app-main">
      <transition name="fade" mode="out-in">
        <div class="content">
          <keep-alive>
            <router-view v-if="needKeepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!needKeepAlive"></router-view>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      needKeepAlive: false
    }
  },
  components: {
  },
  mounted () {},
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  watch: {
    $route (to, from) {
      this.needKeepAlive = this.$route.meta && this.$route.meta.keepAlive
    }
  }
}
</script>
<style lang="stylus" scoped>
  .app-main {
    min-height: 100%;
    width:100%;
    background:#fafbfb;
    padding-bottom:80px;
    padding-top: 20px;
    .content{
      color: #1f2f3d;
      box-sizing: border-box;
      padding-left:30px;
      padding-right:30px;
      margin: 0 auto;
      min-height :685px;
    }
  }
</style>
