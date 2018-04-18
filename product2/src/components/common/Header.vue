<template>
  <div class="header">
    <div class="logo">
      <router-link to="/"><img :src="logoUrl"/></router-link>
    </div>
    <div class="menu">
      <a href="#">登陆</a>
      <a href="#">注册</a>
      <a href="#">关于</a>
    </div>
  </div>
</template>
<script>
export default {
  name:'Header',
  data(){
    return{
      logoUrl:require('../../assets/logo.png'),
      indexUrl:'./'
    }
  }
}
</script>
<style>
.header{overflow: hidden;background: #000;}
.logo{width: 40px;height: 40px;float: left;}
.logo img{width: 100%;height: 100%;}
.menu{float: right;padding-right: 20px;}
.menu a{text-decoration: none;color: rgb(150, 150, 150);line-height: 40px;}
.menu a:hover{color: #fff;}
</style>