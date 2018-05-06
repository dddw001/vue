<template>
  <div class="address">
    <div class="step">
      <dl>
        <dt class="cur">地址确认</dt>
        <dt>查看订单</dt>
        <dt>支付</dt>
        <dt>订单确认</dt>
      </dl>
    </div>
    <div class="address-content">
      <h3>配送地址</h3>
      <dl>
        <dt v-for="(item,index) in address" @click="select(index)">
          <p>{{item.userName}}</p>
          <p>{{item.streetName}}</p>
          <p>{{item.tel}}</p>
          <i class="iconfont icon-xuanzhong" v-show="index==addressIndex"></i>
        </dt>
        <dt class="add">
          <i class="iconfont icon-tianjia"></i>
          <p>添加新地址</p>
        </dt>
      </dl>
      <div class="more">
        <a href="javascript:void(0)" @click="more">more<i class="icon iconfont" :class="limitNum==3?'icon-xia':'icon-shang'"></i></a>
      </div>
    </div>
    <div class="send-type">
      <h3>配送方式</h3>
      <dl>
        <dt @click="changeType(1)">
          <p>标准配送</p>
          <p class="price">Free</p>
          <i class="iconfont icon-xuanzhong" v-show="standardSend"></i>
        </dt>
        <dt @click="changeType(2)">
          <p>高级配送</p>
          <p class="price">180</p>
          <i class="iconfont icon-xuanzhong" v-show="!standardSend"></i>
        </dt>
      </dl>
    </div>
    <div class="next">
      <input type="button" value="下一步">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      standardSend:true,
      addressList:[],
      limitNum:3,
      addressIndex:0
    }
  },
  mounted(){
    this.$nextTick(()=>{
      axios.get('../../static/data/address.json').then(res=>{
        this.addressList=res.data.result;
      })
    })
  },
  methods:{
    changeType(index){
      if(index==1){
        this.standardSend=true;
      }
      else{
        this.standardSend=false;
      }
    },
    more(){
      if(this.limitNum==3){
        this.limitNum=this.addressList.length;
      }
      else{
        this.limitNum=3;
      }
    },
    select(index){
      this.addressIndex=index;
    }
  },
  computed:{
    address(){
      return this.addressList.slice(0,this.limitNum);
    }
  }
}
</script>

<style>
/*step*/
.address .step{margin-bottom: 40px;}
.address .step dl{display: flex;}
.address .step dl dt{flex: 1;color: #999;border-bottom: 2px solid #ccc;padding-bottom: 10px;position: relative;}
.address .step dl .cur{color: #EE7A23;border-bottom: 2px solid #EE7A23;}
/*小球*/
.address .step dl dt::after{content: '';width: 14px;height: 14px;background: #ccc;border-radius: 50%;position: absolute;top: 100%;left: 50%;margin-top: -7px;margin-left: -7px;}
.address .step dl .cur::after{background: #EE7A23;}
/*标题*/
.address-content h3{position: relative;color: #636363;}
.address-content h3::before,.address-content h3::after{content: '';position: absolute;top: 50%;height: 1px;width: 45%;background: #aaa;}
.address-content h3::before{left: 0;}
.address-content h3::after{right: 0;}
.send-type h3{position: relative;color: #636363;}
.send-type h3::before,.send-type h3::after{content: '';position: absolute;top: 50%;height: 1px;width: 45%;background: #aaa;}
.send-type h3::before{left: 0;}
.send-type h3::after{right: 0;}
/*地址列表*/
.address-content dl{display: flex;flex-wrap: wrap;}
.address-content dl dt{width: 25%;border: 2px solid #eee;cursor: pointer;text-align: left;padding-left: 20px;box-sizing: border-box;margin-bottom: 20px;position: relative;}
.address-content dl dt:hover{border-color: #EE7A23;}
.address-content dl .add{text-align: center;}
.address-content dl .add i{font-size: 60px;display: inline-block;margin-top: 20px;}
/*more*/
.address-content .more a{color: #EE7A23;text-decoration: none;}
/*配送方式*/
.send-type{margin-bottom: 50px;border-bottom: 1px solid #eee;}
.send-type dl dt{width: 30%;border: 2px solid #eee;display: inline-block;cursor: pointer;position: relative;}
.send-type dl dt:hover{border-color: #EE7A23;}
.send-type dl dt .price{font-weight: bold;}
.icon-xuanzhong{position: absolute;bottom: 0;right: 0;color: green;}
/*下一步*/
.next{margin-bottom: 20px;}
.next input{border: none;background: red;color: #fff;padding: 10px 30px;cursor: pointer;}
</style>
