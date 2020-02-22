<template>
  <div class="menu-tab">
    <el-button-group>
      <el-button @click="gotoPage('HomePage')">
        <span>首页</span>
      </el-button>
      <el-button @click="gotoPage('student-list')" :class="{'isActiveBtn': isActiveBtn('student-list')}">
        <span>学生列表</span>
      </el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  name: 'MenuTab',
  data () {
    return {
    }
  },
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  methods: {
    gotoPage (path) {
      this.$router.push({
        name: path
      })
    },
    isActiveBtn (btnName) {
      let btnNamList = btnName.indexOf('|') !== -1 ? btnName.split('|') : [btnName]
      return btnNamList.indexOf(this.routeName) !== -1
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-button:hover {
  background:rgba(0,217,94,1);
  border:1px solid rgba(88,230,149,1);
  color:#fff;
}
>>> .el-dropdown {
  height: 40px;
  line-height: 40px;
  float: right;
}
.el-button {
  background:#2b3541;
  color:#a2aaba;
  border:1px solid #6c757d;
}
.el-button.is-active {
  background:#00D95E;
  color:#fff;
 }
.el-button-group>.el-dropdown>.el-button {
  border-left-color:#6c757d;
}
.el-dropdown-menu__item {
  color:#a2aaba;
}
.el-dropdown-menu__item:hover {
  background:rgba(0,217,94,1);
  border:1px solid rgba(88,230,149,1);
  color:#fff;
}
.menu-tab {
  position: relative;
  color: #5e6d82;
  height:68px;
  line-height:68px;
}
.el-button-group>.el-button.isActiveBtn{
  background:#00D95E;
  color:#fff;
  border:1px solid rgba(88,230,149,1);
}
.el-button-group>.el-dropdown>.el-button.isActiveBtn {
  background:#00D95E;
  color:#fff;
  border:1px solid rgba(88,230,149,1);
}
</style>
