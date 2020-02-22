<template>
<div class="footer">
    <div class="footer-con">
      <ul class="footer-left">
        <li class="nav-item">
          <a class="declaration" href="">
            <i class="iconfont iconchuangzuo"></i>邮件反馈
          </a>
        </li>
        <li class="nav-item">
          <a class="declaration" href="" target="_blank"><span><i class="iconfont iconchuangzuo"></i>Gitlab issue</span></a>
        </li>
        <li class="nav-item">
          <a class="declaration" href="" target="_blank"><span><i class="iconfont iconchuangzuo"></i>用户使用手册</span></a>
        </li>
      </ul>
      <div class="footer-right">
        <span> Power by &nbsp;&nbsp;Alan先生</span>
        <span> © 2020 </span>
      </div>
    </div>
</div>
</template>
<style lang="stylus" scoped>
.footer{
    position: fixed;
    z-index: 1000;
    left: 0;
    bottom: 0;
    margin-top: 30px;
    color: rgba(255, 255, 255, 0.45);
    background: #06080A !important;
    border-top: 1px solid rgba(197, 203, 217, 0.3);
    width: 100%;
    font-size: 12px;
    height: 64px;

  .footer-con{
    padding-left:60px;
    padding-right: 60px;
    margin:0 auto;
    padding-top:24px;
    height:40px;
    .footer-left{
      float:left;
      li{
        list-style:none;
        float:left;
        font-size:14px;
      }
      .declaration{
          line-height: 16px;
          margin: 0 20px;
          text-decoration: none;
          color:rgba(255, 255, 255, 0.45);
      }
      .declaration:hover{color:#fff;}
      .icon-email, .icon-gitlab{
        font-size: 16px;
        vertical-align : top;
        margin-right: 5px;
      }
    }
    .footer-right{
      float:right;
    }
  }
}
</style>
