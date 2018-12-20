import Vue from 'vue'
import App from './App.vue'
import router from './router'


// import App from './App.jsx'
// import App from './App2.vue'
// import App from './Comp.jsx'
/*
  route:
  routes:
  router:
*/

new Vue({
  el:'#app', 
  router, 
  //render:h=>h('div','test')
  render: h=>h(App)
})