<template>
  <div class="forecast">
    <div class="part1">
      <h3>数据预测</h3>
      <p class="desc">未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
      <div class="form">
        <div class="count content">
          <div class="text">购买数量：</div>
          <div>
            <button @click="reduceCount">-</button>
            <input type="text" :value="count" disabled="true">
            <button @click="addCount">+</button>
          </div>
        </div>
        <div class="media content">
          <div class="text">媒介：</div>
          <dl class="media-list">
            <dt v-for="item in media" @click="active($event)">{{item}}</dt>
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
      <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒…… 以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。 大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。 作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。 关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
    </div>
  </div>
</template>

<script>
var media=["纸质报告","pdf","页面报告","邮件"];
export default {
  data () {
    return {
      media:media,
      count:20
    }
  },
  mounted(){
    var oDl=document.getElementsByClassName('media-list')[0];
    var aDt=oDl.getElementsByTagName("dt");
    aDt[0].className="active";

    var oLeft=document.getElementsByClassName("left")[0];
    var aDtLeft=oLeft.getElementsByTagName("dt");
    for(let i=0;i<aDtLeft.length;i++){
      aDtLeft[i].className="";
    }
    aDtLeft[1].className="active";
  },
  methods:{
    active(event){
      var oDl=document.getElementsByClassName('media-list')[0];
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
  // watch:{
  //     "$route":function(to,from){
  //       var pic=document.getElementById("change-pic");
  //       if(to.name=='sum'){
  //           this.whichUrl=_list[0].imgSrc;
  //       }
  //       else if(to.name=='forecast'){
  //           this.whichUrl=_list[1].imgSrc;
  //       }
  //       else if(to.name=='analysis'){
  //           this.whichUrl=_list[2].imgSrc;
  //       }
  //       else{
  //           this.whichUrl=_list[3].imgSrc;
  //       }
  //       //console.log(to);
  //     }
  // }
}
</script>

<style>
.part1,.part2{background: #fff;}
.forecast .part1 h3{text-indent: 10px;margin-top: 0;padding-top: 10px;}
.forecast .desc{background: #f7fcff;color: #999;font-size: 14px;padding: 10px;}
.content div{display: inline-block;}
.media dl{display: inline-block;}
.media dt{display: inline-block;border-radius: 5px;cursor: pointer;margin-right: 5px;padding: 5px 10px;border: 1px solid #eee;}
.media .active{background: #4fc08d;color: #fff;}
.text{width: 100px;}
.form>div{margin-bottom: 10px;text-indent: 5px;}
.form .buy{background: #4fc08d;color: #fff;padding: 5px 10px;margin-bottom: 20px;}
.count button{border: 1px solid #eee;background: none;width: 25px;height: 25px;font-size: 20px;line-height: 25px;cursor: pointer;outline: none;}
.count input{width: 25px;text-align: center;height: 25px;padding: 0;border: 1px solid #eee;box-sizing: border-box;vertical-align: top;background: none;}
.count button:hover{background: #4fc08d;color: #fff;}
.forecast .part2{margin-top: 10px;padding-bottom: 20px;padding-left: 10px;padding-top: 10px;}
.forecast .part2 p{font-size: 14px;text-indent: 2em;}
</style>
