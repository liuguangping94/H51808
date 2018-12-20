import Home from '@/home'
import About from '@/about'
import User from '@/user'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
    {
      name:'Home',
      path:'/',
      components:{
          default:Home,
          header:{template:`<div>header</div>`},
          footer:{template:`<div>footer</div>`},
      }
    },
    {
    //   name:'About',
      path:'/about',
      component:About,
      children:[
          {
                path:'',
                name:'aboutIndex',
                component:{template:`<div>about us index</div>`}
          },
          {
              path:'tel',
              name:'Tel',
              component:{template:`<div>tel:18782940494</div>`}
          },
          {
            path:'addr/:id',
            name:'Addr',
            props:true,
            component:{template:`<div>addr:马鞍山市</div>`,props:['id']}
        }
      ]
    },
    {
      name:'User',
      path:'/user',
      component:User,
    //   props:true,
      props:{userid:456},
      children:[
          {     
              name:'userWho',
              path:':userid',
              component:{template:`<div>用户{{$route.userid}</div>`}
          }
      ]
    },
    // {
    //     name:'User2',
    //     path:'/user/:useid',
    //     component:User
    // }
    {
        path:'/a',
        // redirect:'/b'
        // alias:'/b',
        alias:['/b','/c','/d/e'],
        component:{template:`<div>aaa</div>`}
    }
  ]
 export default new Router({
    mode:'history',
    routes
  })
