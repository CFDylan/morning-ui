<template>
    <i-textarea
        :_uiid="uiid"
        :class="[stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :rows="rows"
    >

    <textarea
        :placeholder="placeholder"
        :disabled="conf.state === 'disabled'"
        :rows="conf.rows"

        @focus="_focus()"
        @blur="_blur()"

        v-model="data.value"
    ></textarea>

    </i-textarea>
</template>
 
<script>
import Form                         from 'Common/form';

export default Form.extend({
    name : 'textarea',
    props : {
        rows : {
            type : Number,
            default : 4
        }
    },
    data : function () {

        return {
            conf : {
                rows : this.rows
            },
            data : {}
        };

    },
    computed : {
        placeholder : function () {

            if (!this.conf.hideName) {

                return this.conf.formName;

            }

            return false;

        }
    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return '';

            }

            return String(value);

        },
        _focus : function () {

            this.$emit('focus');

        },
        _blur : function () {

            this.$emit('blur');

        },
        setRows : function (num) {

            let row = this.conf.rows;

            if (typeof num === 'number') {
                
                row = num;

            } else if (typeof num === 'string') {

                if (/^\+/.test(num)) {

                    row += +num.replace(/^\+/, '');

                } else if (/^-/.test(num)) {

                    row -= +num.replace(/^-/, '');

                }

            }

            if (row) {

                if (row < 1) {
                
                    row = 1;
                
                }
                
                this.conf.rows = row;

            }

        }
    },
    created : function () {},
    mounted : function () {}
});
</script>

<style lang="less" src="./index.less"></style>
