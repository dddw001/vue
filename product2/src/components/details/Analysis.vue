<template>
  <div class="analysis">
    <div class="part1">
      <h3>流量分析</h3>
      <p class="desc">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      <div class="form">
        <div class="count content">
          <div class="text">购买数量：</div>
          <div>
            <button @click="reduceCount">-</button>
            <input type="text" :value="count" disabled="true">
            <button @click="addCount">+</button>
          </div>
        </div>
        <div class="pro-type content">
          <div class="text">产品类型：</div>
          <div>
            <select>
              <option value="入门版">入门版</option>
              <option value="中级版">中级版</option>
              <option value="高级版">高级版</option>
            </select>
          </div>
        </div>
        <div class="time content">
          <div class="text">媒介：</div>
          <dl class="time-list">
            <dt v-for="item in time" @click="active($event)">{{item}}</dt>
          </dl>
        </div>
        <div class="time content">
          <div class="text">有效时间：</div>
          <div>半年</div>
        </div>
        <div class="price content">
          <div class="text">总价：</div>
          <div>500元</div>
        </div>
        <div class="content">
          <div class="text"></div>
          <div class="buy">立即购买</div>
        </div>
    </div>
  </div>
  <div class="part2">
      <h3>产品说明</h3>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
      <h3>用户行为指标</h3>
      <p>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</p>
      <dl class="user1">
        <dt v-for="item in user1">{{item}}</dt>
      </dl>
      <h3>浏览网站方式</h3>
      <dl class="user2">
        <dt v-for="item in user2">{{item}}</dt>
      </dl>
    </div>
  </div>
</template>

<script>
var time=["半年","一年","三年"];
var user1=["用户在网站的停留时间；","用户来源网站（也叫“引导网站”）；","用户所使用的搜索引擎及其关键词；","在不同时段的用户访问量情况等。"];
var user2=["用户上网设备类型","用户浏览器的名称和版本","访问者电脑分辨率显示模式","用户所使用的操作系统名称和版本","用户所在地理区域分布状况等"];
export default {
  data () {
    return {
      count:1,
      time:time,
      user1:user1,
      user2:user2
    }
  },
  mounted(){
    var oDl=document.getElementsByClassName('time-list')[0];
    var aDt=oDl.getElementsByTagName("dt");
    aDt[0].className="active";

    var oLeft=document.getElementsByClassName("left")[0];
    var aDtLeft=oLeft.getElementsByTagName("dt");
    for(let i=0;i<aDtLeft.length;i++){
      aDtLeft[i].className="";
    }
    aDtLeft[2].className="active";
  },
  methods:{
    active(event){
      var oDl=document.getElementsByClassName('time-list')[0];
      var aDt=oDl.getElementsByTagName("dt");
      for(let i=0;i<aDt.length;i++){
        aDt[i].className="";
      }
      event.currentTarget.className="active";
    },
    reduceCount(){
      this.count--;
    },
    addCount(){
      this.count++;
    }
  }
}
</script>

<style>
.part1,.part2{background: #fff;}
.analysis .part1 h3{text-indent: 10px;margin-top: 0;padding-top: 10px;}
.analysis .desc{background: #f7fcff;color: #999;font-size: 14px;padding: 10px;}
.content div{display: inline-block;}
.time dl{display: inline-block;}
.time dt{display: inline-block;border-radius: 5px;cursor: pointer;margin-right: 5px;padding: 5px 10px;border: 1px solid #eee;}
.time .active{background: #4fc08d;color: #fff;}
.text{width: 100px;}
.form>div{margin-bottom: 10px;text-indent: 5px;}
.form .buy{background: #4fc08d;color: #fff;padding: 5px 10px;margin-bottom: 20px;}
.count button{border: 1px solid #eee;background: none;width: 25px;height: 25px;font-size: 20px;line-height: 25px;cursor: pointer;outline: none;}
.count input{width: 25px;text-align: center;height: 25px;padding: 0;border: 1px solid #eee;box-sizing: border-box;vertical-align: top;background: none;}
.count button:hover{background: #4fc08d;color: #fff;}
.analysis .part2{margin-top: 10px;padding-bottom: 20px;padding-left: 10px;padding-top: 10px;}
.analysis .part2 p{font-size: 14px;text-indent: 2em;}
.analysis .part2 dl dt{text-indent: 2em;}
</style>
