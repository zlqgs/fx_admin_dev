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
                        child: [
                            {
                                name:'页头样式',
                                child:[]
                            }
                        ]
                    },
                    {
                        name: '页脚',
                        link: '/footer',
                        child: [
                            {
                                name:'页脚样式',
                                child:[]
                            }
                        ]
                    },
                    {
                        name: '菜单',
                        link: '/nav',
                        child: [
                            {
                                name:'菜单样式',
                                child:[]
                            }
                        ]
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
                            },
                            {
                                name:'表格类型',
                                child:[
                                    {
                                        name:'文字内容表格',
                                        href:null
                                    },
                                    {
                                        name:'文字内容表格(多行)',
                                        href:null
                                    },
                                    {
                                        name:'分割行',
                                        href:null
                                    },
                                    {
                                        name:'总计',
                                        href:null
                                    },
                                    {
                                        name:'响应文字',
                                        href:null
                                    },
                                    {
                                        name:'图片&文字',
                                        href:null
                                    },
                                    {
                                        name:'更多信息',
                                        href:null
                                    }
                                ]
                            },
                            {
                                name:'表格按钮',
                                child:[
                                    {
                                        name:'横向按钮',
                                        href:null
                                    },
                                    {
                                        name:'纵向按钮',
                                        href:null
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '表单',
                        link: '/form',
                        child: [
                            {
                                name:'输入框',
                                child:[]
                            },
                            {
                                name:'选择型',
                                child:[]
                            },
                            {
                                name:'文件型',
                                child:[]
                            },
                            {
                                name:'其它',
                                child:[]
                            }
                        ]
                    },
                    {
                        name: '页面布局',
                        link: '/search',
                        child: [
                            {
                                name:'tab分页',
                                child:[]
                            },
                            {
                                name:'右边栏',
                                child:[]
                            }
                        ]
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
        position: fixed;
        height: 100%;
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
        width: 200px;
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
        padding: 40px 40px 40px 344px;
    }
    .active{
        color: #FFFFFF !important;
        background-color: black !important;
        border-left: 4px solid #4ab6da !important;
    }
</style>