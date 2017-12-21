<template>
  <header>
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="hide-on-med-and-down">
          <li><router-link to="/ConBlog">BLOG</router-link></li>
          <li><router-link to="/about">ABOUT</router-link></li>
          <li><router-link to="/top10">TOP 10</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="nav-content">
      <h2 class="center-align ">THE SAMPLE PAGE</h2>
      <h5 class="center-align">READ ALL ABOUT IT</h5>
    </div>
  </header>

</template>

<script>
export default {

}
</script>

<style lang="css">

  .nav-wrapper ul li a{
    color: gray;
    font-weight: bold;
    font-size: 20px;
  }

  .nav-wrapper{
    background-color: lightgray;
    text-align: center;
  }

  .nav-wrapper ul{
    margin-left: 42%;
  }

  .nav-content{
    height: 250px;
    background-image: url('../assets/sample02.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100%;
    padding-top: 44px;
  }
</style>
