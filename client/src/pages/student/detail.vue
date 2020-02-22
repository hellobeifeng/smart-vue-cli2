<template>
  <div class="detail">
    <el-button type="success" class="goback" icon="el-icon-arrow-left" @click="goback">返回上一页</el-button>
    <p class="heroName">学生个人信息：{{detail.name}} ~ {{detail.sex | sexSexDesc}}</p>
    <p class="heroName">归属教师编号：{{detail.teacher}}</p>
    <p class="heroName">地址：{{detail.address}}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'studentdetail',
  data: function () {
    return {
      title: '学生详情',
      queryId: this.$route.query.id || ''
    }
  },
  filters: {
    sexSexDesc: function (sex) {
      if (sex === '0') {
        return '汉子'
      } else if (sex === '1') {
        return '妹子'
      } else {
        return ''
      }
    }
  },
  computed: {
    ...mapState({
      detail: state => state.st.detail
    })
  },
  methods: {
    ...mapActions([
      'studentDetail'
    ]),
    goback () {
      this.$router.go(-1)
    }
  },
  mounted: function () {
    this.studentDetail({ id: this.queryId }).catch(e => console.log('@@获取详情失败', e))
  }
}
</script>

<style scoped>
.detail{
    width: 80%;
    margin: 50px auto;
}
.imgClass{
    width: 100%;
}
.heroName{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
}
.goback{
    margin-bottom: 30px;
}
</style>
