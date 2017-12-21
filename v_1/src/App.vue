<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import VueRouter from 'vue-router'
  import NavHeader from './components/NavHeader.vue'
  import AppFooter from './components/AppFooter.vue'
  import ConBlog from './components/ConBlog.vue'

  const router = new VueRouter({
    routers:[
      {
        path:'/:', component:ConBlog
      },
      {
        path:'/:ConBlog', component:ConBlog
      }
    ]
  })

  export default {
    name: 'app',
    router,
    components:{ NavHeader, AppFooter}
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
