import Vue from 'vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import AppInfor from './components/AppInfor.vue'
import DeviceOpt from './components/DeviceOpt.vue'
import DeviceList from './components/DeviceList.vue'


window.nts = {};
nts.quaty = nts.quaty || {};
nts.quaty.components = (function(id, obj) {
  let dd = obj.component;
  let component = null;
  if(dd == 'Breadcrumbs') {

    component = new Vue({
      el: '#'+id,
      render : h => h(Breadcrumbs)
    })
    component.$children['0'].data = obj.data;
    return component.$children['0'];

  }else if(dd == 'AppInfor'){

    component = new Vue({
      el: '#'+id,
      render : h => h(AppInfor)
    })
    component.$children['0'].data = obj.data;
    return component.$children['0'];

  }else if(dd == 'DeviceOpt'){

    component = new Vue({
      el: '#'+id,
      render : h => h(DeviceOpt)
    })
    component.$children['0'].data = obj.data;
    return component.$children['0'];
  }else if(dd == 'DeviceList'){

    component = new Vue({
      el: '#'+id,
      render : h => h(DeviceList)
    })
    return component.$children['0'];
  }


})
