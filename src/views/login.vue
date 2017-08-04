<style lang="less" scoped>
  .login-container {
      border-radius: 5px;
      background-clip: padding-box;
      margin: 180px auto;
      width: 450px;
      padding: 35px 35px 15px 35px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
  }
</style>

<template>
<Form ref="formItem" :model="formItem" :rules="ruleLogin" :label-width="80" class="login-container">
    <Form-item prop="username" label="用户名:">
        <Input type="text" v-model="formItem.username" placeholder="请输入用户名">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
    </Form-item>
    <Form-item prop="password" label="密 码:">
        <Input type="password" v-model="formItem.password" placeholder="请输入密码">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
    </Form-item>
    <Form-item style="text-align: center">
        <Button type="primary" @click="login('formItem')">登录</Button>
    </Form-item>
</Form>

</template>
<script>
export default {
    data() {
            return {
                formItem: {
                    username: '',
                    password: ''
                },
                ruleLogin: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }, {
                        type: 'string',
                        min: 6,
                        max: 20,
                        message: '密码长度在6-20位之间',
                        trigger: 'blur'
                    }]
                },
            }
        },
        methods: {
            login(name) {
                var $_this = this;
                $_this.$refs[name].validate((valid) => {
                    if (valid) {
                        var formData = JSON.stringify(this.formItem);
                        $_this.api.user.login(formData)
                            .then(response => {
                                    var data = response.data
                                    if (true) {
                                        $_this.global.logged = true
                                        $_this.global.userName = this.formItem.username;
                                        $_this.$router.push($_this.$route.query.redirect || "/")
                                    } else {
                                        $_this.$Message.error('用户名或密码错误');
                                    }
                                },
                                response => {
                                    $_this.global.logged = true
                                    $_this.global.userName = this.formItem.username;
                                    $_this.$router.push($_this.$route.query.redirect || "/")
                                    $_this.$Message.error('请求失败');
                                })
                    } else {
                        $_this.$Message.error('表单验证失败');
                    }
                });
            }
        },
        computed: {},
        mounted() {}
}
</script>
