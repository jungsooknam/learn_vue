<template>
  <div class ="dod" style="clear: both">
    <p><span class="labelda">Result :</span>
      <span v-for="(result_d, index) in data.Result">
        <input class="with-gap" name="group1" type="radio" v-bind:id=result_d v-model="result" v-bind:value=result_d />
        <label v-bind:for=result_d>{{result_d}}</label>
      </span>

      <span class="right" v-html="result"></span>
    </p>

    <p><span class="labelda">Resolution :</span>
      <span v-for="(result_d, index) in data.Resolution">
        <input class="with-gap" name="group2" type="radio" v-bind:id=result_d v-model="resolution" v-bind:value=result_d />
        <label v-bind:for=result_d>{{result_d}}</label>
      </span>

      <span class="right" v-html="resolution"></span>
    </p>

    <p><span class="labelda">Version :</span>
            <span v-for="(result_d, index) in data.Version">
        <input class="with-gap" name="group3" type="radio" v-bind:id=result_d v-model="version" v-bind:value=result_d />
        <label v-bind:for=result_d>{{result_d}}</label>
      </span>

      <span class="right" v-html="version"></span>
    </p>

    <p><span class="labelda">Brand :</span>
            <span v-for="(result_d, index) in data.Brand">
        <input class="with-gap" name="group4" type="radio" v-bind:id=result_d v-model="brand" v-bind:value=result_d />
        <label v-bind:for=result_d>{{result_d}}</label>
      </span>

      <span class="right" v-html="brand"></span>
    </p>

    <p><span class="labelda">Status :</span>
            <span v-for="(result_d, index) in data.Status">
        <input class="with-gap" name="group4" type="radio" v-bind:id=result_d v-model="status" v-bind:value=result_d />
        <label v-bind:for=result_d>{{result_d}}</label>
      </span>

      <span class="right" v-html="status"></span>
    </p>

    <p><span class="labelda">Status :</span>
      <span v-for="(result_d, index) in data.Bug_Type">
        <input class="with-gap" name="group5" type="radio" v-bind:id=result_d v-model="bug_type" v-bind:value=result_d />
        <label v-bind:for=result_d>{{result_d}}</label>
      </span>

      <span class="right" v-html="bug_type"></span>
    </p>

  </div>
</template>

<script>
  var model = {
    data:{
      Result: ["All", "Fail", "Pass"],
      Resolution: ["All", "1080*1920", "1920*1080"],
      Version: ["All", "5.1.1", "6.0", "7.0"],
      Brand: ["All", "HTC", "HUAWEI", "SHARP"],
      Status: ["All", "Finished", "Progress", "Waiting"],
      Bug_Type: ["All", "Crash", "Install", "Launch", "Run", "Stuck", "Uninstall"]
    },
    result:"",
    resolution:"",
    version:"",
    brand:"",
    status:"",
    bug_type:""
  };

  export default {
    name:"DeviceOpt",
    data(){
      return model;
    }
  }

</script>

<style lang="css">
  .dod{
    border:1px solid black;
    /*padding-left: 20px;*/
    padding-right: 40px;
  }

  .labelda{
    display: inline-block;
    width: 120px;
    text-align: right;
  }


</style>
