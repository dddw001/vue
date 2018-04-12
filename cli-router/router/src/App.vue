<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goBefore">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/params/123/cdx hi">Params</router-link>
    <router-link to="/goHome">Go Home</router-link>
    <router-link to="/goParams/123/I like vue">Go Params</router-link>
    <router-link to="/hi1">Hi1</router-link>
    <router-link to="/cdx">cdx-Hi1</router-link>
    <router-link to="/no">404error</router-link>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goBefore(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }                               
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left{float: left;width: 50%;height: 300px;background-color: aqua;}
.right{float: left;width: 50%;height: 300px;background-color: tomato;}
.fade-enter{opacity: 0;}
.fade-enter-active{transition: opactiy 0.5s;}
.fade-leave{opacity: 1;}
.fade-leave-active{opacity: 0;transition: opacity 0.5s;}
</style>
