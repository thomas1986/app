import Vue from 'vue';
import Login from '@/views/login';

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelectorAll('.login-container input')[0].textContent)
      .to.equal('');
  });
});
