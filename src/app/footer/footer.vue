<template>
    <div class="main-banner">
        <h4>页脚样式</h4>
        <div class="banner-box">
            <div class="page-footer">
                <div class="footer-word">
                    <span class="footer-icon">©</span>
                    <span class="footer-cell">上海风箱网络科技有限公司 版权所有 | <a href="http://www.miitbeian.gov.cn/">沪ICP备16054597号</a></span>
                </div>
            </div>
        </div>
        <h4>页脚结构</h4>
        <div class="banner-box">
            <div class="structure-box">
                <img :src="structure" alt="">
            </div>
        </div>
        <h4>页脚代码</h4>
        <div v-highlight>
            <pre>
                <code class="xml">
                    <div class="banner-box">
                        <div class="page-footer">
                            <div class="footer-word">
                                <span class="footer-icon">©</span>
                                <span class="footer-cell">上海风箱网络科技有限公司 版权所有 | <a href="http://www.miitbeian.gov.cn/">沪ICP备16054597号</a></span>
                            </div>
                        </div>
                    </div>
                </code>
            </pre>
        </div>
    </div>
</template>
<script>
    import structure from "./img/footer_structure.jpg"

    export default{
        data(){
            return{
                structure:structure
            }
        }
    }
</script>