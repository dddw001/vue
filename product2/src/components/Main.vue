<template>
  <div class="main">
    <div class="left">
        <Products></Products>
        <News></News>
    </div>
    <div class="right">
        <Slide></Slide>
        <Block></Block>
    </div>
  </div>
</template>

<script>
import Products from '../components/Products.vue'
import News from '../components/News.vue'
import Slide from '../components/Slide.vue'
import Block from '../components/Block.vue'
export default {
  components:{Products,News,Slide,Block}
}
</script>

<style>
.main{overflow: auto;}
.left{float: left;width: 320px;margin-right: 10px;}
.right{float: left;width: calc(100% - 360px);margin: 10px;}
</style>
