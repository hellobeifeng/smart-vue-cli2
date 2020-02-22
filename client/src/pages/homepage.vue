<template>
  <div>
    <div class="head-content">
      <div class="box">
        <div class="text-center head-title">smart-vue-cli2 1.0</div>
        <div class="text-center">
          <span class="goto-link">快速启动工具</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage'
}
</script>
<style lang="stylus" scoped>
.head-content {
  background-size: cover;
  background-position: center;
  margin-bottom: 0;
  background-image: url(../assets/images/banner_index.jpg);
  padding-top:100px;
  height:540px;
}
.head-content .box {
  width:80%;
  height:500px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

}
.text-center {
  text-align: center;
}
.head-title {
  font-size: 42px;
  color:#fff;
  padding-top:60px;
  padding-bottom: 60px;
  font-weight: bold;
  margin-bottom: 10px;
}
.goto-link {
  padding: 12px 30px;
  background-color: #22A7F0;
  border-color: #22A7F0;
  color: #fff;
  border-radius: 0px;
  font-size:18px;
}
</style>
