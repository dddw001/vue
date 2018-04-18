<template>
  <div class="news">
    <h3>最新消息</h3>
    <dl>
        <dt v-for="item in news">
            <a :href="url">{{item}}</a>
        </dt>
    </dl>
  </div>
</template>

<script>
var _news=['第一条新闻','第二条新闻','第三条新闻','第四条新闻'];
var _href="http://www.baidu.com";
export default {
  data () {
    return {
      news:_news,
      url:_href
    }
  }
}
</script>

<style>
.news{width: 300px;margin: 10px;box-sizing: border-box;background: #fff;padding-bottom: 20px;}
.news h3{background: #4fc08d;color: #fff;margin-top: 0px;padding: 5px;}
.news dt{text-indent: 10px;line-height: 30px;}
.news dt a{text-decoration: none;color: #000;}
.news dt a:hover{color: navy;}
</style>
