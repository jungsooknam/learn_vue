<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import NavHeader from './components/NavHeader.vue'
  import AppFooter from './components/AppFooter.vue'
  import ConBlog from './components/ConBlog.vue'

  import VueRouter from 'vue-router';

  const router = new VueRouter({
    router:[
      {
        path:'/ConBlog', component:ConBlog
      },

    ]
  })
  export default {
    name: 'app',
    router,
    components:{ NavHeader, AppFooter }
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
</style>
