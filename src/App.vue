<template>
  <div>
    test
  </div>
</template>
<script>
import jsonp from 'jsonp'
/* eslint no-eval:off */
// import axios from 'axios'
export default {
  created(){
    // axios.get('http://music.henshui.com/api/musicList.js?!234')
    //   .then((res) => {
    //     console.log(res.data)
    //     // this.musicList = res.data
    //     // this.musicList = JSON.parse(res.data)
    //     this.musicList = eval(res.data)
    //   })
      // fetch('http://music.henshui.com/api/musicList.js?!234')
      //   .then(res => res.text())
      //   .then(res => {
      //       console.log(res)
      //     })
      jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_opt.fcg?page=index&format=html&tpl=macv4&v8debug=1&jsonCallback=jsonCallback', {
        name:'jsonCallback'
      }, (err, data) => {
        console.log(err)
        console.log(data)
      })
  },
  data() {
    return{
      musicList: []
    }
  }
}
</script>

