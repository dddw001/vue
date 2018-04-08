<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew"/>
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
        <button v-on:click="deleteItem(item)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Store from './store';

export default {
  data(){
    return{
      title:'this is a todo list',
      items:Store.fetch(),
      newItem:''
    }
  },
  watch:{
    items:{
      handler:function(items){
        Store.save(items);
      },
      deep:true
    }
  },
  methods:{
    toggleFinish:function(item){
      item.isFinished=!item.isFinished;
    },
    addNew:function(){
      this.items.push({label:this.newItem,isFinished:false});
      this.newItem='';
    },
    deleteItem:function(item){
      var index=this.items.indexOf(item)
      this.items.splice(index,1);
      Store.save(this.items);
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
.finished{text-decoration: line-through;}
</style>
