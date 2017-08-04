import Vue from 'vue';
import VueResource from 'vue-resource';
import container from './container';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store';
import api from './api';

Vue.use(VueResource);
Vue.use(iView);

Vue.config.productionTip = false;

Vue.http.options = {
    // 配置全局http请求路径,配置后,vue.http.get("写相对路径") 如this.$http.get('v1/app/logs')
    root: "",
    credentials: 'include'
};

// 全局变量 Vue.global,组件中 this.global
const global = {
    logged: false
};

// 全局使用
Object.assign(Vue.prototype, {
    global,
    api
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<container/>',
    components: {
        container
    }
});
