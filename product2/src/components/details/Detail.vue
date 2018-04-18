<template>
  <div class="detail">
    <div class="left">
        <div class="img" id="change-pic">
            <img :src="whichUrl"/>
        </div>
        <dl class="list">
            <dt v-for="item in list" :class="{active:isActive}">
                <router-link :to="`/detail/${item.name}`" @click="active($event)">{{item.title}}</router-link>
            </dt>
        </dl>
    </div>
    <div class="right">
        <router-view/>
    </div>
  </div>
</template>

<script>
var _list=[
    {imgSrc:require('../../assets/img/1.png'),title:'数据统计',name:'sum'},
    {imgSrc:require('../../assets/img/2.png'),title:'数据预测',name:'forecast'},
    {imgSrc:require('../../assets/img/3.png'),title:'流量分析',name:'analysis'},
    {imgSrc:require('../../assets/img/4.png'),title:'广告发布',name:'publish'}
]
export default {
  data () {
    return {
      list:_list,
      whichUrl:_list[0].imgSrc,
      isActive:false
    }
  },
  methods:{
    active(event){
      var oDl=document.getElementsByClassName('list')[0];
      var aDt=oDl.getElementsByTagName("dt");
      for(let i=0;i<aDt.length;i++){
        aDt[i].className="";
      }
      event.currentTarget.className="active";
    }
  },
  watch:{
      "$route":function(to,from){
        var pic=document.getElementById("change-pic");
        if(to.name=='sum'){
            this.whichUrl=_list[0].imgSrc;
        }
        else if(to.name=='forecast'){
            this.whichUrl=_list[1].imgSrc;
        }
        else if(to.name=='analysis'){
            this.whichUrl=_list[2].imgSrc;
        }
        else{
            this.whichUrl=_list[3].imgSrc;
        }
        //console.log(to);
      }
  },
  mounted(){
    //console.log(this.$route);
    var name=this.$route.name;
    var pic=document.getElementById("change-pic");
        if(name=='sum'){
            this.whichUrl=_list[0].imgSrc;
        }
        else if(name=='forecast'){
            this.whichUrl=_list[1].imgSrc;
        }
        else if(name=='analysis'){
            this.whichUrl=_list[2].imgSrc;
        }
        else{
            this.whichUrl=_list[3].imgSrc;
        }
  }
}
</script>

<style>
.detail{overflow: auto;}
.left{float: left;width: 200px;background: #fff;margin: 10px;padding-bottom: 14px;}
.left .img{text-align: center;margin: 10px 0;}
.left dl dt{text-indent: 10px;padding: 5px 0;}
.left dl dt a{text-decoration: none;color: #000;}
.left dl dt:hover{background: #4fc08d;}
.left dl dt:hover a{color: #fff;}
.left .active{background: #4fc08d;}
.left .active a{color: #fff;}
</style>
