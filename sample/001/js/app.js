/**
 * Created by naver on 2017. 12. 15..
 */

// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
var Blog = {
        template: `<section>
        <div class="sec-top">
            <span class="sec-top-nav">All Posts</span>
            <span class="login sec-top-nav right">Login/Sign up</span>
            <span class="sec-top-nav right">Search</span>
        </div>
        <router-view></router-view>
        </section>`}

var About = { template: `
    <div id="about-page">
        <h3 class="about-title">ABOUT ME</h3>
        <div class="about-content">
            <div class="about-img">
                <img src="../img/Mercedes-G-Class-1.jpg"/>
            </div>
            <div class="about-text">
                 <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                 <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                 <p>E-Mail: info@mysite.com</p>

            </div>
        </div>
        <div class="float-clear"></div>
    </div>

` }
var Top10 = { template: `
<div id="top-page">
        <h3 class="top-t">TOP 10</h3>
        <div class="top-content">
            <h4> Here is a list of my 10 favorite books from 2023!</h4>
            <div class="top-item">
                <h3 class="top-num">01</h3>
                <p class="top-title">Amber Eyed Leopard</p>
                <p class="top-comment">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>

            <div class="top-item">
                <h3 class="top-num">02</h3>
                <p class="top-title">Amber Eyed Leopard</p>
                <p class="top-comment">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>

            <div class="top-item">
                <h3 class="top-num">03</h3>
                <p class="top-title">Amber Eyed Leopard</p>
                <p class="top-comment">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>

            <div class="top-item">
                <h3 class="top-num">04</h3>
                <p class="top-title">Amber Eyed Leopard</p>
                <p class="top-comment">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>
        </div>
    </div>
`}

var ListItem = {
    template: `
    <div>
    <div class="col s12 m7">
    <div class="card horizontal card-panel hoverable">
    <div class="card-image">
    <img src="../img/1.jpg">
    </div>
    <div class="card-stacked">
    <div class="card-content">
    <span><i class="material-icons right">more_vert</i></span>
    <p>
    <div class="list-item-label user-img">
    <img class="circle responsive-img" src="../img/thumbnail3.png"/>
    </div>
    <div class="list-item-label user-text">
    <span>User Name </span>
<span><i class="tiny material-icons">school</i></span><br/>
    <span>Nov 28 . 2 min</span>
</div>
</p>
<p  class="card-title activator grey-text text-darken-4">8 Must-red books</p>
<p>Creat a blog post subtitle that summarizes you post in few short, punchy sentences and..</p>
</div>
<div class="card-action">740 view Write a coumment
<span><i class="material-icons right fa-bor">favorite_border</i></span>
    </div>
    </div>
    </div>
    </div>

    <div class="col s12 m7">
                            <div class="card horizontal card-panel hoverable">
                                <div class="card-image">
                                    <img src="../img/2017121201.jpg">
                                </div>

                                <div class="card-stacked">
                                    <div class="card-content">

                                        <span><i class="material-icons right">more_vert</i></span>

                                        <p>
                                        <div class="list-item-label user-img">
                                            <img class="circle responsive-img" src="../img/thumbnail1.png"/>
                                        </div>

                                        <div class="list-item-label user-text">
                                            <span>User Name </span>
                                            <span><i class="tiny material-icons">school</i></span><br/>
                                            <span>Nov 28 . 2 min</span>
                                        </div>

                                        </p>
                                        <p  class="card-title activator grey-text text-darken-4">8 Must-red books</p>
                                        <p>Creat a blog post subtitle that summarizes you post in few short, punchy sentences and..</p>

                                    </div>
                                    <div class="card-action">
                                        740 view Write a coumment

                                        <span><i class="material-icons right fa-bor">favorite_border</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="col s12 m7">
                            <div class="card horizontal card-panel hoverable">
                                <div class="card-image">
                                    <img src="../img/Mercedes-G-Class-1.jpg">
                                </div>

                                <div class="card-stacked">
                                    <div class="card-content">

                                        <span><i class="material-icons right">more_vert</i></span>

                                        <p>
                                        <div class="list-item-label user-img">
                                            <img class="circle responsive-img" src="../img/thumbnail2.png"/>
                                        </div>

                                        <div class="list-item-label user-text">
                                            <span>User Name </span>
                                            <span><i class="tiny material-icons">school</i></span><br/>
                                            <span>Nov 28 . 2 min</span>
                                        </div>

                                        </p>
                                        <p  class="card-title activator grey-text text-darken-4">8 Must-red books</p>
                                        <p>Creat a blog post subtitle that summarizes you post in few short, punchy sentences and..</p>

                                    </div>
                                    <div class="card-action">
                                        740 view Write a coumment

                                        <span><i class="material-icons right fa-bor">favorite_border</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>

    <div>
    `
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
var routes = [
    {   path: '/blog',
        component: Blog,
        children: [
            { path: '', component: ListItem }
        ],
        data:{
            message:'abc',
            message2:'aaaaaaaaaaa'

        }
    },
    { path: '/about', component: About,
    },
    { path: '/top10', component: Top10,
    }
]


//var routes = [
//    {
//        path: '/login',
//        component: Login,
//        children: [
//            { path: '', component: LoginForm }
//        ]
//    },
//    {
//        path: '/list',
//        component: List,
//        children: [
//            { path: '', component: ListItems }
//        ]
//    },
//
//    {
//        path: '/main',
//        component: Main,
//        children: [
//            { path: '', component: MainContainer }
//        ]<router-view></router-view>
//    },
//
//    // 할일 #1
//    // `/main` URL 에서 동작할 라우터를 하나 등록하고,
//    // 해당 라우터에서 동작할 Main 컴포넌트와 하위 컴포넌트를 생성하여 등록합니다.
//];


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
    routes
});

var app = new Vue({
    router
}).$mount('#app');


// Now the app has started!
