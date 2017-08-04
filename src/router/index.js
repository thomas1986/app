import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

import Login from '@/views/login';

// 按需加载
const Index = resolve => require(['@/views/index'], resolve)
const NotFound = resolve => require(['@/views/404'], resolve)

// main分组
const Main = r => require.ensure([], () => r(require('@/views/main')), 'group-main');
const User = r => require.ensure([], () => r(require('@/views/main/user')), 'group-main');

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/main',
        name: 'main',
        component: Main,
        meta: {
            // 是否需要登录才能查看页面
            requiresAuth: true
        },
        children: [{
            path: '',
            redirect: "user"
        }, {
            path: 'user',
            name: 'user',
            alias: "/user",
            component: User
        }]
    }, {
        path: '*',
        name: '404',
        component: NotFound
    }]
});

// 路由开始前执行
router.beforeEach((to, from, next) => {
    var path = to.path;
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!router.app.global.logged && path !== '/login') {
        // if (!store.getters.logged && path !== '/login') {
            return next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    }
    return next()
});

// 路由结束后执行
router.afterEach((route) => {});
export default router;
