<template>
  <div class="sum">
    <div class="part1">
      <h3>数据统计</h3>
      <p class="desc">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <div class="form">
        <div class="type content">
          <div class="text">产品类型：</div>
          <dl class="type-list">
            <dt v-for="item in type" @click="active($event)">{{item}}</dt>
          </dl>
        </div>
        <div class="where content">
          <div class="text">适用地区：</div>
          <div>
            <select>
              <option value="北京">北京</option>
              <option value="上海">上海</option>
              <option value="广州">广州</option>
              <option value="深圳">深圳</option>
              <option value="杭州">杭州</option>
            </select>
          </div>
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
      <p class="desc">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
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
var type=["红色版","绿色版","紫色版"];
var row1=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
var row2=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
var row3=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
var row4=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
var row5=["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"];
export default {
  data () {
    return {
      type:type,
      selectedItem:0,
      row1:row1,
      row2:row2,
      row3:row3,
      row4:row4,
      row5:row5
    }
  },
  mounted(){
    var oDl=document.getElementsByClassName('type-list')[0];
    var aDt=oDl.getElementsByTagName("dt");
    aDt[0].className="active";

    var oLeft=document.getElementsByClassName("left")[0];
    var aDtLeft=oLeft.getElementsByTagName("dt");
    for(let i=0;i<aDtLeft.length;i++){
      aDtLeft[i].className="";
    }
    aDtLeft[0].className="active";
  },
  methods:{
    active(event){
      var oDl=document.getElementsByClassName('type-list')[0];
      var aDt=oDl.getElementsByTagName("dt");
      for(let i=0;i<aDt.length;i++){
        aDt[i].className="";
      }
      event.currentTarget.className="active";
    }
  }
}
</script>

<style>
.part1,.part2{background: #fff;}
.sum h3{text-indent: 10px;margin-top: 0;padding-top: 10px;}
.sum .desc{background: #f7fcff;color: #999;font-size: 14px;padding: 10px;}
.content div{display: inline-block;}
.type dl{display: inline-block;}
.type dt{display: inline-block;border-radius: 5px;cursor: pointer;margin-right: 5px;padding: 5px 10px 5px 5px;}
.type .active{background: #4fc08d;color: #fff;}
.text{width: 100px;}
.form>div{margin-bottom: 10px;text-indent: 5px;}
.form .buy{background: #4fc08d;color: #fff;padding: 5px 10px;margin-bottom: 20px;}
.part2{margin-top: 10px;padding-bottom: 20px;}
.part2 table{margin: 0 auto;}
.part2 table,tr,td{border-color: #eee;}
.part2 table td{padding: 10px 20px;}
</style>
