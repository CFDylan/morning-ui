<template>
    <i-small
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-small>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'small'
});
</script>

<style lang="less" src="./index.less"></style>
