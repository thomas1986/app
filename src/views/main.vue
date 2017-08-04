<style scoped>
    .layout {
        background: #f5f7f9;
        height:100%;
    }

    .layout-ceiling {
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
        line-height: 30px;
    }

    .layout-ceiling-main {
        float: right;
        margin-right: 15px;
    }

    .layout-ceiling-main a {
        color: #fff;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        margin-left: 15px;
    }

    .layout-content {
        min-height: 200px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding:15px 10px 10px;
    }
</style>

<template>
<div class="layout">
    <div class="layout-ceiling">
        <div class="layout-logo"></div>
        <div class="layout-ceiling-main">
            <a href="#">注册</a> |
            <a href="#">登录</a> |
        </div>
    </div>
    <div class="layout-content">
        <Row>
        <Col span="4">
        <Menu :theme="theme" :active-name="menuActiveName" :open-names="menuOpenNames"
            @on-select="selectMenuItem" :accordion="true" ref="menu" width="auto">
            <template v-for="subMenu in menu">
            <Submenu :name="subMenu.name">
                <template slot="title">
                    <Icon type="subMenu.iconType"></Icon>
                    {{subMenu.value}}
                </template>

                <template v-for="item in subMenu.items">
                <Menu-item :name="item.name">
                    <Icon :type="item.iconType"></Icon>
                    {{item.value}}
                </Menu-item>
                </template>
            </Submenu >
            </template>
        </Menu>
        </Col>

        <Col span="20">
        <div class="layout-content-main">
            <router-view></router-view>
        </div>
        </Col>
        </Row>
    </div>
</div>
</template>

<script>
import pathToRegexp from "path-to-regexp";

export default {
    data() {
        return {
            theme: 'light',
            menuActiveName: "",
            menuOpenNames: [],
            //  菜单配置项
            menu: [{
                name: "main",
                value: "个人中心",
                iconType: "ios-navigate",
                items: [{
                    name: "/main/user",
                    value: "用户",
                    iconType: "person",
                    match:'/main/user*'
                }]
            }]
        }
    },
    methods: {
        selectMenuItem(key) {
            this.$router.push(key);
        },
        // 根据页面url选中菜单
        activeMenu(){
            var path = this.$route.path;
            var keys = []
            var paths = path.substr(1).split("/");
            this.menu.every((subMenu) => {
                subMenu.items.every((item) => {
                    var re = pathToRegexp(item.match, keys)
                    if (re.test(path)) {
                       this.menuActiveName = item.name;
                       this.menuOpenNames.splice(0, 1, subMenu.name);
                       return false;
                    }
                });
            });
        }
    }, computed: {
    }, created() {
        this.activeMenu();
    }, ready() {

    },
    mounted() {},
    watch: {
        '$route' (to, from) {
            this.activeMenu();
            this.$nextTick(() => {
                this.$refs.menu.updateOpened();
            });
        }
    }
};
</script>
