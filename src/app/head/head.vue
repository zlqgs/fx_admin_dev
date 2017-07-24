<template>
    <div class="main-banner">
        <h4>页头样式</h4>
        <div style="overflow: hidden">
            <div class="filter-container">
                <div class="logo-container">
                    <a href="javascript:void(0);">
                        <img class="logo" :src="logo_url"/>
                        <div class="logo-words">
                            <div class="logo-title">风箱网</div>
                            <div class="logo-word">后台管理系统</div>
                        </div>
                    </a>
                </div>
                <div class="menu-link"><a class="head-a" href="javascript:void(0);">测试链接</a><span class="split"></span><span>测试标题</span></div>
                <div class="login-info">
                    <div class="user-name">
                        测试用户
                    </div>
                    <span class="split"></span>
                    <a class="logout" href="javascript:void(0);">退出</a>
                </div>
            </div>
        </div>
        <h4>页头结构</h4>
        <div class="banner-box">
            <div class="structure-box">
                <img :src="structure_url" alt="">
            </div>
        </div>

        <h4>页头代码</h4>
        <div v-highlight>
            <pre>
                <code class="xml">
                     <div class="filter-container">
                         //logo模块
                         <div class="logo-container">
                             <a href="javascript:void(0);">
                                 <img class="logo" :src="logo_url"/>
                                 <div class="logo-words">
                                     <div class="logo-title">风箱网</div>
                                     <div class="logo-word">后台管理系统</div>
                                 </div>
                             </a>
                         </div>
                         //--
                         //链接菜单
                         <div class="menu-link"><a class="head-a" href="javascript:void(0);">测试链接</a><span class="split"></span><span>测试标题</span></div>
                         //--
                         //登录信息
                         <div class="login-info">
                             <div class="user-name">
                                 测试用户
                             </div>
                             <span class="split"></span>
                             <a class="logout" href="javascript:void(0);">退出</a>
                         </div>
                         //--
                    </div>
                </code>
            </pre>
        </div>
    </div>

</template>
<script>
    import logo from "./img/filter_logo.png"
    import structure from "./img/structure.jpg"

    export default{
        data(){
            return{
                logo_url:logo,
                structure_url:structure
            }
        }
    }
</script>