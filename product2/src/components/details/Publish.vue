<template>
  <div class="publish">
    <div class="part1">
      <h3>广告发布</h3>
      <p class="desc">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
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
          <div class="text">行业：</div>
          <div>
            <select>
              <option value="出版业">出版业</option>
              <option value="媒体">媒体</option>
              <option value="互联网">互联网</option>
            </select>
          </div>
        </div>
        <div class="time content">
          <div class="text">产品版本：</div>
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
      <table border="1" cellspacing="0">
        <tr><td v-for="item in row1">{{item}}</td></tr>
        <tr><td v-for="item in row1">{{item}}</td></tr>
        <tr><td v-for="item in row1">{{item}}</td></tr>
        <tr><td v-for="item in row1">{{item}}</td></tr>
        <tr><td v-for="item in row1">{{item}}</td></tr>
      </table>
    </div>
  </div>
</template>

<script>
var time=["初级版","中级版","高级版"];
var row1=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
var row2=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
var row3=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
var row4=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
var row5=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
export default {
  data () {
    return {
      count:1,
      time:time,
      row1:row1,
      row2:row2,
      row3:row3,
      row4:row4,
      row5:row5
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
    aDtLeft[3].className="active";
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
.publish .part1 h3{text-indent: 10px;margin-top: 0;padding-top: 10px;}
.publish .desc{background: #f7fcff;color: #999;font-size: 14px;padding: 10px;}
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
.publish .part2{margin-top: 10px;padding-bottom: 20px;padding-left: 10px;padding-top: 10px;}
.publish .part2 p{font-size: 14px;text-indent: 2em;}
.part2 table{margin: 0 auto;}
.part2 table,tr,td{border-color: #eee;}
.part2 table td{padding: 10px 20px;}
</style>
