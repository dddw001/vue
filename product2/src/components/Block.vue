<template>
  <div class="block">
    <dl>
        <dt v-for="item in list">
            <div class="product-block">
                <div class="pic"><img :src="item.imgSrc"/></div>
                <h3>{{item.title}}</h3>
                <p>{{item.desc}}</p>
                <router-link :to="`/detail/${item.name}`">立即购买</router-link>
            </div>
        </dt>
    </dl>
  </div>
</template>

<script>
var _list=[
    {imgSrc:require('../assets/img/1.png'),title:'开放产品',desc:'开放产品是一款开放产品',name:'sum'},
    {imgSrc:require('../assets/img/2.png'),title:'产品营销',desc:'品牌营销帮助你的产品更好地找到定位',name:'forecast'},
    {imgSrc:require('../assets/img/3.png'),title:'使命必达',desc:'使命必达快速迭代永远保持最前端的速度',name:'analysis'},
    {imgSrc:require('../assets/img/4.png'),title:'勇攀高峰',desc:'帮你勇闯高峰，到达事业的顶峰',name:'publish'}
]
export default {
  data () {
    return {
      list:_list,
      u:'a'
    }
  }
}
</script>

<style>
.block{width: 730px;margin: 10px auto;}
.block dl dt{float: left;}
.block .product-block{width: 360px;background: #fff;padding-top: 1px;padding-bottom: 20px;margin-bottom: 10px;}
.product-block .pic{float: left;margin-right: 10px;margin-top: 20px;}
.product-block a{text-decoration: none;display: inline-block;background: #4fc08d;color: #fff;padding: 6px 20px;}
.product-block p{font-size: 12px;}
.block dl dt:nth-child(odd){margin-right: 10px;}
</style>
