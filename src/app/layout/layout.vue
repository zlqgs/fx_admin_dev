<template>
    <div class="main-banner">
        <h6 id="auto_center"><strong>水平活动居中</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="info-table" style="min-height: 0">
                    <div class="long-form-center">
                        <div class="appointment-title">
                            <div class="word">基础信息</div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="info-table" style="min-height: 0">
                            <div class="long-form-center">
                                <div class="appointment-title">
                                    <div class="word">基础信息</div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .info-table 编辑基础页 (form.less)
                    .long-form-center 编辑页活动居中[max-width:1000px,min-height:600px] (form.less)
                </p>
            </pre>
        </blockquote>
        <h6 id="edit_title"><strong>编辑标题</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="info-table" style="min-height: 0">
                    <div class="long-form-center">
                        <div class="appointment-title">
                            <div class="word">编辑标题</div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="info-table" style="min-height: 0">
                            <div class="long-form-center">
                                <div class="appointment-title">
                                    <div class="word">编辑标题</div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .word 编辑标题 (form.less)
                    .appointment-title 编辑标题容器 (form.less)
                    .info-table 编辑基础页 (form.less)
                    .long-form-center 编辑页活动居中 (form.less)
                </p>
            </pre>
        </blockquote>
        <h6 id="tab"><strong>tab分页</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div style="width: 100%">
                    <div class="title-button-container">
                        <div class="TitleButton TitleButtonOn">
                            信息编辑
                        </div>
                        <div class="TitleButton">
                            设计案例
                        </div>
                        <div class="TitleButton">
                            参与项目
                        </div>
                        <div class="TitleButton">
                            重置密码
                        </div>
                    </div>
                    <div class="edit-area">
                        <div class="info-center">
                            <div class="info-table">
                                <div class="long-form-center">
                                    <div class="appointment-title">
                                        <div class="word">基础信息</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="title-button-container">
                            <div class="TitleButton TitleButtonOn">
                                信息编辑
                            </div>
                            <div class="TitleButton">
                                设计案例
                            </div>
                            <div class="TitleButton">
                                参与项目
                            </div>
                            <div class="TitleButton">
                                重置密码
                            </div>
                        </div>
                        <div class="edit-area">
                            <div class="info-center">
                                <div class="info-table">
                                    <div class="long-form-center">
                                        <div class="appointment-title">
                                            <div class="word">基础信息</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .title-button-container tab切换模块容器 (common0.less)
                    .TitleButton tab切换按键样式 (common0.less)
                    .TitleButtonOn tab切换按键激活样式 (common0.less)
                    .edit-area 编辑页面容器 (common0.less)
                </p>
            </pre>
        </blockquote>
        <h6 id="right_bar"><strong>右边栏</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="edit-area">
                    <div class="EditUserInfo">
                        <div class="info-box">
                            <div class="EditTableTitleName">ID</div>
                            <div class="EditTableTitleUserValue">0</div>

                            <div class="EditTableTitleName">注册时间</div>
                            <div class="EditTableTitleUserValue">0</div>

                            <div class="EditTableTitleName">上次登录</div>
                            <div class="EditTableTitleUserValue">0</div>

                            <div class="EditTableTitleName end">用户状态</div>
                            <div class="EditTableTitleUserValue end">0</div>
                        </div>
                        <div class="info-box">
                            <div class="EditTableTitleName">项目总数</div>
                            <div class="EditTableTitleUserValue">0</div>

                            <div class="EditTableTitleName">洽谈项目</div>
                            <div class="EditTableTitleUserValue">0</div>

                            <div class="EditTableTitleName">设计中项目</div>
                            <div class="EditTableTitleUserValue">0</div>

                            <div class="EditTableTitleName ">在建项目</div>
                            <div class="EditTableTitleUserValue">0</div>

                            <div class="EditTableTitleName end">已竣工项目</div>
                            <div class="EditTableTitleUserValue end">0</div>
                        </div>
                        <div class="info-box">
                            <div class="EditTableTitleName">设计总额</div>
                            <div class="EditTableTitleUserValue">0</div>

                            <div class="EditTableTitleName end">个人总收入</div>
                            <div class="EditTableTitleUserValue end">0</div>
                        </div>
                    </div>
                    <div class="info-center">
                        <div class="info-table">
                            <div class="long-form-center">
                                <div class="appointment-title">
                                    <div class="word">基础信息</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="edit-area">
                            <div class="EditUserInfo">
                                <div class="info-box">
                                    <div class="EditTableTitleName">ID</div>
                                    <div class="EditTableTitleUserValue">0</div>

                                    <div class="EditTableTitleName">注册时间</div>
                                    <div class="EditTableTitleUserValue">0</div>

                                    <div class="EditTableTitleName">上次登录</div>
                                    <div class="EditTableTitleUserValue">0</div>

                                    <div class="EditTableTitleName end">用户状态</div>
                                    <div class="EditTableTitleUserValue end">0</div>
                                </div>
                                <div class="info-box">
                                    <div class="EditTableTitleName">项目总数</div>
                                    <div class="EditTableTitleUserValue">0</div>

                                    <div class="EditTableTitleName">洽谈项目</div>
                                    <div class="EditTableTitleUserValue">0</div>

                                    <div class="EditTableTitleName">设计中项目</div>
                                    <div class="EditTableTitleUserValue">0</div>

                                    <div class="EditTableTitleName ">在建项目</div>
                                    <div class="EditTableTitleUserValue">0</div>

                                    <div class="EditTableTitleName end">已竣工项目</div>
                                    <div class="EditTableTitleUserValue end">0</div>
                                </div>
                                <div class="info-box">
                                    <div class="EditTableTitleName">设计总额</div>
                                    <div class="EditTableTitleUserValue">0</div>

                                    <div class="EditTableTitleName end">个人总收入</div>
                                    <div class="EditTableTitleUserValue end">0</div>
                                </div>
                            </div>
                            <div class="info-center">
                                <div class="info-table">
                                    <div class="long-form-center">
                                        <div class="appointment-title">
                                            <div class="word">基础信息</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .EditUserInfo 右边栏容器 (common0.less)
                    .info-box 信息模块 (common0.less)
                    .EditTableTitleName 信息名样式 (common0.less)
                    .EditTableTitleUserValue 信息值样式 (common0.less)
                    .end 信息模块分割样式 (common0.less)
                </p>
            </pre>
        </blockquote>
    </div>
</template>