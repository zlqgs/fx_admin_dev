import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from './app/menu/Menu.vue'
import head from './app/head/head.vue'
import Footer from './app/footer/footer.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/head', component: head },
    { path: '/footer', component: Footer }
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
require('./assets/css/common0.css');
require('./assets/css/form.css');
require('./assets/css/list.css');
require('./assets/css/flat-ui.css');
