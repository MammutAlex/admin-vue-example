require('./bootstrap');

Vue.component('component-header', require('./components/Header.vue'));
new Vue({
    el: '#app',
});
