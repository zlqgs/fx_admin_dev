<template>
    <div class="main-banner">
        <h6 id="select"><strong>下拉控件</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div>
                    <div class="filter">
                        <div class="filter-tr">
                            <div class="filter-td-small">
                                <div class="select-title">品牌</div>
                                <select class="select-input" name="brand_name">
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="filter">
                            <div class="filter-tr">
                                <div class="filter-td-small">
                                    <div class="select-title">品牌</div>
                                    <select class="select-input" name="brand_name">
                                        <option value="">全部</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .filter 搜索栏容器 (list.less)
                    .filter-tr 搜索行 (list.less)
                    .filter-td-small 搜索布局单元 (list.less)
                    .select-input 通用选择控件 (list.less)
                </p>
            </pre>
        </blockquote>
        <h6 id="search_group"><strong>搜索组</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div>
                    <div class="filter">
                        <div class="filter-tr">
                            <div class="filter-td-big">
                                <input class="select-input" placeholder=" 请输入..." name="searchinfo">
                                <div class="split"></div>
                                <select name="searchcondition" class="select-input">
                                    <option>全部</option>
                                </select>
                                <input type="hidden" name="base_category">
                                <input class="admin-button search" type="submit" value="搜索">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                         <div class="filter-td-big">
                             <input class="select-input" placeholder=" 请输入..." name="searchinfo">
                             <div class="split"></div>
                             <select name="searchcondition" class="select-input">
                                 <option>全部</option>
                             </select>
                             <input type="hidden" name="base_category">
                             <input class="admin-button search" type="submit" value="搜索">
                         </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .search 搜索按键定位 (list.less)
                    .split 控件关联样式 (list.less)
                    .filter 搜索栏容器 (list.less)
                    .filter-tr 搜索行 (list.less)
                    .filter-td-small 搜索布局单元 (list.less)
                    .filter-td-big 搜索布局单元 (list.less)
                    .select-input 通用选择控件 (list.less)
                </p>
            </pre>
        </blockquote>
        <h6 id="multi_select"><strong>联动下拉控件</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div>
                    <div class="filter">
                        <div class="filter-tr">
                            <div class="filter-td-mid">
                                <div class="select-title">商品类型</div>
                                <select name="Level1" class="select-input ProListSelect">
                                    <option value="0">一级类</option>
                                </select>
                                <div class="split"></div>
                                <select name="Level2" class="select-input ProListSelect">
                                    <option value="0">二级类</option>
                                </select>
                                <div class="split"></div>
                                <select name="Level3" class="select-input ProListSelect">
                                    <option value="0">三级类</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="filter">
                            <div class="filter-tr">
                                <div class="filter-td-mid">
                                    <div class="select-title">商品类型</div>
                                    <select name="Level1" class="select-input ProListSelect">
                                        <option value="0">一级类</option>
                                    </select>
                                    <div class="split"></div>
                                    <select name="Level2" class="select-input ProListSelect">
                                        <option value="0">二级类</option>
                                    </select>
                                    <div class="split"></div>
                                    <select name="Level3" class="select-input ProListSelect">
                                        <option value="0">三级类</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .filter 搜索栏容器 (list.less)
                    .split 控件关联样式 (list.less)
                    .filter-tr 搜索行 (list.less)
                    .filter-td-small 搜索布局单元 (list.less)
                    .select-input 通用选择控件 (list.less)
                </p>
            </pre>
        </blockquote>
        <h6 id="find"><strong>搜索信息栏</strong></h6>
        <blockquote>
            <h6>样式</h6>
            <div class="banner-box">
                <div>
                    <div class="filter">
                        <div class="filter-tr">
                            <div class="filter-td-mid">
                                <div class="select-title">商品类型</div>
                                <select name="Level1" class="select-input ProListSelect">
                                    <option value="0">一级类</option>
                                </select>
                                <div class="split"></div>
                                <select name="Level2" class="select-input ProListSelect">
                                    <option value="0">二级类</option>
                                </select>
                                <div class="split"></div>
                                <select name="Level3" class="select-input ProListSelect">
                                    <option value="0">三级类</option>
                                </select>
                            </div>
                            <div class="filter-td-small">
                                <div class="select-title">品牌</div>
                                <select class="select-input ProListSelect" name="brand_name">
                                    <option value="">全部</option>
                                </select>
                            </div>
                            <div class="filter-td-small">
                                <div class="select-title left">商品档次</div>
                                <select class="select-input ProListSelect" name="rank_id">
                                    <option value="">全部</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="search-banner">
                        <div class="search-num">搜索到<span>0</span>条匹配结果</div>
                        <button class="admin-button add" >批量编辑</button>
                    </div>
                </div>
            </div>
            <h6>代码</h6>
            <div v-highlight>
                <pre>
                    <code>
                        <div class="search-banner">
                            <div class="search-num">搜索到<span>0</span>条匹配结果</div>
                            <button class="admin-button add" >批量编辑</button>
                        </div>
                    </code>
                </pre>
            </div>
            <h6>说明</h6>
            <pre>
                <p>
                    .search-banner 搜索信息容器 (list.less)
                    .search-num 搜索结果数量 (list.less)
                    .add 搜索信息模块按键 (list.less)
                    .admin-button 通用按键 (common0.less)
                </p>
            </pre>
        </blockquote>
    </div>
</template>