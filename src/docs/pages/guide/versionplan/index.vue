<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 版本计划

    ### 版本规范

    Morning UI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)。

    同时采用以下三种标记标示不同的版本：
    
    |标记|名称|说明|更新<br>频率|生产环境|
    |-|-|-|-|-|
    |<ui-badge class="circle ver-stable" s theme>Stable</ui-badge>|稳定版本|此版本中的各个功能都经过一段时间的测试及使用，非常稳定|month|推荐使用|
    |<ui-badge class="circle ver-beta" s extra-light-black>Beta</ui-badge>|公开测试版本|包含了一些新的特性，并且修复了大部分问题的版本，相对较为稳定|week|可用<br>不推荐|
    |<ui-badge class="circle ver-canary" s>Canary</ui-badge>|金丝雀版本|包含大量新特性的版本，这个版本是实验性的，可能存在较多的问题<br><ui-small><ui-textcolor extra-light-blue>为开发者及早期用户设计的版本</ui-textcolor></ui-small>|~daily|请勿使用|
    
    ### ROAD MAP

    - `0.10.0` : <ui-badge xxs success>DONE</ui-badge>Morning UI的首个版本
    - `0.11.0` : <ui-badge xxs gray>PLAN</ui-badge>支持构建自定义的组件库
    - `1.0.0` : <ui-badge xxs gray>PLAN</ui-badge>组件补全，当Morning UI同步完HMP UI的所有版本之后发布，计划2018年春季发布
    - `1.10.0` : <ui-badge xxs gray>PLAN</ui-badge>着重优化性能，当所有组件完成性能提升后，发布此版本，计划2018年秋季发布

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'versionplan'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
.ver-canary{
    background: #f5ab27 !important;
}
</style>
