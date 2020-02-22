<template>
  <div></div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['loading'],
  data () {
    return {
      load: null
    }
  },
  watch: {
    loading () {
      if (this.loading) {
        this.load = this.$loading({
          lock: true,
          text: this.getLoadingText(),
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, .3)'
        })
      } else {
        this.load.close()
      }
    }
  },
  methods: {
    getLoadingText () {
      let descArr = ['生如夏花，何其绚烂', '醉的人们举起杯,笑的眼里全是泪', '雪依然在下那村庄依然安详', '我曾经跨过山和大海']
      return descArr[Math.floor(Math.random() * descArr.length)]
    }
  }
}
</script>

<style lang="stylus" scoped>
.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000;
  opacity: .5;
}
.box {
  font-size: 14px;
  top: 35%;
  left: 44%;
  color: #000000;
  position: fixed;
  img {
    position: relative;
    top: 3px;
    margin-right: 5px;
  }
}
</style>
