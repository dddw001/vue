import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
    count:1
}
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}
const getters={
    count(){
        return state.count+=100;
    }
}
const actions={
    addAction(context){
        context.commit('add',10);
        setTimeout(()=>{context.commit('reduce')},3000)
        console.log('add');
    },
    reduceAction({commit}){
        commit('reduce');
    }
}
const moduleA={
    state,mutations,getters,actions
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
    //modules:{a:moduleA}
    //模板中需要加.a
    //如 {$store.state.a.count}}
})