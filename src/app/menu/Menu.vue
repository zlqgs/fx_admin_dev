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
                        link: '/foo',
                        child: [
                            {
                                name:'logo',link:'test'
                            },
                            {
                                name:'顶部导航',link:'test'
                            },
                            {
                                name:'登录信息',link:'test'
                            }
                        ]
                    },
                    {
                        name: '页脚',
                        link: '/bar',
                        child: [
                            {
                                name:'test',link:'test'
                            }
                        ]
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
        background-color: #4b4e57;
    }
    .body-container{
        display: flex;
        align-items: stretch;
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
        font-size: 2em;
        border-left: 4px solid #4b4e57;
        text-decoration: none;
    }
    .menu-second .menu{
        color: #AEB7C2;
        padding: 10px 20px 10px 20px;
        cursor: pointer;
        font-size: 2em;
        text-decoration: none;
    }
    .menu-first .menu:hover{
        color: #FFFFFF;
    }
    .active{
        color: #FFFFFF !important;
        background-color: black !important;
        border-left: 4px solid #4ab6da !important;
    }
    html{
        height: 100%;
        display: flex;
        align-items: stretch;
    }
    body{
        display: flex;
        align-items: stretch;
        margin: 0;
        font-size: 62.5%;
    }
    .content{
        padding: 40px;
    }
</style>