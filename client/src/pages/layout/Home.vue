<template>
  <div class="app-wrapper">
    <v-head></v-head>
    <app-main></app-main>
    <v-foot></v-foot>
    <loading v-show="loading" v-cloak :loading="loading"></loading>
    <simple-message
      :type="message.type"
      :msg="message.msg"
      :showClose="message.showClose"
      :show="showMessage"
      @close="closeMessageBox"></simple-message>
  </div>
</template>

<script>
import _ from 'lodash'
import vHead from './Header.vue'
import appMain from './Main.vue'
import vFoot from './Footer.vue'
import Loading from '@comp/Loading'
import SimpleMessage from '@comp/Message'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      showMessage: false,
      myBackToTopStyle: {
        right: '50px',
        bottom: '70px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1', // 按钮的背景颜色 The background color of the button
        'z-index': 2001
      }
    }
  },
  computed: {
    ...mapState({
      loading: state => state.common.loading,
      message: state => state.common.message
    })
  },
  mounted () {
  },
  watch: {
    message: {
      handler () {
        if (!_.isEmpty(this.message)) {
          this.showMessage = true
        } else {
          this.showMessage = false
        }
      },
      deep: true
    }
  },
  components: {
    vHead,
    appMain,
    vFoot,
    Loading,
    SimpleMessage
  },
  methods: {
    closeMessageBox () {
      this.showMessage = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
