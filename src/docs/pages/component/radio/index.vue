<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 单选框组 `<ui-radio>`
    
    <doc-component-status page="radio"></doc-component-status>
    
    [[[基础]]]

    定义单选框组，单选框组只能单选，若需要多选请使用`ui-checkbox`。

    #### 使用

    ````html
    <div style="width:300px;">
        <ui-radio form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-radio>
    </div>
    ````

    [[[声明]]]

    ````import
    @id:formStatementWithStyle
    @uikey:radio
    @statementDefaultValue:'Tim'
    @statementMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    ````

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|
    ````import
    @id:formConfigTable
    ````
    |accept-html|项目的的名称可以使用HTML|`true`<br>`false`|Boolean|`false`|
    |list|可选项目列表|可选项目列表的对象，键名是key，键值是name用于显示|Object|`{}`|

    ````import
    @id:formConfigDemo
    @uikey:radio
    @configDefaultValue:'Tim'
    @configMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    ````
    
    #### accept-html

    如果让`ui-radio`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。

    ````mixin
    @use:html.demo1,js.demo1
    ````

    ````html
    @var:demo1
    <div style="width:300px;">
        <ui-radio
            form-name="姓名"
            accept-html
            :list="list"
        ></ui-radio>
    </div>
    ````

    ````js
    @var:demo1
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
                list : {
                    Red : '<span style="color:red;">我是红色span</span>',
                    Green : '<span style="color:green;">我是绿色span</span>'
                }
            }
        }
    });
    ````

    #### list

    ````html
    <div style="width:300px;">
        <ui-radio form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-radio>
    </div>
    ````

    [[[方法]]]

    ````import
    @id:formMethod
    @uikey:radio
    @methodValue:'Tim'
    @methodDefaultValue:'Tim'
    @methodMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    ````
    
    #### toggle(key)

    选中单个选项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |key|NO|需要选中选项的键值|键值字符串|`String`|`undefined`|

    ````html
    <div style="width:300px;">
        <ui-radio ref="demo2" form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-radio>
    </div>
    <br>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo2').toggle('Tim');">选中Tim</a>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo2').toggle('Andrew');">选中Andrew</a>
    ````

    [[[事件]]]

    ````import
    @id:formEvent
    @uikey:radio
    @eventValue:'Tim'
    @eventMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    ````

    [[[表单值]]]

    #### 值类型

    此表单返回值类型包含:

    - `String` : 字符串(键值列表`list`中的一项)

    任何其他类型的数值以及未在键值列表(`list`)中的数值，都会被转换成`undefined`。

    #### 值格式

    选中项目的键值，或是未选中(`undefined`)。

    #### 默认值

    `undefined`

    #### 输入/输出示例

    ````html
    @formValueType
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-radio ref="demoType{$valueType}" :list="{Jim:'Jim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-radio>
        </div>
        <br>
        <a href="javascript:;" onclick="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</a>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoType{$valueType}').get())">获取表单JSON值</a>
    </div>
    <br>
    <br>
    ````

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/radio/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'radio'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>