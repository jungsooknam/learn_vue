<template>
  <section>
    <div class="sec-top">
      <span class="sec-top-nav">All Posts</span>
      <span class="login sec-top-nav right">Login/Sign up</span>
      <span class="sec-top-nav right">Search</span>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ConBlog',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
