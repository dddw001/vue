<template>
  <div class="slide" id="slide">
      <ul>
        <li v-for="item in src">
          <a :href="item.aHref"><img :src="item.imgSrc" /></a>
        </li>
      </ul>
      <div class="btn left">&lt;</div>
      <div class="btn right">&gt;</div>
  </div>
</template>

<script>
var _src = [
  { imgSrc: require("../assets/img/big1.jpg"), aHref: "http://www.baidu.com" },
  { imgSrc: require("../assets/img/big2.jpg"), aHref: "http://www.baidu.com" },
  { imgSrc: require("../assets/img/big3.jpg"), aHref: "http://www.baidu.com" },
  { imgSrc: require("../assets/img/big4.jpg"), aHref: "http://www.baidu.com" }
];
export default {
  data() {
    return {
      src: _src
    };
  },
  mounted() {
    var oSlide = document.getElementById("slide");
    var oUl = oSlide.getElementsByTagName("ul")[0];
    var aLi = oUl.getElementsByTagName("li");
    var oLeft=oSlide.getElementsByClassName('left')[0];
    var oRight=oSlide.getElementsByClassName('right')[0];
    var str=oUl.innerHTML+oUl.innerHTML;
    oUl.innerHTML=str;
    var length = aLi.length;
    oUl.style.width=aLi[0].offsetWidth*length+'px';
    var curIndex = 1;
    var flag_left=true;
    
    function move(offset) {
      var l=parseInt(oUl.offsetLeft)+offset;
      if(flag_left){
        if(l<=-oUl.offsetWidth/2){
          l=0;
        }
      }
      else{
        if(l>=0){
          //oUl.style.left=(oUl.offsetLeft-oUl.offsetWidth/2)+'px';
          l-=oUl.offsetWidth/2;        
        }
      }
      oUl.style.left=l+'px';
    }
    oLeft.onclick=function(){
      flag_left=true;
      move(-730);
    }
    oRight.onclick=function(){
      flag_left=false;
      move(730);
    }
    // setInterval(function(){
    //     move(-100);
    // },1000);
  }
};
</script>

<style>
.slide {
  width: 730px;
  height: 300px;
  overflow: hidden;
  margin: 10px auto;
  position: relative;
}
.slide ul {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 2920px;
  height: 100%;
}
.slide li {
  float: left;
  list-style: none;
  width: 730px;
  height: 300px;
}
.slide li img {
  width: 100%;
  height: 100%;
}
.slide .btn{width: 40px;height: 40px;position: absolute;top: 50%;margin-top: -20px;background: #000;opacity: 0.4;border-radius: 50%;line-height: 40px;text-align: center;color: #fff;font-size: 40px;cursor: pointer;}
.slide .right{right: 0;}
</style>
