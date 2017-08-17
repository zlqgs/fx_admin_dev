<template>
    <div class="main-banner">
        <h4>弹窗--Confirm样式</h4>
        <div class="banner-box">
             <div class="modal fade" data-backdrop="static" id="AdminConfirm" tabindex="-3" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="center">
                      <div class="modal-dialog admin-confirm-window">
                           <div class="confirm-word">一枝红杏出墙来</div>
                           <div class="confirm-button">
                                <button id="confirm_sure">确定</button>
                                <button id="confirm_cancel">取消</button>
                           </div>
                      </div>
                  </div>
             </div>
        </div>
        <div class='banner-box'>
           <img :src="confirmImg">
        </div>
        <h6>弹窗--Confirm样式说明</h6>
        <p>
            此弹窗是调用AdminConfirm()方法（详情见common.js）,此弹窗有变种，AdminConfirm("<div style='margin-top: -30px'>确定取消关联?</div><br><div style='color: red'>取消关联会同时取消继承当前类别的子类别的相同属性!</div>",do_sure);
        </p>
        <h4>弹窗--MoreInfoHideTD样式</h4>
        <div class='banner-box'>
            <div class="modal fade" id="More_info" tabindex="-3" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                 <div class="center">
                     <div class="modal-dialog More-info-window">
                         <div class="info-tr" v-for="item in info_list">
                             <div class='head'>{{ item.name }}</div>
                             <div class='value'>{{ item.text }}</div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
        <div class='banner-box'>
            <img :src="moreInfoImg">
        </div>

        <h6>弹窗--MoreInfoHideTD样式说明</h6>
        <p>
            此弹窗主要显示用户的联系方式，它用到了MoreInfoTable.js，.More-info-window, .info-tr, .head, .value（详情见list.less）
        </p>
        <h4>选择设计师--Windows</h4>
        <div class='banner-box'>
            <div class="modal fade" data-backdrop="static" id="AddDesignerWindow" tabindex="-3" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog Accessory_alert_box">
                        <div class="modals-title">选择设计师<div class="modal_close"><i class="iconfont">&#xe60b;</i></div></div>
                        <div class="list-box">
                            <div class="filter">
                                <div class="filter-tr">
                                    <div class="filter-td-mid">
                                        <div class="select-title">设计师等级</div>
                                        <select name='rank_id' class="select-input">
                                                <option value="0">全部</option>
                                                <option value="1">普通设计师</option>
                                                <option value="2">优秀设计师</option>
                                                <option value="3">高级设计师</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <form id="designerForm"  action="" method="post">
                                <div class="list-table" id="AddDesignTable">
                                    <div class="list-tr member-list">
                                        <div class="title td-10"></div>
                                        <div class="title td-15">姓名</div>
                                        <div class="title td-15">职称</div>
                                        <div class="title td-15">手机</div>
                                        <div class="title td-15">擅长风格</div>
                                        <div class="title td-15">注册时间</div>
                                        <div class="title-end td-15">从业工龄</div>
                                    </div>
                                </div>
                                <div class="SubmiBG">
                                    <div class="submit-button-box">
                                        <input class="admin-button sub" type="button" value="确定" id="DesignerAdd">
                                    </div>
                                    <div class="submit-button-box">
                                        <input class="admin-button change modal_global_close" type="button" value="取消" id="DesignerClose">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        <div class='banner-box'>
           <img :src='selectImg'>
        </div>
        <h6>选择设计师--Windows说明</h6>
        <p>
            这种弹窗一般会放在{% block windows %}{% endblock %}中
        </p>
        <h4>选择设计师模态框头部样式</h4>
        <div class='banner-box'>
            <div class="modals-title">选择设计师<div class="modal_close"><i class="iconfont">&#xe60b;</i></div></div>
        </div>
        <h4>选择设计师模态框头部代码</h4>
         <div v-highlight>
             <pre>
                  <code class="xml">
                       <div class="modals-title">选择设计师
                           <div class="modal_close"><i class="iconfont">&#xe60b;</i></div>
                       </div>
                  </code>
             </pre>
         </div>
         <h4>选择设计师模态框表单头部样式</h4>
         <div class='banner-box'>
             <div class="list-table" id="AddDesignTable">
                 <div class="list-tr member-list">
                     <div class="title td-10"></div>
                     <div class="title td-15">姓名</div>
                     <div class="title td-15">职称</div>
                     <div class="title td-15">手机</div>
                     <div class="title td-15">擅长风格</div>
                     <div class="title td-15">注册时间</div>
                     <div class="title-end td-15">从业工龄</div>
                 </div>
             </div>
         </div>
         <h4>选择设计师模态框表单头部样式代码</h4>
         <div v-highlight>
             <pre>
                  <code class="xml">
                       <div class="list-table" id="AddDesignTable">
                           <div class="list-tr member-list">
                               <div class="title td-10"></div>
                               <div class="title td-15">姓名</div>
                               <div class="title td-15">职称</div>
                               <div class="title td-15">手机</div>
                               <div class="title td-15">擅长风格</div>
                               <div class="title td-15">注册时间</div>
                               <div class="title-end td-15">从业工龄</div>
                           </div>
                       </div>
                  </code>
             </pre>
         </div>
        <h4>不能删除提醒模态框</h4>
        <div class='banner-box'>
              <div class="modal fade" data-backdrop="static" id="errWhy" tabindex="-3" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div id="modal_center" class="center">
                          <div class="modal-close-bg" data-dismiss="modal"></div>
                          <div class="modal-dialog Accessory_alert_box delete-view">
                              <div class="modals-title"><span id="title_word">删除</span><div class="modal_close" data-dismiss="modal" ><i class="iconfont">&#xe60b;</i></div></div>
                              <div class="delete-word">当前属性已关联材料分类，不可删除!</div>
                              <div class="errWhy-content" id="catagory_list">
                                  <p class="tags-p title">已关联的材料分类</p>
                                  <p class="tags-p">1,分类1号 /分类2号 /分类3号 </p>
                              </div>
                              <div class="SubmitBtn">
                                  <input class="admin-button modal_global_close" type="button" data-dismiss="modal" value="确定">
                              </div>
                          </div>

                      </div>
                 </div>
        </div>
        <div class='banner-box'>
            <img :src="delImg">
        </div>
        <h6>不能删除提醒模态框说明</h6>
        <p>
           .center(common0.less), .delete-view(form.less), .errWhy-content(form.less)
        </p>
        <h4>不能删除提醒模态框红色文字样式</h4>
        <div class="banner-box">
            <div class="modal-dialog Accessory_alert_box delete-view">
                <div class="delete-word">当前属性已关联材料分类，不可删除!</div>
            </div>
        </div>
        <h4>不能删除提醒模态框红色文字样式代码</h4>
         <div v-highlight>
             <pre>
                  <code class="xml">
                       <div class="modal-dialog Accessory_alert_box delete-view">
                           <div class="delete-word">当前属性已关联材料分类，不可删除!</div>
                       </div>
                  </code>
             </pre>
         </div>
        <h4>不能删除提醒模态框确定按钮样式</h4>
        <div class="banner-box">
            <div class="SubmitBtn">
                <input class="admin-button modal_global_close" type="button" data-dismiss="modal" value="确定">
            </div>
        </div>
        <h4>不能删除提醒模态框确定按钮样式代码</h4>
         <div v-highlight>
             <pre>
                  <code class="xml">
                       <div class="SubmitBtn">
                           <input class="admin-button modal_global_close" type="button" data-dismiss="modal" value="确定">
                       </div>
                  </code>
             </pre>
         </div>
         <h4>选择头像按钮样式</h4>
         <div class="banner-box">
             <div class="SubmiBG">
                 <div class="submit-button-box">
                     <button class="admin-button" id="sure">确定</button>
                 </div>
                 <div class="submit-button-box">
                      <button class="admin-button-white" data-dismiss="modal" aria-hidden="true">取消</button>
                 </div>
             </div>
         </div>
         <h4>选择头像取消按钮代码</h4>
         <div v-highlight>
             <pre>
                  <code class="xml">
                       <div class="SubmiBG">
                       <div class="submit-button-box">
                           <input class="admin-button modal_global_close" type="button" data-dismiss="modal" value="确定">
                       </div>
                       </div>
                  </code>
             </pre>
         </div>
         <h4>只有确定按钮的模态框</h4>
         <div class="banner-box">
              <div class="modal fade" data-backdrop="static" id="AdminAlert" tabindex="-3" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog admin-alert-window">
                      <div class="alert-word">添加失败</div>
                      <div class="alert-button">
                          <button id="alert_sure">确定</button>
                      </div>
                  </div>
              </div>
         </div>

         <h6>只有确定按钮的模态框说明</h6>
            <p>
               .admin-alert-window（详情见common0.less）, .alert-button（详情见common0.less
            </p>

    </div>
</template>
<script>
 import confirmImg from "./img/confirmImg.png";
 import moreInfoImg from "./img/moreInfo.png";
 import selectImg from "./img/select.png";
 import delImg from "./img/del.png";
  export default{
      data(){
          return{
              info_list:[
              {name:'手机号',text:'15678964125'}
              {name:'邮箱', text:'14974128965@qq.com'}
              {name:'QQ',text:'14974128965'}
              ],
              confirmImg:confirmImg,
              moreInfoImg:moreInfoImg,
              selectImg:selectImg,
              delImg:delImg
          }
      }
  }
</script>