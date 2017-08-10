import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from './app/menu/Menu.vue'
import Form from './app/form/form.vue'
import head from './app/head/head.vue'
import Footer from './app/footer/footer.vue';
import nav from './app/nav/nav.vue';
import cell from './app/cell/cell.vue';
import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css' //样式文件

Vue.use(VueRouter);
Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');

    let tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };

    function replaceTag(tag) {
        return tagsToReplace[tag] || tag;
    }

    function safe_tags_replace(str) {
        return str.replace(/[&<>]/g, replaceTag);
    }
    blocks[0].innerHTML = safe_tags_replace(blocks[0].innerHTML);
    hljs.highlightBlock(blocks[0]);
});

const routes = [
    { path: '/head', component: head },
    { path: '/footer', component: Footer },
    { path: '/nav', component: nav },
    { path: '/cell', component: cell },
    { path: '/form', component: Form }
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
require('./assets/css/bootstrap.min.css');
require('./assets/css/list.css');
require('./assets/css/flat-ui.css');
require('./assets/fonts/iconfont.css');

