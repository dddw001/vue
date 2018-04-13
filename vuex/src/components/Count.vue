<template>
    <div>
        <h2>{{message}}</h2><hr/>
        <h3>{{$store.state.count}}--{{count}}</h3>
        <p>
            <button @click="$store.commit('add',2)">Add</button>
            <button @click="addAction">Add</button>
            <button @click="reduce">Reduce</button>
        </p>
    </div>
</template>
<script>
import store from '../vuex/store'
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
export default{
    data(){
        return{
            message:'Hello vuex'
        }
    },
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // },
    // computed:mapState({
    //     count:state=>state.count
    // }),
    computed:{
        ...mapState(['count']),
        count(){
            return this.$store.getters.count;
        }
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
}
</script>
