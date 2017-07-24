<template>
    <div class="body-container">
        <div class="menu-body">
            <div class="menu-first">
                <router-link :to="menu.link" v-for="(menu,index) in menuList">
                    <div class="menu" @click="menu_action(index)" :class="{active:(active==index)}">{{ menu.name }}</div>
                </router-link>
            </div>
            <div class="menu-second">
                <div v-for="item in menuList[active].child" class="menu">{{item.name}}</div>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data () {
            return {
                menuList:[
                    {
                        name: '页头',
                        link: '/head',
                        child: null
                    },
                    {
                        name: '页脚',
                        link: '/footer',
                        child: null
                    },
                    {
                        name: '菜单',
                        link: '/nav',
                        child: null
                    },
                    {
                        name: '表格',
                        link: '/cell',
                        child: [
                            {
                                name:'表格样式',
                                child:[]
                            },
                            {
                                name:'表格结构',
                                child:[]
                            },
                            {
                                name:'表头类型',
                                child:[
                                    {
                                        name:'单一表头',
                                        href:null
                                    },
                                    {
                                        name:'单一表头(带描述)',
                                        href:null
                                    },
                                    {
                                        name:'多层表头',
                                        href:null
                                    },
                                    {
                                        name:'尾表头',
                                        href:null
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '表单',
                        link: '/form',
                        child: null
                    },
                    {
                        name: '搜索栏',
                        link: '/search',
                        child: null
                    },
                    {
                        name: '弹窗',
                        link: '/modal',
                        child: null
                    }
                ],
                msg: 'Welcome to Your Vue.js App',
                active: 0
            }
        },
        methods:{
            menu_action:function (index) {
                this.active = index;
            }
        }
    }

</script>
<style>
    .menu-body{
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
        background-color: #4b4e57;
    }
    .body-container{
        display: flex;
        align-items: stretch;
        width: 100%;
    }
    .menu-body a{
        text-decoration: none;
    }
    .menu-first{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .menu-second{
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #FFF;
        box-shadow: 0 0 5px;
    }
    .menu-first .menu{
        color: #AEB7C2;
        padding: 10px 20px 10px 20px;
        cursor: pointer;
        font-size: 2rem;
        border-left: 4px solid #4b4e57;
        text-decoration: none;
    }
    .menu-second .menu{
        color: #AEB7C2;
        padding: 10px 20px 10px 20px;
        cursor: pointer;
        font-size: 2rem;
        text-decoration: none;
    }
    .menu-first .menu:hover{
        color: #FFFFFF;
    }
    .content{
        display: flex;
        flex-grow: 1;
    }
    .active{
        color: #FFFFFF !important;
        background-color: black !important;
        border-left: 4px solid #4ab6da !important;
    }
</style>