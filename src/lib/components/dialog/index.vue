<template>
    <i-dialog
        :_uiid="uiid"
        :class="[styleClass, moreClass]"

        :width="width"
        :height="height"
        :auto-close="autoClose"
        :show-type="showType"

        @click="_onClick"
    >

    <div class="mask"></div>
    <div
        class="content"
        :style="{width: conf.width, height: conf.height}"
    >
        <slot name="header"></slot>
        <div class="body"><slot></slot></div>
        <slot name="footer"></slot>
    </div>
        
    </i-dialog>
</template>
 
<script>
import UI                           from 'Common/ui';
import PopupManager                 from 'Utils/PopupManager';

const rmIndexTimeout = 120;

export default UI.extend({
    name : 'dialog',
    mixins : [PopupManager],
    props : {
        width : {
            type : String,
            default : '50%'
        },
        height : {
            type : String,
            default : '50%'
        },
        autoClose : {
            type : Boolean,
            default : true
        },
        showType : {
            type : String,
            default : 'top'
        }
    },
    data : function () {

        return {
            conf : {
                width : this.width,
                height : this.height,
                autoClose : this.autoClose,
                showType : this.showType
            },
            data : {
                show : false,
                hasHeader : false,
                hasFooter : false
            }
        };

    },
    computed : {
        moreClass : function () {

            return {
                hasHeader : this.data.hasHeader,
                hasFooter : this.data.hasFooter,
                showTop : (this.conf.showType === 'top'),
                showCenter : (this.conf.showType === 'center'),
                showNoAnimate : (this.conf.showType === 'no')
            };

        }
    },
    methods : {
        _onClick : function (evt) {

            let $content = this.$el.querySelector('.content');

            if (this.conf.autoClose &&
                evt.path.indexOf($content) === -1) {

                this.toggle();

            }

        },
        _isShown : function () {

            return (this.$el.classList.value.split(' ').indexOf('show') !== -1);

        },
        toggle : function (show) {

            let isShown = this._isShown();

            if (show === undefined) {

                show = !this.data.show;

            }

            this.data.show = !!show;

            if (this.data.show) {

                if (!isShown) {

                    this._popupShow();

                    setTimeout(() => {

                        this.$el.classList.add('show');

                    });

                }

                this.$emit('show');
                this.$emit('emit');
                
            } else {

                if (isShown) {

                    this.$el.classList.remove('show');

                    setTimeout(() => {

                        this._popupHide();

                    }, rmIndexTimeout);

                }

                this.$emit('hide');
                this.$emit('emit');
            
            }

        }

    },
    mounted : function () {

        if (this.$slots.header) {

            this.data.hasHeader = true;

        }

        if (this.$slots.footer) {

            this.data.hasFooter = true;

        }

    }
});
</script>

<style lang="less" src="./index.less"></style>
