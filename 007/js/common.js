/**
 * Created by naver on 2017. 12. 11..
 */

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})


var app = new Vue({
    el: '#app',
    data: {
        groceryList:[
            {id:'ed', text:'Vegetables'},
            {id:'ea', text:'Cheese'},
            {id:'da', text:'Whatever else humans are supposed to eat'},
            {id:'asd', text:'ve'}
        ],
        message : 'This is a parent component'
    }
});


console.log("ddd")