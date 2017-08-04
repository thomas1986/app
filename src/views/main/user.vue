<template>
<Form :label-width="80">
    <Form-Item label="Id:">
        <Span>{{user.id}}</Span>
    </Form-Item>

    <Form-Item label="Username:">
        <Span>{{user.username}}</Span>
    </Form-Item>
    <Form-Item label="Password:">
        <Span>{{user.password}}</Span>
    </Form-Item>
</Form>
</template>
<script>
export default {
    data() {
        return {
            user: {}
        }
    },
    created: function() {
        this.getUser()
    },
    methods: {
        getUser() {
            var _this = this;
            this.api.user.findByUsername({
                username: 'DT_sling'
            }).then(response => {
                this.user = response.data;
            }, response => {
                console.log(response.data)
            })
        }
    }
}
</script>
