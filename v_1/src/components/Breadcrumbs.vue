<template>
  <nav>
    <div id="bc1" class="nav-wrapper">
      <div  class="col s12">
        <a href="#!" class="breadcrumb">{{data[0]}}</a>
        <a href="#!" class="breadcrumb">{{data[1]}}</a>
        <a href="#!" class="breadcrumb">{{data[2]}}</a>
      </div>
    </div>
  </nav>
</template>

<script>

  var model = {
    data:["First", 'Second', "Third"]
  };

  export default {
    name :"Breadcrumbs",
    data(){
      return model
    }
  }

</script>

<style lang="css">

</style>
