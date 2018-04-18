<template>
    <div class="products">
        <h3>全部产品</h3>
        <h4>PC产品</h4>
        <dl>
            <dt v-for="item in pc">
                <a :href="url">{{item}}</a>
            </dt>
        </dl>
        <hr/>
        <h4>手机应用类</h4>
        <dl>
            <dt v-for="item in phone">
                <a :href="url">{{item}}</a>
            </dt>
        </dl>
    </div>
</template>
<script>
var products=[['数据统计','数据预测','流量分析','广告发布'],['91助手','产品助手','智能地图','团队语音']];
var href="http://www.baidu.com";
export default {
  data(){
      return{
          pc:products[0],
          phone:products[1],
          url:href
      }
  }
}
</script>
<style>
.products{width: 300px;margin: 10px;box-sizing: border-box;background: #fff;}
.products h3{background: #4fc08d;color: #fff;margin-top: 0px;padding: 5px;}
.products h4{padding-left: 5px;}
.products dt{text-indent: 10px;}
.products dt a{text-decoration: none;color: #000;}
.products dt a:hover{color: navy;}
.products hr{width: calc(100% - 3px);height: 0px;border-top: 1px solid #eee;}
</style>
