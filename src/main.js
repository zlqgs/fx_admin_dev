import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from './app/menu/Menu.vue'

Vue.use(VueRouter);

const Foo = { template: '<div class="test">foo</div>' };
const Bar = { template: '<div>bar</div>' };
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

new Vue({
    el: '#menu',
    router,
    render: h => h(Menu)
});

require('./assets/main.css');
