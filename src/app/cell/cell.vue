<template>
    <div class="main-banner">
        <h4>表格样式</h4>
        <div class="banner-box">
            <div class="list-table" >
                <div class="list-tr">
                    <div class="title td-7">定额编号</div>
                    <div class="title td-7">定额名称</div>
                    <div class="title td-7">定额类别</div>
                    <div class="title td-5">工程量</div>
                    <div class="title td-5">单位</div>
                    <div class="title td-6">损耗(%)</div>
                    <div class="title double td-21">
                        <div class="title-child border-bottom">单价/成本(元)</div>
                        <div class="title-child col-md-4 border-r">主材</div>
                        <div class="title-child col-md-4">辅材</div>
                        <div class="title-child col-md-4 border-l">人工</div>
                    </div>
                    <div class="title td-9"><div class="title-center">合计(单价/成本)<br><span class="list-cue">不计损耗</span></div></div>
                    <div class="title td-9"><div class="title-center">小计(单价/成本)<br><span class="list-cue">计算损耗</span></div></div>
                    <div class="title td-10">主材</div>
                    <div class="title-end td">操作</div>
                </div>
                <div class="list-tr">
                    <div class="td-7">test</div>
                    <div class="td-7">test</div>
                    <div class="td-7">test</div>
                    <div class="td-5">test</div>
                    <div class="td-5">test</div>
                    <div class="td-6">test</div>
                    <div class="td-7 view-length">test/<span class="num">test</span></div>
                    <div class="td-7 view-length">test/<span class="num">test</span></div>
                    <div class="td-7 view-length">test/<span class="num">test</span></div>
                    <div class="td-9 view-length">test/<span class="num">test</span></div>
                    <div class="td-9 view-length">test/<span class="num">test</span></div>
                    <div class="td-10 view-length">
                        <span class="viewer" data-id="0">
                            test
                        </span>
                    </div>
                    <div class="td">
                        <div class="button-center">
                            <div class="button-tr"><a class="list-button " href="javascript:void(0)">编辑</a></div>
                            <div class="button-tr"><button class="list-button del" data-id="0">删除</button></div>
                            <div class="button-tr"><a class="list-button " href="javascript:void(0)">复制</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h4>表格结构</h4>
        <div class="banner-box">
            <div class="structure-box">
                <img :src="structure" alt="">
            </div>
        </div>
        <h4>表头类型</h4>
        <h6><strong>单一表头</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="title td-7">定额编号</div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="title td-7">定额编号</div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .title 表头样式(list.less)
                    .td-7 7%横向比的表格(list.less)
                </p>
            </pre>
        </blockquote>


        <h6><strong>单一表头(带描述)</strong></h6>
        <blockquote>
            <strong>
                <h6>表格样式</h6>
            </strong>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="title td-9">
                            <div class="title-center">
                                合计(单价/成本)<br>
                                <span class="list-cue">不计损耗</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <strong>
                <h6>表格代码</h6>
            </strong>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="title td-9">
                                    <div class="title-center">
                                        合计(单价/成本)<br>
                                        <span class="list-cue">不计损耗</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <strong>
                <h6>表格说明</h6>
            </strong>
            <pre>
                <p>
                    .title-center 为动态居中样式(list.less)
                    .td-9 为表格通用比例宽度样式(list.less)
                    .list-cue 为描述强调字(如不强调直接去掉该class即可)(list.less)
                </p>
            </pre>
        </blockquote>

        <h6><strong>多层表头</strong></h6>
        <blockquote>
            <h6>表头样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="title double td-21">
                            <div class="title-child border-bottom">单价/成本(元)</div>
                            <div class="title-child col-md-4 border-r">主材</div>
                            <div class="title-child col-md-4">辅材</div>
                            <div class="title-child col-md-4 border-l">人工</div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>表头代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="title double td-21">
                                    <div class="title-child border-bottom">单价/成本(元)</div>
                                    <div class="title-child col-md-4 border-r">主材</div>
                                    <div class="title-child col-md-4">辅材</div>
                                    <div class="title-child col-md-4 border-l">人工</div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表头说明</h6>
            <pre>
                <p>
                    .double 双层表头(list.less)
                    .title-child 双层表头子元素(list.less)
                    .border-bottom 下划线样式(list.less)
                    .border-r 右侧边框(list.less)
                    .border-l 左侧边框(list.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>尾表头</strong></h6>
        <blockquote>
            <h6>表头样式</h6>
            <div class="banner-box">
                <div class="list-table" >
                    <div class="list-tr">
                        <div class="title-end td">操作</div>
                    </div>
                </div>
            </div>
            <h6>表头代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table" >
                            <div class="list-tr">
                                <div class="title-end td">操作</div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表头说明</h6>
            <pre>
                <p>
                    .title-end 尾部表头样式(无右边框)(list.less)
                    .td 自适应表格样式(占据表格剩余宽度)(list.less)
                </p>
            </pre>
        </blockquote>
        <h4>表格类型</h4>
        <h6><strong>文字内容表格</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="td-7">test</div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="td-7">test</div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .list-table 表格类(list.less)
                    .list-tr表格行(list.less)
                    .td-7 7%横向比的表格(list.less)
                </p>
            </pre>
        </blockquote>

        <h6><strong>文字内容表格(多行)</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="td-7">
                            <div class="word-center">
                                long word test
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="td-7">
                                    <div class="word-center">
                                        long word test
                                    </div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .list-table 表格类(list.less)
                    .list-tr表格行(list.less)
                    .td-7 7%横向比的表格(list.less)
                    .word-center 多行文字样式(list.less)
                </p>
            </pre>
        </blockquote>

        <h6><strong>分割行</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="newtd list-head min-padding border-right border-left"><img :src="point_png" alt="">test</div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="newtd list-head min-padding border-right border-left"><img :src="point_png" alt="">test</div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .list-table 表格类(list.less)
                    .list-tr表格行(list.less)
                    .list-head 表格头样式(list.less)
                    .min-padding 左内边距(list.less)
                    .border-right 右边框(list.less)
                    .border-left 左边框(list.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>总计</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="td-55 list-gray total border-left">总计</div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="td-55 list-gray total border-left">总计</div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .list-table 表格类(list.less)
                    .list-tr表格行(list.less)
                    .td-55 55%横向比的表格(list.less)
                    .total 总计样式(list.less)
                    .border-left 左边框(list.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>响应文字</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="td-10"><span class="viewer">hover</span></div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="td-10"><span class="viewer">hover</span></div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .list-table 表格类(list.less)
                    .list-tr表格行(list.less)
                    .td-10 10%横向比的表格(list.less)
                    .viewer 响应文字样式(list.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>图片&文字</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="td-10 height-100">
                            <div class="head-pic">
                                <div class="pic-bg-box">
                                    <img :src="nopic_png" class="head-pic">
                                </div>
                            </div>
                            <div class="name">
                                picture
                            </div>
                        </div>
                        <div class="td-10 height-100">
                            <img :src="unknowhead_jpg" class="head-portrait" alt="">
                            <div class="name">
                                head
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                //普通图片
                                <div class="td-10 height-100">
                                    <div class="head-pic">
                                        <div class="pic-bg-box">
                                            <img :src="nopic_png" class="head-pic">
                                        </div>
                                    </div>
                                    <div class="name">
                                        test
                                    </div>
                                </div>
                                //--
                                //头像图片
                                <div class="td-10 height-100">
                                    <img :src="unknowhead_jpg" class="head-portrait" alt="">
                                    <div class="name">
                                        test
                                    </div>
                                </div>
                                //--
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .list-table 表格类(list.less)
                    .list-tr表格行(list.less)
                    .td-10 10%横向比的表格(list.less)
                    .height-100 100px定高表格(list.less)
                    .head-pic 表格内嵌图片(list.less)
                    .pic-bg-box 图片容器4/3(list.less)
                    .head-pic 图片样式(list.less)
                    .name 表格图片文字说明(list.less)
                    .head-portrait 表格内嵌头像1/1(list.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>更多信息</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="td-10 height-100">
                            <div class="MobelNumber">18888888888</div>
                            <div class="MoreInfo">更多</div>
                        </div>
                        <div class="td-10 height-100">
                            <div class="contact-name">test1</div>
                            <div class="contact-name">test2</div>
                            <div class="MoreInfo" style="margin-top: 0;">更多</div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="td-10 height-100">
                                    <div class="MobelNumber">18888888888</div>
                                    <div class="MoreInfo">更多</div>
                                </div>
                                <div class="td-10 height-100">
                                    <div class="contact-name">test1</div>
                                    <div class="contact-name">test2</div>
                                    <div class="MoreInfo" style="margin-top: 0;">更多</div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .MoreInfo 更多信息按钮样式 (list.css)
                    .contact-name 多行不竖直居中文字样式 (list.css)
                    .MobelNumber 单行电话样式 (list.css)
                    .td-10 10%横向比的表格(list.less)
                    .height-100 100px定高表格(list.less)
                </p>
            </pre>
        </blockquote>
        <h4>表格按钮</h4>
        <h6><strong>横向按钮</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="td-30  height-100">
                            <div class="button-center">
                                <div class="button-tr"><input class="list-button" type="button" value="编辑"></div>
                                <div class="button-tr"><input class="list-button" onclick="" type="button" value="下线"></div>
                                <div class="button-tr"><input onclick="" class="list-button" type="button" value="删除"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="td-30  height-100">
                                    <div class="button-center">
                                        <div class="button-tr"><input class="list-button" type="button" value="编辑"></div>
                                        <div class="button-tr"><input class="list-button" onclick="" type="button" value="下线"></div>
                                        <div class="button-tr"><input onclick="" class="list-button" type="button" value="删除"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .button-center 按键居中样式
                    .button-tr 按键分割容器 33%
                    .list-button 列表中按键样式
                </p>
            </pre>
        </blockquote>
        <h6><strong>纵向按钮</strong></h6>
        <blockquote>
            <h6>表格样式</h6>
            <div class="banner-box">
                <div class="list-table">
                    <div class="list-tr">
                        <div class="td-30  height-100">
                            <div class="button-center-three">
                                <div class="button-tr-vertical"><input class="list-button" type="button" value="编辑"></div>
                                <div class="button-tr-vertical"><input class="list-button" onclick="" type="button" value="下线"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>表格代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="list-table">
                            <div class="list-tr">
                                <div class="td-30  height-100">
                                    <div class="button-center-three">
                                        <div class="button-tr-vertical"><input class="list-button" type="button" value="编辑"></div>
                                        <div class="button-tr-vertical"><input class="list-button" onclick="" type="button" value="下线"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>表格说明</h6>
            <pre>
                <p>
                    .button-center 纵向按键居中样式
                    .button-tr-vertical 按键容器
                    .list-button 列表中按键样式
                </p>
            </pre>
        </blockquote>
    </div>
</template>
<script>
    import structure from "./img/cell_structure.jpg"
    import point_png from "./img/point.png"
    import NOPIC_png from "./img/NOPIC.png"
    import unknowhead_jpg from "./img/UNKnowHead.jpg"

    export default{
        data(){
            return{
                structure: structure,
                point_png: point_png,
                nopic_png: NOPIC_png,
                unknowhead_jpg: unknowhead_jpg
            }
        }
    }
</script>