<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 容器 `<ui-box>`
    
    <doc-component-status page="box"></doc-component-status>

    [[[开始]]]

    定义一个容器，`ui-box`常用来作为最外部的容器，容器是块级元素。

    容器默认高度是自适应的。

    #### 使用

    :::democode/html
    <div style="width:400px;height:200px;">
        <ui-box style="background-color:#e0e0e0">
            容器
        </ui-box>
    </div>
    :::

    #### 有边距的容器

    :::democode/html
    <div style="width:400px;height:200px;">
        <ui-box class="margin" style="background-color:#e0e0e0">
            有边距的容器
        </ui-box>
    </div>
    :::

    #### 填满的容器

    填满的容器高度为100%。

    :::democode/html
    <div style="width:400px;height:200px;">
        <ui-box class="fill" style="background-color:#e0e0e0">
            填满的容器
        </ui-box>
    </div>
    
    <br>

    <div style="width:400px;height:200px;">
        <ui-box class="margin fill" style="background-color:#e0e0e0">
            有边距填满的容器
        </ui-box>
    </div>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/box/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'box'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
