<template>
  <div>
    <!--<img v-bind:src="data.imgPath" />-->
    <img v-bind:src="data.imgPath">

    <div class="ttttt">
      <table class="centered">
        <thead>
        <tr>
          <th v-for="(table_header, index) in data.table_headers">{{table_header.name}}</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(table_data, index) in data.table_datas">
          <td>{{table_data.app}}</td>
          <td>{{table_data.os_ver}}</td>
          <td>{{table_data.test_time}}</td>
          <td>{{table_data.devices}}</td>
          <td>{{table_data.package_name}}</td>
          <td>{{table_data.status}}</td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

  var model = {
    data:{
      imgPath:'https://lh3.googleusercontent.com/wAw9vngkibRmloYQz_qM2s0eDUltkCqNgTeMrXIVxhK5kaoXM0VHJmrHoPLeuQMeZB_GaiQulQ=w220-h140-e365',
      table_headers:[{key:'app', name:'App'},{key:'os_ver', name:'OS Ver'}, {key:'test_time', name:"Test Time"}, {key:'devices', name:"Devices"}, {key:'package_name', name:"Package Name"}, {key:'status', name:"Status"}],
      table_datas:[{app:"PangYa",os_ver:"0.5.2",test_time:"2017/12/21 17:44",devices:"3", package_name:"com.linecorp.LGPANGYAM",status:"Processing"}]
    }
  };

  export default {
    name:"AppInfor",
    data(){
      return model;
    }
  }

</script>

<style lang="css">
img{
  width:80px;
  height: 80px;
  float: left;
  margin: 5px;
}

.ttttt{
  width:calc(100% - 130px);
  float: left;
  margin-left: 20px;
}
</style>
