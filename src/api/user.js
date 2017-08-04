import Vue from 'vue';

export default {
    login(params) {
        return Vue.http.post('auth', { params });
    },
    logout() { },
    regist() { },
    findByUsername(params) {
        return Vue.http.post('findByUsername', { params });
    }
}
