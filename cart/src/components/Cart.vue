<template>
  <div class="cart">
    <h3 class="title">购物车</h3>
    <div class="cart-wrapper">
      <div class="cart-header">
        <dl class="layout-flex">
          <dt class="goods-info">商品信息</dt>
          <dt>商品金额</dt>
          <dt>商品数量</dt>
          <dt>总金额</dt>
          <dt>编辑</dt>
        </dl>
      </div>
      <div class="cart-body">
        <dl>
          <dt v-for="(item,index) in goodsList" class="goods-item">
            <dl class="layout-flex">
              <dt class="goods-info">
                <input type="checkbox" name="goods" @click="chooseItem(item,index)">
                <img :src="item.productImage" alt="">
                <div class="desc">
                  <p class="name">{{item.productName}}</p>
                  <p class="present">赠品：<span>{{item.parts}}</span></p>
                </div>
              </dt>
              <dt><span>{{item.productPrice|formatMoney}}</span></dt>
              <dt>
                <input type="button" value="-" class="changeNum" @click="changeNum(item,-1)">
                <input type="text" :value="item.productQuantity" class="num">
                <input type="button" value="+" class="changeNum" @click="changeNum(item,1)">
              </dt>
              <dt>{{item.productPrice*item.productQuantity|formatMoney}}</dt>
              <dt><i class="iconfont icon-shanchu delete" @click="deleteGoods(item)"></i></dt>
            </dl>
          </dt>
        </dl>
      </div>
    </div>
    <div class="account">
      <div class="left">
        <input type="checkbox" v-model="chooseAll">
        <span :class="{'active':chooseAll}">全选</span>
        <span :class="{'active':!chooseAll}">取消全选</span>
      </div>
      <div class="right">
        <div class="total">
          <span>total:</span>
          <span>{{totalMoney|formatMoney}}</span>
        </div>
        <input type="button" value="结账" class="btn" @click="account">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      goodsList:[],
      chooseAll:false,
      totalMoney:0
    }
  },
  mounted(){
    this.$nextTick(()=>{
      axios.get('../../static/data/cartData.json').then(res=>{
        //console.log(res.data.result.list);
        this.goodsList=res.data.result.list;
    })
    })
  },
  filters:{
    formatMoney(val){
      return '￥'+val.toFixed(2);
    }
  },
  methods:{
    changeNum(item,count){
      item.productQuantity+=count;
      if(item.productQuantity<1){
        item.productQuantity=1;
      }
      this.calcTotal();
    },
    deleteGoods(item){
      //console.log(this.goodsList.indexOf(item));
      let index=this.goodsList.indexOf(item);
      this.goodsList.splice(index,1);
    },
    chooseItem(item,index){
      var aGoods=document.getElementsByName('goods');
      //console.log(aGoods[index].checked);
      this.$set(item,'check',aGoods[index].checked);
      this.calcTotal();
    },
    calcTotal(){
      this.totalMoney=0;
      this.goodsList.forEach((item)=>{
        if(item.check){
          this.totalMoney+=item.productPrice*item.productQuantity;
        }
      })
    },
    account(){
      this.$router.push('/adress');
    }
  },
  watch:{
    chooseAll(val){
      var aGoods=document.getElementsByName('goods');
      aGoods.forEach((item)=>{
        if(val){
          item.checked=true;
        }
        else{
          item.checked=false;
        }
      })
      this.goodsList.forEach((item)=>{
        this.$set(item,'check',val);
      })
      this.calcTotal();
    }
  }
}
</script>

<style>
/*标题*/
.cart .title{position: relative;color: #aaa;}
.cart .title::before,.cart .title::after{content: '';position: absolute;top: 50%;height: 1px;width: 45%;background: #aaa;}
.cart .title::before{left: 0;}
.cart .title::after{right: 0;}
/*表头*/
.cart .cart-header{background: #999;}
/*弹性盒子布局*/
.cart  .layout-flex{display: flex;align-items: center;}
.cart  .layout-flex dt{flex: 1;padding: 10px 0;font-size: 14px;}
.cart  .layout-flex .goods-info{flex: 3;}
/*商品信息*/
.cart .cart-body .goods-info{text-align: left;margin-left: 10px;}
.cart .cart-body .goods-info img{width: 50px;height: 50px;vertical-align: middle;}
.cart .cart-body .desc{display: inline-block;vertical-align: middle;}
.cart .cart-body .goods-info input{cursor: pointer;margin-right: 10px;}
.cart .cart-body .goods-info .name{font-weight: bold;}
/*商品数量*/
.cart .cart-body .changeNum{border: none;width: 20px;height: 20px;background: #f7f6f6;cursor: pointer;outline: none;}
.cart .cart-body .num{width: 22px;text-align: center;}
/*删除*/
.cart .cart-body .delete{color: red;cursor: pointer;}
/**/
.cart .cart-body .goods-item{border-bottom: 1px solid #eee;}
/*结算*/
.account{margin-bottom: 20px;overflow: hidden;}
.account .left{float: left;margin-left: 10px;}
.account .left input{cursor: pointer;}
.account .left .active{color: red;}
.account .right{float: right;}
.account .right .total{display: inline-block;margin-right: 10px;}
.account .right .btn{border: none;background: red;color: #fff;font-size: 16px;padding: 5px 50px;cursor: pointer;}
</style>
