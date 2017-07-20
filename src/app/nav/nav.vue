<template>
    <div class="main-banner">
        <h4>菜单样式</h4>
        <div class="banner-box">
            <div class="menu-bg">
                <div class="menu-button">测试菜单<span class="iconfont">&#xe60f;</span></div>
                <div class="menulist-box">
                    <a class="menulist"
                       href="javascript:void(0);"
                    >测试菜单
                    </a>
                </div>
            </div>
        </div>
        <h4>菜单结构</h4>
        <div class="banner-box">
            <img :src="structure" alt="">
        </div>
        <h4>菜单代码</h4>
        <div v-highlight>
            <pre>
                <code class="xml">
                    <div class="menu-bg">//菜单背景
                        //菜单组
                        <div class="menu-button">测试菜单<span class="iconfont">&#xe60f;</span></div>//菜单组展开/关闭按键
                        <div class="menulist-box">
                            //菜单链接
                            <a class="menulist"
                               href="javascript:void(0);"
                            >测试菜单
                            </a>
                            //--
                        </div>
                        //--
                    </div>
                </code>
            </pre>
        </div>
        <h4>菜单事件</h4>
        <blockquote>
            <strong>
                <h6>菜单展开/关闭</h6>
            </strong>
            <div v-highlight>
            <pre>
                函数位置：Common.js
                <code class="javascript">
                     $(".menu-button").click(function () {
                        $(this).next('.menulist-box').stop().slideToggle(function () {
                            if(!$(this).is(":hidden")){
                                $(this).prev('.menu-button').find('.iconfont').css({
                                    'transform' : 'rotate(180deg)',
                                    '-ms-transform':'rotate(180deg)',	/* IE 9 */
                                    '-moz-transform' : 'rotate(180deg)', 	/* Firefox */
                                    '-webkit-transform' : 'rotate(180deg)', /* Safari 和 Chrome */
                                    '-o-transform': 'rotate(180deg)'
                                });
                            } else {
                                $(this).prev('.menu-button').find('.iconfont').css({
                                    'transform' : 'rotate(0deg)',
                                    '-ms-transform':'rotate(0deg)',	/* IE 9 */
                                    '-moz-transform' : 'rotate(0deg)', 	/* Firefox */
                                    '-webkit-transform' : 'rotate(0deg)', /* Safari 和 Chrome */
                                    '-o-transform': 'rotate(0deg)'
                                });
                            }
                        }).siblings('.menulist-box').stop().slideUp(function () {
                            $(this).prev('.menu-button').find('.iconfont').css({
                                'transform' : 'rotate(0deg)',
                                '-ms-transform':'rotate(0deg)',	/* IE 9 */
                                '-moz-transform' : 'rotate(0deg)', 	/* Firefox */
                                '-webkit-transform' : 'rotate(0deg)', /* Safari 和 Chrome */
                                '-o-transform': 'rotate(0deg)'
                            });
                        });
                     });
                </code>
            </pre>
            </div>
        </blockquote>
        <blockquote>
            <strong>
                <h6>页面载入展开对应菜单</h6>
            </strong>
            <pre>
                <p>
                    setMenuActive()
                    #参数
                    - {string}windows_url
                    #返回值
                    - {int|[0,1]}pageOn
                    #使用方法
                    传入当前页面路径 windows_url，函数循环判断是否与某一个菜单链接相同，如果与菜单链接都不同则返回0。
                    如果与菜单内链接相同则设置该菜单选中，并返回1。
                </p>
            </pre>
        </blockquote>
    </div>
</template>
<script>
    import structure from "./img/nav_structure .jpg"

    export default{
        data(){
            return{
                structure:structure
            }
        }
    }
</script>
<style>
    .menu-button{
        box-sizing: border-box;
    }
    .menulist-box{
        display: block !important;
    }
</style>