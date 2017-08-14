<template>
    <div class="body-container">
        <div class="menu-body">
            <div class="menu-first">
                <router-link :to="menu.link" v-for="(menu,index) in menuList">
                    <div class="menu" @click="menu_action(index)" :class="{active:(active==index)}">{{ menu.name }}</div>
                </router-link>
            </div>
            <div class="menu-second" data-spy="affix">
                <template v-for="item in menuList[active].child">
                    <div class="menu">{{item.name}}</div>
                    <div class="menu-a" v-for="a in item.child" @click="turn_to(a.href)">{{a.name}}</div>
                </template>
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
                                        href:'#single_head'
                                    },
                                    {
                                        name:'单一表头(带描述)',
                                        href:'#single_head_des'
                                    },
                                    {
                                        name:'多层表头',
                                        href:'#multi_head'
                                    },
                                    {
                                        name:'尾表头',
                                        href:'#end_head'
                                    }
                                ]
                            },
                            {
                                name:'表格类型',
                                child:[
                                    {
                                        name:'文字内容表格',
                                        href:'#word_cell'
                                    },
                                    {
                                        name:'文字内容表格(多行)',
                                        href:'#multi_word_cell'
                                    },
                                    {
                                        name:'分割行',
                                        href:'#clip_line'
                                    },
                                    {
                                        name:'总计',
                                        href:'#total'
                                    },
                                    {
                                        name:'响应文字',
                                        href:'#active_word'
                                    },
                                    {
                                        name:'图片&文字',
                                        href:'#word_pic'
                                    },
                                    {
                                        name:'更多信息',
                                        href:'#more_info'
                                    }
                                ]
                            },
                            {
                                name:'表格按钮',
                                child:[
                                    {
                                        name:'横向按钮',
                                        href:"#button_inline"
                                    },
                                    {
                                        name:'纵向按钮',
                                        href:'#button_upright'
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
                                child:[
                                    {
                                        name:'简单输入框',
                                        href:"#input"
                                    },
                                    {
                                        name:'长输入框',
                                        href:"#input_long"
                                    },
                                    {
                                        name:'带单位输入框',
                                        href:"#input_g"
                                    },
                                    {
                                        name:'多行输入框名称',
                                        href:"#value_name_double"
                                    },
                                    {
                                        name:'多行文本输入框',
                                        href:"#textarea"
                                    },
                                    {
                                        name:'标签输入框',
                                        href:"#tags_input"
                                    }
                                ]
                            },
                            {
                                name:'选择型',
                                child:[
                                    {
                                        name:'select',
                                        href:"#select"
                                    },
                                    {
                                        name:'选择标签1',
                                        href:"#choice_tag"
                                    },
                                    {
                                        name:'选择标签带扩充',
                                        href:"#choice_extend"
                                    },
                                    {
                                        name:'Radio',
                                        href:"#radio"
                                    },
                                    {
                                        name:'CheckBox',
                                        href:"#check_box"
                                    },
                                    {
                                        name:'性别选择',
                                        href:"#gender"
                                    }
                                ]
                            },
                            {
                                name:'文件型',
                                child:[
                                    {
                                        name:'头像',
                                        href:"#head_pic"
                                    },
                                    {
                                        name:'单图',
                                        href:"#pic_single"
                                    },
                                    {
                                        name:'多图',
                                        href:"#pic_multi"
                                    },
                                    {
                                        name:'单附件',
                                        href:"#file_single"
                                    },
                                    {
                                        name:'多附件',
                                        href:"#file_multi"
                                    }
                                ]
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
            },
            turn_to:function (href) {
                $("html,body").animate({scrollTop:$(href).offset().top},300);
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
        height: 100%;
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
    .menu-a{
        display: block;
        font-size: 1.4rem;
        padding-left: 40px;
        padding-top: 5px;
        padding-bottom: 5px;
        cursor: pointer;
    }
    .menu-active{
        color: #4ab6da;
    }
    .active{
        color: #FFFFFF !important;
        background-color: black !important;
        border-left: 4px solid #4ab6da !important;
    }
</style>