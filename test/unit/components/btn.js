import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import btn                          from '../../../src/lib/components/btn/index.vue';

test('base : init component', async t => {

    const vm = new Vue(btn).$mount();

    t.plan(3);

    t.is(vm.uiid, 1);
    t.is(btn.options.name, 'btn');
    snapshot(t, vm);

});

test('config : link', async t => {

    const vm = new Vue({
        template : '<ui-btn :link="link">按钮</ui-btn>',
        data : {
            link : 'http://www.google.com'
        },
        components : {
            'ui-btn' : btn
        }
    });

    vm.$mount();

    t.plan(2);

    t.is(vm.$children[0].conf.link, 'http://www.google.com');
    snapshot(t, vm);

});
