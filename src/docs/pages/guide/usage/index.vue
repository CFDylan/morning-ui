<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 使用

    ### 初始化

    在引入Morning UI后需要进行初始化：
    
    ```js
    window.morning.init();
    ```

    你也可以在初始化的时候进行配置，比如：
    
    ```js
    // 将组件的标签前缀改为v，比如`v-btn`
    window.morning.init({
        prefix : 'v'
    });
    ```

    更多初始化配置见：[全局方法/init](/guide/morning.html)。

    ### 使用组件

    初始化Morning UI后，可以在Vue的`template`中使用组件：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}'
    });
    ---
    <div>
        <ui-btn>按钮</ui-btn>  
    </div>
    :::

    ### 添加声明

    声明是大部分组件都支持的一种通用配置，有三种：

    - 尺寸
    - 色彩
    - 状态

    声明的值可以直接写在组件的标签上：

    :::democode/html
    <!-- 使用黑色xl尺寸的按钮 -->
    <ui-btn xl black>按钮</ui-btn>  
    :::

    更多内容见：[声明](/guide/statement.html)。

    ### 添加样式类

    组件支持通过在标签上添加不同的CSS类来设置不同的样式：

    :::democode/html
    <ui-header>
    这是普通标题
    </ui-header>

    <!-- 使用mark类来添加ui-header组件的标记 -->
    <ui-header class="mark">
    这是带标记的标题
    </ui-header>
    :::

    你可以在在组件文档的开始标签中找到这些样式类。
    
    更多内容见：[样式类](/guide/styleclass.html)。

    ### 配置组件

    你可以通过Vue的[Props](https://cn.vuejs.org/v2/guide/components.html#Prop)特性来为组件添加配置。
    
    :::democode/html
    <!-- 配置按钮点击后锁定2s -->
    <ui-btn :locked="2000">点击按钮触发锁定</ui-btn>  
    :::

    交互和表单组件都支持不同的配置，你可以在组件的文档中查询支持的配置。
    
    更多内容见：[配置](/guide/config.html)。

    ### 组件方法

    交互和表单组件都支持方法，你可以通过方法来控制组件：

    :::democode/html
    <!-- 配置按钮点击后锁定2s -->
    <ui-btn ref="demo1">按钮</ui-btn>
    <br><br> 
    <ui-link js="morning.findVM('demo1').lock();">锁定</ui-link>
    <ui-link js="morning.findVM('demo1').unlock();">解锁</ui-link>
    :::

    组件的方法挂载在组件的Vue实例上，你可以通过`morning.findVM()`来找到组件的实例，详见[全局方法/findVM](/guide/morning.html)。

    你可以在组件的文档中找到组件支持的方法。
    
    更多内容见：[方法](/guide/method.html)。

    ### 监听事件

    交互和表单组件支持事件，你可以通过监听事件来响应组件的状态变化：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                alert('组件被点击');
            }
        }
    });
    ---
    <div>
        <ui-btn @emit="echo">点击触发emit事件</ui-btn>
    </div>
    :::

    除了每个组件自身支持的事件外，所有交互和表单组件都支持生命周期事件。你可以在组件的文档中找到组件支持的事件。

    更多内容见：[事件](/guide/event.html)。

    ### 表单组件

    表单组件是所有组件中最为特殊的一类，因为表单组件之间有很多共通点，比如都可以取值/设值、都有默认值等。

    在Morning UI中这些共通点有统一的规范和标准，让你在使用不同的表单组件时有一致的体验，比如：

    :::democode/html
    <div style="width:300px">
        <!-- 下面示例中： -->
        <!-- 组件名都采用`form-name`配置 -->
        <!-- 组件默认值都采用`default-value`配置 -->
        <ui-textinput ref="demo4" form-name="姓名" default-value="Jim"></ui-textinput>
        <ui-switch ref="demo5" form-name="开关" :default-value="true"></ui-switch>

        <!-- 统一使用get方法获取表单值 -->
        <ui-link js="alert(morning.findVM('demo4').get());">获取姓名数值</ui-link>
        <ui-link js="alert(morning.findVM('demo5').get());">获取开关数值</ui-link>
    </div>
    :::

    表单组件还有更多的通用配置、方法、事件，更多内容见：[表单](/guide/form.html)。

    ### 全局方法

    Morning UI在引入之后，会在`window`对象上注册`morning`对象。

    在`morning`对象上有一些有用的属性及方法，方便你对页面中所有的组件进行操作，比如通过组件的`ref`和`findVM()`方法找到组件的Vue实例：

    :::democode/html
    <div>
        <ui-btn ref="demo3">按钮</ui-btn>
        <br><br>
        <ui-link js="console.log(window.morning.findVM('demo3'))">在Console输出按钮的Vue实例</ui-link>
    </div>
    :::
    
    你也可以快速操作一组表单，比如通过`setGroup()`方法来为一组表单赋值：

    :::democode/html
    <div style="width:300px;">
        <ui-textinput group="demo2" form-key="name" form-name="姓名"></ui-textinput>
        <br> 
        <ui-textinput group="demo2" form-key="age" form-name="年龄"></ui-textinput>
        <br> 
        <ui-radio :list="{male:'Male',female:'Female'}" group="demo2" form-key="gender" form-name="性别"></ui-radio>
        <br> 
        <ui-multiinput group="demo2" form-key="tags" form-name="标签"></ui-multiinput>
    </div>
    <br><br>
    <ui-btn js="window.morning.setGroup('demo2', {name:'Jim', age:'17', gender: 'male', tags: ['Happy']});">设置一组表单值</ui-btn>
    :::

    更多内容见：[全局方法](/guide/morning.html)。

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'usage'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
