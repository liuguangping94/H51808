import Vue from 'vue'
import app from './app.vue'
new Vue({
    el:'#app',
    data:{
        msg:123
    },
    // render:h=>h('div','test')
    render:h=>h(app)
})