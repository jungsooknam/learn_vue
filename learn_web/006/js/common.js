/**
 * Created by naver on 2017. 12. 11..
 */

var app = new Vue({
    el: '#app',

    data : {
        message: '안녕하세요 Vue.js!'
    },
    methods:{
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
})