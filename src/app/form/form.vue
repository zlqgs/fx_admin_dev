<template>
    <div class="main-banner">
        <h6><strong>简单输入框</strong></h6>
        <blockquote>
            <strong>
                <h6>输入框样式</h6>
            </strong>
            <div class="banner-box">
                <div class="info-table" style="min-height: 0">
                    <div class="Fx-info-table">
                        <div class="info-tr">
                            <div class="valueName">端输入框</div>
                            <input class="valueBoxEdit" type="text" >
                        </div>
                        <div class="info-tr">
                            <div class="valueName">禁用输入框</div>
                            <input class="valueBoxEdit disabled" type="text" >
                        </div>
                        <div class="info-tr">
                            <div class="valueName">禁用输入框</div>
                            <input class="valueBoxEdit" type="text" disabled>
                        </div>
                    </div>
                </div>
            </div>
            <strong>
                <h6>输入框代码</h6>
            </strong>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="info-table">
                            <div class="Fx-info-table">
                                <div class="info-tr">
                                    <div class="valueName">端输入框</div>
                                    <input class="valueBoxEdit" type="text" >
                                </div>
                                    <div class="info-tr">
                                        <div class="valueName">禁用输入框</div>
                                        <input class="valueBoxEdit disabled" type="text" >
                                    </div>
                                    <div class="info-tr">
                                        <div class="valueName">禁用输入框</div>
                                        <input class="valueBoxEdit" type="text" disabled>
                                    </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <strong>
                <h6>输入框说明</h6>
            </strong>
            <pre>
                <p>
                    .valueName 输入框字段名样式 (form.less)
                    .valueBoxEdit 输入框控件样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                    .disable 禁用样式
                    .info-table 编辑页面背景和最小高度 (form.less)
                </p>
            </pre>
        </blockquote>

        <h6><strong>长输入框</strong></h6>
        <blockquote>
            <h6>长输入框样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="valueName">长输入框</div>
                        <div class="long-input-container">
                            <input class="long-input">
                        </div>
                    </div>
                </div>
            </div>
            <h6>长输入框代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName">长输入框</div>
                                <div class="long-input-container">
                                    <input class="long-input">
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>长输入框说明</h6>
            <pre>
                <p>
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                    .long-input 长输入框样式 (form.less)
                    .long-input-container 满长度容器(自适应父类长度) (form.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>带单位输入框</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="valueName">输入框</div>
                        <div class="input-tag-group">
                            <input class="valueBoxEdit">
                            <div class="input-tag">万</div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName">输入框</div>
                                <div class="input-tag-group">
                                    <input class="valueBoxEdit">
                                    <div class="input-tag">万</div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                    .valueBoxEdit 输入框样式 (form.less)
                    .input-tag-group 带单位输入框容器样式 (form.less)
                    .input-tag 单位文字样式 (form.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>多行输入框名称</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="valueName double">输入框/<br>第二行</div>
                        <div class="input-tag-group">
                            <input class="valueBoxEdit">
                            <div class="input-tag">万</div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName double">输入框/<br>第二行</div>
                                <div class="input-tag-group">
                                    <input class="valueBoxEdit">
                                    <div class="input-tag">万</div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .double 多行输入框文字样式 (form.less)
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                    .valueBoxEdit 输入框样式 (form.less)
                    .input-tag-group 带单位输入框容器样式 (form.less)
                    .input-tag 单位文字样式 (form.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>多行输入框名称</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="valueName double">输入框/<br>第二行</div>
                        <div class="input-tag-group">
                            <input class="valueBoxEdit">
                            <div class="input-tag">万</div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName double">输入框/<br>第二行</div>
                                <div class="input-tag-group">
                                    <input class="valueBoxEdit">
                                    <div class="input-tag">万</div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .double 多行输入框文字样式 (form.less)
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                    .valueBoxEdit 输入框样式 (form.less)
                    .input-tag-group 带单位输入框容器样式 (form.less)
                    .input-tag 单位文字样式 (form.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>多行文本输入框</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="valueName">多行文本</div>
                        <div class="long-input-container">
                            <textarea name='introduction' class="long-input ResumeBox area-lineW"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName">多行文本</div>
                                <div class="long-input-container">
                                    <textarea name='introduction' class="long-input ResumeBox area-lineW"></textarea>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .long-input 多行输入框样式 (form.less)
                    .ResumeBox 多行输入框高度 (form.less)
                    .area-lineW 多行输入框最大长度限制 (form.less)
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>标签输入框</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="valueName">标签输入框</div>
                        <div class="long-input-container">
                            <div class="tagsinput-primary">
                                <input class="tagsinput" data-role="tagsinput" placeholder="输入标签，回车分割" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName">多行文本</div>
                                <div class="long-input-container">
                                    <div class="tagsinput-primary">
                                        <input class="tagsinput" data-role="tagsinput" placeholder="输入标签，回车分割" />
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
                    .long-input-container 满长度容器(自适应父类长度) (form.less)
                    .tagsinput-primary 默认标签输入框样式 (flat-ui.css / common0.less)
                    .tagsinput 标签输入框事件绑定
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)

                    控件绑定
                    $(".tagsinput").tagsinput();
                    限制标签长度
                    $('.tagsinput').tagsinput({
                      maxChars: 8
                    });
                    控件链接:
                    <a href="http://bootstrap-tagsinput.github.io/bootstrap-tagsinput/examples/">Bootstrap Tags Input</a>
                </p>
            </pre>
        </blockquote>
        <h6><strong>select</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="valueName">选择</div>
                        <select class="valueBoxEdit">
                            <option>选项一</option>
                            <option>选项二</option>
                            <option>选项三</option>
                        </select>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName">选择</div>
                                <select class="valueBoxEdit">
                                    <option>选项一</option>
                                    <option>选项二</option>
                                    <option>选项三</option>
                                </select>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .valueName 输入框字段名样式 (form.less)
                    .valueBoxEdit 输入框样式 (form.less)
                    .info-tr 编辑表单行 (form.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>选择标签1</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="long-input-container">
                            <div class="valueName">选择标签</div>
                        </div>
                        <div class="long-input-container house_section">
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section admin-button-white" value="标签一">
                            </div>
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section admin-button-white" value="标签一">
                            </div>
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section admin-button-white" value="标签一">
                            </div>
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section admin-button-white" value="标签一">
                            </div>
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section element_on admin-button-white" value="选中标签">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="long-input-container">
                                    <div class="valueName">选择标签</div>
                                </div>
                                <div class="long-input-container house_section">
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section admin-button-white" value="标签一">
                                    </div>
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section admin-button-white" value="标签一">
                                    </div>
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section admin-button-white" value="标签一">
                                    </div>
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section admin-button-white" value="标签一">
                                    </div>
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section element_on admin-button-white" value="选中标签">
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
                    .element_section 标签定位 (common0.less)
                    .element_on 标签选中样式 (common0.less)
                    .long-input-container 多行输入框样式 (form.less)
                    .house_section 标签父类 (common0.less)
                    .admin-button-white 白色按键 (common0.less)
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>选择标签带扩充</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="long-input-container">
                            <div class="valueName">选择标签</div>
                        </div>
                        <div class="long-input-container house_section">
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section admin-button-white" value="标签一">
                            </div>
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section admin-button-white" value="标签一">
                            </div>
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section admin-button-white" value="标签一">
                            </div>
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section admin-button-white" value="标签一">
                            </div>
                            <div class="desiger-edit-section-block">
                                <input type="button" class="element_section element_on admin-button-white" value="选中标签">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="long-input-container">
                                    <div class="valueName">选择标签</div>
                                </div>
                                <div class="long-input-container house_section">
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section admin-button-white" value="标签一">
                                    </div>
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section admin-button-white" value="标签一">
                                    </div>
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section admin-button-white" value="标签一">
                                    </div>
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section admin-button-white" value="标签一">
                                    </div>
                                    <div class="desiger-edit-section-block">
                                        <input type="button" class="element_section element_on admin-button-white" value="选中标签">
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
                    .element_section 标签定位 (common0.less)
                    .element_on 标签选中样式 (common0.less)
                    .long-input-container 多行输入框样式 (form.less)
                    .house_section 标签父类 (common0.less)
                    .admin-button-white 白色按键 (common0.less)
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>Radio</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="Fx-info-table">
                    <div class="info-tr">
                        <div class="valueName">radio</div>
                        <div class="check-box-group">
                            <label class="radio">
                                <input class="switch-radio" type="radio" data-toggle="radio" data-radiocheck-toggle="radio" name="isReplacable" value="1" >
                            </label>
                            <div class="CheckExplain">是</div>
                            <label class="radio">
                                <input class="switch-radio" type="radio" data-toggle="radio" data-radiocheck-toggle="radio" name="isReplacable" value="0" >
                            </label>
                            <div class="CheckExplain">否</div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName">radio</div>
                                <div class="check-box-group">
                                    <label class="radio">
                                        <input class="switch-radio" type="radio" data-toggle="radio" data-radiocheck-toggle="radio" name="isReplacable" value="1" >
                                    </label>
                                    <div class="CheckExplain">是</div>
                                    <label class="radio">
                                        <input class="switch-radio" type="radio" data-toggle="radio" data-radiocheck-toggle="radio" name="isReplacable" value="0" >
                                    </label>
                                    <div class="CheckExplain">否</div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .check-box-group 多行输入框样式 (form.less)
                    .radio 多行输入框高度 (form.less)
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)

                    控件初始化
                     $('[data-toggle="radio"]').radiocheck();
                </p>
            </pre>
        </blockquote>
        <h6><strong>CheckBox</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="info-table" style="min-height: 0">
                    <div class="Fx-info-table">
                        <div class="info-tr">
                            <div class="valueName">多选</div>
                            <label class="switch-radio checkbox">
                                <input class="switch-radio" type="checkbox" name="type_tags" value="主材" data-toggle="checkbox">
                            </label>
                            <div class="switch-radio-word">主材</div>
                            <label class="switch-radio checkbox">
                                <input class="switch-radio" type="checkbox" name="type_tags" value="辅材" data-toggle="checkbox">
                            </label>
                            <div class="switch-radio-word">辅材</div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName">多选</div>
                                <label class="switch-radio checkbox">
                                    <input class="switch-radio" type="checkbox" name="type_tags" value="主材" data-toggle="checkbox">
                                </label>
                                <div class="switch-radio-word">主材</div>
                                <label class="switch-radio checkbox">
                                    <input class="switch-radio" type="checkbox" name="type_tags" value="辅材" data-toggle="checkbox">
                                </label>
                                <div class="switch-radio-word">辅材</div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .switch-radio 控件左浮动 (form.less)
                    .checkbox 控件样式 (flat-ui.css)
                    .switch-radio-word 选择控件文字样式 (form.less)
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                </p>
            </pre>
        </blockquote>
        <h6><strong>性别选择</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div class="info-table" style="min-height: 0">
                    <div class="Fx-info-table">
                        <div class="info-tr">
                            <div class="valueName">性别</div>
                            <div class="gender" data-value="1">男</div>
                            <div class="gender" data-value="0">女</div>
                            <div class="gender Chose" data-value="2">妖</div>
                        </div>
                        <div class="info-tr">
                            <div class="valueName">
                                业主
                            </div>
                            <input maxlength="9" class="valueBoxEdit">
                            <div class="ChooseGender-box valueBox-gender">
                                <div class="ResInfoCol-ChooseGender  gender Chose" data-value="1">男</div>
                                <div class="ResInfoCol-ChooseGender gender " data-value="0">女</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="Fx-info-table">
                            <div class="info-tr">
                                <div class="valueName">性别</div>
                                <div class="gender" data-value="1">男</div>
                                <div class="gender" data-value="0">女</div>
                                <div class="gender Chose" data-value="2">妖</div>
                            </div>
                            <div class="info-tr">
                                <div class="valueName">
                                    业主
                                </div>
                                <input maxlength="9" class="valueBoxEdit">
                                <div class="ChooseGender-box valueBox-gender">
                                    <div class="ResInfoCol-ChooseGender  gender Chose" data-value="1">男</div>
                                    <div class="ResInfoCol-ChooseGender gender " data-value="0">女</div>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .ResInfoCol-ChooseGender 短性别选择按键样式 (form.less)
                    .gender 性别选择样式 (form.less)
                    .Chose 性别选中样式 (form.less)
                    .valueName 输入框字段名样式 (form.less)
                    .Fx-info-table 编辑容器 (form.less)
                    .info-tr 编辑表单行 (form.less)
                </p>
            </pre>
        </blockquote>
    </div>
</template>
<script>
    export default{
        mounted:function () {
            $(".tagsinput").tagsinput();
            $('[data-toggle="checkbox"]').radiocheck();
            $('[data-toggle="radio"]').radiocheck();
        }
    }
</script>