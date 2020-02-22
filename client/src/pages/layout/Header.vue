<template>
  <div class="nav">
    <div class="content">
      <el-row>
        <el-col :span="16" class="flex">
          <div class="nav-basic logo">
            <router-link :to="{ path: '/'}">
              <span class="title">smart-vue-cli2</span>
            </router-link>
          </div>
          <v-MenuTab></v-MenuTab>
        </el-col>
        <el-col :span="8" class="flex-end">
          <!-- <div class="nav-basic nav-item">
            <el-dropdown>
              <span class="el-dropdown-link">
                用户名<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </el-dropdown>
          </div> -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vMenuTab from './MenuTab.vue'

export default {
  name: 'Navigator',
  data () {
    return {
      keyword: ''
    }
  },
  computed: {
    ...mapState({
      username: state => state.user.username
    })
  },
  components: {
    vMenuTab
  }
}
</script>

<style lang="stylus" scoped>
.nav {
  position: relative;
  box-shadow: 0 5px 27px 0 rgba(0, 0, 0, 0.06);
  background:#2B3541;
  width: 100%;
  box-sizing: border-box;
  a {
    color: #5e6d82;
  }
  .content {
    box-sizing: border-box;
    width: 100%;
    padding: 0px 100px;
    height: 68px;

    .el-row {
      height: 68px;
    }
    .el-col {
      height: 68px;
    }
    .logo {
        .header-logo{
        width: 30px;
        height: 30px;
        margin-right: 4px;
        color: rgba(0,0,0,.9);
        white-space: nowrap;
        vertical-align: middle;
      }
      .title{
        font-size:18px;
        vertical-align :middle;
        color:#fff;
        font-weight:500;
        font-family: "PingFang SC";
      }
    }
    .nav-basic {
      top: 0px;
      display: inline-block;
      height: 40px;
      line-height:40px;
      padding-top:14px;
      cursor: pointer;
      font-size:14px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(148,152,160,1);
      margin-right:50px;

      &:hover {
        color: #00d95e;
      }
      a:hover {
        color: #409EFF;
      }
    }
    .nav-item {
      margin-left: 12px;
      a:hover {
        color:#fff;
      }
    }
  }
  .flex {
    display: flex;
  }
  .flex-end {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
